import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AboutSection, V as VisionMission } from "./VisionMission-4h0WPUVl.js";
import { C as CTABanner } from "./CTABanner-D9LMzZGI.js";
import "@tanstack/react-router";
import "framer-motion";
import "lucide-react";
import "./router-C_bSkdxS.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-black", children: "About Blue Champ" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-primary-foreground/75", children: "Established in 2010, Blue Champ Group of Companies provides skilled manpower, contracting, and fit-out solutions across the UAE." })
    ] }) }),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(VisionMission, {}),
    /* @__PURE__ */ jsx(CTABanner, {})
  ] });
}
export {
  AboutPage as component
};
