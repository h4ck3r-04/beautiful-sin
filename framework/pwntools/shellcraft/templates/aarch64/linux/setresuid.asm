<% from pwntools.shellcraft import common %>
<% from pwntools.shellcraft.aarch64 import mov, linux %>
<%page args="ruid=None, euid=None, suid=None"/>
<%docstring>
Args: [ruid = geteuid(), euid = ruid, suid = ruid]
    Sets real, effective and saved user ids to given values
</%docstring>

%if ruid is None:
${linux.geteuid()}
<% ruid = 'x0' %>
%endif
<%
 if euid is None: euid = ruid
 if suid is None: suid = ruid
%>

${linux.syscalls.setresuid(ruid, euid, suid)}
