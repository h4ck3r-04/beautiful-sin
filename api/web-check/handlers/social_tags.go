package handlers

import (
	"net/http"

	"github.com/h4ck3r-04/web-check/checks"
)

func HandleGetSocialTags(s *checks.SocialTags) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		rawURL, err := extractURL(r)
		if err != nil {
			JSONError(w, ErrMissingURLParameter, http.StatusBadRequest)
			return
		}
		tags, err := s.GetSocialTags(r.Context(), rawURL.String())
		if err != nil {
			JSONError(w, err, http.StatusInternalServerError)
			return
		}
		JSON(w, tags, http.StatusOK)
	})
}
