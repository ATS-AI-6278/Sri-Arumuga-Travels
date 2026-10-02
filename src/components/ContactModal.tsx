import React, { useEffect, useRef } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_DATA, telHref, whatsappHref } from '../lib/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onEnquire }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/75 backdrop-blur-md">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close dialog overlay"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-desc"
        className="relative w-full max-w-md rounded-t-xl sm:rounded-md bg-[var(--color-panel-elevated)] border border-[var(--color-gold)]/35 p-6 sm:p-8 shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-sm text-white/50 hover:text-white hover:bg-white/10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-gold)] font-semibold">
          Direct contact
        </p>
        <h3 id="contact-modal-title" className="font-display text-2xl text-white mt-2">
          Sri Arumuga Travels
        </h3>
        <p id="contact-modal-desc" className="text-sm text-[var(--color-muted)] mt-1">
          Call, WhatsApp, or jump to the enquiry form.
        </p>

        <div className="mt-6 space-y-3">
          <a href={telHref(CONTACT_DATA.phone1)} className="btn-primary w-full">
            <Phone className="w-4 h-4" aria-hidden />
            Call {CONTACT_DATA.formattedPhone1}
          </a>
          <a href={telHref(CONTACT_DATA.phone2)} className="btn-secondary w-full">
            <Phone className="w-4 h-4" aria-hidden />
            Call {CONTACT_DATA.formattedPhone2}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full"
          >
            <MessageCircle className="w-4 h-4" aria-hidden />
            WhatsApp us
          </a>
          <button
            type="button"
            className="btn-secondary w-full"
            onClick={() => {
              onClose();
              onEnquire();
            }}
          >
            Open enquiry form
          </button>
        </div>
      </div>
    </div>
  );
};
