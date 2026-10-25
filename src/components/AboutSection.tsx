"use client";

import { PERSONAL_INTERESTS } from "@/lib/constants";
import StreamingText from "./StreamingText";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-20 sm:py-28 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-medium">
            Background &amp; Perspective
          </span>
          <h2
            id="about-heading"
            className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight"
          >
            About Michael
          </h2>
        </div>

        {/* Balanced 12-Column Editorial Grid: Narrative & Interests (Left) + Engineering Principles (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* Left Column (6 Cols): Biography & Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <div className="text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed min-h-[4rem]">
                <StreamingText
                  text="I am a Computer Science student exploring the intersection of practical software engineering, cybersecurity, systems internals, and experimental technology."
                  speed={15}
                  delay={120}
                  showCursor={true}
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base font-light text-text-secondary leading-relaxed">
                <p>
                  Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at Jain University, Faculty of Engineering and Technology (FET). My academic coursework provides the formal framework in algorithmic theory, operating systems, computer architecture, and discrete structures, but my deepest learning happens hands-on at the terminal.
                </p>

                <p>
                  I operate with a simple conviction: <strong className="text-white font-medium">the best way to understand complex systems is to dissect and build them from scratch</strong>. Whether analyzing raw network packets in Wireshark, inspecting memory and process isolation boundaries under Linux, or engineering zero-cloud-storage peer-to-peer utilities to overcome restrictive campus networks, I care about how technology operates beneath the abstraction layers.
                </p>

                <p>
                  My engineering interests center around security fundamentals, network defense, reliable software construction, and understanding how modern AI models interact with client environments. Rather than rushing toward pre-packaged solutions, I take time to understand the protocol, the failure modes, and the trust boundaries.
                </p>
              </div>
            </div>

            {/* Beyond the Terminal / Personal Interests */}
            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
                Beyond the Terminal
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-xs font-sans bg-surface-1/70 border border-white/[0.08] text-text-secondary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols): Engineering Approach Principle Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            <div className="border-b border-white/[0.06] pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-white font-medium block">
                Engineering Approach
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-surface-1/40 border border-white/[0.06] space-y-2">
                <h4 className="text-xs font-mono font-medium text-white tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                  First Principles
                </h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Prioritizing understanding of network protocols, system calls, and runtime memory before adopting high-level frameworks.
                </p>
              </div>

              <div className="p-5 bg-surface-1/40 border border-white/[0.06] space-y-2">
                <h4 className="text-xs font-mono font-medium text-white tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                  Real-World Utility
                </h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Building tools that solve tangible problems — like segmented campus Wi-Fi transfers and client-side AI quota observability.
                </p>
              </div>

              <div className="p-5 bg-surface-1/40 border border-white/[0.06] space-y-2">
                <h4 className="text-xs font-mono font-medium text-white tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                  Defensive Rigor
                </h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Thinking about threat vectors, trust boundaries, and credential privacy by design in every architecture.
                </p>
              </div>

              <div className="p-5 bg-surface-1/40 border border-white/[0.06] space-y-2">
                <h4 className="text-xs font-mono font-medium text-white tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                  Continuous Experimentation
                </h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Maintaining an active lab notebook of computational models, traffic scripts, and prototype utilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
