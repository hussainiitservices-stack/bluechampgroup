import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as ContactSection } from "./ContactSection-_DlTDqYF.js";
import { R as Route } from "./router-C_bSkdxS.js";
import "framer-motion";
import "lucide-react";
import "@tanstack/react-router";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function ContactPage() {
  const {
    service
  } = Route.useSearch();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-black", children: "Contact Blue Champ" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-primary-foreground/75", children: "Abu Dhabi, UAE • +971 50 718 2424 • info@bluechampgroup.com" })
    ] }) }),
    /* @__PURE__ */ jsx(ContactSection, { selectedService: service })
  ] });
}
export {
  ContactPage as component
};
