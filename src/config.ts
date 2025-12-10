import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://example.com/", // replace with your deployed domain
  author: "MuchoRed Dev Team",
  desc: "Insights, tutorials, and updates from the MuchoRed development team",
  title: "MuchoRed Development",
  ogImage: "og-image.jpg",
  lightAndDarkMode: false, // Using dark mode only with glassmorphic design
  postPerPage: 9,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 180,
  height: 40,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/muchored",
    linkTitle: `${SITE.title} on Github`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/muchored",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/muchored",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@muchored",
    linkTitle: `${SITE.title} on TikTok`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/muchored",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:info@example.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
