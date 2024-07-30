package handlers

import (
	"net/http"

	"github.com/h4ck3r-04/web-check/checks"
)

func HandleBlockLists(b *checks.BlockList) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		rawURL, err := extractURL(r)
		if err != nil {
			JSONError(w, ErrMissingURLParameter, http.StatusBadRequest)
			return
		}
		list := b.BlockedServers(r.Context(), rawURL.Hostname())
		JSON(w, list, http.StatusOK)
	})
}
