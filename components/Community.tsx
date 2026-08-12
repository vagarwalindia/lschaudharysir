"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Users2, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface FormState {
  name: string;
  email: string;
  phone: string;
  newsletter: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,15}$/;

export default function Community() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    newsletter: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Client-side validation — mirrors what a real backend should re-validate too
  const validate = (): boolean => {
    const next: FormErrors = {};
    if (form.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!EMAIL_REGEX.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!PHONE_REGEX.test(form.phone)) {
      next.phone = "Please enter a valid phone number.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: replace with a real API call, e.g.:
    // await fetch('/api/join', { method: 'POST', body: JSON.stringify(form) })
    setSubmitted(true);
  };

  return (
    <section id="community" className="bg-army py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: pitch + community links */}
          <AnimatedSection>
            <p className="eyebrow text-brass">Join the Ranks</p>
            <h2 className="section-heading mt-4 text-white">
              Become Part of the VetVentures Community
            </h2>
            <p className="mt-5 max-w-md text-sand/90">
              Get first access to new bootcamp dates, trek routes, and
              corporate program slots — plus a direct line to fellow members
              chasing the same growth.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
              >
                <MessageCircle size={22} className="text-green-400" />
                <span>
                  <span className="block font-heading text-sm uppercase tracking-widest">
                    WhatsApp Group
                  </span>
                  <span className="text-xs text-sand/70">
                    Daily updates &amp; discussion
                  </span>
                </span>
              </a>
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
              >
                <Users2 size={22} className="text-indigo-300" />
                <span>
                  <span className="block font-heading text-sm uppercase tracking-widest">
                    Discord Server
                  </span>
                  <span className="text-xs text-sand/70">
                    Training logs &amp; events
                  </span>
                </span>
              </a>
            </div>
          </AnimatedSection>

          {/* Right: membership form */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-sm bg-white p-8 text-charcoal dark:bg-charcoal-light dark:text-sand sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 size={44} className="text-army dark:text-brass" />
                  <h3 className="mt-4 font-heading text-xl uppercase tracking-wide">
                    You&apos;re In
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-charcoal/70 dark:text-sand/70">
                    Check your inbox for a welcome email with your community
                    links and next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-heading text-lg uppercase tracking-widest">
                    Membership Sign-Up
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/60 dark:text-sand/60">
                    Takes 30 seconds. No spam, ever.
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-heading uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="field-input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="field-error">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-heading uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="field-input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="field-error">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-heading uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="field-input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="field-error">{errors.phone}</p>
                      )}
                    </div>

                    <label className="flex items-start gap-2.5 text-sm text-charcoal/80 dark:text-sand/80">
                      <input
                        type="checkbox"
                        checked={form.newsletter}
                        onChange={(e) => setForm({ ...form, newsletter: e.target.checked })}
                        className="mt-0.5 h-4 w-4 accent-army"
                      />
                      Subscribe me to the weekly newsletter for trek routes &amp; leadership tips
                    </label>
                  </div>

                  <button type="submit" className="btn-primary mt-8 w-full">
                    Join VetVentures
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
