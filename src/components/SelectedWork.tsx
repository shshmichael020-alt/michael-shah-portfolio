"use client";

import ProjectCard from "./ProjectCard";
import { SELECTED_PROJECTS } from "@/lib/constants";
import StreamingText from "./StreamingText";

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-medium">
            Featured Projects
          </span>
          <h2
            id="selected-work-heading"
            className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight"
          >
            Selected Work
          </h2>
          <div className="text-sm sm:text-base text-text-secondary max-w-2xl mt-1 leading-relaxed font-light min-h-[3rem]">
            <StreamingText
              text="Core systems, extensions, and security tools engineered to solve specific constraints across networking, AI quota management, and digital media verification."
              speed={15}
              delay={100}
              showCursor={true}
            />
          </div>
        </div>

        {/* Project Case Studies List */}
        <div className="flex flex-col gap-12 sm:gap-16">
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
