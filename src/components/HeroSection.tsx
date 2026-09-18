import React, { useState, useEffect } from 'react';
import { Phone, ArrowDown } from 'lucide-react';
import { CONTACT_DATA } from '../types';

interface HeroSectionProps {
  onContactClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onExploreClick,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 sm:px-12 z-10 pointer-events-none"
    >
      {/* Cinematic ambient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-black/50 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(8,9,13,0.75)_100%)] pointer-events-none -z-10" />

      {/* Top Brand Sub-indicator */}
      <div
        className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-medium">
            Executive Travel & Transportation
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-white/50 tracking-widest uppercase font-mono">
          <span>Tamil Nadu & South India</span>
        </div>
      </div>

      {/* Center Cinematic Typography */}
      <div className="w-full max-w-7xl mx-auto my-auto py-12 flex flex-col items-start justify-center">
        {/* Brand Name */}
        <h2
          className={`font-display text-sm sm:text-lg md:text-xl font-semibold tracking-[0.35em] text-[#d4af37] uppercase mb-4 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Sri Arumuga Travels
        </h2>

        {/* Main Headline */}
        <h1
          className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Your Journey. <br />
          <span className="text-shimmer">Our Responsibility.</span>
        </h1>

        {/* Supporting Line */}
        <p
          className={`mt-6 text-lg sm:text-2xl font-light text-white/80 max-w-2xl leading-relaxed tracking-wide transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Comfortable journeys. Trusted service.
        </p>

        {/* CTAs & Direct Contact */}
        <div
          className={`mt-10 flex flex-wrap items-center gap-5 sm:gap-6 pointer-events-auto transition-all duration-1000 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={onContactClick}
            className="px-8 py-4 rounded-sm bg-[#d4af37] text-black text-xs sm:text-sm uppercase tracking-[0.22em] font-bold shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:bg-[#ebd06b] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] active:scale-95 transition-all duration-300"
          >
            Contact Us
          </button>

          <button
            onClick={onExploreClick}
            className="px-8 py-4 rounded-sm border border-white/20 bg-black/40 backdrop-blur-md text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-white hover:border-[#d4af37]/60 hover:text-[#d4af37] transition-all duration-300"
          >
            Explore
          </button>

          {/* Quick Direct Phone Access */}
          <div className="hidden lg:flex items-center gap-3 ml-4 pl-6 border-l border-white/10 text-xs">
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <div className="font-mono text-white/80 tracking-wider">
              <a href={`tel:${CONTACT_DATA.phone1}`} className="hover:text-[#d4af37] transition-colors">
                {CONTACT_DATA.phone1}
              </a>
              <span className="text-white/30 mx-2.5">/</span>
              <a href={`tel:${CONTACT_DATA.phone2}`} className="hover:text-[#d4af37] transition-colors">
                {CONTACT_DATA.phone2}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div
        className={`w-full max-w-7xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-1000 delay-900 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={onExploreClick}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50 hover:text-[#d4af37] transition-colors group"
        >
          <div className="w-6 h-10 rounded-full border border-white/20 group-hover:border-[#d4af37] flex items-start justify-center p-1.5 transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#d4af37] animate-bounce" />
          </div>
          <span>Scroll to Experience</span>
        </button>

        <div className="text-right text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono">
          <span>Toyota Etios GD • Executive Transit</span>
        </div>
      </div>
    </section>
  );
};
