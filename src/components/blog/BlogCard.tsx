import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPostMeta } from '../../content/blog/types';
import {
  getPostReadingMinutes,
  resolveCategories,
  getCategoryLabel,
  getCounterpartSlug,
} from '../../content/blog/registry';
import { useI18n } from '../../i18n/I18nProvider';

interface Props {
  post: BlogPostMeta;
}

function formatDate(iso: string, lang: 'en' | 'ta') {
  try {
    return new Intl.DateTimeFormat(lang === 'ta' ? 'ta-IN' : 'en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso + 'T12:00:00'));
  } catch {
    return iso;
  }
}

export const BlogCard: React.FC<Props> = ({ post }) => {
  const { locale } = useI18n();
  const cats = resolveCategories(post.categoryIds);
  const mins = getPostReadingMinutes(post);
  const counterpartSlug = getCounterpartSlug(post.slug);

  return (
    <article className="card overflow-hidden flex flex-col h-full hover:shadow-[var(--shadow-lift)] transition-shadow">
      <Link to={`/blog/${post.slug}`} className="block aspect-[16/9] overflow-hidden bg-[var(--color-surface-2)]">
        <img
          src={post.heroImage}
          alt={post.heroAlt}
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-faint)]">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time>
          <span aria-hidden>·</span>
          <span>
            {mins} {locale === 'ta' ? 'நிமிட வாசிப்பு' : 'min read'}
          </span>
          {post.lang === 'ta' && (
            <>
              <span aria-hidden>·</span>
              <span className="rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-[var(--color-accent-text)] font-semibold">
                தமிழ்
              </span>
            </>
          )}
        </div>
        <h2 className="mt-2 font-display text-xl text-[var(--color-ink)] leading-snug">
          <Link to={`/blog/${post.slug}`} className="hover:text-[var(--color-accent-text)]">
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-3 flex-1">{post.description}</p>
        <div className="mt-4 pt-3 border-t border-[var(--color-line)] flex items-center justify-between gap-2 text-xs">
          {cats[0] ? (
            <Link
              to={`/blog/category/${cats[0].slug}`}
              className="font-semibold uppercase tracking-[0.12em] text-[var(--color-faint)] hover:text-[var(--color-accent-text)]"
            >
              {getCategoryLabel(cats[0], locale)}
            </Link>
          ) : <span />}
          {counterpartSlug && (
            <Link
              to={`/blog/${counterpartSlug}`}
              className="font-semibold text-[var(--color-accent-text)] hover:underline inline-flex items-center gap-1 bg-[var(--color-accent-soft)]/50 px-2 py-0.5 rounded-md"
            >
              {post.lang === 'ta' ? 'Read in English →' : 'தமிழில் படிக்க →'}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
