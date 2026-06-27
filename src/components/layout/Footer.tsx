/**
 * Footer.tsx
 * Full-width editorial premium portfolio footer.
 */

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  {
    label: "Resume",
    mobileLabel: "Open Resume",
    href: "/assets/resume/Kuldeep-Singh-Resume.pdf",
    external: true,
    icon: ArrowUpRight,
  },
  {
    label: "Projects",
    mobileLabel: "Explore Projects",
    href: "#projects",
    external: false,
    icon: ArrowUpRight,
  },
  {
    label: "Email",
    mobileLabel: "Start via Email",
    href: "mailto:kulsinggh@gmail.com?subject=Portfolio Inquiry",
    external: true,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    mobileLabel: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/kulsinggh/",
    external: true,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    mobileLabel: "View GitHub",
    href: "https://github.com/Gilpix",
    external: true,
    icon: FaGithub,
  },
];

const techPills = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "AWS",
  "APIs",
  "CMS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Redux",
  "Cloud",
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#020617] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/70 to-transparent" />
        <div className="absolute -left-40 top-20 size-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-40 -top-20 size-[34rem] rounded-full bg-[var(--color-primary)]/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-black/45 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-6 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-14 lg:pb-24 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.36em] text-[var(--color-primary)] sm:tracking-[0.45em]">
              <span className="hidden sm:inline">
                Full Stack Developer · Founder & CEO
              </span>
              <span className="sm:hidden">Code → Leadership</span>
            </p>

            <h2 className="mt-6 whitespace-nowrap text-[clamp(2.65rem,11.5vw,8.5rem)] font-black leading-[0.9] tracking-tight text-white">
              Kuldeep Singh
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Turning product ideas into polished, scalable web experiences —
              from interface to infrastructure.
            </p>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="w-full max-w-md lg:max-w-xs">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-slate-500">
                Quick Actions
              </p>

              {footerLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between border-b border-white/10 py-3.5 text-sm font-black text-slate-300 transition duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] sm:py-4"
                  >
                    <span>
                      <span className="hidden lg:inline">{link.label}</span>
                      <span className="lg:hidden">{link.mobileLabel}</span>
                    </span>

                    <Icon
                      size={16}
                      className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-[var(--color-primary)]"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
        <div className="relative mt-8 sm:mt-12 lg:mt-14">
          <div className="relative min-h-[100px] overflow-visible sm:min-h-[330px]">
            <p className="pointer-events-none absolute bottom-8 left-1/2 z-0 w-full -translate-x-1/2 select-none text-center text-[18vw] font-black leading-none tracking-[-0.08em] text-white/[0.035] sm:bottom-8 sm:text-[17vw]">
              PORTFOLIO
            </p>

            <div className="absolute inset-x-0 bottom-0 z-20 hidden h-[145px] sm:block">
              {techPills.map((pill, index) => (
                <motion.span
                  key={pill}
                  drag
                  dragMomentum={false}
                  dragElastic={0}
                  dragTransition={{
                    power: 0,
                    timeConstant: 0,
                  }}
                  initial={{
                    y: -260,
                    rotate: index % 2 === 0 ? -22 : 22,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: [-260, 118 + (index % 4) * 4, 100 + (index % 4) * 4],
                    rotate: index % 2 === 0 ? [-22, 10, -6] : [22, -10, 7],
                    opacity: [0, 1, 1],
                  }}
                  transition={{
                    duration: 1.35,
                    delay: index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.45 }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                    cursor: "grab",
                  }}
                  whileDrag={{
                    scale: 1.1,
                    zIndex: 50,
                    cursor: "grabbing",
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                  }}
                  className="absolute rounded-full border border-white/10 bg-[#020617]/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500 shadow-xl backdrop-blur-xl transition"
                  style={{
                    left: `${3 + ((index * 8.2) % 86)}%`,
                    bottom: 0,
                  }}
                >
                  {pill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-0 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Kuldeep Singh</p>
            <p className="sm:text-right">Built with React, TS & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
