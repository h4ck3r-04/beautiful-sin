import ctypes

lib_path = 'aquatone.so'

lib = ctypes.CDLL(lib_path)

lib.multiplication.argtypes = (ctypes.c_int, ctypes.c_int)
lib.multiplication.restype = ctypes.c_int

a = 5
b = 4
result = lib.multiplication(a, b)
print(f"Result of multiplication: {result}")

lib.add.argtypes = (ctypes.c_int, ctypes.c_int)
lib.add.restype = ctypes.c_int


a = 5
b = 3
result = lib.add(a, b)
print(result)