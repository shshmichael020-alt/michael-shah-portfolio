import { LAB_EXPERIMENTS } from "@/lib/constants";
import StreamingText from "./StreamingText";

export default function LabSection() {
  return (
    <section
      id="the-lab"
      aria-labelledby="lab-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-medium">
            Prototypes &amp; Experiments
          </span>
          <h2
            id="lab-heading"
            className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight"
          >
            The Lab
          </h2>
          <div className="text-sm sm:text-base text-text-secondary max-w-2xl mt-1 leading-relaxed font-light min-h-[3rem]">
            <StreamingText
              text="I don't only build finished products. I experiment — exploring networking protocols, Linux internals, cybersecurity tooling, machine learning, and interactive computational models."
              speed={15}
              delay={120}
              showCursor={true}
            />
          </div>
        </div>

        {/* Index of Experiments (Clean Hairline Rows) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {LAB_EXPERIMENTS.map((exp) => (
            <div
              key={exp.id}
              className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center group transition-colors hover:bg-surface-1/30 px-4"
            >
              <div className="lg:col-span-4 flex items-center gap-3">
                <a
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm sm:text-base font-medium text-white group-hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
                >
                  {exp.name}
                </a>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-surface-2 border border-white/10 text-text-secondary">
                  {exp.status}
                </span>
              </div>

              <div className="lg:col-span-6">
                <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>

              <div className="lg:col-span-2 lg:text-right flex items-center justify-between lg:justify-end gap-3">
                <span className="text-xs font-mono text-text-muted">
                  {exp.tags}
                </span>
                <a
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-white/50 group-hover:text-white transition-colors"
                  aria-label={`View code for ${exp.name}`}
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
