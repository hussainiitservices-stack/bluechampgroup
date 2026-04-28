import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Send } from "lucide-react";
import { B as Button } from "./router-C_bSkdxS.js";
import "@tanstack/react-router";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function CareerPage() {
  return /* @__PURE__ */ jsx("section", { className: "min-h-screen bg-background px-4 pb-24 pt-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-black text-foreground", children: "Careers" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-lg leading-8 text-muted-foreground", children: "Blue Champ recruits skilled and qualified workers from local and international pools for short, medium and long-term project deployment." }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "mt-10 rounded-2xl border bg-card p-8 shadow-xl", children: [
      /* @__PURE__ */ jsx(BriefcaseBusiness, { className: "h-12 w-12 text-primary" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 text-3xl font-black", children: "Submit Your Profile" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Share your trade, experience, and availability for upcoming UAE manpower requirements." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx("input", { "aria-label": "Full name", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring", placeholder: "Full name" }),
        /* @__PURE__ */ jsx("input", { "aria-label": "Trade or role", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring", placeholder: "Trade / role" }),
        /* @__PURE__ */ jsx("input", { "aria-label": "Phone", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring", placeholder: "Phone" }),
        /* @__PURE__ */ jsx("input", { "aria-label": "Experience", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring", placeholder: "Experience" })
      ] }),
      /* @__PURE__ */ jsxs(Button, { className: "mt-6", variant: "gradient", size: "xl", children: [
        /* @__PURE__ */ jsx(Send, {}),
        "Apply Now"
      ] })
    ] })
  ] }) });
}
export {
  CareerPage as component
};
