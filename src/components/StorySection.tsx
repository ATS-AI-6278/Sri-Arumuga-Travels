import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_DATA, telHref } from '../lib/contact';
import { BRAND } from '../lib/content';

interface StorySectionProps {
  onEnquiryClick: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onEnquiryClick }) => {
  return (
    <section id="story" className="section-shell z-10" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <div className="section-marker">
            <span className="section-marker-line" aria-hidden />
            <span className="section-marker-text">Our story</span>
          </div>
          <h2
            id="story-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] text-balance"
          >
            A travel desk rooted in Srivilliputtur.
          </h2>
          <div className="mt-6 space-y-5 text-base sm:text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-2xl">
            <p>
              Sri Arumuga Travels grew from the everyday need to leave town with confidence —
              whether for a wedding on the other side of Tamil Nadu, a temple visit with elders, or
              a long drive to meet family elsewhere in India.
            </p>
            <p>
              We keep things simple: a well-kept small car, a driver who understands the route, and
              a phone that answers when you need to change plans. That is the kind of travel people
              from here trust.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" onClick={onEnquiryClick} className="btn-primary">
              Plan a journey
            </button>
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--color-gold)] font-mono"
            >
              <Phone className="w-4 h-4 text-[var(--color-gold)]" aria-hidden />
              {CONTACT_DATA.formattedPhone1}
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5 panel p-7 sm:p-9">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-gold)] font-semibold">
            Home base
          </p>
          <p className="mt-3 font-display text-2xl sm:text-3xl text-white leading-snug">
            {BRAND.homeBase}
          </p>
          <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
            From the temple town of Andal, roads fan out toward Madurai, the coast, the hills, and
            the rest of India. We start here — and we take you where you need to go.
          </p>
          <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-[var(--color-faint)]">Service style</dt>
              <dd className="text-white/85 text-right">Call · WhatsApp · Enquiry</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[var(--color-faint)]">Vehicle focus</dt>
              <dd className="text-white/85 text-right">Small car / sedan travel</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[var(--color-faint)]">Coverage</dt>
              <dd className="text-white/85 text-right">Across India by road</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
};
