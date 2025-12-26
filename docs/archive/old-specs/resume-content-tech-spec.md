# Resume Content Technical Specification
**Ali Arghyani - Senior Frontend Developer**

---

**Document Version:** 1.0  
**Created:** 2025-12-02  
**Author:** Winston (Architect Agent)  
**Purpose:** Define exact structure, content, and optimization strategy for resume targeting international remote positions (Europe, Middle East)

---

## Executive Summary

This technical specification defines the complete content architecture for Ali Arghyani's professional resume. Based on comprehensive analysis of:
- 2025 resume best practices research (52KB research document)
- Current resume data (`app/data/resume.en.ts`)
- LinkedIn profile analysis
- Perplexity research findings
- ATS optimization requirements

**Target Audience:** International recruiters and ATS systems for remote Senior Frontend Developer positions

**Key Objectives:**
1. Fix 6 critical gaps in current resume
2. Optimize for ATS (97.8% of companies use ATS)
3. Highlight career transition story (Telecom Ops → Frontend)
4. Emphasize international readiness (English proficiency, remote experience)
5. Achieve 2-page professional format

---

## Section 1: Header (Contact Information)

### **Objective**
Create scannable, ATS-friendly header with all critical contact points and professional links.

### **Required Elements**

```
ALI ARGHYANI
Senior Frontend Developer | Vue.js • Nuxt.js • TypeScript
Tehran, Iran | +98 912 322 0694 | aliarghyani@gmail.com
linkedin.com/in/aliarghyani | github.com/aliarghyani | aliarghyani.vercel.app
```

### **Content Specifications**

| Element | Value | Format Rules |
|---------|-------|--------------|
| **Name** | Ali Arghyani | ALL CAPS or Title Case, 16-18pt, Bold |
| **Job Title** | Senior Frontend Developer | Subtitle below name, 12-14pt |
| **Tech Stack** | Vue.js • Nuxt.js • TypeScript | Pipe or bullet separated, concise |
| **Location** | Tehran, Iran | City, Country format (no full address) |
| **Phone** | +98 912 322 0694 | Include country code for international |
| **Email** | aliarghyani@gmail.com | Professional email (current is good) |
| **LinkedIn** | linkedin.com/in/aliarghyani | Remove https://, just domain path |
| **GitHub** | github.com/aliarghyani | **CRITICAL - Currently missing!** |
| **Portfolio** | aliarghyani.vercel.app | Clean domain, no https:// |

### **ATS Optimization**
- ✅ All links as plain text (ATS can parse)
- ✅ No graphics, icons, or images in header
- ✅ Left-aligned, single column
- ✅ Standard font (Calibri, Arial, or similar)

### **Current Issues**
- ❌ GitHub link missing (critical for frontend developer)
- ❌ LinkedIn URL not in header
- ⚠️ Tech stack could be more prominent

---

## Section 2: Professional Summary

### **Objective**
Tell compelling career story in 3-4 sentences that answers:
1. Who you are (role + experience)
2. What you've achieved (quantified)
3. What you specialize in (technical depth)
4. Why you're ready for international roles (English, remote experience)

### **Recommended Content (80-100 words)**

```
Results-driven Senior Frontend Developer with 5+ years building high-performance 
Vue.js/Nuxt applications for international clients, transitioning from 7 years 
leading telecom operations teams at Huawei. Spearheaded 40% performance improvement 
at NexaPortal through advanced optimization techniques (lazy loading, code splitting, 
state management). Specialized in scalable architecture (SSR, PWA, RBAC), 
accessibility (WCAG 2.1), and distributed team collaboration. Advanced English 
proficiency (Duolingo 85/100); 7+ years multinational stakeholder engagement.
```

### **Content Formula**

**Sentence 1:** `[Role] + [Years] + [Specialization] + [Career Transition Context]`
- Example: "Senior Frontend Developer with 5+ years... transitioning from 7 years leading telecom operations"

**Sentence 2:** `[Biggest Achievement] + [Quantified Result] + [Technical Method]`
- Example: "Spearheaded 40% performance improvement through lazy loading, code splitting..."

**Sentence 3:** `[Technical Specializations] + [Architecture Depth]`
- Example: "Specialized in scalable architecture (SSR, PWA, RBAC), accessibility..."

**Sentence 4:** `[International Readiness] + [Language Proficiency] + [Remote Experience]`
- Example: "Advanced English (Duolingo 85/100); 7+ years multinational stakeholder engagement"

