"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Sparse, deterministic node/line layout for the ambient network texture —
// abstract "digital ecosystem" motif, never labeled, never literal.
const NODES = [
  { x: 8, y: 12 }, { x: 22, y: 28 }, { x: 15, y: 46 }, { x: 34, y: 8 },
  { x: 46, y: 22 }, { x: 38, y: 40 }, { x: 58, y: 14 }, { x: 66, y: 32 },
  { x: 52, y: 52 }, { x: 78, y: 20 }, { x: 88, y: 42 }, { x: 72, y: 58 },
  { x: 12, y: 68 }, { x: 30, y: 76 }, { x: 48, y: 84 }, { x: 64, y: 74 },
  { x: 82, y: 68 }, { x: 93, y: 84 }, { x: 6, y: 90 }, { x: 96, y: 8 },
];

const LINES: Array<[number, number]> = [
  [0, 1], [1, 2], [1, 4], [3, 4], [4, 5], [4, 6], [6, 7], [7, 9], [9, 19],
  [7, 8], [8, 11], [10, 11], [9, 10], [2, 12], [12, 13], [13, 14], [14, 15],
  [15, 16], [16, 17], [11, 16], [12, 18], [5, 8],
];

export function AmbientBackground() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = rootRef.current;
        if (el) {
          // Very subtle parallax — the field layer drifts a fraction of
          // scroll distance so the ecosystem feels continuous, not static.
          el.style.setProperty("--scroll-shift", `${window.scrollY * 0.04}px`);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReducedMotion]);

  return (
    <div ref={rootRef} className="ambient-backdrop" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ transform: "translateY(var(--scroll-shift, 0px))" }}
      >
        <div
          className="ambient-field h-[34rem] w-[34rem]"
          style={{
            left: "-8%",
            top: "-10%",
            background: "var(--bg-blue)",
            animation: prefersReducedMotion ? "none" : "field-drift-a 26s ease-in-out infinite",
          }}
        />
        <div
          className="ambient-field h-[30rem] w-[30rem]"
          style={{
            right: "-6%",
            top: "8%",
            background: "var(--bg-violet)",
            animation: prefersReducedMotion ? "none" : "field-drift-b 32s ease-in-out infinite",
          }}
        />
        <div
          className="ambient-field h-[36rem] w-[36rem]"
          style={{
            left: "18%",
            top: "62%",
            background: "var(--bg-cyan)",
            animation: prefersReducedMotion ? "none" : "field-drift-a 30s ease-in-out infinite",
          }}
        />
        <div
          className="ambient-field h-[28rem] w-[28rem]"
          style={{
            right: "10%",
            bottom: "-8%",
            background: "var(--bg-purple)",
            animation: prefersReducedMotion ? "none" : "field-drift-b 24s ease-in-out infinite",
          }}
        />
        <div
          className="ambient-field hidden h-[22rem] w-[22rem] md:block"
          style={{
            left: "42%",
            top: "30%",
            background: "var(--bg-magenta)",
            opacity: "calc(var(--bg-field-opacity) * 0.7)",
            animation: prefersReducedMotion ? "none" : "field-drift-a 38s ease-in-out infinite",
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: "var(--bg-network-opacity)" }}
        >
          {LINES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              stroke="var(--text-secondary)"
              strokeWidth={0.12}
            />
          ))}
          {NODES.map((node, i) => (
            <circle key={i} cx={node.x} cy={node.y} r={0.45} fill="var(--text-secondary)" />
          ))}
        </svg>

        {!prefersReducedMotion
          ? [
              { left: "14%", top: "22%", size: 3, delay: "0s", color: "var(--bg-cyan)" },
              { left: "62%", top: "16%", size: 2, delay: "2s", color: "var(--bg-blue)" },
              { left: "80%", top: "48%", size: 3, delay: "4s", color: "var(--bg-violet)" },
              { left: "30%", top: "70%", size: 2, delay: "1s", color: "var(--bg-purple)" },
              { left: "50%", top: "58%", size: 2, delay: "5s", color: "var(--bg-cyan)" },
              { left: "90%", top: "78%", size: 3, delay: "3s", color: "var(--bg-magenta)" },
            ].map((p, i) => (
              <span
                key={i}
                className={`ambient-particle ${i % 2 === 1 ? "hidden sm:block" : ""}`}
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  animationDelay: p.delay,
                }}
              />
            ))
          : null}
      </div>
    </div>
  );
}
