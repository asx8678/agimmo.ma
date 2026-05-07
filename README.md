# AG Immo Morocco Real Estate Website

Premium SEO-focused Astro 6.3 website for **agimmo.ma**, prepared for Cloudflare Pages static deployment.

## What is included

- Astro 6.3 static site architecture.
- SEO landing pages for buying, selling, renting, property management and city-area searches.
- Morocco-focused copy for villas, apartments, riads, rentals, land and investment property.
- English homepage plus starter French and Arabic landing pages.
- Dynamic static routes for property briefs, city guides and blog guides.
- Structured data JSON-LD for organization, website, services, articles, FAQ and listings.
- `sitemap.xml`, `robots.txt`, Open Graph image, favicon, web manifest, Cloudflare `_headers` and `_redirects`.
- Cloudflare Pages-ready `wrangler.toml` with `pages_build_output_dir = "./dist"`.

## Requirements

Astro 6 requires Node 22.12.0 or newer. The project includes `.nvmrc` and `.node-version` set to `22.12.0`.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal.

## Build

```bash
npm run build
npm run preview
```

The build output is generated in `dist/`.

## Cloudflare Pages deployment

### Option 1: Git integration

1. Push this folder to a GitHub or GitLab repository.
2. In Cloudflare, create a Pages project and connect the repository.
3. Use these settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `22.12.0` or newer
4. Add the custom domain `agimmo.ma` in Cloudflare Pages.

### Option 2: Wrangler direct upload

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=agimmo-ma
```

## Important edits before production

Update these placeholders:

- `src/data/site.ts`: real phone number, WhatsApp, address and social links.
- `src/data/properties.ts`: replace sample property briefs with live inventory.
- `src/pages/contact.astro`: replace `mailto:` form action with a production form endpoint, CRM, or Cloudflare Pages Function.
- `public/_redirects`: keep or adjust the `www` redirect based on your DNS setup.
- `src/pages/privacy.astro`: review the privacy policy with a qualified professional before launch.

## Recommended next upgrades

- Connect listings to a headless CMS or private inventory API.
- Add real property photos through Astro image optimization or a CDN.
- Add analytics, conversion tracking and call/WhatsApp event tracking.
- Add full French and Arabic versions for every service, city and property page.
