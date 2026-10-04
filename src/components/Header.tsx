import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300 backdrop-blur-md bg-canvas/80 border-b border-white/[0.08]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 md:px-12 lg:px-16 h-16 flex items-center justify-between gap-2 sm:gap-4">
        <Link
          href="/"
          className="font-display font-extrabold tracking-wider text-[11px] sm:text-base uppercase text-text-primary hover:text-accent-cyan transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
          aria-label="Michael Shah - Home"
        >
          MICHAEL SHAH
        </Link>

        <nav
          className="flex items-center gap-2 sm:gap-4 md:gap-6 text-[10px] sm:text-xs font-mono tracking-normal sm:tracking-widest uppercase shrink-0"
          aria-label="Primary Navigation"
        >
          {NAVIGATION_LINKS.map((link) => {
            const isContact = link.label === "Contact";
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                  isContact
                    ? "text-accent-cyan hover:underline font-semibold"
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
