import React from 'react';
import { Home, Armchair, PhoneCall, MessageSquareHeart } from 'lucide-react';
import { HOW_IT_WORKS, TRUST_POINTS } from '../lib/content';
import { Reveal } from './Reveal';

const ICONS = [Home, Armchair, PhoneCall, MessageSquareHeart];

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="section-shell section-surface" aria-labelledby="trust-heading">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="eyebrow-dot" aria-hidden />
            Why travellers choose us
          </p>
          <h2 id="trust-heading" className="display-title max-w-3xl">
            A clear conversation before every journey.
          </h2>
          <p className="lede mt-4">
            Steady coordination, a comfortable sedan, and plain answers when you call —
            so you can leave with a quiet mind.
          </p>
        </Reveal>

        <Reveal delayMs={70} className="mt-10">
          <figure className="fleet-card card overflow-hidden">
            <div className="grid md:grid-cols-12 gap-0 items-stretch">
              <div className="md:col-span-7 relative min-h-[14rem] sm:min-h-[18rem] bg-[var(--color-ink)]">
                <img
                  src="/fleet-scene.webp"
                  alt="Dark metallic Toyota Etios sedan on the highway"
                  width={2400}
                  height={1350}
                  className="relative z-[1] w-full h-full object-cover object-center min-h-[14rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="md:col-span-5 flex flex-col justify-center gap-3 p-6 sm:p-8 border-t md:border-t-0 md:border-l border-[var(--color-line)] bg-[var(--color-surface)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-text)]">
                  On the road
                </p>
                <h3 className="font-display text-2xl text-[var(--color-ink)] leading-snug">
                  Etios sedan comfort
                </h3>
                <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
                  Dark metallic Etios sedan comfort for highway stretches — luggage, elders, and
                  the quiet between towns. Journeys that start in Srivilliputtur.
                </p>
              </figcaption>
            </div>
          </figure>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {TRUST_POINTS.map((point, i) => {
            const Icon = ICONS[i] ?? Home;
            return (
              <Reveal key={point.title} delayMs={50 + i * 60}>
                <article className="card card-hover p-6 sm:p-7 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" aria-hidden strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[var(--color-ink)]">{point.title}</h3>
                      <p className="mt-2 text-[15px] text-[var(--color-muted)] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={80} className="mt-12">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-bg-deep)] p-7 sm:p-10">
            <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] mb-8">
              How a trip usually begins
            </h3>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map((item) => (
                <li key={item.step}>
                  <span className="text-xs font-bold tracking-[0.16em] text-[var(--color-accent-text)]">
                    {item.step}
                  </span>
                  <h4 className="mt-2 font-display text-xl text-[var(--color-ink)]">{item.title}</h4>
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
