/**
 * SocialLink.tsx
 * Reusable social profile link for the Hero section.
 * Hero icons intentionally remain identical in both light and dark mode.
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
      className="
          group inline-flex size-12 items-center justify-center
          rounded-full border border-white/20
          bg-[#0f172a]/70
          !text-white
          shadow-lg shadow-black/20
          backdrop-blur-md
          transition-all duration-300

          hover:-translate-y-1
          hover:border-[var(--color-primary)]
          hover:bg-[#000]/90
          hover:text-[var(--color-primary)]
          hover:shadow-[0_0_26px_rgba(244,180,0,0.28)]

          active:scale-95
          active:-translate-y-1
          active:border-[var(--color-primary)]
          active:bg-[#0f172a]/90
          active:text-[var(--color-primary)]
          active:shadow-[0_0_26px_rgba(244,180,0,0.28)]
          "
    >
      <Icon
        size={20}
        className="
    transition-all duration-300
    group-hover:scale-110
    group-hover:text-[var(--color-primary)]
    group-active:scale-110
    group-active:text-[var(--color-primary)]
  "
      />
    </a>
  );
}

export default SocialLink;
