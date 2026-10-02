import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTACT_DATA, whatsappHref } from '../../lib/contact';
import { BRAND } from '../../lib/content';
import { SITE_URL, absoluteUrl, BRAND_LOGO_URL, HERO_IMAGE_URL } from '../../lib/site';
import {
  BUSINESS,
  getRouteByPath,
  type SeoRoute,
} from '../../lib/seoConfig';
import { getPostMeta, resolveCategories } from '../../content/blog/registry';
import { useI18n } from '../../i18n/I18nProvider';
import { getPagesCopy } from '../../i18n/pages';

function businessNode(waUrl: string, description: string) {
  const phones = [`+91${CONTACT_DATA.phone1}`, `+91${CONTACT_DATA.phone2}`];
  return {
    '@type': ['LocalBusiness', 'TravelAgency'],
    '@id': `${SITE_URL}/#business`,
    name: BRAND.name,
    description,
    url: `${SITE_URL}/`,
    logo: BRAND_LOGO_URL,
    image: BRAND_LOGO_URL,
    telephone: phones,
    email: CONTACT_DATA.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    paymentAccepted: BUSINESS.paymentAccepted,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: BUSINESS.openingHoursSpecification.map((item) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: item.dayOfWeek,
      opens: item.opens,
      closes: item.closes,
    })),
    areaServed: [
      { '@type': 'City', name: 'Srivilliputtur' },
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'Country', name: 'India' },
    ],
    potentialAction: [
      {
        '@type': 'ContactAction',
        name: 'Call',
        target: `tel:+91${CONTACT_DATA.phone1}`,
      },
      {
        '@type': 'CommunicateAction',
        name: 'WhatsApp',
        target: waUrl,
        url: waUrl,
      },
    ],
  };
}

function breadcrumbList(route: SeoRoute, homeLabel: string) {
  const elements: Record<string, unknown>[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: homeLabel,
      item: `${SITE_URL}/`,
    },
  ];
  let pos = 2;
  if (route.parentPath && route.parentPath !== '/' && route.parentLabel) {
    elements.push({
      '@type': 'ListItem',
      position: pos++,
      name: route.parentLabel,
      item: absoluteUrl(route.parentPath),
    });
  }
  if (route.path !== '/') {
    elements.push({
      '@type': 'ListItem',
      position: pos,
      name: route.heading,
      item: absoluteUrl(route.path),
    });
  }
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(route.path)}#breadcrumb`,
    itemListElement: elements,
  };
}

/** Route-aware JSON-LD: LocalBusiness on home; Service/WebPage + Breadcrumb; FAQ when visible. */
export const RouteJsonLd: React.FC = () => {
  const { pathname } = useLocation();
  const { t, locale } = useI18n();
  const pages = getPagesCopy(locale);
  const inLanguage = locale === 'ta' ? 'ta-IN' : 'en-IN';
  const route = getRouteByPath(pathname) ?? getRouteByPath('/')!;
  const waUrl = whatsappHref(t.whatsapp.greeting);

  const schema = useMemo(() => {
    const isBlog = pathname === '/blog' || pathname.startsWith('/blog/');
    const pageUrl = isBlog
      ? absoluteUrl(pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname)
      : absoluteUrl(route.path === '/' ? '/' : route.path);
    const businessDescription =
      locale === 'ta'
        ? 'ஸ்ரீவில்லிபுத்தூர், தமிழ்நாட்டிலிருந்து டாக்சி மற்றும் சிறிய கார் பயணம் — வெளியூர், விமான நிலையம், கோயில் மற்றும் உள்ளூர் பயணங்கள் இந்தியா முழுவதும்.'
        : 'Taxi and small-car travel from Srivilliputtur, Tamil Nadu — outstation, airport, temple, and local trips across India.';

    const graph: Record<string, unknown>[] = [
      businessNode(waUrl, businessDescription),
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: BRAND.name,
        url: `${SITE_URL}/`,
        description:
          'Official site for Sri Arumuga Travels — enquire by call or WhatsApp for travel from Srivilliputtur.',
        publisher: { '@id': `${SITE_URL}/#business` },
        inLanguage: ['en-IN', 'ta-IN'],
      },
    ];

    if (!isBlog) {
      graph.push({
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: route.title,
        description: route.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#business` },
        primaryImageOfPage: HERO_IMAGE_URL,
        inLanguage,
      });
      if (route.path !== '/') {
        graph.push(breadcrumbList(route, pages.ui.home));
      }
    }

    if (!isBlog && route.kind === 'service' && route.entityName) {
      graph.push({
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: route.entityName,
        description: route.description,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: {
          '@type': 'City',
          name: 'Srivilliputtur',
        },
        url: pageUrl,
      });
    }

    if (!isBlog && route.kind === 'location' && route.entityName && route.id !== 'srivilliputtur') {
      graph.push({
        '@type': 'Service',
        '@id': `${pageUrl}#route-service`,
        name: `Cab from Srivilliputtur to ${route.entityName}`,
        description: route.description,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: [
          { '@type': 'City', name: 'Srivilliputtur' },
          { '@type': 'City', name: route.entityName },
        ],
        url: pageUrl,
      });
    }

    // Blog article / listing JSON-LD
    const blogPostMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
    if (pathname === '/blog') {
      graph.push({
        '@type': 'CollectionPage',
        '@id': `${absoluteUrl('/blog')}#webpage`,
        url: absoluteUrl('/blog'),
        name: 'Travel Blog | Sri Arumuga Travels',
        description:
          'Practical travel guides for Srivilliputtur and southern Tamil Nadu.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage,
      });
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: pages.ui.home, item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
        ],
      });
    } else if (
      blogPostMatch &&
      blogPostMatch[1] !== 'category' &&
      blogPostMatch[1] !== 'tag'
    ) {
      const post = getPostMeta(blogPostMatch[1]);
      if (post) {
        const pageUrl = absoluteUrl(`/blog/${post.slug}`);
        const articleLang = post.lang === 'ta' ? 'ta-IN' : 'en-IN';
        // Replace generic WebPage name/description already pushed — add Article
        graph.push({
          '@type': 'BlogPosting',
          '@id': `${pageUrl}#article`,
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          image: absoluteUrl(post.heroImage),
          author: { '@id': `${SITE_URL}/#business` },
          publisher: { '@id': `${SITE_URL}/#business` },
          mainEntityOfPage: pageUrl,
          inLanguage: articleLang,
          articleSection: resolveCategories(post.categoryIds)
            .map((c) => c.nameEn)
            .join(', '),
          wordCount: undefined,
        });
        graph.push({
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: pages.ui.home, item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
            { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
          ],
        });
        void resolveCategories;
      }
    }

        // FAQPage only when FAQs are shown on this page
    let faqItems: { q: string; a: string }[] | undefined;
    if (!isBlog && route.kind === 'home' && t.faq?.items?.length) {
      faqItems = t.faq.items.map((i) => ({ q: i.question, a: i.answer }));
    } else if (!isBlog && route.kind === 'service') {
      const block = pages.services[route.id as keyof typeof pages.services];
      if (block?.faqs?.length) faqItems = [...block.faqs];
    } else if (!isBlog && route.kind === 'location') {
      const block = pages.locations[route.id as keyof typeof pages.locations];
      if (block?.faqs?.length) faqItems = [...block.faqs];
    }

    if (faqItems?.length) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        isPartOf: { '@id': `${pageUrl}#webpage` },
        inLanguage,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      });
    }

    return { '@context': 'https://schema.org', '@graph': graph };
  }, [route, locale, waUrl, t.faq, pages, inLanguage, pathname]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
