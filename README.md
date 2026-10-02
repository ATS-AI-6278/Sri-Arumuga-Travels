# Sri Arumuga Travels

Marketing website for **Sri Arumuga Travels** — small-car / sedan travel from **Srivilliputtur, Tamil Nadu** to destinations across India.

The site is a conversion-focused single-page experience: honest local copy, Call / WhatsApp / enquiry CTAs (no fake booking backend), warm linen + terracotta branding, and cinematic hero / fleet photography.

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

Copy `.env.example` to `.env` only if you need overrides. All variables are optional and public (`VITE_*`).

```bash
cp .env.example .env
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | No | Absolute site origin for canonical / Open Graph URLs when you deploy |

Do **not** put phone numbers, WhatsApp tokens, or other secrets in env files — contact details live in `src/lib/contact.ts`.

## Project notes

- **Conversion model:** Call · WhatsApp · on-page enquiry form (WhatsApp handoff). No invented prices, ratings, or live booking API.
- **Design:** Warm linen (`#F6F1E8`) + terracotta accent; Fraunces + Source Sans 3; mobile sticky CTAs; `prefers-reduced-motion` respected.
- **Hero / fleet:** Full-bleed scenic photography of a dark grey Etios-class sedan (see credits below). Not a floating cutout on cream.

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
