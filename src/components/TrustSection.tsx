import React from 'react';
import { Home, Armchair, PhoneCall, MessageSquareHeart } from 'lucide-react';
import { HOW_IT_WORKS, TRUST_POINTS } from '../lib/content';

const ICONS = [Home, Armchair, PhoneCall, MessageSquareHeart];

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="section-shell z-10" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto">
        <div className="section-marker">
          <span className="section-marker-line" aria-hidden />
          <span className="section-marker-text">Why travellers choose us</span>
        </div>
        <h2
          id="trust-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] max-w-3xl text-balance"
        >
          Trust built in conversation — not in slogans.
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)] text-base sm:text-lg font-light leading-relaxed">
          We do not publish invented ratings or promises we cannot keep. What we offer is steady
          coordination, a comfortable sedan for the road, and clear answers when you call.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {TRUST_POINTS.map((point, i) => {
            const Icon = ICONS[i] ?? Home;
            return (
              <article key={point.title} className="panel p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-gold)] shrink-0">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white tracking-wide">{point.title}</h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-[var(--color-muted)] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 panel-strong p-6 sm:p-10">
          <h3 className="font-display text-2xl sm:text-3xl text-white mb-6">How a trip usually begins</h3>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step} className="relative">
                <span className="font-mono text-xs tracking-[0.2em] text-[var(--color-gold)]">
                  {item.step}
                </span>
                <h4 className="mt-2 font-display text-xl text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
