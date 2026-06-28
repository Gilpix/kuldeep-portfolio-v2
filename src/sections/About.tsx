/**
 * About.tsx
 * Premium founder/developer introduction section with scroll reveal,
 * image hover motion, animated stats, and interactive focus cards.
 */

import { motion } from "framer-motion";
import { Code2, Layers3, Rocket, ShieldCheck } from "lucide-react";

import profileImage from "../assets/images/about.webp";
import ScrollReveal from "../components/common/ScrollReveal";
import SectionHeading from "../components/common/SectionHeading";
import SectionWrapper from "../components/layout/SectionWrapper";
import { staggerContainer, viewportOnce } from "../utils/animations";

const aboutStats = [
  { value: "7+", label: "Years building software" },
  { value: "20+", label: "Projects across web & CMS" },
  { value: "Full", label: "Frontend, backend & cloud" },
];

const focusAreas = [
  {
    title: "Practical Thinking",
    description:
      "I look beyond screens and code to understand the problem, the users, and how each feature supports real business needs.",
    icon: Rocket,
  },
  {
    title: "Clean Engineering",
    description:
      "I build with structure, reusable components, typed data, clear APIs, and maintainable code that teams can understand later.",
    icon: Code2,
  },
  {
    title: "Scalable Systems",
    description:
      "From CMS workflows to AWS-backed APIs, I focus on systems that can grow without turning messy after the first version.",
    icon: Layers3,
  },
  {
    title: "Reliable Delivery",
    description:
      "I care about testing, deployment, documentation, edge cases, and production behavior, not just how the UI looks locally.",
    icon: ShieldCheck,
  },
];

function About() {
  return (
    <SectionWrapper id="about" className="bg-[var(--section-bg-about)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-24 size-72 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 size-96 rounded-full bg-[var(--color-blue-soft)]/20 blur-3xl" />
      </div>

      <SectionHeading
        label="About Me"
        title="I build software with"
        accent="purpose."
        description="I combine engineering, product thinking, and business understanding to build software that is practical, reliable, and ready to grow."
        align="left"
        size="lg"
      />

      <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal direction="left" className="relative">
          <div className="group relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--color-primary)]/20 blur-2xl transition duration-500 group-hover:bg-[var(--color-primary)]/30 group-active:bg-[var(--color-primary)]/30" />

            <div className="soft-card relative overflow-hidden rounded-[2rem] p-4">
              <div className="overflow-hidden rounded-[1.5rem]">
                <motion.img
                  src={profileImage}
                  alt="Kuldeep Singh"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="h-[340px] sm:h-[420px] w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-[var(--color-primary)]/50 bg-[var(--color-card)] p-4 text-[var(--color-text)] shadow-2xl backdrop-blur-3xl transition duration-300 group-hover:border-[var(--color-primary)] group-active:border-[var(--color-primary)]">
                <p className="text-sm font-bold text-[var(--color-primary)]">
                  Founder mindset. Developer execution.
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                  Building business applications, CMS platforms, and custom web
                  solutions with modern full-stack technologies.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-8">
            <div className="space-y-5">
              <h3 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Full Stack Developer focused on solving real business problems.
              </h3>

              <p className="text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
                I’m a Full Stack Developer with experience building business
                applications, CMS platforms, legal-tech systems, workflow
                automation tools, cloud APIs, and production-ready web
                solutions.
              </p>

              <p className="text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
                My work focuses on translating real business requirements into
                reliable software using React, TypeScript, Node.js, databases,
                AWS services, and clean deployment workflows.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid gap-4 sm:grid-cols-3"
            >
              {aboutStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="glass-card group rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:!bg-[var(--color-blue-soft)] active:scale-[0.98] active:-translate-y-1 active:border-[var(--color-primary)] active:!bg-[var(--color-blue-soft)]"
                >
                  <p className="text-3xl font-black text-[var(--color-primary)] transition duration-300">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)] transition duration-300 group-hover:text-[var(--color-text)] group-active:text-[var(--color-text)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        {focusAreas.map((area) => {
          const Icon = area.icon;

          return (
            <motion.article
              whileTap={{ scale: 0.98 }}
              key={area.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="glass-card group relative overflow-hidden rounded-[2rem] p-6 transition duration-500 hover:-translate-y-1 hover:border-[var(--color-primary)] active:scale-[0.98] active:-translate-y-1 active:border-[var(--color-primary)]"
            >
              <div
                className="absolute left-6 top-6 size-14 rounded-2xl bg-[var(--color-primary)] transition-all duration-500 group-hover:left-0
                  group-hover:top-0
                  group-hover:size-full
                  group-hover:rounded-[2rem]

                  group-active:left-0
                  group-active:top-0
                  group-active:size-full
                  group-active:rounded-[2rem]"
              />

              <div className="relative z-10">
                <div className="mb-5 inline-flex size-12 sm:size-14 items-center justify-center rounded-2xl text-[var(--color-black)] transition duration-500 group-hover:scale-110 group-active:scale-110">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text)] transition duration-300 group-hover:text-[var(--color-black)] group-active:text-[var(--color-black)]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)] transition duration-300 group-hover:text-[var(--color-black)] group-active:text-[var(--color-black)]">
                  {area.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

export default About;
