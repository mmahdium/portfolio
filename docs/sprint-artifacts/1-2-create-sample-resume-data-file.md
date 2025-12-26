# Story 1.2: Create Sample Resume Data File

Status: done

## Story

As a **developer**,
I want **a sample resume data file with realistic content**,
so that **I can test the preview and PDF generation with real data**.

## Acceptance Criteria

| AC ID | Criteria | Testable |
|-------|----------|----------|
| AC-1 | File exists at `app/data/resume.en.ts` | ✓ |
| AC-2 | Exports `resumeData` of type `Resume` | ✓ |
| AC-3 | Contains full name and job title in `basics` | ✓ |
| AC-4 | Contains contact info (email, phone, location) in `basics` | ✓ |
| AC-5 | Contains at least 2 social profiles with icons (LinkedIn, GitHub) | ✓ |
| AC-6 | Contains professional summary (2-3 sentences) | ✓ |
| AC-7 | Contains at least 2 work experiences with 3+ highlights each | ✓ |
| AC-8 | Contains at least 1 education entry | ✓ |
| AC-9 | Contains at least 2 skill categories with 4+ keywords each | ✓ |
| AC-10 | Contains at least 2 languages | ✓ |
| AC-11 | Data is independent from portfolio data | ✓ |

## Tasks / Subtasks

- [x] **Task 1: Create data file** (AC: 1)
  - [x] Create `app/data/resume.en.ts` file
  - [x] Add file header comment

- [x] **Task 2: Import Resume type** (AC: 2)
  - [x] Import `Resume` type from `~/types/resume`
  - [x] Export `resumeData` constant with type annotation

- [x] **Task 3: Define basics section** (AC: 3, 4, 5, 6)
  - [x] Add `name: string` (Ali Arghyani)
  - [x] Add `label: string` (Senior Frontend Developer)
  - [x] Add `email: string`
  - [x] Add `phone: string`
  - [x] Add `location: { city, country }`
  - [x] Add `profiles` array with LinkedIn and GitHub (with icons)
  - [x] Add `summary` (2-3 sentences)

- [x] **Task 4: Define work experience** (AC: 7)
  - [x] Add at least 2 work entries
  - [x] Each entry has company, position, startDate, endDate?
  - [x] Each entry has 3+ highlights

- [x] **Task 5: Define education** (AC: 8)
  - [x] Add at least 1 education entry
  - [x] Include institution, area, studyType, dates

- [x] **Task 6: Define skills** (AC: 9)
  - [x] Add at least 2 skill categories
  - [x] Each category has 4+ keywords

- [x] **Task 7: Define languages** (AC: 10)
  - [x] Add at least 2 languages
  - [x] Use fluency union type values

- [x] **Task 8: Verify TypeScript compilation** (AC: 1-11)
  - [x] Run `pnpm typecheck` or build to verify no errors
  - [x] Verify data imports correctly

## Dev Notes

### Architecture Alignment

- **Schema:** Must conform to `Resume` interface from Story 1.1
- **Location:** `app/data/` follows Nuxt 4 convention for data files
- **Naming:** `resume.en.ts` supports future i18n extension (resume.fa.ts)
- **Independence:** Data must be separate from existing `portfolio.en.ts`

### Key Constraints

- Date format: YYYY-MM string (e.g., "2022-01")
- Use "Present" concept via undefined `endDate` for current positions
- Iconify icon names for profiles: `i-mdi-linkedin`, `i-mdi-github`
- Fluency values: `'Native' | 'Fluent' | 'Intermediate' | 'Basic'`

### Sample Data Guidelines

- Use Ali Arghyani as sample name (per Architecture doc)
- Use placeholder contact info (not real PII)
- Work experience should be realistic but fictional
- Skills should reflect frontend developer profile

### Learnings from Previous Story

**From Story 1-1-create-resume-typescript-interfaces (Status: done)**

- **Types Created:** All resume interfaces available at `app/types/resume.ts`
- **Import Pattern:** Use `import type { Resume } from '~/types/resume'`
- **Interfaces Available:** `Resume`, `ResumeBasics`, `WorkExperience`, `Education`, `Skill`, `Language`, `Certification`
- **Date Format:** All date fields are `string` type for YYYY-MM format
- **Optional Fields:** `url`, `endDate`, `languages`, `certifications` are optional

