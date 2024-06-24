package main

/*
#include <stdint.h>
*/

import "C"
import "github.com/h4ck3r-04/aquatone/multiply"

//export multiplication
func multiplication(a C.int, b C.int) C.int {
	return C.int(multiply.Multiply(int(a), int(b)))
}

//export add
func add(a C.int, b C.int) C.int {
	return a + b
}

func main() {}
