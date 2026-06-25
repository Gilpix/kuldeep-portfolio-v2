/**
 * profile.ts
 * Shared TypeScript types for personal profile data used across the portfolio.
 */

export type SocialPlatform =
  | "linkedin"
  | "github"
  | "instagram"
  | "playStore"
  | "email";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  highlights: string[];
  socials: SocialLink[];
}