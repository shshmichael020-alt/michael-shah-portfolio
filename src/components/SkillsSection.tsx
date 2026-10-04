import { SKILL_CATEGORIES } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-medium">
            03 // TECHNICAL TOOLKIT
          </span>
          <h2
            id="skills-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white"
          >
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mt-2 leading-relaxed font-light">
            Technologies, tools, and environments I work with and study. Categorized by domain with honest assessment of working depth rather than arbitrary percentages.
          </p>
        </div>

        {/* 5-Category Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.index}
              className="flex flex-col justify-between p-6 sm:p-8 bg-surface-1/50 border border-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Header: Index & Title */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-accent-cyan font-semibold">
                    DOMAIN // {category.index}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {category.skills.length} TECHNOLOGIES
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white">
                  {category.title}
                </h3>

                <p className="text-xs font-light text-text-secondary leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges List */}
                <div className="pt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isIntermediate = skill.level === "Intermediate";
                    const isBeginner = skill.level === "Beginner / Learning";

                    let badgeColor = "border-white/10 text-text-primary bg-surface-2";
                    if (isIntermediate) {
                      badgeColor = "border-accent-cyan/30 text-white bg-surface-2";
                    } else if (isBeginner) {
                      badgeColor = "border-white/[0.06] text-text-muted bg-surface-1";
                    }

                    return (
                      <div
                        key={skill.name}
                        className={`group inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-mono ${badgeColor}`}
                      >
                        <span>{skill.name}</span>
                        <span className="text-[9px] text-text-muted uppercase tracking-wider">
                          [{skill.level}]
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Framing Accent */}
              <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>SYSTEM STATUS</span>
                <span className="text-white/60">ACTIVE PRACTICE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
