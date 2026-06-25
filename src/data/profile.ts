/**
 * profile.ts
 * Central profile content. Updating this file updates the Hero,
 * Contact, and other sections without changing component logic.
 */

import type { Profile } from "../types/profile";

export const profile: Profile = {
  name: "Kuldeep Singh",
  role: "Full Stack Developer",
  location: "Niagara Region, Ontario, Canada",
  email: "kulsinggh@gmail.com",
  phone: "+1 (514) 292-1514",
  summary:
    "Full Stack Developer building modern web applications with React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, and AWS.",
  highlights: [
    "7+ years of software development experience",
    "React, TypeScript, Node.js, Express, and AWS",
    "CMS, e-commerce, legal tech, and cloud-based systems",
  ],
  socials: [
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://ca.linkedin.com/in/kuldeep1993",
    },
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/Gilpix",
    },
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/kulartist/",
    },
    {
      platform: "playStore",
      label: "Google Play",
      url: "https://play.google.com/store/apps/developer?id=Gilpix",
    },
    {
      platform: "email",
      label: "Email",
      url: "mailto:kulsinggh@gmail.com",
    },
  ],
};