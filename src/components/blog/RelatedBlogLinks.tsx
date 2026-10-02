import React from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../../content/blog/registry';
import { getBlogSlugsForPath } from '../../content/blog/relatedByRoute';
import { useI18n } from '../../i18n/I18nProvider';

interface Props {
  pathname: string;
}

export const RelatedBlogLinks: React.FC<Props> = ({ pathname }) => {
  const { locale } = useI18n();
  const posts = getBlogSlugsForPath(pathname)
    .map(getPost)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (!posts.length) return null;

  return (
    <nav className="mt-12 border-t border-[var(--color-line)] pt-8" aria-labelledby="blog-related-heading">
      <h2
        id="blog-related-heading"
        className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-3"
      >
        {locale === 'ta' ? 'வலைப்பதிவிலிருந்து' : 'From the blog'}
      </h2>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/blog/${p.slug}`}
              className="text-[var(--color-accent-text)] font-medium hover:underline"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-3">
        <Link to="/blog" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent-text)]">
          {locale === 'ta' ? 'அனைத்துக் கட்டுரைகளும் →' : 'All articles →'}
        </Link>
      </p>
    </nav>
  );
};
