#/usr/bin/env bash

# source ./extra/shutils/autocompletion.sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
WORDLIST=`python "$DIR/../../fsqli.py" -hh | grep -Eo '\s\--?\w[^ =,]*' | grep -vF '..' | paste -sd "" -`

complete -W "$WORDLIST" fsqli
complete -W "$WORDLIST" ./fsqli.py
