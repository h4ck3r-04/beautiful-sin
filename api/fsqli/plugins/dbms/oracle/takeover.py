#!/usr/bin/env python

"""
Copyright (c) 2006-2024 fsqli developers (https://fsqli.org/)
See the file 'LICENSE' for copying permission
"""

from lib.core.exception import FsqliUnsupportedFeatureException
from plugins.generic.takeover import Takeover as GenericTakeover

class Takeover(GenericTakeover):
    def osCmd(self):
        errMsg = "Operating system command execution functionality not "
        errMsg += "yet implemented for Oracle"
        raise FsqliUnsupportedFeatureException(errMsg)

    def osShell(self):
        errMsg = "Operating system shell functionality not yet "
        errMsg += "implemented for Oracle"
        raise FsqliUnsupportedFeatureException(errMsg)

    def osPwn(self):
        errMsg = "Operating system out-of-band control functionality "
        errMsg += "not yet implemented for Oracle"
        raise FsqliUnsupportedFeatureException(errMsg)

    def osSmb(self):
        errMsg = "One click operating system out-of-band control "
        errMsg += "functionality not yet implemented for Oracle"
        raise FsqliUnsupportedFeatureException(errMsg)
