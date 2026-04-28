import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { a as contact, B as Button } from "./router-C_bSkdxS.js";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};
const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};
const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};
function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, className: center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl", children: [
    eyebrow && /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black text-foreground md:text-5xl", children: title }),
    /* @__PURE__ */ jsx("div", { className: center ? "mx-auto mt-5 h-1 w-24 rounded-full brand-gradient" : "mt-5 h-1 w-24 rounded-full brand-gradient" }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg leading-8 text-muted-foreground", children: subtitle })
  ] });
}
function CTABanner() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[url('/cta_bg.png')] bg-cover bg-center bg-no-repeat bg-fixed py-20 text-primary-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-navy/75" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 brand-gradient opacity-80 mix-blend-multiply" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diamond-pattern opacity-15" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-black md:text-5xl", children: "Ready to Build with Champions?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-primary-foreground/75", children: "Get skilled manpower for your next project in the UAE. We handle everything." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 font-heading text-2xl font-black text-accent", children: contact.phones.join(" | ") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "cyan", size: "xl", children: /* @__PURE__ */ jsx(Link, { to: "/contact", search: { service: void 0 }, children: "Get a Quote" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "xl", children: /* @__PURE__ */ jsx("a", { href: "tel:+971507182424", children: "Call Us Now" }) })
      ] })
    ] })
  ] });
}
export {
  CTABanner as C,
  SectionHeading as S,
  slideLeft as a,
  slideRight as b,
  fadeUp as f,
  staggerContainer as s
};
