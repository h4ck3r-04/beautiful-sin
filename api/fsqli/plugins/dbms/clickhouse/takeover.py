#!/usr/bin/env python

"""
Copyright (c) 2006-2024 fsqli developers (https://fsqli.org/)
See the file 'LICENSE' for copying permission
"""

from lib.core.exception import FsqliUnsupportedFeatureException
from plugins.generic.takeover import Takeover as GenericTakeover

class Takeover(GenericTakeover):
    def osCmd(self):
        errMsg = "on ClickHouse it is not possible to execute commands"
        raise FsqliUnsupportedFeatureException(errMsg)

    def osShell(self):
        errMsg = "on ClickHouse it is not possible to execute commands"
        raise FsqliUnsupportedFeatureException(errMsg)

    def osPwn(self):
        errMsg = "on ClickHouse it is not possible to establish an "
        errMsg += "out-of-band connection"
        raise FsqliUnsupportedFeatureException(errMsg)

    def osSmb(self):
        errMsg = "on ClickHouse it is not possible to establish an "
        errMsg += "out-of-band connection"
        raise FsqliUnsupportedFeatureException(errMsg)
