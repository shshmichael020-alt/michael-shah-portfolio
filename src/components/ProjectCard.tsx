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
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 group ${
        !isLast ? "border-b border-white/[0.08]" : ""
      }`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Left Column: Metadata, Title, Role, Category & Action Trigger */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Top badges: Index, Category, Status */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`text-xs font-mono tracking-widest uppercase font-medium ${accentClass}`}>
              {project.index}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-white/20">|</span>
            <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-surface-2 border ${accentBorder} text-white/90`}>
              {project.status}
            </span>
          </div>

          <h3
            id={`project-title-${project.id}`}
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white group-hover:text-accent-cyan transition-colors"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm font-mono text-accent-cyan/90 uppercase tracking-wider">
            {project.subtitle}
          </p>

          <div className="pt-1">
            <span className="text-[11px] font-mono text-text-muted block">
              <span className="text-white/70">ROLE:</span> {project.role}
            </span>
          </div>
        </div>

        {/* Action Trigger */}
        <div className="pt-4">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
            aria-label={`${project.linkText} for ${project.title}`}
          >
            <span>[ {project.linkText.toUpperCase()} ]</span>
            <span className="text-sm font-mono" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Right Column: Architectural Breakdown, Problem, Solution, Key Concept & Tags */}
      <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:pl-8 lg:border-l lg:border-white/[0.06]">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-3 py-1 bg-surface-1 border border-white/10 text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Structured Problem & Solution Breakdown */}
        <div className="space-y-4">
          {/* Problem */}
          <div className="p-4 bg-surface-1/40 border border-white/[0.06] space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-400/80" aria-hidden="true" />
              THE PROBLEM BEING SOLVED
            </span>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          {/* Technical Approach & Implementation */}
          <div className="p-4 bg-surface-1/40 border border-white/[0.06] space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent-cyan" aria-hidden="true" />
              WHAT I BUILT // TECHNICAL IMPLEMENTATION
            </span>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
              {project.solution}
            </p>
          </div>

          {/* Key Technical Concept */}
          <div className="p-4 bg-surface-2/60 border border-white/[0.08] space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent-cyan flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent-cyan" aria-hidden="true" />
              KEY TECHNICAL CONCEPT
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
