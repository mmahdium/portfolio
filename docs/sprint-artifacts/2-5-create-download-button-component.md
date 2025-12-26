# Story 2.5: Create Download Button Component

Status: done

## Story

As a user,
I want a prominent download button,
so that I can easily download my resume as PDF.

## Acceptance Criteria

1. **AC1:** Given I'm on the resume page, when I see the download button, then it's a floating action button (FAB) in bottom-right corner
2. **AC2:** It has download icon (i-heroicons-arrow-down-tray)
3. **AC3:** It has "Download PDF" text (or just icon on mobile)
4. **AC4:** It has blue background color
5. **AC5:** It has fixed position (doesn't scroll)
6. **AC6:** It has shadow for elevation
7. **AC7:** It has the `.no-print` class (hidden in PDF)
8. **AC8:** Given I'm on the page with `?print=true`, when the page renders, then the button is not visible

## Tasks / Subtasks

- [x] Create ResumeDownloadButton component (AC: #1-#7)
  - [x] Create `app/components/resume/ResumeDownloadButton.vue`
  - [x] Use Nuxt UI `UButton` component
  - [x] Set icon to `i-heroicons-arrow-down-tray`
  - [x] Add "Download PDF" text
  - [x] Apply blue background: `color="primary"` or `bg-blue-600`
  - [x] Set fixed position: `fixed bottom-6 right-6`
  - [x] Add shadow: `shadow-lg`
  - [x] Add `.no-print` class

- [x] Implement print mode detection (AC: #8)
  - [x] Accept prop: `isPrintMode` (boolean)
  - [x] Use `v-if="!isPrintMode"` to conditionally render
  - [x] Ensure button hidden when `?print=true`

- [x] Add placeholder click handler
  - [x] Add `@click` event handler
  - [x] For now, log to console: "Download PDF clicked"
  - [x] Note: Actual PDF generation will be implemented in Epic 3

- [x] Integrate into resume page (AC: #1-#8)
  - [x] Import component in `pages/resume.vue`
  - [x] Pass `isPrintMode` prop from route query
  - [x] Place button outside ResumePreview container
  - [x] Verify button appears in bottom-right corner

- [x] Test button functionality
  - [x] Verify button appears in bottom-right corner
  - [x] Check fixed position (doesn't scroll with page)
  - [x] Verify blue background and shadow
  - [x] Test icon displays correctly
  - [x] Check "Download PDF" text visibility
  - [x] Test click handler (console log)
  - [x] Verify button hidden with `?print=true`
  - [x] Test print preview (Ctrl+P) - button should be hidden

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- File location: `app/components/resume/ResumeDownloadButton.vue`
- Component: Use Nuxt UI `UButton` component
- Icon: Heroicons arrow-down-tray
- Position: Fixed bottom-right (FAB pattern)

**From Tech Spec Epic 2:**
- AC12 maps to this story
- Button hidden in print mode for PDF generation
- Placeholder for Epic 3 integration

### Learnings from Previous Story

**From Story 2.4 (Status: drafted)**
- Sidebar components created (Contact, Skills, Education, Languages)
- All resume sections now complete
- ResumePreview fully populated with content
- **Integration Point**: Add download button to resume page, outside ResumePreview container

**From Story 2.1 (Status: drafted)**
- Print mode detection implemented via `useRoute().query.print`
- `isPrintMode` computed property available in `pages/resume.vue`
- **Integration Point**: Pass `isPrintMode` to download button component

[Source: docs/sprint-artifacts/2-4-create-resume-sidebar-components.md]
[Source: docs/sprint-artifacts/2-1-create-resume-page-route.md]

### Project Structure Notes

**File to Create:**
- `app/components/resume/ResumeDownloadButton.vue`

**Files to Modify:**
- `app/pages/resume.vue` - Import and place download button

**Dependencies:**
- `@nuxt/ui` - `UButton` component
- Heroicons icon set (via Nuxt UI)

**Future Integration:**
- Epic 3 Story 3.2 will create `useResumePdf()` composable
- Epic 3 Story 3.3 will connect this button to PDF generation

### Implementation Notes

**ResumeDownloadButton.vue:**
```vue
<script setup lang="ts">
interface Props {
  isPrintMode?: boolean
}

defineProps<Props>()

const handleDownload = () => {
  // Placeholder - will be replaced in Epic 3 Story 3.3
  console.log('Download PDF clicked')
  // Future: const { downloadPdf } = useResumePdf()
  // Future: await downloadPdf()
}
</script>

<template>
  <UButton
    v-if="!isPrintMode"
    icon="i-heroicons-arrow-down-tray"
    size="lg"
    color="primary"
    class="fixed bottom-6 right-6 shadow-lg no-print z-50"
    @click="handleDownload"
  >
    <span class="hidden sm:inline">Download PDF</span>
  </UButton>
</template>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
```

**Integration in pages/resume.vue:**
```vue
<script setup lang="ts">
definePageMeta({
  layout: false
})

const route = useRoute()
const isPrintMode = computed(() => route.query.print === 'true')

useHead({
  title: 'Resume - Ali Arghyani',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <ResumePreview />
    <ResumeDownloadButton :is-print-mode="isPrintMode" />
  </div>
</template>
```

**Responsive Behavior:**
- Desktop: Shows "Download PDF" text with icon
- Mobile: Shows icon only (text hidden with `hidden sm:inline`)

**Z-Index:**
- Set `z-50` to ensure button appears above all content

**Testing Checklist:**
- [ ] Button appears in bottom-right corner
- [ ] Button has fixed position (stays in place when scrolling)
- [ ] Blue background color applied
- [ ] Shadow visible for elevation
- [ ] Download icon displays correctly
- [ ] "Download PDF" text visible on desktop
- [ ] Text hidden on mobile (< 640px)
- [ ] Click handler logs to console
- [ ] Button hidden with `?print=true` parameter
- [ ] Button hidden in print preview (Ctrl+P)
- [ ] Button has proper z-index (appears above content)

### References

- [Source: docs/architecture.md#Implementation-Patterns]
- [Source: docs/architecture.md#Novel-Pattern-WYSIWYG-PDF-Export]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC12-Download-Button]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC13-Print-Mode]
- [Source: docs/epics.md#Story-2.5-Create-Download-Button-Component]

## Dev Agent Record

### Context Reference

- docs/sprint-artifacts/2-5-create-download-button-component.context.xml

### Agent Model Used

<!-- Will be filled by dev agent -->

### Debug Log References

<!-- Will be filled by dev agent during implementation -->

### Completion Notes List

- Created `ResumeDownloadButton.vue` with UButton, fixed position FAB
- Implemented print mode detection via `isPrintMode` prop
- Added placeholder click handler (console.log for Epic 3 integration)
- Integrated into `pages/resume.vue` with proper prop passing
- Responsive: shows text on desktop, icon-only on mobile

### File List

- app/components/resume/ResumeDownloadButton.vue (created)
- app/pages/resume.vue (modified)

---

**Change Log:**
- 2025-11-30: Story drafted by SM agent (ali)
- 2025-12-01: Implemented by Dev agent (Amelia) - All ACs completed, status: done
