package handlers

import (
	"net/http"

	"github.com/h4ck3r-04/web-check/checks"
)

func HandleGetIP(i *checks.NetIp) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		rawURL, err := extractURL(r)
		if err != nil {
			JSONError(w, ErrMissingURLParameter, http.StatusBadRequest)
			return
		}

		result, err := i.GetIp(r.Context(), rawURL.Hostname())
		if err != nil {
			JSONError(w, err, http.StatusInternalServerError)
			return
		}

		JSON(w, result, http.StatusOK)
	})
}
