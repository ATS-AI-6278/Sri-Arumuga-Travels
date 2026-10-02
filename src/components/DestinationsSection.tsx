import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { Reveal } from './Reveal';
import { DESTINATION_PATH_BY_ID } from '../lib/seoConfig';

interface DestinationsSectionProps {
  onEnquireRoute: (destination: string) => void;
  onDestinationNavigate?: (id: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onEnquireRoute }) => {
  const { t } = useI18n();

  return (
    <section
      id="destinations"
      className="section-shell section-muted"
      aria-labelledby="destinations-heading"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="eyebrow-dot" aria-hidden />
            {t.destinations.eyebrow}
          </p>
          <h2 id="destinations-heading" className="display-title max-w-3xl">
            {t.destinations.title}
          </h2>
          <p className="lede mt-4">{t.destinations.lede}</p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {t.destinations.items.map((place, i) => {
            const path = DESTINATION_PATH_BY_ID[place.id];
            const label =
              place.id === 'anywhere'
                ? t.destinations.enquireCustom
                : `${t.destinations.enquireTo} ${place.name}`;
            const body = (
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg text-[var(--color-ink)] group-hover:text-[var(--color-accent-text)] transition-colors">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{place.note}</p>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[var(--color-faint)] group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                  aria-hidden
                />
              </div>
            );
            return (
              <li key={place.id}>
                <Reveal delayMs={40 + i * 40}>
                  {path ? (
                    <Link to={path} aria-label={label} className="w-full text-left card card-hover p-5 group block">
                      {body}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onEnquireRoute('')}
                      aria-label={label}
                      className="w-full text-left card card-hover p-5 group"
                    >
                      {body}
                    </button>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
        <Reveal className="mt-8">
          <Link to="/locations" className="text-[var(--color-accent-text)] font-semibold hover:underline">
            {t.nav.destinations} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
