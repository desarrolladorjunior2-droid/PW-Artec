"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const CHARSET = "01ARTEC#/·+•";

type ScrambleTextProps = {
  text: string;
  className?: string;
  delay?: number;
  charDuration?: number;
};

/**
 * Decrypt-style text reveal: characters resolve left to right through a
 * random charset before locking in, echoing the brand's circuit/data motif.
 */
export function ScrambleText({
  text,
  className,
  delay = 0,
  charDuration = 28,
}: ScrambleTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // display already initializes to `text`, so reduced motion needs no animation.
    if (prefersReducedMotion) return;

    let cancelled = false;
    let startTime: number | null = null;
    const totalFrames = text.length * charDuration + 20;

    const step = (now: number) => {
      if (cancelled) return;
      if (startTime === null) startTime = now;
      const elapsedFrames = Math.round((now - startTime) / (1000 / 60));

      const resolvedChars = Math.floor(elapsedFrames / charDuration);
      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < resolvedChars) return char;
          return CHARSET[Math.floor(Math.random() * CHARSET.length)];
        })
        .join("");

      setDisplay(next);

      if (elapsedFrames < totalFrames) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };

    const timeout = window.setTimeout(() => {
      frameRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, charDuration, prefersReducedMotion]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
