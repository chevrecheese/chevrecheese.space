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
# Crop school@home cover to the same aspect as the wedding evite
if [[ -f "$IMG/design/school-at-home-thumb.png" && -f "$IMG/design/john-shannon-evite.png" ]]; then
  evite_w=$(sips -g pixelWidth "$IMG/design/john-shannon-evite.png" | awk '/pixelWidth/{print $2}')
  evite_h=$(sips -g pixelHeight "$IMG/design/john-shannon-evite.png" | awk '/pixelHeight/{print $2}')
  school_w=$(sips -g pixelWidth "$IMG/design/school-at-home-thumb.png" | awk '/pixelWidth/{print $2}')
  crop_h=$(( school_w * evite_h / evite_w ))
  sips -c "$crop_h" "$school_w" "$IMG/design/school-at-home-thumb.png" >/dev/null
  echo "  cropped: school-at-home-thumb.png to ${school_w}x${crop_h}"
fi

# School at home images (skip layout reference templates)
mkdir -p "$IMG/design/school-at-home"
rm -f "$IMG/design/school-at-home/"*
while IFS= read -r -d '' f; do
  base=$(basename "$f")
  case "$base" in
    template_*.png|copy.txt) continue ;;
  esac
  dest=$(echo "$base" | tr ' @' '-' | tr '[:upper:]' '[:lower:]' | sed 's/\.jpeg$/.jpg/')
  copy "$f" "$IMG/design/school-at-home/$dest"
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
# Source names: N_alt text.ext — copy as N_slug.ext
mkdir -p "$IMG/chainmaille"
rm -f "$IMG/chainmaille/"*
while IFS= read -r -d '' f; do
  base=$(basename "$f")
  dest=$(echo "$base" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/\.jpeg$/.jpg/')
  if [[ "$dest" == *.png ]]; then
    sips -Z 1600 "$f" --out "$IMG/chainmaille/$dest" >/dev/null
    echo "  copied: $dest (resized)"
  else
    copy "$f" "$IMG/chainmaille/$dest"
  fi
done < <(find "$ROOT/chainmaille" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)

VIDEO=$(find "$ROOT/chainmaille" -maxdepth 1 -type f -iname '*.mov' | head -1)
copy "$VIDEO" "$VID/chainmaille.mov"
# Poster from first video frame
if [[ -n "$VIDEO" && -f "$VIDEO" ]]; then
  qlmanage -t -s 1080 -o "$IMG" "$VIDEO" >/dev/null
  POSTER_PNG=$(find "$IMG" -maxdepth 1 -name '*.mov.png' | head -1)
  if [[ -n "$POSTER_PNG" && -f "$POSTER_PNG" ]]; then
    sips -s format jpeg -s formatOptions 80 "$POSTER_PNG" --out "$IMG/chainmaille/video-poster.jpg" >/dev/null
    rm -f "$POSTER_PNG"
    echo "  copied: video-poster.jpg (from video)"
  else
    echo "  missing: video poster" >&2
  fi
fi

# About page assets
mkdir -p "$IMG/about"
copy "$ROOT/about/github.png" "$IMG/about/github.png"
copy "$ROOT/about/instagram.png" "$IMG/about/instagram.png"
copy "$ROOT/about/Frame_1.png" "$IMG/about/frame_1.png"
if [[ -f "$ROOT/about/shev_softserve.png" ]]; then
  # Resize large source photo for web
  sips -Z 1600 "$ROOT/about/shev_softserve.png" --out "$IMG/about/shev-softserve.png" >/dev/null
  echo "  copied: shev-softserve.png (resized)"
fi

echo "Done."
