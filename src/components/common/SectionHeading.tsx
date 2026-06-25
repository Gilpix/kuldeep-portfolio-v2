/**
 * SectionHeading.tsx
 * Premium reusable heading for every section.
 * Includes animated label dot, heading sweep, accent underline,
 * flexible alignment, size, and description support.
 */

import { motion } from "framer-motion";

import { fadeUp, viewportOnce } from "../../utils/animations";

type HeadingAlign = "left" | "center" | "right";
type HeadingSize = "sm" | "md" | "lg";

interface SectionHeadingProps {
  label: string;
  title: string;
  accent?: string;
  description?: string;
  align?: HeadingAlign;
  size?: HeadingSize;
}

const alignClasses: Record<HeadingAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center mx-auto",
  right: "items-end text-right ml-auto",
};

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-3xl sm:text-4xl",
  md: "text-4xl sm:text-5xl lg:text-6xl",
  lg: "text-5xl sm:text-6xl lg:text-7xl",
};

function SectionHeading({
  label,
  title,
  accent,
  description,
  align = "center",
  size = "md",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-4xl flex-col ${alignClasses[align]}`}
    >
      <motion.div
        variants={fadeUp}
        className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--color-card-border)] bg-[var(--color-glass)] px-4 py-2 backdrop-blur"
      >
        <span className="section-kicker-dot size-2 rounded-full bg-[var(--color-primary)]" />

        <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">
          {label}
        </span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        whileInView="visible"
        viewport={viewportOnce}
        className={`pb-3 font-extrabold leading-[1.05] tracking-[-0.055em] ${sizeClasses[size]}`}
      >
        <span className="heading-sweep heading-sweep-active">{title}</span>

        {accent && (
          <>
            {" "}
            <span className="accent-underline accent-underline-active">
              <span className="gradient-text">{accent}</span>
            </span>
          </>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeading;