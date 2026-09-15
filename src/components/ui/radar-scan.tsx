"use client";

import { motion, useReducedMotion } from "framer-motion";

export function RadarScan({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`relative aspect-square w-full max-w-xs ${className}`}
      role="img"
      aria-label="Ecosistema ARTEC en operación continua"
    >
      <div className="absolute inset-0 rounded-full border border-[var(--border)]" />
      <div className="absolute inset-[16%] rounded-full border border-dashed border-[var(--border)]" />
      <div className="absolute inset-[34%] rounded-full border border-[var(--border)]" />

      {!prefersReducedMotion
        ? [0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-[34%] rounded-full border border-[var(--accent)]"
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 2.05 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut",
              }}
            />
          ))
        : null}

      {!prefersReducedMotion ? (
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-1/2 w-px origin-top"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 70%, transparent), transparent)",
            }}
          />
        </motion.div>
      ) : null}

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
      </div>

      <span className="absolute left-[8%] top-[46%] h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]" />
      <span className="absolute right-[14%] top-[22%] h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]" />
      <span className="absolute bottom-[16%] left-[30%] h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]" />
    </div>
  );
}
