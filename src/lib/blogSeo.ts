/**
 * Blog SEO helpers for prerender shells + sitemap (build-time safe).
 */
import { getBlogIndexablePaths, getCategoriesWithCounts, getTagsWithCounts, getAllPostMetas } from '../content/blog/registry';
import { getAllFullPosts } from '../content/blog/getFullPost';
import type { BlogPost } from '../content/blog/types';
import { CONTACT_DATA, whatsappHref } from './contact';
import { SEO_ROUTES } from './seoConfig';

import { getCounterpartSlug } from '../content/blog/bilingualPairs.ts';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function buildBlogIndexShell(siteUrl: string): string {
  const all = getAllPostMetas();
  const enPosts = all.filter((p) => p.lang === 'en');
  const taPosts = all.filter((p) => p.lang === 'ta');

  const enList = enPosts
    .map((p) => {
      const ta = getCounterpartSlug(p.slug);
      const taLink = ta ? ` · <a href="${escapeHtml(siteUrl + '/blog/' + ta)}">தமிழில் படிக்க</a>` : '';
      return `<li><a href="${escapeHtml(siteUrl + '/blog/' + p.slug)}"><strong>${escapeHtml(p.title)}</strong></a> — ${escapeHtml(p.description)}${taLink}</li>`;
    })
    .join('');

  const taList = taPosts
    .map((p) => {
      const en = getCounterpartSlug(p.slug);
      const enLink = en ? ` · <a href="${escapeHtml(siteUrl + '/blog/' + en)}">Read in English</a>` : '';
      return `<li><a href="${escapeHtml(siteUrl + '/blog/' + p.slug)}"><strong>${escapeHtml(p.title)}</strong></a> — ${escapeHtml(p.description)}${enLink}</li>`;
    })
    .join('');

  return [
    `<article class="seo-prerender" data-seo-prerender="blog">`,
    `<nav><a href="${escapeHtml(siteUrl + '/')}">Home</a> / Blog</nav>`,
    `<h1>Travel Blog</h1>`,
    `<p>Practical guides for Srivilliputtur and southern Tamil Nadu travel — temples, outstation cabs, and road planning.</p>`,
    `<h2>All Articles</h2>`,
    `<ul>${enList}</ul>`,
    `<h2>Tamil Articles (தமிழ் கட்டுரைகள்)</h2>`,
    `<ul>${taList}</ul>`,
    `<p><a href="tel:+91${CONTACT_DATA.phone1}">Call ${escapeHtml(CONTACT_DATA.formattedPhone1)}</a> · <a href="${escapeHtml(whatsappHref())}">WhatsApp</a></p>`,
    `</article>`,
  ].join('\n');
}

function renderContentBlock(block: import('../content/blog/types').ContentBlock): string {
  switch (block.type) {
    case 'p':
      return `<p>${escapeHtml(block.text)}</p>`;
    case 'h2':
      return `<h2 id="${escapeHtml(block.id)}">${escapeHtml(block.text)}</h2>`;
    case 'h3':
      return `<h3 id="${escapeHtml(block.id)}">${escapeHtml(block.text)}</h3>`;
    case 'ul':
      return `<ul>${block.items.map((it) => `<li>${escapeHtml(it)}</li>`).join('')}</ul>`;
    case 'ol':
      return `<ol>${block.items.map((it) => `<li>${escapeHtml(it)}</li>`).join('')}</ol>`;
    case 'callout':
      return `<blockquote><p>${escapeHtml(block.text)}</p></blockquote>`;
    case 'faq':
      return block.items
        .map(
          (f) =>
            `<div class="faq-item"><h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p></div>`
        )
        .join('\n');
    case 'table':
      return `<table>${
        block.caption ? `<caption>${escapeHtml(block.caption)}</caption>` : ''
      }<thead><tr>${block.headers
        .map((h) => `<th>${escapeHtml(h)}</th>`)
        .join('')}</tr></thead><tbody>${block.rows
        .map(
          (row) =>
            `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`
        )
        .join('')}</tbody></table>`;
    case 'links':
      return `<div class="related-links">${
        block.title ? `<h3>${escapeHtml(block.title)}</h3>` : ''
      }<ul>${block.items
        .map(
          (item) =>
            `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`
        )
        .join('')}</ul></div>`;
    case 'cta':
      return block.note ? `<p><strong>${escapeHtml(block.note)}</strong></p>` : '';
    default:
      return '';
  }
}

