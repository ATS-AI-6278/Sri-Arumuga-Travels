import React from 'react';
import { X, Phone, MessageCircle, ShieldCheck, Clock, Check } from 'lucide-react';
import { CONTACT_DATA } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopied(num);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-lg rounded-sm bg-[#0a0d14] border border-[#d4af37]/40 p-8 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.9)] text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-sm text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Direct Access
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Sri Arumuga Travels
          </h3>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            Travel with comfort. Arrive with confidence.
          </p>
        </div>

        {/* Direct Contact Numbers */}
        <div className="space-y-4 mb-8">
          {/* Line 1 */}
          <div className="p-4 rounded-sm bg-white/5 border border-[#d4af37]/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] block font-semibold">
                Primary Helpline
              </span>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-wider">
                {CONTACT_DATA.phone1}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${CONTACT_DATA.phone1}`}
                className="px-4 py-2 rounded-sm bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ebd06b] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
              <button
                onClick={() => handleCopy(CONTACT_DATA.phone1)}
                className="p-2 rounded-sm border border-white/10 text-white/60 hover:text-white"
                title="Copy Number"
              >
                {copied === CONTACT_DATA.phone1 ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <span className="text-xs font-mono">Copy</span>
                )}
              </button>
            </div>
          </div>

          {/* Line 2 */}
          <div className="p-4 rounded-sm bg-white/5 border border-white/15 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-white/50 block font-semibold">
                Secondary Helpline
              </span>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-wider">
                {CONTACT_DATA.phone2}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${CONTACT_DATA.phone2}`}
                className="px-4 py-2 rounded-sm bg-white/10 text-white hover:bg-white hover:text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-white/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
              <button
                onClick={() => handleCopy(CONTACT_DATA.phone2)}
                className="p-2 rounded-sm border border-white/10 text-white/60 hover:text-white"
                title="Copy Number"
              >
                {copied === CONTACT_DATA.phone2 ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <span className="text-xs font-mono">Copy</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Instant WhatsApp Action */}
        <a
          href={`https://wa.me/91${CONTACT_DATA.phone1}?text=${encodeURIComponent(
            CONTACT_DATA.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-4"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Open Direct WhatsApp Chat</span>
        </a>

        {/* Footer info */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>24/7 Dispatch Ready</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Direct Sri Arumuga Desk</span>
          </div>
        </div>
      </div>
    </div>
  );
};
