import { LAB_EXPERIMENTS } from "@/lib/constants";

export default function LabSection() {
  return (
    <section
      id="the-lab"
      aria-labelledby="lab-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-medium">
            02 // EXPERIMENTS &amp; PROTOTYPES
          </span>
          <h2
            id="lab-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white"
          >
            The Lab
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mt-2 leading-relaxed font-light">
            I don&apos;t only build finished products. I experiment — exploring networking protocols, Linux internals, cybersecurity tooling, machine learning, and interactive computational models.
          </p>
        </div>

        {/* Index of Experiments (Clean Hairline Rows across 12 cols) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {LAB_EXPERIMENTS.map((exp) => (
            <div
              key={exp.id}
              className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center group transition-colors hover:bg-surface-1/40 px-3 sm:px-4"
            >
              <div className="lg:col-span-4 flex items-center gap-3">
                <a
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm sm:text-base font-semibold text-white group-hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
                >
                  {exp.name}
                </a>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-surface-2 border border-white/10 text-accent-cyan">
                  {exp.status}
                </span>
              </div>

              <div className="lg:col-span-6">
                <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>

              <div className="lg:col-span-2 lg:text-right">
                <span className="text-xs font-mono text-text-muted">
                  {exp.tags}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
