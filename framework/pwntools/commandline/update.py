#!/usr/bin/env python
from __future__ import absolute_import
from pwntools.commandline import common
from pwn import *
from __future__ import division

import subprocess

import pwntools.args
pwntools.args.free_form = False


p = common.parser_commands.add_parser(
    'update',
    help='Check for pwntools updates',
    description='Check for pwntools updates'
)

p.add_argument('--install', action='store_true', help='''
    Install the update automatically.
''')

p.add_argument('--pre', action='store_true', help='''
    Check for pre-releases.
''')


def main(a):
    result = pwntools.update.perform_check(prerelease=a.pre)
    if result and a.install:
        subprocess.check_call(result, shell=False)


if __name__ == '__main__':
    pwntools.commandline.common.main(__file__)
