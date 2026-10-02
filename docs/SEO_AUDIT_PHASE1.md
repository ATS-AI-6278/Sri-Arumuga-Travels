# SEO Audit — Phase 1 (Discovery Only)

**Client:** Sri Arumuga Travels  
**Project path:** `/workspace/sri-arumuga-travels`  
**Live URL:** https://sriarumugatravels.vercel.app/  
**Audit date:** 2026-10-02 (Asia/Calcutta)  
**Scope:** Codebase inspection + live URL probes. **No architecture changes, no new routes, no invented business facts.**

---

## 1. Framework & rendering model

| Item | Finding | Evidence |
|------|---------|----------|
| Framework | **Vite 8 + React 19 + TypeScript + Tailwind 4** | `package.json` scripts (`vite`, `vite build`); deps `@vitejs/plugin-react`, `vite`, `react`, `react-dom`; **no** `next` package |
| Host config | Vercel `framework: "vite"`, `outputDirectory: "dist"` | `vercel.json` |
| Router | **None** — single-page app; section navigation via `#` anchors | `App.tsx` mounts one `<main>`; no `react-router` / `BrowserRouter` |
| Rendering | **Client-side rendering (CSR) only** | `index.html` has empty `<div id="root"></div>`; `main.tsx` uses `createRoot(...).render(...)` |
| Next.js APIs | **Not present** | No `generateMetadata`, no `next/image`, no App/Pages router |

### CSR implications for SEO

- Crawlers that execute JS can eventually see content and JSON-LD; the **initial HTML response** (~3 KB) contains meta tags but **no visible page copy** and **no `ld+json`**.
- Structured data (`SeoSchema`) and dynamic `document.documentElement.lang` updates run **only after JS**.
- Soft-404 risk: extensionless unknown paths rewrite to `index.html` with **HTTP 200** (see §10).
- Scaling to many location/service URLs later will need either prerender/SSR/SSG or careful static HTML per route — **not in Phase 1 scope**.

---

## 2. Current metadata / OG / Twitter / canonical / GSC

### Static head (`index.html` — also served live)

| Element | Value (verified) |
|---------|------------------|
| `html lang` | `en-IN` (static; client may change to `ta-IN`) |
| `<title>` | Srivilliputtur Taxi & Outstation Cab \| Sri Arumuga Travels |
| `meta description` | Srivilliputtur taxi and outstation cab by Sri Arumuga Travels. Sedan trips across India — plan pickup, timing, and fare by call or WhatsApp. |
| `link rel=canonical` | `https://sriarumugatravels.vercel.app/` |
| `google-site-verification` | `WZQ0_sdUEz1AT6SPbhL2Zwui_ePrGfexfQq3bKvkB54` (hardcoded in `index.html`; also in `.env.production` as `VITE_GSC_VERIFICATION`) |
| `geo.region` / `geo.placename` | `IN-TN` / `Srivilliputtur` |
| `theme-color` | `#F6F1E8` |
| `og:title` / `og:description` | Match title / description |
| `og:type` | `website` |
| `og:url` | `https://sriarumugatravels.vercel.app/` |
| `og:site_name` | Sri Arumuga Travels |
| `og:image` | `https://sriarumugatravels.vercel.app/hero-scene.webp` |
| `og:image:alt` | Scenic highway travel with Sri Arumuga Travels sedan |
| `og:locale` | `en_IN` |
| `og:locale:alternate` | `ta_IN` |
| `twitter:card` | `summary_large_image` |
| `twitter:title` / `description` / `image` | Present; Twitter description slightly shorter than OG |

### Runtime head sync (`Analytics.tsx`)

On mount, upserts `canonical`, `og:url`, `og:image`, `twitter:image` from `SITE_URL` / `absoluteUrl`. Optionally upserts GSC meta if `VITE_GSC_VERIFICATION` is set. Injects GA4 / Clarity **only when** env IDs are non-empty.

### Gaps

