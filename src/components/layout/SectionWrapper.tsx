/**
 * SectionWrapper.tsx
 * Global section layout wrapper.
 * Keeps spacing, background, and container behavior consistent.
 */

import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

function SectionWrapper({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden px-4 sm:px-6 lg:px-12 ${className}`}
    >
      <div className={`section-container relative ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;