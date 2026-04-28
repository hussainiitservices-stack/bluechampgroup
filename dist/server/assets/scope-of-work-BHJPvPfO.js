import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as ScopeOfWork, a as StatsSection } from "./StatsSection-BlOCWjQa.js";
import "framer-motion";
import "lucide-react";
import "./router-C_bSkdxS.js";
import "@tanstack/react-router";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "react-intersection-observer";
function ScopePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("h1", { className: "text-5xl font-black", children: "Scope of Work" }) }) }),
    /* @__PURE__ */ jsx(ScopeOfWork, {}),
    /* @__PURE__ */ jsx(StatsSection, {})
  ] });
}
export {
  ScopePage as component
};
