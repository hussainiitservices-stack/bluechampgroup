import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { r as roles, f as fitOutWorks, c as counters } from "./router-C_bSkdxS.js";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
function ScopeOfWork() {
  return /* @__PURE__ */ jsx("section", { id: "scope-of-work", className: "bg-surface py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl overflow-hidden rounded-2xl shadow-2xl lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-brand-navy p-8 text-primary-foreground lg:p-12", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diamond-pattern opacity-10", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent", children: "Specialized manpower" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-black", children: "Scope of Work" }),
        /* @__PURE__ */ jsx(motion.ul, { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, variants: { visible: { transition: { staggerChildren: 0.035 } } }, className: "mt-8 grid gap-3 sm:grid-cols-2", children: roles.map((role) => /* @__PURE__ */ jsxs(motion.li, { variants: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }, className: "flex items-center gap-2 text-sm font-semibold text-primary-foreground/85 md:text-base", children: [
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-accent", "aria-hidden": "true" }),
          role
        ] }, role)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 80 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, ease: "easeOut" }, className: "relative bg-secondary p-8 lg:p-12", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diamond-pattern opacity-25", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-bold uppercase tracking-[0.22em] text-primary", children: "Interior execution" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-black text-foreground", children: "Fit-Out Works" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg leading-8 text-muted-foreground", children: "With clear attention to client details, we carry out a plethora of fit-out works for adapting and modifying interior spaces to make them ready for occupancy." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 grid gap-3", children: fitOutWorks.map((work) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 font-semibold", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 shrink-0 rounded-full bg-accent", "aria-hidden": "true" }),
          work
        ] }, work)) })
      ] })
    ] })
  ] }) });
}
function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  useEffect(() => {
    if (!inView) return;
    const duration = 2e3;
    const start = performance.now();
    let frame = 0;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    count,
    suffix
  ] });
}
function StatsSection() {
  return /* @__PURE__ */ jsxs("section", { id: "stats", className: "relative overflow-hidden clip-wave-top bg-[url('/stats_bg.png')] bg-cover bg-center bg-no-repeat bg-fixed py-28 text-primary-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-navy/70" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 brand-gradient opacity-90 mix-blend-multiply" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diamond-pattern opacity-15 animate-diamond-drift", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto grid max-w-7xl gap-8 px-4 text-center sm:grid-cols-2 md:grid-cols-4 lg:px-8", children: counters.map((counter, i) => /* @__PURE__ */ jsxs("div", { className: `px-4 ${i ? "md:border-l md:border-primary-foreground/35" : ""}`, children: [
      /* @__PURE__ */ jsx("p", { className: "font-heading text-6xl font-black md:text-7xl", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: counter.value, suffix: counter.suffix }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 font-semibold text-primary-foreground/84", children: counter.label })
    ] }, counter.label)) })
  ] });
}
export {
  AnimatedCounter as A,
  ScopeOfWork as S,
  StatsSection as a
};
