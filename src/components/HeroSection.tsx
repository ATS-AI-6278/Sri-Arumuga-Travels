import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';
import { BRAND } from '../lib/content';

interface HeroSectionProps {
  onEnquiryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnquiryClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between z-10 film-grain"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 hero-vignette pointer-events-none" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-44 pointer-events-none bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/70 to-transparent"
        aria-hidden
      />

      <div className="relative flex-1 flex flex-col justify-between px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto w-full hero-enter" style={{ animationDelay: '40ms' }}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-3.5 py-1.5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inset-0 rounded-full bg-[var(--color-gold)] opacity-35 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-gold)]" />
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white/70">
              Based in {BRAND.homeBase}
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full my-auto py-12 sm:py-16">
          <p
            className="font-display text-[13px] sm:text-sm tracking-[0.32em] uppercase text-[var(--color-gold)] mb-5 sm:mb-6 hero-enter"
            style={{ animationDelay: '100ms' }}
          >
            {BRAND.name}
          </p>

          <h1
            id="hero-heading"
            className="hero-headline text-[var(--color-cream)] max-w-[14ch] sm:max-w-[16ch] text-balance hero-enter"
            style={{ animationDelay: '160ms' }}
          >
            Travel from Srivilliputtur to <em>Anywhere in India</em>
          </h1>

          <p
            className="mt-6 sm:mt-7 text-[15px] sm:text-lg md:text-xl text-[var(--color-muted)] max-w-xl leading-relaxed font-light hero-enter"
            style={{ animationDelay: '240ms' }}
          >
            Quiet sedan journeys for families, pilgrims, and everyday travellers —
            planned by phone or WhatsApp before you leave town.
          </p>

          <div
            className="mt-9 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 hero-enter"
            style={{ animationDelay: '320ms' }}
          >
            <a href={telHref(CONTACT_DATA.phone1)} className="btn-primary min-h-12 sm:min-h-0">
              <Phone className="w-4 h-4" aria-hidden />
              Call now
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp min-h-12 sm:min-h-0"
            >
              <MessageCircle className="w-4 h-4" aria-hidden />
              WhatsApp
            </a>
            <button type="button" onClick={onEnquiryClick} className="btn-secondary min-h-12 sm:min-h-0">
              Send an enquiry
            </button>
          </div>

          <p
            className="mt-5 text-xs sm:text-sm text-[var(--color-faint)] hero-enter"
            style={{ animationDelay: '380ms' }}
          >
            <a
              className="text-white/80 hover:text-[var(--color-gold)] font-mono tracking-wide transition-colors"
              href={telHref(CONTACT_DATA.phone1)}
            >
              {CONTACT_DATA.formattedPhone1}
            </a>
            <span className="mx-2.5 text-white/20" aria-hidden>
              ·
            </span>
            <a
              className="text-white/80 hover:text-[var(--color-gold)] font-mono tracking-wide transition-colors"
              href={telHref(CONTACT_DATA.phone2)}
            >
              {CONTACT_DATA.formattedPhone2}
            </a>
          </p>
        </div>

        <div
          className="max-w-7xl mx-auto w-full flex items-end justify-between gap-4 hero-enter"
          style={{ animationDelay: '460ms' }}
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/45 hover:text-[var(--color-gold)] transition-colors"
          >
            <span
              className="w-5 h-9 rounded-full border border-white/20 group-hover:border-[var(--color-gold)]/60 flex items-start justify-center p-1.5 transition-colors"
              aria-hidden
            >
              <span className="w-1 h-1.5 rounded-full bg-[var(--color-gold)] motion-safe:animate-bounce" />
            </span>
            Scroll to explore
          </a>
          <p className="hidden md:block text-[10px] uppercase tracking-[0.22em] text-white/30 max-w-[16rem] text-right leading-relaxed">
            {BRAND.promise}
          </p>
        </div>
      </div>
    </section>
  );
};
