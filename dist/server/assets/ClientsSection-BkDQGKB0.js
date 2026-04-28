import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { b as clients } from "./router-C_bSkdxS.js";
import { S as SectionHeading } from "./CTABanner-D9LMzZGI.js";
function LogoTicker() {
  const logos = [...clients, ...clients];
  return /* @__PURE__ */ jsx("div", { className: "mt-12 overflow-hidden border-y border-border bg-background/70 py-5", children: /* @__PURE__ */ jsx("div", { className: "flex w-max animate-logo-scroll gap-5", children: logos.map((client, index) => /* @__PURE__ */ jsx("div", { className: "flex min-w-52 items-center justify-center rounded-lg border bg-card px-8 py-4 text-sm font-black uppercase text-muted-foreground grayscale transition hover:text-primary hover:grayscale-0", children: client }, `${client}-${index}`)) }) });
}
function ClientsSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-brand-light py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Trusted By", title: "Our Clients", subtitle: "Prestigious partners across construction, infrastructure, real estate, and engineering." }),
    /* @__PURE__ */ jsx(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, variants: { visible: { transition: { staggerChildren: 0.06 } } }, className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-5", children: clients.map((client) => /* @__PURE__ */ jsx(motion.div, { variants: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }, whileHover: { y: -6, scale: 1.03 }, className: "grid min-h-28 place-items-center rounded-xl border bg-card p-6 text-center font-heading font-black uppercase text-muted-foreground grayscale shadow-sm transition hover:text-primary hover:grayscale-0", children: client }, client)) }),
    /* @__PURE__ */ jsx(LogoTicker, {})
  ] }) });
}
export {
  ClientsSection as C
};
