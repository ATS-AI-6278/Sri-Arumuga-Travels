import type { BlogCategory, BlogPost, BlogPostMeta, BlogTag } from './types';
import { deriveToc, readingMinutes } from './types';
import { BLOG_CATEGORIES, getCategoryById, getCategoryBySlug } from './categories';
import { BLOG_TAGS, getTagById, getTagBySlug } from './tags';
import { ALL_POST_METAS, getPostMeta } from './postsMeta';

function byDateDesc(a: BlogPostMeta, b: BlogPostMeta): number {
  return b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug);
}

/** Meta-only list (safe for SEO / listing bundles). */
export function getAllPostMetas(): BlogPostMeta[] {
  return [...ALL_POST_METAS].sort(byDateDesc);
}

/** @deprecated prefer getAllPostMetas in UI listing; full posts via getFullPost */
export function getAllPosts(): BlogPostMeta[] {
  return getAllPostMetas();
}

export function getPost(slug: string): BlogPostMeta | undefined {
  return getPostMeta(slug);
}

export function getPostsByCategory(categorySlug: string): BlogPostMeta[] {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return [];
  return getAllPostMetas().filter((p) => p.categoryIds.includes(cat.id));
}

export function getPostsByTag(tagSlug: string): BlogPostMeta[] {
  const tag = getTagBySlug(tagSlug);
  if (!tag) return [];
  return getAllPostMetas().filter((p) => p.tagIds.includes(tag.id));
}

export function getRelatedPosts(post: BlogPostMeta, limit = 4): BlogPostMeta[] {
  const related = post.relatedSlugs
    .map((s) => getPostMeta(s))
    .filter((p): p is BlogPostMeta => Boolean(p));
  if (related.length >= limit) return related.slice(0, limit);

  const relatedSet = new Set(related.map((p) => p.slug));
  relatedSet.add(post.slug);

  const scored = getAllPostMetas()
    .filter((p) => !relatedSet.has(p.slug))
    .map((p) => {
      const catScore = p.categoryIds.filter((id) => post.categoryIds.includes(id)).length * 3;
      const tagScore = p.tagIds.filter((id) => post.tagIds.includes(id)).length;
      const langBonus = p.lang === post.lang ? 1 : 0;
      return { p, score: catScore + tagScore + langBonus };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || byDateDesc(a.p, b.p));

  return [...related, ...scored.map((x) => x.p)].slice(0, limit);
}

export function getFeaturedPosts(limit = 3): BlogPostMeta[] {
  const featured = getAllPostMetas().filter((p) => p.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return getAllPostMetas().slice(0, limit);
}

export function getPostToc(post: BlogPost) {
  return post.toc ?? deriveToc(post.body);
}

export function getPostReadingMinutesFromMeta(post: BlogPostMeta): number {
  // Approximate from description length when body not loaded
  const words = `${post.title} ${post.description}`.split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.min(12, Math.round(words / 15)));
}

export function getPostReadingMinutes(post: BlogPost | BlogPostMeta): number {
  if ('body' in post && Array.isArray((post as BlogPost).body)) {
    return readingMinutes((post as BlogPost).body);
  }
  return getPostReadingMinutesFromMeta(post as BlogPostMeta);
}

export function getPrevNext(slug: string): { prev?: BlogPostMeta; next?: BlogPostMeta } {
  const all = getAllPostMetas();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx < 0) return {};
  return {
    prev: idx < all.length - 1 ? all[idx + 1] : undefined,
    next: idx > 0 ? all[idx - 1] : undefined,
  };
}

export function searchPosts(query: string): BlogPostMeta[] {
  const q = query.trim().toLowerCase();
  if (!q) return getAllPostMetas();
  return getAllPostMetas().filter((p) => {
    const hay = [
      p.title,
      p.description,
      ...p.tagIds,
      ...p.categoryIds,
      p.slug.replace(/-/g, ' '),
    ]
      .join(' ')
      .toLowerCase();
    return hay.includes(q);
  });
}

export function getCategoriesWithCounts(): Array<BlogCategory & { count: number }> {
  return BLOG_CATEGORIES.map((c) => ({
    ...c,
    count: ALL_POST_METAS.filter((p) => p.categoryIds.includes(c.id)).length,
  })).filter((c) => c.count > 0);
}

export function getTagsWithCounts(): Array<BlogTag & { count: number }> {
  return BLOG_TAGS.map((t) => ({
    ...t,
    count: ALL_POST_METAS.filter((p) => p.tagIds.includes(t.id)).length,
  }))
    .filter((t) => t.count > 0)
    .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));
}

export function getCategoryLabel(cat: BlogCategory, lang: 'en' | 'ta') {
  return lang === 'ta' ? cat.nameTa : cat.nameEn;
}

export function getTagLabel(tag: BlogTag, lang: 'en' | 'ta') {
  return lang === 'ta' ? tag.nameTa : tag.nameEn;
}

export function resolveCategories(ids: string[]) {
  return ids.map(getCategoryById).filter((c): c is BlogCategory => Boolean(c));
}

export function resolveTags(ids: string[]) {
  return ids.map(getTagById).filter((t): t is BlogTag => Boolean(t));
}

export function getBlogIndexablePaths(): string[] {
  const paths = new Set<string>(['/blog']);
  for (const p of ALL_POST_METAS) paths.add(`/blog/${p.slug}`);
  for (const c of getCategoriesWithCounts()) paths.add(`/blog/category/${c.slug}`);
  for (const t of getTagsWithCounts()) paths.add(`/blog/tag/${t.slug}`);
  return [...paths].sort();
}

export { getCounterpartSlug, BLOG_COUNTERPARTS } from './bilingualPairs';

export {
  BLOG_CATEGORIES,
  BLOG_TAGS,
  ALL_POST_METAS,
  getPostMeta,
  getCategoryBySlug,
  getCategoryById,
  getTagBySlug,
  getTagById,
};
