import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookingCta } from '../components/BookingCta';
import { PageFaq } from '../components/PageFaq';
import { getRouteByPath, getLocationRoutes, getServiceRoutes } from '../lib/seoConfig';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';
import { RelatedBlogLinks } from '../components/blog/RelatedBlogLinks';

const SLUGS = [
  'srivilliputtur',
  'madurai',
  'chennai',
  'bengaluru',
  'coimbatore',
  'rameswaram',
  'kodaikanal',
  'thiruvananthapuram',
] as const;

export const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useI18n();
  const pages = getPagesCopy(locale);

  if (!slug || !(SLUGS as readonly string[]).includes(slug)) {
    return <Navigate to="/locations" replace />;
  }

  const route = getRouteByPath(`/locations/${slug}`)!;
  const copy = pages.locations[slug as keyof typeof pages.locations];
  const others = getLocationRoutes().filter((r) => r.id !== slug).slice(0, 5);
  const services = getServiceRoutes().slice(0, 4);
  return (
    <article className="section-shell section-muted pt-[calc(var(--header-h)+2rem)]">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { label: pages.ui.home, to: '/' },
            { label: pages.ui.seeAllLocations, to: '/locations' },
            { label: route.entityName ?? route.heading },
          ]}
        />
        <h1 className="display-title">{route.heading}</h1>
        {route.note && (
          <p className="mt-2 text-sm font-semibold text-[var(--color-accent-text)]">{route.note}</p>
        )}
        <p className="lede mt-4">{copy.lede}</p>
        <div className="mt-8 space-y-4 text-[15px] text-[var(--color-muted)] leading-relaxed">
          {copy.body.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <ul className="mt-6 space-y-2">
          {copy.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-[15px] text-[var(--color-ink-soft)]">
              <span className="text-[var(--color-accent)]" aria-hidden>
                ·
              </span>
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-[var(--color-faint)]">{pages.ui.noFaresNote}</p>

        <section className="mt-10 card p-6" aria-labelledby="howto-heading">
          <h2 id="howto-heading" className="font-display text-xl text-[var(--color-ink)] mb-2">
            {pages.ui.howToBook}
          </h2>
          <p className="text-[15px] text-[var(--color-muted)] mb-5">{pages.ui.howToBookBody}</p>
          <BookingCta
            enquireTo="/contact"
            destination={slug === 'srivilliputtur' ? undefined : (route.entityName ?? '')}
          />
        </section>

        <PageFaq items={copy.faqs} />

        <nav className="mt-12 border-t border-[var(--color-line)] pt-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-3">
            {pages.ui.relatedLocations}
          </h2>
          <ul className="flex flex-wrap gap-3">
            {others.map((r) => (
              <li key={r.path}>
                <Link to={r.path} className="text-[var(--color-accent-text)] font-medium hover:underline">
                  {r.entityName}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mt-6 mb-3">
            {pages.ui.relatedServices}
          </h2>
          <ul className="flex flex-wrap gap-3">
            {services.map((r) => (
              <li key={r.path}>
                <Link to={r.path} className="text-[var(--color-accent-text)] font-medium hover:underline">
                  {r.heading}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <RelatedBlogLinks pathname={`/locations/${slug}`} />
      </div>
    </article>
  );
};
