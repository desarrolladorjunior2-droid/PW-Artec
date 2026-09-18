"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type SectionVideoProps = {
  name: string;
  tint: string;
};

/**
 * Looping color video behind a single section. Plays only while the section
 * is on screen; reduced-motion users get the still poster. A veil (see
 * --video-veil-pct in globals.css) keeps text contrast predictable.
 */
export function SectionVideo({ name, tint }: SectionVideoProps) {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.05 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const media = "absolute inset-0 h-full w-full origin-top-left scale-[1.16] object-cover object-left-top";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {prefersReducedMotion ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/video/${name}-poster.jpg`} alt="" className={media} loading="lazy" />
      ) : (
        <video
          ref={videoRef}
          className={media}
          style={{ filter: "saturate(1.1) brightness(var(--video-brightness, 1))" }}
          muted
          loop
          playsInline
          preload="metadata"
          poster={`/video/${name}-poster.jpg`}
        >
          <source src={`/video/${name}.webm`} type="video/webm" />
          <source src={`/video/${name}.mp4`} type="video/mp4" />
        </video>
      )}
      <div
        className="absolute inset-0"
        style={{
          background: `color-mix(in srgb, color-mix(in srgb, ${tint} var(--tint-pct), var(--background)) var(--video-veil-pct), transparent)`,
        }}
      />
    </div>
  );
}
