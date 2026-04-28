import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Globe, Building2 } from "lucide-react";
import { s as services, B as Button, a as contact } from "./router-C_bSkdxS.js";
function ContactSection({ selectedService }) {
  const subject = selectedService ? `Quote request for ${selectedService}` : "";
  return /* @__PURE__ */ jsx("section", { id: "quote-form", className: "scroll-mt-24 bg-background py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8", children: [
    /* @__PURE__ */ jsxs(motion.form, { initial: { opacity: 0, x: -80 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 }, className: "rounded-2xl border bg-card p-7 shadow-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black", children: "Get a Quote" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx("input", { "aria-label": "Name", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring", placeholder: "Name" }),
        /* @__PURE__ */ jsx("input", { "aria-label": "Company", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring", placeholder: "Company" }),
        /* @__PURE__ */ jsx("input", { "aria-label": "Email", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring", placeholder: "Email", type: "email" }),
        /* @__PURE__ */ jsx("input", { "aria-label": "Phone", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring", placeholder: "Phone" }),
        /* @__PURE__ */ jsxs("select", { "aria-label": "Service Required", defaultValue: selectedService ?? "", className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring sm:col-span-2", children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "Service Required" }),
          services.map((s) => /* @__PURE__ */ jsx("option", { value: s.title, children: s.title }, s.title))
        ] }),
        /* @__PURE__ */ jsx("input", { "aria-label": "Subject", defaultValue: subject, className: "rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring sm:col-span-2", placeholder: "Subject" }),
        /* @__PURE__ */ jsx("textarea", { "aria-label": "Message", defaultValue: selectedService ? `I would like to request a quote for ${selectedService}.` : "", className: "min-h-36 rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring sm:col-span-2", placeholder: "Message" })
      ] }),
      /* @__PURE__ */ jsxs(Button, { className: "mt-6", variant: "gradient", size: "xl", type: "button", children: [
        /* @__PURE__ */ jsx(Send, {}),
        "Submit"
      ] })
    ] }),
    /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 80 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 }, className: "grid gap-5", children: [
      /* @__PURE__ */ jsx(Info, { icon: MapPin, title: "Location", text: contact.location }),
      /* @__PURE__ */ jsx(Info, { icon: Phone, title: "Phone", text: contact.phones.join(" / ") }),
      /* @__PURE__ */ jsx(Info, { icon: Mail, title: "Email", text: contact.emails.join(" / ") }),
      /* @__PURE__ */ jsx(Info, { icon: Globe, title: "Website", text: contact.website }),
      /* @__PURE__ */ jsxs("div", { className: "grid min-h-56 place-items-center rounded-2xl border bg-secondary text-center", children: [
        /* @__PURE__ */ jsx(Building2, { className: "mx-auto mb-3 h-12 w-12 text-primary" }),
        /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Map: Abu Dhabi, UAE" })
      ] })
    ] })
  ] }) });
}
function Info({ icon: Icon, title, text }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-xl border bg-card p-5 shadow-sm", children: [
    /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary", children: /* @__PURE__ */ jsx(Icon, {}) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-black", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: text })
    ] })
  ] });
}
export {
  ContactSection as C
};
