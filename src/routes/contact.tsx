import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({ validateSearch: (search) => ({ service: typeof search.service === "string" ? search.service : undefined }), head: () => ({ meta: [{ title: "Contact Blue Champ | Abu Dhabi UAE" }, { name: "description", content: "Contact Blue Champ Group in Abu Dhabi for manpower supply, contracting, technical services, and fit-out project quotes." }] }), component: ContactPage });
function ContactPage() { const { service } = Route.useSearch(); return <><div className="bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground"><div className="mx-auto max-w-7xl"><h1 className="text-5xl font-black">Contact Blue Champ</h1><p className="mt-4 text-primary-foreground/75">Abu Dhabi, UAE • +971 50 718 2424 • info@bluechampgroup.com</p></div></div><ContactSection selectedService={service} /></>; }
