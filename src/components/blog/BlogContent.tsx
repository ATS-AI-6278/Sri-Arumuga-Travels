import React from 'react';
import { Link } from 'react-router-dom';
import type { ContentBlock } from '../../content/blog/types';
import { BlogEnquiryCta } from './BlogEnquiryCta';

interface Props {
  blocks: ContentBlock[];
}

export const BlogContent: React.FC<Props> = ({ blocks }) => {
  return (
    <div className="blog-prose space-y-5 text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return (
              <p key={i} className="text-[var(--color-muted)]">
                {b.text}
              </p>
            );
          case 'h2':
            return (
              <h2
                key={i}
                id={b.id}
                className="font-display text-2xl text-[var(--color-ink)] pt-4 scroll-mt-28"
              >
                {b.text}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={i}
                id={b.id}
                className="font-display text-xl text-[var(--color-ink)] pt-2 scroll-mt-28"
              >
                {b.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={i} className="list-disc pl-5 space-y-2 text-[var(--color-muted)]">
                {b.items.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="list-decimal pl-5 space-y-2 text-[var(--color-muted)]">
                {b.items.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ol>
            );
          case 'table':
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]">
                {b.caption && (
                  <p className="px-4 pt-3 text-xs text-[var(--color-faint)]">{b.caption}</p>
                )}
                <table className="w-full text-sm text-left">
                  <thead className="bg-[var(--color-surface-2)] text-[var(--color-ink)]">
                    <tr>
                      {b.headers.map((h) => (
                        <th key={h} className="px-4 py-2.5 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, ri) => (
                      <tr key={ri} className="border-t border-[var(--color-line)]">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-2.5 text-[var(--color-muted)] align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'faq':
            return (
              <div key={i} className="space-y-3">
                {b.items.map((item) => (
                  <details
                    key={item.q}
                    className="card p-4 group"
                  >
                    <summary className="cursor-pointer font-medium text-[var(--color-ink)] list-none flex justify-between gap-3">
                      <span>{item.q}</span>
                      <span className="text-[var(--color-accent)] group-open:rotate-45 transition-transform" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[15px] text-[var(--color-muted)]">{item.a}</p>
                  </details>
                ))}
              </div>
            );
          case 'callout':
            return (
              <aside
                key={i}
                className="rounded-xl border border-[var(--color-accent-soft)] bg-[var(--color-accent-soft)]/40 px-4 py-3 text-[15px] text-[var(--color-ink-soft)]"
              >
                {b.text}
              </aside>
            );
          case 'cta':
            return <BlogEnquiryCta key={i} note={b.note} />;
          case 'links':
            return (
              <nav key={i} className="pt-2" aria-label={b.title ?? 'Related links'}>
                {b.title && (
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-2">
                    {b.title}
                  </p>
                )}
                <ul className="flex flex-wrap gap-2">
                  {b.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-accent-text)] hover:border-[var(--color-accent)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
