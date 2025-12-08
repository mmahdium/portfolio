import type { PortfolioData } from "@/types/portfolio.types";

const portfolioFa: PortfolioData = {
  profile: {
    name: "محمد مهدی محمدی",
    title: "توسعه‌دهنده ؟",
    // location: 'Tehran Province - Iran , Remote - Turkey',
    location: "استان کرمان، ایران",
    summary:
      "تمرکز اصلی من تا امروز بیشتر روی توسعهٔ بک‌اند و مدیریت سیستم بوده، چون همیشه از کار با زیرساخت، سرورها و منطق پشت برنامه‌ها لذت برده‌ام. اخیراً یادگیری Nuxt و Vue رو هم شروع کردم تا مهارت‌های فرانت‌اند خودم رو هم گسترش بدهم. همچنان تمرکز اصلی‌ام بک‌اند و مدیریت سیستم هست، اما حالا با استفاده از Nuxt 4 و Vue 3 در زمینهٔ رابط کاربری هم فعالیت می‌کنم تا بتوانم راه‌حل‌های کامل و یکپارچه ارائه کنم.",
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
    title: "ابزارهای اصلی",
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
    title: "نقش‌ها",
    items: [
      { label: "توسعه‌دهندهٔ فرانت‌اند", icon: "i-twemoji-laptop" },
      { label: "SSR با Nuxt", icon: "i-twemoji-rocket" },
      { label: "مهندسی رابط کاربری", icon: "i-twemoji-toolbox" },
      { label: "DX و عملکرد", icon: "i-twemoji-high-voltage" },
    ],
  },

  values: {
    title: "ارزش‌ها",
    items: [
      {
        label: "خودمختاری و مالکیت",
        icon: "i-twemoji-key",
        description: "پیش‌قدم و مسئولیت‌پذیر؛ تحویل کار از ابتدا تا انتها.",
      },
      {
        label: "استانداردهای بالا",
        icon: "i-twemoji-sparkles",
        description: "کیفیت به‌جای میانبر؛ کار را بهتر از قبل رها کن.",
      },
      {
        label: "تحویل متمرکز بر مشتری",
        icon: "i-twemoji-handshake",
        description: "هدف را بفهم، مرحله‌ای بساز، نتیجه را همسو نگه‌دار.",
      },
      {
        label: "کار تیمی و منتورینگ",
        icon: "i-twemoji-people-holding-hands",
        description: "دانش را به‌اشتراک بگذار، تیم را رشد بده، قابل اتکا باش.",
      },
      {
        label: "ارتباط شفاف",
        icon: "i-twemoji-speech-balloon",
        description: "چرایی/چی/چطور را بگو؛ کوتاه و ترجیحاً غیرهم‌زمان.",
      },
    ],
  },

  experiences: [
    {
      company: "گروه محرک انرژی هفت آسمان",
      link: "https://group7sky.ir/",
      // logo: "/img/NexaPortal1.png",
      // location: "İzmir, Türkiye · Remote",
      type: "Part-time",
      positions: [
        {
          title: "مدیر سیستم",
          start: "Jun 2024",
          ongoing: true,
          description: [
            "پشتیبانی از عملیات OSS، انجام بررسی‌های عملکرد و گزارش‌دهی؛ کمک به بهبود کارایی تیم و رضایت مشتری.",
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
      school: "دانشگاه فرهنگیان کرمان",
      degree: "کارشناسی آموزش زبان انگلیسی",
      start: "۲۰۲۵",
      end: "در حال تحصیل",
      icons: ["i-material-symbols-school"],
      logo: "/img/cfu_logo-light.png",
    },
  ],

  projects: [
    {
      name: "TBW (To Be Watched)",
      description:
        "یک اپ ساده و زیبا شبیه ToDo برای فیلم و سریال ساخته‌شده با Vue 3 و Tailwind CSS (daisyUI).",
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/TBW",
          icon: "i-mdi-github",
        },
        {
          label: "وب‌سایت",
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
      status: "فعال",
      opensource: true,
      category: "public",
    },
    {
      name: "TorrentMax",
      description: "بهبود عملکرد لینک های مگنت و تورنت",
      // thumbnail: "/img/projects/ideh.png",
      status: "فعال",
      opensource: true,
      links: [
        {
          label: "GitHub",
          to: "https://github.com/mmahdium/TorrentMax",
          icon: "i-mdi-github",
        },
        {
          label: "وب‌سایت",
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
      name: "Monasef",
      description: "همون فایل، نصف هزینه اینترنت ⁦;⁠-⁠)",
      thumbnail: "/img/projects/monasef.png",
      status: "فعال",
      opensource: false,
      links: [
        {
          label: "وب‌سایت",
          to: "https://monasef.ir/",
          icon: "i-mdi-link",
        },
      ],
      icons: [
        "i-logos-dotnet",
        "i-logos-bootstrap",
        "i-logos-docker-icon",
        "i-logos-prometheus",
      ],
      category: "freelance",
    },
  ],
};

export default portfolioFa;
