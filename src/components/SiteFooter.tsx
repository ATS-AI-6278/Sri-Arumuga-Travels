import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_DATA, mailtoHref, telHref, whatsappHref } from '../lib/contact';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';
import { getServiceRoutes, getLocationRoutes } from '../lib/seoConfig';

export const SiteFooter: React.FC = () => {
  const { t, locale } = useI18n();
  const pages = getPagesCopy(locale);
  const services = getServiceRoutes();
  const locations = getLocationRoutes().slice(0, 6);

  return (
    <footer className="site-footer relative z-10 border-t border-[var(--color-line)] bg-[var(--color-bg-deep)] px-5 sm:px-8 lg:px-12 py-12 md:py-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet="/logo-sm.webp" type="image/webp" />
              <img
                src="/logo-nav.png"
                alt=""
                width={40}
                height={31}
                className="h-10 w-auto rounded-lg object-contain ring-1 ring-[var(--color-line)] bg-[var(--color-surface)]"
                decoding="async"
                loading="lazy"
              />
            </picture>
            <p className="font-display text-xl text-[var(--color-ink)]">{t.brand.name}</p>
          </div>
          <p className="mt-2 text-sm text-[var(--color-muted)] max-w-sm">{t.brand.tagline}</p>
          <p className="mt-2 text-xs text-[var(--color-faint)]">{t.brand.homeBase}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 text-sm">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-2">
              {t.footer.call}
            </p>
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="block tabular-nums text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]"
            >
              {CONTACT_DATA.formattedPhone1}
            </a>
            <a
              href={telHref(CONTACT_DATA.phone2)}
              className="block tabular-nums text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1"
            >
              {CONTACT_DATA.formattedPhone2}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-2">
              {t.footer.message}
            </p>
            <a
              href={whatsappHref(t.whatsapp.greeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]"
            >
              {t.footer.whatsappEnquiry}
            </a>
            <Link
              to="/contact"
              className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1"
            >
              {t.footer.enquiryForm}
            </Link>
            <Link
              to="/blog"
              className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1"
            >
              {t.footer.blog}
            </Link>
            <a
              href={mailtoHref()}
              className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1 break-all"
            >
              {CONTACT_DATA.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-2">
              {pages.ui.seeAllServices}
            </p>
            <Link to="/services" className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]">
              {t.footer.services}
            </Link>
            {services.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1"
              >
                {s.heading}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-2">
              {pages.ui.seeAllLocations}
            </p>
            <Link to="/locations" className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]">
              {t.footer.destinations}
            </Link>
            {locations.map((loc) => (
              <Link
                key={loc.path}
                to={loc.path}
                className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1"
              >
                {loc.entityName}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[var(--color-line)] text-xs text-[var(--color-faint)] space-y-2">
        <p>
          © {new Date().getFullYear()} {t.brand.name}. {t.footer.copyright}
        </p>
        <p>
          {t.footer.adminEmailLabel}:{' '}
          <a
            href={`mailto:${CONTACT_DATA.ownerEmail}`}
            className="underline underline-offset-2 hover:text-[var(--color-accent-text)]"
          >
            {CONTACT_DATA.ownerEmail}
          </a>
        </p>
        <p>
          {t.footer.photoCreditsBefore}{' '}
          <a
            href="/PHOTO-CREDITS.txt"
            className="underline underline-offset-2 hover:text-[var(--color-accent-text)]"
          >
            {t.footer.photoCreditsLink}
          </a>
          {t.footer.photoCreditsAfter}
        </p>
      </div>
    </footer>
  );
};
