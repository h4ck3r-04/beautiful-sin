package main

/*
#include <stdint.h>
#include <stdbool.h>
*/
import "C"
import (
	"net/url"
)

//export isUrl
func isUrl(s *C.char) C.bool {
	str := C.GoString(s)
	u, err := url.ParseRequestURI(str)
	if err != nil {
		return C.bool(false)
	}
	if u.Scheme == "" {
		return C.bool(false)
	}
	return C.bool(true)
}

func main() {}
