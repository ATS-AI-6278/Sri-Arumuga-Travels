import React from 'react';

interface Item {
  id: string;
  text: string;
  level: 2 | 3;
}

interface Props {
  items: Item[];
  label: string;
}

export const BlogToc: React.FC<Props> = ({ items, label }) => {
  if (items.length < 3) return null;
  return (
    <nav
      aria-label={label}
      className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 sm:p-5 mb-8"
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-3">
        {label}
      </p>
      <ol className="space-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'pl-3' : undefined}>
            <a
              href={`#${item.id}`}
              className="text-[var(--color-ink-soft)] hover:text-[var(--color-accent-text)]"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
