import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import {
  applyRouteMetaToHtml,
  buildCrawlableHomeHtml,
  buildCrawlableRouteHtml,
  resolveSiteUrl,
  SEO_ROUTES,
} from '../src/lib/crawlableHome.ts';
import {
  buildBlogIndexShell,
  buildBlogPostShell,
  buildBlogTaxonomyShell,
  buildSitemapXml,
  getBlogVercelRewrites,
} from '../src/lib/blogSeo.ts';
import {
  getCategoriesWithCounts,
  getTagsWithCounts,
} from '../src/content/blog/registry.ts';
import { getAllFullPosts } from '../src/content/blog/getFullPost.ts';

function applyMeta(
  html: string,
  siteUrl: string,
  title: string,
  description: string,
  pagePath: string
): string {
  const pageUrl = pagePath === '/' ? `${siteUrl}/` : `${siteUrl}${pagePath}`;
  const esc = (v: string) =>
    v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${esc(title)}</title>`);
  out = out.replace(
    /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="description" content="${esc(description)}" />`
  );
  out = out.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${esc(pageUrl)}" />`
  );
  out = out.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${esc(title)}" />`
  );
  out = out.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${esc(description)}" />`
  );
  out = out.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${esc(pageUrl)}" />`
  );
  out = out.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${esc(title)}" />`
  );
  out = out.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${esc(description)}" />`
  );
  if (!/name=["']robots["']/i.test(out)) {
    out = out.replace('</title>', `</title>\n    <meta name="robots" content="index, follow" />`);
  }
  return out;
}

