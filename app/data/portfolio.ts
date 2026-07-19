import type { PortfolioData } from "@/types/portfolio.types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Mohammad Mahdi Mohammadi",
    title: "Backend & DevOps Engineer",
    headline: "Backend & DevOps Practitioner",
    location: "Kerman Province - Iran",
    summary:
      "My background is in backend development and system administration, with a strong emphasis on infrastructure, automation, and server side logic. Over the past year, I've shifted my focus toward DevOps and observability; recently working with the LGTM stack (Loki, Grafana, Tempo, Mimir + Prometheus, alloy, ...), which has been a major step toward more mature, enterprise grade systems. I continue to work extensively with Go and .NET for backend services, and I genuinely enjoy tackling system design problems that require thoughtful architecture, scalability, and reliability. While I still build interfaces when needed, my primary interest lies in the layers beneath the UI.",
    availability: "Open to DevOps, infrastructure, and backend engineering roles.",
    focusAreas: ["Infrastructure & Observability", "Backend Services", "System Administration", "CI/CD & Automation"],
    // avatar: "/img/AliProfile.webp",
    socials: {
      website: "https://mahdium.ir/",
      github: "https://github.com/mmahdium",
      // linkedin: "https://www.linkedin.com/in/aliarghyani/",
      // telegram: "https://t.me/mmahdium",
      whatsapp: "https://wa.me/989907875312",
      // spotify: "https://open.spotify.com/user/aliarghyani",
      // bento: "https://bento.me/arghyani",
      // instagram: "https://www.instagram.com/mmahdiom/",
    },
  },

  mainTools: {
    title: "Main tools",
    items: [
      { label: "Vue.js", icon: "i-logos-vue" },
      { label: "Nuxt.js", icon: "i-logos-nuxt-icon" },
      { label: "TypeScript", icon: "i-logos-typescript-icon" },
      { label: "Vuetify", icon: "i-logos-vuetifyjs" },
      { label: "Tailwind CSS", icon: "i-logos-tailwindcss-icon" },
      { label: "Pinia", icon: "i-logos-pinia" },
      { label: "Vite", icon: "i-logos-vitejs" },
      { label: "Git/GitHub", icon: "i-mdi-github" },
    ],
  },

  roles: {
    title: "Roles",
    items: [
      { label: "Frontend Developer", icon: "i-twemoji-laptop" },
      { label: "SSR with Nuxt", icon: "i-twemoji-rocket" },
      { label: "UI Engineering", icon: "i-twemoji-toolbox" },
      { label: "DX & Performance", icon: "i-twemoji-high-voltage" },
    ],
  },

  values: {
    title: "Values",
    items: [
      {
        label: "Autonomy & Ownership",
        icon: "i-twemoji-key",
        description: "Take initiative and be accountable. Deliver end-to-end.",
      },
      {
        label: "High standards",
        icon: "i-twemoji-sparkles",
        description: "Aim for quality over shortcuts. Leave things better.",
      },
      {
        label: "Client-focused delivery",
        icon: "i-twemoji-handshake",
        description: "Understand goals, ship iteratively, and align outcomes.",
      },
      {
        label: "Teamwork & Mentoring",
        icon: "i-twemoji-people-holding-hands",
        description: "Share knowledge, elevate teammates, be reliable.",
      },
      {
        label: "Clear communication",
        icon: "i-twemoji-speech-balloon",
        description: "Explain the why/what/how. Prefer concise async updates.",
      },
    ],
  },

  services: [
    {
      title: "Infrastructure & Observability Setup",
      description: "Designing and deploying monitoring stacks with Prometheus, Grafana, Loki, and Tempo for enterprise-grade observability.",
      icon: "i-mdi-chart-box-outline",
    },
    {
      title: "Backend Service Development",
      description: "Building production-ready backend services with Go and .NET, focused on architecture, scalability, and reliability.",
      icon: "i-mdi-server-network",
    },
    {
      title: "CI/CD & Automation",
      description: "Setting up continuous integration and deployment pipelines, infrastructure automation with Ansible, and GitOps workflows.",
      icon: "i-mdi-source-branch-sync",
    },
    {
      title: "System Administration & Linux Ops",
      description: "Managing server infrastructure, networking, container orchestration, and internal services across Linux environments.",
      icon: "i-mdi-linux",
    },
    {
      title: "Database Design & Management",
      description: "Working with PostgreSQL, MariaDB, Elasticsearch, and Supabase for data persistence, search, and real-time features.",
      icon: "i-mdi-database-outline",
    },
    {
      title: "Container Orchestration & Docker",
      description: "Containerizing applications, managing Docker environments, and building scalable deployment configurations.",
      icon: "i-logos-docker-icon",
    },
  ],

  stackGroups: [
    {
      title: "Observability & Analytics",
      description: "Monitoring, logging, metrics, and analytics across infrastructure.",
      items: [
        { label: "Grafana", icon: "i-logos-grafana", to: "https://grafana.com/oss/grafana/", type: "Tool" },
        { label: "Loki", icon: "i-simple-icons-grafana", to: "https://grafana.com/oss/grafana/", type: "Service" },
        { label: "Prometheus", icon: "i-logos-prometheus", to: "https://grafana.com/oss/prometheus/", type: "Service" },
        { label: "Alloy", icon: "i-vscode-icons-file-type-alloy", to: "https://grafana.com/oss/alloy-opentelemetry-collector/", type: "Service" },
        { label: "OpenTelemetry", icon: "i-logos-opentelemetry-icon", to: "https://opentelemetry.io/", type: "Service" },
        { label: "Matomo", icon: "i-logos-matomo-icon", to: "https://matomo.org", type: "Service" },
        { label: "Umami", icon: "i-simple-icons-umami", to: "https://umami.is/", type: "Service" },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      description: "Containerization, orchestration, CI/CD, and server management.",
      items: [
        { label: "Docker", icon: "i-logos-docker-icon", to: "https://www.docker.com", type: "DevOps" },
        { label: "Kubernetes", icon: "i-devicon-kubernetes", to: "https://kubernetes.io/", type: "DevOps" },
        { label: "Ansible", icon: "i-simple-icons-ansible", to: "https://ansible.com/", type: "DevOps" },
        { label: "Nginx", icon: "i-logos-nginx", to: "https://www.nginx.com", type: "DevOps" },
        { label: "Linux", icon: "i-logos-linux-tux", to: "https://www.kernel.org", type: "Tool" },
        { label: "Ubuntu", icon: "i-logos-ubuntu", to: "https://www.ubuntu.com", type: "Tool" },
        { label: "Git", icon: "i-logos-git-icon", to: "https://git-scm.com", type: "Tool" },
        { label: "GitHub", icon: "i-logos-github-octocat", to: "https://github.com", type: "Service" },
        { label: "GitLab", icon: "i-logos-gitlab-icon", to: "https://gitlab.com", type: "Service" },
        { label: "GitHub Actions", icon: "simple-icons:githubactions", to: "https://docs.github.com/actions", type: "DevOps" },
        { label: "Gitea", icon: "i-devicon-gitea", to: "https://about.gitea.com", type: "Service" },
        { label: "Cloudflare", icon: "i-logos-cloudflare-icon", to: "https://www.cloudflare.com", type: "Service" },
        { label: "Vercel", icon: "i-logos-vercel-icon", to: "https://vercel.com", type: "Service" },
      ],
    },
    {
      title: "Backend Languages & Frameworks",
      description: "Server-side languages and frameworks for building backend services.",
      items: [
        { label: "Go", icon: "i-logos-go", to: "https://golang.org/", type: "Language" },
        { label: "Gin", icon: "i-logos-gin", to: "https://gin-gonic.com", type: "Framework" },
        { label: ".NET", icon: "i-logos-dotnet", to: "https://dotnet.microsoft.com/", type: "Framework" },
        { label: "TypeScript", icon: "i-logos-typescript-icon", to: "https://www.typescriptlang.org", type: "Language" },
        { label: "Python", icon: "i-logos-python", to: "https://www.python.org", type: "Language" },
      ],
    },
    {
      title: "Databases & Storage",
      description: "Relational, document, cache, and search data stores.",
      items: [
        { label: "PostgreSQL", icon: "i-logos-postgresql", to: "https://www.postgresql.org", type: "Data" },
        { label: "MariaDB", icon: "i-logos-mariadb-icon", to: "https://mariadb.org", type: "Data" },
        { label: "MongoDB", icon: "i-logos-mongodb-icon", to: "https://www.mongodb.com", type: "Data" },
        { label: "Redis", icon: "i-logos-elasticsearch", to: "https://redis.io/", type: "Data" },
        { label: "ElasticSearch", icon: "i-logos-elasticsearch", to: "https://www.elastic.co/elasticsearch", type: "Data" },
        { label: "SQLite", icon: "i-logos-sqlite", to: "https://www.sqlite.org/index.html", type: "Data" },
        { label: "Supabase", icon: "i-logos-supabase-icon", to: "https://supabase.io", type: "Service" },
      ],
    },
    {
      title: "Frontend",
      description: "UI frameworks, component libraries, and styling tools.",
      items: [
        { label: "Vue.js", icon: "i-logos-vue", to: "https://vuejs.org", type: "Framework" },
        { label: "Nuxt.js", icon: "i-logos-nuxt-icon", to: "https://nuxt.com", type: "Framework" },
        { label: "Tailwind CSS", icon: "i-logos-tailwindcss-icon", to: "https://tailwindcss.com", type: "Library" },
        { label: "DaisyUI", icon: "i-logos-daisyui-icon", to: "https://daisyui.com", type: "Library" },
        { label: "Pinia", icon: "i-logos-pinia", to: "https://pinia.vuejs.org", type: "Library" },
        { label: "vue-i18n", icon: "i-twemoji-globe-with-meridians", to: "https://vue-i18n.intlify.dev", type: "Library" },
        { label: "Axios", icon: "simple-icons:axios", to: "https://axios-http.com", type: "Library" },
        { label: "WebSocket", icon: "i-twemoji-electric-plug", to: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", type: "Library" },
        { label: "Material UI", icon: "i-logos-material-ui", to: "https://mui.com", type: "Library" },
      ],
    },
    {
      title: "APIs, Auth & Hardware",
      description: "API documentation, authentication protocols, and hardware prototyping.",
      items: [
        { label: "Swagger", icon: "logos:swagger", to: "https://swagger.io", type: "Tool" },
        { label: "OAuth2", icon: "i-devicon-oauth", to: "https://oauth.net/", type: "Service" },
        { label: "C", icon: "i-logos-c", to: "https://en.wikipedia.org/wiki/C_(programming_language)", type: "Language" },
        { label: "C++", icon: "i-logos-c-plusplus", to: "https://en.wikipedia.org/wiki/C%2B%2B", type: "Language" },
        { label: "Arduino", icon: "simple-icons:arduino", to: "https://www.arduino.cc/", type: "Tool" },
        { label: "MQTT", icon: "simple-icons:mqtt", to: "https://mqtt.org/", type: "Protocol" },
      ],
    },
  ],

  reactExpansion: {
    title: "Currently expanding into scalable system design and observability",
    description:
      "Building deeper skills in designing asynchronous, scalable backend systems and full observability solutions with the Grafana stack and OpenTelemetry.",
    items: [
      { label: "OpenTelemetry", icon: "i-logos-opentelemetry-icon" },
      { label: "Grafana Stack", icon: "i-logos-grafana" },
      { label: "Async Systems", icon: "i-mdi-arrows-split-vertical" },
      { label: "Scalable Architecture", icon: "i-mdi-chart-box-outline" },
      { label: "Go", icon: "i-logos-go" },
    ],
  },

  cta: {
    title: "Available for DevOps, infrastructure, and backend engineering opportunities",
    description:
      "I am especially interested in DevOps, infrastructure automation, backend services, and observability platforms that require thoughtful architecture and reliability.",
  },

  experiences: [
    {
      company: "Group7Sky",
      link: "https://group7sky.ir/",
      // logo: "/img/NexaPortal1.png",
      // location: "İzmir, Türkiye · Remote",
      type: "Part-time",
      positions: [
        {
          title: "System Administrator",
          start: "Jun 2024",
          ongoing: true,
          description: [
            "Supported OSS operations, performance checks and reporting; contributed to team efficiency and customer satisfaction.",
          ],
          icons: [
            "i-logos-docker-icon",
            "i-logos-grafana",
            "i-simple-icons-grafana", // Loki
            "i-logos-prometheus",
            "i-vscode-icons-file-type-alloy",
            "i-logos-git-icon",
            "i-devicon-gitea",
            "i-logos-linux-tux",
            "i-simple-icons-ansible",
            "i-logos-mariadb-icon",
            "i-simple-icons-umami",
            "i-logos-matomo-icon",
            "i-logos-go",
            "simple-icons:arduino",
            "i-logos-c",
            "i-logos-c-plusplus",
          ],
          link: "https://group7sky.ir/",
          linkLabel: "Group7Sky Website",
        },
      ],
    },
    {
      company: "Farimah Software Group",
      // link: "https://group7sky.ir/",
      location: "Kerman, Iran",
      type: "Part-time",
      positions: [
        {
          title: "Technical Lead",
          start: "Nov 2025",
          ongoing: true,
          description: [
            "Leading and guiding the development team, including task allocation, sprint planning, and overseeing code quality and project progress.",
            "Managing server infrastructure, networking, and internal services; designing, implementing, and maintaining scalable and secure backend services.",
            "Designing system architectures and coordinating across teams to improve development workflows and establish CI/CD pipelines.",
          ],
          icons: [
            "i-logos-docker-icon",
            "i-logos-grafana",
            "i-simple-icons-grafana", // Loki
            "i-logos-prometheus",
            "i-vscode-icons-file-type-alloy",
            "i-logos-git-icon",
            "i-devicon-gitea",
            "i-logos-linux-tux",
            "i-logos-postgresql",
            "i-logos-dotnet",
            "i-logos-elasticsearch",
            "i-logos-nginx",
          ],
          // link: "https://group7sky.ir/",
          // linkLabel: "Company Website",
        },
      ],
    }
  ],

  education: [
    {
      school: "Farhangian University of Kerman",
      degree: "Bachelor of English Language Teaching",
      start: "2025",
      end: "ongoing",
      icons: ["i-material-symbols-school"],
      logo: "/img/cfu_logo-light.png",
    },
  ],

  projects: [
    {
      name: "TBW (To Be Watched)",
      description:
        "A simple and beautiful media list app built with Vue 3 and Tailwind CSS (daisyUI).",
      context: "Personal project for tracking and organizing media content in a clean, accessible interface.",
      role: "Full-stack development, UI design, and API integration.",
      features: ["Media list management", "Responsive UI", "API-driven content", "Clean component architecture"],
      stack: ["Vue 3", "TypeScript", "Tailwind CSS", "daisyUI", "Vite"],
      outcome: "A polished media tracking app with a focus on simplicity and user experience.",
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/TBW",
          icon: "i-mdi-github",
        },
        {
          label: "Website",
          to: "https://tbw.monasef.ir/",
          icon: "i-mdi-link",
        },
      ],
      icons: [
        "i-logos-vue",
        "i-logos-typescript-icon",
        "i-logos-tailwindcss-icon",
        "simple-icons:axios",
        "i-logos-vitejs",
        "i-logos-daisyui-icon",
      ],
      status: "Active",
      opensource: true,
      category: "public",
    },
    {
      name: "TorrentMax",
      description: "Enrich Your Magnet Links with Trackers Instantly",
      context: "Open-source tool for automatically enriching torrent magnet links with tracker lists.",
      role: "Designed and built the Nuxt frontend, implemented tracker API integration.",
      features: ["Magnet link enrichment", "Tracker database", "One-click copy", "Responsive design"],
      stack: ["Nuxt", "Vue", "TypeScript", "Tailwind CSS"],
      outcome: "Helps users improve torrent download speeds by ensuring comprehensive tracker coverage.",
      // thumbnail: "/img/projects/ideh.png",
      status: "Active",
      opensource: true,
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/TorrentMax",
          icon: "i-mdi-github",
        },
        {
          label: "Website",
          to: "https://torrentmax.monasef.ir/",
          icon: "i-mdi-link",
        },
      ],
      icons: [
        "i-logos-nuxt-icon",
        "i-logos-vue",
        "i-logos-typescript-icon",
        "i-logos-tailwindcss-icon",
      ],
      category: "public",
    },
    {
      name: "HoolIt",
      description:
        "HoolIt is an open-source project aiming to provide a simple and easy-to-use alternative to the beloved dweet.io.",
      context: "Open-source IoT data sharing platform as a lightweight alternative to dweet.io.",
      role: "Backend development with .NET, containerization with Docker.",
      features: ["REST API for data posting", "Real-time data retrieval", "Docker deployment", "Simple integration"],
      stack: [".NET", "Docker"],
      outcome: "Provides a self-hostable, lightweight data sharing service for IoT and quick prototyping.",
      // thumbnail: "/img/projects/monasef.png",
      status: "Active",
      opensource: true,
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/HoolIt",
          icon: "i-mdi-github",
        },
      ],
      icons: ["i-logos-dotnet", "i-logos-docker-icon"],
      category: "public",
    },
    {
      name: "PolyList",
      description:
        "PolyList is a social music platform where you can create, manage, and share playlists and libraries with friends. Track your listening history through a public profile powered by web scrobbling.",
      context: "Social music platform for collaborative playlist management and listening history tracking.",
      role: "Backend development with Go, frontend with Nuxt, infrastructure with Docker and Supabase.",
      features: ["Playlist creation & sharing", "Web scrobbling", "Social profiles", "Real-time updates"],
      stack: ["Go", "Gin", "Nuxt", "Vue", "Supabase", "PostgreSQL", "Docker", "Vercel"],
      outcome: "A growing social music platform with active users sharing and discovering music together.",
      thumbnail: "/img/projects/polylist.png",
      status: "Active",
      opensource: false,
      links: [
        {
          label: "Website",
          to: "https://pl.mahdium.ir",
          icon: "i-mdi-link",
        },
        {
          label: "My Profile",
          to: "https://pl.mahdium.ir/p/mahdium",
          icon: "i-mdi-link",
        },
      ],
      icons: [
        "i-logos-go",
        "i-logos-gin",
        "i-logos-nuxt-icon",
        "i-logos-vercel-icon",
        "i-logos-vue",
        "i-logos-daisyui-icon",
        "i-logos-tailwindcss-icon",
        "i-logos-supabase-icon",
        "i-logos-postgresql",
        "i-logos-docker-icon",
      ],
      category: "freelance",
    },
    {
      name: "TGSS (Telegram to RSS)",
      description:
        "A Telegram channel to RSS feed API that takes a public channel ID and returns its most recent posts in RSS format.",
      context:
        "A hands-on Go project to refine problem-solving and systems skills. Built core components from scratch rather than relying on heavy third-party solutions or ready-made AI generated code.",
      role: "Full backend development — custom rate limiter, smart caching layer, and image proxy from scratch.",
      features: [
        "Custom-built rate limiter",
        "Smart caching for repeated requests",
        "Image proxy for media-rich feeds",
        "Public Telegram channel RSS output",
      ],
      stack: ["Go", "Gin", "gotd", "fx", "zap"],
      outcome:
        "A performant RSS gateway that showcases custom infrastructure work and deep Go proficiency.",
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/TGSS",
          icon: "i-mdi-github",
        },
      ],
      icons: ["i-logos-go", "i-logos-gin"],
      status: "Active",
      opensource: true,
      category: "public",
    },
    {
      name: "TBDel (To Be Deleted)",
      description:
        "A simple command-line tool for managing a list of files and directories marked for deletion.",
      context:
        "A practical CLI utility for organizing and executing bulk file removal, available on AUR for easy Linux installation.",
      role: "Design and implementation of the CLI, deletion logic, and AUR packaging.",
      features: [
        "Add, remove, and list pending deletions",
        "Execute batch deletion of marked entries",
        "Available on AUR",
      ],
      stack: ["C#", ".NET"],
      outcome:
        "A focused CLI tool solving a real workflow need, distributed via AUR.",
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/TBDel",
          icon: "i-mdi-github",
        },
      ],
      icons: ["i-logos-dotnet"],
      status: "Active",
      opensource: true,
      category: "public",
    },
    {
      name: "MQTT Logger",
      description:
        "A Go application that subscribes to MQTT topics and logs all messages to CSV files for analysis and monitoring.",
      context:
        "Originally built as an internal tool to fulfill a real operational need, then open-sourced for broader use. May not be accessible outside Iran due to infrastructure restrictions.",
      role: "Design and development of the subscription engine, CSV logging pipeline, and connection monitoring.",
      features: [
        "Subscribe to one or multiple MQTT topics",
        "CSV logging with timestamp, topic, and message",
        "MQTT authentication support",
        "Configurable logging levels",
        "Connection status monitoring",
      ],
      stack: ["Go", "Paho MQTT"],
      outcome:
        "A production-proven monitoring tool bridging MQTT telemetry and data analysis.",
      links: [
        {
          label: "Git (may not be accessible outside Iran)",
          to: "https://git.mahdium.ir/mahdium/MQTTLogger",
          icon: "i-mdi-link",
        },
      ],
      icons: ["i-logos-go", "simple-icons:mqtt"],
      status: "Active",
      opensource: true,
      category: "public",
    },
    {
      name: "CatsOfMastodon Bot",
      description:
        "A moderation bot that curates cat posts from public Mastodon instances and publishes them to a Telegram channel.",
      context:
        "A self-hosted content curation pipeline with human-in-the-loop approval for a public Telegram channel.",
      role: "End-to-end development: Mastodon polling, Telegram integration, and admin moderation workflow.",
      features: [
        "Monitors catsofmastodon tag across instances",
        "Forwards candidates to admin for review",
        "Approval/rejection via Telegram",
        "Publishes curated posts to a public channel",
      ],
      stack: ["C#", ".NET"],
      outcome:
        "A running Telegram channel powered by automated Fediverse curation with manual quality control.",
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/CatsOfMastodonBot",
          icon: "i-mdi-github",
        },
        {
          label: "Telegram Channel",
          to: "https://t.me/catsofmastodon",
          icon: "i-mdi-link",
        },
      ],
      icons: ["i-logos-dotnet"],
      status: "Active",
      opensource: true,
      category: "public",
    },
    {
      name: "VDR (VirtualDDNSRouter)",
      description:
        "A lightweight dynamic DNS router with a client-server architecture for accessing services on dynamic IPs through consistent URLs.",
      context:
        "A practical networking solution for accessing home-lab and self-hosted services without static IPs.",
      role: "Design and implementation of both the IP update client and the reverse-proxy server.",
      features: [
        "Client updates server with current IP",
        "Server reverse-proxies to dynamic backends",
        "Consistent URL access for dynamic IPs",
        "Lightweight and self-contained",
      ],
      stack: ["C#", ".NET"],
      outcome:
        "A reliable networking tool enabling stable remote access to dynamic infrastructure.",
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/VDR",
          icon: "i-mdi-github",
        },
      ],
      icons: ["i-logos-dotnet"],
      status: "Active",
      opensource: true,
      category: "public",
    },
  ],
};

export default portfolio;
