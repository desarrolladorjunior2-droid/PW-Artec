"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SERVICE_OPTIONS } from "@/lib/data";
import { SITE } from "@/lib/constants";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: SERVICE_OPTIONS[0],
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const update = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!EMAIL_PATTERN.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Tell us about your project.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      `New project inquiry — ${form.service}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company || "—"}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nService of interest: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="border-t border-[var(--border)] py-24 md:py-32">
      <div className="container-artec grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build the next opportunity together."
            description="Tell us what you're trying to achieve and our team will help you identify the right combination of strategy, technology and execution."
          />

          <Reveal delay={0.15}>
            <dl className="mt-10 space-y-5 border-t border-[var(--border)] pt-8">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd className="text-sm text-[var(--text-secondary)]">
                    {SITE.address}
                    <br />
                    {SITE.city}
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                <dt className="sr-only">Email</dt>
                <dd className="text-sm">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                <dt className="sr-only">Phone</dt>
                <dd className="text-sm">
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                  >
                    {SITE.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                id="name"
                required
                value={form.name}
                onChange={update("name")}
                error={errors.name}
              />
              <Field
                label="Company"
                id="company"
                value={form.company}
                onChange={update("company")}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                error={errors.email}
              />
              <Field
                label="Phone"
                id="phone"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
              />

              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-[var(--text-primary)]"
                >
                  Service of interest
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={update("service")}
                  className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
                >
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[var(--text-primary)]"
                >
                  Project / message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="mt-2 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-xs text-[var(--warning)]">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] transition-colors duration-300 hover:bg-[var(--accent-hover)] sm:w-auto"
            >
              Start a conversation
            </button>

            <p role="status" aria-live="polite" className="mt-4 text-sm text-[var(--text-secondary)]">
              {status === "sent"
                ? "Your email client should now be open with your message ready to send."
                : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  error?: string;
};

function Field({ label, id, value, onChange, type = "text", required, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[var(--text-primary)]">
        {label} {required ? <span className="text-[var(--accent)]">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)]"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-[var(--warning)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
