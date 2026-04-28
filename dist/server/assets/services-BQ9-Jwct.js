import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as ServicesSection, P as ProcessSection } from "./ProcessSection-hnup6O_y.js";
import { C as CTABanner } from "./CTABanner-D9LMzZGI.js";
import "framer-motion";
import "lucide-react";
import "@tanstack/react-router";
import "./router-C_bSkdxS.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function ServicesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-black", children: "Services" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-primary-foreground/75", children: "Local and international skilled and unskilled manpower for short, medium, and long-term projects." })
    ] }) }),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(ProcessSection, {}),
    /* @__PURE__ */ jsx(CTABanner, {})
  ] });
}
export {
  ServicesPage as component
};
