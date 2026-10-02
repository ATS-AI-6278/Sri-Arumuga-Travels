import React from 'react';
import { Home, Armchair, PhoneCall, MessageSquareHeart } from 'lucide-react';
import { HOW_IT_WORKS, TRUST_POINTS } from '../lib/content';
import { Reveal } from './Reveal';

const ICONS = [Home, Armchair, PhoneCall, MessageSquareHeart];

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="section-shell section-band z-10" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="section-marker">
            <span className="section-marker-line" aria-hidden />
            <span className="section-marker-text">Why travellers choose us</span>
          </div>
          <h2
            id="trust-heading"
            className="font-display text-[1.85rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] max-w-3xl text-balance leading-[1.12]"
          >
            A clear conversation before every journey.
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--color-muted)] text-base sm:text-lg font-light leading-relaxed">
            Steady coordination, a comfortable sedan, and plain answers when you call —
            so you can leave with a quiet mind.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {TRUST_POINTS.map((point, i) => {
            const Icon = ICONS[i] ?? Home;
            return (
              <Reveal key={point.title} delayMs={60 + i * 70}>
                <article className="panel panel-interactive p-6 sm:p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-[var(--color-gold)] shrink-0">
                      <Icon className="w-[18px] h-[18px]" aria-hidden strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-white tracking-wide">{point.title}</h3>
                      <p className="mt-2.5 text-sm sm:text-[15px] text-[var(--color-muted)] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={100} className="mt-14">
          <div className="panel-strong p-7 sm:p-10">
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-8 tracking-tight">
              How a trip usually begins
            </h3>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {HOW_IT_WORKS.map((item) => (
                <li key={item.step} className="relative">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--color-gold)]">
                    {item.step}
                  </span>
                  <h4 className="mt-2.5 font-display text-xl text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
