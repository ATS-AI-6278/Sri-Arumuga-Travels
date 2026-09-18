import React from 'react';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

interface BrandStorySectionProps {
  onContactClick: () => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="story"
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 z-10 pointer-events-none"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            02 — Brand Philosophy
          </span>
        </div>

        {/* Narrative Headline */}
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15]">
            More than a destination.{' '}
            <span className="text-white/40 block mt-2">
              It’s the journey that stays with you.
            </span>
          </h2>
        </div>

        {/* Supporting Narrative Layout with Minimal Floating Visual Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pointer-events-auto p-8 rounded-sm bg-[#0a0d14]/70 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 group">
            <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#d4af37] text-[#d4af37] transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide">
              Every Road Becomes a Memory
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              We engineer travel so you never have to worry about the miles. From smooth highways to
              winding scenic hills, every transit is refined.
            </p>
          </div>

          <div className="pointer-events-auto p-8 rounded-sm bg-[#0a0d14]/70 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 group">
            <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#d4af37] text-[#d4af37] transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide">
              Every Journey Deserves Comfort
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Quiet cabins, ergonomic relaxation, and seamless stability. Your time on the road is
              an extension of your peace of mind.
            </p>
          </div>

          <div className="pointer-events-auto p-8 rounded-sm bg-[#0a0d14]/70 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 group">
            <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#d4af37] text-[#d4af37] transition-colors">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide">
              Uncompromising Dedication
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              True luxury is effortless trust. We honor your schedules with disciplined punctuality
              and attentive personal care.
            </p>
          </div>
        </div>

        {/* Minimal Editorial Quote */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pointer-events-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            “Travel with comfort. Arrive with confidence.”
          </p>
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] hover:text-white transition-colors group"
          >
            <span>Plan Your Journey With Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
