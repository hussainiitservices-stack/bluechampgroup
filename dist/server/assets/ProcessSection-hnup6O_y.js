import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquareQuote, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { f as fadeUp, S as SectionHeading, s as staggerContainer } from "./CTABanner-D9LMzZGI.js";
import { B as Button, s as services, p as processSteps } from "./router-C_bSkdxS.js";
import { useState } from "react";
function ServiceCard({ title, description, icon: Icon, selected = false, onSelect }) {
  return /* @__PURE__ */ jsxs(motion.article, { variants: fadeUp, whileHover: { y: -8, boxShadow: "0 20px 40px color-mix(in oklab, var(--brand-cyan) 30%, transparent)" }, className: `group flex min-h-72 flex-col overflow-hidden rounded-xl border bg-card shadow-lg transition-colors hover:bg-brand-navy ${selected ? "ring-2 ring-accent" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "h-1.5 brand-gradient" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-7", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground", children: /* @__PURE__ */ jsx(Icon, { className: "h-7 w-7", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-card-foreground transition-colors group-hover:text-primary-foreground", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 leading-7 text-muted-foreground transition-colors group-hover:text-primary-foreground/80", children: description }),
      /* @__PURE__ */ jsxs(Button, { type: "button", variant: selected ? "cyan" : "outline", className: "mt-auto w-fit rounded-full", onClick: onSelect, "aria-label": `Select ${title} for quote`, children: [
        selected && /* @__PURE__ */ jsx(CheckCircle2, { "aria-hidden": "true" }),
        selected ? "Selected" : "Select for quote"
      ] })
    ] })
  ] });
}
function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0]?.title ?? "Manpower Supply");
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "relative overflow-hidden bg-background py-20 md:py-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-full bg-secondary/70 md:w-[33%]", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Capabilities", title: "Our Services", subtitle: "Manpower, contracting, technical services, fit-out execution, and infrastructure support for demanding UAE projects." }),
      /* @__PURE__ */ jsx(motion.div, { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.18 }, className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: services.map((service) => /* @__PURE__ */ jsx(ServiceCard, { ...service, selected: selectedService === service.title, onSelect: () => setSelectedService(service.title) }, service.title)) }),
      /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, className: "relative mt-10 overflow-hidden rounded-2xl bg-[url('/services_bg.png')] bg-cover bg-center bg-no-repeat p-6 text-primary-foreground shadow-2xl md:p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-navy/80" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 brand-gradient opacity-60 mix-blend-multiply" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diamond-pattern opacity-15", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground", children: /* @__PURE__ */ jsx(MessageSquareQuote, { "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-accent", children: "Request a Quote" }),
              /* @__PURE__ */ jsxs("h3", { className: "mt-2 text-2xl font-black md:text-3xl", children: [
                "Get pricing for ",
                selectedService
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-primary-foreground/75", children: "We’ll pre-fill the contact form so your enquiry reaches the right team faster." })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "cyan", size: "xl", className: "shrink-0", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", search: { service: selectedService }, hash: "quote-form", "aria-label": `Request a quote for ${selectedService}`, children: [
            "Continue ",
            /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
function ProcessSection() {
  return /* @__PURE__ */ jsx("section", { id: "working-plan", className: "bg-background py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Process", title: "Our Working Plan", subtitle: "A disciplined deployment flow built for demanding construction, infrastructure, and fit-out schedules." }),
    /* @__PURE__ */ jsxs("div", { className: "relative grid gap-8 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-accent/50 lg:block", "aria-hidden": "true" }),
      processSteps.map((step, i) => /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, x: -30, y: 24 },
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: true, amount: 0.2 },
          whileHover: { y: -8 },
          transition: { type: "spring", damping: 18, stiffness: 130, delay: i * 0.12 },
          className: "relative rounded-2xl bg-background p-6 shadow-lg ring-1 ring-border",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-6 grid h-20 w-20 place-items-center rounded-full brand-gradient font-heading text-2xl font-black text-primary-foreground shadow-xl", children: step.step }),
            /* @__PURE__ */ jsx(step.icon, { className: "mb-4 h-8 w-8 text-primary", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 leading-7 text-muted-foreground", children: step.description })
          ]
        },
        step.step
      ))
    ] })
  ] }) });
}
export {
  ProcessSection as P,
  ServicesSection as S
};
