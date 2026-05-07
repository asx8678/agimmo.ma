import { posts } from '@data/blog';
import { locations } from '@data/locations';
import { properties } from '@data/properties';
import { site } from '@data/site';

const staticPages = [
  '/',
  '/buy',
  '/sell',
  '/rent',
  '/property-management',
  '/properties',
  '/areas',
  '/about',
  '/contact',
  '/blog',
  '/privacy',
  '/fr',
  '/ar'
];

function url(path: string) {
  return new URL(path, site.url).toString();
}

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    ...staticPages,
    ...properties.map((property) => `/properties/${property.slug}`),
    ...locations.map((location) => `/areas/${location.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${url(path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
