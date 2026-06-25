/**
 * Skills.tsx
 * Technical skills section with dark premium styling and smooth
 * staggered animations for skill cards and individual tags.
 */

import { motion } from "framer-motion";

import SkillCard from "../components/cards/SkillCard";
import { skillGroups } from "../data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-[var(--section-bg-skills)] px-4 text-white sm:px-6 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(244,180,0,0.14),transparent_28%),radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="section-container relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-label">Skills</p>

          <h2 className="section-heading text-white">
            Tools and technologies I use to build reliable products.
          </h2>

          <p className="section-subheading text-slate-300">
            A practical stack covering frontend, backend, databases, cloud, and
            production workflows.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {skillGroups.map((skillGroup) => (
            <SkillCard key={skillGroup.title} skillGroup={skillGroup} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;