import type { PortfolioData } from "@/types/portfolio.types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Mohammad Mahdi Mohammadi",
    title: "A Developer?",
    location: "Kerman Province - Iran",
    summary:
      "My background is in backend development and system administration, with a strong emphasis on infrastructure, automation, and server side logic. Over the past year, I've shifted my focus toward DevOps and observability—recently working with the LGTM stack (Loki, Grafana, Tempo, Mimir + Prometheus, alloy, ...), which has been a major step toward more mature, enterprise grade systems. I continue to work extensively with Go and .NET for backend services, and I genuinely enjoy tackling system design problems that require thoughtful architecture, scalability, and reliability. While I still build interfaces when needed, my primary interest lies in the layers beneath the UI.",
    // avatar: "/img/AliProfile.webp",
    socials: {
      website: "https://mahdium.ir/",
      github: "https://github.com/mmahdium",
      // linkedin: "https://www.linkedin.com/in/aliarghyani/",
      // telegram: "https://t.me/mmahdium",
      // whatsapp: "https://wa.me/989123220694",
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
  ],
};

export default portfolio;
