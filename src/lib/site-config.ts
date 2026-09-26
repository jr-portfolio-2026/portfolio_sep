export const SITE = {
  identity: {
    name: "Your Name",
    initials: "YN",
    portfolioLabel: "Professional Portfolio",
    year: "2026",
    email: "hello@example.com",
  },

  meta: {
    title: "Your Name — Professional Portfolio",
    description:
      "Selected work across research, strategy, international practice, and applied digital tools.",
    author: "Your Name",
  },

  intro: {
    disciplines: ["Software", "Data", "International Trade", "Law"],
    languageCodes: ["EN", "FR", "XX"],
    seenStorageKey: "portfolio-intro-seen",
    loadingLabel: "Entering the portfolio",
  },

  positioning: {
    contextLine: "EN · FR · International",
    footerLine: "Law · Trade · Strategy · Software",
  },

  languages: [
    "English",
    "Français",
    "Language Three",
    "Language Four",
    "Language Five",
    "Language Six",
  ],

  links: {
    github: "#",
    linkedin: "#",
  },

  assets: {
    favicon: "/favicon.ico",
  },
} as const;

export const SITE_DISCIPLINES = SITE.intro.disciplines.join(" · ");
export const SITE_LANGUAGE_CODES = SITE.intro.languageCodes.join(" · ");
