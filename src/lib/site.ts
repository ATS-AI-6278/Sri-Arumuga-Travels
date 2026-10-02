/** Public site origin for canonical, Open Graph, and JSON-LD absolute URLs. */
const envSiteUrl =
  (typeof import.meta !== 'undefined' &&
    import.meta.env &&
    (import.meta.env as ImportMetaEnv).VITE_SITE_URL) ||
  (typeof process !== 'undefined' && process.env && process.env.VITE_SITE_URL) ||
  '';

export const SITE_URL = (
  envSiteUrl || 'https://sriarumugatravels.vercel.app'
).replace(/\/$/, '');

/** Join SITE_URL with a path (absolute URL if path is already http(s)). */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

/** Brand logo (schema.logo / header / footer). */
export const BRAND_LOGO_PATH = '/logo.png';
export const BRAND_LOGO_URL = absoluteUrl(BRAND_LOGO_PATH);

/** Square mark for compact UI / icons. */
export const BRAND_LOGO_MARK_PATH = '/logo-mark.png';

/** Hero / social share image — keep as og:image & primaryImageOfPage. */
export const HERO_IMAGE_PATH = '/hero-scene.webp';
export const HERO_IMAGE_URL = absoluteUrl(HERO_IMAGE_PATH);
export const HERO_IMAGE_WIDTH = 1280;
export const HERO_IMAGE_HEIGHT = 720;
