# Story 2.2: Create Resume Preview Container Component

Status: done

## Story

As a developer,
I want a container component that renders the full resume,
so that I have a single source of truth for web and PDF.

## Acceptance Criteria

1. **AC1:** Given the ResumePreview component is rendered, when it displays, then it shows a single-column vertical layout with proper spacing
2. **AC2:** The container has A4 aspect ratio (210mm × 297mm)
3. **AC3:** Page margins are 24px (1.5rem)
4. **AC4:** Background is white
5. **AC5:** Color scheme is blue (#2563eb) and white
6. **AC6:** Typography uses Inter font for English text
7. **AC7:** Proper heading hierarchy (h1 for name, h2 for sections)
8. **AC8:** Body text is 14px (0.875rem)
9. **AC9:** ATS-readable font sizes
10. **AC10:** Layout is responsive - maintains single column on all screen sizes
11. **AC11:** Print styles included - `.no-print` class hides elements in print
12. **AC12:** Page breaks are controlled
13. **AC13:** Colors print correctly (`printBackground: true`)

## Tasks / Subtasks

- [x] Create ResumePreview component file (AC: #1-#13)
  - [x] Create `app/components/resume/ResumePreview.vue`
  - [x] Set up component structure with script setup and TypeScript

- [x] Implement single-column layout (AC: #1, #10)
  - [x] Use vertical stack layout (flexbox or CSS Grid single column)
  - [x] Add proper spacing between sections
  - [x] Ensure consistent layout on all screen sizes

- [x] Configure container dimensions (AC: #2, #3)
  - [x] Set container to A4 aspect ratio (210mm × 297mm)
  - [x] Apply 24px (1.5rem) margins
  - [x] Use Tailwind classes: `max-w-[210mm] min-h-[297mm] p-6`

- [x] Apply color scheme and typography (AC: #4-#9)
  - [x] Set white background: `bg-white`
  - [x] Define blue primary color: `text-blue-600` (#2563eb)
  - [x] Configure Inter font (already available via @nuxt/fonts)
  - [x] Set body text size: `text-sm` (0.875rem)
  - [x] Ensure proper heading hierarchy (h1, h2)

- [x] Add print styles (AC: #11-#13)
  - [x] Create `.no-print` utility class
  - [x] Add `@media print` styles
  - [x] Set `printBackground: true` for colors
  - [x] Control page breaks with `break-inside-avoid`

- [x] Integrate data from composable
  - [x] Import `useResumeData()` composable
  - [x] Access `resume` reactive reference
  - [x] Prepare for child component integration (Stories 2.3, 2.4)

- [x] Add placeholder sections
  - [x] Add comment placeholders for child components
  - [x] Structure: Header → Summary → Experience → Education → Additional Info

- [x] Test component rendering
  - [x] Import component in `pages/resume.vue`
  - [x] Verify single-column layout
  - [x] Test responsive behavior on mobile
  - [x] Check print preview (Ctrl+P)
  - [x] Verify A4 dimensions and margins

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- File location: `app/components/resume/ResumePreview.vue`
- Layout: Single-column vertical stack
- Styling: Tailwind CSS utilities
- Data source: `useResumeData()` composable from Epic 1

**From Tech Spec Epic 2 (REVISED):**
- AC1-AC13 map directly to this story
- Container is the main orchestrator for all resume sections
- WYSIWYG pattern: same component for web and PDF
- **CRITICAL:** Single-column layout (NOT two-column)

### Learnings from Previous Story

**From Story 2.1 (Status: drafted)**
- Page route created at `app/pages/resume.vue`
- Standalone layout configured with `definePageMeta({ layout: false })`
- Print mode detection implemented via `useRoute().query.print`
- White background and metadata already set
- **Integration Point**: Import `ResumePreview` component to replace placeholder

[Source: docs/sprint-artifacts/2-1-create-resume-page-route.md]

### Project Structure Notes

**File to Create:**
- `app/components/resume/ResumePreview.vue` - Main container component

**Dependencies:**
- `app/composables/useResumeData.ts` (Epic 1 - completed)
- `app/types/resume.ts` (Epic 1 - completed)
- `app/data/resume.en.ts` (Epic 1 - completed)
- Tailwind CSS (existing)
- @nuxt/fonts with Inter (existing)

**Future Integration:**
- Story 2.3 will create Header (with photo + contact), Summary, Experience components
- Story 2.4 will create Education and AdditionalInfo components
- Story 2.5 will create Download Button component

### Implementation Notes

**Component Structure:**
```vue
<script setup lang="ts">
const { resume } = useResumeData()
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-8">
    <!-- A4 Container -->
    <div class="bg-white shadow-lg max-w-[210mm] min-h-[297mm] w-full">
      <!-- Single-column vertical stack -->
      <div class="flex flex-col gap-0 p-6">
        <!-- Header with Photo + Contact (Story 2.3) -->
        
        <!-- Summary (Story 2.3) -->
        
        <!-- Experience (Story 2.3) -->
        
        <!-- Education (Story 2.4) -->
        
        <!-- Additional Information (Story 2.4) -->
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }
  
  .resume-container {
    width: 210mm;
    min-height: 297mm;
    box-shadow: none;
  }
  
  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
}
</style>
```

**Color Palette:**
- Primary Blue: `#2563eb` (text-blue-600, bg-blue-600)
- Background: `#ffffff` (bg-white)
- Text: `#1f2937` (text-gray-800)
- Secondary Text: `#6b7280` (text-gray-600)

**Typography Scale:**
- Name (h1): 2rem (text-3xl), font-bold
- Section Headers (h2): 1rem (text-base), font-semibold, uppercase, blue, with bottom border
- Body Text: 0.875rem (text-sm), font-normal

**Testing Checklist:**
- [ ] Component renders without errors
- [ ] Single-column layout displays correctly
- [ ] A4 dimensions maintained (210mm × 297mm)
- [ ] Margins are 24px (1.5rem)
- [ ] White background applied
- [ ] Blue color scheme visible
- [ ] Inter font loaded and applied
- [ ] Print preview shows correct styling
- [ ] `.no-print` class works in print mode

### References

- [Source: docs/architecture.md#Project-Structure]
- [Source: docs/architecture.md#Novel-Pattern-WYSIWYG-PDF-Export]
- [Source: docs/architecture.md#Consistency-Rules]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC2-Single-Column-Layout]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#Detailed-Design]
- [Source: docs/epics.md#Story-2.2-Create-Resume-Preview-Container-Component]
- [Source: docs/design-validation-epic-2.md] - UX validation report

## Dev Agent Record

### Context Reference

- docs/sprint-artifacts/2-2-create-resume-preview-container-component.context.xml

### Agent Model Used

<!-- Will be filled by dev agent -->

### Debug Log References

<!-- Will be filled by dev agent during implementation -->

### Completion Notes List

- Created `app/components/resume/ResumePreview.vue` with single-column layout
- Implemented A4 container (210mm × 297mm) with 24px margins
- Added all resume sections: Header, Summary, Experience, Education, Additional Info
- Applied blue (#2563eb) and white color scheme with Inter typography
- Added print styles with `.no-print` class and `break-inside: avoid`
- Integrated `useResumeData()` composable for reactive data
- Updated `pages/resume.vue` to use ResumePreview component

### File List

- app/components/resume/ResumePreview.vue (created)
- app/pages/resume.vue (modified)

---

**Change Log:**
- 2025-11-30: Story drafted by SM agent (ali)
- 2025-11-30: **REVISED** by SM agent (Bob) - Changed from two-column to single-column layout per UX validation and architect revision
- 2025-12-01: Implemented by Dev agent (Amelia) - All ACs completed, status: done
