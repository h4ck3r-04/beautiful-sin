package legacyrank_test

import (
	"testing"

	"github.com/h4ck3r-04/web-check/checks/store/legacyrank"
	"github.com/stretchr/testify/assert"
)

func TestInMemoryStore(t *testing.T) {
	t.Parallel()

	t.Run("get google rank", func(t *testing.T) {
		t.Parallel()
		ims := legacyrank.NewInMemoryStore()
		dr, err := ims.GetLegacyRank("google.com")
		assert.NoError(t, err, dr)
	})

	t.Run("get microsoft rank", func(t *testing.T) {
		t.Parallel()
		ims := legacyrank.NewInMemoryStore()
		dr, err := ims.GetLegacyRank("microsoft.com")
		assert.NoError(t, err, dr)
	})
}
