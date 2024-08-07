#!/usr/bin/env python

"""
Copyright (c) 2006-2024 fsqli developers (https://fsqli.org/)
See the file 'LICENSE' for copying permission
"""

class FsqliBaseException(Exception):
    pass

class FsqliCompressionException(FsqliBaseException):
    pass

class FsqliConnectionException(FsqliBaseException):
    pass

class FsqliDataException(FsqliBaseException):
    pass

class FsqliFilePathException(FsqliBaseException):
    pass

class FsqliGenericException(FsqliBaseException):
    pass

class FsqliInstallationException(FsqliBaseException):
    pass

class FsqliMissingDependence(FsqliBaseException):
    pass

class FsqliMissingMandatoryOptionException(FsqliBaseException):
    pass

class FsqliMissingPrivileges(FsqliBaseException):
    pass

class FsqliNoneDataException(FsqliBaseException):
    pass

class FsqliNotVulnerableException(FsqliBaseException):
    pass

class FsqliSilentQuitException(FsqliBaseException):
    pass

class FsqliUserQuitException(FsqliBaseException):
    pass

class FsqliShellQuitException(FsqliBaseException):
    pass

class FsqliSkipTargetException(FsqliBaseException):
    pass

class FsqliSyntaxException(FsqliBaseException):
    pass

class FsqliSystemException(FsqliBaseException):
    pass

class FsqliThreadException(FsqliBaseException):
    pass

class FsqliTokenException(FsqliBaseException):
    pass

class FsqliUndefinedMethod(FsqliBaseException):
    pass

class FsqliUnsupportedDBMSException(FsqliBaseException):
    pass

class FsqliUnsupportedFeatureException(FsqliBaseException):
    pass

class FsqliValueException(FsqliBaseException):
    pass
