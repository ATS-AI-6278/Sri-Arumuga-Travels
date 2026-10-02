import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DESTINATIONS } from '../lib/content';

interface DestinationsSectionProps {
  onEnquireRoute: (destination: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onEnquireRoute }) => {
  return (
    <section id="destinations" className="section-shell z-10" aria-labelledby="destinations-heading">
      <div className="max-w-7xl mx-auto">
        <div className="section-marker">
          <span className="section-marker-line" aria-hidden />
          <span className="section-marker-text">Where we go</span>
        </div>
        <h2
          id="destinations-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] max-w-3xl text-balance"
        >
          Popular routes — and any place you need to reach.
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)] text-base sm:text-lg font-light leading-relaxed">
          These are places people ask for often. Your destination does not have to be on this list.
          If the road can take us there from Srivilliputtur, we will talk through timing and fare.
        </p>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {DESTINATIONS.map((place) => (
            <li key={place.name}>
              <button
                type="button"
                onClick={() => onEnquireRoute(place.name === 'Anywhere in India' ? '' : place.name)}
                className="w-full text-left panel p-5 sm:p-6 hover:border-[var(--color-gold)]/40 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-white group-hover:text-[var(--color-gold)] transition-colors">
                      {place.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[var(--color-faint)]">{place.note}</p>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-white/30 group-hover:text-[var(--color-gold)] shrink-0 mt-1"
                    aria-hidden
                  />
                </div>
                <span className="sr-only">Enquire about travel to {place.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
