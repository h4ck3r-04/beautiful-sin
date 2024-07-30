package handlers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/h4ck3r-04/web-check/checks"
	"github.com/h4ck3r-04/web-check/testutils"
	"github.com/stretchr/testify/assert"
)

func TestHandleGetRank(t *testing.T) {
	t.Parallel()

	t.Run("missing URL parameter", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/rank", nil)
		rec := httptest.NewRecorder()

		HandleGetRank(nil).ServeHTTP(rec, req)

		assert.Equal(t, http.StatusBadRequest, rec.Code)
		assert.JSONEq(t, `{"error": "missing URL parameter"}`, rec.Body.String())
	})

	t.Run("Valid request with rank found", func(t *testing.T) {
		t.Parallel()
		client := testutils.MockClient(
			testutils.ResponseJSON(http.StatusOK, checks.TrancoRanks{Ranks: []checks.TrancoRank{{Rank: 1.0}}}),
		)

		req := httptest.NewRequest("GET", "/rank?url=example.com", nil)
		rec := httptest.NewRecorder()

		HandleGetRank(checks.NewRank(client)).ServeHTTP(rec, req)

		assert.Equal(t, http.StatusOK, rec.Code)

		var responseBody checks.TrancoRanks
		json.Unmarshal(rec.Body.Bytes(), &responseBody)
		assert.Equal(t, checks.TrancoRanks{Ranks: []checks.TrancoRank{{Rank: 1.0}}}, responseBody)
	})

	t.Run("Valid request with no rank found", func(t *testing.T) {
		t.Parallel()
		client := testutils.MockClient(
			testutils.ResponseJSON(http.StatusOK, checks.TrancoRanks{Ranks: []checks.TrancoRank{}}),
		)
		req := httptest.NewRequest("GET", "/rank?url=example.com", nil)
		rec := httptest.NewRecorder()

		HandleGetRank(checks.NewRank(client)).ServeHTTP(rec, req)

		assert.Equal(t, http.StatusOK, rec.Code)

		var responseBody checks.TrancoRanks
		json.Unmarshal(rec.Body.Bytes(), &responseBody)
		assert.Equal(t, checks.TrancoRanks{Ranks: []checks.TrancoRank{}}, responseBody)
	})
}
