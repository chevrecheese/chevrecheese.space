#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$ROOT/public/assets"
IMG="$PUBLIC/images"
VID="$PUBLIC/videos"

# Displayed photos are typically ≤~700px CSS; 1400 covers retina. JPEG quality 85 for photos.
WEB_MAX=1400
WEB_QUALITY=85

mkdir -p "$IMG/design" "$IMG/design/school-at-home" "$IMG/design/attn-ceremony" "$IMG/s-creme" "$IMG/chainmaille" "$IMG/about" "$VID"

have() { command -v "$1" >/dev/null 2>&1; }

copy() {
  local src="$1"
  local dest="$2"
  if [[ -n "$src" && -f "$src" ]]; then
    mkdir -p "$(dirname "$dest")"
    cp "$src" "$dest"
    echo "  copied: $(basename "$dest")"
  else
    echo "  missing: ${src:-"(empty path)"}" >&2
  fi
}

# Max dimension resize (longest side). Never upscales. Falls back to plain copy.
# Optional 4th arg: JPEG quality 1–100 (default 78).
resize_max() {
  local src="$1"
  local dest="$2"
  local max="${3:-1600}"
  local quality="${4:-78}"
  mkdir -p "$(dirname "$dest")"

  # Prefer Pillow / ImageMagick: bake EXIF orientation into pixels.
  # `sips -Z` can emit black frames for some iPhone JPEGs with orientation tags.
  if have python3 && python3 -c '
import sys
from pathlib import Path
try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit(2)
src, dest, max_s, q = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
im = ImageOps.exif_transpose(Image.open(src))
w, h = im.size
long = max(w, h)
if long > max_s:
    scale = max_s / long
    im = im.resize((round(w * scale), round(h * scale)), Image.Resampling.LANCZOS)
if Path(dest).suffix.lower() in {".jpg", ".jpeg"}:
    if im.mode not in ("RGB", "L"):
        im = im.convert("RGB")
    im.save(dest, "JPEG", quality=q, optimize=True)
else:
    im.save(dest)
' "$src" "$dest" "$max" "$quality"
  then
    echo "  copied: $(basename "$dest") (resized)"
    return
  fi

  if have magick; then
    case "$dest" in
      *.jpg|*.jpeg)
        magick "$src" -auto-orient -strip -resize "${max}x${max}>" -quality "$quality" "$dest"
        ;;
      *)
        magick "$src" -auto-orient -strip -resize "${max}x${max}>" "$dest"
        ;;
    esac
    echo "  copied: $(basename "$dest") (resized)"
    return
  elif have convert; then
    case "$dest" in
      *.jpg|*.jpeg)
        convert "$src" -auto-orient -strip -resize "${max}x${max}>" -quality "$quality" "$dest"
        ;;
      *)
        convert "$src" -auto-orient -strip -resize "${max}x${max}>" "$dest"
        ;;
    esac
    echo "  copied: $(basename "$dest") (resized)"
    return
  fi

  # Skip resize when already within max (sips -Z can upscale; avoid that).
  local dims w h long
  dims=$(image_size "$src" || true)
  if [[ -n "$dims" ]]; then
    w=${dims%% *}
    h=${dims##* }
    long=$(( w > h ? w : h ))
    if (( long <= max )); then
      case "$dest" in
        *.jpg|*.jpeg)
          if have sips; then
            sips -s format jpeg -s formatOptions "$quality" "$src" --out "$dest" >/dev/null
            echo "  copied: $(basename "$dest") (recompressed)"
            return
          fi
          ;;
      esac
      cp "$src" "$dest"
      echo "  copied: $(basename "$dest")"
      return
    fi
  fi

  if have sips; then
    local tmp
    tmp="$(mktemp "${TMPDIR:-/tmp}/resize_max.XXXXXX.jpg")"
    sips -s format jpeg "$src" --out "$tmp" >/dev/null
    sips -Z "$max" "$tmp" --out "$dest" >/dev/null
    case "$dest" in
      *.jpg|*.jpeg)
        sips -s format jpeg -s formatOptions "$quality" "$dest" --out "$dest" >/dev/null
        ;;
    esac
    rm -f "$tmp"
    echo "  copied: $(basename "$dest") (resized)"
  else
    cp "$src" "$dest"
    echo "  copied: $(basename "$dest") (no resizer; raw copy)"
  fi
}

