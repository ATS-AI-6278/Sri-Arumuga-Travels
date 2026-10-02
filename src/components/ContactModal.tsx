import React, { useEffect, useRef } from 'react';
import { X, Phone, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_DATA, mailtoHref, telHref, whatsappHref } from '../lib/contact';
import { useI18n } from '../i18n/I18nProvider';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onEnquire }) => {
  const { t } = useI18n();
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[var(--color-ink)]/35 backdrop-blur-sm">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label={t.modal.closeOverlay}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-desc"
        className="relative w-full max-w-md rounded-t-3xl sm:rounded-3xl bg-[var(--color-surface)] border border-[var(--color-line)] p-6 sm:p-8 shadow-[var(--shadow-lift)]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[var(--color-muted)] hover:bg-[var(--color-bg-deep)] hover:text-[var(--color-ink)]"
          aria-label={t.modal.close}
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-text)]">
          {t.modal.eyebrow}
        </p>
        <h3 id="contact-modal-title" className="font-display text-2xl text-[var(--color-ink)] mt-2">
          {t.modal.title}
        </h3>
        <p id="contact-modal-desc" className="text-sm text-[var(--color-muted)] mt-1">
          {t.modal.desc}
        </p>

        <div className="mt-6 space-y-3">
          <a href={telHref(CONTACT_DATA.phone1)} className="btn btn-primary w-full min-h-12">
            <Phone className="w-4 h-4" aria-hidden />
            {t.modal.call} {CONTACT_DATA.formattedPhone1}
          </a>
          <a href={telHref(CONTACT_DATA.phone2)} className="btn btn-secondary w-full min-h-12">
            <Phone className="w-4 h-4" aria-hidden />
            {t.modal.call} {CONTACT_DATA.formattedPhone2}
          </a>
          <a
            href={whatsappHref(t.whatsapp.greeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full min-h-12"
          >
            <MessageCircle className="w-4 h-4" aria-hidden />
            {t.modal.whatsapp}
          </a>
          <a href={mailtoHref()} className="btn btn-secondary w-full min-h-12">
            <Mail className="w-4 h-4" aria-hidden />
            {t.modal.email}
          </a>
          <button
            type="button"
            className="btn btn-ghost w-full min-h-12"
            onClick={() => {
              onClose();
              onEnquire();
            }}
          >
            {t.modal.openForm}
          </button>
        </div>
      </div>
    </div>
  );
};
