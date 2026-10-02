import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BlogCard } from '../../components/blog/BlogCard';
import {
  getCategoryBySlug,
  getPostsByCategory,
  getCategoryLabel,
} from '../../content/blog/registry';
import { useI18n } from '../../i18n/I18nProvider';
import { getPagesCopy } from '../../i18n/pages';

export const BlogCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { locale } = useI18n();
  const pages = getPagesCopy(locale);
  const cat = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  if (!cat) return <Navigate to="/blog" replace />;

  const posts = getPostsByCategory(cat.slug);
  const blogLabel = locale === 'ta' ? 'வலைப்பதிவு' : 'Blog';
  const name = getCategoryLabel(cat, locale);
  const desc = locale === 'ta' ? cat.descriptionTa : cat.descriptionEn;

  return (
    <div className="section-shell section-muted pt-[calc(var(--header-h)+2rem)] pb-16">
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs
          items={[
            { label: pages.ui.home, to: '/' },
            { label: blogLabel, to: '/blog' },
            { label: name },
          ]}
        />
        <h1 className="display-title">{name}</h1>
        <p className="lede mt-4 max-w-3xl">{desc}</p>
        <p className="mt-2 text-sm text-[var(--color-faint)]">
          {posts.length} {locale === 'ta' ? 'கட்டுரைகள்' : 'articles'}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <p className="mt-10">
          <Link to="/blog" className="text-[var(--color-accent-text)] font-medium hover:underline">
            ← {blogLabel}
          </Link>
        </p>
      </div>
    </div>
  );
};
