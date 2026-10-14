import { SKILL_CATEGORIES } from "@/lib/constants";
import StreamingText from "./StreamingText";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-medium">
            Technical Stack
          </span>
          <h2
            id="skills-heading"
            className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight"
          >
            Technical Skills
          </h2>
          <div className="text-sm sm:text-base text-text-secondary max-w-2xl mt-1 leading-relaxed font-light min-h-[3rem]">
            <StreamingText
              text="Technologies, tools, and environments I work with and study. Categorized by domain with honest assessment of working depth rather than arbitrary percentages."
              speed={14}
              delay={100}
              showCursor={true}
            />
          </div>
        </div>

        {/* 5-Category Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.index}
              className="flex flex-col justify-between p-6 bg-surface-1/40 border border-white/[0.06] hover:border-white/20 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Category Title & Count */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <h3 className="font-display font-medium text-lg text-white">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-text-muted">
                    {category.skills.length} tools
                  </span>
                </div>

                <p className="text-xs font-light text-text-secondary leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges List */}
                <div className="pt-2 flex flex-wrap gap-2">
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
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 border text-xs font-mono ${badgeColor}`}
                      >
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-text-muted">
                          [{skill.level.split(" ")[0]}]
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-text-muted">
                <span>Domain {category.index}</span>
                <span className="text-white/40">Active practice</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
