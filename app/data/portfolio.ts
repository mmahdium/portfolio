import type { PortfolioData } from "@/types/portfolio.types";

export const portfolio: PortfolioData = {
  profile: {
    name: "Mohammad Mahdi Mohammadi",
    title: "A Developer?",
    location: "Kerman Province - Iran",
    summary: "A Developer Maybe? IDK what to say here yet.",
    // avatar: "/img/AliProfile.webp",
    socials: {
      website: "https://mahdium.ir/",
      github: "https://github.com/mmahdium",
      // linkedin: "https://www.linkedin.com/in/aliarghyani/",
      telegram: "https://t.me/mmahdium",
      // whatsapp: "https://wa.me/989123220694",
      // spotify: "https://open.spotify.com/user/aliarghyani",
      // bento: "https://bento.me/arghyani",
      instagram: "https://www.instagram.com/mmahdiom/",
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
          icons: ["i-logos:github-octocat", "i-logos:git-icon"],
          link: "https://group7sky.ir/",
          linkLabel: "Group7Sky Website",
        },
      ],
    },
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
  ],
};

export default portfolio;
