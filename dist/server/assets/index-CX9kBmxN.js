import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as AboutSection, V as VisionMission } from "./VisionMission-4h0WPUVl.js";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Building2, Users, HardHat, ChevronDown } from "lucide-react";
import { A as AnimatedCounter, S as ScopeOfWork, a as StatsSection } from "./StatsSection-BlOCWjQa.js";
import { C as ClientsSection } from "./ClientsSection-BkDQGKB0.js";
import { C as ContactSection } from "./ContactSection-_DlTDqYF.js";
import { C as CTABanner } from "./CTABanner-D9LMzZGI.js";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { h as heroSlides, B as Button } from "./router-C_bSkdxS.js";
import { S as ServicesSection, P as ProcessSection } from "./ProcessSection-hnup6O_y.js";
import "react-intersection-observer";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function AboutStrip() {
  const stats = [{ icon: CalendarDays, value: 2010, prefix: "Est. ", label: "Established" }, { icon: Building2, value: 0, prefix: "Abu Dhabi, UAE", label: "Headquarters" }, { icon: Users, value: 0, prefix: "Complete Manpower Solutions", label: "Core Expertise" }];
  return /* @__PURE__ */ jsx("section", { className: "bg-brand-navy py-8 text-primary-foreground", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 lg:px-8", children: stats.map((stat, i) => /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { delay: i * 0.12 }, className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsx("span", { className: "grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent shadow-[0_0_26px_color-mix(in_oklab,var(--brand-cyan)_40%,transparent)]", children: /* @__PURE__ */ jsx(stat.icon, {}) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-heading text-2xl font-black", children: stat.value ? /* @__PURE__ */ jsxs(Fragment, { children: [
        stat.prefix,
        /* @__PURE__ */ jsx(AnimatedCounter, { value: stat.value })
      ] }) : stat.prefix }),
      /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/65", children: stat.label })
    ] })
  ] }, stat.label)) }) });
}
function HeroSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5e3);
    return () => clearInterval(id);
  }, []);
  const slide = heroSlides[index];
  return /* @__PURE__ */ jsxs("section", { className: "relative grid min-h-screen overflow-hidden bg-[url('/hero_bg.png')] bg-cover bg-center bg-no-repeat text-primary-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-navy/60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 brand-gradient opacity-80 mix-blend-multiply" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diamond-pattern opacity-20 animate-diamond-drift" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: -70 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 }, transition: { duration: 0.7 }, children: [
          /* @__PURE__ */ jsx("p", { className: "mb-5 text-sm font-black uppercase tracking-[0.28em] text-primary-foreground/80", children: "Blue Champ Group of Companies" }),
          /* @__PURE__ */ jsx("h1", { className: "max-w-4xl text-5xl font-black leading-tight md:text-7xl", children: slide.title }),
          /* @__PURE__ */ jsx(motion.p, { initial: { clipPath: "inset(0 100% 0 0)" }, animate: { clipPath: "inset(0 0% 0 0)" }, transition: { duration: 1, delay: 0.25 }, className: "mt-6 max-w-2xl text-xl font-semibold text-primary-foreground/85", children: slide.subtitle })
        ] }, slide.title) }),
        /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "xl", children: /* @__PURE__ */ jsx(Link, { to: "/services", children: "More Explore" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "cyan", size: "xl", children: /* @__PURE__ */ jsx(Link, { to: "/contact", search: { service: void 0 }, children: "Get In Touch" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, scale: 0.95, rotate: 3 }, animate: { opacity: 1, scale: 1, rotate: 0 }, transition: { duration: 1, delay: 0.15, type: "spring", stiffness: 80 }, className: "relative hidden min-h-[580px] lg:block", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-4 top-4 h-[32rem] w-[32rem] rotate-45 rounded-[3.5rem] border border-primary-foreground/20 bg-brand-navy/85 shadow-[0_0_80px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-1000 hover:rotate-[40deg]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-[4.5rem] top-[8.5rem] grid place-items-center", children: /* @__PURE__ */ jsx(HardHat, { className: "h-[14rem] w-[14rem] text-primary-foreground/90 drop-shadow-2xl transition-transform duration-700 hover:scale-110", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: -40, y: 20 }, animate: { opacity: 1, x: 0, y: 0 }, transition: { delay: 0.7, duration: 0.8, type: "spring" }, className: "absolute bottom-16 left-6 rounded-3xl border border-primary-foreground/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-6xl font-black tracking-tight drop-shadow-lg", children: "UAE" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg font-medium tracking-wide text-primary-foreground/90 drop-shadow", children: "Manpower • Contracting • Fit-Out" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { animate: { y: [0, 12, 0] }, transition: { repeat: Infinity, duration: 1.6 }, className: "absolute bottom-8 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-8 w-8" }) })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(AboutStrip, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(VisionMission, {}),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(ScopeOfWork, {}),
    /* @__PURE__ */ jsx(StatsSection, {}),
    /* @__PURE__ */ jsx(ProcessSection, {}),
    /* @__PURE__ */ jsx(ClientsSection, {}),
    /* @__PURE__ */ jsx(CTABanner, {}),
    /* @__PURE__ */ jsx(ContactSection, {})
  ] });
}
function Index() {
  return /* @__PURE__ */ jsx(HomePage, {});
}
export {
  Index as component
};
