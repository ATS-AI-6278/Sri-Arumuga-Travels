import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Plane, Landmark, MapPinned } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { Reveal } from './Reveal';
import { SERVICE_PATH_BY_ID } from '../lib/seoConfig';

const ICONS = [Car, Plane, Landmark, MapPinned];

interface ServicesSectionProps {
  onEnquiryClick: () => void;
  onServiceNavigate?: (id: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquiryClick }) => {
  const { t } = useI18n();

  return (
    <section id="services" className="section-shell section-surface" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="eyebrow-dot" aria-hidden />
            {t.services.eyebrow}
          </p>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <h2 id="services-heading" className="display-title lg:col-span-7">
              {t.services.title}
            </h2>
            <p className="lede lg:col-span-5 lg:justify-self-end">{t.services.lede}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index] ?? Car;
            const to = SERVICE_PATH_BY_ID[service.id];
            const inner = (
              <>
                <div className="w-11 h-11 rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" aria-hidden strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent-text)]">
                  {service.title}
                </h3>
                <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
                  {service.description}
                </p>
              </>
            );
            return (
              <Reveal key={service.id} delayMs={60 + index * 60}>
                {to ? (
                  <Link to={to} className="card card-hover p-6 sm:p-7 h-full block group">
                    {inner}
                  </Link>
                ) : (
                  <article className="card card-hover p-6 sm:p-7 h-full">{inner}</article>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal
          delayMs={100}
          className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--color-line)] pt-8"
        >
          <p className="text-sm text-[var(--color-muted)] max-w-md">{t.services.ctaHint}</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/services" className="btn btn-secondary self-start sm:self-auto">
              {t.nav.services}
            </Link>
            <button
              type="button"
              onClick={onEnquiryClick}
              className="btn btn-primary self-start sm:self-auto"
            >
              {t.services.cta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
