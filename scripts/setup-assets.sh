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
LOGO=$(ls "$ROOT"/*chevrecheese_logo_crop.png 2>/dev/null | head -1)
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

# Chainmaille images (skip huge .tif) + video
# Note: sips can crush some iPhone Display P3 JPEGs; copy originals and let CSS size them.
mkdir -p "$IMG/chainmaille"
while IFS= read -r -d '' f; do
  base=$(basename "$f")
  case "$base" in
    "Jonathan Shevonne Jan 09 2026 (1).jpg") dest="jonathan-shevonne-1.jpg" ;;
    "Jonathan Shevonne Jan 09 2026 (2).jpg") dest="jonathan-shevonne-2.jpg" ;;
    "Jonathan Shevonne Jan 09 2026.jpg") dest="jonathan-shevonne.jpg" ;;
    *) dest=$(echo "$base" | tr '[:upper:]' '[:lower:]' | sed 's/\.jpeg$/.jpg/') ;;
  esac
  copy "$f" "$IMG/chainmaille/$dest"
done < <(find "$ROOT/chainmaille" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

copy "$ROOT/chainmaille/IMG_3627.mov" "$VID/chainmaille.mov"
# Poster from first video frame (not a still photo)
qlmanage -t -s 1080 -o "$IMG" "$ROOT/chainmaille/IMG_3627.mov" >/dev/null
if [[ -f "$IMG/IMG_3627.mov.png" ]]; then
  sips -s format jpeg -s formatOptions 80 "$IMG/IMG_3627.mov.png" --out "$IMG/chainmaille/video-poster.jpg" >/dev/null
  rm -f "$IMG/IMG_3627.mov.png"
  echo "  copied: video-poster.jpg (from video)"
else
  echo "  missing: video poster" >&2
fi

# About page assets
mkdir -p "$IMG/about"
copy "$ROOT/about/github.png" "$IMG/about/github.png"
copy "$ROOT/about/instagram.png" "$IMG/about/instagram.png"
if [[ -f "$ROOT/about/shev_softserve.png" ]]; then
  # Resize large source photo for web
  sips -Z 1600 "$ROOT/about/shev_softserve.png" --out "$IMG/about/shev-softserve.png" >/dev/null
  echo "  copied: shev-softserve.png (resized)"
fi

echo "Done."
