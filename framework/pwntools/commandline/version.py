#!/usr/bin/env python
from __future__ import absolute_import
from pwntools.commandline import common
from pwn import *
from __future__ import division

import os
import subprocess

import pwntools.args
pwntools.args.free_form = False


parser = common.parser_commands.add_parser(
    'version',
    help='Pwntools version',
    description='Pwntools version'
)


def main(a):
  version = pwntools.version

  git_root = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
  if os.path.exists(os.path.join(git_root, '.git')):
    gitver = subprocess.check_output(
        ['git', '-C', git_root, 'log', '-1', '--format=%h (%cr)'])
    branch = subprocess.check_output(
        ['git', '-C', git_root, 'rev-parse', '--abbrev-ref', 'HEAD'])
    version = '%s-%s-%s' % (version, branch.decode().strip(), gitver.decode())

  log.info("Pwntools v%s" % version)


if __name__ == '__main__':
  pwntools.commandline.common.main(__file__)