- No `hreflang` `<link>` tags in HTML head (only sitemap `xhtml:link` pointing both locales to `/` — see §8).
- No `robots` meta (`index,follow` implied by absence; not explicitly set).
- No dedicated OG image dimensions (`og:image:width` / `height`).
- Tamil UI language does **not** change `<title>` / meta description (English-only head).

---

## 3. Sitemap / robots / llms / manifest (live + repo)

Live probes (2026-10-02):

| URL | HTTP | Notes |
|-----|------|-------|
| `/` | **200** | HTML shell + meta; empty `#root` |
| `/robots.txt` | **200** | `Allow: /` + Sitemap line |
| `/sitemap.xml` | **200** | **One URL only** (`/`) + hreflang en-IN / ta-IN / x-default all → same `/` |
| `/llms.txt` | **200** | Brand, base, phones, services, vehicle, languages |
| `/manifest.webmanifest` | **200** | PWA-ish name/theme; icon = `/favicon.svg` only |
| `/hero-scene.webp` | **200** | `image/webp`, ~110 KB; cache `max-age=604800` |
| `/favicon.svg` | **200** | SVG |
| `/assets/index-DP3yfijh.js` | **200** | ~298 KB JS; `immutable` long cache |
| `/assets/index-CcdGEk2Q.css` | **200** | ~42 KB |
| `/assets/index-placeholder.js` | **404** | Real 404 for missing **asset with extension** |
| `/this-is-a-fake-404-path-xyz` | **200** | Returns **same `index.html`** (SPA rewrite soft-404) |
| `/PHOTO-CREDITS.txt` | **200** | Excluded from rewrite; credits file live |

`robots.txt` content:

```
User-agent: *
Allow: /

Sitemap: https://sriarumugatravels.vercel.app/sitemap.xml
```

---

## 4. Structured data inventory

**Source:** `src/components/SeoSchema.tsx` — injected client-side as `<script type="application/ld+json">`.

**Not present in static HTML** (confirmed on live `/` response).

| `@type` | Details (from code) |
|---------|---------------------|
| `LocalBusiness` + `TravelAgency` | `@id` `#business`; name; phones; `PostalAddress` with **locality/region/country only** (no street, postal code, geo, `openingHours`); `areaServed` Srivilliputtur / Tamil Nadu / India; Call + WhatsApp actions |
| `WebSite` | `#website`; publisher → business; `inLanguage` `en-IN`, `ta-IN` |
| `WebPage` | `#webpage`; title/description locale-aware; `about` business |
| `FAQPage` | When FAQ items exist (4 Q&As from i18n) |

**Missing for strong local SEO (intentionally incomplete until owner facts):** `streetAddress`, `postalCode`, `geo` / `GeoCoordinates`, `openingHoursSpecification`, `priceRange`, `aggregateRating` (do **not** invent).

---

## 5. Heading hierarchy (sample from components)

Verified from React components (rendered after JS):

| Level | Content (EN) | Location |
|-------|--------------|----------|
| **h1** (1×) | Travel from Srivilliputtur to *anywhere in India* | `HeroSection` `#hero-heading` |
| **h2** | Services title | `#services-heading` |
| **h3** | Each service title (×4) | `ServicesSection` |
| **h2** | Destinations title | `#destinations-heading` |
| **h3** | Each destination name (×8) | `DestinationsSection` |
| **h2** | Trust title | `#trust-heading` |
| **h3** | Fleet title + trust point titles + how-it-works intro | `TrustSection` |
| **h4** | How-it-works step titles (×3) | `TrustSection` |
| **h2** | Story title | `#story-heading` |
| **h2** | FAQ title | `#faq-heading` |
| **h2** | Enquire title | `#enquire-heading` |
| **h3** | Contact modal title (when open) | `ContactModal` |

**Assessment:** Single H1; logical H2 sectioning; H3/H4 nested reasonably. FAQ answers are in accordion text (not separate Hn). Hierarchy is good for a one-pager.

---

## 6. Internal links

