import { en } from './en';
import { ta } from './ta';
import type { Dictionary, Locale } from './types';

export type { Dictionary, Locale };
export { en, ta };

export const dictionaries: Record<Locale, Dictionary> = { en, ta };

export const LOCALE_STORAGE_KEY = 'sat-lang';
