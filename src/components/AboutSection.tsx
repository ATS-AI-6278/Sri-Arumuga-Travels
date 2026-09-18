import React from 'react';
import { ShieldCheck, Sparkles, MapPin, PhoneCall } from 'lucide-react';
import { CONTACT_DATA } from '../types';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 z-10 pointer-events-none flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Philosophy & Statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
                About Sri Arumuga Travels
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-8">
              A travel company founded on trust, comfort, and uncompromising punctuality.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
              <p>
                Sri Arumuga Travels is committed to delivering a superior road travel experience. We
                understand that every trip represents valuable time, family milestones, or critical
                business commitments.
              </p>
              <p>
                Through well-maintained Toyota Etios GD sedans, courteous chauffeurs, and dedicated
                customer coordination, we ensure that every mile you travel with us is calm, secure,
                and seamless.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 pointer-events-auto">
              <button
                onClick={onContactClick}
                className="px-8 py-3.5 rounded-sm bg-[#d4af37] text-black text-xs uppercase tracking-[0.22em] font-bold shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:bg-[#ebd06b] transition-all"
              >
                Contact Us
              </button>

              <a
                href={`tel:${CONTACT_DATA.phone1}`}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-[#d4af37] transition-colors font-mono"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{CONTACT_DATA.phone1}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Commitments Card */}
          <div className="lg:col-span-5 pointer-events-auto">
            <div className="p-8 sm:p-10 rounded-sm bg-[#0a0d14]/85 backdrop-blur-xl border border-white/10 space-y-8">
              <div className="border-b border-white/10 pb-5">
                <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
                  Our Guiding Principle
                </span>
                <p className="font-display text-xl text-white font-medium">
                  “Your Journey. Our Responsibility.”
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Premium Toyota Etios GD Comfort
                    </h4>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Maintained sedans offering generous legroom, clean interiors, and air-conditioned
                      relaxation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Verified Safety & Dependability
                    </h4>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Safe highway driving speeds, disciplined route navigation, and well-serviced
                      vehicles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Direct, Personal Booking
                    </h4>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Direct coordination with our travel desk via phone or WhatsApp. No middlemen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
                <span>Sri Arumuga Travels</span>
                <span className="text-[#d4af37]">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