| Type | Pattern | SEO value |
|------|---------|-----------|
| In-page anchors | `#hero`, `#services`, `#destinations`, `#trust`, `#story`, `#faq`, `#enquire`, `#main-content` | UX only; **no crawlable multi-URL IA** |
| Tel links | `tel:+919894220028`, `tel:+918667669560` | Conversion, not SEO structure |
| WhatsApp | `https://wa.me/91…` | External |
| Static file | `/PHOTO-CREDITS.txt` | Credits; not a landing page |
| Destination cards | `<button>` → scrolls to enquire (not links) | **Not crawlable “destination pages”** |
| Service cards | Buttons / in-section CTAs | Same |

**No** `/services/…` or `/taxi-to-…` paths exist. Sitemap lists a single URL.

---

## 7. Images / alts

| Asset (used in UI) | Alt / notes |
|--------------------|-------------|
| `/hero-scene.webp` (+ `.jpg` fallback) | i18n `t.hero.sceneAlt` — descriptive Etios / scenic road alt; `fetchPriority=high`; preloaded in head |
| `/fleet-scene.webp` | `t.trust.fleetAlt`; `loading=lazy` |
| `/favicon.svg` | Manifest / icons |
| Unused in UI (still in `public/`) | `etios-*.webp`, `hero-highway.webp`, etc. — documented in `PHOTO-CREDITS.txt` |

Decorative Lucide icons use `aria-hidden`. No `next/image`. Width/height set on hero/fleet imgs. Hero/fleet photos are **AI-generated illustrative** (per credits) — fine for brand mood; avoid claiming they are trip documentation in schema/copy.

---

## 8. i18n / Tamil

| Aspect | Finding |
|--------|---------|
| Mechanism | Client toggle (`I18nProvider`); dictionaries `en.ts` / `ta.ts`; `localStorage` key `sat-lang` |
| URL strategy | **Same URL** for EN and TA — **not** `/ta` or query locales |
| `html[lang]` | Updated client-side to `en-IN` / `ta-IN` |
| Head / OG | Remain English; OG claims `og:locale:alternate` `ta_IN` without a distinct Tamil URL |
| Sitemap hreflang | Both `en-IN` and `ta-IN` → identical `https://sriarumugatravels.vercel.app/` |

**SEO implication:** Google cannot treat Tamil as a separate indexable document. Claiming `hreflang` alternates to the **same** URL is weak/misleading; better to remove dual hreflang until real alternate URLs exist, or implement locale URLs + prerender (Phase 2+ decision, owner-approved).

---

## 9. Performance notes (observational)

