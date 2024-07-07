"""The pwntools is not a big truck! It's a series of tubes!

This is our library for talking to sockets, processes, ssh connections etc.
Our goal is to be able to use the same API for e.g. remote TCP servers, local
TTY-programs and programs run over over SSH.

It is organized such that the majority of the functionality is implemented
in :class:`pwntools.tubes.tube`. The remaining classes should only implement
just enough for the class to work and possibly code pertaining only to
that specific kind of tube.
"""
from __future__ import absolute_import

from pwntools.tubes import listen
from pwntools.tubes import process
from pwntools.tubes import remote
from pwntools.tubes import serialtube
from pwntools.tubes import server
from pwntools.tubes import sock
from pwntools.tubes import ssh
from pwntools.tubes import tube

__all__ = [
    'tube',
    'sock',
    'remote',
    'listen',
    'process',
    'serialtube',
    'server',
    'ssh']
