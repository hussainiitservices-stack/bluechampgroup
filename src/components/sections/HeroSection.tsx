import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/constants";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => { const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5000); return () => clearInterval(id); }, []);
  const slide = heroSlides[index];
  return (
    <section className="relative grid min-h-screen overflow-hidden bg-[url('/hero_bg.png')] bg-cover bg-center bg-no-repeat text-primary-foreground">
      <div className="absolute inset-0 bg-brand-navy/60" />
      <div className="absolute inset-0 brand-gradient opacity-80 mix-blend-multiply" />
      <div className="absolute inset-0 diamond-pattern opacity-20 animate-diamond-drift" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={slide.title} initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-primary-foreground/80">Blue Champ Group of Companies</p>
              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">{slide.title}</h1>
              <motion.p initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1, delay: 0.25 }} className="mt-6 max-w-2xl text-xl font-semibold text-primary-foreground/85">{slide.subtitle}</motion.p>
            </motion.div>
          </AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-wrap gap-4"><Button asChild variant="heroOutline" size="xl"><Link to="/services">More Explore</Link></Button><Button asChild variant="cyan" size="xl"><Link to="/contact" search={{ service: undefined }}>Get In Touch</Link></Button></motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.15, type: "spring", stiffness: 80 }} className="relative hidden min-h-[580px] lg:block">
          <div className="absolute -right-4 top-4 h-[32rem] w-[32rem] rotate-45 rounded-[3.5rem] border border-primary-foreground/20 bg-brand-navy/85 shadow-[0_0_80px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-1000 hover:rotate-[40deg]" />
          <div className="absolute right-[4.5rem] top-[8.5rem] grid place-items-center">
            <HardHat className="h-[14rem] w-[14rem] text-primary-foreground/90 drop-shadow-2xl transition-transform duration-700 hover:scale-110" strokeWidth={1.5} />
          </div>
          <motion.div initial={{ opacity: 0, x: -40, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.7, duration: 0.8, type: "spring" }} className="absolute bottom-16 left-6 rounded-3xl border border-primary-foreground/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-6xl font-black tracking-tight drop-shadow-lg">UAE</p>
            <p className="mt-3 text-lg font-medium tracking-wide text-primary-foreground/90 drop-shadow">Manpower • Contracting • Fit-Out</p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2"><ChevronDown className="h-8 w-8" /></motion.div>
    </section>
  );
}
