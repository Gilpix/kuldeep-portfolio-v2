/**
 * ProjectModal.tsx
 * Premium project detail modal with image carousel, dynamic links,
 * contributions, and technologies.
 */

import {
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import type { Project } from "../../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function getLinkIcon(type: string) {
  if (type === "code") return Code2;
  if (type === "document") return FileText;
  return ExternalLink;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const images = project.images?.length ? project.images : [project.image];
  const activeImage = images[activeImageIndex];
  const hasMultipleImages = images.length > 1;

  const goToPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const goToNextImage = () => {
    setActiveImageIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close project modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#070b18] shadow-[0_40px_160px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.04)]">
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-4 top-4 z-40 flex size-11 items-center justify-center rounded-full border border-white/15 bg-[#050814]/90 text-white shadow-2xl backdrop-blur-xl transition hover:bg-[var(--color-primary)] hover:text-[var(--color-black)]"
        >
          <X size={21} />
        </button>

        <div className="max-h-[90vh] overflow-y-auto p-4 sm:p-6 lg:p-7">
          <div className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr]">
            {/* ================= LEFT: IMAGE + DETAILS ================= */}
            <div>
              <div className="relative overflow-hidden rounded-[01rem] border border-white/10 bg-[#050814] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                <img
                  src={activeImage}
                  alt={project.title}
                  className="h-56 w-full object-cover object-top sm:h-72 lg:h-[22rem]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

                {hasMultipleImages && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={goToPreviousImage}
                      className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-xl transition hover:bg-[var(--color-primary)] hover:text-[var(--color-black)]"
                    >
                      <ChevronLeft size={22} />
                    </button>

                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={goToNextImage}
                      className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-xl transition hover:bg-[var(--color-primary)] hover:text-[var(--color-black)]"
                    >
                      <ChevronRight size={22} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-xl">
                      {images.map((image, index) => (
                        <button
                          key={`${image}-${index}`}
                          type="button"
                          aria-label={`Show image ${index + 1}`}
                          onClick={() => setActiveImageIndex(index)}
                          className={`size-2.5 rounded-full transition ${
                            activeImageIndex === index
                              ? "w-6 bg-[var(--color-primary)]"
                              : "bg-white/35 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="absolute right-4 bottom-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl">
                      {activeImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--color-primary)]">
                  {project.role}
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-3 text-base font-bold text-[var(--color-primary)]">
                  {project.subtitle}
                </p>

                <p className="mt-5 text-sm leading-8 text-slate-300">
                  {project.overview}
                </p>

                {project.links.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.links.map((link) => {
                      const Icon = getLinkIcon(link.type);

                      return (
                        <a
                          key={`${link.label}-${link.url}`}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-[var(--color-black)] shadow-[0_12px_35px_rgba(244,180,0,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(244,180,0,0.3)]"
                        >
                          <Icon size={17} />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* ================= RIGHT: CONTRIBUTIONS + TECH ================= */}
            <div className="space-y-5 lg:pr-12">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <h3 className="text-lg font-black text-white">
                  Key Contributions
                </h3>

                <div className="mt-4 grid gap-4">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3">
                      <span className="mt-1 shrink-0 text-[var(--color-primary)]">
                        ↗
                      </span>
                      <p className="text-sm leading-6 text-slate-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <h3 className="text-lg font-black text-white">Technologies</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300 transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-black)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
