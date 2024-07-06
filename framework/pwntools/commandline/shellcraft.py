from __future__ import absolute_import
from __future__ import division

import argparse
import os
import six
import sys
import types

import pwntools.args
pwntools.args.free_form = False

from pwn import *
from pwntools.commandline import common


#  ____  _          _ _                 __ _
# / ___|| |__   ___| | | ___ _ __ __ _ / _| |_
# \___ \| '_ \ / _ \ | |/ __| '__/ _` | |_| __|
#  ___) | | | |  __/ | | (__| | | (_| |  _| |_
# |____/|_| |_|\___|_|_|\___|_|  \__,_|_|  \__|

def _string(s):
    out = []
    for co in bytearray(s):
        c = chr(co)
        if co >= 0x20 and co <= 0x7e and c not in '/$\'"`':
            out.append(c)
        else:
            out.append('\\x%02x' % co)
    return '"' + ''.join(out) + '"\n'


p = common.parser_commands.add_parser(
    'shellcraft',
    help = 'Microwave shellcode -- Easy, fast and delicious',
    description = 'Microwave shellcode -- Easy, fast and delicious',
)


p.add_argument(
    '-?', '--show',
    action = 'store_true',
    help = 'Show shellcode documentation',
)

p.add_argument(
    '-o', '--out',
    metavar = 'file',
    type = argparse.FileType('wb'),
    default = getattr(sys.stdout, 'buffer', sys.stdout),
    help = 'Output file (default: stdout)',
)

p.add_argument(
    '-f', '--format',
    metavar = 'format',
    choices = ['r', 'raw',
               's', 'str', 'string',
               'c',
               'h', 'hex',
               'a', 'asm', 'assembly',
               'p',
               'i', 'hexii',
               'e', 'elf',
               'd', 'escaped',
               'default'],
    default = 'default',
    help = 'Output format (default: hex), choose from {e}lf, {r}aw, {s}tring, {c}-style array, {h}ex string, hex{i}i, {a}ssembly code, {p}reprocssed code, escape{d} hex string',
)

p.add_argument(
    'shellcode',
    nargs = '*',
    help = 'The shellcodes you want.  shellcode [args ...] [+ shellcode [args ...]]',
    type = str
)

p.add_argument(
    '-d',
    '--debug',
    help='Debug the shellcode with GDB',
    action='store_true'
)

p.add_argument(
    '--delim',
    help='Set the delimiter between multilple shellcodes',
    default='+'
)

p.add_argument(
    '-b',
    '--before',
    help='Insert a debug trap before the code',
    action='store_true'
)

p.add_argument(
    '-a',
    '--after',
    help='Insert a debug trap after the code',
    action='store_true'
)

p.add_argument(
    '-v', '--avoid',
    action='append',
    help = 'Encode the shellcode to avoid the listed bytes'
)

p.add_argument(
    '-n', '--newline',
    dest='avoid',
    action='append_const',
    const='\n',
    help = 'Encode the shellcode to avoid newlines'
)

p.add_argument(
    '-z', '--zero',
    dest='avoid',
    action='append_const',
    const='\x00',
    help = 'Encode the shellcode to avoid NULL bytes'
)

p.add_argument(
    '-r',
    '--run',
    help="Run output",
    action='store_true'
)

p.add_argument(
    '--color',
    help="Color output",
    action='store_true',
    default=sys.stdout.isatty()
)

p.add_argument(
    '--no-color',
    help="Disable color output",
    action='store_false',
    dest='color'
)

p.add_argument(
    '--syscalls',
    help="List syscalls",
    action='store_true'
)

p.add_argument(
    '--address',
    help="Load address",
    default=None
)

p.add_argument(
    '-l', '--list',
    action='store_true',
    help='List available shellcodes, optionally provide a filter'
)

p.add_argument(
    '-s', '--shared',
    action='store_true',
    help='Generated ELF is a shared library'
)

def get_template(shellcodes):
    funcs = []
    for shellcode in shellcodes:
        func = shellcraft
        cur_name = shellcode[0]
        args = []
        if len(shellcode) > 1:
            args = shellcode[1:]
        for attr in cur_name.split('.'):
            func = getattr(func, attr)
        funcs.append((cur_name, func, args))
    return funcs

def is_not_a_syscall_template(name):
    template_src = shellcraft._get_source(name)
    return '/syscalls' not in template_src

