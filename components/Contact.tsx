"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: ContactErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_REGEX.test(form.email)) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: wire to a real endpoint, e.g. /api/contact
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-24 dark:bg-charcoal sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="section-heading mt-4">
              Plan Your Next Deployment
            </h2>
            <p className="mt-5 max-w-md text-charcoal/70 dark:text-sand/70">
              Whether it&apos;s a corporate offsite, a bootcamp for your team,
              or a personal trek — tell us what you&apos;re after and
              we&apos;ll get back within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={Mail} label="contact@majorlsc.com" />
              <ContactRow icon={Phone} label="+91 98765 43210" />
              <ContactRow icon={MapPin} label="New Delhi, India" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-sm border border-charcoal/10 bg-sand/40 p-8 dark:border-sand/10 dark:bg-charcoal-light sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 size={44} className="text-army dark:text-brass" />
                  <h3 className="mt-4 font-heading text-xl uppercase tracking-wide text-charcoal dark:text-white">
                    Message Sent
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-charcoal/70 dark:text-sand/70">
                    Thanks for reaching out — we&apos;ll respond within one
                    business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="c-name" className="mb-1.5 block text-xs font-heading uppercase tracking-widest text-charcoal dark:text-white">
                        Name
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        className="field-input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="field-error">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="c-email" className="mb-1.5 block text-xs font-heading uppercase tracking-widest text-charcoal dark:text-white">
                        Email
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        className="field-input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="field-error">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="c-message" className="mb-1.5 block text-xs font-heading uppercase tracking-widest text-charcoal dark:text-white">
                        Message
                      </label>
                      <textarea
                        id="c-message"
                        rows={5}
                        className="field-input resize-none"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="field-error">{errors.message}</p>}
                    </div>
                  </div>

                  <button type="submit" className="btn-primary mt-8 w-full">
                    Send Message
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

function ContactRow({ icon: Icon, label }: { icon: typeof Mail; label: string }) {
  return (
    <div className="flex items-center gap-3 text-charcoal/80 dark:text-sand/80">
      <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-army/10 text-army dark:bg-brass/10 dark:text-brass">
        <Icon size={16} />
      </span>
      {label}
    </div>
  );
}
