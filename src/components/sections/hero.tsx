"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticCTA } from "@/components/ui/magnetic-cta";

const FLOW_STEPS = [
  "Strategy",
  "Digital",
  "Web",
  "Leads",
  "Contact Center",
  "Conversion",
  "Impact",
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)",
        }}
      />

      <div className="container-artec grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]"
          >
            ARTEC S.A.S. — Integrated Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-[4.2rem]"
          >
            Connecting brands, technology and territories at scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
          >
            We integrate digital strategy, technology, contact center
            operations and territorial execution to transform opportunities
            into measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticCTA href="#contact" variant="primary">
              Let&rsquo;s talk about your project
            </MagneticCTA>
            <MagneticCTA href="#solutions" variant="secondary">
              Explore our solutions
            </MagneticCTA>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          aria-label="ARTEC integrated ecosystem flow"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            The ecosystem
          </p>
          <div className="relative mt-6 pl-6">
            <div
              aria-hidden="true"
              className="absolute left-[5px] top-1 bottom-1 w-px bg-[var(--border)]"
            />
            {!prefersReducedMotion ? (
              <motion.div
                aria-hidden="true"
                className="absolute left-[2.5px] h-6 w-1.5 rounded-full bg-[var(--accent)]"
                style={{ boxShadow: "0 0 12px 2px var(--accent)" }}
                animate={{ top: ["0%", "94%"] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ) : null}
            <ul className="space-y-5">
              {FLOW_STEPS.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="relative flex items-center gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[var(--background)] bg-[var(--text-muted)]"
                  />
                  <span
                    className={`text-sm ${
                      i === FLOW_STEPS.length - 1
                        ? "font-semibold text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {step}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#metrics"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mx-auto mt-16 hidden w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] md:flex"
        aria-label="Scroll to explore"
      >
        Scroll to explore
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
