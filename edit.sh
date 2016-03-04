#!/bin/bash
set -e

scriptdir="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"

"$scriptdir/cat.js" "$@" |vipe |"$scriptdir/write.js"
