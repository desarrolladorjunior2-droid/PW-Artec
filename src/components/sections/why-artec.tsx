import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WHY_PILLARS } from "@/lib/data";

export function WhyArtec() {
  return (
    <section className="border-t border-[var(--border)] py-24 md:py-32">
      <div className="container-artec">
        <SectionHeading
          eyebrow="Por qué ARTEC"
          title="Por qué las organizaciones eligen un aliado integral."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {WHY_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 0.1}>
              <div className="border-t border-[var(--border)] pt-6">
                <span className="font-display text-4xl font-semibold text-[var(--accent)]">
                  {pillar.index}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-[var(--text-primary)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
