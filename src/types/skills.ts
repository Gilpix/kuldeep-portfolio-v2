/**
 * skills.ts
 * Types for skill groups shown in the Skills section.
 */

import type { LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}