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

### Option 1: Git integration (recommended — no API token needed)

1. Push this folder to a GitHub or GitLab repository.
2. In Cloudflare, create a Pages project and connect the repository.
3. Use these settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Deploy command: **leave blank / disabled** (do **not** set it to `npx wrangler deploy`)
   - Node version: `22.12.0` or newer
4. Add the custom domain `agimmo.ma` in Cloudflare Pages.

> **Why blank deploy command?** The Git integration handles deployment automatically after the build. Setting a deploy command like `npx wrangler deploy` will attempt a redundant Wrangler-based deploy that requires an API token and will fail with auth error 10000 if no token is present.

### Option 2: Wrangler direct upload (CI / manual deploy)

```bash
npm install
npm run build
npm run deploy
```

The `npm run deploy` script runs `wrangler pages deploy dist --project-name=agimmo-ma`.

If an external CI platform requires a deploy command, use **one of**:

- `npm run deploy`
- `npx wrangler pages deploy dist --project-name=agimmo-ma`

Do **not** use bare `npx wrangler deploy` — it invokes the wrong Wrangler subcommand for Pages projects.

> **Shim note:** A `postinstall` shim (`scripts/fix-wrangler-command.mjs`) rewrites `npx wrangler deploy` → `npx wrangler pages deploy dist --project-name agimmo-ma` so that platforms *already* configured with the bare command continue to work. Prefer the explicit commands above for new configurations.

#### Required `CLOUDFLARE_API_TOKEN` permissions

If deployment fails with Cloudflare API Authentication error **10000**, check the token:

1. `CLOUDFLARE_API_TOKEN` must be set in the environment (CI secret, `.env`, etc.).
2. The token must have **all** of the following permissions:

   | Permission | Scope |
   |---|---|
   | **Account → Cloudflare Pages → Edit** | Account `30e40e1835ed19133596f221954fb64e` |
   | **Account → Account Settings → Read** | Account `30e40e1835ed19133596f221954fb64e` |

3. The token must belong to a user with access to the target Pages project **`agimmo-ma`**.
4. Do **not** commit the token to the repository.

If you cannot guarantee token permissions, use **Option 1: Git integration** instead (no token required).

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
