/**
 * ProjectModal.tsx
 * Project detail modal.
 */

import { ExternalLink, Code2, X } from "lucide-react";

import type { Project } from "../../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close project modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="glass-card relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] p-4 shadow-2xl sm:p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex size-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-[var(--color-primary)] hover:text-[var(--color-black)]"
        >
          <X size={20} />
        </button>

        <div className="overflow-hidden rounded-[1.5rem] border border-[var(--color-card-border)]">
          <img
            src={`/assets/projects/${project.image}`}
            alt={project.title}
            className="h-72 w-full object-cover"
          />
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">
              {project.role}
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[var(--color-text)]">
              {project.title}
            </h2>

            <p className="mt-3 text-lg font-bold text-[var(--color-primary)]">
              {project.subtitle}
            </p>

            <p className="mt-5 text-sm leading-8 text-[var(--color-text-soft)]">
              {project.overview}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-[var(--color-black)] transition hover:-translate-y-0.5"
                >
                  {link.type === "code" ? (
                    <Code2 size={17} />
                  ) : (
                    <ExternalLink size={17} />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-glass)] p-5">
              <h3 className="text-lg font-black text-[var(--color-text)]">
                Key Contributions
              </h3>

              <div className="mt-4 grid gap-3">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3">
                    <span className="mt-1 text-[var(--color-primary)]">↗</span>
                    <p className="text-sm leading-6 text-[var(--color-text-soft)]">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-glass)] p-5">
              <h3 className="text-lg font-black text-[var(--color-text)]">
                Technologies
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-card-border)] bg-[var(--color-glass)] px-3 py-1 text-xs font-semibold text-[var(--color-text-soft)]"
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
  );
}

export default ProjectModal;
