import React from 'react';
import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';
import { BRAND } from '../lib/content';

interface HeroSectionProps {
  onEnquiryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnquiryClick }) => {
  return (
    <section
      id="hero"
      className="hero-cinematic relative min-h-[100svh] w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed AI travel scene — dark grey Etios on a scenic road */}
      <div className="hero-scene absolute inset-0" aria-hidden>
        <picture>
          <source srcSet="/hero-scene.webp" type="image/webp" />
          <img
            src="/hero-scene.jpg"
            alt=""
            className="hero-scene-img"
            width={1280}
            height={720}
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-scene-shade" />
        <div className="hero-scene-grain" />
      </div>

      <div className="hero-inner relative z-10 flex flex-col justify-between px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto w-full rise-in" style={{ animationDelay: '40ms' }}>
          <span className="eyebrow eyebrow-on-dark">
            <span className="eyebrow-dot" aria-hidden />
            Based in {BRAND.homeBase}
          </span>
        </div>

        <div className="max-w-6xl mx-auto w-full my-auto py-8 sm:py-10 lg:py-12">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
            <p
              className="text-[13px] sm:text-sm font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-soft)] mb-3 sm:mb-4 rise-in"
              style={{ animationDelay: '90ms' }}
            >
              {BRAND.name}
            </p>
            <h1
              id="hero-heading"
              className="font-display font-semibold text-[clamp(2.25rem,5.8vw,3.9rem)] leading-[1.1] tracking-[-0.028em] text-white max-w-[15ch] text-balance rise-in"
              style={{ animationDelay: '140ms' }}
            >
              Travel from Srivilliputtur to{' '}
              <span className="italic font-medium text-[var(--color-accent-soft)]">
                anywhere in India
              </span>
            </h1>
            <p
              className="mt-5 sm:mt-6 max-w-md text-[1.02rem] sm:text-lg text-white/78 leading-[1.65] rise-in"
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
                className="btn btn-on-dark min-h-12 hidden sm:inline-flex"
              >
                Send an enquiry
              </button>
              <button
                type="button"
                onClick={onEnquiryClick}
                className="sm:hidden text-sm font-semibold text-[var(--color-accent-soft)] underline-offset-4 hover:underline py-1 self-start"
              >
                Or send an enquiry →
              </button>
            </div>

            <p
              className="mt-5 text-sm text-white/55 rise-in"
              style={{ animationDelay: '340ms' }}
            >
              <a
                className="text-white/85 hover:text-[var(--color-accent-soft)] font-medium tabular-nums"
                href={telHref(CONTACT_DATA.phone1)}
              >
                {CONTACT_DATA.formattedPhone1}
              </a>
              <span className="mx-2 text-white/35" aria-hidden>
                ·
              </span>
              <a
                className="text-white/85 hover:text-[var(--color-accent-soft)] font-medium tabular-nums"
                href={telHref(CONTACT_DATA.phone2)}
              >
                {CONTACT_DATA.formattedPhone2}
              </a>
            </p>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto w-full flex items-center justify-between gap-4 rise-in"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60 hover:text-[var(--color-accent-soft)] transition-colors"
          >
            <ArrowDown className="w-4 h-4" aria-hidden />
            Explore
          </a>
          <p className="hidden sm:block text-xs text-white/45 tracking-wide">
            {BRAND.promise}
          </p>
        </div>
      </div>

      {/* Visually hidden alt for the scene photo */}
      <span className="sr-only">
        Dark grey Toyota Etios sedan on a scenic road at golden hour — the kind of quiet journey we drive from Srivilliputtur.
      </span>
    </section>
  );
};
