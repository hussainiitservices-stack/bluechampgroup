import { motion } from "framer-motion";
import { LogoTicker } from "@/components/bluechamp/LogoTicker";
import { SectionHeading } from "@/components/bluechamp/SectionHeading";
import { clients } from "@/lib/constants";

export function ClientsSection() {
  return <section className="bg-brand-light py-24"><div className="mx-auto max-w-7xl px-4 lg:px-8"><SectionHeading eyebrow="Trusted By" title="Our Clients" subtitle="Prestigious partners across construction, infrastructure, real estate, and engineering." /><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.06 } } }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{clients.map((client) => <motion.div key={client} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} whileHover={{ y: -6, scale: 1.03 }} className="grid min-h-28 place-items-center rounded-xl border bg-card p-6 text-center font-heading font-black uppercase text-muted-foreground grayscale shadow-sm transition hover:text-primary hover:grayscale-0">{client}</motion.div>)}</motion.div><LogoTicker /></div></section>;
}
