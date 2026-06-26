/**
 * Projects.tsx
 * Premium project section with three internal layouts:
 * 1. Featured Projects
 * 2. Professional Projects
 * 3. Engineering Archive
 */

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import SectionHeading from "../components/common/SectionHeading";
import SectionWrapper from "../components/layout/SectionWrapper";
import ProjectModal from "../components/projects/ProjectModal";
import { projects, type Project } from "../data/projects";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";
import {
  BadgeCheck,
  Box,
  ChartNoAxesCombined,
  CloudDownload,
  Globe2,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

const featuredIds = ["tp3-cms", "brilcs-website"];
const professionalIds = ["brilcs-cms", "udaan-fc", "piknix"];
const archivePreviewCount = 4;

const archiveTabs = [
  { label: "Mobile Apps", value: "mobile" },
  { label: "Web Apps", value: "web" },
  { label: "UI & Learning", value: "learning" },
] as const;

type ArchiveTab = (typeof archiveTabs)[number]["value"];

function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeArchiveTab, setActiveArchiveTab] =
    useState<ArchiveTab>("mobile");
  const [showAllArchive, setShowAllArchive] = useState(false);

  const featuredProjects = featuredIds
    .map(getProjectById)
    .filter(Boolean) as Project[];

  const professionalProjects = professionalIds
    .map(getProjectById)
    .filter(Boolean) as Project[];

  const archiveProjects = useMemo(() => {
    const hiddenIds = new Set([
      ...featuredIds,
      ...professionalIds,
      "sani-amigo",
    ]);

    return projects.filter((project) => !hiddenIds.has(project.id));
  }, []);

  const filteredArchiveProjects = archiveProjects.filter((project) => {
    if (activeArchiveTab === "mobile") return project.category === "mobile";

    if (activeArchiveTab === "web") {
      return (
        project.category === "web" &&
        !["reactmania", "yelpcamp", "color-guess", "my-portfolio"].includes(
          project.id,
        )
      );
    }

    return (
      project.category === "design" ||
      ["reactmania", "yelpcamp", "color-guess", "my-portfolio"].includes(
        project.id,
      )
    );
  });

  const visibleArchiveProjects = showAllArchive
    ? filteredArchiveProjects
    : filteredArchiveProjects.slice(0, archivePreviewCount);

  const hasMoreArchive = filteredArchiveProjects.length > archivePreviewCount;

  return (
    <SectionWrapper id="projects" className="bg-[var(--section-bg-projects)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-24 size-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[var(--color-blue-soft)]/20 blur-3xl" />
      </div>

      <SectionHeading
        label="Projects"
        title="Proof of"
        accent="execution."
        description="Selected work across enterprise CMS platforms, production websites, professional products, and the engineering journey that shaped my full-stack foundation."
        align="center"
        size="lg"
      />

      {/* ================= FEATURED PROJECTS ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16"
      >
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--color-primary)]">
            Featured Projects
          </p>

          <h3 className="mt-2 text-3xl font-black tracking-tight text-[var(--color-text)]">
            Enterprise scale and premium execution.
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => {
            const isWebsite = project.id === "brilcs-website";

            const metrics = isWebsite
              ? [
                  {
                    value: "Live",
                    label: "Website",
                    icon: Globe2,
                    color: "text-green-400",
                  },
                  {
                    value: "SEO",
                    label: "Ready",
                    icon: ChartNoAxesCombined,
                    color: "text-orange-400",
                  },
                  {
                    value: "CMS",
                    label: "Integrated",
                    icon: Box,
                    color: "text-purple-400",
                  },
                ]
              : [
                  {
                    value: "1M+",
                    label: "App Downloads",
                    icon: CloudDownload,
                    color: "text-[var(--color-primary)]",
                  },
                  {
                    value: "CMS",
                    label: "Platform",
                    icon: BadgeCheck,
                    color: "text-sky-400",
                  },
                  {
                    value: "Team",
                    label: "Product",
                    icon: Box,
                    color: "text-purple-400",
                  },
                ];

            return (
              <motion.button
                key={project.id}
                variants={fadeUp}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#060a16] p-0 text-left shadow-[0_30px_100px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card-strong)] sm:rounded-[2rem]"
              >
                <div className="relative overflow-hidden rounded-[1.35rem] bg-[#050814] px-2 pt-8 sm:rounded-[1.7rem] sm:px-3 sm:pt-10 lg:pt-12">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[24rem] w-full rounded-t-[1rem] object-contain object-top transition duration-700 group-hover:scale-[1.015] sm:h-[29rem] lg:h-[28rem]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/42 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#050814] via-[#050814]/88 to-transparent" />

                  <div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[0.58rem] font-black uppercase tracking-[0.1em] backdrop-blur-xl sm:px-3 sm:py-1.5 sm:text-[0.68rem] ${
                        isWebsite
                          ? "border-[var(--color-primary)]/70 bg-black/25 text-[var(--color-primary)]"
                          : "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-black)]"
                      }`}
                    >
                      {project.badge ?? "Featured Project"}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 sm:px-6 sm:pb-6">
                    <h3 className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-xs leading-5 text-slate-200 sm:mt-3 sm:text-base sm:leading-6">
                      {project.subtitle}
                    </p>

                    <div className="mt-4 h-px w-full bg-white/16 sm:mt-7" />

                    <div className="mt-4 grid grid-cols-3 gap-1 sm:mt-6 sm:gap-2">
                      {metrics.map((metric, index) => {
                        const Icon = metric.icon;

                        return (
                          <motion.div
                            key={`${project.id}-${metric.label}`}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            className={`flex min-w-0 items-center gap-1.5 px-1 sm:gap-3 sm:px-2 ${
                              index !== metrics.length - 1
                                ? "border-r border-white/14"
                                : ""
                            }`}
                          >
                            <Icon
                              size={20}
                              strokeWidth={1.9}
                              className={`${metric.color} shrink-0 sm:size-7`}
                            />

                            <div className="min-w-0">
                              <p
                                className={`text-base font-black leading-none sm:text-2xl ${metric.color}`}
                              >
                                {metric.value}
                              </p>

                              <p className="mt-1 text-[0.48rem] font-black uppercase tracking-[0.08em] text-slate-300 sm:mt-2 sm:text-[0.65rem] sm:tracking-[0.14em]">
                                {metric.label}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* ================= PROFESSIONAL PROJECTS ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-20"
      >
        <div className="mb-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--color-primary)]">
            Professional Projects
          </p>

          <h3 className="mt-2 text-3xl font-black tracking-tight text-[var(--color-text)]">
            Business-focused products and client work.
          </h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {professionalProjects.map((project) => (
            <motion.button
              key={project.id}
              variants={fadeUp}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] text-left shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card-strong)]"
            >
              <div className="px-2 pt-2 sm:px-3 sm:pt-3">
                <div className="relative h-44 overflow-hidden rounded-t-[1.35rem] bg-[#090d1c] sm:h-52 lg:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/85 via-[#050814]/25 to-transparent" />

                  {/* <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl sm:text-[11px]">
                    {project.badge ?? "Professional"}
                  </span> */}
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                <h3 className="text-2xl font-black tracking-tight text-[var(--color-text)] transition-all duration-300 group-hover:text-[var(--color-primary)]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
                  {project.subtitle}
                </p>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {project.technologies.slice(0, 5).map((tech) => (
                    <motion.span
                      key={tech}
                      variants={fadeUp}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[var(--color-primary)] transition duration-300 group-hover:gap-3">
                  View details <ExternalLink size={16} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
      {/* ================= ENGINEERING ARCHIVE ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-20"
      >
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--color-primary)]">
              Engineering Archive
            </p>
            <h3 className="mt-2 text-3xl font-black tracking-tight text-[var(--color-text)]">
              Earlier builds, prototypes, and learning projects.
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {archiveTabs.map((tab) => {
              const isActive = activeArchiveTab === tab.value;

              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => {
                    setActiveArchiveTab(tab.value);
                    setShowAllArchive(false);
                  }}
                  className={`rounded-full border px-5 py-2 text-sm font-bold transition duration-300 ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-black)]"
                      : "border-[var(--color-card-border)] bg-[var(--color-glass)] text-[var(--color-text-soft)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={`${activeArchiveTab}-${showAllArchive}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {visibleArchiveProjects.map((project) => (
            <motion.button
              key={project.id}
              variants={fadeUp}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group overflow-hidden rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)] text-left shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-4">
                <h4 className="text-base font-black text-[var(--color-text)] transition duration-300 group-hover:text-[var(--color-primary)]">
                  {project.title}
                </h4>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-[var(--color-text-soft)]">
                  {project.subtitle}
                </p>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mt-3 flex flex-wrap gap-1.5"
                >
                  {project.technologies.slice(0, 3).map((tech) => (
                    <motion.span
                      key={tech}
                      variants={fadeUp}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full border border-[var(--color-card-border)] px-2 py-0.5 text-[0.65rem] font-bold text-[var(--color-text-soft)] transition duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-black)]"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {hasMoreArchive && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllArchive((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-card-border)] bg-[var(--color-glass)] px-5 py-3 text-sm font-bold text-[var(--color-text)] transition duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              {showAllArchive ? "Show less" : "View all projects in archive"}
              <ChevronDown
                size={17}
                className={`transition duration-300 ${
                  showAllArchive ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  );
}

export default Projects;
