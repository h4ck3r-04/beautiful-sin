import ctypes


class Aquatone:
    def __init__(self):
        self.aquatone = ctypes.CDLL('aquatone.so')

        # isUrl Function
        self.aquatone.isUrl.argtypes = [ctypes.c_char_p]
        self.aquatone.isUrl.restype = ctypes.c_bool

        # hasSupportedScheme Function
        self.aquatone.hasSupportedScheme.argtypes = [ctypes.c_char_p]
        self.aquatone.hasSupportedScheme.restype = ctypes.c_bool

        # initSession Function
        self.aquatone.initSession.restype = ctypes.c_char_p

    def isUrl(self, url):
        return self.aquatone.isUrl(url.encode('utf-8'))

    def hasSupportedScheme(self, url):
        return self.aquatone.hasSupportedScheme(url.encode('utf-8'))

    def initSession(self):
        return self.aquatone.initSession()
