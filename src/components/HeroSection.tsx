import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';
import { BRAND } from '../lib/content';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface HeroSectionProps {
  onEnquiryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnquiryClick }) => {
  const [mounted, setMounted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), reducedMotion ? 0 : 80);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  const reveal = (delayClass: string) =>
    mounted || reducedMotion
      ? `opacity-100 translate-y-0 ${delayClass}`
      : 'opacity-0 translate-y-5';

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 sm:pt-32 pb-10 section-shell !py-0 z-10"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-black/45 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(12,14,18,0.72)_100%)] pointer-events-none -z-10" />

      <div className={`max-w-7xl mx-auto w-full pt-6 transition-all duration-700 ${reveal('')}`}>
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-3.5 py-1.5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" aria-hidden />
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">
            Based in {BRAND.homeBase}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full my-auto py-10">
        <p
          className={`font-display text-sm sm:text-base tracking-[0.28em] uppercase text-[var(--color-gold)] mb-4 transition-all duration-700 ${reveal('delay-100')}`}
        >
          {BRAND.name}
        </p>
        <h1
          id="hero-heading"
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--color-cream)] leading-[1.08] max-w-4xl text-balance transition-all duration-700 ${reveal('delay-150')}`}
        >
          Travel from Srivilliputtur to Anywhere in India
        </h1>
        <p
          className={`mt-5 sm:mt-6 text-base sm:text-xl text-[var(--color-muted)] max-w-2xl leading-relaxed font-light transition-all duration-700 ${reveal('delay-200')}`}
        >
          Small-car and taxi journeys planned with care — for families, pilgrims, and everyday
          travellers who want a calm ride and a clear conversation before they leave.
        </p>

        <div
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-700 ${reveal('delay-300')}`}
        >
          <a href={telHref(CONTACT_DATA.phone1)} className="btn-primary">
            <Phone className="w-4 h-4" aria-hidden />
            Call now
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden />
            WhatsApp
          </a>
          <button type="button" onClick={onEnquiryClick} className="btn-secondary">
            Send an enquiry
          </button>
        </div>

        <p className={`mt-5 text-xs sm:text-sm text-[var(--color-faint)] transition-all duration-700 ${reveal('delay-300')}`}>
          Direct lines:{' '}
          <a className="text-white/75 hover:text-[var(--color-gold)] font-mono" href={telHref(CONTACT_DATA.phone1)}>
            {CONTACT_DATA.formattedPhone1}
          </a>
          <span className="mx-2 text-white/25">·</span>
          <a className="text-white/75 hover:text-[var(--color-gold)] font-mono" href={telHref(CONTACT_DATA.phone2)}>
            {CONTACT_DATA.formattedPhone2}
          </a>
        </p>
      </div>

      <div className={`max-w-7xl mx-auto w-full flex items-center justify-between gap-4 pb-6 transition-all duration-700 ${reveal('delay-500')}`}>
        <a
          href="#services"
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/45 hover:text-[var(--color-gold)]"
        >
          <span className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5" aria-hidden>
            <span className="w-1 h-1.5 rounded-full bg-[var(--color-gold)] motion-safe:animate-bounce" />
          </span>
          Explore how we travel
        </a>
        <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] text-white/35">
          {BRAND.promise}
        </p>
        <ArrowDown className="sm:hidden w-4 h-4 text-white/30" aria-hidden />
      </div>
    </section>
  );
};
