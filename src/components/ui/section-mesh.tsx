type SectionMeshProps = {
  colors: readonly [string, string];
};

/**
 * Soft, blurred color blobs that tint an otherwise flat glass section
 * background with the brand palette — sits behind the content, above the
 * section's own background fill.
 */
export function SectionMesh({ colors }: SectionMeshProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-[0.18] blur-[100px]"
        style={{ background: colors[0] }}
      />
      <div
        className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full opacity-[0.14] blur-[110px]"
        style={{ background: colors[1] }}
      />
    </div>
  );
}
