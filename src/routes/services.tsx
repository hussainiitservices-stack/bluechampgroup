import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [{ title: "Blue Champ Services | Manpower & Contracting UAE" }, { name: "description", content: "Explore Blue Champ manpower supply, civil and electromechanical works, fit-out works, technical services, and infrastructure support." }] }), component: ServicesPage });
function ServicesPage() { return <><div className="bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground"><div className="mx-auto max-w-7xl"><h1 className="text-5xl font-black">Services</h1><p className="mt-4 max-w-3xl text-primary-foreground/75">Local and international skilled and unskilled manpower for short, medium, and long-term projects.</p></div></div><ServicesSection /><ProcessSection /><CTABanner /></>; }
