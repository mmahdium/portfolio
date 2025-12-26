# nuxt-portfolio - Product Requirements Document

**Author:** ali
**Date:** 2025-11-30
**Version:** 1.0

---

## Executive Summary

This PRD defines the **Resume Export** feature for the nuxt-portfolio project. The feature enables generating a professional, ATS-compatible PDF resume from dedicated resume data, with a web preview page for verification before download.

**Context:** This is a brownfield addition to an existing Nuxt 4 bilingual portfolio website. The portfolio already contains professional information but resume data will be separate to optimize for job application best practices.

### What Makes This Special

The key differentiator is producing a **pixel-perfect PDF that matches a custom design template** while remaining **ATS-friendly** for international job applications. Most resume builders sacrifice either design fidelity or ATS compatibility - this feature delivers both.

---

## Project Classification

**Technical Type:** web_app (feature addition to existing Nuxt 4 project)
**Domain:** general
**Complexity:** low-medium

This is a focused feature addition to an existing portfolio site, not a new product. The technical complexity is moderate due to PDF generation requirements, but the scope is well-defined.

---

## Success Criteria

1. **Design Fidelity:** PDF output matches the provided design template exactly (fonts, spacing, layout)
2. **ATS Compatibility:** Resume passes ATS parsing tests (text extractable, proper structure, no image-only content)
3. **One-Click Export:** User clicks download button → PDF ready in under 3 seconds
4. **Preview Accuracy:** Web preview (`/resume`) shows exactly what will be exported
5. **Data Separation:** Resume content managed independently from portfolio data

---

## Product Scope

### MVP - Minimum Viable Product

- Dedicated resume data file (`app/data/resume.en.ts`)
- Resume preview page (`/resume`)
- PDF download button
- Design based on user's custom template
- ATS-friendly output (proper text layers, semantic structure)
- English only

### Growth Features (Post-MVP)

- Persian resume support (`/fa/resume`)
- Multiple resume templates
- Basic customization (show/hide sections)

### Vision (Future)

- Full customization UI
- Multiple export formats (DOCX, plain text)
- Job-specific resume variants
- AI-powered content suggestions

---


## User Experience Principles

**Visual Personality:** Clean, professional, blue and white color scheme matching the custom template design.

**Page Behavior:** The `/resume` page is a standalone view (no site navigation) that mirrors the exact PDF output - what you see is what you download.

### Key Interactions

1. **Preview Flow:** User navigates to `/resume` → sees exact PDF preview → clicks floating download button → PDF downloads instantly

2. **Download Button:** Floating action button (bottom-right corner) with download icon - always visible, doesn't interfere with content

3. **Responsive Consideration:** Preview optimized for desktop viewing (A4 aspect ratio), mobile shows scrollable version

---

## Functional Requirements

**Resume Data Management:**
- FR1: System stores resume data in dedicated TypeScript file (`app/data/resume.en.ts`)
- FR2: Resume data structure supports: contact info, summary, experience, education, skills, certifications, languages
- FR3: Resume data is independent from portfolio data

**Resume Preview Page:**
- FR4: Users can view resume at `/resume` route
- FR5: Preview page displays resume in A4 aspect ratio layout
- FR6: Preview page matches PDF output exactly (WYSIWYG)
- FR7: Preview page is standalone (no site navigation header/footer)

**PDF Generation:**
- FR8: Users can download resume as PDF via floating action button
- FR9: PDF output matches the custom design template (Blue and White Clean Professional)
- FR10: PDF contains real text (not images) for ATS compatibility
- FR11: PDF generation completes in under 3 seconds
- FR12: PDF filename follows format: `Ali_Arghyani_Resume.pdf`

**ATS Compatibility:**
- FR13: PDF text is selectable and copy-able
- FR14: PDF structure uses proper heading hierarchy
- FR15: No critical information stored as images only

---

## Non-Functional Requirements

### Performance

- PDF generation: < 3 seconds
- Page load: < 2 seconds
- PDF file size: < 500KB

### Accessibility

- Semantic HTML structure in preview
- Proper heading hierarchy (h1, h2, h3)
- Sufficient color contrast (blue on white)

---

## Technical Notes (for Architecture phase)

**PDF Generation Options to Evaluate:**
- Browser print-to-PDF (CSS @media print)
- html2pdf.js / jsPDF
- Puppeteer/Playwright (server-side)
- React-PDF / Vue-PDF libraries

