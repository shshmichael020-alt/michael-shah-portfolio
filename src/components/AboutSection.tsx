import Image from "next/image";
import { PERSONAL_INTERESTS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-canvas px-6 sm:px-10 md:px-12 lg:px-16 py-24 sm:py-32 border-b border-white/[0.06]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-medium">
            05 // PERSONAL IDENTITY &amp; PHILOSOPHY
          </span>
          <h2
            id="about-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white"
          >
            About Michael
          </h2>
        </div>

        {/* Asymmetric 12-Column Editorial Grid: 7 Cols Text (Left) + 5 Cols Portrait (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Comprehensive Profile & Approach */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Lead & Narrative */}
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed">
                I am a Computer Science student exploring the intersection of practical software engineering, cybersecurity, systems internals, and experimental technology.
              </p>

              <div className="space-y-4 text-sm sm:text-base font-light">
                <p>
                  Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at Jain University, Faculty of Engineering and Technology (FET). My academic studies provide the formal framework in algorithmic theory, operating systems, and discrete structures, but my deepest learning happens at the terminal.
                </p>

                <p>
                  I operate with a simple conviction: <strong className="text-white font-medium">the best way to understand complex systems is to dissect and build them from scratch</strong>. Whether analyzing raw network packets in Wireshark, inspecting memory and process isolation under Linux, or engineering zero-authentication cloud utilities to bypass real campus connectivity restrictions, I care about how technology works beneath the abstraction layers.
                </p>

                <p>
                  My engineering interests center around security fundamentals, network defense, reliable software construction, and understanding how modern AI models interact with client environments. Rather than rushing toward pre-packaged solutions, I take time to understand the protocol, the failure modes, and the trust boundaries.
                </p>
              </div>
            </div>

            {/* Guiding Principles / Engineering Approach */}
            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-widest text-white font-medium block">
                ENGINEERING PERSPECTIVE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-surface-1/60 border border-white/[0.06] space-y-1">
                  <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider block">
                    01 // FIRST PRINCIPLES
                  </span>
                  <p className="text-xs text-text-secondary font-light">
                    Prioritizing understanding of network protocols, system calls, and runtime memory before adopting high-level frameworks.
                  </p>
                </div>

                <div className="p-4 bg-surface-1/60 border border-white/[0.06] space-y-1">
                  <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider block">
                    02 // REAL-WORLD UTILITY
                  </span>
                  <p className="text-xs text-text-secondary font-light">
                    Building tools that solve tangible problems — like segmented campus Wi-Fi transfers and client-side AI quota observability.
                  </p>
                </div>

                <div className="p-4 bg-surface-1/60 border border-white/[0.06] space-y-1">
                  <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider block">
                    03 // DEFENSIVE RIGOR
                  </span>
                  <p className="text-xs text-text-secondary font-light">
                    Thinking about threat vectors, trust boundaries, and credential privacy by design in every architecture.
                  </p>
                </div>

                <div className="p-4 bg-surface-1/60 border border-white/[0.06] space-y-1">
                  <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider block">
                    04 // CONTINUOUS EXPERIMENTATION
                  </span>
                  <p className="text-xs text-text-secondary font-light">
                    Maintaining an active lab notebook of computational models, traffic scripts, and prototype utilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Interests (Secondary - Beyond the Terminal) */}
            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block">
                PERSONAL INTERESTS // BEYOND THE TERMINAL
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 text-[11px] font-mono bg-surface-2 border border-white/[0.06] text-text-secondary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait of Michael */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            <div className="relative w-full max-w-md aspect-[3/4] bg-surface-1 border border-white/10 overflow-hidden shadow-2xl">
              <Image
                src="/assets/about-portrait-dark.png"
                alt="Michael Shah - Computer Science Student at Jain University"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_12%] filter contrast-[1.04] brightness-[0.98]"
              />

              {/* Atmospheric subtle overlays */}
              <div className="absolute inset-0 pointer-events-none film-grain opacity-20" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-canvas/80 via-transparent to-transparent" />

              {/* Editorial Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3 bg-canvas/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono">
                <div className="space-y-0.5">
                  <span className="text-white uppercase font-medium block tracking-wider">
                    MICHAEL SHAH
                  </span>
                  <span className="text-text-muted block">
                    B.Tech CSE // Jain University (FET)
                  </span>
                </div>
                <span className="w-1.5 h-1.5 bg-accent-cyan" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
