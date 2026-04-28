import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";

export function ServiceCard({ title, description, icon: Icon, selected = false, onSelect }: { title: string; description: string; icon: LucideIcon; selected?: boolean; onSelect?: () => void }) {
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -8, boxShadow: "0 20px 40px color-mix(in oklab, var(--brand-cyan) 30%, transparent)" }} className={`group flex min-h-72 flex-col overflow-hidden rounded-xl border bg-card shadow-lg transition-colors hover:bg-brand-navy ${selected ? "ring-2 ring-accent" : ""}`}>
      <div className="h-1.5 brand-gradient" />
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-black text-card-foreground transition-colors group-hover:text-primary-foreground">{title}</h3>
        <p className="mt-4 leading-7 text-muted-foreground transition-colors group-hover:text-primary-foreground/80">{description}</p>
        <Button type="button" variant={selected ? "cyan" : "outline"} className="mt-auto w-fit rounded-full" onClick={onSelect} aria-label={`Select ${title} for quote`}>
          {selected && <CheckCircle2 aria-hidden="true" />}
          {selected ? "Selected" : "Select for quote"}
        </Button>
      </div>
    </motion.article>
  );
}
