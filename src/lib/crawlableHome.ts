/**
 * Build-time crawlable HTML + JSON-LD shells for inject / static route files.
 * Facts only — English default for non-JS crawlers.
 */
import { CONTACT_DATA, whatsappHref } from './contact.ts';
import { BRAND } from './content.ts';
import { en } from '../i18n/en.ts';
import { pagesEn } from '../i18n/pages/en.ts';
import { SEO_ROUTES, BUSINESS, type SeoRoute } from './seoConfig.ts';
import { getBlogSlugsForPath } from '../content/blog/relatedByRoute.ts';
import { getPost } from '../content/blog/registry.ts';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function resolveSiteUrl(envSiteUrl?: string): string {
  return (envSiteUrl || 'https://sriarumugatravels.vercel.app').replace(/\/$/, '');
}

function phonesBlock(siteUrl: string): string {
  const wa = whatsappHref(en.whatsapp.greeting);
  const tel1 = `tel:+91${CONTACT_DATA.phone1}`;
  const tel2 = `tel:+91${CONTACT_DATA.phone2}`;
  const mail = `mailto:${CONTACT_DATA.email}`;
  return `<p><a href="${escapeHtml(tel1)}">Call ${escapeHtml(CONTACT_DATA.formattedPhone1)}</a>
 · <a href="${escapeHtml(tel2)}">Call ${escapeHtml(CONTACT_DATA.formattedPhone2)}</a>
 · <a href="${escapeHtml(wa)}">WhatsApp</a>
 · <a href="${escapeHtml(mail)}">${escapeHtml(CONTACT_DATA.email)}</a>
 · <a href="${escapeHtml(siteUrl + '/contact')}">Enquire</a></p>`;
}

