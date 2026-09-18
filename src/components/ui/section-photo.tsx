type SectionPhotoProps = {
  src: string;
  colors: readonly [string, string];
  position?: string;
};

/**
 * Distinct, colorized background photo per section — echoes how the ARTEC
 * portfolio gives each slide its own photo + color treatment, instead of
 * one flat tint repeated everywhere. Sits behind the section's own glass
 * tint, so it reads as soft, colored texture rather than a sharp photo.
 */
export function SectionPhoto({ src, colors, position = "center" }: SectionPhotoProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Pre-optimized WebP, rendered heavily blurred — next/image adds nothing here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full scale-110 object-cover"
        style={{ objectPosition: position, filter: "blur(32px) saturate(1.3)" }}
        loading="lazy"
        decoding="async"
      />
      {/* Uniform veil keeps the backdrop light (or dark, per theme) so text
          contrast stays predictable wherever the photo is dark or bright. */}
      <div
        className="absolute inset-0"
        style={{ background: "color-mix(in srgb, var(--background) 66%, transparent)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, ${colors[0]} 34%, transparent) 0%, color-mix(in srgb, ${colors[0]} 14%, transparent) 45%, transparent 80%)`,
        }}
      />
      <div
        className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full opacity-[0.22] blur-[110px]"
        style={{ background: colors[1] }}
      />
    </div>
  );
}