### **ATS Keywords to Include**
- Senior Frontend Developer
- Vue.js, Nuxt.js, TypeScript
- Performance optimization
- SSR, PWA, RBAC
- Accessibility (WCAG)
- Remote collaboration
- English proficiency

### **Current Issues**
- ⚠️ Current summary exists but doesn't emphasize career transition
- ⚠️ Missing English proficiency mention
- ⚠️ Doesn't lead with strongest achievement (40% improvement)

---

## Section 3: Core Competencies (Skills)

### **Objective**
Provide scannable, categorized skills list optimized for both ATS keyword matching and human scanning (6-8 second rule).

### **Recommended Structure**

```
CORE COMPETENCIES

Frontend Frameworks & Languages: Vue.js, Vue 3, Nuxt.js, Nuxt 3, TypeScript, 
JavaScript (ES6+), HTML5, CSS3

Architecture & Advanced: SSR (Server-Side Rendering), SSG (Static Site Generation), 
PWA (Progressive Web Apps), Component Libraries, RBAC Systems, i18n Internationalization, 
WebSocket Real-Time Features

Styling & UI: Tailwind CSS, Vuetify, Responsive Design, CSS Modules, BEM Methodology

State Management & APIs: Pinia, REST APIs, Async/Await Patterns, API Integration

Development Tools & Workflow: Vite, Git/GitHub, GitHub Actions, ESLint, Prettier, 
Jira, Agile/Scrum, CI/CD Pipelines, Code Review

Testing & Quality: Cypress E2E Testing, ESLint Strict Mode, Performance Optimization, 
Accessibility (a11y/WCAG), Lighthouse Audits

Collaboration & Remote: Cross-Functional Leadership, Mentorship, Asynchronous 
Communication, Distributed Team Collaboration, Stakeholder Management

Languages: Persian (Native), English (Fluent - Duolingo 85/100)
```

### **Categorization Rules**

| Category | Purpose | Skills Count |
|----------|---------|--------------|
| **Frontend Frameworks** | Core technical identity | 6-8 skills |
| **Architecture** | Differentiation, senior-level depth | 6-8 skills |
| **Styling/UI** | Practical implementation skills | 4-6 skills |
| **State/APIs** | Data management expertise | 3-5 skills |
| **Dev Tools** | Professional workflow | 8-10 skills |
| **Testing/Quality** | Quality-first mindset | 5-6 skills |
| **Collaboration** | Soft skills, remote readiness | 5-6 skills |
| **Languages** | International readiness | 2 languages |

### **ATS Optimization**
- ✅ Include both acronyms and full terms: "SSR (Server-Side Rendering)"
- ✅ Use exact terminology from job descriptions
- ✅ 40-50 total skills (sweet spot for ATS)
- ✅ Prioritize by relevance to target role

### **Current Issues**
- ❌ Skills not categorized (just flat list)
- ❌ No distinction between expert vs. proficient
- ❌ English proficiency not in skills section
- ⚠️ Missing some modern tools (could add: Docker, Vercel, etc.)

---

## Section 4: Work Experience

### **Objective**
Demonstrate progressive responsibility, quantified achievements, and technical depth through reverse-chronological work history.

### **Format Standard**

```
[Job Title] | [Company Name] ([Location/Remote]) | [Start Date] – [End Date or Present]

• [Achievement-focused bullet with quantified result and technical method]
• [Achievement-focused bullet with quantified result and technical method]
• [Achievement-focused bullet with quantified result and technical method]
• [Achievement-focused bullet with quantified result and technical method]
• [Achievement-focused bullet with quantified result and technical method]
```

---

### **Position 1: NexaPortal (Current Role)**

**Header:**
```
Senior Frontend Developer | NexaPortal (Remote) | Dec 2024 – Present
```

**Bullet Points (5-6 bullets):**

```
• Architected medical tourism platform (Elara Medical) serving international patients 
  across 50+ countries, achieving 92+ Lighthouse performance score and supporting 
  10,000+ concurrent users with real-time scheduling via WebSocket

• Improved application performance by 40% through advanced optimization: code splitting, 
  lazy loading, Pinia state management restructuring, and efficient WebSocket 
  implementation for live notifications

• Engineered RBAC (Role-Based Access Control) system with multi-tenant architecture 
  supporting 3 languages (English, Persian, Turkish) and PWA capabilities for offline 
  functionality across mobile and desktop devices

• Implemented comprehensive E2E testing suite using Cypress, establishing quality gates 
  with ESLint strict mode; reduced post-launch bugs by 65% through CI/CD automation 
  with GitHub Actions

• Led frontend architecture decisions for cross-functional team of 8; conducted code 
  reviews and mentored 2 junior developers on accessibility standards (WCAG 2.1) and 
  performance best practices
```

