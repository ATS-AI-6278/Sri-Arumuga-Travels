import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  absoluteUrl,
  SITE_URL,
  HERO_IMAGE_URL,
  HERO_IMAGE_WIDTH,
  HERO_IMAGE_HEIGHT,
} from '../../lib/site';
import { getRouteByPath } from '../../lib/seoConfig';
import {
  getPostMeta,
  getCategoryBySlug,
  getTagBySlug,
  getCategoryLabel,
  getTagLabel,
} from '../../content/blog/registry';

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

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function resolveBlogSeo(pathname: string): {
  title: string;
  description: string;
  path: string;
  ogType: string;
  image: string;
  imageW?: number;
  imageH?: number;
} | null {
  if (pathname === '/blog') {
    return {
      title: 'Travel Blog | Sri Arumuga Travels — Srivilliputtur & Southern TN',
      description:
        'Practical travel guides for Srivilliputtur and southern Tamil Nadu — temples, outstation cabs, road trips, and planning tips. English and Tamil.',
      path: '/blog',
      ogType: 'website',
      image: HERO_IMAGE_URL,
      imageW: HERO_IMAGE_WIDTH,
      imageH: HERO_IMAGE_HEIGHT,
    };
  }
  const catMatch = pathname.match(/^\/blog\/category\/([^/]+)\/?$/);
  if (catMatch) {
    const cat = getCategoryBySlug(catMatch[1]);
    if (!cat) return null;
    const name = getCategoryLabel(cat, 'en');
    return {
      title: `${name} | Travel Blog | Sri Arumuga Travels`,
      description: cat.descriptionEn,
      path: `/blog/category/${cat.slug}`,
      ogType: 'website',
      image: HERO_IMAGE_URL,
      imageW: HERO_IMAGE_WIDTH,
      imageH: HERO_IMAGE_HEIGHT,
    };
  }
  const tagMatch = pathname.match(/^\/blog\/tag\/([^/]+)\/?$/);
  if (tagMatch) {
    const tag = getTagBySlug(tagMatch[1]);
    if (!tag) return null;
    const name = getTagLabel(tag, 'en');
    return {
      title: `${name} articles | Travel Blog | Sri Arumuga Travels`,
      description: `Travel articles tagged ${name} from Sri Arumuga Travels — practical guides for southern Tamil Nadu journeys.`,
      path: `/blog/tag/${tag.slug}`,
      ogType: 'website',
      image: HERO_IMAGE_URL,
      imageW: HERO_IMAGE_WIDTH,
      imageH: HERO_IMAGE_HEIGHT,
    };
  }
  const postMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (postMatch && postMatch[1] !== 'category' && postMatch[1] !== 'tag') {
    const post = getPostMeta(postMatch[1]);
    if (!post) return null;
    return {
      title: `${post.title} | Sri Arumuga Travels`,
      description: post.description,
      path: `/blog/${post.slug}`,
      ogType: 'article',
      image: absoluteUrl(post.heroImage),
    };
  }
  return null;
}

/**
 * Per-route title, description, canonical, OG, robots.
 * Tamil uses same URLs (toggle) — do not emit alternate hreflang ta URLs.
 */
export function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const blog = resolveBlogSeo(pathname);
    const route = blog ? null : getRouteByPath(pathname) ?? getRouteByPath('/');
    if (!blog && !route) return;

    const title = blog?.title ?? route!.title;
    const description = blog?.description ?? route!.description;
    const path = blog?.path ?? route!.path;
    const url = absoluteUrl(path === '/' ? '/' : path);
    const ogImage = blog?.image ?? HERO_IMAGE_URL;
    const ogType = blog?.ogType ?? 'website';

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', 'index, follow');
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:image', ogImage);
    if (blog?.imageW) {
      upsertMeta('property', 'og:image:width', String(blog.imageW));
      upsertMeta('property', 'og:image:height', String(blog.imageH ?? ''));
    } else {
      upsertMeta('property', 'og:image:width', String(HERO_IMAGE_WIDTH));
      upsertMeta('property', 'og:image:height', String(HERO_IMAGE_HEIGHT));
    }
    upsertMeta('property', 'og:site_name', 'Sri Arumuga Travels');
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('property', 'og:locale:alternate', 'ta_IN');

    // Article dates when applicable
    const postMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
    if (postMatch && postMatch[1] !== 'category' && postMatch[1] !== 'tag') {
      const post = getPostMeta(postMatch[1]);
      if (post) {
        upsertMeta('property', 'article:published_time', `${post.publishedAt}T00:00:00+05:30`);
        upsertMeta('property', 'article:modified_time', `${post.updatedAt}T00:00:00+05:30`);
      }
    }

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    const ensureHreflang = (lang: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${lang}"]`
      );
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', lang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };
    ensureHreflang('en-IN', url);
    ensureHreflang('ta-IN', url);
    ensureHreflang('x-default', url);

    void SITE_URL;
  }, [pathname]);

  return null;
}
