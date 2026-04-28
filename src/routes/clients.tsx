import { createFileRoute } from "@tanstack/react-router";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/clients")({ head: () => ({ meta: [{ title: "Blue Champ Clients | UAE Project Partners" }, { name: "description", content: "Blue Champ works with prestigious clients including ALEC, EMAAR, Arabtec, Schneider Electric, Samsung C&T, and more." }] }), component: ClientsPage });
function ClientsPage() { return <><div className="bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground"><div className="mx-auto max-w-7xl"><h1 className="text-5xl font-black">Our Clients</h1></div></div><ClientsSection /><CTABanner /></>; }
