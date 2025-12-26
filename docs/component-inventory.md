# Component Inventory

## Overview

Total: **24 Vue components** organized in 5 categories.

All components are auto-imported by Nuxt from `app/components/`.

## Component Categories

### 1. Blog Components (7)

Components for the blog feature.

| Component | File | Purpose |
|-----------|------|---------|
| BlogCard | `blog/BlogCard.vue` | Blog post card for listing |
| BlogEmpty | `blog/BlogEmpty.vue` | Empty state when no posts |
| BlogNavigation | `blog/BlogNavigation.vue` | Blog navigation controls |
| BlogPost | `blog/BlogPost.vue` | Full blog post display |
| BlogSearch | `blog/BlogSearch.vue` | Search input for posts |
| BlogTableOfContents | `blog/BlogTableOfContents.vue` | TOC sidebar for posts |
| BlogTagFilter | `blog/BlogTagFilter.vue` | Tag-based filtering |

### 2. Common Components (5)

Shared UI components used across pages.

| Component | File | Purpose |
|-----------|------|---------|
| BottomNav | `common/BottomNav.vue` | Mobile bottom navigation |
| ClientTooltip | `common/ClientTooltip.vue` | Client-side tooltip wrapper |
| FooterCopyright | `common/FooterCopyright.vue` | Footer with copyright |
| ThemeCustomizer | `common/ThemeCustomizer.vue` | Theme customization panel |
| TopNav | `common/TopNav.vue` | Main navigation header |

### 3. Content Components (3)

MDC (Markdown Components) for rich content.

| Component | File | Purpose |
|-----------|------|---------|
| Alert | `content/Alert.vue` | Alert/callout box |
| BlogCallout | `content/BlogCallout.vue` | Blog-specific callout |
| ProseCode | `content/ProseCode.vue` | Code block styling |

### 4. Portfolio Components (15)

Portfolio-specific section components.

| Component | File | Purpose |
|-----------|------|---------|
| AIStack | `portfolio/AIStack.vue` | AI tools/stack showcase |
| EducationList | `portfolio/EducationList.vue` | Education history |
| ExperienceList | `portfolio/ExperienceList.vue` | Work experience items |
| FloatingActions | `portfolio/FloatingActions.vue` | Floating action buttons |
| Hero | `portfolio/Hero.vue` | Hero section with intro |
| LanguageSkills | `portfolio/LanguageSkills.vue` | Language proficiency |
| ProjectsList | `portfolio/ProjectsList.vue` | Project portfolio |
| RecommendationsCarousel | `portfolio/RecommendationsCarousel.vue` | Testimonials carousel |
| SkillFilters | `portfolio/SkillFilters.vue` | Skill category filters |
| SkillGrid | `portfolio/SkillGrid.vue` | Skills grid display |
| Skills | `portfolio/Skills.vue` | Skills section wrapper |
| SoftSkills | `portfolio/SoftSkills.vue` | Soft skills display |
| TagGroupCard | `portfolio/TagGroupCard.vue` | Tag group card |
| TagGroups | `portfolio/TagGroups.vue` | Tag groups container |
| WorkExperience | `portfolio/WorkExperience.vue` | Work experience section |

### 5. Root Components (2)

Global components at root level.

| Component | File | Purpose |
|-----------|------|---------|
| LanguageSwitcher | `LanguageSwitcher.vue` | EN/FA language toggle |
| ThemeSelector | `ThemeSelector.vue` | Dark/Light mode toggle |

## Component Statistics

| Category | Count | Percentage |
|----------|-------|------------|
| Portfolio | 15 | 62.5% |
| Blog | 7 | 29.2% |
| Common | 5 | 20.8% |
| Content | 3 | 12.5% |
| Root | 2 | 8.3% |
| **Total** | **24** | **100%** |

## Design System Elements

### Nuxt UI Components Used

The project leverages Nuxt UI 4 components with custom theming:
- Primary color: Violet
- Gray scale: Zinc
- Custom prose styling for blog content
- Timeline component customization
- Tooltip customization

### Custom Utilities

- Chip utility for tags and badges (via Tailwind)
- View transition effects
- RTL-aware styling

## Component Dependencies

```
app.vue
└── layouts/
    ├── default.vue
    │   ├── TopNav
    │   ├── BottomNav
    │   └── FooterCopyright
    └── marketing.vue

pages/index.vue
├── Hero
├── Skills
│   ├── SkillFilters
│   └── SkillGrid
├── WorkExperience
│   └── ExperienceList
├── ProjectsList
├── EducationList
├── AIStack
├── RecommendationsCarousel
├── LanguageSkills
├── SoftSkills
├── TagGroups
│   └── TagGroupCard
└── FloatingActions

pages/blog/index.vue
├── BlogSearch
├── BlogTagFilter
├── BlogCard
└── BlogEmpty

pages/blog/[...slug].vue
├── BlogPost
├── BlogNavigation
└── BlogTableOfContents
```
