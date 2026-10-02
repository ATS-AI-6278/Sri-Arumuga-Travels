# Blog system — Sri Arumuga Travels

## Overview

TypeScript content modules (no MDX) power a scalable travel blog for Srivilliputtur / southern Tamil Nadu education content. Routes are client-side SPA paths with static HTML shells + Vercel known-path rewrites (same pattern as services/locations).

## Paths

| Path | Purpose |
|------|---------|
| `/blog` | Listing — featured, categories, search, EN/தமிழ் filter |
| `/blog/:slug` | Article — TOC, prev/next, related, share, Article JSON-LD |
| `/blog/category/:categorySlug` | Category index |
| `/blog/tag/:tagSlug` | Tag index |

## Content model

- `src/content/blog/types.ts` — `BlogPost`, `ContentBlock` AST
- `src/content/blog/categories.ts` — 8 clusters
- `src/content/blog/tags.ts` — shared tags
- `src/content/blog/posts/*.ts` — one module per article (`export default post`)
- `src/content/blog/posts/index.ts` — `ALL_POSTS` array
- `src/content/blog/registry.ts` — `getAllPosts`, `getPost`, `getPostsByCategory`, `getPostsByTag`, `getRelatedPosts`, `searchPosts`, `getBlogIndexablePaths`

### Adding a post

1. Create `src/content/blog/posts/my-slug.ts` with a `BlogPost` default export.
2. Add `import pN from './my-slug'` and include in `ALL_POSTS` in `posts/index.ts`.
3. Rebuild — prerender plugin writes shell + sitemap entry + vercel rewrite.

Body blocks: `p`, `h2`, `h3`, `ul`, `ol`, `table`, `faq`, `callout`, `cta`, `links`.

## SEO

- `SeoHead` resolves blog listing / category / tag / article meta (title, description, canonical, OG, Twitter, article times).
- `RouteJsonLd` emits `BlogPosting` + `BreadcrumbList` (+ FAQ when present) for articles; `CollectionPage` for `/blog`.
- Soft CTAs only — phones/email/WhatsApp from `src/lib/contact.ts`.

## Build / deploy artifacts

`scripts/prerenderHomePlugin.ts` on `closeBundle`:

- Static shells under `dist/blog/**/index.html`
- `public/sitemap.xml` + `dist/sitemap.xml` (core routes + all blog URLs)
- Merges `/blog*` known-path rewrites into `vercel.json`

## Tamil

Articles with `lang: 'ta'` are written as Tamil originals (not machine-literal mirrors). The site language toggle (`sat-lang`) still applies to chrome (nav/footer/CTA labels); article body language is per-post.

## Internal linking

`src/content/blog/relatedByRoute.ts` maps location/service paths → blog slugs. `RelatedBlogLinks` renders on those pages.

## Hard rules (content)

- No invented NAP, fares, ratings, exact km/times, awards, fleet counts.
- No lorem / placeholders.
- No meta keywords / stuffing.
