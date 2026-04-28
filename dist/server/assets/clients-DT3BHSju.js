import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as ClientsSection } from "./ClientsSection-BkDQGKB0.js";
import { C as CTABanner } from "./CTABanner-D9LMzZGI.js";
import "framer-motion";
import "./router-C_bSkdxS.js";
import "@tanstack/react-router";
import "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function ClientsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("h1", { className: "text-5xl font-black", children: "Our Clients" }) }) }),
    /* @__PURE__ */ jsx(ClientsSection, {}),
    /* @__PURE__ */ jsx(CTABanner, {})
  ] });
}
export {
  ClientsPage as component
};