def main(args):
    delim = '+'
    if args.delim:
        delim = args.delim.strip()

    shellcodes = []
    if args.shellcode:
        current = []
        for s in args.shellcode:
            if s.strip() == delim:
                shellcodes.append(current)
                current = []
            else:
                current.append(s)
        if len(current) > 0:
            shellcodes.append(current)

    if args.list:
        templates = shellcraft.templates

        if args.shellcode:
            template_array = []
            for s in shellcodes:
                template_array.extend(list(filter(lambda a: s[0] in a, templates)))
            templates = template_array
        elif not args.syscalls:
            templates = list(filter(is_not_a_syscall_template, templates))

        print('\n'.join(templates))
        exit()

    if not args.shellcode:
        common.parser.print_usage()
        exit()

    try:
        funcs = get_template(shellcodes)
    except AttributeError:
        log.error("Unknown shellcraft template %r. Use --list to see available shellcodes." % args.shellcode)

    if args.show:
        for (name, func, _args) in funcs:
            # remove doctests
            doc = []
            in_doctest = False
            block_indent = None
            caption = None
            lines = func.__doc__.splitlines()
            i = 0
            if len(funcs) > 1:
                print('%s:' % name)
            while i < len(lines):
                line = lines[i]
                if line.lstrip().startswith('>>>'):
                    # this line starts a doctest
                    in_doctest = True
                    block_indent = None
                    if caption:
                        # delete back up to the caption
                        doc = doc[:caption - i]
                        caption = None
                elif line == '':
                    # skip blank lines
                    pass
                elif in_doctest:
                    # indentation marks the end of a doctest
                    indent = len(line) - len(line.lstrip())
                    if block_indent is None:
                        if not line.lstrip().startswith('...'):
                            block_indent = indent
                    elif indent < block_indent:
                        in_doctest = False
                        block_indent = None
                        # re-evalutate this line
                        continue
                elif line.endswith(':'):
                    # save index of caption
                    caption = i
                else:
                    # this is not blank space and we're not in a doctest, so the
                    # previous caption (if any) was not for a doctest
                    caption = None

                if not in_doctest:
                    doc.append(line)
                i += 1
            print('\n'.join(doc).rstrip())
            if len(funcs) > 1:
                print('')
        exit()

    code_array = []
    for (name, func, func_args) in funcs:
        defargs = len(six.get_function_defaults(func) or ())
        reqargs = six.get_function_code(func).co_argcount - defargs

        if len(func_args) < reqargs:
            if defargs > 0:
                log.critical('%s takes at least %d arguments' % (name, reqargs))
                sys.exit(1)
            else:
                log.critical('%s takes exactly %d arguments' % (name, reqargs))
                sys.exit(1)

        # Captain uglyness saves the day!
        for i, val in enumerate(func_args):
            try:
                func_args[i] = util.safeeval.expr(val)
            except ValueError:
                pass

        # And he strikes again!
        list(map(common.context_arg, name.split('.')))
        code_array.append(func(*func_args))

    code = "".join(code_array)

    if args.before:
        code = shellcraft.trap() + code
    if args.after:
        code = code + shellcraft.trap()

    if args.format in ['a', 'asm', 'assembly']:
        if args.color:
            from pygments import highlight
            from pygments.formatters import TerminalFormatter
            from pwntools.lexer import PwntoolsLexer

            code = highlight(code, PwntoolsLexer(), TerminalFormatter())

        print(code)
        exit()
    if args.format == 'p':
        print(cpp(code))
        exit()

    assembly = code

    vma = args.address
    if vma:
        vma = pwntools.util.safeeval.expr(vma)

    if args.format in ['e','elf']:
        args.format = 'default'
        try: os.fchmod(args.out.fileno(), 0o700)
        except OSError: pass


        if not args.avoid:
            code = read(make_elf_from_assembly(assembly, vma=vma, shared=args.shared))
        else:
            code = asm(assembly)
            code = encode(code, args.avoid)
            code = make_elf(code, vma=vma, shared=args.shared)
            # code = read(make_elf(encode(asm(code), args.avoid)))
    else:
        code = encode(asm(assembly), args.avoid)

    if args.format == 'default':
        if args.out.isatty():
            args.format = 'hex'
        else:
            args.format = 'raw'

    arch = name.split('.')[0]

    if args.debug:
        if not args.avoid:
            proc = gdb.debug_assembly(assembly, arch=arch, vma=vma)
        else:
            proc = gdb.debug_shellcode(code, arch=arch, vma=vma)
        proc.interactive()
        sys.exit(0)

    if args.run:
        proc = run_shellcode(code, arch=arch)
        proc.interactive()
        sys.exit(0)

    if args.format in ['s', 'str', 'string']:
        code = _string(code)
    elif args.format == 'c':
        code = '{' + ', '.join(map(hex, bytearray(code))) + '}' + '\n'
    elif args.format in ['h', 'hex']:
        code = pwntools.util.fiddling.enhex(code) + '\n'
    elif args.format in ['i', 'hexii']:
        code = hexii(code) + '\n'
    elif args.format in ['d', 'escaped']:
        code = ''.join('\\x%02x' % c for c in bytearray(code)) + '\n'
    if not sys.stdin.isatty():
        args.out.write(getattr(sys.stdin, 'buffer', sys.stdin).read())

    if not hasattr(code, 'decode'):
        code = code.encode()
    args.out.write(code)

if __name__ == '__main__':
    pwntools.commandline.common.main(__file__)
