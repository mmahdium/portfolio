# Epic Technical Specification: Resume Data & Types

Date: 2025-11-30
Author: ali
Epic ID: 1
Status: Draft

---

## Overview

Epic 1 establishes the data foundation for the Resume Export feature. This epic creates TypeScript interfaces based on the JSON Resume schema (modified), implements a sample resume data file with realistic content, and provides a composable for reactive data access throughout the application.

This is a foundational epic with no UI components - it provides the typed data layer that Epic 2 (Preview Page) and Epic 3 (PDF Export) will consume.

## Objectives and Scope

### In Scope

- TypeScript interfaces for all resume sections (basics, work, education, skills, languages, certifications)
- Sample resume data file with Ali Arghyani's information
- Composable for data access with helper functions (date formatting, filename generation)
- Type exports for use in Vue components

### Out of Scope

- UI components (Epic 2)
- PDF generation (Epic 3)
- Persian language resume data (Growth feature)
- Database storage (file-based only)
- API endpoints for resume data

## System Architecture Alignment

### Components Referenced

| Component | Purpose | Architecture Section |
|-----------|---------|---------------------|
| `app/types/resume.ts` | TypeScript interfaces | Data Architecture |
| `app/data/resume.en.ts` | English resume data | Data Architecture |
| `app/composables/useResumeData.ts` | Data access layer | Implementation Patterns |

### Constraints

- Must follow JSON Resume schema (modified) as defined in Architecture doc
- Data must be independent from existing portfolio data
- Must support future language extension (file naming: `resume.{locale}.ts`)
- Must use existing project patterns (composables, TypeScript strict mode)

## Detailed Design

### Services and Modules

| Module | Responsibility | Inputs | Outputs |
|--------|---------------|--------|---------|
| `types/resume.ts` | Type definitions | None | TypeScript interfaces |
| `data/resume.en.ts` | Data storage | None | `Resume` object |
| `composables/useResumeData.ts` | Data access | None | Reactive refs + helpers |

### Data Models and Contracts

```typescript
// app/types/resume.ts

export interface ResumeBasics {
  name: string
  label: string                    // Job title
  email: string
  phone: string
  url?: string
  location: {
    city: string
    country: string
  }
  profiles: Array<{
    network: string               // LinkedIn, GitHub, etc.
    url: string
    icon?: string                 // Iconify icon name
  }>
  summary: string
}

export interface WorkExperience {
  company: string
  position: string
  startDate: string               // YYYY-MM format
  endDate?: string                // YYYY-MM or undefined for "Present"
  highlights: string[]            // Bullet points
}

export interface Education {
  institution: string
  area: string                    // Field of study
  studyType: string               // Degree type
  startDate: string
  endDate?: string
}

export interface Skill {
  name: string                    // Category name
  keywords: string[]              // Individual skills
}

export interface Language {
  language: string
  fluency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic'
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface Resume {
  basics: ResumeBasics
  work: WorkExperience[]
  education: Education[]
  skills: Skill[]
  languages?: Language[]
  certifications?: Certification[]
}
```

### APIs and Interfaces

**Composable Interface:**

```typescript
// app/composables/useResumeData.ts

export function useResumeData() {
  // Returns:
  resume: ComputedRef<Resume>           // Reactive resume data
  formatDate(date: string): string      // "2023-01" → "Jan 2023"
  getFullName(): string                 // "Ali Arghyani"
  getPdfFilename(): string              // "Ali_Arghyani_Resume.pdf"
}
```

### Workflows and Sequencing

```
Story 1.1: Create Types
    ↓
Story 1.2: Create Sample Data (imports types)
    ↓
Story 1.3: Create Composable (imports data)
    ↓
Epic 2: Preview Components (uses composable)
```

## Non-Functional Requirements

### Performance

| Metric | Target | Rationale |
|--------|--------|-----------|
| Type checking | < 1s | Part of build process |
| Data import | Instant | Static import, no async |
| Composable init | < 1ms | Simple computed refs |

### Security

- No PII in committed code (sample data uses placeholder info)
- Resume data is read-only (no mutations)
- No external API calls for data

### Reliability/Availability

- Static data - 100% availability
- No runtime dependencies
- TypeScript ensures compile-time safety

### Observability

- TypeScript errors surface at build time
- No runtime logging needed for data layer

## Dependencies and Integrations

### Existing Dependencies (No new packages required)

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ^5.9.x | Type definitions |
| vue | ^3.5.x | Composable reactivity |
| nuxt | ^4.1.x | Auto-imports |

