import React from 'react';
import { Car, Plane, Landmark, MapPinned } from 'lucide-react';
import { SERVICES } from '../lib/content';
import { Reveal } from './Reveal';

const ICONS = [Car, Plane, Landmark, MapPinned];

interface ServicesSectionProps {
  onEnquiryClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquiryClick }) => {
  return (
    <section id="services" className="section-shell section-band z-10" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="section-marker">
            <span className="section-marker-line" aria-hidden />
            <span className="section-marker-text">What we offer</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          <Reveal className="lg:col-span-7" delayMs={60}>
            <h2
              id="services-heading"
              className="font-display text-[1.85rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] text-balance leading-[1.12]"
            >
              Practical journeys from a town that knows the road.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delayMs={120}>
            <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed font-light">
              Temple mornings, airport evenings, family visits far from home —
              we plan the trip with you first, then drive it carefully.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index] ?? Car;
            return (
              <Reveal key={service.id} delayMs={80 + index * 70}>
                <article className="panel panel-interactive p-6 sm:p-8 h-full">
                  <div className="w-10 h-10 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-[var(--color-gold)] mb-5">
                    <Icon className="w-[18px] h-[18px]" aria-hidden strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[var(--color-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={120} className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08] pt-8">
          <p className="text-sm text-[var(--color-faint)] max-w-lg">
            Not sure which fits? Tell us your plan — we will suggest a sensible way to travel.
          </p>
          <button type="button" onClick={onEnquiryClick} className="btn-secondary shrink-0 self-start sm:self-auto">
            Ask about your trip
          </button>
        </Reveal>
      </div>
    </section>
  );
};