| Signal | Observation |
|--------|-------------|
| Initial HTML | ~3 KB — fast TTFB shell |
| Main JS | ~298 KB (`index-DP3yfijh.js`) — all UI/content behind this |
| CSS | ~42 KB |
| Hero image | ~110 KB WebP + preload |
| Fonts | Google Fonts (Fraunces, Source Sans 3, Noto Sans Tamil) — render-blocking stylesheet link; preconnect present |
| Caching | `/assets/*` immutable long-cache; images 7d; robots/sitemap/llms/manifest 1h |
| Security headers | `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, HSTS (Vercel) |

No Lighthouse run in this phase; CSR + third-party fonts are the main SEO-adjacent performance risks.

---

## 10. Indexability risks

1. **SPA / empty body for non-JS crawlers** — primary content and FAQ/JSON-LD invisible without JS execution.
2. **Rewrite catch-all soft-404** — unknown paths without a file extension return **200 + homepage HTML** (`vercel.json` rewrite). Risk of indexing junk URLs as duplicates of `/`.
3. **Thin / single-URL footprint** — one sitemap entry; services & destinations are sections/buttons, not pages → limited ranking surface for “Srivilliputtur to Madurai taxi” style queries.
4. **hreflang same-URL** — bilingual claim without alternate documents.
5. **Incomplete NAP** — no street address / hours / coordinates → weaker LocalBusiness eligibility vs Google Business Profile.
6. **Canonical always `/`** — correct for current single page; will need per-URL canonicals if routes are added later.
7. **Analytics dark** — GA4 / Clarity env empty → no measurement of organic yet.

---

## 11. Verified business facts (from contact / content / UI only)

**Do not invent beyond this list.**

| Fact | Source |
|------|--------|
| Brand | Sri Arumuga Travels (`content.ts`, i18n, schema) |
| Phones | `+91 98942 20028`, `+91 86676 69560` (`contact.ts`) |
| WhatsApp | Primary phone `9894220028` via `wa.me` |
| Base | Srivilliputtur, Tamil Nadu, India |
| Booking model | Call or WhatsApp only; enquiry form opens WhatsApp; no app cart |
| Services listed | Outstation journeys; Airport & station pickups; Temple & pilgrimage trips; Local & day trips |
| Airport mention | Madurai and nearby airports/stations (copy) |
| Temple mention | Andal Temple visits, nearby shrines, pilgrimage routes |
| Destinations listed | Madurai, Chennai, Bengaluru, Coimbatore, Rameswaram, Kodaikanal, Thiruvananthapuram, “Anywhere in India” |
| Vehicle | Small car / sedan; “Etios sedan comfort” in trust/FAQ copy |
| Languages on site | English (en-IN), Tamil (ta-IN) UI toggle |
| **Not verified in code** | Street address, PIN, hours, lat/lng, fleet size, fares, licenses, ratings, GBP URL |

---

## 12. Issues table

| ID | Severity | Issue | Evidence |
|----|----------|-------|----------|
| I-01 | **P0** | CSR-only: body content + JSON-LD absent from first HTML | Live `/` = empty `#root`; `SeoSchema` client-only |
| I-02 | **P0** | Soft-404: unknown paths return 200 homepage | Live `/this-is-a-fake-404-path-xyz` → 200 + `index.html`; `vercel.json` rewrite |
| I-03 | **P1** | Single-URL sitemap; no service/destination landing URLs | `public/sitemap.xml` one `<url>`; hash-only IA |
| I-04 | **P1** | LocalBusiness missing street / postal / geo / hours | `SeoSchema.tsx` address fields; `contact.ts` locality only |
| I-05 | **P1** | hreflang en+ta both point to same URL; no Tamil document URL | `sitemap.xml` xhtml links; i18n toggle only |
| I-06 | **P1** | GA4 / Clarity not configured on live | `.env.example` empty IDs; no gtag/clarity in static HTML; `.env.production` has SITE_URL + GSC only |
| I-07 | **P2** | Meta title/description do not localize with Tamil toggle | `index.html` English-only; `I18nProvider` changes `lang` only |
| I-08 | **P2** | Destination/service CTAs are buttons, not crawlable links | `DestinationsSection` `<button>`; no `/taxi-to-*` routes |
| I-09 | **P2** | OG image lacks width/height; WebP-only social may be flaky on some scrapers | `index.html` og:image → `.webp` |
| I-10 | **P2** | GSC token in repo (`index.html` + `.env.production`) — verify property ownership completed in Console | Meta present live; owner must confirm Search Console status |
| I-11 | **P3** | Unused image assets in `public/` (legacy Etios cutouts) | `PHOTO-CREDITS.txt`; file listing |
| I-12 | **P3** | Manifest icon is SVG-only (`sizes: any`) — limited install/icon richness | `manifest.webmanifest` |
| I-13 | **P3** | Third-party Google Fonts render-blocking | `index.html` fonts.googleapis stylesheet |

Severity guide: **P0** blocks reliable indexation/quality signals; **P1** major local/organic gaps; **P2** important polish; **P3** nice-to-fix.

---

## 13. Recommended IA for Phase 2 (content-mentioned only)

Build pages **only** for entities already named in site content. Flag owner confirmation before implementing.

### Service pages (from `SERVICES` / i18n)

| Candidate slug (illustrative) | Based on listed service | Owner confirm? |
|------------------------------|-------------------------|----------------|
| `/services/outstation` | Outstation journeys | Confirm priority + any routes they refuse |
| `/services/airport-station-pickup` | Airport & station pickups | Confirm Madurai focus vs other airports |
| `/services/temple-pilgrimage` | Temple & pilgrimage trips | Confirm Andal / other temple names allowed |
| `/services/local-day-trips` | Local & day trips | Confirm service area radius |

