<%
import collections
import pwntools.abi
import pwntools.constants
import pwntools.shellcraft
import six
%>
<%docstring>setgroups(n, groups) -> str

Invokes the syscall setgroups.

See 'man 2 setgroups' for more information.

Arguments:
    n(size_t): n
    groups(gid_t*): groups
Returns:
    int
</%docstring>
<%page args="n=0, groups=0"/>
<%
    abi = pwntools.abi.ABI.syscall()
    stack = abi.stack
    regs = abi.register_arguments[1:]
    allregs = pwntools.shellcraft.registers.current()

    can_pushstr = []
    can_pushstr_array = []

    argument_names = ['n', 'groups']
    argument_values = [n, groups]

    # Load all of the arguments into their destination registers / stack slots.
    register_arguments = dict()
    stack_arguments = collections.OrderedDict()
    string_arguments = dict()
    dict_arguments = dict()
    array_arguments = dict()
    syscall_repr = []

    for name, arg in zip(argument_names, argument_values):
        if arg is not None:
            syscall_repr.append('%s=%s' % (name, pwntools.shellcraft.pretty(arg, False)))

        # If the argument itself (input) is a register...
        if arg in allregs:
            index = argument_names.index(name)
            if index < len(regs):
                target = regs[index]
                register_arguments[target] = arg
            elif arg is not None:
                stack_arguments[name] = arg

        # The argument is not a register.  It is a string value, and we
        # are expecting a string value
        elif name in can_pushstr and isinstance(arg, (six.binary_type, six.text_type)):
            if isinstance(arg, six.text_type):
                arg = arg.encode('utf-8')
            string_arguments[name] = arg

        # The argument is not a register.  It is a dictionary, and we are
        # expecting K:V paris.
        elif name in can_pushstr_array and isinstance(arg, dict):
            array_arguments[name] = ['%s=%s' % (k,v) for (k,v) in arg.items()]

        # The arguent is not a register.  It is a list, and we are expecting
        # a list of arguments.
        elif name in can_pushstr_array and isinstance(arg, (list, tuple)):
            array_arguments[name] = arg

        # The argument is not a register, string, dict, or list.
        # It could be a constant string ('O_RDONLY') for an integer argument,
        # an actual integer value, or a constant.
        else:
            index = argument_names.index(name)
            if index < len(regs):
                target = regs[index]
                register_arguments[target] = arg
            elif arg is not None:
                stack_arguments[name] = arg

    # Some syscalls have different names on various architectures.
    # Determine which syscall number to use for the current architecture.
    for syscall in ['SYS_setgroups']:
        if hasattr(pwntools.constants, syscall):
            break
    else:
        raise Exception("Could not locate any syscalls: %r" % ['SYS_setgroups'])
%>
    /* setgroups(${', '.join(syscall_repr)}) */
%for name, arg in string_arguments.items():
    ${pwntools.shellcraft.pushstr(arg, append_null=(b'\x00' not in arg))}
    ${pwntools.shellcraft.mov(regs[argument_names.index(name)], abi.stack)}
%endfor
%for name, arg in array_arguments.items():
    ${pwntools.shellcraft.pushstr_array(regs[argument_names.index(name)], arg)}
%endfor
%for name, arg in stack_arguments.items():
    ${pwntools.shellcraft.push(arg)}
%endfor
    ${pwntools.shellcraft.setregs(register_arguments)}
    ${pwntools.shellcraft.syscall(syscall)}
