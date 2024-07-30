package checks

import (
	"context"
	"net"
	"testing"

	"github.com/h4ck3r-04/web-check/checks/clients/ip"
	"github.com/stretchr/testify/assert"
)

func TestLookup(t *testing.T) {
	t.Parallel()

	n := NewNetIp(ip.LookupFunc(func(ctx context.Context, network string, host string) ([]net.IP, error) {
		return []net.IP{net.ParseIP("216.58.201.110")}, nil
	}))
	actual, err := n.GetIp(context.Background(), "google.com")
	assert.NoError(t, err)

	assert.Contains(t, actual, IpAddress{Address: net.ParseIP("216.58.201.110"), Family: 4})
}
