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

This project uses **Cloudflare Pages Git integration** — no API token, no deploy key, no `CLOUDFLARE_API_TOKEN` required.

### Setup

1. Push this repository to GitHub or GitLab.
2. In the Cloudflare dashboard, create a Pages project and connect the repository.
3. Use these settings:

   | Setting | Value |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | **Deploy command** | **Leave blank / disabled** |
   | Node.js version | `22.12.0` or newer |

4. Add the custom domain `agimmo.ma` in Cloudflare Pages.

That's it. Every push triggers a build and automatic deployment — no secrets, no tokens, no CLI deploy step.

### ⚠️ Do NOT set a deploy command in the dashboard

If the dashboard deploy command is set to `npx wrangler deploy` (or similar), Wrangler will try to call the Cloudflare API and fail with **authentication error 10000** because no `CLOUDFLARE_API_TOKEN` is configured. The correct setup is to **leave the deploy command blank**.

### Safety shim for already-misconfigured platforms

If an external platform is already configured to run `npx wrangler deploy`, a `postinstall` shim (`scripts/fix-wrangler-command.mjs`) intercepts the bare `wrangler deploy` command and exits successfully with an informational message instead of attempting an API call. This prevents auth error 10000 while the dashboard deploy command is being removed.

All other Wrangler subcommands (`pages deploy`, `dev`, `tail`, etc.) pass through to the real Wrangler CLI normally.

### Manual deploy (advanced / local CLI only)

If you ever need to deploy manually from your own machine (not the CI platform), you **must** have `CLOUDFLARE_API_TOKEN` set locally and run:

```bash
npx wrangler pages deploy dist --project-name=agimmo-ma
```

Do **not** use bare `npx wrangler deploy` — it is intercepted by the safety shim and will not deploy.

> **Note:** `npm run deploy` is intentionally a no-op. It prints a reminder that Cloudflare Pages handles deployment automatically and exits 0.

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
