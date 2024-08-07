#!/usr/bin/env python

"""
Copyright (c) 2006-2024 fsqli developers (https://fsqli.org/)
See the file 'LICENSE' for copying permission
"""

from lib.core.exception import FsqliUnsupportedFeatureException
from plugins.generic.filesystem import Filesystem as GenericFilesystem

class Filesystem(GenericFilesystem):
    def readFile(self, remoteFile):
        errMsg = "on SAP MaxDB reading of files is not supported"
        raise FsqliUnsupportedFeatureException(errMsg)

    def writeFile(self, localFile, remoteFile, fileType=None, forceCheck=False):
        errMsg = "on SAP MaxDB writing of files is not supported"
        raise FsqliUnsupportedFeatureException(errMsg)
