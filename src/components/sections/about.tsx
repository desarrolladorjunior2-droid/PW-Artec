import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const FOCUS_AREAS = [
  "Capacidades integradas",
  "Enfoque estratégico",
  "Tecnología",
  "Operación humana",
  "Ejecución territorial",
  "Escalabilidad",
];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] bg-[var(--surface)] py-24 md:py-32"
    >
      <div className="container-artec grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Sobre ARTEC"
            title="Impulsamos el alcance y los resultados de su organización con un aliado integral."
            description="ARTEC S.A.S. opera como un aliado integral que combina planeación estratégica, ejecución digital, infraestructura tecnológica, operación humana e implementación territorial en un ecosistema único y coordinado, construido para escalar."
          />
        </div>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--border)] pt-8">
            {FOCUS_AREAS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium text-[var(--text-primary)]"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
