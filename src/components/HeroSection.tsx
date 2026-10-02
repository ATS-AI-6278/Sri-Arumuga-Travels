import React from 'react';
import { ArrowDown, Phone, MessageCircle } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';

interface HeroSectionProps {
  onEnquiryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnquiryClick }) => {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="hero-cinematic relative min-h-[100svh] w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="hero-scene absolute inset-0">
        <picture>
          <source
            type="image/webp"
            srcSet="/hero-scene-768.webp 768w, /hero-scene.webp 1280w"
            sizes="100vw"
          />
          <img
            src="/hero-scene.jpg"
            alt={t.hero.sceneAlt}
            className="hero-scene-img"
            width={1280}
            height={720}
            decoding="sync"
            fetchPriority="high"
            sizes="100vw"
          />
        </picture>
        <div className="hero-scene-shade" aria-hidden />
        <div className="hero-scene-grain" aria-hidden />
      </div>

      <div className="hero-inner relative z-10 flex flex-col justify-between px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto w-full rise-in" style={{ animationDelay: '40ms' }}>
          <span className="eyebrow eyebrow-on-dark">
            <span className="eyebrow-dot" aria-hidden />
            {t.hero.basedIn} {t.brand.homeBase}
          </span>
        </div>

        <div className="max-w-6xl mx-auto w-full my-auto py-8 sm:py-10 lg:py-12">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
            <p
              className="text-[13px] sm:text-sm font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-soft)] mb-3 sm:mb-4 rise-in"
              style={{ animationDelay: '90ms' }}
            >
              {t.brand.name}
            </p>
            <h1
              id="hero-heading"
              className="font-display font-semibold text-[clamp(2.25rem,5.8vw,3.9rem)] leading-[1.1] tracking-[-0.028em] text-white max-w-[15ch] text-balance rise-in"
              style={{ animationDelay: '140ms' }}
            >
              {t.hero.titleBefore}{' '}
              <span className="italic font-medium text-[var(--color-accent-soft)]">
                {t.hero.titleAccent}
              </span>
            </h1>
            <p
              className="mt-5 sm:mt-6 max-w-md text-[1.02rem] sm:text-lg text-white/78 leading-[1.65] rise-in"
              style={{ animationDelay: '210ms' }}
            >
              {t.hero.lede}
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 rise-in"
              style={{ animationDelay: '280ms' }}
            >
              <a
                href={telHref(CONTACT_DATA.phone1)}
                className="btn btn-primary min-h-12 !px-5 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[var(--color-accent)]/25 group"
                aria-label={`Call ${CONTACT_DATA.formattedPhone1}`}
              >
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Phone className="w-3.5 h-3.5 fill-current" aria-hidden />
                </span>
                <span className="font-bold tracking-wide font-mono text-base">
                  {CONTACT_DATA.formattedPhone1}
                </span>
              </a>

              <button
                type="button"
                onClick={onEnquiryClick}
                className="btn btn-on-dark min-h-12 !px-5"
              >
                {t.common.sendEnquiry}
              </button>

              <a
                href={whatsappHref(t.whatsapp.greeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-on-dark min-h-12 inline-flex items-center gap-2 !px-4 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden />
                <span>WhatsApp</span>
              </a>
            </div>

            <div
              className="mt-6 inline-flex flex-wrap items-center gap-2.5 text-xs text-white/85 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-4 py-2.5 rise-in"
              style={{ animationDelay: '340ms' }}
            >
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
                Direct Desk:
              </span>
              <a
                href={telHref(CONTACT_DATA.phone1)}
                className="font-bold text-white hover:text-[var(--color-accent-soft)] transition-colors underline decoration-white/40 underline-offset-2 font-mono tracking-wide"
              >
                {CONTACT_DATA.formattedPhone1}
              </a>
              <span className="text-white/40" aria-hidden>·</span>
              <span className="text-white/80">Srivilliputtur &amp; South TN</span>
            </div>
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
            {t.hero.explore}
          </a>
          <p className="hidden sm:block text-xs text-white/45 tracking-wide">
            {t.brand.promise}
          </p>
        </div>
      </div>
    </section>
  );
};
