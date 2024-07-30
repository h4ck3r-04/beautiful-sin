package checks

import (
	"net/http"
	"time"

	"github.com/h4ck3r-04/web-check/checks/clients/ip"
	"github.com/h4ck3r-04/web-check/checks/store/legacyrank"
)

type Checks struct {
	BlockList   *BlockList
	Carbon      *Carbon
	Headers     *Headers
	IpAddress   *NetIp
	LegacyRank  *LegacyRank
	LinkedPages *LinkedPages
	Rank        *Rank
	SocialTags  *SocialTags
	Tls         *Tls
}

func NewChecks() *Checks {
	client := &http.Client{
		Timeout: 5 * time.Second,
	}
	return &Checks{
		BlockList:   NewBlockList(&ip.NetDNSLookup{}),
		Carbon:      NewCarbon(client),
		Headers:     NewHeaders(client),
		IpAddress:   NewNetIp(&ip.NetLookup{}),
		LegacyRank:  NewLegacyRank(legacyrank.NewInMemoryStore()),
		LinkedPages: NewLinkedPages(client),
		Rank:        NewRank(client),
		SocialTags:  NewSocialTags(client),
		Tls:         NewTls(client),
	}
}
