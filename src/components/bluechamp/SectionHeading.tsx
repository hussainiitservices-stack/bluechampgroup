import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>}
      <h2 className="text-3xl font-black text-foreground md:text-5xl">{title}</h2>
      <div className={center ? "mx-auto mt-5 h-1 w-24 rounded-full brand-gradient" : "mt-5 h-1 w-24 rounded-full brand-gradient"} />
      {subtitle && <p className="mt-5 text-lg leading-8 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
