import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://example.com/", // replace with your deployed domain
  author: "Your Name",
  desc: "Your blog description",
  title: "My Blog",
  ogImage: "og-image.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:your@email.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
];
