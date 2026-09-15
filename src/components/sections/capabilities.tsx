import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CAPABILITIES } from "@/lib/data";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-[var(--border)] bg-[var(--background-glass)] py-24 backdrop-blur-xl md:py-32"
    >
      <div className="container-artec">
        <SectionHeading
          eyebrow="Capacidades"
          title="Una matriz completa de capacidad estratégica, técnica y operativa."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 0.05}
              className="bg-[var(--surface-glass-strong)] backdrop-blur-xl"
            >
              <div className="h-full p-8">
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                  {group.category}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-[var(--accent)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
