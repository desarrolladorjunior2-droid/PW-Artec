import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WHY_PILLARS } from "@/lib/data";
import { brandColor } from "@/lib/brand-colors";
import { SectionPhoto } from "@/components/ui/section-photo";

export function WhyArtec() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32">
      <SectionPhoto
        src="/images/sections/whyartec.webp"
        colors={["var(--brand-blue)", "var(--brand-orange)"]}
      />
      <div className="container-artec relative">
        <SectionHeading
          eyebrow="Por qué ARTEC"
          title="Por qué las organizaciones eligen un aliado integral."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {WHY_PILLARS.map((pillar, i) => {
            const color = brandColor(i);
            return (
              <Reveal key={pillar.index} delay={i * 0.1}>
                <div className="border-t-4 pt-6" style={{ borderTopColor: color }}>
                  <span className="font-display text-4xl font-semibold" style={{ color }}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
