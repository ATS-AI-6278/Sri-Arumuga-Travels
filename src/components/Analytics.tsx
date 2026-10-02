import { useEffect } from 'react';
import { absoluteUrl } from '../lib/site';

const GA4_ID = (import.meta.env.VITE_GA4_MEASUREMENT_ID || '').trim();
const CLARITY_ID = (import.meta.env.VITE_CLARITY_PROJECT_ID || '').trim();
const GSC_VERIFICATION = (import.meta.env.VITE_GSC_VERIFICATION || '').trim();

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function injectGa4(measurementId: string) {
  if (document.getElementById('ga4-gtag')) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.id = 'ga4-gtag';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

function clarityAlreadyPresent(projectId: string): boolean {
  if (document.getElementById('ms-clarity')) return true;
  const existing = document.querySelectorAll<HTMLScriptElement>('script[src*="clarity.ms/tag/"]');
  for (const el of existing) {
    if (el.src.includes(projectId)) return true;
  }
  // Official tag sets clarity.t once start has begun — avoid second bootstrap.
  if (window.clarity && (window.clarity.t || window.clarity.v)) return true;
  return false;
}

function injectClarity(projectId: string) {
  if (clarityAlreadyPresent(projectId)) return;

  // Official Clarity bootstrap — tag script expects window.clarity queue first.
  type ClarityQueueFn = ((...args: unknown[]) => void) & { q?: unknown[][] };
  if (!window.clarity) {
    const stub: ClarityQueueFn = (...args: unknown[]) => {
      (stub.q = stub.q || []).push(args);
    };
    window.clarity = stub;
  }

  const script = document.createElement('script');
  script.id = 'ms-clarity';
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`;
  document.head.appendChild(script);
}

/** Defer third-party analytics until after load / idle so it does not compete with LCP. */
function runWhenIdle(fn: () => void) {
  const start = () => {
    const ric = window.requestIdleCallback;
    if (typeof ric === 'function') {
      ric.call(window, () => fn(), { timeout: 4000 });
    } else {
      window.setTimeout(fn, 1);
    }
  };

  if (document.readyState === 'complete') {
    start();
  } else {
    window.addEventListener('load', start, { once: true });
  }
}

/**
 * Env-driven analytics. Canonical / OG URL are owned by SeoHead per route.
 * Scripts inject only when IDs are set. Clarity is deferred until idle after load.
 */
export function Analytics() {
  useEffect(() => {
    const ogImage = absoluteUrl('/hero-scene.webp');
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('name', 'twitter:image', ogImage);

    if (GSC_VERIFICATION) {
      upsertMeta('name', 'google-site-verification', GSC_VERIFICATION);
    }

    runWhenIdle(() => {
      if (GA4_ID) {
        injectGa4(GA4_ID);
      }
      if (CLARITY_ID) {
        injectClarity(CLARITY_ID);
      }
    });
  }, []);

  return null;
}
