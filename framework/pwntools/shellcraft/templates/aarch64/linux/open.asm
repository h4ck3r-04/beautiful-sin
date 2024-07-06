<%
  from pwntools import shellcraft
%>
<%page args="filename, flags='O_RDONLY', mode='x3'"/>
<%docstring>
Opens a file
</%docstring>
<%
  AT_FDCWD=-100
%>
    ${shellcraft.pushstr(filename)}
    ${shellcraft.syscall('SYS_openat', AT_FDCWD, 'sp', flags, mode)}
