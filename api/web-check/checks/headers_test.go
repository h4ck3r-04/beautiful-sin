package checks

import (
	"context"
	"net/http"
	"testing"

	"github.com/h4ck3r-04/web-check/testutils"
	"github.com/stretchr/testify/assert"
)

func TestList(t *testing.T) {
	t.Parallel()

	c := testutils.MockClient(&http.Response{
		Header: http.Header{
			"Cache-Control":    {"private", "max-age=0"},
			"X-Xss-Protection": {"0"},
		},
	})
	h := NewHeaders(c)

	actual, err := h.List(context.Background(), "example.com")
	assert.NoError(t, err)

	assert.Equal(t, []string{"private", "max-age=0"}, actual["Cache-Control"])
	assert.Equal(t, []string{"0"}, actual["X-Xss-Protection"])
}
