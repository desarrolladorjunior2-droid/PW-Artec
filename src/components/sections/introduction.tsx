import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CircuitVisual } from "@/components/ui/circuit-visual";

export function Introduction() {
  return (
    <section
      aria-labelledby="introduction-heading"
      className="bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <div className="container-artec grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
        <div id="introduction-heading">
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Un ecosistema. Múltiples capacidades."
            description="ARTEC conecta la planeación estratégica, la ejecución digital, la tecnología, la operación humana y la implementación territorial en un solo sistema coordinado, no en cinco proveedores separados."
          />
        </div>

        <Reveal delay={0.1}>
          <CircuitVisual className="mx-auto w-full max-w-lg" />
        </Reveal>
      </div>
    </section>
  );
}
