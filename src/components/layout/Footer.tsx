import { Link } from "@tanstack/react-router";
import { Linkedin, MessageCircle } from "lucide-react";
import { contact } from "@/lib/constants";

export function Footer() {
  const cols = [
    ["Company", ["About", "Portfolio", "Team"]],
    ["Services", ["Manpower", "Contracting", "Fit-Out"]],
    ["Quick Links", ["Career", "Contact", "FAQ"]],
  ] as const;
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-primary-foreground">
      <div className="absolute inset-0 diamond-pattern opacity-10" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2"><div className="mb-4 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-lg brand-gradient font-heading font-black">BC</span><strong className="font-heading text-2xl">BLUE CHAMP</strong></div><p className="max-w-sm text-primary-foreground/70">Complete Manpower Solutions for skilled workers, contracting, fit-out works, and infrastructure projects across the UAE.</p><div className="mt-6 flex gap-3"><a aria-label="LinkedIn" className="rounded-full bg-primary-foreground/10 p-3 hover:bg-accent" href="#"><Linkedin /></a><a aria-label="WhatsApp" className="rounded-full bg-primary-foreground/10 p-3 hover:bg-accent" href="https://wa.me/971507182424"><MessageCircle /></a></div></div>
        {cols.map(([title, links]) => <div key={title}><h3 className="mb-4 font-heading text-lg font-black">{title}</h3><ul className="grid gap-3 text-primary-foreground/70">{links.map((link) => <li key={link}><Link to={link === "Career" ? "/career" : link === "Contact" ? "/contact" : "/about"} className="hover:text-accent">{link}</Link></li>)}</ul></div>)}
        <div><h3 className="mb-4 font-heading text-lg font-black">Contact Info</h3><p className="text-primary-foreground/70">{contact.location}</p><p className="mt-3 text-primary-foreground/70">{contact.phones.join(" / ")}</p><p className="mt-3 text-primary-foreground/70">{contact.emails.join(" / ")}</p></div>
      </div>
      <div className="relative border-t border-primary-foreground/10 px-4 py-5 text-center text-sm text-primary-foreground/60">© 2025 Blue Champ Group of Companies. All Rights Reserved.</div>
    </footer>
  );
}
