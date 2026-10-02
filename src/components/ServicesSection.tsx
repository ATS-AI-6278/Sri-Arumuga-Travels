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
    <section id="services" className="section-shell section-surface" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="eyebrow-dot" aria-hidden />
            What we offer
          </p>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <h2 id="services-heading" className="display-title lg:col-span-7">
              Practical journeys from a town that knows the road.
            </h2>
            <p className="lede lg:col-span-5 lg:justify-self-end">
              Temple mornings, airport evenings, family visits far from home —
              we plan the trip with you first, then drive it carefully.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index] ?? Car;
            return (
              <Reveal key={service.id} delayMs={60 + index * 60}>
                <article className="card card-hover p-6 sm:p-7 h-full">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" aria-hidden strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[var(--color-ink)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={100} className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--color-line)] pt-8">
          <p className="text-sm text-[var(--color-muted)] max-w-md">
            Not sure which fits? Tell us your plan — we will suggest a sensible way to travel.
          </p>
          <button type="button" onClick={onEnquiryClick} className="btn btn-secondary self-start sm:self-auto">
            Ask about your trip
          </button>
        </Reveal>
      </div>
    </section>
  );
};
