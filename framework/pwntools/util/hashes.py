"""
Functions for computing various hashes of files and strings.
"""
from __future__ import division

import hashlib

for _algo in hashlib.algorithms_guaranteed:
  def _closure():
    hash = hashlib.__dict__[_algo]

    def file(p):
      h = hash()
      fd = open(p, 'rb')
      while True:
        s = fd.read(4096)
        if not s:
          break
        h.update(s)
      fd.close()
      return h

    def sum(s):
      return hash(s)

    def filef(x): return file(x).digest()
    filef.__doc__ = 'Calculates the %s sum of a file' % _algo
    def sumf(x): return sum(x).digest()
    sumf.__doc__ = 'Calculates the %s sum of a string' % _algo
    def fileh(x): return file(x).hexdigest()
    fileh.__doc__ = 'Calculates the %s sum of a file; returns hex-encoded' % _algo
    def sumh(x): return sum(x).hexdigest()
    sumh.__doc__ = 'Calculates the %s sum of a string; returns hex-encoded' % _algo
    return filef, sumf, fileh, sumh
  (globals()[_algo + 'file'],
   globals()[_algo + 'sum'],
   globals()[_algo + 'filehex'],
   globals()[_algo + 'sumhex']) = _closure()
