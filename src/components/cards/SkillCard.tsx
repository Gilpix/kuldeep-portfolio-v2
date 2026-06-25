/**
 * SkillCard.tsx
 * Reusable animated card for one technical skill group.
 */

import { motion } from "framer-motion";

import type { SkillGroup } from "../../types/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";

interface SkillCardProps {
  skillGroup: SkillGroup;
}

function SkillCard({ skillGroup }: SkillCardProps) {
  const Icon = skillGroup.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="glass-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)]"
    >
      <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-[var(--color-black)]">
        <Icon size={25} strokeWidth={1.8} />
      </div>

      <h3 className="text-xl font-bold text-white">{skillGroup.title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {skillGroup.description}
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-6 flex flex-wrap gap-2"
      >
        {skillGroup.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={fadeUp}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 transition group-hover:border-[var(--color-primary)]/50"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.article>
  );
}

export default SkillCard;