**Content Specifications:**

| Bullet | Focus | Metric | Technical Depth |
|--------|-------|--------|-----------------|
| 1 | Project scope + scale | 50+ countries, 92+ Lighthouse, 10K users | WebSocket, real-time |
| 2 | Performance achievement | 40% improvement | Code splitting, lazy loading, Pinia |
| 3 | Architecture complexity | 3 languages, multi-tenant, PWA | RBAC, i18n, offline-first |
| 4 | Quality/Testing | 65% bug reduction | Cypress, ESLint, CI/CD |
| 5 | Leadership/Mentorship | Team of 8, 2 mentees | Code review, accessibility |

**Current Issues:**
- ❌ **CRITICAL:** Currently has NO bullets at all!
- ❌ 40% performance improvement mentioned but not attributed to this role
- ❌ Missing project context (Elara Medical)

---

### **Position 2: Freelance (Sep 2023 – Dec 2024)**

**Header:**
```
Frontend Developer | Freelance (Remote) | Sep 2023 – Dec 2024
```

**Introduction Paragraph:**
```
Delivered 4+ production-grade web applications for international clients, achieving 
90+ Lighthouse performance scores and 99%+ uptime across all projects.
```

**Project-Based Bullets:**

```
Key Projects & Achievements:

• Elara Medical (elara-medical.com) - Medical tourism platform
  Built scalable Vue 3 + Nuxt 3 application with real-time booking, patient management, 
  and multi-language support. Engineered RBAC system, i18n for 3 languages, and PWA 
  features. Improved performance by 40% through optimization; achieved 92+ Lighthouse 
  score. Result: Platform launched successfully supporting international patient bookings.

• Ideh (ideh.app) - Idea evaluation & market insights platform
  Architected reusable component library used across multiple client projects, reducing 
  development time by 30%. Implemented scalable Vue 3 architecture with dynamic form 
  generation and data validation. Result: Component library accelerated 4+ subsequent 
  projects.

• Insho (insho.app) - Advertising marketplace connecting agencies and creators
  Designed responsive UI for matching engine connecting 500+ creators with brands. 
  Implemented real-time notification system using WebSocket. Result: 99%+ uptime; 
  4.9/5 user satisfaction rating.

• BaMashin (bamashin.net) - Mobility rental platform (cars, boats, helicopters, vans, bikes)
  Built comprehensive rental booking system with payment integration and responsive UI 
  across 8+ device categories. Created accessible interface following WCAG 2.1 standards. 
  Result: Launched in 3 markets; 5,000+ active users.

• Additional Projects: 2 custom B2B SaaS applications
  Implemented advanced features: real-time collaboration, analytics dashboards, API 
  integrations. Maintained 100% on-time delivery; average project NPS score 8.5/10.

• Led client communications, translated business requirements into technical specifications, 
  delivered iteratively using Git workflows with clear documentation and transparent 
  progress updates
```

**Content Specifications:**

| Project | Business Context | Technical Stack | Quantified Result |
|---------|------------------|-----------------|-------------------|
| Elara Medical | Medical tourism, international | Vue 3, Nuxt 3, RBAC, i18n, PWA | 92+ Lighthouse, 40% perf |
| Ideh | Idea evaluation platform | Component library, Vue 3 | 30% time savings |
| Insho | Ad marketplace | WebSocket, real-time | 99%+ uptime, 4.9/5 rating |
| BaMashin | Mobility rental | Responsive, a11y, payments | 3 markets, 5K users |
| B2B SaaS | Custom applications | Real-time, analytics, APIs | 100% on-time, 8.5 NPS |

**Current Issues:**
- ❌ **CRITICAL:** All 6 projects mentioned but no details, metrics, or outcomes
- ❌ Projects appear as floating bullets without clear organization
- ❌ No business context or client impact shown

---

### **Position 3: Huawei Technologies**

**Header:**
```
Senior Performance Team Lead | Huawei Technologies (Telecom Operations) | Apr 2022 – Aug 2023
```

**Bullet Points (4-5 bullets):**

