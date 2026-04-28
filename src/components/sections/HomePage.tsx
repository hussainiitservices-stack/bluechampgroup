import { AboutSection } from "./AboutSection";
import { AboutStrip } from "./AboutStrip";
import { ClientsSection } from "./ClientsSection";
import { ContactSection } from "./ContactSection";
import { CTABanner } from "./CTABanner";
import { HeroSection } from "./HeroSection";
import { ProcessSection } from "./ProcessSection";
import { ScopeOfWork } from "./ScopeOfWork";
import { ServicesSection } from "./ServicesSection";
import { StatsSection } from "./StatsSection";
import { VisionMission } from "./VisionMission";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutStrip />
      <AboutSection />
      <VisionMission />
      <ServicesSection />
      <ScopeOfWork />
      <StatsSection />
      <ProcessSection />
      <ClientsSection />
      <CTABanner />
      <ContactSection />
    </>
  );
}
