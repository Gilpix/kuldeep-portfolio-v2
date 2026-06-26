/**
 * ProjectCard.tsx
 * Reusable project preview card.
 */

import { ExternalLink } from "lucide-react";

import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

function ProjectCard({
  project,
  onSelect,
  featured = false,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className={`glass-card group relative w-full overflow-hidden rounded-[2rem] text-left transition duration-500 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card-strong)] ${
        featured ? "p-4 sm:p-5" : "p-4"
      }`}
    >
      <div className="absolute right-0 top-0 size-28 rounded-bl-full bg-[var(--color-primary)]/10 transition duration-500 group-hover:bg-[var(--color-primary)]/20" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-glass)]">
        <img
          src={`/assets/projects/${project.image}`}
          alt={project.title}
          className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
            featured ? "h-64" : "h-44"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
            {project.category}
          </span>

          <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-black)] transition duration-300 group-hover:scale-110">
            <ExternalLink size={17} />
          </span>
        </div>
      </div>

      <div className="relative mt-5">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {project.role}
        </p>

        <h3 className="mt-2 text-2xl font-black tracking-tight text-[var(--color-text)]">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
          {project.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-card-border)] bg-[var(--color-glass)] px-3 py-1 text-xs font-semibold text-[var(--color-text-soft)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
