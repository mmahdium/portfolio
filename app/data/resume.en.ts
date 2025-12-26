/**
 * Resume Data - Ali Arghyani
 * Based on RESUME-STANDARDS.md (docs/RESUME-STANDARDS.md)
 * Optimized for ATS and 2025 best practices
 * Version: 2.0 - 2-Page Resume (International Remote Positions)
 *
 * ⚠️ BEFORE EDITING: Give docs/RESUME-UPDATE-RULES.md to any AI agent
 *
 * Quick command for AI:
 * "Read docs/RESUME-UPDATE-RULES.md and update my resume"
 */

import type { Resume } from "~/types/resume";

export const resumeData: Resume = {
  basics: {
    name: "Mohammad Mahdi Mohammadi",
    label: "Developer & System Administrator | Linux • Docker • Nginx • Kubernetes",
    // image: '/img/AliProfile.webp',
    email: "me@mahdium.ir",
    phone: "+98 990 787 5312",
    url: "https://mahdium.ir",
    location: {
      city: "Kerman",
      country: "Iran",
    },
    profiles: [
      {
        network: "Mastodon",
        url: "https://mas.to/@mahdium",
        icon: "i-mdi-mastodon",
      },
      {
        network: "GitHub",
        url: "https://github.com/mmahdium",
        icon: "i-mdi-github",
      },
      {
        network: "Portfolio",
        url: "https://mahdium.ir",
        icon: "i-mdi-web",
      },
    ],
    summary:
      "My background is primarily in backend development and system administration, where I've always enjoyed working with infrastructure, servers, and the logic that powers applications. More recently, I've begun learning Nuxt and Vue, expanding into frontend development to round out my skill set. While my main focus remains backend and system administration, I now also build user interfaces with Nuxt 4 and Vue 3, enabling me to deliver complete, end‑to‑end solutions.",
  },

  work: [
    {
      company: "Group7Sky",
      position: "System Administrator & DevOps manager",
      location: "Kerman, Iran",
      startDate: "2024-6",
      highlights: [
        "Managed and maintained Linux-based servers, ensuring stable deployment environments, uptime monitoring, and routine performance optimization for production systems",
        "Implemented CI/CD workflows and automated deployment pipelines using GitHub Actions and Docker, reducing manual deployment overhead and improving reliability",
        "Configured and secured web services, reverse proxies, and SSL certificates, improving system stability and user trust across multiple client-facing applications",
        "Developed internal tools and utilities in Go, .NET, and TypeScript to streamline workflows and automate repetitive operational tasks",
        "Collaborated with development teams to diagnose infrastructure issues, optimize resource usage, and improve overall system performance",
        "Provided technical support for OSS operations, including repository management, version control workflows, and issue triaging",
      ],
    },
  ],

  education: [
    {
      institution: "Farhangian University of Kerman",
      area: "English Language Teaching",
      studyType: "Bachelor’s Degree",
      startDate: "2025",
      endDate: "ongoing",
      courses: [
        "Academic Writing & Communication",
        "Educational Technology",
        "Linguistics & Language Structure",
        "Research Methodology",
      ],
    },
  ],

  skills: [
    {
      name: "Frontend Core",
      keywords: [
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Pinia",
        "DaisyUI",
        "Axios",
        "vue-i18n",
      ],
    },
    {
      name: "Backend & Systems",
      keywords: [
        "Go",
        "Gin",
        ".NET",
        "PostgreSQL",
        "MariaDB",
        "Supabase",
        "REST APIs",
        "WebSocket",
      ],
    },
    {
      name: "DevOps & Infrastructure",
      keywords: [
        "Docker",
        "GitHub Actions (CI/CD)",
        "Linux",
        "Ubuntu",
        "Nginx",
        "Cloudflare",
        "Vercel",
        "Appwrite",
      ],
    },
    {
      name: "AI‑Assisted Development",
      keywords: [
        "Cursor",
        "GitHub Copilot",
        "Prompt Engineering",
        "AI‑Powered Code Review",
      ],
    },
    {
      name: "Architecture & Performance",
      keywords: [
        "SSR (Server‑Side Rendering)",
        "SSG (Static Site Generation)",
        "Code Splitting & Lazy Loading",
        "Caching Strategies",
        "Performance Optimization",
      ],
    },
    {
      name: "Development Tools & Workflow",
      keywords: [
        "Git",
        "GitHub",
        "GitLab",
        "pnpm",
        "Swagger",
        "ESLint/Prettier",
        "Vite",
        "VueUse",
        "Agile/Scrum",
      ],
    },
    {
      name: "Quality & UI/UX",
      keywords: [
        "Responsive Design",
        "Accessibility Awareness",
        "Lighthouse Optimization",
        "Code Review",
        "i18n Internationalization",
      ],
    },
    {
      name: "Used Before",
      keywords: [
        "Python",
        "C",
        "C++",
        "SQLite",
        "MongoDB",
        "Flask",
        "Material UI",
        "Arduino",
        "Iconify",
      ],
    },
  ],

  languages: [
    {
      language: "Persian",
      fluency: "Native",
    },
    {
      language: "English",
      fluency: "Fluent",
    },
  ],

  // certificates: [
  //   {
  //     name: "Advanced English Proficiency",
  //     date: "2025",
  //     issuer: "Duolingo English Test",
  //     url: "",
  //     summary: "Score: 85/100 (Advanced Level)",
  //   },
  // ],

  projects: [
    {
      name: "TBW (To Be Watched)",
      description:
        "A clean and minimal media tracking app for managing movies and series, built with Vue 3 and Tailwind CSS.",
      highlights: [
        "Designed a lightweight and responsive UI using Tailwind CSS and DaisyUI",
        "Implemented local storage–based state management for fast, offline-friendly usage",
        "Integrated Axios for efficient API communication and modular data handling",
      ],
      keywords: ["Vue.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Axios"],
      startDate: "2024-01",
      endDate: "2024-03",
      url: "https://tbw.monasef.ir/",
      roles: ["Frontend Developer"],
      type: "application",
    },

    {
      name: "TorrentMax",
      description:
        "A utility tool that enriches magnet links with additional trackers for improved torrent performance.",
      highlights: [
        "Built a fast Nuxt-based interface with instant magnet parsing",
        "Implemented tracker injection logic with clean, modular TypeScript",
        "Deployed globally on Vercel with optimized caching and edge performance",
      ],
      keywords: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      startDate: "2024-02",
      endDate: "2024-02",
      url: "https://torrentmax.monasef.ir/",
      roles: ["Full‑stack Developer"],
      type: "tool",
    },

    {
      name: "HoolIt",
      description:
        "An open-source alternative to dweet.io, enabling users to publish small code snippets and micro‑experiments.",
      highlights: [
        "Developed backend using Go and Gin with clean routing and modular structure",
        "Containerized the application with Docker for consistent deployment",
        "Implemented secure API endpoints and efficient request handling",
      ],
      keywords: ["Go", "Gin", "Docker", "REST API"],
      startDate: "2024-04",
      endDate: "2024-06",
      url: "https://github.com/mmahdium/HoolIt",
      roles: ["Backend Developer"],
      type: "application",
    },

    {
      name: "PolyList",
      description:
        "A social music platform for creating, sharing, and tracking playlists with real-time listening history.",
      highlights: [
        "Built a scalable backend using Go, Gin, and PostgreSQL",
        "Implemented Supabase authentication and real-time features",
        "Developed a modern Nuxt 3 frontend with responsive UI and dynamic routing",
        "Deployed on Vercel with optimized build and caching strategies",
      ],
      keywords: [
        "Go",
        "Gin",
        "PostgreSQL",
        "Supabase",
        "Nuxt.js",
        "Vue.js",
        "Tailwind CSS",
        "Docker",
      ],
      startDate: "2024-06",
      endDate: "ongoing",
      url: "https://pl.mahdium.ir",
      roles: ["Full‑stack Developer"],
      type: "application",
    },
  ],
};
