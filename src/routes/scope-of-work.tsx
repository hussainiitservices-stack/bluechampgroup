import { createFileRoute } from "@tanstack/react-router";
import { ScopeOfWork } from "@/components/sections/ScopeOfWork";
import { StatsSection } from "@/components/sections/StatsSection";

export const Route = createFileRoute("/scope-of-work")({ head: () => ({ meta: [{ title: "Scope of Work | Blue Champ UAE" }, { name: "description", content: "Detailed Blue Champ manpower roles and interior fit-out works including gypsum, GRC, GRG, cladding, partitions, painting, and insulation." }] }), component: ScopePage });
function ScopePage() { return <><div className="bg-brand-navy px-4 pb-16 pt-32 text-primary-foreground"><div className="mx-auto max-w-7xl"><h1 className="text-5xl font-black">Scope of Work</h1></div></div><ScopeOfWork /><StatsSection /></>; }
