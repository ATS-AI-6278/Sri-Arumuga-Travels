import React, { useState } from 'react';
import { Phone, MessageCircle, Check, Copy, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_DATA } from '../types';

export const ContactSection: React.FC = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [pickupCity, setPickupCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  const getCustomWhatsAppLink = () => {
    let msg = `Hello Sri Arumuga Travels, I would like to inquire about booking a journey.`;
    if (pickupCity) msg += `\nPickup: ${pickupCity}`;
    if (destinationCity) msg += `\nDestination: ${destinationCity}`;
    if (travelDate) msg += `\nDate: ${travelDate}`;
    return `https://wa.me/91${CONTACT_DATA.phone1}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-28 px-6 sm:px-12 z-10 pointer-events-none flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            Contact Us
          </span>
        </div>

        {/* Required Headline & Supporting Text */}
        <div className="max-w-4xl mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Planning Your Next Journey?
          </h2>
          <p className="mt-4 text-lg sm:text-2xl text-white/70 font-light max-w-2xl">
            Get in touch with Sri Arumuga Travels.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Phone Cards (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 pointer-events-auto">
            {/* Phone Card 1: 9894220028 */}
            <div className="p-8 sm:p-10 rounded-sm bg-[#0a0d14]/90 backdrop-blur-xl border border-[#d4af37]/50 shadow-2xl hover:border-[#d4af37] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                      Primary Contact Number
                    </span>
                  </div>
                  {/* Directly tappable on mobile */}
                  <a
                    href={`tel:${CONTACT_DATA.phone1}`}
                    className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-white hover:text-[#d4af37] transition-colors font-mono block"
                  >
                    {CONTACT_DATA.phone1}
                  </a>
                  <p className="text-xs text-white/50 mt-1 uppercase tracking-widest">
                    Available for Immediate Bookings & Inquiries
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${CONTACT_DATA.phone1}`}
                    className="px-7 py-4 rounded-sm bg-[#d4af37] hover:bg-[#ebd06b] text-black font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all shrink-0"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <button
                    onClick={() => handleCopy(CONTACT_DATA.phone1)}
                    className="p-4 rounded-sm border border-white/20 hover:border-white text-white/80 hover:text-white transition-colors"
                    title="Copy Phone Number"
                    aria-label="Copy primary phone number"
                  >
                    {copiedNumber === CONTACT_DATA.phone1 ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Card 2: 8667669560 */}
            <div className="p-8 sm:p-10 rounded-sm bg-[#0a0d14]/90 backdrop-blur-xl border border-white/15 shadow-2xl hover:border-[#d4af37]/70 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-semibold">
                      Secondary Contact Number
                    </span>
                  </div>
                  {/* Directly tappable on mobile */}
                  <a
                    href={`tel:${CONTACT_DATA.phone2}`}
                    className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-white hover:text-[#d4af37] transition-colors font-mono block"
                  >
                    {CONTACT_DATA.phone2}
                  </a>
                  <p className="text-xs text-white/50 mt-1 uppercase tracking-widest">
                    Direct Operations & Route Desk
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${CONTACT_DATA.phone2}`}
                    className="px-7 py-4 rounded-sm bg-white/10 hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 transition-all border border-white/20 shrink-0"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <button
                    onClick={() => handleCopy(CONTACT_DATA.phone2)}
                    className="p-4 rounded-sm border border-white/20 hover:border-white text-white/80 hover:text-white transition-colors"
                    title="Copy Phone Number"
                    aria-label="Copy secondary phone number"
                  >
                    {copiedNumber === CONTACT_DATA.phone2 ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Bar */}
            <div className="p-6 rounded-sm bg-emerald-950/40 backdrop-blur-xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                    WhatsApp Coordination
                  </h4>
                  <p className="text-xs text-white/60">
                    Prefer messaging? Connect directly on WhatsApp with our team for quick quotes
                    and timing.
                  </p>
                </div>
              </div>

              <a
                href={getCustomWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Route & Travel Inquiry Card (Right 5 Cols) */}
          <div className="lg:col-span-5 pointer-events-auto">
            <div className="h-full p-8 sm:p-10 rounded-sm bg-[#0a0d14]/95 backdrop-blur-2xl border border-white/10 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                    Direct Journey Request
                  </span>
                  <Clock className="w-4 h-4 text-white/40" />
                </div>

                <p className="text-xs text-white/60 mb-6 leading-relaxed">
                  Enter your pickup, destination, and preferred date to pre-format an instant request
                  to our dispatch desk.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5 font-medium">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai, Coimbatore, Madurai, Trichy"
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5 font-medium">
                      Destination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bangalore, Kodaikanal, Ooty, Rameswaram"
                      value={destinationCity}
                      onChange={(e) => setDestinationCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5 font-medium">
                      Travel Date / Schedule
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tomorrow / Upcoming Weekend / Specific Date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-white/5 border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <a
                  href={getCustomWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-sm bg-[#d4af37] hover:bg-[#ebd06b] text-black font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-white/40 tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Direct booking with Sri Arumuga Travels</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Corporate Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 pointer-events-auto">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-semibold tracking-widest text-[#d4af37] uppercase">
              Sri Arumuga Travels
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-white/50">Your Journey. Our Responsibility.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-white/70 font-mono">
            <a href={`tel:${CONTACT_DATA.phone1}`} className="hover:text-[#d4af37] transition-colors">
              {CONTACT_DATA.formattedPhone1}
            </a>
            <span className="text-white/20">•</span>
            <a href={`tel:${CONTACT_DATA.phone2}`} className="hover:text-[#d4af37] transition-colors">
              {CONTACT_DATA.formattedPhone2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
