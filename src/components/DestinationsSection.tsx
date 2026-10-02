import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DESTINATIONS } from '../lib/content';
import { Reveal } from './Reveal';

interface DestinationsSectionProps {
  onEnquireRoute: (destination: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onEnquireRoute }) => {
  return (
    <section id="destinations" className="section-shell section-band-alt z-10" aria-labelledby="destinations-heading">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="section-marker">
            <span className="section-marker-line" aria-hidden />
            <span className="section-marker-text">Where we go</span>
          </div>
          <h2
            id="destinations-heading"
            className="font-display text-[1.85rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] max-w-3xl text-balance leading-[1.12]"
          >
            Familiar roads — and any place you need to reach.
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--color-muted)] text-base sm:text-lg font-light leading-relaxed">
            These come up often. Your destination does not have to be on this list.
            If the road can take us there from Srivilliputtur, we will talk through timing and fare.
          </p>
        </Reveal>

        <ul className="mt-11 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {DESTINATIONS.map((place, i) => (
            <li key={place.name}>
              <Reveal delayMs={40 + i * 45}>
                <button
                  type="button"
                  onClick={() => onEnquireRoute(place.name === 'Anywhere in India' ? '' : place.name)}
                  aria-label={
                    place.name === 'Anywhere in India'
                      ? 'Enquire about a custom destination'
                      : `Enquire about travel to ${place.name}`
                  }
                  className="w-full text-left panel panel-interactive p-5 sm:p-6 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl text-white group-hover:text-[var(--color-gold-soft)] transition-colors duration-300">
                        {place.name}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[var(--color-faint)] leading-snug">
                        {place.note}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-white/25 group-hover:text-[var(--color-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1 transition-all duration-300"
                      aria-hidden
                    />
                  </div>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
