"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ECOSYSTEM_NODES, ECOSYSTEM_STEPS } from "@/lib/data";
import { brandColor, sectionTint } from "@/lib/brand-colors";
import { SectionMotion } from "@/components/ui/section-motion";

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
  const activeColor = brandColor(activeIndex);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section style={sectionTint("var(--brand-green)")}
      id="impact"
      className="section-tinted relative overflow-hidden section-overlap bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <SectionMotion tint="var(--brand-green)" seed={3} />
      <div className="container-artec relative">
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
              className="relative mx-auto aspect-square w-full max-w-lg"
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
                      stroke={isActiveLine ? brandColor(i) : "var(--border)"}
                      strokeWidth={isActiveLine ? 0.5 : 0.3}
                      style={{ transition: "stroke 0.3s ease" }}
                    />
                  );
                })}
                {!prefersReducedMotion ? (
                  <motion.circle
                    key={activeId}
                    r={1.4}
                    fill={activeColor}
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
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[var(--border)] bg-[var(--solid-tint)] text-center">
                  <span className="font-display text-xl font-semibold text-[var(--text-primary)]">
                    ARTEC
                  </span>
                  <span className="text-xs font-semibold tracking-[0.18em]" style={{ color: activeColor }}>
                    360°
                  </span>
                </div>
              </div>

              {ECOSYSTEM_NODES.map((node, i) => {
                const pos = NODE_POSITIONS[i];
                const isActive = node.id === activeId;
                const color = brandColor(i);
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
                      className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 text-[13px] font-semibold transition-colors duration-300 sm:h-24 sm:w-24 sm:text-base"
                      style={{
                        borderColor: color,
                        backgroundColor: isActive ? color : "var(--solid-tint)",
                        color: isActive ? "var(--accent-foreground)" : "var(--text-primary)",
                      }}
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
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: activeColor }}>
                    {active.label}
                  </p>
                  <p className="mt-4 text-balance font-display text-xl font-medium leading-snug text-[var(--text-primary)] md:text-[1.7rem]">
                    {active.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.connections.map((id) => {
                      const connectedIndex = ECOSYSTEM_NODES.findIndex((n) => n.id === id);
                      const connected = ECOSYSTEM_NODES[connectedIndex];
                      if (!connected) return null;
                      const connectedColor = brandColor(connectedIndex);
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setActiveId(id)}
                          className="rounded-full border px-5 py-2 text-sm font-medium transition-colors"
                          style={{ borderColor: connectedColor, color: connectedColor }}
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
            <p className="w-fit rounded-full bg-[var(--surface-glass-strong)] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              El recorrido completo
            </p>
          </Reveal>
          <ol className="relative mt-10 grid grid-cols-3 gap-x-4 gap-y-10 lg:grid-cols-9 lg:gap-x-2">
            <span
              aria-hidden="true"
              className="absolute left-[5.5%] right-[5.5%] top-7 hidden h-px bg-[var(--text-muted)]/40 lg:block"
            />
            {ECOSYSTEM_STEPS.map((step, i) => {
              const color = brandColor(i);
              return (
                <li key={step.label} className="relative flex flex-col items-center text-center">
                  <Reveal delay={i * 0.05} className="flex flex-col items-center">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 bg-[var(--solid-tint)] font-mono text-base font-semibold"
                      style={{ borderColor: color, color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-3 text-base font-medium leading-tight text-[var(--text-primary)]">
                      {step.short}
                    </span>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
