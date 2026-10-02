import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Plane, Landmark, MapPinned } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookingCta } from '../components/BookingCta';
import { getServiceRoutes } from '../lib/seoConfig';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';

const ICONS = [Car, Plane, Landmark, MapPinned];

export const ServicesHubPage: React.FC = () => {
  const { locale } = useI18n();
  const pages = getPagesCopy(locale);
  const routes = getServiceRoutes();

  return (
    <div className="section-shell section-surface pt-[calc(var(--header-h)+2rem)]">
      <div className="max-w-6xl mx-auto">
        <Breadcrumbs
          items={[
            { label: pages.ui.home, to: '/' },
            { label: pages.ui.seeAllServices },
          ]}
        />
        <p className="eyebrow mb-4">
          <span className="eyebrow-dot" aria-hidden />
          {pages.servicesHub.eyebrow}
        </p>
        <h1 className="display-title max-w-3xl">{pages.servicesHub.title}</h1>
        <p className="lede mt-4 max-w-2xl">{pages.servicesHub.lede}</p>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {routes.map((route, i) => {
            const Icon = ICONS[i] ?? Car;
            const copy = pages.services[route.id as keyof typeof pages.services];
            return (
              <li key={route.path}>
                <Link to={route.path} className="card card-hover p-6 sm:p-7 h-full block group">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" aria-hidden strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-accent-text)] mb-2">
                    {route.heading}
                  </h2>
                  <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
                    {copy?.lede ?? route.description}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-sm text-[var(--color-muted)]">{pages.servicesHub.ctaHint}</p>
        <BookingCta className="mt-6" />
        <p className="mt-8">
          <Link to="/locations" className="text-[var(--color-accent-text)] font-semibold hover:underline">
            {pages.ui.seeAllLocations} →
          </Link>
        </p>
      </div>
    </div>
  );
};
