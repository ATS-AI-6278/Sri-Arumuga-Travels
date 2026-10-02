import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BlogCard } from '../../components/blog/BlogCard';
import {
  getAllPosts,
  getCategoriesWithCounts,
  getFeaturedPosts,
  getCategoryLabel,
  searchPosts,
} from '../../content/blog/registry';
import { useI18n } from '../../i18n/I18nProvider';
import { getPagesCopy } from '../../i18n/pages';

export const BlogIndexPage: React.FC = () => {
  const { locale } = useI18n();
  const pages = getPagesCopy(locale);
  const [q, setQ] = useState('');
  const [langFilter, setLangFilter] = useState<'all' | 'en' | 'ta'>(locale === 'ta' ? 'ta' : 'en');

  const featured = useMemo(() => {
    const list = getAllPosts().filter((p) => p.featured && (langFilter === 'all' || p.lang === langFilter));
    if (list.length >= 3) return list.slice(0, 3);
    const fallback = getAllPosts().filter((p) => langFilter === 'all' || p.lang === langFilter);
    return fallback.slice(0, 3);
  }, [langFilter]);

  const categories = getCategoriesWithCounts();

  const posts = useMemo(() => {
    let list = q.trim() ? searchPosts(q) : getAllPosts();
    if (langFilter !== 'all') list = list.filter((p) => p.lang === langFilter);
    return list;
  }, [q, langFilter]);

  const title = locale === 'ta' ? 'பயண வலைப்பதிவு' : 'Travel blog';
  const lede =
    locale === 'ta'
      ? 'ஸ்ரீவில்லிபுத்தூர் மற்றும் தென் தமிழ்நாட்டுப் பயணத்துக்கான நடைமுறை வழிகாட்டிகள் — கோயில், வெளியூர் கேப், சாலைத் திட்டம். போலி கட்டணங்கள் இல்லை.'
      : 'Practical guides for Srivilliputtur and southern Tamil Nadu travel — temples, outstation cabs, and road planning. No invented fares.';

  return (
    <div className="section-shell section-muted pt-[calc(var(--header-h)+2rem)] pb-16">
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs items={[{ label: pages.ui.home, to: '/' }, { label: title }]} />
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-text)]">
            Sri Arumuga Travels
          </p>
          <h1 className="display-title mt-2">{title}</h1>
          <p className="lede mt-4">{lede}</p>
        </header>

        <section className="mt-10" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="font-display text-2xl text-[var(--color-ink)] mb-4">
            {locale === 'ta' ? 'சிறப்புக் கட்டுரைகள்' : 'Featured'}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="cat-heading">
          <h2 id="cat-heading" className="font-display text-2xl text-[var(--color-ink)] mb-4">
            {locale === 'ta' ? 'பிரிவுகள்' : 'Categories'}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/blog/category/${c.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-ink-soft)] hover:border-[var(--color-accent)]"
                >
                  {getCategoryLabel(c, locale)}
                  <span className="text-[var(--color-faint)] tabular-nums">{c.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="all-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
            <h2 id="all-heading" className="font-display text-2xl text-[var(--color-ink)]">
              {locale === 'ta' ? 'அனைத்துக் கட்டுரைகள்' : 'All articles'}
            </h2>
            <div className="flex flex-wrap gap-2 items-center">
              <label className="sr-only" htmlFor="blog-search">
                {locale === 'ta' ? 'தேடல்' : 'Search'}
              </label>
              <input
                id="blog-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={locale === 'ta' ? 'தேடுக…' : 'Search articles…'}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-sm w-52 focus:border-[var(--color-accent)] outline-none"
              />
              <div className="flex rounded-full border border-[var(--color-line)] overflow-hidden text-sm">
                {(['all', 'en', 'ta'] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setLangFilter(f)}
                    className={`px-3 py-2 ${
                      langFilter === f
                        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] font-semibold'
                        : 'bg-[var(--color-surface)] text-[var(--color-muted)]'
                    }`}
                  >
                    {f === 'all' ? (locale === 'ta' ? 'அனைத்தும்' : 'All') : f === 'en' ? 'EN' : 'தமிழ்'}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {posts.length === 0 ? (
            <p className="text-[var(--color-muted)]">
              {locale === 'ta' ? 'பொருத்தமான கட்டுரைகள் இல்லை.' : 'No matching articles.'}
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