### Destination / corridor pages (from `DESTINATIONS`)

| Candidate | Note in content | Owner confirm? |
|-----------|-----------------|----------------|
| `/taxi-to-madurai` or `/srivilliputtur-to-madurai` | Temple city & airport | **Yes** — highest local intent likely |
| `…-chennai` | City & station | Yes |
| `…-bengaluru` | Work and family | Yes |
| `…-coimbatore` | West Tamil Nadu | Yes |
| `…-rameswaram` | Pilgrimage | Yes |
| `…-kodaikanal` | Hill weekends | Yes |
| `…-thiruvananthapuram` | Kerala coast | Yes |
| “Anywhere in India” | Marketing catch-all | **Do not** build a thin `/anywhere` page |

### Hub pages (optional later)

- `/services` index, `/destinations` index — only after ≥2–3 child pages exist.
- Locale paths (`/ta/...`) — **only if** owner wants crawlable Tamil; requires unique content + rendering strategy.

### What NOT to invent in Phase 2 copy

Fares, ETAs, licenses, reviews, exact fleet count, airports not named, destinations not listed, street address/hours until owner provides them.

---

## 14. Explicit: what NOT to build yet

- No new location/service routes or sitemap expansion **in Phase 1** (this audit only).
- No Next.js migration / SSR / prerender **yet** (decide in Phase 2 planning).
- No Google Business Profile schema fields without verified NAP/hours/geo.
- No fabricated ratings, `AggregateRating`, or review widgets.
- No mass doorway pages for unmentioned towns.
- No deploy / CloudAgent / production SEO architecture changes from this phase.
- Do not “fix” soft-404 with fake unique thin pages for random URLs.

---

## 15. Owner input still needed

| Item | Why |
|------|-----|
| **GA4** measurement ID | Wire `VITE_GA4_MEASUREMENT_ID` (Vercel env) |
| **Microsoft Clarity** project ID | Wire `VITE_CLARITY_PROJECT_ID` |
| **GSC** | Confirm property verified with token `WZQ0_…`; **submit sitemap** `https://sriarumugatravels.vercel.app/sitemap.xml` |
| **Street address / landmark line** | Needed for LocalBusiness + GBP consistency |
| **PIN / postal code** | Address completeness |
| **Business hours** | `openingHoursSpecification` |
| **Geo coordinates** | Pin accuracy for maps / schema |
| **Google Business Profile** | URL, categories, primary phone match, photo policy |
| **Phase 2 page priorities** | Which destinations/services to publish first |
| **Tamil URL strategy** | Keep toggle-only vs dedicate `/ta` (or subdomain) |
| **Custom domain** | If moving off `*.vercel.app`, update canonical / sitemap / OG / GSC |
| **Vehicle wording** | Confirm “Etios sedan” as public claim vs generic “sedan” |

---

## 16. Live probe summary (quick reference)

```
GET /                         → 200  text/html (~3017 B shell)
GET /robots.txt               → 200  text/plain
GET /sitemap.xml              → 200  application/xml (1 URL)
GET /llms.txt                 → 200  text/plain
GET /manifest.webmanifest     → 200  application/manifest+json
GET /hero-scene.webp          → 200  image/webp (~110 KB)
GET /assets/index-DP3yfijh.js → 200  application/javascript (~298 KB)
GET /assets/index-placeholder.js → 404  (extension present)
GET /this-is-a-fake-404-path-xyz → 200  index.html (soft 404)
```

---

## 17. Phase 1 conclusion

The site is a **well-crafted Vite React CSR one-pager** with solid homepage meta, OG/Twitter, robots, sitemap, llms.txt, and client-side LocalBusiness/FAQ schema. Local SEO upside is constrained by **single URL + SPA rendering + incomplete NAP + soft-404 rewrite + toggle-only Tamil**. Phase 2 should expand IA only for **already-mentioned** services/destinations after owner confirmation, and separately decide rendering strategy (prerender vs stay SPA) before scaling pages.

*End of Phase 1 audit. No code or deploy changes beyond this document.*
