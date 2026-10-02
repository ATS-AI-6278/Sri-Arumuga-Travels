import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';

interface StickyMobileCTAProps {
  onEnquiryClick: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onEnquiryClick }) => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-white/10 bg-[color-mix(in_srgb,var(--color-ink)_94%,transparent)] backdrop-blur-lg px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href={telHref(CONTACT_DATA.phone1)}
          className="flex flex-col items-center justify-center gap-1 rounded-sm bg-[var(--color-gold)] text-black py-2.5 text-[10px] uppercase tracking-[0.14em] font-semibold"
        >
          <Phone className="w-4 h-4" aria-hidden />
          Call
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-sm bg-[var(--color-whatsapp)] text-white py-2.5 text-[10px] uppercase tracking-[0.14em] font-semibold"
        >
          <MessageCircle className="w-4 h-4" aria-hidden />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={onEnquiryClick}
          className="flex flex-col items-center justify-center gap-1 rounded-sm border border-white/15 bg-white/5 text-white py-2.5 text-[10px] uppercase tracking-[0.14em] font-semibold"
        >
          <FileText className="w-4 h-4" aria-hidden />
          Enquire
        </button>
      </div>
    </div>
  );
};
