import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookingCta } from '../components/BookingCta';
import { getLocationRoutes } from '../lib/seoConfig';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';

export const LocationsHubPage: React.FC = () => {
  const { locale } = useI18n();
  const pages = getPagesCopy(locale);
  const routes = getLocationRoutes();

  return (
    <div className="section-shell section-muted pt-[calc(var(--header-h)+2rem)]">
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs
          items={[
            { label: pages.ui.home, to: '/' },
            { label: pages.ui.seeAllLocations },
          ]}
        />
        <p className="eyebrow mb-4">
          <span className="eyebrow-dot" aria-hidden />
          {pages.locationsHub.eyebrow}
        </p>
        <h1 className="display-title max-w-3xl">{pages.locationsHub.title}</h1>
        <p className="lede mt-4 max-w-2xl">{pages.locationsHub.lede}</p>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route) => {
            const copy = pages.locations[route.id as keyof typeof pages.locations];
            return (
              <li key={route.path}>
                <Link to={route.path} className="card card-hover p-5 h-full block group">
                  <h2 className="font-display text-lg text-[var(--color-ink)] group-hover:text-[var(--color-accent-text)]">
                    {route.entityName}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{route.note}</p>
                  <p className="mt-3 text-[13px] text-[var(--color-faint)] line-clamp-2">
                    {copy?.lede}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <BookingCta className="mt-10" />
        <p className="mt-8">
          <Link to="/services" className="text-[var(--color-accent-text)] font-semibold hover:underline">
            {pages.ui.seeAllServices} →
          </Link>
        </p>
      </div>
    </div>
  );
};