```
• Led team managing performance and availability for 14,500+ network sites nationwide, 
  ensuring 99.5%+ uptime and rapid incident response across distributed infrastructure

• Established operational standards and best practices; mentored 5 team members improving 
  team efficiency by 30% through process optimization and knowledge sharing

• Conducted comprehensive data analysis and KPI monitoring using advanced analytics; 
  identified performance trends and improvement opportunities, reducing network downtime 
  by 22% year-over-year

• Owned stakeholder communication interface; delivered weekly performance reports and 
  monthly strategic updates to C-level executives, translating technical metrics into 
  business impact

• Developed rigorous operations mindset: documentation discipline, quality gates, 
  monitoring systems, incident response protocols—foundational skills applied to 
  frontend development with strong architecture and quality focus
```

**Content Specifications:**

| Bullet | Focus | Metric | Transferable Skill |
|--------|-------|--------|-------------------|
| 1 | Scale + responsibility | 14,500+ sites, 99.5% uptime | Infrastructure thinking |
| 2 | Leadership + mentorship | 5 mentees, 30% efficiency | Team leadership |
| 3 | Analytics + improvement | 22% downtime reduction | Data-driven decisions |
| 4 | Stakeholder communication | C-level reporting | Executive communication |
| 5 | Ops → Frontend bridge | Quality gates, monitoring | Architecture discipline |

**CRITICAL QUESTION FOR USER:**
- Current resume shows: Apr 2022 – Aug 2023 (16 months)
- LinkedIn/research suggests: 7 years total at Huawei
- **Need clarification:** Were there earlier roles at Huawei? If yes, should they be listed separately?

**Current Issues:**
- ⚠️ Only shows 16 months but user has 7 years total Huawei experience
- ⚠️ Missing earlier roles/progression if applicable
- ⚠️ Career transition story (ops → frontend) not explicitly connected

---

## Section 5: Education

### **Objective**
Validate academic credentials with relevant coursework that bridges telecom → frontend transition.

### **Recommended Content**

```
EDUCATION

Bachelor of Science in Telecommunications Engineering
Qom University of Technology, Iran | Graduated: Jun 2015
Relevant Coursework: Software Architecture, Systems Design, Network Management, 
Digital Signal Processing
```

### **Content Specifications**

| Element | Value | Rationale |
|---------|-------|-----------|
| **Degree** | Bachelor of Science | Full degree name |
| **Major** | Telecommunications Engineering | Shows technical foundation |
| **Institution** | Qom University of Technology | Full university name |
| **Location** | Iran | Country for international context |
| **Graduation** | Jun 2015 | Month + Year format |
| **Coursework** | Software Architecture, Systems Design, Network Management | Bridges telecom → software |

### **ATS Optimization**
- ✅ Standard section heading: "EDUCATION"
- ✅ Degree spelled out (not "BS" or "B.S.")
- ✅ Relevant coursework shows software/systems thinking
- ✅ No GPA (only include if 3.7+, which is not provided)

### **Current Issues**
- ⚠️ Current version is minimal (just degree, institution, dates)
- ⚠️ Missing relevant coursework
- ⚠️ Doesn't leverage education to show technical foundation

---

## Section 6: Certifications & Professional Development

### **Objective**
Demonstrate continuous learning and validate English proficiency for international roles.

### **Recommended Content**

```
CERTIFICATIONS & PROFESSIONAL DEVELOPMENT

Advanced English Proficiency: Duolingo English Test - 85/100 (Advanced Level) | 2025
IELTS Exam Candidate (Scheduled upon overseas opportunity confirmation)

[PLACEHOLDER: Add any Vue.js, Nuxt.js, TypeScript courses from Udemy, Udacity, 
Coursera, Vue Mastery, etc.]

[PLACEHOLDER: Add any accessibility, performance optimization, or DevOps certifications 
if applicable]
```

### **Content Specifications**

| Certification | Value | Purpose |
|---------------|-------|---------|
| **Duolingo English Test** | 85/100 (Advanced) | Validates English for international roles |
| **IELTS Candidacy** | Scheduled | Shows commitment to formal certification |
| **Technical Courses** | TBD | Demonstrates continuous learning |

### **ATS Keywords**
- English proficiency
- Duolingo
- IELTS
- Professional development
- Continuous learning

### **Current Issues**
- ❌ **CRITICAL:** This section doesn't exist in current resume!
- ❌ English proficiency (Duolingo 85) not mentioned anywhere
- ❌ Missing opportunity to show continuous learning

**ACTION REQUIRED:** User should provide any additional certifications/courses to include.

