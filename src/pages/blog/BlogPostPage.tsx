import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BlogContent } from '../../components/blog/BlogContent';
import { BlogToc } from '../../components/blog/BlogToc';
import { BlogCard } from '../../components/blog/BlogCard';
import {
  getPostMeta,
  getPostToc,
  getPostReadingMinutes,
  getRelatedPosts,
  getPrevNext,
  resolveCategories,
  resolveTags,
  getCategoryLabel,
  getTagLabel,
  getCounterpartSlug,
} from '../../content/blog/registry';
import { getFullPost } from '../../content/blog/getFullPost';
import { useI18n } from '../../i18n/I18nProvider';
import { getPagesCopy } from '../../i18n/pages';
import { absoluteUrl } from '../../lib/site';

function formatDate(iso: string, lang: 'en' | 'ta') {
  try {
    return new Intl.DateTimeFormat(lang === 'ta' ? 'ta-IN' : 'en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso + 'T12:00:00'));
  } catch {
    return iso;
  }
}

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useI18n();
  const pages = getPagesCopy(locale);
  const meta = slug ? getPostMeta(slug) : undefined;
  const post = slug ? getFullPost(slug) : undefined;

  if (!meta || !post) return <Navigate to="/blog" replace />;

  const counterpartSlug = getCounterpartSlug(meta.slug);
  const toc = getPostToc(post);
  const related = getRelatedPosts(meta, 3);
  const { prev, next } = getPrevNext(meta.slug);
  const cats = resolveCategories(meta.categoryIds);
  const tags = resolveTags(meta.tagIds);
  const mins = getPostReadingMinutes(post);
  const shareUrl = absoluteUrl(`/blog/${post.slug}`);
  const blogLabel = locale === 'ta' ? 'வலைப்பதிவு' : 'Blog';

  return (
    <article className="section-shell section-muted pt-[calc(var(--header-h)+2rem)] pb-16">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { label: pages.ui.home, to: '/' },
            { label: blogLabel, to: '/blog' },
            { label: post.title },
          ]}
        />

        <header>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-faint)]">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time>
            <span aria-hidden>·</span>
            <span>
              {mins} {locale === 'ta' ? 'நிமிட வாசிப்பு' : 'min read'}
            </span>
            {post.lang === 'ta' && (
              <>
                <span aria-hidden>·</span>
                <span className="text-[var(--color-accent-text)] font-semibold">தமிழ்</span>
              </>
            )}
            {counterpartSlug && (
              <>
                <span aria-hidden>·</span>
                <Link
                  to={`/blog/${counterpartSlug}`}
                  className="font-bold text-[var(--color-accent-text)] hover:underline inline-flex items-center gap-1"
                >
                  🌐 {post.lang === 'ta' ? 'Read in English' : 'தமிழில் படிக்க'}
                </Link>
              </>
            )}
          </div>
          <h1 className="display-title mt-3">{post.title}</h1>
          <p className="lede mt-4">{post.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {cats.map((c) => (
              <Link
                key={c.slug}
                to={`/blog/category/${c.slug}`}
                className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-text)]"
              >
                {getCategoryLabel(c, locale)}
              </Link>
            ))}
          </div>
        </header>

        {counterpartSlug && (
          <aside
            className="mt-6 p-4 rounded-2xl border border-[var(--color-accent-soft)] bg-[var(--color-surface)] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            aria-label="Language version"
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[var(--color-accent-soft)] flex items-center justify-center text-base shrink-0" aria-hidden>
                🌐
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-[var(--color-accent-text)]">
                  {post.lang === 'ta' ? 'English edition available' : 'தமிழ் பதிப்பு கிடைக்கிறது'}
                </p>
                <p className="text-sm font-medium text-[var(--color-ink)]">
                  {post.lang === 'ta'
                    ? 'Prefer to read this in English?'
                    : 'இந்தக் கட்டுரையைத் தமிழில் படிக்க வேண்டுமா?'}
                </p>
              </div>
            </div>
            <Link
              to={`/blog/${counterpartSlug}`}
              className="btn btn-primary !py-2 !px-4 text-xs font-bold shrink-0 self-start sm:self-center inline-flex items-center gap-1.5 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {post.lang === 'ta' ? 'Read in English →' : 'தமிழில் படிக்க (Read in Tamil) →'}
            </Link>
          </aside>
        )}

        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--color-surface-2)]">
          <img
            src={post.heroImage}
            alt={post.heroAlt}
            width={1200}
            height={675}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-8">
          <BlogToc
            items={toc}
            label={locale === 'ta' ? 'பொருளடக்கம்' : 'On this page'}
          />
          <BlogContent blocks={post.body} />
        </div>

        {tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Link
                key={t.slug}
                to={`/blog/tag/${t.slug}`}
                className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)] hover:border-[var(--color-accent)]"
              >
                #{getTagLabel(t, locale)}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent-text)] hover:underline"
          >
            {locale === 'ta' ? 'வாட்ஸ்அப்பில் பகிர்' : 'Share on WhatsApp'}
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent-text)] hover:underline"
          >
            {locale === 'ta' ? 'X இல் பகிர்' : 'Share on X'}
          </a>
        </div>

        {counterpartSlug && (
          <aside
            className="mt-10 p-4 rounded-2xl bg-[var(--color-surface-2)] border border-[var(--color-line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            aria-label="Language edition"
          >
            <p className="text-sm text-[var(--color-ink-soft)]">
              {post.lang === 'ta'
                ? 'Looking for the English version of this guide?'
                : 'இந்தக் கட்டுரையைத் தமிழில் படிக்க வேண்டுமா?'}
            </p>
            <Link
              to={`/blog/${counterpartSlug}`}
              className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-text)] hover:underline inline-flex items-center gap-1"
            >
              {post.lang === 'ta' ? 'Read in English →' : 'தமிழில் படிக்க (Read in Tamil) →'}
            </Link>
          </aside>
        )}

        <nav className="mt-10 grid gap-4 sm:grid-cols-2 border-t border-[var(--color-line)] pt-8">
          {prev ? (
            <Link to={`/blog/${prev.slug}`} className="card p-4 hover:border-[var(--color-accent)]">
              <p className="text-xs text-[var(--color-faint)]">
                {locale === 'ta' ? 'முந்தையது' : 'Previous'}
              </p>
              <p className="mt-1 font-medium text-[var(--color-ink)] line-clamp-2">{prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/blog/${next.slug}`}
              className="card p-4 hover:border-[var(--color-accent)] sm:text-right"
            >
              <p className="text-xs text-[var(--color-faint)]">
                {locale === 'ta' ? 'அடுத்தது' : 'Next'}
              </p>
              <p className="mt-1 font-medium text-[var(--color-ink)] line-clamp-2">{next.title}</p>
            </Link>
          ) : null}
        </nav>

        {related.length > 0 && (
          <section className="mt-14" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display text-2xl text-[var(--color-ink)] mb-4">
              {locale === 'ta' ? 'தொடர்புடைய கட்டுரைகள்' : 'Related articles'}
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} post={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
