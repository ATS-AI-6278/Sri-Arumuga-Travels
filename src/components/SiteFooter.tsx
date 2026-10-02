import React from 'react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';
import { BRAND } from '../lib/content';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer relative z-10 border-t border-[var(--color-line)] bg-[var(--color-bg-deep)] px-5 sm:px-8 lg:px-12 py-12 md:py-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <p className="font-display text-xl text-[var(--color-ink)]">{BRAND.name}</p>
          <p className="mt-2 text-sm text-[var(--color-muted)] max-w-sm">{BRAND.tagline}</p>
          <p className="mt-2 text-xs text-[var(--color-faint)]">{BRAND.homeBase}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 text-sm">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-2">Call</p>
            <a href={telHref(CONTACT_DATA.phone1)} className="block tabular-nums text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]">
              {CONTACT_DATA.formattedPhone1}
            </a>
            <a href={telHref(CONTACT_DATA.phone2)} className="block tabular-nums text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1">
              {CONTACT_DATA.formattedPhone2}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-2">Message</p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]"
            >
              WhatsApp enquiry
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-faint)] mb-2">On this page</p>
            <a href="#enquire" className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]">
              Enquiry form
            </a>
            <a href="#services" className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1">
              Services
            </a>
            <a href="#destinations" className="block text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] mt-1">
              Destinations
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[var(--color-line)] text-xs text-[var(--color-faint)] space-y-2">
        <p>© {new Date().getFullYear()} {BRAND.name}. Small-car travel from Srivilliputtur.</p>
        <p>
          Vehicle photos adapted from Wikimedia Commons (CC BY / CC BY-SA) — see{' '}
          <a href="/PHOTO-CREDITS.txt" className="underline underline-offset-2 hover:text-[var(--color-accent-text)]">
            photo credits
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
