package checks

import (
	"context"
	"net/http"
	"testing"

	"github.com/h4ck3r-04/web-check/testutils"
	"github.com/stretchr/testify/assert"
)

func TestCarbonHtmlSize(t *testing.T) {
	t.Parallel()
	const htmlBody = `<html><body>Test</body></html>`
	var size = len(htmlBody)
	client := testutils.MockClient(testutils.Response(http.StatusOK, []byte(htmlBody)))
	c := NewCarbon(client)
	size, err := c.HtmlSize(context.TODO(), "/carbon")
	assert.NoError(t, err)
	assert.Equal(t, len(htmlBody), size)
}
