# SEO Phase 2 — P0 fixes (soft-404 + prerender)

**Date:** 2026-10-02 (Asia/Calcutta)  
**Project:** `/workspace/sri-arumuga-travels`  
**Scope:** Fix P0 soft-404 and empty CSR body. No deploy. No new location/service doorway pages. No invented business facts.

---

## What changed

### 1. Soft-404 (I-02)

- **Removed** the catch-all SPA rewrite in `vercel.json` that sent every extensionless unknown path to `/index.html` with HTTP 200.
- **Added** branded `public/404.html` (copied to `dist/404.html` on build) with:
  - `meta robots=noindex, follow`
  - Link home (`/`)
  - Call / WhatsApp CTAs using phones from `src/lib/contact.ts` (`9894220028`, `8667669560`)
- Static assets remain filesystem-served: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/manifest.webmanifest`, `/assets/*`, images, etc.
- Site remains a **single page** at `/` (hash sections only). No client router — removing the rewrite does not break real routes.

### 2. Prerender crawlable `/` HTML (I-01)

- **Vite plugin** `scripts/prerenderHomePlugin.ts` + helper `src/lib/crawlableHome.ts`.
- At HTML transform / build, injects into `#root`:
  - Visible English copy: H1 (Srivilliputtur), services, destinations, trust, story, **FAQ**, enquire/contact
  - `application/ld+json` graph aligned with `SeoSchema.tsx` (LocalBusiness/TravelAgency, WebSite, WebPage, FAQPage)
- React `createRoot` still replaces `#root` on mount (CSR UX unchanged). Non-JS / first-HTML crawlers see the shell.
- Source of truth for shell text: existing `en` dictionary + `contact.ts` / `content.ts` — no new claims.

### 3. Unchanged on purpose

- Meta / OG / Twitter / canonical / GSC tag in `index.html`
- Analytics (Clarity / GA4 hooks) — Clarity ID left in `.env.production` as `yrhkngc4c4`
- Tamil i18n toggle, design, section structure
- No deploy from this phase

---

## Files touched

| File | Change |
|------|--------|
| `vercel.json` | Dropped SPA `rewrites`; kept headers; cache rule mentions `404.html` |
| `public/404.html` | New branded 404 |
| `src/lib/crawlableHome.ts` | Build-time HTML + JSON-LD builder |
| `scripts/prerenderHomePlugin.ts` | `transformIndexHtml` inject |
| `vite.config.ts` | Register plugin; `loadEnv` for `VITE_SITE_URL` |
| `docs/SEO_PHASE2_P0.md` | This note |

---

## Verify locally

```bash
bun run build
# dist/index.html should contain "Srivilliputtur", H1/FAQ text, and ld+json
# dist/404.html should exist with noindex
```

After a future deploy: unknown path → **404** + custom page (not 200 homepage); `/` HTML contains crawlable copy.

---

## Residual risks

- **Vite preview** does not emulate Vercel’s `404.html` status handling the same way; trust production/Vercel for 404 status.
- **Double JSON-LD after JS:** static shell JSON-LD is removed when React mounts `#root`; client `SeoSchema` injects again — fine for JS crawlers; non-JS see build-time graph only (English).
- **No SPA deep routes:** if client routes are added later, either prerender those paths or restore a *narrow* rewrite — do not bring back a catch-all to homepage.
- **hreflang / NAP / multi-URL IA** remain Phase 2+ / owner-input (P1), not fixed here.
