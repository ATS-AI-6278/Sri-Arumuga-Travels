import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DESTINATIONS } from '../lib/content';
import { Reveal } from './Reveal';

interface DestinationsSectionProps {
  onEnquireRoute: (destination: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onEnquireRoute }) => {
  return (
    <section id="destinations" className="section-shell section-muted" aria-labelledby="destinations-heading">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="eyebrow-dot" aria-hidden />
            Where we go
          </p>
          <h2 id="destinations-heading" className="display-title max-w-3xl">
            Familiar roads — and any place you need to reach.
          </h2>
          <p className="lede mt-4">
            These come up often. Your destination does not have to be on this list.
            If the road can take us there from Srivilliputtur, we will talk through timing and fare.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {DESTINATIONS.map((place, i) => (
            <li key={place.name}>
              <Reveal delayMs={40 + i * 40}>
                <button
                  type="button"
                  onClick={() => onEnquireRoute(place.name === 'Anywhere in India' ? '' : place.name)}
                  aria-label={
                    place.name === 'Anywhere in India'
                      ? 'Enquire about a custom destination'
                      : `Enquire about travel to ${place.name}`
                  }
                  className="w-full text-left card card-hover p-5 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg text-[var(--color-ink)] group-hover:text-[var(--color-accent-text)] transition-colors">
                        {place.name}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">{place.note}</p>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[var(--color-faint)] group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
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
