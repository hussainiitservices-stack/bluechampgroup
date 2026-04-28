import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { Users, HardHat, Layers3, Building2, Wrench, Network, ClipboardCheck, Target, Eye, Linkedin, MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const contact = {
  phones: ["+971 50 718 2424", "+971 50 718 2295"],
  emails: ["info@bluechampgroup.com", "admin@bluechampgroup.com"],
  location: "Abu Dhabi, UAE",
  website: "www.bluechampgroup.com"
};
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about", children: ["About", "Portfolio", "Team"] },
  { label: "Services", to: "/services", children: ["Manpower", "Contracting", "Fit-Out"] },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" }
];
const heroSlides = [
  { title: "A Complete Manpower Solution in UAE", subtitle: "Manpower Supply" },
  { title: "Engineering & Contracting", subtitle: "Our Team coordinates with recognized consultants and engineers" },
  { title: "Gypsum Interior Works", subtitle: "Custom designs that perfectly cater to client needs" }
];
const subsidiaries = ["Blue Champ General Contracting", "Blue Champ Technical Services", "Blue Champ Tech. Contracting"];
const services = [
  { title: "Manpower Supply", icon: Users, description: "Local/international skilled & unskilled manpower for short, medium & long-term projects" },
  { title: "Civil & Electromechanical Works", icon: HardHat, description: "Complete civil & electromechanical execution for construction projects" },
  { title: "Fit-Out Works", icon: Layers3, description: "Gypsum false ceiling, GRC & GRG decorative works, cladding, partition, painting, insulation" },
  { title: "General Contracting", icon: Building2, description: "Blue Champ General Contracting handles full project delivery" },
  { title: "Technical Services", icon: Wrench, description: "Blue Champ Technical Services for specialized installations" },
  { title: "Infrastructure", icon: Network, description: "Infrastructure engineering and project management" }
];
const roles = [
  "Gypsum Carpenter",
  "Joinery Carpenter",
  "Gypsum Painter",
  "Shuttering Carpenter",
  "Steel Fixer",
  "Mason",
  "Welder",
  "Fabricator",
  "Sand Blaster",
  "Painter",
  "Spray Painter",
  "Rigger",
  "Foreman",
  "Supervisor",
  "Scaffolder",
  "Tile Mason",
  "Fiber Worker",
  "Safety Officer",
  "Safety Assistant",
  "Helper"
];
const fitOutWorks = [
  "Gypsum false ceiling works",
  "Gypsum Decorative Works",
  "GRC & GRG Decorative Works",
  "GRC & GRG Cladding Works",
  "Cladding & Partition Gypsum Works",
  "Interior & Fit Out Works",
  "Painting & Wallpaper Installation Works",
  "Insulation Contracting Works"
];
const counters = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Expert Workers" },
  { value: 10, suffix: "+", label: "Prestigious Clients" }
];
const processSteps = [
  { step: "01", title: "Requirement Analysis", icon: ClipboardCheck, description: "Understanding your project scope and manpower needs" },
  { step: "02", title: "Talent Sourcing", icon: Users, description: "Recruiting skilled and qualified workers from local & international pool" },
  { step: "03", title: "Deployment & Onboarding", icon: HardHat, description: "Managing all employee affairs: medical insurance, sponsorship, government" },
  { step: "04", title: "Ongoing Support", icon: Target, description: "Long, medium & short-term project management with competitive fees" }
];
const clients = ["ALEC", "KHANSAHEB", "Al-Futtaim Carillion", "PIVOT Engineering", "Shapoorji Pallonji", "EMAAR", "Arabtec", "Schneider Electric", "Ghantoot Group", "Samsung C&T"];
const visionMission = [
  { title: "Vision", icon: Eye, tone: "navy", text: "To establish our presence in the UAE market as a one stop destination for all manpower services by providing our clients with skilled & qualified workers within a competitive rate" },
  { title: "Mission", icon: Target, tone: "gradient", text: "To provide our partners with highest quality manpower services by utilizing proven business strategies and methodologies and partnering with our clients to enable them to achieve their long-term objectives and successful completion of projects" }
];
function Footer() {
  const cols = [
    ["Company", ["About", "Portfolio", "Team"]],
    ["Services", ["Manpower", "Contracting", "Fit-Out"]],
    ["Quick Links", ["Career", "Contact", "FAQ"]]
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden bg-brand-navy text-primary-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diamond-pattern opacity-10" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-5 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-lg brand-gradient font-heading font-black", children: "BC" }),
          /* @__PURE__ */ jsx("strong", { className: "font-heading text-2xl", children: "BLUE CHAMP" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-sm text-primary-foreground/70", children: "Complete Manpower Solutions for skilled workers, contracting, fit-out works, and infrastructure projects across the UAE." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { "aria-label": "LinkedIn", className: "rounded-full bg-primary-foreground/10 p-3 hover:bg-accent", href: "#", children: /* @__PURE__ */ jsx(Linkedin, {}) }),
          /* @__PURE__ */ jsx("a", { "aria-label": "WhatsApp", className: "rounded-full bg-primary-foreground/10 p-3 hover:bg-accent", href: "https://wa.me/971507182424", children: /* @__PURE__ */ jsx(MessageCircle, {}) })
        ] })
      ] }),
      cols.map(([title, links]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 font-heading text-lg font-black", children: title }),
        /* @__PURE__ */ jsx("ul", { className: "grid gap-3 text-primary-foreground/70", children: links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: link === "Career" ? "/career" : link === "Contact" ? "/contact" : "/about", className: "hover:text-accent", children: link }) }, link)) })
      ] }, title)),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-4 font-heading text-lg font-black", children: "Contact Info" }),
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/70", children: contact.location }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-primary-foreground/70", children: contact.phones.join(" / ") }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-primary-foreground/70", children: contact.emails.join(" / ") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative border-t border-primary-foreground/10 px-4 py-5 text-center text-sm text-primary-foreground/60", children: "© 2025 Blue Champ Group of Companies. All Rights Reserved." })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "rounded-full brand-gradient text-primary-foreground shadow-[0_14px_34px_color-mix(in_oklab,var(--brand-cyan)_34%,transparent)] hover:shadow-[0_18px_44px_color-mix(in_oklab,var(--brand-cyan)_48%,transparent)] hover:-translate-y-0.5",
        heroOutline: "rounded-full border border-primary-foreground/70 bg-primary-foreground/5 text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/15",
        cyan: "rounded-full bg-accent text-accent-foreground shadow-[0_12px_30px_color-mix(in_oklab,var(--brand-cyan)_34%,transparent)] hover:bg-accent/90"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 px-7 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => scrollY.on("change", (value) => setScrolled(value > 24)), [scrollY]);
  return /* @__PURE__ */ jsxs(motion.header, { initial: { y: -32, opacity: 0 }, animate: { y: 0, opacity: 1 }, className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-navy/95 shadow-2xl backdrop-blur-xl" : "bg-brand-navy/20 backdrop-blur-sm"}`, children: [
    /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8", "aria-label": "Main navigation", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-center gap-3", "aria-label": "Blue Champ home", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-lg brand-gradient font-heading text-lg font-black text-primary-foreground shadow-lg", children: "BC" }),
        /* @__PURE__ */ jsx("span", { className: "font-heading text-xl font-black text-primary-foreground", children: "BLUE CHAMP" })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", animate: "visible", variants: { visible: { transition: { staggerChildren: 0.08 } } }, className: "hidden items-center gap-7 lg:flex", children: [
        navLinks.map((item) => /* @__PURE__ */ jsxs(motion.div, { variants: { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }, className: "group relative", children: [
          /* @__PURE__ */ jsxs(Link, { to: item.to, className: "flex items-center gap-1 text-sm font-semibold text-primary-foreground/90 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform hover:text-primary-foreground hover:after:scale-x-100", children: [
            item.label,
            item.children && /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4", "aria-hidden": "true" })
          ] }),
          item.children && /* @__PURE__ */ jsx("div", { className: "invisible absolute left-0 top-8 w-44 rounded-lg border border-primary-foreground/10 bg-brand-navy/95 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition group-hover:visible group-hover:opacity-100", children: item.children.map((child) => /* @__PURE__ */ jsx("span", { className: "block rounded-md px-3 py-2 text-sm text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground", children: child }, child)) })
        ] }, item.label)),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "gradient", size: "lg", children: /* @__PURE__ */ jsx(Link, { to: "/contact", search: { service: void 0 }, children: "Get a Quote" }) })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "rounded-md p-2 text-primary-foreground lg:hidden", "aria-label": "Open menu", onClick: () => setOpen(true), children: /* @__PURE__ */ jsx(Menu, {}) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(motion.div, { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" }, transition: { type: "spring", damping: 28, stiffness: 220 }, className: "fixed right-0 top-0 z-50 min-h-screen w-80 bg-brand-navy p-6 shadow-2xl lg:hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center justify-between text-primary-foreground", children: [
        /* @__PURE__ */ jsx("strong", { children: "BLUE CHAMP" }),
        /* @__PURE__ */ jsx("button", { "aria-label": "Close menu", onClick: () => setOpen(false), children: /* @__PURE__ */ jsx(X, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: navLinks.map((item) => /* @__PURE__ */ jsx(Link, { to: item.to, onClick: () => setOpen(false), className: "rounded-lg px-4 py-3 font-semibold text-primary-foreground/90 hover:bg-primary-foreground/10", children: item.label }, item.label)) })
    ] }) })
  ] });
}
const appCss = "/assets/styles-gFC4jq0F.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Blue Champ Group | UAE Manpower Solutions" },
      { name: "description", content: "Blue Champ Group provides manpower supply, contracting, technical services, and fit-out works across Abu Dhabi and the UAE." },
      { name: "author", content: "Blue Champ Group of Companies" },
      { property: "og:title", content: "Blue Champ Group | UAE Manpower Solutions" },
      { property: "og:description", content: "Complete manpower, contracting, and fit-out solutions headquartered in Abu Dhabi, UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/971507182424",
        "aria-label": "Contact Blue Champ on WhatsApp",
        className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        children: /* @__PURE__ */ jsx(MessageCircle, { "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./services-BQ9-Jwct.js");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Blue Champ Services | Manpower & Contracting UAE"
    }, {
      name: "description",
      content: "Explore Blue Champ manpower supply, civil and electromechanical works, fit-out works, technical services, and infrastructure support."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./scope-of-work-BHJPvPfO.js");
const Route$5 = createFileRoute("/scope-of-work")({
  head: () => ({
    meta: [{
      title: "Scope of Work | Blue Champ UAE"
    }, {
      name: "description",
      content: "Detailed Blue Champ manpower roles and interior fit-out works including gypsum, GRC, GRG, cladding, partitions, painting, and insulation."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-avg-H0l8.js");
const Route$4 = createFileRoute("/contact")({
  validateSearch: (search) => ({
    service: typeof search.service === "string" ? search.service : void 0
  }),
  head: () => ({
    meta: [{
      title: "Contact Blue Champ | Abu Dhabi UAE"
    }, {
      name: "description",
      content: "Contact Blue Champ Group in Abu Dhabi for manpower supply, contracting, technical services, and fit-out project quotes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./clients-DT3BHSju.js");
const Route$3 = createFileRoute("/clients")({
  head: () => ({
    meta: [{
      title: "Blue Champ Clients | UAE Project Partners"
    }, {
      name: "description",
      content: "Blue Champ works with prestigious clients including ALEC, EMAAR, Arabtec, Schneider Electric, Samsung C&T, and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./career-Kl8sHxtM.js");
const Route$2 = createFileRoute("/career")({
  head: () => ({
    meta: [{
      title: "Careers | Blue Champ Group UAE"
    }, {
      name: "description",
      content: "Join Blue Champ Group of Companies for manpower, contracting, technical services, and fit-out opportunities in the UAE."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DZ9e8Xnq.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Blue Champ | Abu Dhabi Manpower Company"
    }, {
      name: "description",
      content: "Learn about Blue Champ Group, established in 2010 in Abu Dhabi with vision, mission, and complete manpower solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CX9kBmxN.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Blue Champ Group | UAE Manpower Solutions"
    }, {
      name: "description",
      content: "Blue Champ Group provides complete manpower supply, contracting, fit-out, and technical services in Abu Dhabi and across the UAE."
    }, {
      property: "og:title",
      content: "Blue Champ Group | UAE Manpower Solutions"
    }, {
      property: "og:description",
      content: "Skilled manpower, general contracting, technical services, and gypsum interior fit-out works for UAE projects."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const ScopeOfWorkRoute = Route$5.update({
  id: "/scope-of-work",
  path: "/scope-of-work",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const ClientsRoute = Route$3.update({
  id: "/clients",
  path: "/clients",
  getParentRoute: () => Route$7
});
const CareerRoute = Route$2.update({
  id: "/career",
  path: "/career",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CareerRoute,
  ClientsRoute,
  ContactRoute,
  ScopeOfWorkRoute,
  ServicesRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route$4 as R,
  contact as a,
  clients as b,
  counters as c,
  subsidiaries as d,
  router as e,
  fitOutWorks as f,
  heroSlides as h,
  processSteps as p,
  roles as r,
  services as s,
  visionMission as v
};
