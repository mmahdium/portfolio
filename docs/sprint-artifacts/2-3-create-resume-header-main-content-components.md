# Story 2.3: Create Resume Header & Main Content Components

Status: done

## Story

As a user,
I want to see my photo, name, contact info, summary, and work experience prominently,
so that recruiters see the most important information first.

## Acceptance Criteria

### ResumeHeader.vue
1. **AC1:** Given the header component renders, when it displays, then it shows profile photo on the left (if provided)
2. **AC2:** Full name in large bold text (2rem, font-bold) displayed on the right
3. **AC3:** Job title appears below name (1.25rem, text-gray-600)
4. **AC4:** Contact information (address, phone, email, website) displayed with proper formatting
5. **AC5:** All contact links are clickable (mailto:, tel:, https://)
6. **AC6:** Layout is horizontal: photo (left) + info block (right)

### ResumeSummary.vue
7. **AC7:** Given the summary component renders, when it displays, then it shows "SUMMARY" section header (blue, uppercase, with bottom border)
8. **AC8:** Professional summary paragraph is displayed
9. **AC9:** Line height is 1.6 for readability

### ResumeExperience.vue
10. **AC10:** Given the experience component renders, when it displays, then it shows "WORK EXPERIENCE" section header (blue, uppercase, with bottom border)
11. **AC11:** For each job: position title (bold, left), company name, date range (right-aligned: "Jan 2022 - Present"), bullet points for highlights (• character)
12. **AC12:** Jobs are sorted by date (most recent first)
13. **AC13:** "Present" is shown for current jobs (no endDate)

## Tasks / Subtasks

- [x] Create ResumeHeader component (AC: #1-#6)
  - [x] Create `app/components/resume/ResumeHeader.vue`
  - [x] Accept props: `basics` (ResumeBasics) - includes name, label, email, phone, location, url, image
  - [x] Display profile photo (if provided) with proper sizing (150px max width)
  - [x] Display name with `text-3xl font-bold` (2rem)
  - [x] Display job title with `text-xl text-gray-600` (1.25rem)
  - [x] Display address, phone, email, website in structured format
  - [x] Make email, phone, website clickable with proper href attributes
  - [x] Use horizontal layout: photo left, info right

- [x] Create ResumeSummary component (AC: #7-#9)
  - [x] Create `app/components/resume/ResumeSummary.vue`
  - [x] Accept props: `summary` (string)
  - [x] Add section header "SUMMARY" with blue, uppercase, bold styling
  - [x] Add blue bottom border to header: `border-b-2 border-blue-600`
  - [x] Display summary paragraph with `leading-relaxed` (line-height: 1.6)
  - [x] Use `text-sm text-gray-800`

- [x] Create ResumeExperience component (AC: #10-#13)
  - [x] Create `app/components/resume/ResumeExperience.vue`
  - [x] Accept props: `work` (WorkExperience[])
  - [x] Add section header "WORK EXPERIENCE" with blue, uppercase, bold styling
  - [x] Add blue bottom border to header: `border-b-2 border-blue-600`
  - [x] Sort jobs by startDate (most recent first)
  - [x] For each job, display:
    - Position title: `font-semibold text-gray-900` (left-aligned)
    - Company name: `text-gray-700`
    - Date range: Use `formatDate()` helper from composable (right-aligned)
    - Highlights: `<ul>` with bullet points (• character)
  - [x] Handle current jobs: Show "Present" if no endDate

- [x] Integrate components into ResumePreview (AC: #1-#13)
  - [x] Import all three components in `ResumePreview.vue`
  - [x] Pass data from `useResumeData()` composable
  - [x] Place in vertical order:
    - ResumeHeader at top
    - ResumeSummary below header
    - ResumeExperience below summary

- [x] Test components rendering
  - [x] Verify header displays photo (if available), name, title, contact info
  - [x] Check all contact links are clickable
  - [x] Verify summary section with blue uppercase header and bottom border
  - [x] Test experience section with multiple jobs
  - [x] Verify date formatting ("Jan 2022 - Present")
  - [x] Check job sorting (most recent first)
  - [x] Test with current job (no endDate)

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- File locations: `app/components/resume/ResumeHeader.vue`, `ResumeSummary.vue`, `ResumeExperience.vue`
- Data source: Props passed from `ResumePreview.vue` (which uses `useResumeData()`)
- Date formatting: Use `formatDate()` helper from composable

**From Tech Spec Epic 2 (REVISED):**
- AC5, AC6, AC7, AC11 map to this story
- Main content components for single-column layout
- Professional typography and spacing
- **CRITICAL:** Header now includes photo + contact info (not separate component)

### Learnings from Previous Story

**From Story 2.2 (Status: revised)**
- `ResumePreview.vue` container created with single-column layout
- Data access via `useResumeData()` composable established
- Tailwind styling patterns defined (text-sm, text-blue-600, etc.)
- **Integration Point**: Import these components into ResumePreview vertical stack

[Source: docs/sprint-artifacts/2-2-create-resume-preview-container-component.md]

### Project Structure Notes

**Files to Create:**
- `app/components/resume/ResumeHeader.vue`
- `app/components/resume/ResumeSummary.vue`
- `app/components/resume/ResumeExperience.vue`

**Files to Modify:**
- `app/components/resume/ResumePreview.vue` - Import and integrate new components

**Dependencies:**
- `app/composables/useResumeData.ts` - `formatDate()` helper
- `app/types/resume.ts` - `WorkExperience`, `ResumeBasics` interfaces
- `app/data/resume.en.ts` - Sample data

### Implementation Notes

**ResumeHeader.vue:**
```vue
<script setup lang="ts">
import type { ResumeBasics } from '~/types/resume'

interface Props {
  basics: ResumeBasics
}

defineProps<Props>()
</script>

<template>
  <div class="flex gap-6 mb-6">
    <!-- Profile Photo (if provided) -->
    <div v-if="basics.image" class="flex-shrink-0">
      <img 
        :src="basics.image" 
        :alt="basics.name"
        class="w-32 h-32 object-cover"
      />
    </div>
    
    <!-- Name + Contact Info -->
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-gray-900">{{ basics.name }}</h1>
      <p class="text-xl text-gray-600 mt-1">{{ basics.label }}</p>
      
      <div class="mt-3 space-y-1 text-sm text-gray-700">
        <p><strong>Address:</strong> {{ basics.location.address }}, {{ basics.location.city }}</p>
        <p><strong>Phone:</strong> <a :href="`tel:${basics.phone}`" class="hover:text-blue-600">{{ basics.phone }}</a></p>
        <p><strong>Email:</strong> <a :href="`mailto:${basics.email}`" class="hover:text-blue-600">{{ basics.email }}</a></p>
        <p><strong>Website:</strong> <a :href="basics.url" target="_blank" class="hover:text-blue-600">{{ basics.url }}</a></p>
      </div>
    </div>
  </div>
</template>
```

**ResumeSummary.vue:**
```vue
<script setup lang="ts">
interface Props {
  summary: string
}

defineProps<Props>()
</script>

<template>
  <div class="mb-6">
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
      Summary
    </h2>
    <p class="text-sm text-gray-800 leading-relaxed">{{ summary }}</p>
  </div>
</template>
```

**ResumeExperience.vue:**
```vue
<script setup lang="ts">
import type { WorkExperience } from '~/types/resume'

interface Props {
  work: WorkExperience[]
}

const props = defineProps<Props>()
const { formatDate } = useResumeData()

const sortedWork = computed(() => {
  return [...props.work].sort((a, b) => {
    const dateA = a.startDate || ''
    const dateB = b.startDate || ''
    return dateB.localeCompare(dateA) // Most recent first
  })
})

const formatDateRange = (start: string, end?: string) => {
  const startFormatted = formatDate(start)
  const endFormatted = end ? formatDate(end) : 'Present'
  return `${startFormatted} - ${endFormatted}`
}
</script>

<template>
  <div class="mb-6">
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-4">
      Work Experience
    </h2>
    
    <div v-for="job in sortedWork" :key="job.company + job.position" class="mb-4">
      <div class="flex justify-between items-baseline">
        <h3 class="font-semibold text-gray-900">{{ job.position }}, {{ job.company }}</h3>
        <span class="text-sm text-gray-600">{{ formatDateRange(job.startDate, job.endDate) }}</span>
      </div>
      
      <ul class="mt-2 text-sm text-gray-800 space-y-1">
        <li v-for="(highlight, idx) in job.highlights" :key="idx" class="flex">
          <span class="mr-2">•</span>
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
```

**Integration in ResumePreview.vue:**
```vue
<!-- Single-column vertical stack -->
<div class="flex flex-col gap-0 p-6">
  <ResumeHeader :basics="resume.basics" />
  <ResumeSummary :summary="resume.basics.summary" />
  <ResumeExperience :work="resume.work" />
  <!-- Education and AdditionalInfo will be added in Story 2.4 -->
</div>
```

**Testing Checklist:**
- [ ] Header displays photo (if available)
- [ ] Header displays name "Ali Arghyani" in large bold text
- [ ] Job title displays below name in gray
- [ ] Contact info (address, phone, email, website) displayed
- [ ] Email, phone, website links are clickable
- [ ] Summary section has "SUMMARY" header (blue, uppercase, with border)
- [ ] Summary paragraph has proper line height (1.6)
- [ ] Experience section has "WORK EXPERIENCE" header (blue, uppercase, with border)
- [ ] Jobs sorted by date (most recent first)
- [ ] Each job shows position, company, date range (right-aligned), highlights
- [ ] Date formatting works: "Jan 2022 - Present"
- [ ] Bullet points (•) display correctly
- [ ] Current job shows "Present" instead of end date

### References

- [Source: docs/architecture.md#Data-Architecture]
- [Source: docs/architecture.md#Consistency-Rules]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC5-Header-Section]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC6-Summary-Section]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC7-Experience-Section]
- [Source: docs/epics.md#Story-2.3-Create-Resume-Header-Main-Content-Components]
- [Source: docs/design-validation-epic-2.md] - UX validation report
- [Source: design templates/Blue and White Clean and Professional Resume.png] - Design reference

## Dev Agent Record

### Context Reference

- docs/sprint-artifacts/2-3-create-resume-header-main-content-components.context.xml

### Agent Model Used

<!-- Will be filled by dev agent -->

### Debug Log References

<!-- Will be filled by dev agent during implementation -->

### Completion Notes List

- Created `ResumeHeader.vue` with photo support, name, job title, and clickable contact links
- Created `ResumeSummary.vue` with blue uppercase header and leading-relaxed paragraph
- Created `ResumeExperience.vue` with sorted jobs, date formatting, and bullet highlights
- Added `image` property to `ResumeBasics` interface for profile photo support
- Integrated all components into `ResumePreview.vue`

### File List

- app/components/resume/ResumeHeader.vue (created)
- app/components/resume/ResumeSummary.vue (created)
- app/components/resume/ResumeExperience.vue (created)
- app/components/resume/ResumePreview.vue (modified)
- app/types/resume.ts (modified - added image property)

---

**Change Log:**
- 2025-11-30: Story drafted by SM agent (ali)
- 2025-11-30: **REVISED** by SM agent (Bob) - Merged contact info into Header component, updated section header styling (blue, uppercase, bottom border), aligned with design template
- 2025-12-01: Implemented by Dev agent (Amelia) - All ACs completed, status: done
