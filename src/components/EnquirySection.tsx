import React, { useEffect, useId, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, MessageCircle, Phone } from 'lucide-react';
import {
  CONTACT_DATA,
  buildEnquiryWhatsAppMessage,
  isValidIndianMobile,
  telHref,
  whatsappHref,
  type EnquiryPayload,
} from '../lib/contact';
import { Reveal } from './Reveal';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FieldErrors {
  name?: string;
  phone?: string;
  destination?: string;
}

interface EnquirySectionProps {
  initialDestination?: string;
  formRef?: React.RefObject<HTMLFormElement | null>;
}

const emptyForm: EnquiryPayload = {
  name: '',
  phone: '',
  pickup: 'Srivilliputtur',
  destination: '',
  travelDate: '',
  passengers: '',
  notes: '',
};

function validate(form: EnquiryPayload): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Please share your name.';
  }
  if (!isValidIndianMobile(form.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  }
  if (!form.destination.trim() || form.destination.trim().length < 2) {
    errors.destination = 'Tell us where you need to go.';
  }
  return errors;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialDestination = '',
  formRef,
}) => {
  const formId = useId();
  const [form, setForm] = useState<EnquiryPayload>({
    ...emptyForm,
    destination: initialDestination,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Sync destination from destination tiles (including clearing for “Anywhere”).
    setForm((prev) => ({ ...prev, destination: initialDestination }));
    setErrors((prev) => {
      if (!prev.destination) return prev;
      const next = { ...prev };
      delete next.destination;
      return next;
    });
  }, [initialDestination]);

  const update = (key: keyof EnquiryPayload, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key as keyof FieldErrors];
      return next;
    });
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const focusFirstError = (nextErrors: FieldErrors) => {
    const order: (keyof FieldErrors)[] = ['name', 'phone', 'destination'];
    for (const key of order) {
      if (!nextErrors[key]) continue;
      const el = document.getElementById(`${formId}-${key === 'destination' ? 'destination' : key}`);
      el?.focus();
      break;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      setStatusMessage('Please fix the highlighted fields and try again.');
      window.setTimeout(() => focusFirstError(nextErrors), 0);
      return;
    }

    setStatus('loading');
    setStatusMessage('Preparing your WhatsApp enquiry…');

    try {
      await new Promise((resolve) => setTimeout(resolve, 450));
      const message = buildEnquiryWhatsAppMessage(form);
      const href = whatsappHref(message);
      const popup = window.open(href, '_blank', 'noopener,noreferrer');
      if (!popup) {
        // Popup blocked — navigate same tab as reliable fallback.
        window.location.assign(href);
        return;
      }
      setStatus('success');
      setStatusMessage(
        'Enquiry ready — WhatsApp should open with your details. If it did not, use the button below.'
      );
    } catch {
      setStatus('error');
      setStatusMessage('Something went wrong opening WhatsApp. Please call us instead.');
    }
  };

  return (
    <section id="enquire" className="section-shell section-band z-10" aria-labelledby="enquire-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-5">
          <Reveal>
          <div className="section-marker">
            <span className="section-marker-line" aria-hidden />
            <span className="section-marker-text">Enquire</span>
          </div>
          <h2
            id="enquire-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-cream)] text-balance"
          >
            Tell us where you are headed.
          </h2>
          <p className="mt-4 text-[var(--color-muted)] text-base sm:text-lg font-light leading-relaxed">
            Fill in the basics and we will open WhatsApp with a ready message to our travel desk.
            Prefer to talk? Call either number — we are happy to plan by phone.
          </p>

          </Reveal>
          <Reveal delayMs={80} className="mt-8 space-y-3">
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="panel flex items-center justify-between p-4 hover:border-[var(--color-gold)]/40 transition-colors"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)]">Primary</p>
                <p className="font-mono text-lg text-white mt-1">{CONTACT_DATA.formattedPhone1}</p>
              </div>
              <Phone className="w-5 h-5 text-[var(--color-gold)]" aria-hidden />
            </a>
            <a
              href={telHref(CONTACT_DATA.phone2)}
              className="panel flex items-center justify-between p-4 hover:border-[var(--color-gold)]/40 transition-colors"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Secondary</p>
                <p className="font-mono text-lg text-white mt-1">{CONTACT_DATA.formattedPhone2}</p>
              </div>
              <Phone className="w-5 h-5 text-white/50" aria-hidden />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delayMs={100}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="panel-strong p-6 sm:p-8 space-y-5"
            noValidate
            aria-describedby={`${formId}-status`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="field-label" htmlFor={`${formId}-name`}>
                  Your name *
                </label>
                <input
                  id={`${formId}-name`}
                  name="name"
                  className="field-input"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${formId}-name-err` : undefined}
                  required
                />
                {errors.name && (
                  <p id={`${formId}-name-err`} className="field-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="field-label" htmlFor={`${formId}-phone`}>
                  Mobile number *
                </label>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  className="field-input"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="10-digit number"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? `${formId}-phone-err` : undefined}
                  required
                />
                {errors.phone && (
                  <p id={`${formId}-phone-err`} className="field-error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="field-label" htmlFor={`${formId}-pickup`}>
                  Pickup
                </label>
                <input
                  id={`${formId}-pickup`}
                  name="pickup"
                  className="field-input"
                  value={form.pickup}
                  onChange={(e) => update('pickup', e.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor={`${formId}-destination`}>
                  Destination *
                </label>
                <input
                  id={`${formId}-destination`}
                  name="destination"
                  className="field-input"
                  placeholder="City, town, or landmark"
                  value={form.destination}
                  onChange={(e) => update('destination', e.target.value)}
                  aria-invalid={Boolean(errors.destination)}
                  aria-describedby={errors.destination ? `${formId}-dest-err` : undefined}
                  required
                />
                {errors.destination && (
                  <p id={`${formId}-dest-err`} className="field-error" role="alert">
                    {errors.destination}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="field-label" htmlFor={`${formId}-date`}>
                  Travel date / timing
                </label>
                <input
                  id={`${formId}-date`}
                  name="travelDate"
                  className="field-input"
                  placeholder="e.g. 12 Oct morning / flexible"
                  value={form.travelDate}
                  onChange={(e) => update('travelDate', e.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor={`${formId}-passengers`}>
                  Passengers
                </label>
                <input
                  id={`${formId}-passengers`}
                  name="passengers"
                  className="field-input"
                  placeholder="e.g. 3 adults, 1 child"
                  value={form.passengers}
                  onChange={(e) => update('passengers', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="field-label" htmlFor={`${formId}-notes`}>
                Anything else we should know?
              </label>
              <textarea
                id={`${formId}-notes`}
                name="notes"
                className="field-input min-h-[96px] resize-y"
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
              />
            </div>

            <div
              id={`${formId}-status`}
              role="status"
              aria-live="polite"
              className={`rounded-sm px-4 py-3 text-sm flex items-start gap-2 ${
                status === 'success'
                  ? 'bg-emerald-950/50 border border-emerald-500/30 text-emerald-100'
                  : status === 'error'
                    ? 'bg-red-950/40 border border-red-400/30 text-red-100'
                    : status === 'loading'
                      ? 'bg-white/5 border border-white/10 text-white/75'
                      : 'bg-transparent border border-transparent text-[var(--color-faint)]'
              }`}
            >
              {status === 'loading' && <Loader2 className="w-4 h-4 mt-0.5 animate-spin shrink-0" aria-hidden />}
              {status === 'success' && <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />}
              {status === 'error' && <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />}
              <span>
                {statusMessage ||
                  'No booking account required — your enquiry goes straight to WhatsApp.'}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button type="submit" className="btn-primary flex-1" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                    Preparing…
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" aria-hidden />
                    Send via WhatsApp
                  </>
                )}
              </button>
              {status === 'success' && (
                <a
                  href={whatsappHref(buildEnquiryWhatsAppMessage(form))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex-1"
                >
                  Open WhatsApp again
                </a>
              )}
            </div>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
