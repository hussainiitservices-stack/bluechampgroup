import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", (value) => setScrolled(value > 24)), [scrollY]);

  return (
    <motion.header initial={{ y: -32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-navy/95 shadow-2xl backdrop-blur-xl" : "bg-brand-navy/20 backdrop-blur-sm"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="group flex items-center gap-3" aria-label="Blue Champ home">
          <span className="grid h-11 w-11 place-items-center rounded-lg brand-gradient font-heading text-lg font-black text-primary-foreground shadow-lg">BC</span>
          <span className="font-heading text-xl font-black text-primary-foreground">BLUE CHAMP</span>
        </Link>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <motion.div key={item.label} variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }} className="group relative">
              <Link to={item.to as never} className="flex items-center gap-1 text-sm font-semibold text-primary-foreground/90 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform hover:text-primary-foreground hover:after:scale-x-100">
                {item.label}{item.children && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
              </Link>
              {item.children && <div className="invisible absolute left-0 top-8 w-44 rounded-lg border border-primary-foreground/10 bg-brand-navy/95 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition group-hover:visible group-hover:opacity-100">{item.children.map((child) => <span key={child} className="block rounded-md px-3 py-2 text-sm text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground">{child}</span>)}</div>}
            </motion.div>
          ))}
          <Button asChild variant="gradient" size="lg"><Link to="/contact" search={{ service: undefined }}>Get a Quote</Link></Button>
        </motion.div>
        <button className="rounded-md p-2 text-primary-foreground lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu /></button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 220 }} className="fixed right-0 top-0 z-50 min-h-screen w-80 bg-brand-navy p-6 shadow-2xl lg:hidden">
            <div className="mb-8 flex items-center justify-between text-primary-foreground"><strong>BLUE CHAMP</strong><button aria-label="Close menu" onClick={() => setOpen(false)}><X /></button></div>
            <div className="grid gap-3">{navLinks.map((item) => <Link key={item.label} to={item.to as never} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 font-semibold text-primary-foreground/90 hover:bg-primary-foreground/10">{item.label}</Link>)}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
