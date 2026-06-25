/**
 * Experience.tsx
 * Premium sticky timeline experience section.
 * Desktop: sticky active role on the left, aligned timeline dots,
 * center-based active detection, and scrolling details on the right.
 */

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import SectionHeading from "../components/common/SectionHeading";
import SectionWrapper from "../components/layout/SectionWrapper";
import { experiences } from "../data/experience";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";

function getCompanyName(company: string) {
  return company === "BRILCS" ? "BRIL Consultancy Services" : company;
}

function getPeriod(company: string, period: string) {
  return company === "BRILCS" ? "Nov 2025 - Present" : period;
}

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const activeExperience = experiences[activeIndex];

  useEffect(() => {
    const updateActiveCard = () => {
      const viewportCenter = window.innerHeight * 0.52;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveCard();

    window.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      window.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  return (
    <SectionWrapper
      id="experience"
      className="bg-[var(--section-bg-experience)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-12 top-24 size-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[var(--color-blue-soft)]/20 blur-3xl" />
      </div>

      <SectionHeading
        label="Experience"
        title="From code to"
        accent="leadership."
        description="A timeline of product work, engineering ownership, cloud systems, and business-focused technical leadership."
        align="left"
        size="lg"
      />

      <div className="mt-16 hidden lg:grid lg:grid-cols-[0.36fr_1fr] lg:gap-10">
        <aside className="relative">
          <div className="sticky top-28">
            <motion.div
              key={`${activeExperience.company}-${activeExperience.period}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative pr-4"
            >
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--color-primary)]">
                {activeIndex === 0 ? "Current Role" : "Previous Role"}
              </p>

              <h3 className="mt-5 text-5xl font-black leading-none tracking-[-0.06em] text-[var(--color-text)]">
                {getCompanyName(activeExperience.company)}
              </h3>

              <p className="mt-4 text-xl font-black text-[var(--color-primary)]">
                {activeExperience.role}
              </p>

              <div className="mt-6 space-y-3 text-sm font-medium text-[var(--color-text-soft)]">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={16}
                    className="text-[var(--color-primary)]"
                  />
                  <span>
                    {getPeriod(
                      activeExperience.company,
                      activeExperience.period,
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[var(--color-primary)]" />
                  <span>{activeExperience.location}</span>
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-[var(--color-primary)] to-transparent" />

              <div className="mt-8 space-y-4">
                {experiences.map((experience, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={`${experience.company}-${experience.period}-nav`}
                      type="button"
                      onClick={() => {
                        setActiveIndex(index);
                        cardRefs.current[index]?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                      className="block w-full text-left"
                    >
                      <div
                        className={`transition duration-300 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-40 hover:opacity-75"
                        }`}
                      >
                        <p
                          className={`text-sm font-black ${
                            isActive
                              ? "text-[var(--color-primary)]"
                              : "text-[var(--color-text-soft)]"
                          }`}
                        >
                          {getPeriod(experience.company, experience.period)}
                        </p>

                        <p className="mt-1 text-base font-bold text-[var(--color-text)]">
                          {getCompanyName(experience.company)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </aside>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px overflow-hidden bg-[var(--color-card-border)]">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                animate={{ top: ["-8rem", "100%"] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: item * 1,
                }}
                className="absolute left-0 h-32 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent"
              />
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-16"
          >
            {experiences.map((experience, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.article
                  key={`${experience.company}-${experience.period}`}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  variants={fadeUp}
                  className="group relative grid min-h-[24rem] grid-cols-[3rem_1fr] gap-8"
                >
                  <div className="relative flex justify-center">
                    <div
                      className={`sticky top-[48vh] z-10 size-5 rounded-full border-4 border-[var(--section-bg-page)] transition duration-300 ${
                        isActive
                          ? "scale-125 bg-[var(--color-primary)] shadow-[0_0_0_10px_rgba(244,180,0,0.13),0_0_30px_rgba(244,180,0,0.45)]"
                          : "bg-[var(--color-card-border)]"
                      }`}
                    />
                  </div>

                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.42,
                      scale: isActive ? 1 : 0.965,
                      filter: isActive
                        ? "blur(0px) saturate(1)"
                        : "blur(0.2px) saturate(0.72)",
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={`glass-card relative overflow-hidden rounded-[2rem] p-7 transition duration-500 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card-strong)] ${
                      isActive
                        ? "border-[var(--color-primary)]/45 shadow-[var(--shadow-card-strong)]"
                        : ""
                    }`}
                  >
                    <div className="absolute right-0 top-0 size-36 rounded-bl-full bg-[var(--color-primary)]/10 transition duration-500 group-hover:bg-[var(--color-primary)]/20" />

                    <div className="relative">
                      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">
                        <span className="size-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_14px_rgba(244,180,0,0.85)]" />
                        {index === 0 ? "Live" : `Chapter ${index + 1}`}
                      </div>

                      <h3 className="text-3xl font-black tracking-tight text-[var(--color-text)]">
                        {getCompanyName(experience.company)}
                      </h3>

                      <p className="mt-2 text-base font-bold text-[var(--color-primary)]">
                        {experience.role}
                      </p>

                      <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
                        {experience.description}
                      </p>

                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="mt-7 grid gap-3"
                      >
                        {experience.highlights.map((highlight) => (
                          <motion.div
                            key={highlight}
                            variants={fadeUp}
                            className="flex gap-3 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-glass)] p-4 transition duration-300 group-hover:border-[var(--color-primary)]/40"
                          >
                            <span className="mt-2 text-[var(--color-primary)]">
                              ↗
                            </span>
                            <p className="text-sm leading-7 text-[var(--color-text-soft)]">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>

                      <div className="mt-7">
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--color-primary)]">
                          Technology Stack
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-[var(--color-card-border)] bg-[var(--color-glass)] px-3 py-1 text-xs font-semibold text-[var(--color-text-soft)] transition duration-300 hover:scale-105 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-black)]"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="mt-16 space-y-6 lg:hidden">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}-mobile`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            whileTap={{ scale: 0.98 }}
            className="glass-card group rounded-[2rem] p-6 transition duration-300 active:border-[var(--color-primary)] active:bg-[var(--color-primary)]/10"
          >
            <div className="mb-4 inline-flex rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {index === 0 ? "Current" : `Chapter ${index + 1}`}
            </div>

            <h3 className="text-2xl font-black text-[var(--color-text)]">
              {getCompanyName(experience.company)}
            </h3>

            <p className="mt-2 font-bold text-[var(--color-primary)]">
              {experience.role}
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--color-text-soft)]">
              <span className="inline-flex items-center gap-2">
                <CalendarDays
                  size={15}
                  className="text-[var(--color-primary)]"
                />
                {getPeriod(experience.company, experience.period)}
              </span>

              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-[var(--color-primary)]" />
                {experience.location}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-[var(--color-text-soft)]">
              {experience.description}
            </p>

            <div className="mt-5 grid gap-3">
              {experience.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-glass)] p-3 transition duration-300 active:border-[var(--color-primary)]"
                >
                  <span className="mt-1 text-[var(--color-primary)]">↗</span>
                  <p className="text-sm leading-6 text-[var(--color-text-soft)]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[var(--color-card-border)] bg-[var(--color-glass)] px-3 py-1 text-xs font-semibold text-[var(--color-text-soft)] transition duration-300 active:border-[var(--color-primary)] active:bg-[var(--color-primary)] active:text-[var(--color-black)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Experience;
