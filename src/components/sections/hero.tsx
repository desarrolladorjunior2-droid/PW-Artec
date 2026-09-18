"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { ScrambleText } from "@/components/ui/scramble-text";

const FLOW_STEPS = [
  "Estrategia",
  "Digital",
  "Web",
  "Leads",
  "Contact Center",
  "Conversión",
  "Impacto",
];

const MARQUEE_ITEMS = [
  "ESTRATEGIA",
  "MARKETING",
  "TECNOLOGÍA",
  "OPERACIONES",
  "TERRITORIO",
  "CONVERSIÓN",
];

// Abstract, unlabeled node network for the hero backdrop only — echoes the
// ecosystem concept visually without duplicating the "El ecosistema" card.
const HERO_NODES = [
  { x: 10, y: 14 }, { x: 26, y: 6 }, { x: 40, y: 20 }, { x: 20, y: 34 },
  { x: 48, y: 42 }, { x: 62, y: 12 }, { x: 74, y: 30 }, { x: 88, y: 18 },
  { x: 8, y: 58 }, { x: 30, y: 66 }, { x: 55, y: 72 }, { x: 78, y: 60 },
  { x: 92, y: 78 },
];

const HERO_LINES: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [0, 3], [2, 4], [4, 5], [5, 6], [6, 7],
  [3, 8], [8, 9], [4, 9], [9, 10], [10, 11], [6, 11], [11, 12],
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-0 md:pt-40"
    >
      {/* Decorative hero backdrop: soft color glows + an abstract node
          network, with a light vignette so the headline stays legible. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-16 -top-24 h-[28rem] w-[28rem] rounded-full opacity-[0.16] blur-[100px]"
          style={{ background: "var(--bg-blue)" }}
        />
        <div
          className="absolute -right-10 top-10 h-[24rem] w-[24rem] rounded-full opacity-[0.14] blur-[100px]"
          style={{ background: "var(--bg-violet)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full opacity-[0.1] blur-[90px]"
          style={{ background: "var(--bg-cyan)" }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {HERO_LINES.map(([a, b], i) => (
            <line
              key={i}
              x1={HERO_NODES[a].x}
              y1={HERO_NODES[a].y}
              x2={HERO_NODES[b].x}
              y2={HERO_NODES[b].y}
              stroke="var(--text-secondary)"
              strokeWidth={0.15}
            />
          ))}
          {HERO_NODES.map((node, i) => (
            <circle key={i} cx={node.x} cy={node.y} r={0.55} fill="var(--text-secondary)" />
          ))}
        </svg>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 68% 65% at 28% 38%, color-mix(in srgb, var(--background) 46%, transparent) 0%, color-mix(in srgb, var(--background) 26%, transparent) 50%, transparent 78%)",
          }}
        />
      </div>

      <div className="container-artec grid items-center gap-16 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 md:pb-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="signal-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            <ScrambleText
              text="ARTEC S.A.S. — SOLUCIONES INTEGRADAS"
              charDuration={5}
              className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[var(--accent)]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-[4.2rem]"
            style={{ textShadow: "0 2px 24px color-mix(in srgb, var(--background) 55%, transparent)" }}
          >
            Conectamos marcas, tecnología y territorios a gran escala.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
            style={{ textShadow: "0 2px 18px var(--background), 0 1px 4px var(--background)" }}
          >
            Integramos estrategia digital, tecnología, operación de contact
            center y ejecución territorial para transformar oportunidades en
            resultados medibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticCTA href="#contact" variant="primary">
              Hablemos de tu proyecto
            </MagneticCTA>
            <MagneticCTA href="#solutions" variant="secondary">
              Explora nuestras soluciones
            </MagneticCTA>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="glow-card relative mx-auto w-full max-w-sm rounded-2xl border border-[var(--border)] p-8 backdrop-blur-xl"
          style={{ background: "color-mix(in srgb, var(--surface) 68%, transparent)" }}
          aria-label="Flujo del ecosistema ARTEC"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
          }}
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
            El ecosistema
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
        className="mx-auto mb-10 hidden w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] md:flex"
        aria-label="Desplázate para explorar"
      >
        Desplázate para explorar
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
      </motion.a>

      <div
        aria-hidden="true"
        className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background-glass)] py-4 backdrop-blur-md"
      >
        <div className={`flex w-max ${prefersReducedMotion ? "" : "animate-marquee"}`}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 pr-10 font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]"
            >
              {item}
              <span className="text-[var(--accent)]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
