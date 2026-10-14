import { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  isLast?: boolean;
}

export default function ProjectCard({ project, isLast = false }: ProjectCardProps) {
  const accentClass =
    project.accentColor === "accent-violet"
      ? "text-accent-violet"
      : "text-accent-cyan";

  const accentBorder =
    project.accentColor === "accent-violet"
      ? "border-accent-violet/30"
      : "border-accent-cyan/30";

  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 lg:py-14 group ${
        !isLast ? "border-b border-white/[0.08]" : ""
      }`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Left Column: Metadata, Title, Role, Category & Action Trigger */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        <div className="space-y-3 sm:space-y-4">
          {/* Top badges: Category, Status */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`text-xs font-mono tracking-wider font-medium ${accentClass}`}>
              {project.category}
            </span>
            <span className="text-white/20">·</span>
            <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 bg-surface-2 border ${accentBorder} text-white/90`}>
              {project.status}
            </span>
          </div>

          <h3
            id={`project-title-${project.id}`}
            className="font-display font-semibold text-2xl sm:text-3xl text-white group-hover:text-accent-cyan transition-colors tracking-tight"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm font-sans text-text-secondary leading-normal">
            {project.subtitle}
          </p>

          <div className="pt-1">
            <span className="text-xs font-mono text-text-muted block">
              <span className="text-white/70">Role:</span> {project.role}
            </span>
          </div>
        </div>

        {/* Action Trigger */}
        <div className="pt-2">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm text-white hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan font-medium"
            aria-label={`${project.linkText} for ${project.title}`}
          >
            <span>{project.linkText}</span>
            <span className="text-sm font-mono" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Right Column: Problem, Solution, Key Concept & Tags */}
      <div className="lg:col-span-7 flex flex-col justify-between space-y-5 lg:pl-8 lg:border-l lg:border-white/[0.06]">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 bg-surface-1 border border-white/10 text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Structured Problem & Solution Breakdown */}
        <div className="space-y-3.5">
          {/* Problem */}
          <div className="p-4 bg-surface-1/40 border border-white/[0.06] space-y-1">
            <span className="text-xs font-mono text-text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" aria-hidden="true" />
              The Problem
            </span>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          {/* Technical Approach & Implementation */}
          <div className="p-4 bg-surface-1/40 border border-white/[0.06] space-y-1">
            <span className="text-xs font-mono text-text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              Technical Implementation
            </span>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              {project.solution}
            </p>
          </div>

          {/* Key Technical Concept */}
          <div className="p-4 bg-surface-2/60 border border-white/[0.08] space-y-1">
            <span className="text-xs font-mono text-accent-cyan flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              Key Architectural Concept
            </span>
            <p className="text-xs sm:text-sm font-mono text-white/90 leading-relaxed">
              {project.keyConcept}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
