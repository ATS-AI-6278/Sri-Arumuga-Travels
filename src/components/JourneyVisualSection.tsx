import React from 'react';
import { ArrowRight } from 'lucide-react';

interface JourneyVisualSectionProps {
  onContactClick: () => void;
}

export const JourneyVisualSection: React.FC<JourneyVisualSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="journey"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 z-10 pointer-events-none flex flex-col justify-between"
    >
      {/* Top Narrative Anchor */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
              The Journey
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            Wherever your journey <br />
            <span className="text-white/40">takes you.</span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
          From quiet morning state highways to evening city terminals, our Toyota Etios GD sedans
          glide with poise, dependability, and serene comfort.
        </p>
      </div>

      {/* Center Cinematic Negative Space allowing the 3D vehicle to take center stage */}
      <div className="w-full max-w-7xl mx-auto my-auto py-24 flex items-center justify-between pointer-events-none">
        <div className="p-6 rounded-sm bg-[#0a0d14]/70 backdrop-blur-md border border-white/10 max-w-sm pointer-events-auto">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
            South Indian Highway Excellence
          </span>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
            Connecting major business corridors, pilgrimage centers, airport hubs, and scenic hill
            retreats with disciplined punctuality.
          </p>
        </div>

        <div className="hidden lg:flex flex-col text-right font-display text-xs tracking-[0.3em] text-white/30 uppercase">
          <span>Sri Arumuga Travels</span>
          <span className="text-[#d4af37]/70">Your Journey. Our Responsibility.</span>
        </div>
      </div>

      {/* Bottom Editorial Quote */}
      <div className="w-full max-w-7xl mx-auto pointer-events-auto">
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-white/60">
            “Travel with comfort. Arrive with confidence.”
          </p>

          <button
            onClick={onContactClick}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] hover:text-white transition-colors"
          >
            <span>Plan Your Travel</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
