/**
 * ScrollReveal.tsx
 * Reusable scroll animation wrapper.
 * Use direction="up | down | left | right | zoom" for section elements.
 */

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
  viewportOnce,
  zoomIn,
} from "../../utils/animations";

type RevealDirection = "up" | "down" | "left" | "right" | "zoom";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
}

const variantsMap = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  zoom: zoomIn,
};

function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variantsMap[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;