import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://example.com/", // replace with your deployed domain
  author: "Site Author",
  desc: "A modern blog built with Astro and Pages CMS",
  title: "Site Name",
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
    href: "https://github.com/",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
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
