/**
 * Skills.tsx
 * Premium skills section with desktop orbit hover linking,
 * mobile-safe 360 hub, and clean expertise cards.
 */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import SectionHeading from "../components/common/SectionHeading";
import SectionWrapper from "../components/layout/SectionWrapper";
import { skillCategories, skillStats } from "../data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";

const accentMap = {
  yellow: "#f4b400",
  blue: "#38bdf8",
  purple: "#c084fc",
  green: "#34d399",
};

const orbitPositions = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-[38%]",
  "right-[16%] bottom-[9%]",
  "left-[16%] bottom-[9%]",
  "left-0 top-[38%]",
];

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [mobileSkill, setMobileSkill] = useState(0);

  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [selectedStat, setSelectedStat] = useState<number | null>(null);

  const mobileCategory = skillCategories[mobileSkill];
  const MobileIcon = mobileCategory.icon;
  const mobileAccent = accentMap[mobileCategory.accent];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMobileSkill((current) => (current + 1) % skillCategories.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <SectionWrapper id="skills" className="bg-[var(--section-bg-skills)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-24 size-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 size-96 rounded-full bg-[var(--color-blue-soft)]/20 blur-3xl" />
      </div>

      <SectionHeading
        label="Skills"
        title="My engineering"
        accent="universe."
        description="A complete ecosystem of technologies, tools, and mindsets I use to build scalable products."
        align="center"
        size="lg"
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative lg:sticky lg:top-24 lg:self-start"
        >
          {/* <div className="relative mx-auto min-h-[760px] max-w-[580px] sm:min-h-[620px]"> */}
          <div className="relative mx-auto min-h-[560px] max-w-[580px] sm:min-h-[620px]">
            <div className="absolute left-1/2 top-[30%] size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--color-primary)]/30 sm:size-[420px] lg:top-[40%]" />
            <div className="absolute left-1/2 top-[30%] size-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-card-border)] sm:size-[310px] lg:top-[40%]" />
            <div className="absolute left-1/2 top-[30%] size-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-primary)]/30 sm:size-[210px] lg:top-[40%]" />

            <motion.div
              animate={{
                opacity: [0.25, 0.7, 0.25],
                scale: [0.94, 1.05, 0.94],
              }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[30%] size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/15 blur-xl sm:size-48 lg:top-[40%]"
            />

            {/* Desktop orbit nodes only */}
            <div className="absolute left-1/2 top-[40%] hidden size-[500px] -translate-x-1/2 -translate-y-1/2 sm:block">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                const accent = accentMap[category.accent];
                const isActive = hoveredSkill === index;

                return (
                  <motion.button
                    key={category.title}
                    type="button"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onFocus={() => setHoveredSkill(index)}
                    onBlur={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(index)}
                    initial={{ opacity: 0, scale: 0.82 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    whileHover={{ scale: 1.1, y: -7 }}
                    whileTap={{ scale: 0.96 }}
                    className={`absolute ${orbitPositions[index]} group w-32 text-center`}
                    style={{ "--skill-accent": accent } as React.CSSProperties}
                  >
                    <div
                      className={`mx-auto flex size-14 items-center justify-center rounded-full border border-[var(--skill-accent)] text-[var(--skill-accent)] backdrop-blur-xl transition duration-300 group-hover:bg-[var(--skill-accent)] group-hover:text-[var(--color-black)] ${
                        isActive
                          ? "bg-[var(--skill-accent)] text-[var(--color-black)] shadow-[0_0_44px_color-mix(in_srgb,var(--skill-accent)_55%,transparent)]"
                          : "bg-[color-mix(in_srgb,var(--skill-accent)_14%,transparent)] shadow-[0_0_28px_color-mix(in_srgb,var(--skill-accent)_35%,transparent)]"
                      }`}
                    >
                      <Icon size={25} strokeWidth={1.9} />
                    </div>

                    <div
                      className={`mt-3 rounded-2xl border bg-[var(--color-glass)] px-3 py-2 backdrop-blur-xl transition duration-300 ${
                        isActive
                          ? "border-[var(--skill-accent)]"
                          : "border-[var(--color-card-border)] group-hover:border-[var(--skill-accent)]"
                      }`}
                    >
                      <p className="text-[0.72rem] font-black leading-5 text-[var(--color-text)]">
                        {category.title}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Center hub */}
            <motion.div
              key={mobileCategory.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute left-1/2 top-[30%] z-10 flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border bg-[var(--color-glass)] text-center backdrop-blur-xl sm:top-[40%] sm:size-40"
              style={{
                borderColor: mobileAccent,
                boxShadow: `0 0 80px ${mobileAccent}35`,
              }}
            >
              <MobileIcon
                size={28}
                strokeWidth={1.8}
                style={{ color: mobileAccent }}
              />

              <p
                className="mt-2 text-3xl font-black"
                style={{ color: mobileAccent }}
              >
                360°
              </p>

              <motion.p
                key={mobileCategory.title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="mt-1 max-w-28 text-[0.62rem] font-black uppercase tracking-[0.18em] text-[var(--color-text-soft)]"
              >
                {mobileCategory.title}
              </motion.p>
            </motion.div>

            <div className="absolute left-0 right-0 top-[62%] grid grid-cols-2 gap-3 sm:top-auto sm:bottom-0 sm:grid-cols-4">
              {skillStats.map((stat, index) => {
                const isSelectedStat = selectedStat === index;
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.97, y: -4 }}
                    onClick={() => setSelectedStat(index)}
                    className={`rounded-2xl border bg-[var(--color-glass)] p-4 text-center backdrop-blur-xl transition duration-300 hover:border-[var(--color-primary)] active:border-[var(--color-primary)] ${
                      isSelectedStat
                        ? "border-[var(--color-primary)] shadow-[var(--shadow-card-strong)]"
                        : "border-[var(--color-card-border)]"
                    }`}
                  >
                    <Icon
                      size={20}
                      className="mx-auto text-[var(--color-primary)]"
                    />
                    <p className="mt-2 text-2xl font-black text-[var(--color-primary)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--color-text-soft)]">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-5"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const accent = accentMap[category.accent];
            const isLinkedHover =
              hoveredSkill === index || selectedSkill === index;

            return (
              <motion.article
                key={category.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97, y: -4 }}
                onClick={() => setSelectedSkill(index)}
                style={{ "--skill-accent": accent } as React.CSSProperties}
                className={`glass-card group relative overflow-hidden rounded-[2rem] p-5 transition duration-500 hover:border-[var(--skill-accent)] hover:shadow-[var(--shadow-card-strong)] active:border-[var(--skill-accent)] active:shadow-[var(--shadow-card-strong)] sm:p-6 ${
                  isLinkedHover
                    ? "border-[var(--skill-accent)] shadow-[var(--shadow-card-strong)]"
                    : ""
                }`}
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-[var(--color-card-border)]">
                  <div
                    className={`h-full bg-[var(--skill-accent)] transition-all duration-700 ${
                      isLinkedHover ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </div>

                <div
                  className={`absolute -right-10 -top-10 size-36 rounded-full bg-[color-mix(in_srgb,var(--skill-accent)_14%,transparent)] transition duration-500 ${
                    isLinkedHover ? "scale-150" : "group-hover:scale-150"
                  }`}
                />

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--skill-accent)] text-[var(--color-black)] shadow-[0_0_34px_color-mix(in_srgb,var(--skill-accent)_35%,transparent)] transition duration-300 ${
                        isLinkedHover
                          ? "scale-110 rotate-3"
                          : "group-hover:scale-110 group-hover:rotate-3"
                      }`}
                    >
                      <Icon size={25} strokeWidth={1.9} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-2xl font-black tracking-tight text-[var(--color-text)]">
                            {category.title}
                          </h3>

                          <p className="mt-1 text-sm font-bold text-[var(--skill-accent)]">
                            {category.subtitle}
                          </p>
                        </div>

                        <span className="w-fit rounded-full border border-[var(--skill-accent)] bg-[color-mix(in_srgb,var(--skill-accent)_12%,transparent)] px-3 py-1 text-xs font-black text-[var(--skill-accent)]">
                          {category.strength}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[var(--color-text-soft)]">
                    {category.description}
                  </p>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={fadeUp}
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full border border-[var(--color-card-border)] bg-[var(--color-glass)] px-3 py-1 text-xs font-semibold text-[var(--color-text-soft)] transition duration-300 hover:border-[var(--skill-accent)] hover:bg-[var(--skill-accent)] hover:text-[var(--color-black)] active:border-[var(--skill-accent)] active:bg-[var(--skill-accent)] active:text-[var(--color-black)]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
