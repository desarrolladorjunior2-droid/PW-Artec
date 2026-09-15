"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type MetricCounterProps = {
  numeric: number;
  display: string;
  suffix?: string;
  duration?: number;
};

export function MetricCounter({
  numeric,
  display,
  suffix = "",
  duration = 1400,
}: MetricCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Vertical-only inset: a symmetric "-10%" margin also shrinks the
  // intersection root horizontally, which clips out elements sitting near
  // the left/right edge of a wide row (e.g. the first metric in a 4-up grid).
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const effectiveDuration = prefersReducedMotion ? 0 : duration;
    let frame: number;
    const start = performance.now();

    const step = (now: number) => {
      const progress = effectiveDuration === 0 ? 1 : Math.min((now - start) / effectiveDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * numeric));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, numeric, duration, prefersReducedMotion]);

  const formatted = new Intl.NumberFormat("en-US").format(value);

  return (
    <span ref={ref} className="num-tabular" aria-label={`${display}${suffix}`}>
      <span aria-hidden="true">
        {formatted}
        {suffix}
      </span>
    </span>
  );
}
