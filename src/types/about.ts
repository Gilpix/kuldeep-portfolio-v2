/**
 * about.ts
 * Types for About section cards and personal introduction content.
 */

import type { LucideIcon } from "lucide-react";

export interface AboutFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}