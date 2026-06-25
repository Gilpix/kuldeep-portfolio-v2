/**
 * animations.ts
 * Global Framer Motion animation variants.
 * Use these across sections for consistent scroll reveal effects.
 */

import type { Transition, Variants } from "framer-motion";

export const smoothTransition: Transition = {
  duration: 0.55,
  ease: "easeOut",
};

export const fastTransition: Transition = {
  duration: 0.35,
  ease: "easeOut",
};

export const viewportOnce = {
  once: true,
  amount: 0.18,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: smoothTransition },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: smoothTransition },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: smoothTransition },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};