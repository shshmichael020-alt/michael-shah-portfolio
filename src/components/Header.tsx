"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = ["selected-work", "the-lab", "skills", "about", "contact"];

    const handleScroll = () => {
      // Check sections from top to bottom based on focal reading zone (180px below header)
      let current = "";
      const focalPoint = 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalPoint && rect.bottom > focalPoint) {
            current = id;
            break;
          }
        }
      }

      // If at the absolute bottom of page, highlight contact
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 15;
      if (isAtBottom) {
        current = "contact";
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300 backdrop-blur-md bg-canvas/80 border-b border-white/[0.08]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 md:px-12 lg:px-16 h-16 flex items-center justify-between gap-2 sm:gap-4">
        <Link
          href="/"
          className="font-display font-bold tracking-wider text-xs sm:text-sm uppercase text-text-primary hover:text-accent-cyan transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
          aria-label="Michael Shah - Home"
        >
          MICHAEL SHAH
        </Link>

        <nav
          className="flex items-center gap-3 sm:gap-5 md:gap-6 text-[10px] sm:text-xs font-mono tracking-normal sm:tracking-widest uppercase shrink-0"
          aria-label="Primary Navigation"
        >
          {NAVIGATION_LINKS.map((link) => {
            const targetId = link.href.replace("#", "");
            const isActive = activeSection === targetId;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                  isActive
                    ? "text-accent-cyan font-semibold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