export function buildBlogPostShell(siteUrl: string, post: BlogPost): string {
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const fullBody = post.body.map(renderContentBlock).filter(Boolean).join('\n');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: `${siteUrl}${post.heroImage}`,
    author: {
      '@type': 'LocalBusiness',
      name: 'Sri Arumuga Travels',
      url: `${siteUrl}/`,
    },
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Sri Arumuga Travels',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
    },
    mainEntityOfPage: pageUrl,
    inLanguage: post.lang === 'ta' ? 'ta-IN' : 'en-IN',
  };
  const counterpartSlug = getCounterpartSlug(post.slug);
  const counterpartLink = counterpartSlug
    ? `<p><a href="${escapeHtml(siteUrl + '/blog/' + counterpartSlug)}">${post.lang === 'ta' ? 'Read in English' : 'தமிழில் படிக்க (Read in Tamil)'}</a></p>`
    : '';

  return [
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    `<article class="seo-prerender" data-seo-prerender="blog-post">`,
    `<nav><a href="${escapeHtml(siteUrl + '/')}">Home</a> / <a href="${escapeHtml(siteUrl + '/blog')}">Blog</a> / ${escapeHtml(post.title)}</nav>`,
    `<h1>${escapeHtml(post.title)}</h1>`,
    `<p class="lede">${escapeHtml(post.description)}</p>`,
    counterpartLink,
    fullBody,
    counterpartLink,
    `<p><a href="tel:+91${CONTACT_DATA.phone1}">Call ${escapeHtml(CONTACT_DATA.formattedPhone1)}</a> · <a href="${escapeHtml(whatsappHref())}">WhatsApp</a> · <a href="${escapeHtml(siteUrl + '/contact')}">Enquire</a></p>`,
    `<p><a href="${escapeHtml(pageUrl)}">${escapeHtml(pageUrl)}</a></p>`,
    `</article>`,
  ].join('\n');
}

export function buildBlogTaxonomyShell(
  siteUrl: string,
  kind: 'category' | 'tag',
  slug: string,
  name: string,
  description: string
): string {
  const matching = getAllPostMetas().filter((p) =>
    kind === 'category' ? p.categoryIds.includes(slug) : p.tagIds.includes(slug)
  );
  const links = matching
    .map(
      (p) =>
        `<li><a href="${escapeHtml(siteUrl + '/blog/' + p.slug)}"><strong>${escapeHtml(p.title)}</strong></a> — ${escapeHtml(p.description)}</li>`
    )
    .join('');
  return [
    `<article class="seo-prerender" data-seo-prerender="blog-${kind}">`,
    `<nav><a href="${escapeHtml(siteUrl + '/')}">Home</a> / <a href="${escapeHtml(siteUrl + '/blog')}">Blog</a> / ${escapeHtml(name)}</nav>`,
    `<h1>${escapeHtml(name)}</h1>`,
    `<p>${escapeHtml(description)}</p>`,
    `<h2>Articles</h2>`,
    `<ul>${links}</ul>`,
    `<p><a href="${escapeHtml(siteUrl + '/blog')}">All articles</a></p>`,
    `</article>`,
  ].join('\n');
}

export function buildSitemapXml(siteUrl: string, lastmod = '2026-10-02'): string {
  const urls: Array<{ loc: string; priority: string; changefreq: string; lastmod: string }> = [];

  for (const r of SEO_ROUTES) {
    const loc = r.path === '/' ? `${siteUrl}/` : `${siteUrl}${r.path}`;
    const priority =
      r.path === '/' ? '1.0' : r.kind.includes('hub') ? '0.9' : r.kind === 'contact' ? '0.7' : '0.8';
    const changefreq = r.path === '/' || r.kind.includes('hub') ? 'weekly' : 'monthly';
    urls.push({ loc, priority, changefreq, lastmod });
  }

  urls.push({
    loc: `${siteUrl}/blog`,
    priority: '0.9',
    changefreq: 'weekly',
    lastmod,
  });

  for (const post of getAllPostMetas()) {
    urls.push({
      loc: `${siteUrl}/blog/${post.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: post.updatedAt,
    });
  }
  for (const c of getCategoriesWithCounts()) {
    urls.push({
      loc: `${siteUrl}/blog/category/${c.slug}`,
      priority: '0.6',
      changefreq: 'weekly',
      lastmod,
    });
  }
  for (const t of getTagsWithCounts()) {
    urls.push({
      loc: `${siteUrl}/blog/tag/${t.slug}`,
      priority: '0.5',
      changefreq: 'weekly',
      lastmod,
    });
  }

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

export function getBlogVercelRewrites(): Array<{ source: string; destination: string }> {
  return getBlogIndexablePaths().map((path) => ({
    source: path,
    destination: `${path}/index.html`,
  }));
}

export type { BlogPost };
