import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionMission } from "@/components/sections/VisionMission";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [{ title: "About Blue Champ | Abu Dhabi Manpower Company" }, { name: "description", content: "Learn about Blue Champ Group, established in 2010 in Abu Dhabi with vision, mission, and complete manpower solutions." }] }), component: AboutPage });
function AboutPage() { return <><div className="bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground"><div className="mx-auto max-w-7xl"><h1 className="text-5xl font-black">About Blue Champ</h1><p className="mt-4 max-w-3xl text-primary-foreground/75">Established in 2010, Blue Champ Group of Companies provides skilled manpower, contracting, and fit-out solutions across the UAE.</p></div></div><AboutSection /><VisionMission /><CTABanner /></>; }
