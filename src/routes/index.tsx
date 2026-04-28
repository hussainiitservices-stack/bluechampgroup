import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/sections/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blue Champ Group | UAE Manpower Solutions" },
      { name: "description", content: "Blue Champ Group provides complete manpower supply, contracting, fit-out, and technical services in Abu Dhabi and across the UAE." },
      { property: "og:title", content: "Blue Champ Group | UAE Manpower Solutions" },
      { property: "og:description", content: "Skilled manpower, general contracting, technical services, and gypsum interior fit-out works for UAE projects." },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
