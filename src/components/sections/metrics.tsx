import { MetricCounter } from "@/components/ui/metric-counter";
import { Reveal } from "@/components/ui/reveal";
import { METRICS } from "@/lib/data";

export function Metrics() {
  return (
    <section
      id="metrics"
      aria-label="ARTEC operational scale"
      className="border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="container-artec grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4 md:py-20">
        {METRICS.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.08}>
            <div className="border-l border-[var(--border)] pl-5">
              <p className="font-display text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-5xl">
                {metric.numeric ? (
                  <MetricCounter
                    numeric={metric.numeric}
                    display={metric.value}
                    suffix={metric.suffix}
                  />
                ) : (
                  metric.value
                )}
              </p>
              <p className="mt-2 text-sm leading-snug text-[var(--text-secondary)]">
                {metric.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
