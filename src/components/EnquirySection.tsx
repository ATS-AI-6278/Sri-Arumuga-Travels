import React, { useEffect, useId, useMemo, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, MessageCircle, Phone, Mail } from 'lucide-react';
import {
  CONTACT_DATA,
  buildEnquiryMeta,
  buildEnquiryWhatsAppMessage,
  enquiryMailtoHref,
  getOptionalFormEndpoint,
  isValidIndianMobile,
  mailtoHref,
  submitEnquiryToOptionalEndpoint,
  telHref,
  trackEnquiryClarity,
  whatsappHref,
  type EnquiryPayload,
} from '../lib/contact';
import { useI18n } from '../i18n/I18nProvider';
import { Reveal } from './Reveal';

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'email';

interface FieldErrors {
  name?: string;
  phone?: string;
  destination?: string;
}

interface EnquirySectionProps {
  initialDestination?: string;
  formRef?: React.RefObject<HTMLFormElement | null>;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialDestination = '',
  formRef,
}) => {
  const { t, locale } = useI18n();
  const formId = useId();
  const [form, setForm] = useState<EnquiryPayload>({
    name: '',
    phone: '',
    pickup: t.enquire.defaultPickup,
    destination: initialDestination,
    travelDate: '',
    passengers: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [showFallback, setShowFallback] = useState(false);

  const waLabels = useMemo(
    () => ({
      title: t.whatsapp.enquiryTitle,
      name: t.whatsapp.name,
      phone: t.whatsapp.phone,
      pickup: t.whatsapp.pickup,
      destination: t.whatsapp.destination,
      date: t.whatsapp.date,
      passengers: t.whatsapp.passengers,
      notes: t.whatsapp.notes,
      defaultPickup: t.enquire.defaultPickup,
    }),
    [t]
  );

  useEffect(() => {
    setForm((prev) => ({ ...prev, destination: initialDestination }));
    setErrors((prev) => {
      if (!prev.destination) return prev;
      const next = { ...prev };
      delete next.destination;
      return next;
    });
  }, [initialDestination]);

  useEffect(() => {
    setForm((prev) => {
      const enDefault = 'Srivilliputtur';
      const taDefault = 'ஸ்ரீவில்லிபுத்தூர்';
      if (prev.pickup === enDefault || prev.pickup === taDefault || !prev.pickup.trim()) {
        return { ...prev, pickup: t.enquire.defaultPickup };
      }
      return prev;
    });
  }, [t.enquire.defaultPickup]);

  const validate = (payload: EnquiryPayload): FieldErrors => {
    const next: FieldErrors = {};
    if (!payload.name.trim() || payload.name.trim().length < 2) {
      next.name = t.enquire.errName;
    }
    if (!isValidIndianMobile(payload.phone)) {
      next.phone = t.enquire.errPhone;
    }
    if (!payload.destination.trim() || payload.destination.trim().length < 2) {
      next.destination = t.enquire.errDestination;
    }
    return next;
  };

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
      setShowFallback(false);
    }
  };

  const focusFirstError = (nextErrors: FieldErrors) => {
    for (const key of ['name', 'phone', 'destination'] as const) {
      if (!nextErrors[key]) continue;
      document.getElementById(`${formId}-${key}`)?.focus();
      break;
    }
  };

  const openMailto = (meta = buildEnquiryMeta(locale)) => {
    const href = enquiryMailtoHref(form, waLabels, meta);
    window.location.href = href;
    setStatus('email');
    setStatusMessage(t.enquire.emailOpenedMsg);
    setShowFallback(true);
  };

  const handleEmailClick = () => {
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      setStatusMessage(t.enquire.errFix);
      setShowFallback(false);
      window.setTimeout(() => focusFirstError(nextErrors), 0);
      return;
    }
    const meta = buildEnquiryMeta(locale);
    trackEnquiryClarity({
      lang: meta.lang,
      hasEndpoint: Boolean(getOptionalFormEndpoint()),
      channel: 'email',
    });
    // Best-effort inbox delivery when Web3Forms/Formspree is configured.
    void submitEnquiryToOptionalEndpoint(form, meta);
    openMailto(meta);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      setStatusMessage(t.enquire.errFix);
      setShowFallback(false);
      window.setTimeout(() => focusFirstError(nextErrors), 0);
      return;
    }

    setStatus('loading');
    setStatusMessage(t.enquire.loadingMsg);
    setShowFallback(false);

    const meta = buildEnquiryMeta(locale);
    const endpointConfigured = Boolean(getOptionalFormEndpoint());

    // 1) Email path: POST when Web3Forms/Formspree configured (dual keys → both Gmails).
    const endpointResult = await submitEnquiryToOptionalEndpoint(form, meta);
    const needMailtoFallback = endpointResult.skipped || !endpointResult.ok;

    // 2) WhatsApp prefilled handoff with full enquiry (always).
    let waOpened = false;
    try {
      await new Promise((resolve) => setTimeout(resolve, 250));
      const href = whatsappHref(buildEnquiryWhatsAppMessage(form, waLabels, meta));
      const popup = window.open(href, '_blank', 'noopener,noreferrer');
      if (!popup) {
        try {
          window.location.assign(href);
          waOpened = true;
        } catch {
          /* ignore */
        }
      } else {
        waOpened = true;
      }
    } catch {
      waOpened = false;
    }

    // 3) If no server inbox path, open mailto to public + cc owner (both Gmails).
    // Use a temporary <a> click so we do not clobber the WhatsApp tab/navigation.
    let openedMailto = false;
    if (needMailtoFallback) {
      try {
        const mail = enquiryMailtoHref(form, waLabels, meta);
        const a = document.createElement('a');
        a.href = mail;
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        a.remove();
        openedMailto = true;
      } catch {
        /* ignore */
      }
    }

    trackEnquiryClarity({
      lang: meta.lang,
      hasEndpoint: endpointConfigured,
      channel: openedMailto ? 'both' : 'whatsapp',
    });

    if (!waOpened && !openedMailto) {
      setStatus('error');
      setStatusMessage(t.enquire.errorMsg);
      setShowFallback(true);
      return;
    }
    if (!waOpened) {
      setStatus('error');
      setStatusMessage(t.enquire.fallbackHint);
      setShowFallback(true);
      return;
    }
    setStatus('success');
    setStatusMessage(t.enquire.successMsg);
    setShowFallback(true);
  };

  const liveMeta = buildEnquiryMeta(locale);
  const mailHref = enquiryMailtoHref(form, waLabels, liveMeta);
  const waHref = whatsappHref(buildEnquiryWhatsAppMessage(form, waLabels, liveMeta));

  return (
    <section id="enquire" className="section-shell section-surface" aria-labelledby="enquire-heading">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="eyebrow-dot" aria-hidden />
              {t.enquire.eyebrow}
            </p>
            <h2 id="enquire-heading" className="display-title">
              {t.enquire.title}
            </h2>
            <p className="lede mt-4">{t.enquire.lede}</p>
          </Reveal>

          <Reveal delayMs={70} className="mt-8 space-y-3">
            <a
              href={telHref(CONTACT_DATA.phone1)}
              className="card flex items-center justify-between p-4 hover:border-[var(--color-accent)] transition-colors"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-text)]">
                  {t.enquire.primary}
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
                  {t.enquire.secondary}
                </p>
                <p className="mt-1 text-lg font-semibold tabular-nums text-[var(--color-ink)]">
                  {CONTACT_DATA.formattedPhone2}
                </p>
              </div>
              <Phone className="w-5 h-5 text-[var(--color-muted)]" aria-hidden />
            </a>
            <a
              href={mailtoHref()}
              className="card flex items-center justify-between p-4 hover:border-[var(--color-accent)] transition-colors"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-faint)]">
                  {t.enquire.emailLabel}
                </p>
                <p className="mt-1 text-base font-semibold text-[var(--color-ink)] break-all">
                  {CONTACT_DATA.email}
                </p>
              </div>
              <Mail className="w-5 h-5 text-[var(--color-muted)]" aria-hidden />
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
                    {t.enquire.name}
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
                    {t.enquire.phone}
                  </label>
                  <input
                    id={`${formId}-phone`}
                    className="field-input"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={t.enquire.phonePlaceholder}
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
                    {t.enquire.pickup}
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
                    {t.enquire.destination}
                  </label>
                  <input
                    id={`${formId}-destination`}
                    className="field-input"
                    placeholder={t.enquire.destinationPlaceholder}
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
                    {t.enquire.travelDate}
                  </label>
                  <input
                    id={`${formId}-date`}
                    className="field-input"
                    placeholder={t.enquire.travelDatePlaceholder}
                    value={form.travelDate}
                    onChange={(e) => update('travelDate', e.target.value)}
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor={`${formId}-passengers`}>
                    {t.enquire.passengers}
                  </label>
                  <input
                    id={`${formId}-passengers`}
                    className="field-input"
                    placeholder={t.enquire.passengersPlaceholder}
                    value={form.passengers}
                    onChange={(e) => update('passengers', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="field-label" htmlFor={`${formId}-notes`}>
                  {t.enquire.notes}
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
                  status === 'success' || status === 'email'
                    ? 'bg-[var(--color-success-bg)] text-[var(--color-whatsapp-hover)]'
                    : status === 'error'
                      ? 'bg-[var(--color-error-bg)] text-[var(--color-error)]'
                      : status === 'loading'
                        ? 'bg-[var(--color-bg-deep)] text-[var(--color-muted)]'
                        : 'text-[var(--color-faint)]'
                }`}
              >
                {status === 'loading' && (
                  <Loader2 className="w-4 h-4 mt-0.5 animate-spin shrink-0" aria-hidden />
                )}
                {(status === 'success' || status === 'email') && (
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                )}
                {status === 'error' && (
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                )}
                <span>{statusMessage || t.enquire.idleHint}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn btn-primary flex-1 min-h-12"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                      {t.enquire.preparing}
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" aria-hidden />
                      {t.enquire.submit}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary flex-1 min-h-12"
                  onClick={handleEmailClick}
                  disabled={status === 'loading'}
                >
                  <Mail className="w-4 h-4" aria-hidden />
                  {t.enquire.submitEmail}
                </button>
              </div>

              {showFallback && (
                <div className="flex flex-col sm:flex-row gap-3">
                  {(status === 'success' || status === 'error') && (
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp flex-1 min-h-12"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden />
                      {t.enquire.openAgain}
                    </a>
                  )}
                  <a href={mailHref} className="btn btn-ghost flex-1 min-h-12">
                    <Mail className="w-4 h-4" aria-hidden />
                    {t.enquire.openEmail}
                  </a>
                  <a href={telHref(CONTACT_DATA.phone1)} className="btn btn-ghost flex-1 min-h-12">
                    <Phone className="w-4 h-4" aria-hidden />
                    {CONTACT_DATA.formattedPhone1}
                  </a>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

