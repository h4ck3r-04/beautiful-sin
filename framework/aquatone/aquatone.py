import ctypes

class Aquatone:
  def __init__(self):
    self.aquatone = ctypes.CDLL('aquatone.so')

    self.aquatone.isUrl.argtypes = [ctypes.c_char_p]
    self.aquatone.isUrl.restype = ctypes.c_bool

  def isUrl(self, url):
    return self.aquatone.isUrl(url.encode('utf-8'))