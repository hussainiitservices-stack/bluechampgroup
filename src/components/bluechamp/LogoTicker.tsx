import { clients } from "@/lib/constants";

export function LogoTicker() {
  const logos = [...clients, ...clients];
  return (
    <div className="mt-12 overflow-hidden border-y border-border bg-background/70 py-5">
      <div className="flex w-max animate-logo-scroll gap-5">
        {logos.map((client, index) => (
          <div key={`${client}-${index}`} className="flex min-w-52 items-center justify-center rounded-lg border bg-card px-8 py-4 text-sm font-black uppercase text-muted-foreground grayscale transition hover:text-primary hover:grayscale-0">
            {client}
          </div>
        ))}
      </div>
    </div>
  );
}
