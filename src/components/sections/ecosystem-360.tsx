"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const activeIndex = ECOSYSTEM_NODES.findIndex((n) => n.id === activeId);
  const activePos = NODE_POSITIONS[activeIndex];
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="impact"
      className="border-t border-[var(--border)] bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <div className="container-artec">
        <SectionHeading
          eyebrow="ARTEC 360°"
          title="Un ecosistema. Sin intermediarios innecesarios."
          description="Desde la primera impresión digital hasta la interacción humana final, ARTEC conecta cada etapa del proceso."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-8">
          {/* Interactive node explorer */}
          <Reveal>
            <div
              role="group"
              aria-label="Explorador del ecosistema ARTEC 360"
              className="relative mx-auto aspect-square w-full max-w-md"
            >
              <motion.div
                aria-hidden="true"
                className="absolute inset-[18%] rounded-full border border-dashed border-[var(--border)]"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
              >
                {NODE_POSITIONS.map((pos, i) => {
                  const node = ECOSYSTEM_NODES[i];
                  const isActiveLine =
                    node.id === activeId || active.connections.includes(node.id);
                  return (
                    <line
                      key={node.id}
                      x1={50}
                      y1={50}
                      x2={pos.left}
                      y2={pos.top}
                      stroke={isActiveLine ? "var(--accent)" : "var(--border)"}
                      strokeWidth={isActiveLine ? 0.5 : 0.3}
                      style={{ transition: "stroke 0.3s ease" }}
                    />
                  );
                })}
                {!prefersReducedMotion ? (
                  <motion.circle
                    key={activeId}
                    r={1.4}
                    fill="var(--accent)"
                    initial={{ cx: 50, cy: 50, opacity: 0 }}
                    animate={{
                      cx: [50, activePos.left],
                      cy: [50, activePos.top],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                ) : null}
              </svg>

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
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-glass-strong)] p-8 backdrop-blur-xl md:p-10">
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
                          Conecta con {connected.label}
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
              El recorrido completo
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
