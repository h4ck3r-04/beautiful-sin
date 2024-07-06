from __future__ import absolute_import
from pwntools.data.elf import fmtstr
from pwntools.data.elf import relro
from pwntools.data.elf import ret2dlresolve

import os
path = os.path.dirname(__file__)

def get(x):
    return os.path.join(path, x)
