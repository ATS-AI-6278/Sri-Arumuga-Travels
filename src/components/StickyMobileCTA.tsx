import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';

interface StickyMobileCTAProps {
  onEnquiryClick: () => void;
  hidden?: boolean;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  onEnquiryClick,
  hidden = false,
}) => {
  if (hidden) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-white/10 bg-[color-mix(in_srgb,var(--color-ink)_90%,transparent)] backdrop-blur-xl px-3 py-2.5 pb-[max(0.7rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.45)]"
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto">
        <a
          href={telHref(CONTACT_DATA.phone1)}
          className="flex flex-col items-center justify-center gap-1 rounded-md bg-gradient-to-b from-[var(--color-gold-soft)] to-[var(--color-gold)] text-black py-2.5 text-[10px] uppercase tracking-[0.14em] font-semibold min-h-12 active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4" aria-hidden />
          Call
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-md bg-gradient-to-b from-[#149987] to-[var(--color-whatsapp)] text-white py-2.5 text-[10px] uppercase tracking-[0.14em] font-semibold min-h-12 active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-4 h-4" aria-hidden />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={onEnquiryClick}
          className="flex flex-col items-center justify-center gap-1 rounded-md border border-white/15 bg-white/[0.06] text-white py-2.5 text-[10px] uppercase tracking-[0.14em] font-semibold min-h-12 active:scale-[0.98] transition-transform"
        >
          <FileText className="w-4 h-4" aria-hidden />
          Enquire
        </button>
      </div>
    </div>
  );
};
