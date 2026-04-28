import { AnimatedCounter } from "@/components/bluechamp/AnimatedCounter";
import { counters } from "@/lib/constants";

export function StatsSection() {
  return (
    <section id="stats" className="relative overflow-hidden clip-wave-top bg-[url('/stats_bg.png')] bg-cover bg-center bg-no-repeat bg-fixed py-28 text-primary-foreground">
      <div className="absolute inset-0 bg-brand-navy/70" />
      <div className="absolute inset-0 brand-gradient opacity-90 mix-blend-multiply" />
      <div className="absolute inset-0 diamond-pattern opacity-15 animate-diamond-drift" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 text-center sm:grid-cols-2 md:grid-cols-4 lg:px-8">
        {counters.map((counter, i) => (
          <div key={counter.label} className={`px-4 ${i ? "md:border-l md:border-primary-foreground/35" : ""}`}>
            <p className="font-heading text-6xl font-black md:text-7xl"><AnimatedCounter value={counter.value} suffix={counter.suffix} /></p>
            <p className="mt-3 font-semibold text-primary-foreground/84">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