export function buildHomeJsonLd(siteUrl: string): Record<string, unknown> {
  const t = en;
  const pageUrl = `${siteUrl}/`;
  const heroImage = `${siteUrl}/hero-scene.webp`;
  const logoUrl = `${siteUrl}/logo.png`;
  const waUrl = whatsappHref(t.whatsapp.greeting);
  const phones = [`+91${CONTACT_DATA.phone1}`, `+91${CONTACT_DATA.phone2}`];

  const graph: Record<string, unknown>[] = [
    {
      '@type': ['LocalBusiness', 'TravelAgency'],
      '@id': `${siteUrl}/#business`,
      name: BRAND.name,
      alternateName: t.brand.name,
      description:
        'Taxi and small-car travel from Srivilliputtur, Tamil Nadu — outstation, airport, temple, and local trips across India.',
      url: pageUrl,
      logo: logoUrl,
      image: logoUrl,
      telephone: phones,
      email: CONTACT_DATA.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.streetAddress,
        addressLocality: CONTACT_DATA.location,
        addressRegion: CONTACT_DATA.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: 'IN',
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
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: BRAND.name,
      url: pageUrl,
      description:
        'Official site for Sri Arumuga Travels — enquire by call or WhatsApp for travel from Srivilliputtur.',
      publisher: { '@id': `${siteUrl}/#business` },
      inLanguage: ['en-IN', 'ta-IN'],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: pageUrl,
      name: 'Srivilliputtur Taxi & Outstation Cab | Sri Arumuga Travels',
      description: t.hero.lede,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#business` },
      primaryImageOfPage: heroImage,
      inLanguage: 'en-IN',
    },
  ];

  if (t.faq?.items?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      isPartOf: { '@id': `${siteUrl}/#webpage` },
      inLanguage: 'en-IN',
      mainEntity: t.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/** Visible, semantic HTML for non-JS crawlers (replaced by React on mount). */
export function buildCrawlableHomeHtml(siteUrl: string): string {
  const t = en;
  const pageUrl = `${siteUrl}/`;

  const services = t.services.items
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.title)}</strong> — ${escapeHtml(item.description)}</li>`
    )
    .join('');

  const destinations = t.destinations.items
    .map((item) => `<li><strong>${escapeHtml(item.name)}</strong> — ${escapeHtml(item.note)}</li>`)
    .join('');

  const faqs = t.faq.items
    .map(
      (item) =>
        `<div><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p></div>`
    )
    .join('');

  const schema = buildHomeJsonLd(siteUrl);

  return [
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    `<article class="seo-prerender" data-seo-prerender="home">`,
    `<header>`,
    `<p>${escapeHtml(t.hero.basedIn)} ${escapeHtml(CONTACT_DATA.location)}, ${escapeHtml(CONTACT_DATA.region)}</p>`,
    `<h1>${escapeHtml(t.hero.titleBefore)} <em>${escapeHtml(t.hero.titleAccent)}</em></h1>`,
    `<p>${escapeHtml(t.hero.lede)}</p>`,
    phonesBlock(siteUrl),
    `</header>`,
    `<section>`,
    `<h2>${escapeHtml(t.services.title)}</h2>`,
    `<p>${escapeHtml(t.services.lede)}</p>`,
    `<ul>${services}</ul>`,
    `<p><a href="${escapeHtml(siteUrl + '/services')}">All services</a></p>`,
    `</section>`,
    `<section>`,
    `<h2>${escapeHtml(t.destinations.title)}</h2>`,
    `<p>${escapeHtml(t.destinations.lede)}</p>`,
    `<ul>${destinations}</ul>`,
    `<p><a href="${escapeHtml(siteUrl + '/locations')}">All destinations</a></p>`,
    `</section>`,
    `<section>`,
    `<h2>${escapeHtml(t.trust.title)}</h2>`,
    `<p>${escapeHtml(t.trust.lede)}</p>`,
    `<p><strong>${escapeHtml(t.trust.fleetTitle)}</strong> — ${escapeHtml(t.trust.fleetBody)}</p>`,
    `</section>`,
    `<section>`,
    `<h2>${escapeHtml(t.story.title)}</h2>`,
    `<p>${escapeHtml(t.story.p1)}</p>`,
    `<p>${escapeHtml(t.story.p2)}</p>`,
    `</section>`,
    `<section id="faq">`,
    `<h2>${escapeHtml(t.faq.title)}</h2>`,
    `<p>${escapeHtml(t.faq.lede)}</p>`,
    faqs,
    `</section>`,
    `<section>`,
    `<h2>${escapeHtml(t.enquire.title)}</h2>`,
    `<p>${escapeHtml(t.enquire.lede)}</p>`,
    `<p>${escapeHtml(BRAND.name)} — ${escapeHtml(BRAND.homeBase)}. <a href="${escapeHtml(pageUrl)}">${escapeHtml(pageUrl)}</a></p>`,
    `</section>`,
    `</article>`,
  ].join('\n');
}

function pageJsonLd(siteUrl: string, route: SeoRoute, faqs?: { q: string; a: string }[]) {
  const pageUrl = `${siteUrl}${route.path === '/' ? '/' : route.path}`;
  const logoUrl = `${siteUrl}/logo.png`;
  const heroImage = `${siteUrl}/hero-scene.webp`;
  const phones = [`+91${CONTACT_DATA.phone1}`, `+91${CONTACT_DATA.phone2}`];
  const graph: Record<string, unknown>[] = [
    {
      '@type': ['LocalBusiness', 'TravelAgency'],
      '@id': `${siteUrl}/#business`,
      name: BRAND.name,
      description:
        'Taxi and small-car travel from Srivilliputtur, Tamil Nadu — outstation, airport, temple, and local trips across India.',
      url: `${siteUrl}/`,
      logo: logoUrl,
      image: logoUrl,
      telephone: phones,
      email: CONTACT_DATA.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.streetAddress,
        addressLocality: CONTACT_DATA.location,
        addressRegion: CONTACT_DATA.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: 'IN',
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
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: route.title,
      description: route.description,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#business` },
      primaryImageOfPage: heroImage,
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${siteUrl}/`,
        },
        ...(route.parentPath && route.parentPath !== '/'
          ? [
              {
                '@type': 'ListItem',
                position: 2,
                name: route.parentLabel ?? 'Parent',
                item: `${siteUrl}${route.parentPath}`,
              },
            ]
          : []),
        {
          '@type': 'ListItem',
          position: route.parentPath && route.parentPath !== '/' ? 3 : 2,
          name: route.heading,
          item: pageUrl,
        },
      ],
    },
  ];
  if (faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function buildCrawlableRouteHtml(siteUrl: string, route: SeoRoute): string {
  if (route.kind === 'home') return buildCrawlableHomeHtml(siteUrl);

  const pageUrl = `${siteUrl}${route.path}`;
  let body = '';
  let faqs: { q: string; a: string }[] | undefined;

  if (route.kind === 'services-hub') {
    const cards = SEO_ROUTES.filter((r) => r.kind === 'service')
      .map(
        (r) =>
          `<li><a href="${escapeHtml(siteUrl + r.path)}"><h2>${escapeHtml(r.heading)}</h2><p>${escapeHtml(r.description)}</p></a></li>`
      )
      .join('');
    body = `<p>${escapeHtml(pagesEn.servicesHub.lede)}</p><ul>${cards}</ul><p><a href="${escapeHtml(siteUrl + '/locations')}">${escapeHtml(pagesEn.ui.seeAllLocations)}</a></p>`;
  } else if (route.kind === 'service') {
    const copy = pagesEn.services[route.id as keyof typeof pagesEn.services];
    faqs = copy ? [...copy.faqs] : undefined;
    const otherServices = SEO_ROUTES.filter((r) => r.kind === 'service' && r.path !== route.path);
    const sampleLocations = SEO_ROUTES.filter((r) => r.kind === 'location').slice(0, 5);
    const blogSlugs = getBlogSlugsForPath(route.path);
    const blogLinks = blogSlugs
      .map(getPost)
      .filter((p): p is NonNullable<typeof p> => Boolean(p))
      .map((p) => `<li><a href="${escapeHtml(siteUrl + '/blog/' + p.slug)}">${escapeHtml(p.title)}</a></li>`)
      .join('');

    body = [
      `<p>${escapeHtml(copy.lede)}</p>`,
      ...copy.body.map((p) => `<p>${escapeHtml(p)}</p>`),
      `<ul>${copy.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`,
      `<p>${escapeHtml(pagesEn.ui.noFaresNote)}</p>`,
      `<section><h2>${escapeHtml(pagesEn.ui.howToBook)}</h2><p>${escapeHtml(pagesEn.ui.howToBookBody)}</p></section>`,
      faqs && faqs.length
        ? `<section><h2>${escapeHtml(pagesEn.ui.faqTitle)}</h2>${faqs.map((f) => `<div><h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p></div>`).join('')}</section>`
        : '',
      `<section><h2>${escapeHtml(pagesEn.ui.relatedServices)}</h2><ul>${otherServices.map((r) => `<li><a href="${escapeHtml(siteUrl + r.path)}">${escapeHtml(r.heading)}</a></li>`).join('')}</ul></section>`,
      `<section><h2>${escapeHtml(pagesEn.ui.relatedLocations)}</h2><ul>${sampleLocations.map((r) => `<li><a href="${escapeHtml(siteUrl + r.path)}">${escapeHtml(r.entityName ?? r.heading)}</a></li>`).join('')}<li><a href="${escapeHtml(siteUrl + '/locations')}">${escapeHtml(pagesEn.ui.seeAllLocations)}</a></li></ul></section>`,
      blogLinks ? `<section><h2>From the blog</h2><ul>${blogLinks}</ul></section>` : '',
    ].filter(Boolean).join('\n');
  } else if (route.kind === 'locations-hub') {
    const cards = SEO_ROUTES.filter((r) => r.kind === 'location')
      .map(
        (r) =>
          `<li><a href="${escapeHtml(siteUrl + r.path)}"><h2>${escapeHtml(r.entityName ?? r.heading)}</h2><p>${escapeHtml(r.note ?? '')}</p></a></li>`
      )
      .join('');
    body = `<p>${escapeHtml(pagesEn.locationsHub.lede)}</p><ul>${cards}</ul><p><a href="${escapeHtml(siteUrl + '/services')}">${escapeHtml(pagesEn.ui.seeAllServices)}</a></p>`;
  } else if (route.kind === 'location') {
    const copy = pagesEn.locations[route.id as keyof typeof pagesEn.locations];
    faqs = copy ? [...copy.faqs] : undefined;
    const otherLocations = SEO_ROUTES.filter((r) => r.kind === 'location' && r.path !== route.path);
    const services = SEO_ROUTES.filter((r) => r.kind === 'service');
    const blogSlugs = getBlogSlugsForPath(route.path);
    const blogLinks = blogSlugs
      .map(getPost)
      .filter((p): p is NonNullable<typeof p> => Boolean(p))
      .map((p) => `<li><a href="${escapeHtml(siteUrl + '/blog/' + p.slug)}">${escapeHtml(p.title)}</a></li>`)
      .join('');

    body = [
      `<p>${escapeHtml(copy.lede)}</p>`,
      ...copy.body.map((p) => `<p>${escapeHtml(p)}</p>`),
      `<ul>${copy.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`,
      `<p>${escapeHtml(pagesEn.ui.noFaresNote)}</p>`,
      `<section><h2>${escapeHtml(pagesEn.ui.howToBook)}</h2><p>${escapeHtml(pagesEn.ui.howToBookBody)}</p></section>`,
      faqs && faqs.length
        ? `<section><h2>${escapeHtml(pagesEn.ui.faqTitle)}</h2>${faqs.map((f) => `<div><h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p></div>`).join('')}</section>`
        : '',
      `<section><h2>${escapeHtml(pagesEn.ui.relatedLocations)}</h2><ul>${otherLocations.map((r) => `<li><a href="${escapeHtml(siteUrl + r.path)}">${escapeHtml(r.entityName ?? r.heading)}</a></li>`).join('')}</ul></section>`,
      `<section><h2>${escapeHtml(pagesEn.ui.relatedServices)}</h2><ul>${services.map((r) => `<li><a href="${escapeHtml(siteUrl + r.path)}">${escapeHtml(r.heading)}</a></li>`).join('')}</ul></section>`,
      blogLinks ? `<section><h2>From the blog</h2><ul>${blogLinks}</ul></section>` : '',
    ].filter(Boolean).join('\n');
  } else if (route.kind === 'contact') {
    body = `<p>${escapeHtml(pagesEn.contact.lede)}</p><p>${escapeHtml(pagesEn.ui.howToBookBody)}</p>`;
  }

  const schema = pageJsonLd(siteUrl, route, faqs);
  const crumbs = [
    `<a href="${escapeHtml(siteUrl + '/')}">Home</a>`,
    route.parentPath && route.parentPath !== '/'
      ? ` / <a href="${escapeHtml(siteUrl + route.parentPath)}">${escapeHtml(route.parentLabel ?? '')}</a>`
      : '',
    ` / ${escapeHtml(route.heading)}`,
  ].join('');

  return [
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    `<article class="seo-prerender" data-seo-prerender="${escapeHtml(route.id)}">`,
    `<nav>${crumbs}</nav>`,
    `<h1>${escapeHtml(route.heading)}</h1>`,
    body,
    phonesBlock(siteUrl),
    `<p><a href="${escapeHtml(pageUrl)}">${escapeHtml(pageUrl)}</a></p>`,
    `</article>`,
  ].join('\n');
}

export function applyRouteMetaToHtml(html: string, siteUrl: string, route: SeoRoute): string {
  const pageUrl = route.path === '/' ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  const esc = escapeHtml;
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${esc(route.description)}" />`
  );
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${esc(pageUrl)}" />`
  );
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${esc(route.title)}" />`
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${esc(route.description)}" />`
  );
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${esc(pageUrl)}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${esc(route.title)}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${esc(route.description)}" />`
  );
  // Ensure robots index,follow
  if (!/name="robots"/.test(out)) {
    out = out.replace(
      '</title>',
      `</title>\n    <meta name="robots" content="index, follow" />`
    );
  }
  return out;
}

export { SEO_ROUTES };
