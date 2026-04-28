import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fitOutWorks, roles } from "@/lib/constants";

export function ScopeOfWork() {
  return (
    <section id="scope-of-work" className="bg-surface py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl shadow-2xl lg:grid-cols-2">
        <div className="relative overflow-hidden bg-brand-navy p-8 text-primary-foreground lg:p-12">
          <div className="absolute inset-0 diamond-pattern opacity-10" aria-hidden="true" />
          <div className="relative">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Specialized manpower</p>
            <h2 className="text-4xl font-black">Scope of Work</h2>
            <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.035 } } }} className="mt-8 grid gap-3 sm:grid-cols-2">
              {roles.map((role) => <motion.li key={role} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/85 md:text-base"><ChevronRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{role}</motion.li>)}
            </motion.ul>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative bg-secondary p-8 lg:p-12">
          <div className="absolute inset-0 diamond-pattern opacity-25" aria-hidden="true" />
          <div className="relative">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-primary">Interior execution</p>
            <h2 className="text-4xl font-black text-foreground">Fit-Out Works</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">With clear attention to client details, we carry out a plethora of fit-out works for adapting and modifying interior spaces to make them ready for occupancy.</p>
            <ul className="mt-8 grid gap-3">
              {fitOutWorks.map((work) => <li key={work} className="flex items-center gap-3 font-semibold"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{work}</li>)}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
