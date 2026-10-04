import ContactForm from "./ContactForm";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      style={{ backgroundColor: "#090a0d" }}
      className="relative z-10 w-full bg-[#090a0d] px-6 sm:px-10 md:px-12 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08]"
    >
      <div className="max-w-[1536px] mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-medium">
            06 // DIRECT TRANSMISSION &amp; NETWORK PRESENCE
          </span>
          <h2
            id="contact-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white"
          >
            Initiate Contact
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl font-light leading-relaxed">
            Have a project, idea, or technical problem worth exploring? Whether you want to discuss systems engineering, cybersecurity, or collaboration opportunities, my inbox is open.
          </p>
        </div>

        {/* Asymmetric Editorial Grid: Form + Verified Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Channels & Verified Endpoints */}
          <div className="lg:col-span-5 flex flex-col gap-8 p-6 sm:p-8 bg-surface-1/40 border border-white/[0.06]">
            <div className="border-b border-white/[0.06] pb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                Verified Endpoints // Direct Channels
              </span>
            </div>

            {/* Direct Email */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block">
                Primary Email
              </span>
              <a
                href={CONTACT_INFO.emailHref}
                className="font-mono text-sm sm:text-base text-white hover:text-accent-cyan transition-colors block break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* WhatsApp Channels */}
            <div className="space-y-3 pt-2 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block">
                Direct Messaging // WhatsApp
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href={CONTACT_INFO.whatsAppIndia.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 bg-surface-2/60 border border-white/[0.06] hover:border-accent-cyan/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan block">
                      WhatsApp // {CONTACT_INFO.whatsAppIndia.region}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white group-hover:text-accent-cyan transition-colors">
                      {CONTACT_INFO.whatsAppIndia.label}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-text-muted group-hover:text-accent-cyan transition-colors" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <a
                  href={CONTACT_INFO.whatsAppNepal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 bg-surface-2/60 border border-white/[0.06] hover:border-accent-cyan/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan block">
                      WhatsApp // {CONTACT_INFO.whatsAppNepal.region}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white group-hover:text-accent-cyan transition-colors">
                      {CONTACT_INFO.whatsAppNepal.label}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-text-muted group-hover:text-accent-cyan transition-colors" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Developer Presence: Outbound Repositories & Profiles */}
            <div className="space-y-3 pt-2 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block">
                Developer Network &amp; Profiles
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={CONTACT_INFO.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 text-xs font-mono uppercase text-white hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
                >
                  <span className="truncate">{CONTACT_INFO.github.handle}</span>
                  <span className="text-sm shrink-0 ml-2" aria-hidden="true">↗</span>
                </a>

                <a
                  href={CONTACT_INFO.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 text-xs font-mono uppercase text-white hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
                >
                  <span className="truncate">{CONTACT_INFO.linkedin.handle}</span>
                  <span className="text-sm shrink-0 ml-2" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Professional Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 border-t border-white/[0.06] text-xs font-mono text-text-muted">
          <span>{CONTACT_INFO.copyright}</span>

          <div className="flex items-center gap-6">
            <a
              href={CONTACT_INFO.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={CONTACT_INFO.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          <span className="text-[10px] uppercase tracking-widest text-text-muted/80">
            {CONTACT_INFO.colophon}
          </span>
        </div>
      </div>
    </footer>
  );
}
