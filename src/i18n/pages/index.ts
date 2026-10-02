import type { Locale } from '../types.ts';
import { pagesEn } from './en.ts';
import { pagesTa } from './ta.ts';
import type { PagesCopy } from './types.ts';

export type { PagesCopy };

export function getPagesCopy(locale: Locale): PagesCopy {
  return locale === 'ta' ? pagesTa : pagesEn;
}
