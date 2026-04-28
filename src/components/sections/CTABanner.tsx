import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/constants";

export function CTABanner() {
  return <section className="relative overflow-hidden bg-[url('/cta_bg.png')] bg-cover bg-center bg-no-repeat bg-fixed py-20 text-primary-foreground"><div className="absolute inset-0 bg-brand-navy/75" /><div className="absolute inset-0 brand-gradient opacity-80 mix-blend-multiply" /><div className="absolute inset-0 diamond-pattern opacity-15" /><div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><h2 className="text-4xl font-black md:text-5xl">Ready to Build with Champions?</h2><p className="mt-4 text-lg text-primary-foreground/75">Get skilled manpower for your next project in the UAE. We handle everything.</p><p className="mt-5 font-heading text-2xl font-black text-accent">{contact.phones.join(" | ")}</p></div><div className="flex flex-wrap gap-4"><Button asChild variant="cyan" size="xl"><Link to="/contact" search={{ service: undefined }}>Get a Quote</Link></Button><Button asChild variant="heroOutline" size="xl"><a href="tel:+971507182424">Call Us Now</a></Button></div></div></section>;
}
