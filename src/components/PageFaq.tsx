import React from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';

interface FaqItem {
  q: string;
  a: string;
}

interface PageFaqProps {
  items: readonly FaqItem[];
}

/** Visible FAQ accordion — only render when items exist (for FAQPage schema parity). */
export const PageFaq: React.FC<PageFaqProps> = ({ items }) => {
  const { locale } = useI18n();
  const ui = getPagesCopy(locale).ui;
  if (!items.length) return null;

  return (
    <section className="mt-12 border-t border-[var(--color-line)] pt-10" aria-labelledby="page-faq-heading">
      <h2 id="page-faq-heading" className="font-display text-2xl text-[var(--color-ink)] mb-6">
        {ui.faqTitle}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="card group p-5 open:shadow-[var(--shadow-soft)]"
          >
            <summary className="font-display text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between gap-3 items-start">
              <span>{item.q}</span>
              <span
                className="text-[var(--color-accent)] text-xl leading-none shrink-0 mt-0.5 group-open:rotate-45 transition-transform"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-[15px] text-[var(--color-muted)] leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
