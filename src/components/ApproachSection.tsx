import React from 'react';
import { Shield, Clock, Award, ArrowRight } from 'lucide-react';

interface ApproachSectionProps {
  onContactClick: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="approach"
      className="relative min-h-screen w-full flex items-center justify-center py-28 px-6 sm:px-12 z-10 pointer-events-none"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            Our Approach
          </span>
        </div>

        {/* Narrative Headline */}
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15]">
            Comfort on every journey.{' '}
            <span className="text-white/40 block mt-2">
              Reliability on every road.
            </span>
          </h2>
        </div>

        <p className="text-base sm:text-xl text-white/70 max-w-2xl mt-6 font-light leading-relaxed">
          At Sri Arumuga Travels, we focus on what matters most to our passengers: immaculate
          vehicles, punctual departures, disciplined highway driving, and personal peace of mind.
        </p>

        {/* Professional Commitment Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pointer-events-auto p-8 rounded-sm bg-[#0a0d14]/75 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#d4af37]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide">
              Punctual & Prepared
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              We respect your time. Every trip is planned with route foresight, ensuring seamless
              pickups and stress-free arrivals.
            </p>
          </div>

          <div className="pointer-events-auto p-8 rounded-sm bg-[#0a0d14]/75 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#d4af37]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide">
              Safety & Mechanical Care
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Our Toyota Etios GD fleet undergoes rigorous scheduled maintenance, tire inspections,
              and hygiene sanitization before every highway journey.
            </p>
          </div>

          <div className="pointer-events-auto p-8 rounded-sm bg-[#0a0d14]/75 backdrop-blur-md border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#d4af37]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide">
              Professional Chauffeurs
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Experienced, polite drivers who prioritize passenger comfort, smooth navigation, and
              respect for your privacy throughout the trip.
            </p>
          </div>
        </div>

        {/* Minimal Link */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            Sri Arumuga Travels • Premium Road Mobility
          </span>
          <button
            onClick={onContactClick}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] hover:text-white transition-colors"
          >
            <span>Speak With Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