image_size() {
  # Prints "WIDTH HEIGHT" for an image, or empty on failure.
  local src="$1"
  if have sips; then
    local w h
    w=$(sips -g pixelWidth "$src" 2>/dev/null | awk '/pixelWidth/{print $2}')
    h=$(sips -g pixelHeight "$src" 2>/dev/null | awk '/pixelHeight/{print $2}')
    [[ -n "$w" && -n "$h" ]] && echo "$w $h"
  elif have magick; then
    magick identify -format "%w %h" "$src" 2>/dev/null
  elif have identify; then
    identify -format "%w %h" "$src" 2>/dev/null
  fi
}

# Center-crop (or north-crop) to exact WxH.
crop_to() {
  local src="$1"
  local dest="$2"
  local w="$3"
  local h="$4"
  if have sips; then
    sips -c "$h" "$w" "$src" --out "$dest" >/dev/null
  elif have magick; then
    magick "$src" -gravity North -crop "${w}x${h}+0+0" +repage "$dest"
  elif have convert; then
    convert "$src" -gravity North -crop "${w}x${h}+0+0" +repage "$dest"
  else
    return 1
  fi
}

echo "Setting up public assets..."

# Logo (nav; keep sharp but not oversized)
shopt -s nullglob
LOGO_CANDIDATES=("$ROOT"/*chevrecheese_logo_crop.png)
shopt -u nullglob
if ((${#LOGO_CANDIDATES[@]})); then
  resize_max "${LOGO_CANDIDATES[0]}" "$PUBLIC/logo.png" 800
else
  echo "  missing: chevrecheese_logo_crop.png" >&2
fi

# Design homepage thumbnails
EVITE_SRC="$ROOT/design/2_john shannon evite.png"
resize_max "$EVITE_SRC" "$IMG/design/john-shannon-evite.png" "$WEB_MAX" "$WEB_QUALITY"
resize_max "$ROOT/design/school@home/logo print background.png" "$IMG/design/school-at-home-thumb.png" "$WEB_MAX" "$WEB_QUALITY"
resize_max "$ROOT/design/attn ceremony/Ceremony Cover and Back.png" "$IMG/design/attn-ceremony-thumb.png" "$WEB_MAX" "$WEB_QUALITY"

# Crop school@home cover to the same aspect as the wedding evite
if [[ -f "$IMG/design/school-at-home-thumb.png" && -f "$IMG/design/john-shannon-evite.png" ]]; then
  evite_dims=$(image_size "$IMG/design/john-shannon-evite.png" || true)
  school_dims=$(image_size "$IMG/design/school-at-home-thumb.png" || true)
  if [[ -n "$evite_dims" && -n "$school_dims" ]]; then
    evite_w=${evite_dims%% *}
    evite_h=${evite_dims##* }
    school_w=${school_dims%% *}
    crop_h=$(( school_w * evite_h / evite_w ))
    if crop_to "$IMG/design/school-at-home-thumb.png" "$IMG/design/school-at-home-thumb.png" "$school_w" "$crop_h"; then
      echo "  cropped: school-at-home-thumb.png to ${school_w}x${crop_h}"
    else
      echo "  skip crop: no sips/ImageMagick available" >&2
    fi
  else
    echo "  skip crop: could not read image dimensions" >&2
  fi
fi

# School at home images (skip layout reference templates + mobile comps)
mkdir -p "$IMG/design/school-at-home"
rm -f "$IMG/design/school-at-home/"*
while IFS= read -r -d '' f; do
  base=$(basename "$f")
  case "$base" in
    template_*.png|mobile*.png|copy.txt) continue ;;
  esac
  dest=$(echo "$base" | tr ' @' '-' | tr '[:upper:]' '[:lower:]' | sed 's/\.jpeg$/.jpg/')
  # Tiny logo mark stays as-is; photos get resized for web
  if [[ "$dest" == "logo.png" ]]; then
    copy "$f" "$IMG/design/school-at-home/$dest"
  else
    resize_max "$f" "$IMG/design/school-at-home/$dest" "$WEB_MAX" "$WEB_QUALITY"
  fi
done < <(find "$ROOT/design/school@home" -maxdepth 1 -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

# Attn ceremony images
mkdir -p "$IMG/design/attn-ceremony"
rm -f "$IMG/design/attn-ceremony/"*
while IFS= read -r -d '' f; do
  base=$(basename "$f" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
  # Small UI crops stay as-is; large photos/spreads get resized
  dims=$(image_size "$f" || true)
  if [[ -n "$dims" ]]; then
    w=${dims%% *}
    h=${dims##* }
    long=$(( w > h ? w : h ))
    if (( long > WEB_MAX )); then
      resize_max "$f" "$IMG/design/attn-ceremony/$base" "$WEB_MAX" "$WEB_QUALITY"
    else
      copy "$f" "$IMG/design/attn-ceremony/$base"
    fi
  else
    resize_max "$f" "$IMG/design/attn-ceremony/$base" "$WEB_MAX" "$WEB_QUALITY"
  fi
done < <(find "$ROOT/design/attn ceremony" -maxdepth 1 -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

# s.creme images (mockups/icon are already small; large photos get resized)
mkdir -p "$IMG/s-creme"
rm -f "$IMG/s-creme/"*
while IFS= read -r -d '' f; do
  base=$(basename "$f" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
  dims=$(image_size "$f" || true)
  if [[ -n "$dims" ]]; then
    w=${dims%% *}
    h=${dims##* }
    long=$(( w > h ? w : h ))
    if (( long > WEB_MAX )); then
      resize_max "$f" "$IMG/s-creme/$base" "$WEB_MAX" "$WEB_QUALITY"
    else
      copy "$f" "$IMG/s-creme/$base"
    fi
  else
    resize_max "$f" "$IMG/s-creme/$base" "$WEB_MAX" "$WEB_QUALITY"
  fi
done < <(find "$ROOT/s.creme" -maxdepth 1 -type f -iname '*.png' -print0)

# Chainmaille images (skip huge .tif) + video
# Source names: N_alt text.ext — copy as N_slug.ext
mkdir -p "$IMG/chainmaille"
rm -f "$IMG/chainmaille/"*
while IFS= read -r -d '' f; do
  base=$(basename "$f")
  dest=$(echo "$base" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/\.jpeg$/.jpg/')
  resize_max "$f" "$IMG/chainmaille/$dest" "$WEB_MAX" "$WEB_QUALITY"
done < <(find "$ROOT/chainmaille" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)

VIDEO=$(find "$ROOT/chainmaille" -maxdepth 1 -type f -iname '*.mov' | head -1 || true)
if [[ -n "${VIDEO:-}" && -f "$VIDEO" ]]; then
  copy "$VIDEO" "$VID/chainmaille.mov"
fi

# Poster from first video frame
if [[ -n "${VIDEO:-}" && -f "$VIDEO" ]]; then
  poster_out="$IMG/chainmaille/video-poster.jpg"
  made_poster=0
  if have qlmanage && have sips; then
    qlmanage -t -s 1080 -o "$IMG" "$VIDEO" >/dev/null 2>&1 || true
    POSTER_PNG=$(find "$IMG" -maxdepth 1 -name '*.mov.png' | head -1 || true)
    if [[ -n "${POSTER_PNG:-}" && -f "$POSTER_PNG" ]]; then
      sips -s format jpeg -s formatOptions 80 "$POSTER_PNG" --out "$poster_out" >/dev/null
      rm -f "$POSTER_PNG"
      echo "  copied: video-poster.jpg (from video)"
      made_poster=1
    fi
  fi
  if [[ "$made_poster" -eq 0 ]] && have ffmpeg; then
    ffmpeg -y -i "$VIDEO" -frames:v 1 -q:v 4 "$poster_out" >/dev/null 2>&1
    echo "  copied: video-poster.jpg (from video via ffmpeg)"
    made_poster=1
  fi
  if [[ "$made_poster" -eq 0 ]]; then
    echo "  skip: video poster (need qlmanage/sips or ffmpeg)" >&2
  fi
fi

# About page assets
mkdir -p "$IMG/about"
copy "$ROOT/about/github.png" "$IMG/about/github.png"
copy "$ROOT/about/instagram.png" "$IMG/about/instagram.png"
copy "$ROOT/about/Frame_1.png" "$IMG/about/frame_1.png"
if [[ -f "$ROOT/about/shev_softserve.png" ]]; then
  resize_max "$ROOT/about/shev_softserve.png" "$IMG/about/shev-softserve.png" "$WEB_MAX" "$WEB_QUALITY"
fi

echo "Done."
