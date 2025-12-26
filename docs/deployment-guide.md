# Deployment Guide

## Overview

This project is configured for **Static Site Generation (SSG)** and can be deployed to any static hosting platform.

## Build Process

```bash
# Generate static files with pre-rendered blog posts
pnpm generate
```

**Output Directory:** `.output/public`

The build process will:
- Pre-render all blog posts (English & Persian)
- Generate `sitemap.xml` automatically
- Create RSS feeds for both languages
- Output static files to `.output/public`

## Deployment Platforms

### Vercel (Recommended)

The project includes `vercel.json` with:
- Plausible analytics proxy rewrites
- Cache headers for `/_nuxt/` assets (1 year, immutable)

**Deploy via CLI:**
```bash
npm i -g vercel
vercel
```

**Or connect GitHub repository** for automatic deployments.

### Netlify

1. Connect your GitHub repository
2. Build command: `pnpm generate`
3. Publish directory: `.output/public`

### Cloudflare Pages

1. Connect GitHub repo or upload `.output/public`
2. Build command: `pnpm generate`
3. Build output directory: `.output/public`

### GitHub Pages

1. Run `pnpm generate`
2. Deploy contents of `.output/public`

### AWS S3 + CloudFront

1. Run `pnpm generate`
2. Upload `.output/public` to S3 bucket
3. Configure CloudFront distribution

## Environment Variables

Set these in your hosting platform:

| Variable | Required | Description |
|----------|----------|-------------|
| `NUXT_PUBLIC_LOAD_PLAUSIBLE` | No | Enable Plausible analytics (`"yes"` or `"no"`) |
| `NUXT_PUBLIC_SITE_URL` | No | Site URL for sitemap/RSS (default: `https://aliarghyani.vercel.app`) |

## Vercel Configuration

`vercel.json` includes:

### Rewrites (Plausible Proxy)
```json
{
  "source": "/stats/js/script.js",
  "destination": "https://plausible.io/js/script.tagged-events.js"
},
{
  "source": "/stats/api/event",
  "destination": "https://plausible.io/api/event"
}
```

### Cache Headers
```json
{
  "source": "/_nuxt/(.*)",
  "headers": [
    {
      "key": "cache-control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```

## Nitro Configuration

Pre-render settings in `nuxt.config.ts`:

```typescript
nitro: {
  prerender: {
    crawlLinks: true,
    routes: ['/', '/blog', '/fa/blog'],
    failOnError: false,
    ignore: ['/_vercel/image']
  }
}
```

## Route Rules

Caching configuration:

| Route | Rule |
|-------|------|
| `/blog` | SWR 3600s (1 hour) |
| `/fa/blog` | SWR 3600s (1 hour) |
| `/blog/**` | SWR 3600s (1 hour) |
| `/fa/blog/**` | SWR 3600s (1 hour) |

## CI/CD

No CI/CD pipeline is currently configured. Consider adding:
- GitHub Actions for automated builds
- Preview deployments for PRs
- Automated type checking and formatting

## Post-Deployment Checklist

- [ ] Verify homepage loads correctly
- [ ] Test Persian version (`/fa`)
- [ ] Check blog posts render properly
- [ ] Verify RSS feeds work
- [ ] Test sitemap.xml
- [ ] Confirm dark/light mode toggle
- [ ] Test language switcher
