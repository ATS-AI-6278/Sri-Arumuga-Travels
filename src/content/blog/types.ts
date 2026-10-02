/**
 * Blog content model — TypeScript modules (no MDX dependency).
 * Add posts under posts/, register in posts/index.ts.
 */

export type BlogLang = 'en' | 'ta';

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; id: string; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][] }
  | { type: 'faq'; items: Array<{ q: string; a: string }> }
  | { type: 'callout'; text: string }
  | { type: 'cta'; note?: string }
  | { type: 'links'; title?: string; items: Array<{ href: string; label: string }> };

export interface BlogCategory {
  id: string;
  slug: string;
  nameEn: string;
  nameTa: string;
  descriptionEn: string;
  descriptionTa: string;
}

export interface BlogTag {
  id: string;
  slug: string;
  nameEn: string;
  nameTa: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  lang: BlogLang;
  categoryIds: string[];
  tagIds: string[];
  publishedAt: string; // YYYY-MM-DD
  updatedAt: string;
  heroImage: string;
  heroAlt: string;
  relatedSlugs: string[];
  /** Featured on /blog listing */
  featured?: boolean;
  /** Soft internal service/location paths to surface */
  relatedPaths?: string[];
}

export interface BlogPost extends BlogPostMeta {
  /** H2/H3 for TOC — derived from body when omitted */
  toc?: Array<{ id: string; text: string; level: 2 | 3 }>;
  body: ContentBlock[];
}

export function deriveToc(body: ContentBlock[]): Array<{ id: string; text: string; level: 2 | 3 }> {
  return body
    .filter((b): b is Extract<ContentBlock, { type: 'h2' | 'h3' }> => b.type === 'h2' || b.type === 'h3')
    .map((b) => ({ id: b.id, text: b.text, level: b.type === 'h2' ? (2 as const) : (3 as const) }));
}

export function readingMinutes(body: ContentBlock[]): number {
  const words = body.reduce((n, b) => {
    if (b.type === 'p' || b.type === 'callout' || b.type === 'h2' || b.type === 'h3') {
      return n + b.text.split(/\s+/).filter(Boolean).length;
    }
    if (b.type === 'ul' || b.type === 'ol') {
      return n + b.items.join(' ').split(/\s+/).filter(Boolean).length;
    }
    if (b.type === 'faq') {
      return n + b.items.map((i) => `${i.q} ${i.a}`).join(' ').split(/\s+/).filter(Boolean).length;
    }
    if (b.type === 'table') {
      return n + [...b.headers, ...b.rows.flat()].join(' ').split(/\s+/).filter(Boolean).length;
    }
    return n;
  }, 0);
  return Math.max(3, Math.round(words / 200));
}
