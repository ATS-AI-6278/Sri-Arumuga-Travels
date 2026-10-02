# Sri Arumuga Travels

Marketing website for **Sri Arumuga Travels** — small-car / sedan travel from **Srivilliputtur, Tamil Nadu** to destinations across India.

The site is a conversion-focused experience: honest local copy, Call / WhatsApp / Email / enquiry CTAs (no fake booking backend), warm linen + terracotta branding, and cinematic hero / fleet photography.

## Stack

- [Vite](https://vitejs.dev/) 8
- [React](https://react.dev/) 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)
- [Lucide React](https://lucide.dev/) icons

Package manager: **Bun** (preferred). **npm** also works.

## Requirements

- [Bun](https://bun.sh/) ≥ 1.1 (recommended), **or** Node.js ≥ 20 with npm
- No API keys or private secrets required to run locally

## Install

```bash
# Preferred
bun install

# Or with npm
npm install
```

## Scripts

| Script | Command | Description |
| --- | --- | --- |
| **dev** | `bun run dev` / `npm run dev` | Vite dev server on `http://0.0.0.0:5173` |
| **build** | `bun run build` / `npm run build` | Typecheck (`tsc --noEmit`) + production build → `dist/` |
| **lint** | `bun run lint` / `npm run lint` | TypeScript check (`tsc --noEmit`) |
| **preview** | `bun run preview` / `npm run preview` | Serve `dist/` on `http://0.0.0.0:4173` |
| **typecheck** | `bun run typecheck` | Same as lint |
| **clean** | `bun run clean` | Remove `dist/` |

## Run locally

```bash
bun install
bun run dev
```

Open [http://localhost:5173](http://localhost:5173). The dev server binds to `0.0.0.0` so it is reachable on your LAN / forwarded ports.

Production check:

```bash
bun run lint
bun run build
bun run preview
```

## Environment

Copy `.env.example` to `.env` only if you need local overrides. All variables are optional and public (`VITE_*`). Production builds also load `.env.production` (sets `VITE_SITE_URL` only).

```bash
cp .env.example .env
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | No | Absolute site origin for canonical / Open Graph / JSON-LD (defaults to the live Vercel URL) |
| `VITE_GA4_MEASUREMENT_ID` | No | Google Analytics 4 ID (`G-XXXXXXXXXX`). Empty until you create a GA4 property |
| `VITE_CLARITY_PROJECT_ID` | No | Microsoft Clarity project ID (`yrhkngc4c4` set in `.env.production`) |
| `VITE_GSC_VERIFICATION` | No | Google Search Console HTML-tag verification token (meta `content` value only) |
| `VITE_WEB3FORMS_ACCESS_KEY` | No | Preferred: Web3Forms **public** access key for owner inbox `arumugatamilselvan@gmail.com` |
| `VITE_WEB3FORMS_ACCESS_KEY_PUBLIC` | No | Optional second free Web3Forms key for `sriviarumugatravels@gmail.com` (both inboxes) |
| `VITE_FORM_ENDPOINT` | No | Legacy/alternate public form POST URL (Formspree or Web3Forms). Prefer `VITE_WEB3FORMS_*` |
| `VITE_FORM_ACCESS_KEY` | No | Legacy Web3Forms access key when using `VITE_FORM_ENDPOINT` |

Do **not** put phone numbers, WhatsApp tokens, private API secrets, or other secrets in env files — contact details live in `src/lib/contact.ts`.

### Analytics & Search Console (after you create properties)

1. **Google Analytics 4** — create a GA4 property and web data stream for `https://sriarumugatravels.vercel.app`. Copy the Measurement ID (`G-…`).
2. **Microsoft Clarity** — project `yrhkngc4c4` is already wired. If the Clarity dashboard still shows “install”, open the live site once without an ad blocker after deploy.
3. **Google Search Console** — add the URL-prefix or domain property, choose **HTML tag** verification, and copy only the `content` token (not the full meta tag). After deploy, submit `https://sriarumugatravels.vercel.app/sitemap.xml`.
4. In the **Vercel** project → **Settings → Environment Variables**, set as needed:
   - `VITE_CLARITY_PROJECT_ID=yrhkngc4c4` (already in `.env.production` for builds from this repo)
   - `VITE_WEB3FORMS_ACCESS_KEY` / `VITE_WEB3FORMS_ACCESS_KEY_PUBLIC` (after you create free keys — see Enquiry delivery)
   - `VITE_GA4_MEASUREMENT_ID` (only after you create GA4)
   - `VITE_GSC_VERIFICATION` (already in `.env.production`)
   - (optional) `VITE_SITE_URL` if you change the live origin
5. Redeploy so Vite bakes the values into the client bundle. Never invent API keys.

## Project notes

- **Conversion model:** Call · WhatsApp · Email (both Gmails) · on-page enquiry form (WhatsApp + Web3Forms when keyed, else mailto To+Cc). No invented prices, ratings, API keys, or live booking API.
- **Design:** Warm linen (`#F6F1E8`) + terracotta accent; Fraunces + Source Sans 3; mobile sticky CTAs; `prefers-reduced-motion` respected.
- **Hero / fleet:** Full-bleed scenic photography of a dark grey Etios-class sedan (see credits below). Not a floating cutout on cream.

### Enquiry delivery (WhatsApp + both Gmails)

On **Send via WhatsApp**, the site always opens a prefilled WhatsApp handoff **and** tries to deliver the same enquiry to **both** `sriviarumugatravels@gmail.com` and `arumugatamilselvan@gmail.com`.

1. **WhatsApp** — deep link with name, phone, pickup, destination, date, passengers, message, lang, page URL, timestamp.
2. **Email (auto)** — when `VITE_WEB3FORMS_ACCESS_KEY` (and optionally `VITE_WEB3FORMS_ACCESS_KEY_PUBLIC`) is set, POSTs to Web3Forms. Free plan = **one inbox per key**, so create **two free keys** (one per Gmail) for dual delivery, **or** one key + Gmail auto-forward.
3. **Email (mailto fallback)** — if no Web3Forms key is set (or POST fails): opens the visitor’s mail app **To:** `sriviarumugatravels@gmail.com` **Cc:** `arumugatamilselvan@gmail.com` with the full enquiry body. Mailto needs the visitor’s mail app; it does not auto-deliver by itself.
4. **Call** — both numbers from `src/lib/contact.ts`.

#### Create Web3Forms keys (user action — do not invent keys)

1. Go to [https://web3forms.com](https://web3forms.com) → **Create Access Key**.
2. Primary key: use email **`arumugatamilselvan@gmail.com`** → copy the access key into Vercel env `VITE_WEB3FORMS_ACCESS_KEY` (and local `.env` if needed).
3. Second key (recommended for both inboxes on free plan): create another key with **`sriviarumugatravels@gmail.com`** → set `VITE_WEB3FORMS_ACCESS_KEY_PUBLIC`.
4. Redeploy. Until keys exist, the site still uses WhatsApp + mailto (To + Cc both addresses).

### Clarity notes

- Project ID `yrhkngc4c4` is baked into `.env.production` and early-bootstrapped in `index.html` (id `ms-clarity`). `Analytics.tsx` injects the same tag only if not already present (no double-init).
- Ad blockers / privacy tools hide Clarity. New projects can take a short time to leave the “Almost there / install” wizard — open the live site once **without** an ad blocker after deploy so Clarity can verify the first hit.
- GA4 injects only when `VITE_GA4_MEASUREMENT_ID` is set (never invented).

## Photos & credits

See [`public/PHOTO-CREDITS.txt`](public/PHOTO-CREDITS.txt).

Hero and fleet scenes are **AI-generated travel photography** created for this redesign (illustrative mood; not photos of a specific completed trip). Legacy Wikimedia-adapted cutouts may remain under `public/` for reference but are not used in the current hero/fleet UI. A short credit link also appears in the site footer.

## Branch

Active redesign work lives on:

```text
feature/premium-travel-website-redesign
```

Base the PR on your default branch (usually `main`). This README and script polish are intended to ship with that PR.

## License / usage

Private marketing site for Sri Arumuga Travels. Third-party photo licenses are listed in `public/PHOTO-CREDITS.txt`.
