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
    for (const key of ['name', 'phone', 'destination'] as const) {
      if (!nextErrors[key]) continue;
      document.getElementById(`${formId}-${key}`)?.focus();
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
      await new Promise((resolve) => setTimeout(resolve, 400));
      const href = whatsappHref(buildEnquiryWhatsAppMessage(form));
      const popup = window.open(href, '_blank', 'noopener,noreferrer');
      if (!popup) {
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
    <section id="enquire" className="section-shell section-surface" aria-labelledby="enquire-heading">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="eyebrow-dot" aria-hidden />
              Enquire
            </p>
            <h2 id="enquire-heading" className="display-title">
              Tell us where you are headed.
            </h2>
            <p className="lede mt-4">
              Fill in the basics and we will open WhatsApp with a ready message.
              Prefer to talk? Call either number.
            </p>
          </Reveal>

          <Reveal delayMs={70} className="mt-8 space-y-3">
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="card flex items-center justify-between p-4 hover:border-[var(--color-accent)] transition-colors"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-text)]">
                  Primary
                </p>
                <p className="mt-1 text-lg font-semibold tabular-nums text-[var(--color-ink)]">
                  {CONTACT_DATA.formattedPhone1}
                </p>
              </div>
              <Phone className="w-5 h-5 text-[var(--color-accent)]" aria-hidden />
            </a>
            <a
              href={telHref(CONTACT_DATA.phone2)}
              className="card flex items-center justify-between p-4 hover:border-[var(--color-accent)] transition-colors"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-faint)]">
                  Secondary
                </p>
                <p className="mt-1 text-lg font-semibold tabular-nums text-[var(--color-ink)]">
                  {CONTACT_DATA.formattedPhone2}
                </p>
              </div>
              <Phone className="w-5 h-5 text-[var(--color-muted)]" aria-hidden />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delayMs={90}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card p-6 sm:p-8 space-y-5"
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
                    className="field-input"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    required
                  />
                  {errors.name && (
                    <p className="field-error" role="alert">
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
                    className="field-input"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="10-digit number"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    required
                  />
                  {errors.phone && (
                    <p className="field-error" role="alert">
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
                    className="field-input"
                    placeholder="City, town, or landmark"
                    value={form.destination}
                    onChange={(e) => update('destination', e.target.value)}
                    aria-invalid={Boolean(errors.destination)}
                    required
                  />
                  {errors.destination && (
                    <p className="field-error" role="alert">
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
                  className="field-input min-h-[96px] resize-y"
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                />
              </div>

              <div
                id={`${formId}-status`}
                role="status"
                aria-live="polite"
                className={`rounded-[var(--radius-sm)] px-4 py-3 text-sm flex items-start gap-2 ${
                  status === 'success'
                    ? 'bg-[var(--color-success-bg)] text-[var(--color-whatsapp-hover)]'
                    : status === 'error'
                      ? 'bg-[var(--color-error-bg)] text-[var(--color-error)]'
                      : status === 'loading'
                        ? 'bg-[var(--color-bg-deep)] text-[var(--color-muted)]'
                        : 'text-[var(--color-faint)]'
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

              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" className="btn btn-primary flex-1 min-h-12" disabled={status === 'loading'}>
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
                    className="btn btn-whatsapp flex-1 min-h-12"
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
