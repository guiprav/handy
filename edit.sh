#!/bin/bash
set -e

scriptdir="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"

tmp_handy="tmp.handy.$$"

"$scriptdir/cat.js" "$@" >"$tmp_handy"

vipe <"$tmp_handy" |"$scriptdir/write.js" "$tmp_handy"

# TODO: Trap.
rm "$tmp_handy"
