# -*- coding: utf-8 -*-
"""
Handles file abstraction for local vs. remote (via ssh)
"""
from pwntools.filesystem.path import Path
from pwntools.filesystem.ssh import SSHPath

__all__ = ['SSHPath', 'Path']
