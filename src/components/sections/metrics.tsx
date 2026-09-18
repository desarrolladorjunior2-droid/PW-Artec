"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MetricCounter } from "@/components/ui/metric-counter";
import { Reveal } from "@/components/ui/reveal";
import { METRICS } from "@/lib/data";
import { brandColor } from "@/lib/brand-colors";
import { SectionMesh } from "@/components/ui/section-mesh";

export function Metrics() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="metrics"
      aria-label="Escala operativa de ARTEC"
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-xl"
    >
      <SectionMesh colors={["var(--brand-blue)", "var(--brand-green)"]} />
      {!prefersReducedMotion ? (
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-[var(--accent)]/25 to-transparent"
          initial={{ x: "-10%" }}
          whileInView={{ x: "1100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      ) : null}

      <div className="container-artec relative grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4 md:py-20">
        {METRICS.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.08}>
            <div className="border-l-4 pl-5" style={{ borderColor: brandColor(i) }}>
              <p
                className="font-mono text-4xl font-semibold tracking-tight md:text-5xl"
                style={{ color: brandColor(i) }}
              >
                {metric.numeric ? (
                  <MetricCounter
                    numeric={metric.numeric}
                    display={metric.value}
                    suffix={metric.suffix}
                  />
                ) : (
                  metric.value
                )}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                {metric.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
