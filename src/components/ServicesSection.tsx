import React from 'react';
import { Car, Plane, Landmark, MapPinned } from 'lucide-react';
import { SERVICES } from '../lib/content';

const ICONS = [Car, Plane, Landmark, MapPinned];

interface ServicesSectionProps {
  onEnquiryClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquiryClick }) => {
  return (
    <section id="services" className="section-shell z-10" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="section-marker">
          <span className="section-marker-line" aria-hidden />
          <span className="section-marker-text">What we offer</span>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] text-balance"
            >
              Practical journeys from a town that knows the road.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed font-light">
            Whether you are heading to a temple, an airport, a relative’s home, or a city across the
            map — we plan the trip with you first, then drive it carefully.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index] ?? Car;
            return (
              <article key={service.id} className="panel p-6 sm:p-8 hover:border-[var(--color-gold)]/35 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-gold)] mb-5">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[var(--color-muted)] leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-[var(--color-faint)]">
            Not sure which option fits? Tell us your plan — we will suggest a sensible way to travel.
          </p>
          <button type="button" onClick={onEnquiryClick} className="btn-secondary shrink-0">
            Ask about your trip
          </button>
        </div>
      </div>
    </section>
  );
};
