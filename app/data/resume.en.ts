/**
 * Resume Data - Mohammad Mahdi Mohammadi
 * Based on RESUME-STANDARDS.md (docs/RESUME-STANDARDS.md)
 * Optimized for ATS and 2025 best practices
 * Version: 2.1 - DevOps & Backend Focus
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
    label: "Developer & DevOps Engineer | Backend · Infrastructure · Observability (LGTM)",
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
      "My background is in backend development and system administration, with a strong emphasis on infrastructure, automation, and server side logic. Over the past year, I've shifted my focus toward DevOps and observability—recently working with the LGTM stack (Loki, Grafana, Tempo, Mimir + Prometheus, alloy, ...), which has been a major step toward more mature, enterprise grade systems. I continue to work extensively with Go and .NET for backend services, and I genuinely enjoy tackling system design problems that require thoughtful architecture, scalability, and reliability. While I still build interfaces when needed, my primary interest lies in the layers beneath the UI.",
  },

  work: [
    {
      company: "Group7Sky",
      position: "System Administrator & DevOps Lead",
      location: "Kerman, Iran",
      startDate: "2024-06",
      highlights: [
        "Managed and maintained Linux-based server infrastructure, ensuring high availability, uptime monitoring, and performance optimization across production systems",
        "Designed and implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment overhead and improving release reliability",
        "Configured and secured web services with reverse proxies (Nginx), SSL certificates, and firewall rules, improving security posture",
        "Developed internal automation tools in Go, .NET, and TypeScript to streamline operational workflows and reduce manual tasks",
        "Collaborated with development teams on system architecture, resource optimization, and infrastructure-related debugging",
        "Provided technical support for OSS operations, including repository management and version control workflows",
      ],
    },
    {
      company: "Farimah Software Group",
      position: "Technical Lead",
      location: "Kerman, Iran",
      startDate: "2025-11",
      highlights: [
        "Leading a development team with task allocation, sprint planning, and code quality oversight",
        "Managing server infrastructure, networking, and internal services; designing and maintaining scalable and secure backend systems",
        "Architecting system designs and coordinating across teams to improve development workflows and establish CI/CD practices",
        "Building and maintaining backend services primarily using .NET and Go with a focus on reliability and performance",
      ],
    },
  ],

  education: [
    {
      institution: "Farhangian University of Kerman",
      area: "English Language Teaching",
      studyType: "Bachelor's Degree",
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
      name: "Backend & Systems",
      keywords: [
        "Go",
        "Gin",
        ".NET",
        "PostgreSQL",
        "MariaDB",
        "ElasticSearch",
        "REST APIs",
        "WebSocket",
        "System Design",
        "Scalability",
      ],
    },
    {
      name: "DevOps & Infrastructure",
      keywords: [
        "Docker",
        "Linux",
        "Ubuntu",
        "Nginx",
        "GitHub Actions (CI/CD)",
        "Cloudflare",
        "Vercel",
        "Ansible",
        "Kubernetes",
      ],
    },
    {
      name: "Observability & Monitoring (LGTM Stack)",
      keywords: [
        "Grafana",
        "Loki",
        "Prometheus",
        "Alloy (OpenTelemetry Collector)",
      ],
    },
    {
      name: "Frontend (Secondary)",
      keywords: [
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "Tailwind CSS",
        "Pinia",
        "DaisyUI",
        "Axios",
      ],
    },
    {
      name: "Development Tools & Workflow",
      keywords: [
        "Git",
        "GitHub",
        "GitLab",
        "Gitea",
        "pnpm",
        "Swagger",
        "Vite",
        "ESLint/Prettier",
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
  ],
};
