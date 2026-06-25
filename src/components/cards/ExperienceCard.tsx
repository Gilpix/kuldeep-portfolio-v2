/**
 * ExperienceCard.tsx
 * Reusable animated timeline card for one work experience entry.
 */

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import type { Experience } from "../../types/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:border-[var(--color-primary)]"
    >
      {/* Timeline dot connects cards visually without making layout heavy. */}
      <span className="absolute -left-[33px] top-8 hidden size-4 rounded-full border-4 border-[var(--color-dark)] bg-[var(--color-primary)] lg:block" />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{experience.company}</h3>
          <p className="mt-1 font-semibold text-[var(--color-primary)]">
            {experience.role}
          </p>
        </div>

        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
          {experience.period}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
        <MapPin size={16} />
        <span>{experience.location}</span>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">
        {experience.description}
      </p>

      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default ExperienceCard;