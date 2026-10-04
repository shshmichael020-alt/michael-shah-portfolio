import {
  EDUCATION_INFO,
  TECHNICAL_FOCUS,
  TECHNICAL_ACTIVITIES,
} from "@/lib/constants";

export default function JourneySection() {
  return (
    <section
      id="journey"
      aria-labelledby="focus-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-medium">
            04 // ACADEMIC PROFILE &amp; TECHNICAL FOCUS
          </span>
          <h2
            id="focus-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white"
          >
            Technical Focus
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mt-2 leading-relaxed font-light">
            I am a Computer Science student actively building practical skills in cybersecurity, software engineering, systems, and AI experimentation.
          </p>
        </div>

        {/* 1. Dedicated Education Card */}
        <div className="p-8 sm:p-10 bg-surface-1/60 border border-white/[0.1] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface-2 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-accent-cyan">
                <span className="w-1.5 h-1.5 bg-accent-cyan animate-pulse" aria-hidden="true" />
                ACADEMIC PROFILE
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
                {EDUCATION_INFO.institution}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-text-secondary uppercase tracking-wider">
                {EDUCATION_INFO.faculty}
              </p>
              <div className="pt-2 text-xs font-mono text-white/90">
                <span className="text-accent-cyan font-semibold block">{EDUCATION_INFO.degree}</span>
                <span className="text-text-muted mt-1 block">{EDUCATION_INFO.status}</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 lg:pl-8 lg:border-l lg:border-white/[0.08]">
              <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed">
                {EDUCATION_INFO.description}
              </p>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block">
                  KEY AREAS OF STUDY
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EDUCATION_INFO.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 p-2 bg-surface-2/60 border border-white/[0.04] text-xs font-mono text-text-primary/90"
                    >
                      <span className="text-accent-cyan font-bold" aria-hidden="true">›</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Evergreen Technical Focus Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-medium">
              CORE AREAS OF PRACTICE &amp; EXPLORATION
            </span>
            <span className="text-[10px] font-mono text-text-muted uppercase">
              EVERGREEN FOCUS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECHNICAL_FOCUS.map((focus) => (
              <div
                key={focus.index}
                className="p-6 sm:p-8 bg-surface-1/40 border border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-accent-cyan/30 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                    <span className="text-xs font-mono font-bold text-accent-cyan">
                      {focus.index} // DOMAIN
                    </span>
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-surface-2 border border-white/10 text-text-muted">
                      ACTIVE EXPLORATION
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white">
                    {focus.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-light text-text-secondary leading-relaxed">
                    {focus.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-text-muted">
                  <span>DISCIPLINE</span>
                  <span className="text-white/60">HANDS-ON BUILDING</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Technical Activities & Hands-on Milestones */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-medium">
              TECHNICAL ACTIVITIES &amp; LAB BENCHMARKS
            </span>
            <span className="text-[10px] font-mono text-text-muted uppercase">
              PRACTICAL WORK
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNICAL_ACTIVITIES.map((act) => (
              <div
                key={act.title}
                className="p-5 bg-surface-1/30 border border-white/[0.06] flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-accent-cyan tracking-wider block">
                    {act.tag}
                  </span>
                  <h4 className="font-mono text-xs sm:text-sm font-semibold text-white">
                    {act.title}
                  </h4>
                  <p className="text-xs font-light text-text-secondary leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
