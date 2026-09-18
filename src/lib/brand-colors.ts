import type { CSSProperties } from "react";

/**
 * Rotating brand palette taken from the ARTEC portfolio (blue, indigo,
 * orange, red, green). Used to color-code repeating items — solutions,
 * capability groups, pillars, ecosystem nodes — the way the brochure
 * assigns a distinct color per concept.
 */
export const BRAND_COLORS = [
  "var(--brand-blue)",
  "var(--brand-indigo)",
  "var(--brand-orange)",
  "var(--brand-red)",
  "var(--brand-green)",
] as const;

export function brandColor(index: number): string {
  return BRAND_COLORS[index % BRAND_COLORS.length];
}

/** Sets the per-section tint that tinted glass surfaces mix in (see globals.css). */
export function sectionTint(color: string): CSSProperties {
  return { ["--section-tint" as string]: color } as CSSProperties;
}
