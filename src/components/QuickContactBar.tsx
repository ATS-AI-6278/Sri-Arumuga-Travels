import React, { useState } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';
import { CONTACT_DATA } from '../types';

interface QuickContactBarProps {
  onOpenModal: () => void;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({ onOpenModal }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Expanded Phone Numbers Popover */}
      {expanded && (
        <div className="p-4 rounded-sm bg-[#0a0d14]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-2xl flex flex-col gap-3 min-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Instant Contact
            </span>
            <span className="text-[10px] text-white/40 font-mono">24/7 Support</span>
          </div>

          <a
            href={`tel:${CONTACT_DATA.phone1}`}
            className="flex items-center justify-between p-2.5 rounded bg-white/5 hover:bg-[#d4af37] text-white hover:text-black transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-black" />
              <span className="font-mono text-xs font-semibold">{CONTACT_DATA.phone1}</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-semibold">Call Line 1</span>
          </a>

          <a
            href={`tel:${CONTACT_DATA.phone2}`}
            className="flex items-center justify-between p-2.5 rounded bg-white/5 hover:bg-[#d4af37] text-white hover:text-black transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-black" />
              <span className="font-mono text-xs font-semibold">{CONTACT_DATA.phone2}</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-semibold">Call Line 2</span>
          </a>

          <a
            href={`https://wa.me/91${CONTACT_DATA.phone1}?text=${encodeURIComponent(
              CONTACT_DATA.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors text-xs font-semibold uppercase tracking-wider"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      )}

      {/* Floating Action Pill */}
      <div className="flex items-center gap-2 bg-[#0a0d14]/90 backdrop-blur-md p-1.5 rounded-full border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-mono transition-colors"
          title="Toggle Direct Phone Lines"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="hidden sm:inline tracking-wider">{CONTACT_DATA.phone1}</span>
          <ChevronUp
            className={`w-3.5 h-3.5 text-white/50 transition-transform ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        <a
          href={`https://wa.me/91${CONTACT_DATA.phone1}?text=${encodeURIComponent(
            CONTACT_DATA.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)]"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        <button
          onClick={onOpenModal}
          className="px-4 py-2 rounded-full bg-[#d4af37] hover:bg-[#ebd06b] text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          Contact
        </button>
      </div>
    </aside>
  );
};