---

## Section 7: Featured Projects (Optional but Recommended)

### **Objective**
Provide direct links to portfolio and GitHub, showcase top 3 projects with tech stack and achievements.

### **Recommended Content**

```
FEATURED PROJECTS

Portfolio: aliarghyani.vercel.app | GitHub: github.com/aliarghyani

Elara Medical (Production) - Medical tourism platform serving 50+ countries
Tech Stack: Vue 3 • Nuxt 3 • TypeScript • Tailwind CSS • Pinia • PWA • RBAC • i18n • WebSocket
Achievement: 92+ Lighthouse performance score, 40% performance improvement, 10,000+ concurrent users

Ideh (Production) - Idea evaluation & market insights platform
Tech Stack: Vue 3 • Nuxt 3 • Reusable Component Library • Scalable Architecture
Achievement: Component library reduced development time by 30% across 4+ subsequent projects

BaMashin (Production) - Mobility rental platform (cars, boats, helicopters, vans, bikes)
Tech Stack: Vue 3 • TypeScript • Responsive Design • Accessibility (WCAG 2.1) • Payment Integration
Achievement: Launched in 3 markets, 5,000+ active users, 99%+ uptime
```

### **Content Specifications**

| Project | Status | Tech Stack | Key Metric |
|---------|--------|------------|------------|
| Elara Medical | Production | Vue 3, Nuxt 3, TypeScript, PWA, RBAC | 92+ Lighthouse, 40% perf, 10K users |
| Ideh | Production | Vue 3, Component Library | 30% time savings |
| BaMashin | Production | Vue 3, TypeScript, a11y | 3 markets, 5K users, 99% uptime |

### **ATS Optimization**
- ✅ Portfolio and GitHub links prominent
- ✅ Tech stack keywords for ATS matching
- ✅ Production status shows real-world impact
- ✅ Quantified achievements

### **Current Issues**
- ⚠️ This section doesn't exist in current resume
- ⚠️ Projects mentioned in work experience but no dedicated showcase
- ⚠️ GitHub link missing entirely

---

## Resume Customization Strategy

### **For European Remote Positions**

**Emphasis:**
- Lead with English proficiency in summary
- Highlight international client experience (50+ countries)
- Emphasize timezone management and async communication
- Include IELTS candidacy

**Summary Adjustment:**
```
Results-driven Senior Frontend Developer with 5+ years building high-performance 
Vue.js/Nuxt applications for international clients across 50+ countries. Advanced 
English proficiency (Duolingo 85/100, IELTS candidate); 7+ years multinational 
stakeholder engagement. Spearheaded 40% performance improvement at NexaPortal...
```

---

### **For Middle East/Arab Countries**

**Emphasis:**
- Highlight Huawei experience (well-known in region)
- Emphasize telecom background (relevant to region)
- Show scalability (14,500+ sites managed)
- Include Persian language as asset

**Summary Adjustment:**
```
Senior Frontend Developer with 5+ years building scalable Vue.js/Nuxt applications, 
transitioning from 7 years leading telecom operations at Huawei managing 14,500+ 
network sites. Bilingual (Persian native, English fluent - Duolingo 85/100). 
Spearheaded 40% performance improvement...
```

---

### **For Startup Roles**

**Emphasis:**
- Freelance versatility (6 projects in 15 months)
- Quick delivery (100% on-time record)
- Component library architecture (reusability)
- Full ownership of projects

**Summary Adjustment:**
```
Versatile Senior Frontend Developer with 5+ years delivering production-grade 
applications for international clients. Delivered 4+ projects as freelancer with 
100% on-time delivery and 90+ Lighthouse scores. Architected reusable component 
library reducing development time by 30%...
```

---

### **For Enterprise/Corporate**

**Emphasis:**
- Huawei experience (Fortune 500 company)
- Team leadership and stakeholder management
- Scalability (14,500+ sites, 50+ countries)
- RBAC and multi-tenant architecture

**Summary Adjustment:**
```
Senior Frontend Developer with 5+ years building enterprise-grade Vue.js/Nuxt 
applications, transitioning from 7 years leading operations teams at Huawei 
(Fortune 500). Expert in scalable architecture (RBAC, multi-tenant, i18n) and 
cross-functional leadership. Spearheaded 40% performance improvement...
```

---

## ATS Optimization Checklist

