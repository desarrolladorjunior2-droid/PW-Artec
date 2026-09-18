type SectionMeshProps = {
  colors: readonly [string, string];
};

/**
 * Soft, blurred color fields (ambient background palette) that give an
 * otherwise flat glass section background depth and atmosphere — sits
 * behind the content, above the section's own background fill.
 */
export function SectionMesh({ colors }: SectionMeshProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="ambient-field absolute -left-32 -top-32 h-96 w-96"
        style={{ background: colors[0], animation: "field-drift-a 34s ease-in-out infinite" }}
      />
      <div
        className="ambient-field absolute -right-24 bottom-0 h-[26rem] w-[26rem]"
        style={{ background: colors[1], animation: "field-drift-b 40s ease-in-out infinite" }}
      />
    </div>
  );
}
