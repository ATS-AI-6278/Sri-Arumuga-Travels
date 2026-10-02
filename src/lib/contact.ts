export interface ContactInfo {
  phone1: string;
  phone2: string;
  formattedPhone1: string;
  formattedPhone2: string;
  /** Public business enquiry inbox (shown on site). */
  email: string;
  /** Owner / technical-admin notify address (mailto cc; small footer note only). */
  ownerEmail: string;
  whatsappMessage: string;
  location: string;
  region: string;
  country: string;
}

export const CONTACT_DATA: ContactInfo = {
  phone1: '9894220028',
  phone2: '8667669560',
  formattedPhone1: '+91 98942 20028',
  formattedPhone2: '+91 86676 69560',
  email: 'sriviarumugatravels@gmail.com',
  ownerEmail: 'arumugatamilselvan@gmail.com',
  whatsappMessage:
    'Hello Sri Arumuga Travels — I would like to enquire about a journey from Srivilliputtur.',
  location: 'Srivilliputtur',
  region: 'Tamil Nadu',
  country: 'India',
};

export function telHref(phone: string): string {
  return `tel:+91${phone}`;
}

export function whatsappHref(message?: string): string {
  const text = message ?? CONTACT_DATA.whatsappMessage;
  return `https://wa.me/91${CONTACT_DATA.phone1}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(opts?: {
  subject?: string;
  body?: string;
  /** When true (default), cc the owner/admin address. */
  ccOwner?: boolean;
}): string {
  const params = new URLSearchParams();
  if (opts?.subject) params.set('subject', opts.subject);
  if (opts?.body) params.set('body', opts.body);
  const ccOwner = opts?.ccOwner !== false;
  if (ccOwner && CONTACT_DATA.ownerEmail) {
    params.set('cc', CONTACT_DATA.ownerEmail);
  }
  const qs = params.toString();
  return `mailto:${CONTACT_DATA.email}${qs ? `?${qs}` : ''}`;
}

/** Normalize Indian mobile input to 10 digits when possible. */
export function normalizeIndianMobile(phone: string): string {
  let digits = phone.replace(/\D/g, '');
  if (digits.startsWith('91') && digits.length >= 12) {
    digits = digits.slice(-10);
  } else if (digits.startsWith('0') && digits.length === 11) {
    digits = digits.slice(1);
  }
  return digits;
}

export function isValidIndianMobile(phone: string): boolean {
  const digits = normalizeIndianMobile(phone);
  return /^[6-9]\d{9}$/.test(digits);
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travelDate: string;
  passengers: string;
  notes: string;
}

/** Extra non-form context attached at submit time. */
export interface EnquiryMeta {
  /** UI language code, e.g. en | ta */
  lang: string;
  /** Absolute or path URL of the page where the form was submitted */
  pageUrl: string;
  /** ISO timestamp */
  timestamp: string;
}

export interface EnquiryMessageLabels {
  title: string;
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  passengers: string;
  notes: string;
  defaultPickup: string;
}

const DEFAULT_LABELS: EnquiryMessageLabels = {
  title: 'Hello Sri Arumuga Travels — travel enquiry',
  name: 'Name',
  phone: 'Phone',
  pickup: 'Pickup',
  destination: 'Destination',
  date: 'Date',
  passengers: 'Passengers',
  notes: 'Notes',
  defaultPickup: 'Srivilliputtur',
};

export function buildEnquiryMeta(lang: string): EnquiryMeta {
  return {
    lang: lang || 'en',
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    timestamp: new Date().toISOString(),
  };
}

export function buildEnquiryLines(
  data: EnquiryPayload,
  labels?: EnquiryMessageLabels,
  meta?: EnquiryMeta
): string[] {
  const L = labels ?? DEFAULT_LABELS;
  const lines = [
    L.title,
    `${L.name}: ${data.name.trim()}`,
    `${L.phone}: ${data.phone.trim()}`,
    `${L.pickup}: ${data.pickup.trim() || L.defaultPickup}`,
    `${L.destination}: ${data.destination.trim()}`,
  ];
  if (data.travelDate.trim()) lines.push(`${L.date}: ${data.travelDate.trim()}`);
  if (data.passengers.trim()) lines.push(`${L.passengers}: ${data.passengers.trim()}`);
  if (data.notes.trim()) lines.push(`${L.notes}: ${data.notes.trim()}`);
  if (meta) {
    lines.push(`Lang: ${meta.lang}`);
    if (meta.pageUrl) lines.push(`Page: ${meta.pageUrl}`);
    lines.push(`Time: ${meta.timestamp}`);
  }
  lines.push(
    `Notify: ${CONTACT_DATA.email}; ${CONTACT_DATA.ownerEmail}`
  );
  return lines;
}

export function buildEnquiryWhatsAppMessage(
  data: EnquiryPayload,
  labels?: EnquiryMessageLabels,
  meta?: EnquiryMeta
): string {
  return buildEnquiryLines(data, labels, meta).join('\n');
}

export function buildEnquiryEmailSubject(data: EnquiryPayload): string {
  const dest = data.destination.trim() || 'travel';
  const name = data.name.trim() || 'Guest';
  return `Travel enquiry — ${dest} — ${name}`;
}

/** mailto: to public inbox, cc owner, with form fields in body (both Gmails). */
export function enquiryMailtoHref(
  data: EnquiryPayload,
  labels?: EnquiryMessageLabels,
  meta?: EnquiryMeta
): string {
  return mailtoHref({
    subject: buildEnquiryEmailSubject(data),
    body: buildEnquiryLines(data, labels, meta).join('\n'),
    ccOwner: true,
  });
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Resolve optional free form endpoint(s).
 * Priority:
 * 1) VITE_WEB3FORMS_ACCESS_KEY (+ optional VITE_WEB3FORMS_ACCESS_KEY_PUBLIC) → Web3Forms
 * 2) VITE_FORM_ENDPOINT (+ optional VITE_FORM_ACCESS_KEY) → generic Formspree/Web3Forms
 * Never invents keys — empty means mailto + WhatsApp only.
 */
export function getOptionalFormTargets(): Array<{
  endpoint: string;
  accessKey: string | null;
  label: string;
}> {
  const targets: Array<{ endpoint: string; accessKey: string | null; label: string }> = [];

  const web3Primary = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '').trim();
  const web3Public = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_PUBLIC ?? '').trim();
  if (web3Primary) {
    targets.push({
      endpoint: WEB3FORMS_ENDPOINT,
      accessKey: web3Primary,
      label: 'web3forms-primary',
    });
  }
  if (web3Public && web3Public !== web3Primary) {
    targets.push({
      endpoint: WEB3FORMS_ENDPOINT,
      accessKey: web3Public,
      label: 'web3forms-public',
    });
  }

  const endpoint = (import.meta.env.VITE_FORM_ENDPOINT ?? '').trim();
  const accessKey = (import.meta.env.VITE_FORM_ACCESS_KEY ?? '').trim() || null;
  if (endpoint && targets.length === 0) {
    // Only use generic endpoint when Web3Forms keys are not set (avoid double-post).
    targets.push({ endpoint, accessKey, label: 'form-endpoint' });
  } else if (endpoint && accessKey && !web3Primary) {
    targets.push({ endpoint, accessKey, label: 'form-endpoint' });
  }

  return targets;
}

export function getOptionalFormEndpoint(): {
  endpoint: string;
  accessKey: string | null;
} | null {
  const targets = getOptionalFormTargets();
  if (targets.length === 0) return null;
  return { endpoint: targets[0].endpoint, accessKey: targets[0].accessKey };
}

function buildEndpointBody(
  data: EnquiryPayload,
  meta: EnquiryMeta,
  accessKey: string | null
): Record<string, string> {
  const message = [
    `Pickup: ${data.pickup.trim() || 'Srivilliputtur'}`,
    `Destination: ${data.destination.trim()}`,
    data.travelDate.trim() ? `Date: ${data.travelDate.trim()}` : '',
    data.passengers.trim() ? `Passengers: ${data.passengers.trim()}` : '',
    data.notes.trim() ? `Message: ${data.notes.trim()}` : '',
    `Lang: ${meta.lang}`,
    `Page: ${meta.pageUrl}`,
    `Time: ${meta.timestamp}`,
    `Notify: ${CONTACT_DATA.email}; ${CONTACT_DATA.ownerEmail}`,
  ]
    .filter(Boolean)
    .join('\n');

  const body: Record<string, string> = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    pickup: data.pickup.trim(),
    destination: data.destination.trim(),
    date: data.travelDate.trim(),
    travelDate: data.travelDate.trim(),
    passengers: data.passengers.trim(),
    message,
    notes: data.notes.trim(),
    lang: meta.lang,
    page_url: meta.pageUrl,
    timestamp: meta.timestamp,
    subject: buildEnquiryEmailSubject(data),
    from_name: data.name.trim() || 'Website enquiry',
    // Free Web3Forms delivers to the inbox tied to access_key.
    // Document dual keys / Gmail forward for both addresses. Include both in payload for visibility.
    notify_public: CONTACT_DATA.email,
    notify_owner: CONTACT_DATA.ownerEmail,
  };
  if (accessKey) {
    body.access_key = accessKey;
    // Free Web3Forms: one inbox per key (no ccemail on free). Dual inbox = second free key
    // as VITE_WEB3FORMS_ACCESS_KEY_PUBLIC, or Gmail forward from owner → public.
    body.replyto = CONTACT_DATA.ownerEmail;
  }
  return body;
}

async function postEnquiry(
  endpoint: string,
  accessKey: string | null,
  data: EnquiryPayload,
  meta: EnquiryMeta
): Promise<boolean> {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(buildEndpointBody(data, meta, accessKey)),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Best-effort POST to optional public form endpoint(s).
 * Posts once per configured target (e.g. two free Web3Forms keys → both inboxes).
 * Does not throw.
 */
export async function submitEnquiryToOptionalEndpoint(
  data: EnquiryPayload,
  meta?: EnquiryMeta
): Promise<{ ok: boolean; skipped: boolean; posted: number }> {
  const targets = getOptionalFormTargets();
  if (targets.length === 0) return { ok: false, skipped: true, posted: 0 };

  const resolvedMeta = meta ?? buildEnquiryMeta('en');
  const results = await Promise.all(
    targets.map((t) => postEnquiry(t.endpoint, t.accessKey, data, resolvedMeta))
  );
  const posted = results.filter(Boolean).length;
  return { ok: posted > 0, skipped: false, posted };
}

/**
 * Clarity custom tags / event for enquiry submit — no PII (no phone/email/name).
 * Safe no-op when Clarity is absent or blocked.
 */
export function trackEnquiryClarity(meta: {
  lang: string;
  hasEndpoint: boolean;
  channel: 'whatsapp' | 'email' | 'both';
}): void {
  try {
    const clarity = typeof window !== 'undefined' ? window.clarity : undefined;
    if (typeof clarity !== 'function') return;
    clarity('set', 'enquiry_lang', meta.lang);
    clarity('set', 'enquiry_has_endpoint', meta.hasEndpoint ? '1' : '0');
    clarity('set', 'enquiry_channel', meta.channel);
    clarity('event', 'enquiry_submit');
  } catch {
    /* ignore */
  }
}
