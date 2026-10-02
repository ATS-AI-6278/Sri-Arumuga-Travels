import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_DATA, telHref } from '../lib/contact';
import { BRAND } from '../lib/content';
import { Reveal } from './Reveal';

interface StorySectionProps {
  onEnquiryClick: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onEnquiryClick }) => {
  return (
    <section id="story" className="section-shell section-band-alt z-10" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="section-marker">
              <span className="section-marker-line" aria-hidden />
              <span className="section-marker-text">Our story</span>
            </div>
            <h2
              id="story-heading"
              className="font-display text-[1.85rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] text-balance leading-[1.12]"
            >
              A travel desk rooted in Srivilliputtur.
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="mt-6 space-y-5 text-base sm:text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-2xl">
              <p>
                Sri Arumuga Travels grew from an everyday need — leaving town with confidence
                for a wedding across Tamil Nadu, a temple visit with elders, or a long drive
                to meet family elsewhere in India.
              </p>
              <p>
                We keep it simple: a well-kept small car, a driver who knows the route, and
                Call or WhatsApp when plans need to change. That is the travel people from here look for.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={140} className="mt-9 flex flex-wrap items-center gap-4">
            <button type="button" onClick={onEnquiryClick} className="btn-primary">
              Plan a journey
            </button>
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--color-gold)] font-mono transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--color-gold)]" aria-hidden />
              {CONTACT_DATA.formattedPhone1}
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5" delayMs={100}>
          <aside className="panel p-7 sm:p-9 relative overflow-hidden">
            <div
              className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[var(--color-gold)]/10 blur-3xl pointer-events-none"
              aria-hidden
            />
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-gold)] font-semibold relative">
              Home base
            </p>
            <p className="mt-3 font-display text-2xl sm:text-3xl text-white leading-snug relative">
              {BRAND.homeBase}
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed relative">
              From Andal’s temple town, roads reach Madurai, the coast, the hills, and the rest of India.
              We start here — and take you where you need to go.
            </p>
            <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm relative">
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">How to book</dt>
                <dd className="text-white/85 text-right">Call · WhatsApp · Enquiry</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">Vehicle</dt>
                <dd className="text-white/85 text-right">Small car / sedan</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">Coverage</dt>
                <dd className="text-white/85 text-right">Across India by road</dd>
              </div>
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};
