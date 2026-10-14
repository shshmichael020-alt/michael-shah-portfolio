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
      errs.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please specify a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
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
        let errorMsg = "Failed to send message.";
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
      setServerMessage("Message sent.");
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
        className="p-8 bg-surface-1 border border-accent-cyan/40 flex flex-col gap-4 transition-all"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan" aria-hidden="true" />
          <span className="text-xs font-mono text-accent-cyan font-medium">
            Message Sent Successfully
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="font-display font-semibold text-xl text-white">
            Thank you!
          </h3>
          <p className="text-sm text-text-secondary font-light leading-relaxed">
            Your message has been delivered directly to Michael&apos;s inbox. I will get back to you shortly.
          </p>
        </div>

        <div className="pt-3 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white/20 text-white font-sans text-xs hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            <span>Send Another Message</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 p-6 sm:p-8 bg-surface-1/50 border border-white/[0.08]"
      aria-label="Contact Form"
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
          Send a Message
        </span>
        <span className="text-xs font-mono text-text-muted">
          Direct to inbox
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
          <div className="font-semibold text-red-400">
            Delivery Error
          </div>
          <div>{serverMessage || "Message could not be sent. Please verify your connection or email directly."}</div>
        </div>
      )}

      {/* Field: Name */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-name"
          className="text-xs font-mono text-text-secondary flex items-center justify-between"
        >
          <span>Your Name *</span>
          {errors.name && (
            <span className="text-xs text-red-400 font-sans">
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
          className="w-full bg-surface-2/80 border border-white/10 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/60 font-sans focus:outline-none focus:border-accent-cyan transition-colors disabled:opacity-50"
        />
      </div>

      {/* Field: Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-email"
          className="text-xs font-mono text-text-secondary flex items-center justify-between"
        >
          <span>Email Address *</span>
          {errors.email && (
            <span className="text-xs text-red-400 font-sans">
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
          className="w-full bg-surface-2/80 border border-white/10 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/60 font-sans focus:outline-none focus:border-accent-cyan transition-colors disabled:opacity-50"
        />
      </div>

      {/* Field: Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-xs font-mono text-text-secondary flex items-center justify-between"
        >
          <span>Message *</span>
          {errors.message && (
            <span className="text-xs text-red-400 font-sans">
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
          placeholder="Write your note, systems question, or project inquiry..."
          aria-invalid={!!errors.message}
          className="w-full bg-surface-2/80 border border-white/10 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/60 font-sans focus:outline-none focus:border-accent-cyan transition-colors resize-y min-h-[110px] disabled:opacity-50"
        />
      </div>

      {/* Action Button */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-white text-black font-sans text-xs sm:text-sm font-medium tracking-wide hover:bg-accent-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </span>
          <span className="text-sm" aria-hidden="true">
            {status === "submitting" ? "..." : "→"}
          </span>
        </button>

        <span className="text-xs font-mono text-text-muted">
          Encrypted transport · Direct to Michael
        </span>
      </div>
    </form>
  );
}