[Source: docs/sprint-artifacts/1-1-create-resume-typescript-interfaces.md#Dev-Agent-Record]

### Project Structure Notes

- File path: `app/data/resume.en.ts`
- Similar pattern to existing `app/data/portfolio.en.ts`
- Auto-imported by Nuxt (no manual import needed)

### References

- [Source: docs/architecture.md#Data-Architecture] - Sample data structure
- [Source: docs/epics.md#Story-1.2] - Acceptance criteria
- [Source: docs/sprint-artifacts/tech-spec-epic-1.md#Data-Models-and-Contracts] - Schema details
- [Source: app/types/resume.ts] - TypeScript interfaces to use

## Dev Agent Record

### Context Reference

- `docs/sprint-artifacts/1-2-create-sample-resume-data-file.context.xml`

### Agent Model Used

Claude (Kiro Dev Agent - Amelia)

### Debug Log References

- Created `app/data/resume.en.ts` with sample resume data
- Imported `Resume` type from `~/types/resume`
- All sections populated: basics, work (2), education (1), skills (2), languages (2)
- getDiagnostics: No errors found

### Completion Notes List

- ✅ Created `app/data/resume.en.ts` with header comment
- ✅ Exported `resumeData` constant with `Resume` type annotation
- ✅ basics: Ali Arghyani, Senior Frontend Developer, contact info, 2 profiles with icons, summary
- ✅ work: 2 entries (NexaPortal current, Freelance past) with 4 highlights each
- ✅ education: 1 entry (Qom University of Technology, B.Sc. Telecommunications)
- ✅ skills: 2 categories (Frontend: 5 keywords, Tools & DevOps: 5 keywords)
- ✅ languages: 2 entries (Persian Native, English Fluent)
- ✅ Data is independent from portfolio data (no imports from portfolio files)

### File List

| Action | File |
|--------|------|
| Created | `app/data/resume.en.ts` |

## Change Log

| Date | Author | Change |
|------|--------|--------|
| 2025-11-30 | SM Agent (Bob) | Initial draft created |
| 2025-11-30 | Dev Agent (Amelia) | Implemented all tasks - created sample resume data file |
| 2025-11-30 | Senior Dev Review (AI) | Code review completed - APPROVED |

---

## Senior Developer Review (AI)

### Review Metadata
- **Reviewer:** ali
- **Date:** 2025-11-30
- **Outcome:** ✅ **APPROVE**

### Summary
All 11 acceptance criteria are fully implemented. All 8 tasks verified with evidence. Data conforms to Resume interface, is independent from portfolio data, and follows project patterns.

### Acceptance Criteria Coverage

| AC# | Description | Status | Evidence |
|-----|-------------|--------|----------|
| AC-1 | File exists at app/data/resume.en.ts | ✅ | File exists |
| AC-2 | Exports resumeData of type Resume | ✅ | `resume.en.ts:9` |
| AC-3 | Contains full name and job title | ✅ | `resume.en.ts:11-12` |
| AC-4 | Contains contact info | ✅ | `resume.en.ts:13-19` |
| AC-5 | Contains 2+ social profiles with icons | ✅ | `resume.en.ts:20-31` |
| AC-6 | Contains professional summary | ✅ | `resume.en.ts:32-33` |
| AC-7 | Contains 2+ work experiences with 3+ highlights | ✅ | `resume.en.ts:36-57` |
| AC-8 | Contains 1+ education entry | ✅ | `resume.en.ts:58-65` |
| AC-9 | Contains 2+ skill categories with 4+ keywords | ✅ | `resume.en.ts:66-73` |
| AC-10 | Contains 2+ languages | ✅ | `resume.en.ts:74-83` |
| AC-11 | Data independent from portfolio | ✅ | No portfolio imports |

**Summary: 11 of 11 ACs implemented**

### Task Completion Validation

| Task | Marked | Verified | Evidence |
|------|--------|----------|----------|
| Task 1-8 | [x] | ✅ | All verified with file evidence |

**Summary: 8 of 8 tasks verified, 0 false completions**

### Architectural Alignment
- ✅ Conforms to Resume interface from app/types/resume.ts
- ✅ File location follows Nuxt 4 convention (app/data/)
- ✅ Naming supports i18n extension (resume.en.ts)
- ✅ Independent from portfolio data

### Test Coverage
- TypeScript compiler validates data structure
- getDiagnostics: No errors

### Security Notes
- ✅ Uses placeholder contact info (not real PII)

### Action Items
- Note: No action items required - implementation is complete and correct
