# Project Overview

## nuxt-portfolio

A modern, bilingual portfolio website built with Nuxt 4, featuring English and Persian (RTL) support with dark mode as default.

🔗 **Live Demo:** [aliarghyani.vercel.app](https://aliarghyani.vercel.app)

## Purpose

Personal portfolio website showcasing:
- Professional experience and skills
- Project portfolio
- Blog with bilingual content
- AI/Tech stack expertise
- Recommendations and testimonials

## Tech Stack Summary

| Layer | Technology |
|-------|------------|
| Framework | Nuxt 4.1.3 (Vue 3 + Vite) |
| UI | Nuxt UI 4.0.1 |
| Styling | Tailwind CSS 4.1.14 |
| Language | TypeScript 5.9.3 |
| i18n | @nuxtjs/i18n 10.1.1 |
| Content | @nuxt/content 3.8.0 (MDC) |

## Architecture Type

**Component-based SPA with Static Site Generation (SSG)**

- Monolith structure
- File-based routing
- Pre-rendered at build time
- Bilingual support (EN/FA with RTL)

## Repository Structure

```
nuxt-portfolio/           # Monolith
├── app/                  # Source code (srcDir)
├── content/              # Blog content (MDC)
├── i18n/                 # Translations
├── server/               # API routes (RSS)
└── public/               # Static assets
```

## Key Features

- ✅ Nuxt 4 with `app/` directory structure
- ✅ Nuxt UI 4 with custom theming
- ✅ Tailwind CSS 4 with custom utilities
- ✅ Full TypeScript support
- ✅ English & Persian with automatic RTL
- ✅ Dark mode default with light option
- ✅ Responsive images with @nuxt/image
- ✅ Blog with MDC content
- ✅ RSS feeds for both languages
- ✅ Sitemap generation
- ✅ View Transitions API

## Documentation Index

- [Architecture](./architecture.md) - System design and patterns
- [Source Tree Analysis](./source-tree-analysis.md) - Directory structure
- [Component Inventory](./component-inventory.md) - UI components
- [Development Guide](./development-guide.md) - Setup and workflow
- [Deployment Guide](./deployment-guide.md) - Hosting and CI/CD

## Quick Start

```bash
pnpm install
pnpm dev
```

Visit: http://localhost:5000
