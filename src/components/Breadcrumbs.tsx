import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { locale } = useI18n();
  const ui = getPagesCopy(locale).ui;

  return (
    <nav aria-label={ui.breadcrumbNav} className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-muted)]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-[var(--color-faint)]" aria-hidden>
                  /
                </span>
              )}
              {item.to && !last ? (
                <Link
                  to={item.to}
                  className="hover:text-[var(--color-accent-text)] underline-offset-2 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={last ? 'text-[var(--color-ink-soft)] font-medium' : undefined}
                  aria-current={last ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
