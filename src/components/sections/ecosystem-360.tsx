"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ECOSYSTEM_NODES, ECOSYSTEM_STEPS } from "@/lib/data";

const RADIUS = 42;

const NODE_POSITIONS = ECOSYSTEM_NODES.map((_, i) => {
  const angle = (i / ECOSYSTEM_NODES.length) * 2 * Math.PI - Math.PI / 2;
  return {
    left: 50 + RADIUS * Math.cos(angle),
    top: 50 + RADIUS * Math.sin(angle),
  };
});

export function Ecosystem360() {
  const [activeId, setActiveId] = useState(ECOSYSTEM_NODES[0].id);
  const active = ECOSYSTEM_NODES.find((n) => n.id === activeId)!;

  return (
    <section id="impact" className="border-t border-[var(--border)] py-24 md:py-32">
      <div className="container-artec">
        <SectionHeading
          eyebrow="ARTEC 360°"
          title="One ecosystem. No unnecessary intermediaries."
          description="From the first digital impression to the final human interaction, ARTEC connects every stage of the process."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-8">
          {/* Interactive node explorer */}
          <Reveal>
            <div
              role="group"
              aria-label="ARTEC 360 ecosystem explorer"
              className="relative mx-auto aspect-square w-full max-w-md"
            >
              <div className="absolute inset-[18%] rounded-full border border-dashed border-[var(--border)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-center">
                  <span className="font-display text-lg font-semibold text-[var(--text-primary)]">
                    ARTEC
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
                    360°
                  </span>
                </div>
              </div>

              {ECOSYSTEM_NODES.map((node, i) => {
                const pos = NODE_POSITIONS[i];
                const isActive = node.id === activeId;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveId(node.id)}
                    aria-pressed={isActive}
                    style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                    className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-full transition-transform duration-300 ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  >
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-300 sm:h-20 sm:w-20 sm:text-sm ${
                        isActive
                          ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]"
                          : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--accent)]"
                      }`}
                    >
                      {node.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Description panel */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {active.label}
                  </p>
                  <p className="mt-4 text-balance font-display text-xl font-medium leading-snug text-[var(--text-primary)] md:text-2xl">
                    {active.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.connections.map((id) => {
                      const connected = ECOSYSTEM_NODES.find((n) => n.id === id);
                      if (!connected) return null;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setActiveId(id)}
                          className="rounded-full border border-[var(--border)] px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          Connects to {connected.label}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* Linear funnel */}
        <div className="mt-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
              The full journey
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto pb-4">
            <ol className="flex min-w-max gap-0 lg:min-w-0 lg:flex-wrap">
              {ECOSYSTEM_STEPS.map((step, i) => (
                <li key={step.label} className="flex items-center">
                  <Reveal delay={i * 0.04} className="flex items-center">
                    <span className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium whitespace-nowrap text-[var(--text-primary)] sm:text-sm">
                      <span className="text-[var(--text-muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step.short}
                    </span>
                  </Reveal>
                  {i < ECOSYSTEM_STEPS.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="mx-2 h-px w-6 shrink-0 bg-[var(--border)] sm:w-8"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
