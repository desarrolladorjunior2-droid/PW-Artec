type SectionMotionProps = {
  tint: string;
};

const ORBS = [
  { color: "var(--brand-blue)", size: 30, left: "-6%", top: "-20%", anim: "motion-drift-a", dur: 22 },
  { color: "var(--brand-indigo)", size: 26, left: "62%", top: "-16%", anim: "motion-drift-b", dur: 27 },
  { color: "var(--brand-orange)", size: 22, left: "78%", top: "52%", anim: "motion-drift-c", dur: 24 },
  { color: "var(--brand-red)", size: 20, left: "28%", top: "62%", anim: "motion-drift-b", dur: 30 },
  { color: "var(--brand-green)", size: 22, left: "-8%", top: "58%", anim: "motion-drift-a", dur: 26 },
] as const;

const BUBBLES = [
  { left: 6, size: 14, dur: 19, delay: -3, color: "var(--brand-blue)" },
  { left: 14, size: 22, dur: 26, delay: -12, color: "var(--brand-orange)" },
  { left: 23, size: 10, dur: 17, delay: -8, color: "var(--brand-green)" },
  { left: 33, size: 18, dur: 23, delay: -1, color: "var(--brand-indigo)" },
  { left: 41, size: 12, dur: 20, delay: -15, color: "var(--brand-red)" },
  { left: 50, size: 24, dur: 28, delay: -6, color: "var(--brand-blue)" },
  { left: 58, size: 11, dur: 18, delay: -10, color: "var(--brand-green)" },
  { left: 66, size: 20, dur: 25, delay: -18, color: "var(--brand-orange)" },
  { left: 74, size: 13, dur: 21, delay: -4, color: "var(--brand-red)" },
  { left: 82, size: 26, dur: 30, delay: -14, color: "var(--brand-indigo)" },
  { left: 90, size: 12, dur: 19, delay: -9, color: "var(--brand-blue)" },
  { left: 96, size: 18, dur: 24, delay: -20, color: "var(--brand-green)" },
] as const;

/**
 * Living section background: slow drifting color orbs plus small bubbles
 * that rise and fade, all CSS. Frozen automatically under reduced motion.
 */
export function SectionMotion({ tint }: SectionMotionProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {ORBS.map((o, i) => (
        <div
          key={i}
          className="motion-orb"
          style={{
            left: o.left,
            top: o.top,
            width: `${o.size}rem`,
            height: `${o.size}rem`,
            background: o.color,
            animation: `${o.anim} ${o.dur}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className={`motion-bubble ${i % 3 === 2 ? "hidden sm:block" : ""}`}
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            borderColor: b.color,
            background: `color-mix(in srgb, ${b.color} 22%, transparent)`,
            animation: `motion-rise ${b.dur}s linear ${b.delay}s infinite`,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background: `color-mix(in srgb, color-mix(in srgb, ${tint} var(--tint-pct), var(--background)) var(--motion-veil-pct), transparent)`,
        }}
      />
    </div>
  );
}
