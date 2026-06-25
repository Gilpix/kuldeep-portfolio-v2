/**
 * animations.ts
 * Global Framer Motion animation variants.
 * Keep all animation timing here so components stay clean.
 */

import type { Transition, Variants } from "framer-motion";

export const smoothTransition: Transition = {
  duration: 0.45,
  ease: "easeOut",
};

export const smoothTransitionSlow: Transition = {
  duration: 0.75,
  ease: "easeOut",
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const viewportOnce = {
  once: true,
  amount: 0.15,
} as const;