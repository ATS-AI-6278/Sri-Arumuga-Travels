import React from 'react';
import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';
import { BRAND } from '../lib/content';
import { Atmosphere } from './Atmosphere';

interface HeroSectionProps {
  onEnquiryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnquiryClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Atmosphere variant="hero" />

      <div className="hero-inner relative z-10 flex flex-col justify-between px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto w-full rise-in" style={{ animationDelay: '40ms' }}>
          <span className="eyebrow">
            <span className="eyebrow-dot" aria-hidden />
            Based in {BRAND.homeBase}
          </span>
        </div>

        <div className="max-w-6xl mx-auto w-full my-auto py-6 sm:py-8 lg:py-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
            <div className="lg:col-span-5 xl:col-span-5 relative z-[2]">
              <p
                className="text-[13px] sm:text-sm font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-text)] mb-3 sm:mb-4 rise-in"
                style={{ animationDelay: '90ms' }}
              >
                {BRAND.name}
              </p>
              <h1
                id="hero-heading"
                className="font-display font-semibold text-[clamp(2.2rem,5.8vw,3.85rem)] leading-[1.1] tracking-[-0.028em] text-[var(--color-ink)] max-w-[15ch] text-balance rise-in"
                style={{ animationDelay: '140ms' }}
              >
                Travel from Srivilliputtur to{' '}
                <span className="italic font-medium text-[var(--color-accent-text)]">
                  anywhere in India
                </span>
              </h1>
              <p
                className="mt-5 sm:mt-6 max-w-md text-[1.02rem] sm:text-lg text-[var(--color-muted)] leading-[1.65] rise-in"
                style={{ animationDelay: '210ms' }}
              >
                Quiet sedan journeys for families, pilgrims, and everyday travellers —
                planned by phone or WhatsApp before you leave town.
              </p>

              <div
                className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 rise-in"
                style={{ animationDelay: '280ms' }}
              >
                <a href={telHref(CONTACT_DATA.phone1)} className="btn btn-primary min-h-12">
                  <Phone className="w-4 h-4" aria-hidden />
                  Call now
                </a>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp min-h-12"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden />
                  WhatsApp
                </a>
                <button
                  type="button"
                  onClick={onEnquiryClick}
                  className="btn btn-secondary min-h-12 hidden sm:inline-flex"
                >
                  Send an enquiry
                </button>
                <button
                  type="button"
                  onClick={onEnquiryClick}
                  className="sm:hidden text-sm font-semibold text-[var(--color-accent-text)] underline-offset-4 hover:underline py-1 self-start"
                >
                  Or send an enquiry →
                </button>
              </div>

              <p
                className="mt-5 text-sm text-[var(--color-faint)] rise-in"
                style={{ animationDelay: '340ms' }}
              >
                <a
                  className="text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] font-medium tabular-nums"
                  href={telHref(CONTACT_DATA.phone1)}
                >
                  {CONTACT_DATA.formattedPhone1}
                </a>
                <span className="mx-2 text-[var(--color-line-strong)]" aria-hidden>
                  ·
                </span>
                <a
                  className="text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] font-medium tabular-nums"
                  href={telHref(CONTACT_DATA.phone2)}
                >
                  {CONTACT_DATA.formattedPhone2}
                </a>
              </p>
            </div>

            <div
              className="lg:col-span-7 xl:col-span-7 rise-in"
              style={{ animationDelay: '200ms' }}
            >
              <figure className="hero-car relative mx-auto w-full max-w-lg sm:max-w-xl lg:max-w-none lg:-mr-4 xl:-mr-8">
                <div className="hero-car-ground" aria-hidden />
                <div className="hero-car-glow" aria-hidden />
                <div className="hero-car-shadow" aria-hidden />
                <img
                  src="/etios-gxd-grey.webp"
                  alt="Silver-grey Toyota Etios sedan — the kind of car we drive from Srivilliputtur"
                  width={1600}
                  height={794}
                  className="hero-car-img relative z-[1] w-full h-auto select-none pointer-events-none"
                  decoding="async"
                  fetchPriority="high"
                />
                <figcaption className="mt-3 text-center lg:text-right text-[11px] tracking-wide text-[var(--color-faint)] relative z-[1]">
                  Toyota Etios sedan · quiet highway travel
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto w-full flex items-center justify-between gap-4 rise-in"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] hover:text-[var(--color-accent-text)] transition-colors"
          >
            <ArrowDown className="w-4 h-4" aria-hidden />
            Explore
          </a>
          <p className="hidden sm:block text-xs text-[var(--color-faint)] tracking-wide">
            {BRAND.promise}
          </p>
        </div>
      </div>
    </section>
  );
};
