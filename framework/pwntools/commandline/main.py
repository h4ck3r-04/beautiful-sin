from __future__ import absolute_import

import sys

from pwntools.commandline import asm
from pwntools.commandline import checksec
from pwntools.commandline import common
from pwntools.commandline import constgrep
from pwntools.commandline import cyclic
from pwntools.commandline import debug
from pwntools.commandline import disasm
from pwntools.commandline import disablenx
from pwntools.commandline import elfdiff
from pwntools.commandline import elfpatch
from pwntools.commandline import errno
from pwntools.commandline import hex
from pwntools.commandline import libcdb
from pwntools.commandline import phd
from pwntools.commandline import pwnstrip
from pwntools.commandline import scramble
from pwntools.commandline import shellcraft
from pwntools.commandline import template
from pwntools.commandline import unhex
from pwntools.commandline import update
from pwntools.commandline import version
from pwntools.commandline.common import parser
from pwntools.context import context

commands = {
    'asm': asm.main,
    'checksec': checksec.main,
    'constgrep': constgrep.main,
    'cyclic': cyclic.main,
    'debug': debug.main,
    'disasm': disasm.main,
    'disablenx': disablenx.main,
    'elfdiff': elfdiff.main,
    'elfpatch': elfpatch.main,
    'errno': errno.main,
    'hex': hex.main,
    'libcdb': libcdb.main,
    'phd': phd.main,
    'pwnstrip': pwnstrip.main,
    'scramble': scramble.main,
    'shellcraft': shellcraft.main,
    'template': template.main,
    'unhex': unhex.main,
    'update': update.main,
    'version': version.main,
}


def main():
    if len(sys.argv) < 2:
        parser.print_usage()
        sys.exit()
    args = parser.parse_args()
    with context.local(log_console=sys.stderr):
        commands[args.command](args)


if __name__ == '__main__':
    main()
