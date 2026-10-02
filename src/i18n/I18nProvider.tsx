import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { dictionaries } from './index';
import type { Dictionary, Locale } from './types';

const STORAGE_KEY = 'sat-lang';

interface I18nContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const NOTO_TAMIL_HREF =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;600;700&display=swap';

function ensureNotoTamilLoaded() {
  if (document.getElementById('font-noto-tamil')) return;
  const link = document.createElement('link');
  link.id = 'font-noto-tamil';
  link.rel = 'stylesheet';
  link.href = NOTO_TAMIL_HREF;
  document.head.appendChild(link);
}



function readStoredLocale(): Locale {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === 'ta' || raw === 'en') return raw;
  } catch {
    /* ignore */
  }
  return 'en';
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'en' : readStoredLocale()
  );

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'ta' : 'en');
  }, [locale, setLocale]);

  useEffect(() => {
    document.documentElement.lang = dictionaries[locale].htmlLang;
    document.documentElement.dataset.locale = locale;
    if (locale === 'ta') {
      ensureNotoTamilLoaded();
    }
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return ctx;
}
