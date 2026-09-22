/**
 * Thin blurred gradient placed between two sections so the page reads as one
 * continuous background instead of two blocks meeting at a hard edge. It
 * blends `from`'s tint into `to`'s tint using the exact same tinted-glass
 * formula each section already uses for its own edges (see .section-tinted
 * in globals.css), so both ends match the sections they touch — and it
 * carries its own backdrop-blur so the fixed video never shows through raw.
 */
export function SectionSeam({ from, to }: { from: string; to: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-16 overflow-hidden backdrop-blur-2xl md:h-24"
      style={{
        background: `linear-gradient(to bottom,
          color-mix(in srgb, color-mix(in srgb, ${from} var(--tint-pct), var(--background)) 55%, transparent),
          color-mix(in srgb, color-mix(in srgb, ${to} var(--tint-pct), var(--background)) 55%, transparent))`,
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)",
        maskImage: "linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)",
      }}
    />
  );
}
