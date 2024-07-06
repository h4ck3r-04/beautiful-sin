# -*- coding:utf-8 -*-
"""
Encode shellcode to avoid input filtering and impress your friends!
"""
from __future__ import absolute_import

from pwntools.encoders import amd64
from pwntools.encoders import arm
from pwntools.encoders import i386
from pwntools.encoders import mips
from pwntools.encoders.encoder import Encoder
from pwntools.encoders.encoder import alphanumeric
from pwntools.encoders.encoder import encode
from pwntools.encoders.encoder import line
from pwntools.encoders.encoder import null
from pwntools.encoders.encoder import printable
from pwntools.encoders.encoder import scramble
