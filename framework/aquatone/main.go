package main

/*
#include <stdint.h>
#include <stdbool.h>
#include <stdlib.h>
*/
import "C"
import (
	"net/url"

	"github.com/h4ck3r-04/aquatone/core"
)

var (
	sess *core.Session
	err  error
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

//export hasSupportedScheme
func hasSupportedScheme(s *C.char) C.bool {
	str := C.GoString(s)
	u, err := url.ParseRequestURI(str)
	if err != nil {
		return C.bool(false)
	}
	if u.Scheme == "http" || u.Scheme == "https" {
		return C.bool(true)
	}
	return C.bool(false)
}

//export initSession
func initSession() *C.char {
	sess, err = core.NewSession()
	if err != nil {
		return C.CString(err.Error())
	}
	return nil
}

func main() {}
