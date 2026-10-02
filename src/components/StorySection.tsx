import React from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { Reveal } from './Reveal';
import { CONTACT_DATA, telHref } from '../lib/contact';

interface StorySectionProps {
  onEnquiryClick: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onEnquiryClick }) => {
  const { t } = useI18n();

  return (
    <section id="story" className="section-shell section-muted" aria-labelledby="story-heading">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="eyebrow-dot" aria-hidden />
              {t.story.eyebrow}
            </p>
            <h2 id="story-heading" className="display-title">
              {t.story.title}
            </h2>
          </Reveal>
          <Reveal delayMs={70}>
            <div className="mt-5 space-y-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
            </div>
          </Reveal>
          <Reveal delayMs={120} className="mt-8">
            <button type="button" onClick={onEnquiryClick} className="btn btn-secondary">
              {t.story.planCta}
            </button>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5" delayMs={90}>
          <aside className="card p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-text)]">
              {t.story.homeBaseLabel}
            </p>
            <p className="mt-3 font-display text-2xl sm:text-3xl text-[var(--color-ink)] leading-snug">
              {t.brand.homeBase}
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
              {t.story.homeBaseBody}
            </p>
            <dl className="mt-7 space-y-3 border-t border-[var(--color-line)] pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">{t.story.howToBook}</dt>
                <dd className="font-medium text-[var(--color-ink-soft)]">{t.story.howToBookValue}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">{t.story.vehicle}</dt>
                <dd className="font-medium text-[var(--color-ink-soft)]">{t.story.vehicleValue}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">{t.story.coverage}</dt>
                <dd className="font-medium text-[var(--color-ink-soft)]">{t.story.coverageValue}</dd>
              </div>
              <div className="flex justify-between items-center gap-4 pt-3 border-t border-[var(--color-line)]">
                <dt className="text-[var(--color-faint)]">{t.story.directPhone}</dt>
                <dd>
                  <a
                    href={telHref(CONTACT_DATA.phone1)}
                    className="font-bold text-[var(--color-accent-text)] hover:underline font-mono text-base tracking-wide"
                  >
                    {CONTACT_DATA.formattedPhone1}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};
