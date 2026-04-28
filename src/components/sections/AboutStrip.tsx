import { motion } from "framer-motion";
import { Building2, CalendarDays, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/bluechamp/AnimatedCounter";

export function AboutStrip() {
  const stats = [{ icon: CalendarDays, value: 2010, prefix: "Est. ", label: "Established" }, { icon: Building2, value: 0, prefix: "Abu Dhabi, UAE", label: "Headquarters" }, { icon: Users, value: 0, prefix: "Complete Manpower Solutions", label: "Core Expertise" }];
  return <section className="bg-brand-navy py-8 text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 lg:px-8">{stats.map((stat, i) => <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.12 }} className="flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent shadow-[0_0_26px_color-mix(in_oklab,var(--brand-cyan)_40%,transparent)]"><stat.icon /></span><div><p className="font-heading text-2xl font-black">{stat.value ? <>{stat.prefix}<AnimatedCounter value={stat.value} /></> : stat.prefix}</p><p className="text-primary-foreground/65">{stat.label}</p></div></motion.div>)}</div></section>;
}
