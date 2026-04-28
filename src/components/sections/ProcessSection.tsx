import { motion } from "framer-motion";
import { SectionHeading } from "@/components/bluechamp/SectionHeading";
import { processSteps } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section id="working-plan" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading eyebrow="Process" title="Our Working Plan" subtitle="A disciplined deployment flow built for demanding construction, infrastructure, and fit-out schedules." />
        <div className="relative grid gap-8 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-accent/50 lg:block" aria-hidden="true" />
          {processSteps.map((step, i) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, x: -30, y: 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", damping: 18, stiffness: 130, delay: i * 0.12 }}
              className="relative rounded-2xl bg-background p-6 shadow-lg ring-1 ring-border"
            >
              <div className="mb-6 grid h-20 w-20 place-items-center rounded-full brand-gradient font-heading text-2xl font-black text-primary-foreground shadow-xl">{step.step}</div>
              <step.icon className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-black">{step.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
