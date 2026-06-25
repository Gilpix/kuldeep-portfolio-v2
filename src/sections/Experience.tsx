/**
 * Experience.tsx
 * Premium dark experience section with smooth staggered animations
 * for cards, bullets, and technology tags.
 */

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

import { experiences } from "../data/experience";
import {
  fadeUp,
  smoothTransition,
  staggerContainer,
  viewportOnce,
} from "../utils/animations";

function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-[var(--section-bg-experience)] px-4 text-white sm:px-6 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,180,0,0.16),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.08),transparent_26%)]" />

      <div className="section-container relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={smoothTransition}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-label">Experience</p>

          <h2 className="section-heading text-white">
            Leadership, product thinking, and full-stack engineering.
          </h2>

          <p className="section-subheading text-slate-300">
            From building production systems to leading BRILCS, my work combines
            technical execution with business-focused product decisions.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ ...smoothTransition, delay: index * 0.04 }}
              className="glass-card group relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-white/[0.09]"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[var(--color-primary)]/10 transition group-hover:bg-[var(--color-primary)]/20" />

              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.company}
                  </h3>

                  <p className="mt-2 font-semibold text-[var(--color-primary)]">
                    {experience.role}
                  </p>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200">
                  <CalendarDays size={15} />
                  {experience.period}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={16} className="text-[var(--color-primary)]" />
                <span>{experience.location}</span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                {experience.description}
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-5 space-y-3 text-sm leading-6 text-slate-200"
              >
                {experience.highlights.map((highlight) => (
                  <motion.li
                    key={highlight}
                    variants={fadeUp}
                    transition={smoothTransition}
                    className="flex gap-3"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-6 flex flex-wrap gap-2"
              >
                {experience.technologies.map((technology) => (
                  <motion.span
                    key={technology}
                    variants={fadeUp}
                    transition={smoothTransition}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 transition group-hover:border-[var(--color-primary)]/50"
                  >
                    {technology}
                  </motion.span>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;