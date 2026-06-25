/**
 * about.ts
 * Content for the About section. Keeping text here makes the UI
 * components cleaner and easier to update later.
 */

import { Code2, Lightbulb, Users, Zap } from "lucide-react";

import type { AboutFeature } from "../types/about";

export const aboutFeatures: AboutFeature[] = [
  {
    title: "User-Focused",
    description:
      "I care about clean structure, simple interactions, and interfaces that feel easy for real users.",
    icon: Code2,
  },
  {
    title: "Adaptable",
    description:
      "I keep learning new tools and improve quickly when project requirements or technologies change.",
    icon: Zap,
  },
  {
    title: "Quick Learner",
    description:
      "I can understand new systems fast, debug issues, and become productive without waiting for perfect documentation.",
    icon: Lightbulb,
  },
  {
    title: "Team Player",
    description:
      "I enjoy working with teams, sharing knowledge, reviewing code, and helping others when needed.",
    icon: Users,
  },
];