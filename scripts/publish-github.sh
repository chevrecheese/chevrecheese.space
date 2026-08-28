#!/usr/bin/env bash
# Publish chevrecheese.space to GitHub Pages.
# Prerequisites: gh auth login (run once)

set -euo pipefail

REPO_NAME="${1:-chevrecheese.space}"
GH="${GH:-/opt/homebrew/bin/gh}"

if ! "$GH" auth status &>/dev/null; then
  echo "Not logged in to GitHub. Run:"
  echo "  $GH auth login"
  exit 1
fi

cd "$(dirname "$0")/.."

if ! git remote get-url origin &>/dev/null; then
  echo "Creating GitHub repo: $REPO_NAME"
  "$GH" repo create "$REPO_NAME" --public --source=. --remote=origin --push
else
  echo "Pushing to origin..."
  git push -u origin main
fi

echo ""
echo "Next steps (one-time):"
echo "  1. Open https://github.com/$( "$GH" api user -q .login )/$REPO_NAME/settings/pages"
echo "  2. Source: GitHub Actions"
echo "  3. Custom domain: chevrecheese.space"
echo "  4. Enable Enforce HTTPS"
echo ""
echo "Spaceship DNS for chevrecheese.space:"
echo "  A records @ → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153"
echo "  CNAME www → chevrecheese.github.io"
