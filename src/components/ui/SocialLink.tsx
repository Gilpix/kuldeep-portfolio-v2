/**
 * SocialLink.tsx
 * Reusable social profile link. Brand icons come from react-icons
 * because it supports GitHub, LinkedIn, Instagram, and Google Play clearly.
 */

import {
  FaGithub,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import type { IconType } from "react-icons";
import type { SocialLink as SocialLinkType } from "../../types/profile";

interface SocialLinkProps {
  social: SocialLinkType;
}

// Maps each platform from profile data to its matching brand icon.
const iconMap: Record<SocialLinkType["platform"], IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
  playStore: FaGooglePlay,
  email: MdEmail,
};

function SocialLink({ social }: SocialLinkProps) {
  const Icon = iconMap[social.platform];

  return (
    <a
      href={social.url}
      target={social.platform === "email" ? undefined : "_blank"}
      rel={social.platform === "email" ? undefined : "noreferrer"}
      aria-label={social.label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
    >
      <Icon size={20} />
    </a>
  );
}

export default SocialLink;