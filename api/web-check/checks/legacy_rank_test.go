package checks

import (
	"testing"

	"github.com/h4ck3r-04/web-check/checks/store/legacyrank"
	"github.com/stretchr/testify/assert"
)

func TestLegacyRank(t *testing.T) {
	t.Parallel()

	t.Run("get rank", func(t *testing.T) {
		t.Parallel()
		lr := NewLegacyRank(legacyrank.GetterFunc(func(domain string) (int, error) {
			return 1, nil
		}))
		dr, err := lr.LegacyRank("example.com")
		assert.NoError(t, err)
		assert.Equal(t, 1, dr.Rank)
		assert.Equal(t, "example.com", dr.Domain)
	})
}