function writeShell(outDir: string, routePath: string, html: string) {
  const dir = path.resolve(outDir, routePath.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}

function injectIntoTemplate(cleanTemplate: string, shell: string): string {
  return cleanTemplate.replace(
    /<div id=["']root["']>\s*<\/div>/i,
    `<div id="root">\n${shell}\n</div>`
  );
}

/**
 * Generates pristine, valid, crawlable static HTML shells for every route + blog post.
 * Uses a clean index.html template with empty #root to guarantee 0 dangling tags and valid DOM.
 */
export function prerenderHomePlugin(): Plugin {
  let outDir = 'dist';
  let rootDir = process.cwd();

  return {
    name: 'prerender-home-shell',
    configResolved(config) {
      outDir = config.build.outDir;
      rootDir = config.root;
    },
    transformIndexHtml(html) {
      // Ensure robots meta exists in base template, but leave <div id="root"></div> clean
      let next = html;
      if (!/name=["']robots["']/i.test(next)) {
        next = next.replace(
          '</title>',
          `</title>\n    <meta name="robots" content="index, follow" />`
        );
      }
      return next;
    },
    closeBundle() {
      const siteUrl = resolveSiteUrl(process.env.VITE_SITE_URL);
      const indexPath = path.resolve(outDir, 'index.html');
      if (!fs.existsSync(indexPath)) {
        this.warn('prerender-home-shell: dist/index.html missing; skip route shells');
        return;
      }
      // Pristine template with empty #root
      const cleanTemplate = fs.readFileSync(indexPath, 'utf8');

      // 1. Homepage
      {
        const shell = buildCrawlableHomeHtml(siteUrl);
        let html = injectIntoTemplate(cleanTemplate, shell);
        html = applyMeta(
          html,
          siteUrl,
          'Srivilliputtur Taxi & Outstation Cab | Sri Arumuga Travels',
          'Srivilliputtur taxi and outstation cab by Sri Arumuga Travels. Sedan trips across India — plan pickup, timing, and fare by call or WhatsApp.',
          '/'
        );
        fs.writeFileSync(indexPath, html, 'utf8');
      }

      // 2. SEO Routes (Services, Locations, Contact)
      for (const route of SEO_ROUTES) {
        if (route.path === '/') continue;
        const shell = buildCrawlableRouteHtml(siteUrl, route);
        let html = injectIntoTemplate(cleanTemplate, shell);
        html = applyRouteMetaToHtml(html, siteUrl, route);
        writeShell(outDir, route.path, html);
      }

      // 3. Blog index
      {
        const shell = buildBlogIndexShell(siteUrl);
        let html = injectIntoTemplate(cleanTemplate, shell);
        html = applyMeta(
          html,
          siteUrl,
          'Travel Blog | Sri Arumuga Travels — Srivilliputtur & Southern TN',
          'Practical travel guides for Srivilliputtur and southern Tamil Nadu — temples, outstation cabs, road trips, and planning tips. English and Tamil.',
          '/blog'
        );
        writeShell(outDir, '/blog', html);
      }

      // 4. Individual Blog Posts
      for (const post of getAllFullPosts()) {
        const shell = buildBlogPostShell(siteUrl, post);
        let html = injectIntoTemplate(cleanTemplate, shell);
        html = applyMeta(
          html,
          siteUrl,
          `${post.title} | Sri Arumuga Travels`,
          post.description,
          `/blog/${post.slug}`
        );
        // Ensure exact language attribute
        if (post.lang === 'ta') {
          html = html.replace(/<html lang=["'][^"']*["']/i, '<html lang="ta-IN"');
        } else {
          html = html.replace(/<html lang=["'][^"']*["']/i, '<html lang="en-IN"');
        }
        writeShell(outDir, `/blog/${post.slug}`, html);
      }

      // 5. Blog Categories
      for (const c of getCategoriesWithCounts()) {
        const shell = buildBlogTaxonomyShell(
          siteUrl,
          'category',
          c.slug,
          c.nameEn,
          c.descriptionEn
        );
        let html = injectIntoTemplate(cleanTemplate, shell);
        html = applyMeta(
          html,
          siteUrl,
          `${c.nameEn} | Travel Blog | Sri Arumuga Travels`,
          c.descriptionEn,
          `/blog/category/${c.slug}`
        );
        writeShell(outDir, `/blog/category/${c.slug}`, html);
      }

      // 6. Blog Tags
      for (const t of getTagsWithCounts()) {
        const shell = buildBlogTaxonomyShell(
          siteUrl,
          'tag',
          t.slug,
          t.nameEn,
          `Travel articles tagged ${t.nameEn} from Sri Arumuga Travels.`
        );
        let html = injectIntoTemplate(cleanTemplate, shell);
        html = applyMeta(
          html,
          siteUrl,
          `${t.nameEn} articles | Travel Blog | Sri Arumuga Travels`,
          `Travel articles tagged ${t.nameEn} from Sri Arumuga Travels — practical guides for southern Tamil Nadu journeys.`,
          `/blog/tag/${t.slug}`
        );
        writeShell(outDir, `/blog/tag/${t.slug}`, html);
      }

      // 7. Sitemap → dist + public
      const sitemap = buildSitemapXml(siteUrl);
      fs.writeFileSync(path.resolve(outDir, 'sitemap.xml'), sitemap, 'utf8');
      fs.writeFileSync(path.resolve(rootDir, 'public/sitemap.xml'), sitemap, 'utf8');

      // 8. Merge blog rewrites into vercel.json (preserve non-blog rewrites)
      const vercelPath = path.resolve(rootDir, 'vercel.json');
      if (fs.existsSync(vercelPath)) {
        const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8')) as {
          rewrites?: Array<{ source: string; destination: string }>;
          [k: string]: unknown;
        };
        const existing = vercel.rewrites ?? [];
        const nonBlog = existing.filter((r) => !r.source.startsWith('/blog'));
        const blogRewrites = getBlogVercelRewrites();
        vercel.rewrites = [...nonBlog, ...blogRewrites];
        fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + '\n', 'utf8');
      }

      this.info(
        `prerender-home-shell: wrote ${SEO_ROUTES.length - 1} page shells + blog shells + sitemap (${getAllFullPosts().length} posts)`
      );
    },
  };
}
