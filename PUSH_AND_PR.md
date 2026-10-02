# Push + PR instructions (blocker workaround)

Local work is complete on branch `feature/premium-travel-website-redesign`
(commit `2aacfed`). Remote push failed because this box has **no GitHub credentials**
(`gh` not logged in; HTTPS push asked for a username; no SSH key).

## Option A — from this machine after auth

```bash
cd /workspace/sri-arumuga-travels
gh auth login
# or: export GH_TOKEN=ghp_...
git push -u origin feature/premium-travel-website-redesign
gh pr create --base main --head feature/premium-travel-website-redesign \
  --title "Premium travel website redesign for Sri Arumuga Travels" \
  --body "$(cat <<'BODY'
## Summary
Rebuilds the site as a premium, trustworthy travel brand for small-car/taxi journeys from Srivilliputtur to anywhere in India.

## Highlights
- Conversion hero with Call / WhatsApp / Enquiry
- Honest IA: Services, Destinations, Trust, Story, Enquiry
- Enquiry form with validation, loading, success, and error states (WhatsApp handoff — no fake booking backend)
- Sticky mobile CTAs; LocalBusiness JSON-LD; prefers-reduced-motion
- Desktop-only lazy Three.js cinematic backdrop (kept Etios asset, removed Studio Inspection gimmick)

## Verification
- `bun install`
- `bun run lint` (tsc --noEmit) — pass
- `bun run build` — pass
BODY
)"
```

## Option B — apply patch on your laptop

Artifacts on the box:

- `/workspace/sri-arumuga-travels/` — full local git repo on the feature branch
- `/workspace/sri-arumuga-travels-premium-redesign.patch` — format-patch from `main`
- `/workspace/sri-arumuga-travels-redesign-src.tgz` — source tarball (no node_modules)

```bash
git clone https://github.com/ATS-AI-6278/Sri-Arumuga-Travels.git
cd Sri-Arumuga-Travels
git checkout -b feature/premium-travel-website-redesign
git apply /path/to/sri-arumuga-travels-premium-redesign.patch
# or unpack the tgz over a clean tree
bun install && bun run lint && bun run build
git add -A && git commit -m "Rebuild Sri Arumuga Travels as a premium Srivilliputtur travel brand site"
git push -u origin feature/premium-travel-website-redesign
gh pr create --base main --head feature/premium-travel-website-redesign \
  --title "Premium travel website redesign for Sri Arumuga Travels"
```

Do **not** merge until reviewed.
