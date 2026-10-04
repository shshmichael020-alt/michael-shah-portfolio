import ProjectCard from "./ProjectCard";
import { SELECTED_PROJECTS } from "@/lib/constants";

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-medium">
            01 // ARCHITECTURAL PROJECTS &amp; CASE STUDIES
          </span>
          <h2
            id="selected-work-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white"
          >
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mt-2 leading-relaxed font-light">
            Core systems, extensions, and security tools engineered to solve specific constraints across networking, AI quota management, and digital media verification.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="flex flex-col gap-16">
          {SELECTED_PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isLast={idx === SELECTED_PROJECTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
