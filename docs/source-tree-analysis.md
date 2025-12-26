# Source Tree Analysis

## Project Structure Overview

This is a **Nuxt 4 Portfolio** application with bilingual support (English/Persian RTL).

```
nuxt-portfolio/
├── app/                          # Source directory (srcDir)
│   ├── app.vue                   # Root component
│   ├── app.config.ts             # Nuxt UI theme tokens & configuration
│   ├── error.vue                 # Error page handler (404, 500)
│   │
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Tailwind CSS & global styles
│   │
│   ├── components/               # Auto-imported Vue components
│   │   ├── LanguageSwitcher.vue  # EN/FA language toggle
│   │   ├── ThemeSelector.vue     # Dark/Light mode toggle
│   │   │
│   │   ├── blog/                 # Blog-related components
│   │   │   ├── BlogCard.vue
│   │   │   ├── BlogEmpty.vue
│   │   │   ├── BlogNavigation.vue
│   │   │   ├── BlogPost.vue
│   │   │   ├── BlogSearch.vue
│   │   │   ├── BlogTableOfContents.vue
│   │   │   └── BlogTagFilter.vue
│   │   │
│   │   ├── common/               # Shared UI components
│   │   │   ├── BottomNav.vue
│   │   │   ├── ClientTooltip.vue
│   │   │   ├── FooterCopyright.vue
│   │   │   ├── ThemeCustomizer.vue
│   │   │   └── TopNav.vue
│   │   │
│   │   ├── content/              # MDC content components
│   │   │   ├── Alert.vue
│   │   │   ├── BlogCallout.vue
│   │   │   └── ProseCode.vue
│   │   │
│   │   └── portfolio/            # Portfolio-specific components
│   │       ├── AIStack.vue
│   │       ├── EducationList.vue
│   │       ├── ExperienceList.vue
│   │       ├── FloatingActions.vue
│   │       ├── Hero.vue
│   │       ├── LanguageSkills.vue
│   │       ├── ProjectsList.vue
│   │       ├── RecommendationsCarousel.vue
│   │       ├── SkillFilters.vue
│   │       ├── SkillGrid.vue
│   │       ├── Skills.vue
│   │       ├── SoftSkills.vue
│   │       ├── TagGroupCard.vue
│   │       ├── TagGroups.vue
│   │       └── WorkExperience.vue
│   │
│   ├── composables/              # Auto-imported composables
│   │   ├── useBlog.ts            # Blog data fetching
│   │   ├── useLocaleSwitching.ts # Locale transition state
│   │   ├── usePortfolio.ts       # Portfolio data by locale
│   │   ├── useSectionObserver.ts # Intersection observer for sections
│   │   ├── useSocialText.ts      # Social text formatting
│   │   ├── useViewTransition.ts  # View Transitions API wrapper
│   │   └── useViewTransitionRipple.ts # Ripple effect transitions
│   │
│   ├── data/                     # Static content data
│   │   ├── aiStack.ts            # AI tools/stack data
│   │   ├── portfolio.ts          # Portfolio data loader
│   │   ├── portfolio.en.ts       # English portfolio content
│   │   ├── portfolio.fa.ts       # Persian portfolio content
│   │   ├── recommendations.ts    # Recommendations data
│   │   ├── sections.ts           # Page sections config
│   │   └── skills.ts             # Skills data
│   │
│   ├── layouts/                  # Layout components
│   │   ├── default.vue           # Main layout with nav
│   │   └── marketing.vue         # Marketing/landing layout
│   │
│   ├── middleware/               # Route middleware
│   │   └── demo.ts               # Demo middleware
│   │
│   ├── pages/                    # File-based routing
│   │   ├── index.vue             # Homepage (/)
│   │   └── blog/
│   │       ├── index.vue         # Blog listing (/blog)
│   │       └── [...slug].vue     # Blog post (/blog/:slug)
│   │
│   ├── plugins/                  # Nuxt plugins
│   │   ├── remove-banners.client.ts
│   │   └── vueschool.client.ts
│   │
│   ├── types/                    # TypeScript definitions
│   │   ├── blog.ts
│   │   ├── components.types.ts
│   │   ├── global.d.ts
│   │   ├── portfolio.types.ts
│   │   └── recommendation.types.ts
│   │
│   └── utils/                    # Helper functions
│       ├── any_all.ts
│       ├── chipTones.ts
│       ├── findBy.ts
│       ├── getDisplayableNumber.ts
│       └── isSubset.ts
│
├── content/                      # Nuxt Content (MDC)
│   ├── en/
│   │   └── blog/                 # English blog posts
│   └── fa/
│       └── blog/                 # Persian blog posts (RTL)
│
├── i18n/                         # Internationalization
│   └── locales/
│       ├── en.json               # English translations
│       └── fa.json               # Persian translations
│
├── server/                       # Server-side code
│   ├── plugins/
│   │   └── prerender.ts          # SSG prerender plugin
│   └── routes/
│       ├── blog/
│       │   └── rss.xml.ts        # English RSS feed
│       └── fa/
│           └── blog/
│               └── rss.xml.ts    # Persian RSS feed
│
├── public/                       # Static assets
│   ├── favicon/                  # Favicon files
│   ├── fonts/                    # Local fonts (Roobert, Vazirmatn)
│   └── img/                      # Images
│
├── nuxt.config.ts                # Nuxt configuration
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript config
└── vercel.json                   # Vercel deployment config
```

## Critical Directories

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| `app/` | Source directory (srcDir) | app.vue, app.config.ts |
| `app/components/` | Auto-imported Vue components | 24 components in 4 categories |
| `app/composables/` | Reusable composition functions | 7 composables |
| `app/pages/` | File-based routing | 3 pages |
| `app/data/` | Static content by locale | portfolio.en.ts, portfolio.fa.ts |
| `content/` | MDC blog content | en/blog/, fa/blog/ |
| `i18n/locales/` | Translation files | en.json, fa.json |
| `server/routes/` | API endpoints | RSS feeds |

## Entry Points

- **Application Entry:** `app/app.vue`
- **Configuration:** `nuxt.config.ts`, `app/app.config.ts`
- **Homepage:** `app/pages/index.vue`
- **Blog:** `app/pages/blog/index.vue`

## Component Categories

1. **Blog Components (7):** BlogCard, BlogEmpty, BlogNavigation, BlogPost, BlogSearch, BlogTableOfContents, BlogTagFilter
2. **Common Components (5):** BottomNav, ClientTooltip, FooterCopyright, ThemeCustomizer, TopNav
3. **Content Components (3):** Alert, BlogCallout, ProseCode
4. **Portfolio Components (15):** AIStack, EducationList, ExperienceList, FloatingActions, Hero, LanguageSkills, ProjectsList, RecommendationsCarousel, SkillFilters, SkillGrid, Skills, SoftSkills, TagGroupCard, TagGroups, WorkExperience
5. **Root Components (2):** LanguageSwitcher, ThemeSelector
