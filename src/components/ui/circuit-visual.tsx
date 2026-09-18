"use client";

import { motion, useReducedMotion } from "framer-motion";
import { brandColor } from "@/lib/brand-colors";

const HUB = { x: 220, y: 150 };

const NODES = Array.from({ length: 6 }, (_, i) => {
  const angle = (i / 6) * 2 * Math.PI - Math.PI / 2;
  return {
    x: HUB.x + 165 * Math.cos(angle),
    y: HUB.y + 118 * Math.sin(angle),
  };
});

function elbowPath(x1: number, y1: number, x2: number, y2: number) {
  const midX = x1 + (x2 - x1) * 0.55;
  return `M${x1},${y1} L${midX},${y1} L${midX},${y2} L${x2},${y2}`;
}

export function CircuitVisual({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 440 300"
      className={className}
      role="img"
      aria-label="Visualización del ecosistema conectado de ARTEC"
    >
      {NODES.map((node, i) => (
        <motion.path
          key={`path-${i}`}
          d={elbowPath(HUB.x, HUB.y, node.x, node.y)}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1.5}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease: "easeInOut" }}
        />
      ))}

      {NODES.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={5}
          fill="var(--surface)"
          stroke={brandColor(i)}
          strokeWidth={1.5}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.09 }}
        />
      ))}

      {!prefersReducedMotion
        ? NODES.map((node, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={node.x}
              cy={node.y}
              r={5}
              fill="none"
              stroke={brandColor(i)}
              strokeWidth={1}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 0.6, 0] , scale: [1, 2.6, 2.6]}}
              viewport={{ once: false, margin: "-80px 0px" }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: 1 + i * 0.35,
                ease: "easeOut",
              }}
            />
          ))
        : null}

      <motion.circle
        cx={HUB.x}
        cy={HUB.y}
        r={22}
        fill="var(--surface)"
        stroke="var(--accent)"
        strokeWidth={1.5}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <text
        x={HUB.x}
        y={HUB.y + 4}
        textAnchor="middle"
        className="fill-[var(--text-primary)]"
        style={{ font: "600 11px var(--font-mono, monospace)" }}
      >
        360°
      </text>
    </svg>
  );
}
