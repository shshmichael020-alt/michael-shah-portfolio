"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

interface FormState {
  name: string;
  email: string;
  message: string;
  company_hp: string; // Honeypot field
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    company_hp: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = "Identification / name is required.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Return address / email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please specify a valid email format.";
    }

    if (!formData.message.trim()) {
      errs.message = "Transmission payload / message cannot be empty.";
    } else if (formData.message.trim().length < 5) {
      errs.message = "Message must be at least 5 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _gotcha: formData.company_hp,
          company_hp: formData.company_hp,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        let errorMsg = "Failed to dispatch transmission.";
        if (data?.errors && Array.isArray(data.errors) && data.errors.length > 0) {
          errorMsg =
            data.errors
              .map((errItem: { message?: string; field?: string }) => errItem.message || "")
              .filter(Boolean)
              .join(" ") || errorMsg;
        } else if (data?.error) {
          errorMsg = data.error;
        }
        throw new Error(errorMsg);
      }

      setStatus("success");
      setServerMessage("Message received.");
      setFormData({
        name: "",
        email: "",
        message: "",
        company_hp: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerMessage(errorMessage);
    }
  };

  if (status === "success") {
    return (
      <div
        className="p-8 bg-surface-1 border border-accent-cyan/30 flex flex-col gap-5 transition-all"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 bg-accent-cyan animate-pulse" aria-hidden="true" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-accent-cyan">
            STATUS: 200 OK // TRANSMISSION LOGGED
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-white">
            MESSAGE RECEIVED.
          </h3>
          <p className="text-sm font-sans text-text-secondary font-light leading-relaxed">
            I’ll get back to you soon.
          </p>
        </div>

        <div className="pt-4 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-accent-cyan hover:text-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan"
          >
            <span>[ INITIATE NEW TRANSMISSION ]</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6 p-6 sm:p-8 bg-surface-1/60 border border-white/[0.08]"
      aria-label="Contact Transmission Form"
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
          Transmission Form // Secure Relay
        </span>
        <span className="text-[10px] font-mono text-accent-cyan">
          ENCRYPTED VIA SSL
        </span>
      </div>

      {/* Honeypot field (hidden from real users, traps bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_hp">Company HP</label>
        <input
          id="company_hp"
          type="text"
          name="company_hp"
          tabIndex={-1}
          autoComplete="off"
          value={formData.company_hp}
          onChange={handleChange}
        />
      </div>

      {/* General Error Banner */}
      {status === "error" && (
        <div
          className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-mono space-y-1"
          role="alert"
        >
          <div className="font-semibold uppercase tracking-wider text-red-400">
            Transmission Error
          </div>
          <div>{serverMessage || "Transmission rejected. Please verify your connection or reach out directly."}</div>
        </div>
      )}

      {/* Field: Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className="text-xs font-mono uppercase tracking-wider text-text-secondary flex items-center justify-between"
        >
          <span>01 // YOUR NAME *</span>
          {errors.name && (
            <span className="text-[11px] text-red-400 normal-case font-mono">
              {errors.name}
            </span>
          )}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={status === "submitting"}
          value={formData.name}
          onChange={handleChange}
          placeholder="Michael Shah"
          aria-invalid={!!errors.name}
          className="w-full bg-surface-2/80 border border-white/10 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 font-sans focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors disabled:opacity-50"
        />
      </div>

      {/* Field: Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="text-xs font-mono uppercase tracking-wider text-text-secondary flex items-center justify-between"
        >
          <span>02 // RETURN EMAIL *</span>
          {errors.email && (
            <span className="text-[11px] text-red-400 normal-case font-mono">
              {errors.email}
            </span>
          )}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={status === "submitting"}
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@domain.com"
          aria-invalid={!!errors.email}
          className="w-full bg-surface-2/80 border border-white/10 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 font-sans focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors disabled:opacity-50"
        />
      </div>

      {/* Field: Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-xs font-mono uppercase tracking-wider text-text-secondary flex items-center justify-between"
        >
          <span>03 // MESSAGE / INQUIRY *</span>
          {errors.message && (
            <span className="text-[11px] text-red-400 normal-case font-mono">
              {errors.message}
            </span>
          )}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          disabled={status === "submitting"}
          value={formData.message}
          onChange={handleChange}
          placeholder="Outline the systems, security, or collaboration inquiry..."
          aria-invalid={!!errors.message}
          className="w-full bg-surface-2/80 border border-white/10 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 font-sans focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors resize-y min-h-[120px] disabled:opacity-50"
        />
      </div>

      {/* Action Button */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase hover:bg-accent-cyan hover:text-black transition-colors duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>
            {status === "submitting" ? "TRANSMITTING..." : "SEND TRANSMISSION"}
          </span>
          <span className="text-sm font-bold" aria-hidden="true">
            {status === "submitting" ? "..." : "→"}
          </span>
        </button>

        <span className="text-[11px] font-mono text-text-muted">
          Direct to inbox // No third-party tracking
        </span>
      </div>
    </form>
  );
}
