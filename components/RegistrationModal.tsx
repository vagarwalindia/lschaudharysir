"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { VetEvent } from "@/lib/events";
import { REGISTRATION_FIELDS, RegistrationField } from "@/lib/registrationFields";

interface RegistrationModalProps {
  event: VetEvent | null; // null = closed
  onClose: () => void;
}

type FormValues = Record<string, string>;
type FormErrors = Record<string, string>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,15}$/;

export default function RegistrationModal({ event, onClose }: RegistrationModalProps) {
  const fields = useMemo<RegistrationField[]>(
    () => (event ? REGISTRATION_FIELDS[event.type] : []),
    [event]
  );

  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Reset form state whenever a new event is opened, and lock body scroll while open
  useEffect(() => {
    setValues({});
    setErrors({});
    setSubmitted(false);
    document.body.style.overflow = event ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [event]);

  // Close on Escape
  useEffect(() => {
    if (!event) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [event, onClose]);

  const validate = (): boolean => {
    const next: FormErrors = {};
    for (const field of fields) {
      const raw = (values[field.name] ?? "").trim();

      if (field.required && !raw) {
        next[field.name] = `${field.label} is required.`;
        continue;
      }
      if (!raw) continue; // optional & empty — skip further checks

      if (field.type === "email" && !EMAIL_REGEX.test(raw)) {
        next[field.name] = "Please enter a valid email address.";
      }
      if (field.type === "tel" && !PHONE_REGEX.test(raw)) {
        next[field.name] = "Please enter a valid phone number.";
      }
      if (field.type === "number") {
        const num = Number(raw);
        if (Number.isNaN(num)) {
          next[field.name] = "Please enter a valid number.";
        } else if (field.min !== undefined && num < field.min) {
          next[field.name] = `Must be at least ${field.min}.`;
        } else if (field.max !== undefined && num > field.max) {
          next[field.name] = `Must be at most ${field.max}.`;
        }
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || !event) return;

    // TODO: replace with a real API call, e.g.:
    // await fetch('/api/register', {
    //   method: 'POST',
    //   body: JSON.stringify({ eventId: event.id, ...values }),
    // });
    console.log("Registration submitted:", { eventId: event.id, ...values });
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/70 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-sm bg-white p-6 shadow-2xl dark:bg-charcoal-light sm:rounded-sm sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{event.type} Registration</p>
                <h3
                  id="registration-modal-title"
                  className="mt-2 font-heading text-xl font-semibold uppercase tracking-wide text-charcoal dark:text-white"
                >
                  {event.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close registration form"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-charcoal/60 hover:bg-charcoal/5 dark:text-sand/60 dark:hover:bg-white/5"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 size={44} className="text-army dark:text-brass" />
                <h4 className="mt-4 font-heading text-lg uppercase tracking-wide text-charcoal dark:text-white">
                  Registration Received
                </h4>
                <p className="mt-2 max-w-xs text-sm text-charcoal/70 dark:text-sand/70">
                  We&apos;ve got your spot on hold for &quot;{event.title}&quot;. A
                  confirmation and payment link will land in your inbox shortly.
                </p>
                <button onClick={onClose} className="btn-primary mt-8">
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                {fields.map((field) => (
                  <FieldRenderer
                    key={field.name}
                    field={field}
                    value={values[field.name] ?? ""}
                    error={errors[field.name]}
                    onChange={(val) => handleChange(field.name, val)}
                  />
                ))}

                <button type="submit" className="btn-primary w-full">
                  Confirm Registration
                </button>
                <p className="text-center text-xs text-charcoal/50 dark:text-sand/50">
                  Seat is held for 24 hours pending payment confirmation.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FieldRenderer({
  field,
  value,
  error,
  onChange,
}: {
  field: RegistrationField;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const inputId = `reg-${field.name}`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-1.5 block text-xs font-heading uppercase tracking-widest text-charcoal dark:text-white"
      >
        {field.label}
        {!field.required && (
          <span className="ml-1 normal-case tracking-normal text-charcoal/40 dark:text-sand/40">
            (optional)
          </span>
        )}
      </label>

      {field.type === "select" ? (
        <select
          id={inputId}
          className="field-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
        >
          <option value="" disabled>
            Select {field.label.toLowerCase()}
          </option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          id={inputId}
          rows={3}
          className="field-input resize-none"
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={inputId}
          type={field.type}
          className="field-input"
          placeholder={field.placeholder}
          value={value}
          min={field.min}
          max={field.max}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
        />
      )}

      {field.helpText && !error && (
        <p className="mt-1 text-xs text-charcoal/50 dark:text-sand/50">{field.helpText}</p>
      )}
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}