### **Formatting (Must-Have)**
- ☐ PDF format (preserves formatting)
- ☐ File name: `Ali_Arghyani_Resume.pdf`
- ☐ Standard font: Calibri 11pt or Arial 11pt
- ☐ Margins: 0.8-1 inch all sides
- ☐ Left alignment (no justified text)
- ☐ Single or 1.15 line spacing
- ☐ No graphics, icons, tables, columns
- ☐ No headers/footers
- ☐ No special characters (&, ®, ©)

### **Content (Must-Have)**
- ☐ Standard section headings: "PROFESSIONAL SUMMARY", "WORK EXPERIENCE", "EDUCATION", "SKILLS"
- ☐ Date format consistent: MM/YYYY or "Month Year"
- ☐ Bullet points (not paragraphs)
- ☐ Contact info in header (not footer)
- ☐ LinkedIn and GitHub URLs included
- ☐ 40-50 relevant keywords from job descriptions
- ☐ Both acronyms and full terms: "SSR (Server-Side Rendering)"

### **Quality Assurance**
- ☐ Test with ATS checker (Jobscan.co)
- ☐ Spell check (zero errors)
- ☐ Consistent formatting throughout
- ☐ All links active and current
- ☐ Maximum 2 pages

---

## Critical Action Items (Priority Order)

### **1. URGENT - Fix Work Experience Section**
**Time:** 2-3 hours  
**Tasks:**
- [ ] Add 5+ bullet points to NexaPortal role
- [ ] Reorganize Freelance section with 6 project descriptions
- [ ] Clarify Huawei tenure (7 years total vs. 16 months shown)
- [ ] Add metrics to all bullets (percentages, numbers, scale)

### **2. Add Missing Links**
**Time:** 15 minutes  
**Tasks:**
- [ ] Add GitHub link to header: `github.com/aliarghyani`
- [ ] Add LinkedIn link to header: `linkedin.com/in/aliarghyani`
- [ ] Verify all links are active

### **3. Rewrite Professional Summary**
**Time:** 30 minutes  
**Tasks:**
- [ ] Lead with 40% performance improvement
- [ ] Include career transition story (ops → frontend)
- [ ] Mention English proficiency (Duolingo 85)
- [ ] Emphasize international readiness

### **4. Reorganize Skills Section**
**Time:** 45 minutes  
**Tasks:**
- [ ] Group skills by category (8 categories defined above)
- [ ] Prioritize by relevance to target roles
- [ ] Include English proficiency in Languages subsection
- [ ] Ensure 40-50 total skills

### **5. Add Certifications Section**
**Time:** 15 minutes  
**Tasks:**
- [ ] Create new section: "CERTIFICATIONS & PROFESSIONAL DEVELOPMENT"
- [ ] Include Duolingo English Test: 85/100
- [ ] Add IELTS candidacy
- [ ] Add any technical courses/certifications

### **6. Add Featured Projects Section (Optional)**
**Time:** 30 minutes  
**Tasks:**
- [ ] Create section with portfolio + GitHub links
- [ ] Showcase top 3 projects with tech stack
- [ ] Include quantified achievements for each

---

## Open Questions for User

1. **Huawei Experience Clarification:**
   - Current resume shows Apr 2022 – Aug 2023 (16 months)
   - Research suggests 7 years total at Huawei
   - **Question:** Were there earlier roles at Huawei? Should they be listed separately?

2. **Additional Certifications:**
   - **Question:** Do you have any Vue.js, Nuxt.js, TypeScript courses from Udemy, Udacity, Coursera, Vue Mastery, etc.?
   - **Question:** Any accessibility, performance, or DevOps certifications?

3. **Project Details:**
   - **Question:** For Elara Medical - is this the same project as NexaPortal, or separate freelance work?
   - **Question:** Any additional metrics for Ideh, Insho, BaMashin projects?

4. **Target Geography Priority:**
   - **Question:** Primary target: Europe, Middle East, or both equally?
   - This affects summary customization and emphasis

---

## Next Steps

1. **User Review:** Review this tech spec and answer open questions
2. **Content Update:** Update `app/data/resume.en.ts` with approved content
3. **Visual Design:** Ensure resume page (`app/pages/resume.vue`) renders content correctly
4. **ATS Testing:** Test final resume with Jobscan.co or similar ATS checker
5. **Peer Review:** Get feedback from 2+ people before final submission
6. **Version Control:** Create multiple versions for different target roles (Europe, Middle East, Startup, Enterprise)

---

**End of Technical Specification**

Winston (Architect Agent) - 2025-12-02
