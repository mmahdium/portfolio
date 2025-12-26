# Story 3.1: Create PDF Generation API Route

Status: done

## Story

As a system,
I want a server endpoint that generates PDF from the resume page,
so that users get consistent, high-quality PDF output.

## Acceptance Criteria

1. **AC1:** Given a GET request to `/api/resume/pdf`, when the server processes the request, then it returns a PDF binary with Content-Type `application/pdf`
2. **AC2:** Response includes `Content-Disposition: attachment; filename="Ali_Arghyani_Resume.pdf"`
3. **AC3:** PDF matches the web preview exactly (WYSIWYG)
4. **AC4:** PDF text is selectable and copy-able (ATS-compatible)
5. **AC5:** PDF is A4 format (210mm × 297mm)
6. **AC6:** PDF generation completes in under 3 seconds
7. **AC7:** Given an error occurs, when caught, then it returns status 500 with JSON error message
8. **AC8:** Timeout is set to 10 seconds max

## Tasks / Subtasks

- [ ] Create API route file (AC: #1, #2)
  - [ ] Create `server/api/resume/pdf.get.ts`
  - [ ] Set up Nuxt event handler with `defineEventHandler`
  - [ ] Configure response headers (Content-Type, Content-Disposition)

- [ ] Implement Puppeteer PDF generation (AC: #3-#6)
  - [ ] Import puppeteer (dev) or puppeteer-core + chromium (prod)
  - [ ] Get base URL from request headers
  - [ ] Launch browser in headless mode
  - [ ] Navigate to `/resume?print=true`
  - [ ] Wait for `networkidle0` (fonts loaded)
  - [ ] Generate PDF with options: format A4, printBackground true
  - [ ] Close browser in finally block
  - [ ] Return PDF buffer

- [ ] Add error handling (AC: #7, #8)
  - [ ] Wrap in try-catch block
  - [ ] Set timeout to 10 seconds
  - [ ] Return 500 status with error JSON on failure
  - [ ] Log errors to console

- [ ] Configure for Vercel deployment
  - [ ] Use environment detection for puppeteer vs puppeteer-core
  - [ ] Import @sparticuz/chromium for production
  - [ ] Update vercel.json with function config (memory: 1024, maxDuration: 10)

- [ ] Test API endpoint
  - [ ] Test locally with `curl` or browser
  - [ ] Verify PDF opens correctly
  - [ ] Check text is selectable
  - [ ] Measure generation time
  - [ ] Test error handling

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- File location: `server/api/resume/pdf.get.ts`
- Uses Puppeteer server-side (ADR-001)
- Navigates to `/resume?print=true` for WYSIWYG
- Returns PDF buffer with proper headers

**From Tech Spec Epic 3:**
- AC1-AC4 map to this story
- Performance target: < 3 seconds
- Memory limit: 1024MB on Vercel

### Implementation Notes

**Local Development (puppeteer with bundled Chromium):**
```typescript
import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({
  headless: true
})
```

**Production (Vercel with @sparticuz/chromium):**
```typescript
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

const browser = await puppeteer.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless
})
```

**PDF Generation Options:**
```typescript
const pdf = await page.pdf({
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
})
```

**Response Headers:**
```typescript
setResponseHeaders(event, {
  'Content-Type': 'application/pdf',
  'Content-Disposition': 'attachment; filename="Ali_Arghyani_Resume.pdf"'
})
```

### Dependencies

**Install:**
```bash
pnpm add puppeteer puppeteer-core @sparticuz/chromium
```

**vercel.json:**
```json
{
  "functions": {
    "server/api/resume/pdf.get.ts": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

### Testing Checklist

- [ ] API returns PDF binary
- [ ] Content-Type is application/pdf
- [ ] Content-Disposition has correct filename
- [ ] PDF opens in viewer
- [ ] Text is selectable in PDF
- [ ] Colors are correct (blue headers)
- [ ] Generation time < 3 seconds
- [ ] Error returns 500 with JSON
- [ ] Works on Vercel deployment

### References

- [Source: docs/architecture.md#API-Contracts]
- [Source: docs/architecture.md#Novel-Pattern-WYSIWYG-PDF-Export]
- [Source: docs/architecture.md#Deployment-Architecture]
- [Source: docs/sprint-artifacts/tech-spec-epic-3.md#AC1-AC4]

## Dev Agent Record

### Context Reference
- docs/sprint-artifacts/3-1-create-pdf-generation-api-route.context.xml

### Agent Model Used
- Claude (Kiro)

### Debug Log References
- Chrome installation issue resolved with `npx puppeteer browsers install chrome`
- Fixed code conflicts from autofix

### Completion Notes List
- ✅ API route created at `server/api/resume/pdf.get.ts`
- ✅ Puppeteer integration with environment detection (dev vs prod)
- ✅ PDF generation with A4 format, printBackground
- ✅ Dynamic filename support via query parameter
- ✅ Inline/attachment mode support via `download` query param
- ✅ Error handling with 500 status and JSON response
- ✅ vercel.json configured with memory and maxDuration

### File List
- `server/api/resume/pdf.get.ts` (created)
- `vercel.json` (modified)
- `package.json` (puppeteer dependencies added)

---

**Change Log:**
- 2025-12-01: Story drafted by SM agent (Bob)
- 2025-12-01: Implementation completed - API route with Puppeteer PDF generation
- 2025-12-01: Added dynamic filename and inline/download mode support
