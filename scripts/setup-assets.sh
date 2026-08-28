#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public/assets"
IMG="$PUBLIC/images"
VID="$PUBLIC/videos"

mkdir -p "$IMG/design" "$IMG/design/school-at-home" "$IMG/design/attn-ceremony" "$IMG/s-creme" "$VID"

copy() {
  local src="$1"
  local dest="$2"
  if [[ -f "$src" ]]; then
    cp "$src" "$dest"
    echo "  copied: $(basename "$dest")"
  else
    echo "  missing: $src" >&2
  fi
}

echo "Setting up public assets..."

# Logo
LOGO=$(ls "$ROOT"/*chevrecheese_logo.png 2>/dev/null | head -1)
copy "$LOGO" "$PUBLIC/logo.png"

# Design homepage thumbnails
copy "$ROOT/design/john&shannon_evite.png" "$IMG/design/john-shannon-evite.png"
copy "$ROOT/design/school@home/logo print background.png" "$IMG/design/school-at-home-thumb.png"
copy "$ROOT/design/attn ceremony/Ceremony Cover and Back.png" "$IMG/design/attn-ceremony-thumb.png"

# School at home images
while IFS= read -r -d '' f; do
  base=$(basename "$f" | tr ' @' '-' | tr '[:upper:]' '[:lower:]')
  copy "$f" "$IMG/design/school-at-home/$base"
done < <(find "$ROOT/design/school@home" -maxdepth 1 -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

# Attn ceremony images
while IFS= read -r -d '' f; do
  base=$(basename "$f" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
  copy "$f" "$IMG/design/attn-ceremony/$base"
done < <(find "$ROOT/design/attn ceremony" -maxdepth 1 -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

# s.creme images
while IFS= read -r -d '' f; do
  base=$(basename "$f" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
  copy "$f" "$IMG/s-creme/$base"
done < <(find "$ROOT/s.creme" -maxdepth 1 -type f -iname '*.png' -print0)

# Chainmaille video + poster
copy "$ROOT/chainmaille/IMG_3627.mov" "$VID/chainmaille.mov"
copy "$ROOT/chainmaille/IMG_5466.jpeg" "$IMG/chainmaille-poster.jpg"

echo "Done."