### Integration Points

| Integration | Direction | Notes |
|-------------|-----------|-------|
| Epic 2 Components | Downstream | Components consume `useResumeData()` |
| Epic 3 PDF API | Downstream | API uses data for filename |

## Acceptance Criteria (Authoritative)

### Story 1.1: Create Resume TypeScript Interfaces

| AC ID | Criteria | Testable |
|-------|----------|----------|
| AC-1.1.1 | File exists at `app/types/resume.ts` | ✓ |
| AC-1.1.2 | `ResumeBasics` interface includes: name, label, email, phone, url?, location, profiles, summary | ✓ |
| AC-1.1.3 | `WorkExperience` interface includes: company, position, startDate, endDate?, highlights | ✓ |
| AC-1.1.4 | `Education` interface includes: institution, area, studyType, startDate, endDate? | ✓ |
| AC-1.1.5 | `Skill` interface includes: name, keywords[] | ✓ |
| AC-1.1.6 | `Language` interface includes: language, fluency (union type) | ✓ |
| AC-1.1.7 | `Certification` interface includes: name, issuer, date | ✓ |
| AC-1.1.8 | `Resume` interface combines all above with optional languages/certifications | ✓ |
| AC-1.1.9 | All date fields use YYYY-MM string format | ✓ |
| AC-1.1.10 | All interfaces are exported | ✓ |

### Story 1.2: Create Sample Resume Data File

| AC ID | Criteria | Testable |
|-------|----------|----------|
| AC-1.2.1 | File exists at `app/data/resume.en.ts` | ✓ |
| AC-1.2.2 | Exports `resumeData` of type `Resume` | ✓ |
| AC-1.2.3 | Contains full name and job title | ✓ |
| AC-1.2.4 | Contains contact info (email, phone, location) | ✓ |
| AC-1.2.5 | Contains at least 2 social profiles with icons | ✓ |
| AC-1.2.6 | Contains professional summary (2-3 sentences) | ✓ |
| AC-1.2.7 | Contains at least 2 work experiences with 3+ highlights each | ✓ |
| AC-1.2.8 | Contains at least 1 education entry | ✓ |
| AC-1.2.9 | Contains at least 2 skill categories with 4+ keywords each | ✓ |
| AC-1.2.10 | Contains at least 2 languages | ✓ |
| AC-1.2.11 | Data is independent from portfolio data | ✓ |

### Story 1.3: Create Resume Data Composable

| AC ID | Criteria | Testable |
|-------|----------|----------|
| AC-1.3.1 | File exists at `app/composables/useResumeData.ts` | ✓ |
| AC-1.3.2 | Exports `useResumeData()` function | ✓ |
| AC-1.3.3 | Returns `resume` as reactive reference | ✓ |
| AC-1.3.4 | Returns `formatDate()` that converts "2023-01" to "Jan 2023" | ✓ |
| AC-1.3.5 | Returns `getFullName()` that returns full name | ✓ |
| AC-1.3.6 | Returns `getPdfFilename()` that returns "FirstName_LastName_Resume.pdf" | ✓ |

## Traceability Mapping

| AC | FR | Spec Section | Component | Test Idea |
|----|-----|--------------|-----------|-----------|
| AC-1.1.1-10 | FR1, FR2 | Data Models | `types/resume.ts` | TypeScript compilation |
| AC-1.2.1-11 | FR1, FR2, FR3, FR4 | Data Models | `data/resume.en.ts` | Type check + content validation |
| AC-1.3.1-6 | FR1 | APIs/Interfaces | `composables/useResumeData.ts` | Unit test composable |

## Risks, Assumptions, Open Questions

### Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Sample data doesn't match real user needs | Low | Easy to modify file |
| Type changes break downstream | Medium | Strict typing catches at compile |

### Assumptions

- Developer will replace sample data with real resume content
- English locale is sufficient for MVP
- JSON Resume schema modifications are acceptable

### Open Questions

- None - Epic 1 is well-defined

## Test Strategy Summary

### Test Levels

| Level | Scope | Approach |
|-------|-------|----------|
| Static | Types | TypeScript compiler |
| Unit | Composable | Vitest (if needed) |
| Integration | Data flow | Manual verification |

### Coverage

- All interfaces compile without errors
- Sample data passes type checking
- Composable functions return expected values

### Edge Cases

- Empty arrays (work, education, skills)
- Missing optional fields (url, endDate, certifications)
- Date formatting edge cases (invalid format)
