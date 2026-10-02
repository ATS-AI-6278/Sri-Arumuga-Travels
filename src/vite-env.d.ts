/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_GA4_MEASUREMENT_ID?: string;
  readonly VITE_CLARITY_PROJECT_ID?: string;
  readonly VITE_GSC_VERIFICATION?: string;
  /** Optional public form POST URL (Web3Forms or Formspree). Not a secret. */
  readonly VITE_FORM_ENDPOINT?: string;
  /** Optional Web3Forms public access key (client-safe by design). */
  readonly VITE_FORM_ACCESS_KEY?: string;
  /**
   * Preferred: Web3Forms public access key.
   * Create free at https://web3forms.com with inbox arumugatamilselvan@gmail.com
   * (and optionally a second key for sriviarumugatravels@gmail.com via VITE_WEB3FORMS_ACCESS_KEY_PUBLIC).
   */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  /** Optional second Web3Forms key so both Gmail inboxes receive submissions (free plan = one inbox per key). */
  readonly VITE_WEB3FORMS_ACCESS_KEY_PUBLIC?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type ClarityFn = ((...args: unknown[]) => void) & {
  q?: unknown[][];
  v?: unknown;
  t?: unknown;
};

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: ClarityFn;
}
