import { motion } from "framer-motion";
import { ArrowRight, MessageSquareQuote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/bluechamp/SectionHeading";
import { ServiceCard } from "@/components/bluechamp/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";
import { useState } from "react";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0]?.title ?? "Manpower Supply");

  return (
    <section id="services" className="relative overflow-hidden bg-background py-20 md:py-24">
      <div className="absolute inset-y-0 left-0 w-full bg-secondary/70 md:w-[33%]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading eyebrow="Capabilities" title="Our Services" subtitle="Manpower, contracting, technical services, fit-out execution, and infrastructure support for demanding UAE projects." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.title} {...service} selected={selectedService === service.title} onSelect={() => setSelectedService(service.title)} />)}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="relative mt-10 overflow-hidden rounded-2xl bg-[url('/services_bg.png')] bg-cover bg-center bg-no-repeat p-6 text-primary-foreground shadow-2xl md:p-8">
          <div className="absolute inset-0 bg-brand-navy/80" />
          <div className="absolute inset-0 brand-gradient opacity-60 mix-blend-multiply" />
          <div className="absolute inset-0 diamond-pattern opacity-15" aria-hidden="true" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><MessageSquareQuote aria-hidden="true" /></span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">Request a Quote</p>
                <h3 className="mt-2 text-2xl font-black md:text-3xl">Get pricing for {selectedService}</h3>
                <p className="mt-2 text-primary-foreground/75">We’ll pre-fill the contact form so your enquiry reaches the right team faster.</p>
              </div>
            </div>
            <Button asChild variant="cyan" size="xl" className="shrink-0">
              <Link to="/contact" search={{ service: selectedService }} hash="quote-form" aria-label={`Request a quote for ${selectedService}`}>
                Continue <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
