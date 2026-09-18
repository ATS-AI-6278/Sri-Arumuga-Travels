import React, { useState } from 'react';
import { Shield, Sparkles, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface ExperienceSectionProps {
  onContactClick: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: 'Comfort',
      tagline: 'Quiet, Spacious, and Restful Travel',
      description:
        'The Toyota Etios GD is revered for its expansive rear legroom, high seating position, and plush ride quality. Every highway stretch is tailored to let you relax, work, or rest undisturbed.',
      points: [
        'Class-leading rear legroom and generous head clearance',
        'Effective dual-mode air conditioning calibrated for warm climates',
        'Balanced, road-absorbing suspension for smooth highway transits',
        'Spacious 592-liter boot capacity for all family or business luggage',
      ],
      icon: <Sparkles className="w-5 h-5 text-[#d4af37]" />,
    },
    {
      title: 'Reliability',
      tagline: 'On-Time Departures & Flawless Performance',
      description:
        'When you book with Sri Arumuga Travels, reliability is our foremost promise. From proactive schedule verification to dependable vehicle maintenance, your journey unfolds without surprises.',
      points: [
        'Strict on-time vehicle dispatch for early morning or late night pickups',
        'Proven Toyota diesel engineering known for highway dependability',
        'Pre-trip mechanical verification of brakes, fluid levels, and tires',
        'Direct dispatcher support available 24/7 during your journey',
      ],
      icon: <Clock className="w-5 h-5 text-[#d4af37]" />,
    },
    {
      title: 'Professional Service',
      tagline: 'Courteous Chauffeurs with Highway Expertise',
      description:
        'Our chauffeurs are seasoned travel professionals who understand courteous hospitality, route dynamics, and passenger privacy. They represent the highest standard of travel etiquette.',
      points: [
        'Polite, licensed, and verified professional drivers',
        'Extensive knowledge of South Indian state highways and bypass routes',
        'Discreet, patient, and accommodating to passenger requests',
        'Luggage assistance provided at both departure and arrival',
      ],
      icon: <Shield className="w-5 h-5 text-[#d4af37]" />,
    },
    {
      title: 'Care',
      tagline: 'Passenger Well-being on Every Mile',
      description:
        'We believe transportation is a duty of care. From clean, sanitized interiors to smooth driving speeds that prioritize elderly passengers and children, your peace of mind is central.',
      points: [
        'Clean, thoroughly sanitized car cabins before every trip',
        'Smooth braking and acceleration tailored for passenger ease',
        'Thoughtful comfort stops at reputable highway rest areas',
        'Transparent, clear communication without hidden hassles',
      ],
      icon: <HeartHandshake className="w-5 h-5 text-[#d4af37]" />,
    },
  ];

  const current = pillars[activeTab];

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 z-10 pointer-events-none flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
              The Experience
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            What Sets Our Travel Apart
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mt-3 font-light">
            Crafted for discerning travelers who value dependable comfort, professional etiquette,
            and complete peace of mind.
          </p>
        </div>

        {/* 4 Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Navigation Column (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 pointer-events-auto">
            {pillars.map((pillar, idx) => {
              const active = activeTab === idx;
              return (
                <button
                  key={pillar.title}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-5 sm:p-6 rounded-sm border transition-all duration-300 flex items-center justify-between ${
                    active
                      ? 'bg-[#0a0d14]/95 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.15)] translate-x-1.5'
                      : 'bg-[#080a0f]/60 border-white/10 hover:border-white/20 hover:bg-[#080a0f]/80'
                  }`}
                >
                  <div>
                    <h3
                      className={`font-display text-base sm:text-lg tracking-wide ${
                        active ? 'text-white font-semibold' : 'text-white/70'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-white/40 mt-1">{pillar.tagline}</p>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-sm flex items-center justify-center transition-all ${
                      active
                        ? 'bg-[#d4af37]/15 border border-[#d4af37]'
                        : 'bg-white/5 border border-white/10 text-white/50'
                    }`}
                  >
                    {pillar.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Focused Editorial Content (Right 7 Cols) */}
          <div className="lg:col-span-7 pointer-events-auto">
            <div className="h-full p-8 sm:p-12 rounded-sm bg-[#0a0d14]/85 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                    Core Standard
                  </span>
                  <span className="text-xs font-mono text-white/40 uppercase">
                    Sri Arumuga Travels
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-wide mb-2">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-[#d4af37] font-medium tracking-wide mb-6">
                  {current.tagline}
                </p>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-8">
                  {current.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold block mb-2">
                    Service Standards:
                  </span>
                  {current.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-white/85 leading-normal">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50">Experience trusted travel with us.</span>
                <button
                  onClick={onContactClick}
                  className="px-5 py-2.5 rounded-sm bg-[#d4af37] hover:bg-[#ebd06b] text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
                >
                  Book Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
