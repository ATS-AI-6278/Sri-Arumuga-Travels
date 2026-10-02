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
      className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-[var(--color-bg)] pt-1 shadow-[0_-10px_30px_rgba(31,26,23,0.08)]"
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="border-t border-[var(--color-line)] px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto">
          <a
            href={telHref(CONTACT_DATA.phone1)}
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-[var(--color-accent)] text-white py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] min-h-12 active:scale-[0.98] transition-transform"
          >
            <Phone className="w-4 h-4" aria-hidden />
            Call
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-[var(--color-whatsapp)] text-white py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] min-h-12 active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="w-4 h-4" aria-hidden />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={onEnquiryClick}
            className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-ink)] py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] min-h-12 active:scale-[0.98] transition-transform"
          >
            <FileText className="w-4 h-4" aria-hidden />
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};
