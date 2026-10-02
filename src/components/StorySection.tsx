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
    <section id="story" className="section-shell section-muted" aria-labelledby="story-heading">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="eyebrow-dot" aria-hidden />
              Our story
            </p>
            <h2 id="story-heading" className="display-title">
              A travel desk rooted in Srivilliputtur.
            </h2>
          </Reveal>
          <Reveal delayMs={70}>
            <div className="mt-5 space-y-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
              <p>
                Sri Arumuga Travels grew from an everyday need — leaving town with confidence
                for a wedding across Tamil Nadu, a temple visit with elders, or a long drive
                to meet family elsewhere in India.
              </p>
              <p>
                We keep it simple: a well-kept small car, a driver who knows the route, and
                Call or WhatsApp when plans need to change.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={120} className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={onEnquiryClick} className="btn btn-primary">
              Plan a journey
            </button>
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="btn btn-ghost inline-flex items-center gap-2 tabular-nums"
            >
              <Phone className="w-4 h-4 text-[var(--color-accent)]" aria-hidden />
              {CONTACT_DATA.formattedPhone1}
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5" delayMs={90}>
          <aside className="card p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-text)]">
              Home base
            </p>
            <p className="mt-3 font-display text-2xl sm:text-3xl text-[var(--color-ink)] leading-snug">
              {BRAND.homeBase}
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
              From Andal’s temple town, roads reach Madurai, the coast, the hills, and the rest of India.
              We start here — and take you where you need to go.
            </p>
            <dl className="mt-7 space-y-3 border-t border-[var(--color-line)] pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">How to book</dt>
                <dd className="font-medium text-[var(--color-ink-soft)]">Call · WhatsApp · Enquiry</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">Vehicle</dt>
                <dd className="font-medium text-[var(--color-ink-soft)]">Small car / sedan</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--color-faint)]">Coverage</dt>
                <dd className="font-medium text-[var(--color-ink-soft)]">Across India by road</dd>
              </div>
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};
