import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookingCta } from '../components/BookingCta';
import { PageFaq } from '../components/PageFaq';
import { getRouteByPath, getServiceRoutes, getLocationRoutes } from '../lib/seoConfig';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';
import { RelatedBlogLinks } from '../components/blog/RelatedBlogLinks';

const SLUGS = ['outstation-cab', 'airport-taxi', 'temple-pilgrimage', 'local-taxi'] as const;

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useI18n();
  const pages = getPagesCopy(locale);

  if (!slug || !(SLUGS as readonly string[]).includes(slug)) {
    return <Navigate to="/services" replace />;
  }

  const route = getRouteByPath(`/services/${slug}`)!;
  const copy = pages.services[slug as keyof typeof pages.services];
  const otherServices = getServiceRoutes().filter((r) => r.id !== slug);
  const sampleLocations = getLocationRoutes().filter((r) => r.id !== 'srivilliputtur').slice(0, 4);
  return (
    <article className="section-shell section-surface pt-[calc(var(--header-h)+2rem)]">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs
          items={[
            { label: pages.ui.home, to: '/' },
            { label: pages.ui.seeAllServices, to: '/services' },
            { label: route.heading },
          ]}
        />
        <h1 className="display-title">{route.heading}</h1>
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
          <BookingCta />
        </section>

        <PageFaq items={copy.faqs} />

        <nav className="mt-12 border-t border-[var(--color-line)] pt-8" aria-label={pages.ui.relatedServices}>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-3">
            {pages.ui.relatedServices}
          </h2>
          <ul className="flex flex-wrap gap-3">
            {otherServices.map((r) => (
              <li key={r.path}>
                <Link to={r.path} className="text-[var(--color-accent-text)] font-medium hover:underline">
                  {r.heading}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mt-6 mb-3">
            {pages.ui.relatedLocations}
          </h2>
          <ul className="flex flex-wrap gap-3">
            {sampleLocations.map((r) => (
              <li key={r.path}>
                <Link to={r.path} className="text-[var(--color-accent-text)] font-medium hover:underline">
                  {r.entityName}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/locations" className="text-[var(--color-accent-text)] font-medium hover:underline">
                {pages.ui.seeAllLocations}
              </Link>
            </li>
          </ul>
        </nav>
        <RelatedBlogLinks pathname={`/services/${slug}`} />
      </div>
    </article>
  );
};
