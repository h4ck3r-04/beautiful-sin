#!/usr/bin/env python

"""
Copyright (c) 2006-2024 fsqli developers (https://fsqli.org/)
See the file 'LICENSE' for copying permission
"""

import cProfile
import os

from lib.core.data import logger
from lib.core.data import paths

def profile(profileOutputFile=None):
    """
    This will run the program and present profiling data in a nice looking graph
    """

    if profileOutputFile is None:
        profileOutputFile = os.path.join(paths.FSQLI_OUTPUT_PATH, "fsqli_profile.raw")

    if os.path.exists(profileOutputFile):
        os.remove(profileOutputFile)

    # Start fsqli main function and generate a raw profile file
    cProfile.run("start()", profileOutputFile)

    infoMsg = "execution profiled and stored into file '%s' (e.g. 'gprof2dot -f pstats %s | dot -Tpng -o /tmp/fsqli_profile.png')" % (profileOutputFile, profileOutputFile)
    logger.info(infoMsg)
