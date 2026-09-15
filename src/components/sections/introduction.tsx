import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SOLUTIONS } from "@/lib/data";

export function Introduction() {
  return (
    <section aria-labelledby="introduction-heading" className="py-24 md:py-32">
      <div className="container-artec">
        <div id="introduction-heading">
          <SectionHeading
            eyebrow="What we do"
            title="One ecosystem. Multiple capabilities."
            description="ARTEC connects strategic planning, digital execution, technology, human operations and territorial implementation — as one coordinated system, not five separate vendors."
          />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3 lg:grid-cols-5">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.id} delay={i * 0.06} className="bg-[var(--surface)]">
              <a
                href={`#${solution.id}`}
                className="group flex h-full flex-col justify-between gap-8 p-6 transition-colors hover:bg-[var(--surface-elevated)]"
              >
                <span className="text-xs font-semibold text-[var(--text-muted)]">
                  {solution.index}
                </span>
                <span className="text-sm font-medium leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                  {solution.category}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
