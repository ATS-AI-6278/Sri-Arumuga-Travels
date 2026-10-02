import React from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { Reveal } from './Reveal';

export const FaqSection: React.FC = () => {
  const { t } = useI18n();

  if (!t.faq?.items?.length) return null;

  return (
    <section id="faq" className="section-shell section-muted" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="eyebrow-dot" aria-hidden />
            {t.faq.eyebrow}
          </p>
          <h2 id="faq-heading" className="display-title max-w-3xl">
            {t.faq.title}
          </h2>
          <p className="lede mt-4">{t.faq.lede}</p>
        </Reveal>

        <div className="mt-10 space-y-3 sm:space-y-4 max-w-3xl">
          {t.faq.items.map((item, i) => (
            <Reveal key={item.question} delayMs={40 + i * 50}>
              <details className="card group open:shadow-[var(--shadow-card)]">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 p-5 sm:p-6 font-display text-lg sm:text-xl text-[var(--color-ink)] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span
                    className="shrink-0 mt-1 text-[var(--color-accent-text)] text-xl leading-none transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-[15px] text-[var(--color-muted)] leading-relaxed">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
