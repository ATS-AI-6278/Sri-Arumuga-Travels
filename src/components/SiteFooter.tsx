import React from 'react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';
import { BRAND } from '../lib/content';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer relative z-10 border-t border-white/[0.07] px-5 sm:px-8 lg:px-12 py-14 pb-10 md:pb-14 bg-[color-mix(in_srgb,var(--color-ink)_96%,transparent)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <p className="font-display text-lg tracking-[0.16em] uppercase text-[var(--color-gold)]">
            {BRAND.name}
          </p>
          <p className="mt-2 text-sm text-[var(--color-muted)] max-w-md">{BRAND.tagline}</p>
          <p className="mt-3 text-xs text-[var(--color-faint)]">{BRAND.homeBase}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2">Call</p>
            <a href={telHref(CONTACT_DATA.phone1)} className="block font-mono text-white/80 hover:text-[var(--color-gold)]">
              {CONTACT_DATA.formattedPhone1}
            </a>
            <a href={telHref(CONTACT_DATA.phone2)} className="block font-mono text-white/80 hover:text-[var(--color-gold)] mt-1">
              {CONTACT_DATA.formattedPhone2}
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2">Message</p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[var(--color-gold)]"
            >
              WhatsApp enquiry
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2">On this page</p>
            <a href="#enquire" className="block text-white/80 hover:text-[var(--color-gold)]">
              Enquiry form
            </a>
            <a href="#services" className="block text-white/80 hover:text-[var(--color-gold)] mt-1">
              Services
            </a>
            <a href="#destinations" className="block text-white/80 hover:text-[var(--color-gold)] mt-1">
              Destinations
            </a>
          </div>
        </div>
      </div>
      <p className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-white/35">
        © {new Date().getFullYear()} {BRAND.name}. Small-car travel from Srivilliputtur.
      </p>
    </footer>
  );
};