**Key Decision:** Client-side vs Server-side PDF generation

**Design Template Reference:** `design templates/Blue and White Clean and Professional Resume.pdf`

---

_This PRD captures the Resume Export feature - enabling professional, ATS-compatible PDF resume generation with pixel-perfect design fidelity._

_Created through collaborative discovery between ali and AI facilitator._


## User Experience Principles

### Design Template Reference

**Layout:** Two-Column Design (Blue & White theme)

**Header:**
- Full name (large font)
- Job title below
- Subtle separator or colored background

**Left Column (Sidebar - narrower):**
- Contact Info (icons + text): Phone, Email, Location, LinkedIn/Website
- Skills (technical skills - possibly progress bars or tags)
- Education (University, Degree, Year)
- Languages (if applicable)

**Right Column (Main Content - wider):**
- Profile/Summary (short paragraph)
- Experience (main section): Job title, Company, Dates, Bullet-point responsibilities/achievements

**Color Scheme:**
- Primary: White (background)
- Secondary: Blue (headers, icons, sidebar/header background)
- Text: Black/Dark gray for readability

### Key Interactions

- **Download Button:** Floating Action Button (FAB) bottom-right OR top-right header button
- **Page Style:** Standalone page without main site navigation (clean, print-ready feel)
- **Preview:** What you see = What you get (WYSIWYG)

---

## Functional Requirements

### Resume Data Management

- FR1: System stores resume data in dedicated file (`app/data/resume.en.ts`)
- FR2: Resume data structure supports all template sections (header, contact, skills, education, languages, profile, experience)
- FR3: Resume data is independent from portfolio data
- FR4: Data structure allows future extension for multiple languages

### Resume Preview Page

- FR5: Users can view resume at `/resume` route
- FR6: Preview page renders resume exactly as it will appear in PDF
- FR7: Preview page is standalone (no main site header/footer)
- FR8: Preview page is responsive but optimized for A4/Letter dimensions
- FR9: Users can see the two-column layout with proper styling

### PDF Export

- FR10: Users can download resume as PDF via download button
- FR11: PDF output matches the web preview exactly (pixel-perfect)
- FR12: PDF is ATS-compatible (text extractable, proper structure)
- FR13: PDF filename follows format: `FirstName_LastName_Resume.pdf`
- FR14: Download completes in under 3 seconds

### Template Sections

- FR15: Header displays name and job title prominently
- FR16: Contact section shows phone, email, location, LinkedIn with icons
- FR17: Skills section displays technical skills (list or visual format)
- FR18: Education section shows degree, university, and year
- FR19: Languages section shows language proficiencies (optional)
- FR20: Profile section displays professional summary paragraph
- FR21: Experience section shows jobs with title, company, dates, and bullet achievements

### Styling & Theming

- FR22: Resume uses blue and white color scheme
- FR23: Typography is professional and ATS-readable
- FR24: Layout maintains proper spacing and alignment
- FR25: Design adapts to content length (no awkward breaks)

---

## Non-Functional Requirements

### Performance

- PDF generation completes in under 3 seconds
- Preview page loads in under 1 second
- No visible layout shift during page load

### Compatibility

- PDF readable by major ATS systems (Workday, Greenhouse, Lever, etc.)
- PDF viewable in all major PDF readers
- Preview works in Chrome, Firefox, Safari, Edge

### Maintainability

- Resume data easily editable by developer
- Template structure allows future customization
- Code follows existing project patterns (Nuxt 4, TypeScript, Composables)

---

## Technical Notes (for Architecture phase)

**PDF Generation Options to Evaluate:**
- Browser print-to-PDF (CSS @media print)
- Puppeteer/Playwright (server-side rendering)
- Client-side libraries (jsPDF, html2pdf.js, react-pdf)
- Hybrid approach

**ATS Compatibility Considerations:**
- Real text (not images)
- Simple formatting
- Standard fonts
- Proper heading hierarchy
- No tables for layout (use CSS Grid/Flexbox)

---

_This PRD captures the Resume Export feature for nuxt-portfolio - enabling professional PDF resume generation with ATS compatibility and pixel-perfect design fidelity._

_Created through collaborative discovery between ali and AI facilitator._
