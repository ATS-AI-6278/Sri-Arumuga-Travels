# SEO Phase 2–9 — Information Architecture (essentials)

**Date:** 2026-10-02 (Asia/Calcutta)  
**Project:** `/workspace/sri-arumuga-travels`  
**Status:** Implemented locally. **`bun run build` passes.** **Not deployed** (parent deploys).

---

## Approach

- **react-router-dom** SPA + **static HTML shells per known route** in `dist/<path>/index.html` (prerender plugin).
- **vercel.json** rewrites **only** known paths → their static `index.html`. Unknown paths stay **404** (`public/404.html`). No catch-all → homepage.
- **Sitemap:** simple `urlset` (16 URLs). **No xhtml hreflang** (both locales share one URL via in-page toggle — dual hreflang on same URL confused GSC).
- **Sitemap Content-Type:** `application/xml; charset=utf-8` header in `vercel.json`.
- Tamil: **toggle only** (same canonical URLs). Residual P1: dedicated `/ta/...` or `?lang=ta` URLs not implemented.

---

## Routes (canonical)

| Path | Kind | Notes |
|------|------|--------|
| `/` | home | Existing homepage sections |
| `/services` | hub | Links to 4 service pages |
| `/services/outstation-cab` | service | Verified service |
| `/services/airport-taxi` | service | Verified service |
| `/services/temple-pilgrimage` | service | Verified service |
| `/services/local-taxi` | service | Verified service |
| `/locations` | hub | Destinations overview |
| `/locations/srivilliputtur` | location | Home base |
| `/locations/madurai` | location | From existing content |
| `/locations/chennai` | location | From existing content |
| `/locations/bengaluru` | location | From existing content |
| `/locations/coimbatore` | location | From existing content |
| `/locations/rameswaram` | location | From existing content |
| `/locations/kodaikanal` | location | From existing content |
| `/locations/thiruvananthapuram` | location | From existing content |
| `/contact` | contact | Enquiry form + phones |

**Not created (unverified):** Virudhunagar, Rajapalayam, Sivakasi, or other invented town pages. No fake fares, durations, street address, hours, or ratings.

---

## Title / description table (EN canonical head)

| Path | Title |
|------|--------|
| `/` | Srivilliputtur Taxi & Outstation Cab \| Sri Arumuga Travels |
| `/services` | Taxi & Travel Services from Srivilliputtur \| Sri Arumuga Travels |
| `/services/outstation-cab` | Outstation Cab from Srivilliputtur \| Sri Arumuga Travels |
| `/services/airport-taxi` | Airport & Station Taxi from Srivilliputtur \| Sri Arumuga Travels |
| `/services/temple-pilgrimage` | Temple & Pilgrimage Trips from Srivilliputtur \| Sri Arumuga Travels |
| `/services/local-taxi` | Local & Day Taxi in Srivilliputtur \| Sri Arumuga Travels |
| `/locations` | Destinations from Srivilliputtur \| Sri Arumuga Travels |
| `/locations/srivilliputtur` | Srivilliputtur Taxi & Travel Desk \| Sri Arumuga Travels |
| `/locations/madurai` | Srivilliputtur to Madurai Cab \| Sri Arumuga Travels |
| `/locations/chennai` | Srivilliputtur to Chennai Cab \| Sri Arumuga Travels |
| `/locations/bengaluru` | Srivilliputtur to Bengaluru Cab \| Sri Arumuga Travels |
| `/locations/coimbatore` | Srivilliputtur to Coimbatore Cab \| Sri Arumuga Travels |
| `/locations/rameswaram` | Srivilliputtur to Rameswaram Cab \| Sri Arumuga Travels |
| `/locations/kodaikanal` | Srivilliputtur to Kodaikanal Cab \| Sri Arumuga Travels |
| `/locations/thiruvananthapuram` | Srivilliputtur to Thiruvananthapuram Cab \| Sri Arumuga Travels |
| `/contact` | Contact & Enquire \| Sri Arumuga Travels |

Full descriptions live in `src/lib/seoConfig.ts`. Per-route: unique title, description, canonical, OG/Twitter, `robots=index,follow`. Client `SeoHead` + build-time meta on static shells.

---

## Structured data

- **LocalBusiness + TravelAgency** (NAP: locality/region/country + phones only).
- **WebSite / WebPage** per route.
- **BreadcrumbList** on non-home routes.
- **Service** on service pages and destination route pages (except home-base narrative).
- **FAQPage** only when FAQs are visible on that page.

---

## Key files

| File | Role |
|------|------|
| `src/lib/seoConfig.ts` | Routes, titles, NAP, path maps |
| `src/i18n/pages/{en,ta,types}.ts` | Page body copy (string-typed; TA not tied to EN literals) |
| `src/pages/*` | Route pages |
| `src/components/seo/SeoHead.tsx` | Runtime head |
| `src/components/seo/RouteJsonLd.tsx` | Runtime JSON-LD |
| `src/lib/crawlableHome.ts` | Build-time shells |
| `scripts/prerenderHomePlugin.ts` | Inject home + write route HTML |
| `public/sitemap.xml` | 16 URLs, no xhtml |
| `vercel.json` | Known-path rewrites + sitemap `Content-Type` |
| `docs/SEO_PHASE2_IA.md` | This summary |

---

## GSC sitemap note

Previous “Couldn't fetch” risk factors addressed in this change:

1. Simplified sitemap (removed xhtml alternate pairs pointing en+ta at the same URL).
2. Explicit `Content-Type: application/xml; charset=utf-8` for `/sitemap.xml`.
3. After deploy: re-submit `https://sriarumugatravels.vercel.app/sitemap.xml` in GSC.

---

## Owner TODOs (do not invent in code)

1. Street address / postal code / geo coordinates (if desired for richer LocalBusiness).
2. Opening hours / priceRange — only if real.
3. Aggregate ratings — only with verifiable review source.
4. Optional: Virudhunagar / Rajapalayam / Sivakasi pages **only** after owner confirms service coverage copy.
5. Optional P1: real Tamil URL strategy (`/ta/...` or `?lang=ta`) + matching hreflang; until then keep toggle + same-URL policy.
6. Deploy + GSC sitemap resubmit + URL inspection on a sample service/location URL.
7. Confirm Clarity / GSC env remain set in production (preserved: Clarity `yrhkngc4c4`, GSC meta in `index.html` / `.env.production`).

---

## Verify locally

```bash
bun run build
# 16 index.html under dist/ (home + 15 routes)
# dist/sitemap.xml — 16 <loc>, no xhtml
# Sample: dist/services/outstation-cab/index.html has unique title + crawlable H1
```

**Do not deploy from this agent** — parent deploys.
