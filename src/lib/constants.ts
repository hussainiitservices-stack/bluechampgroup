import { Building2, ClipboardCheck, Eye, HardHat, Layers3, Network, Target, Users, Wrench } from "lucide-react";

export const contact = {
  phones: ["+971 50 718 2424", "+971 50 718 2295"],
  emails: ["info@bluechampgroup.com", "admin@bluechampgroup.com"],
  location: "Abu Dhabi, UAE",
  website: "www.bluechampgroup.com",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about", children: ["About", "Portfolio", "Team"] },
  { label: "Services", to: "/services", children: ["Manpower", "Contracting", "Fit-Out"] },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
];

export const heroSlides = [
  { title: "A Complete Manpower Solution in UAE", subtitle: "Manpower Supply" },
  { title: "Engineering & Contracting", subtitle: "Our Team coordinates with recognized consultants and engineers" },
  { title: "Gypsum Interior Works", subtitle: "Custom designs that perfectly cater to client needs" },
];

export const subsidiaries = ["Blue Champ General Contracting", "Blue Champ Technical Services", "Blue Champ Tech. Contracting"];

export const services = [
  { title: "Manpower Supply", icon: Users, description: "Local/international skilled & unskilled manpower for short, medium & long-term projects" },
  { title: "Civil & Electromechanical Works", icon: HardHat, description: "Complete civil & electromechanical execution for construction projects" },
  { title: "Fit-Out Works", icon: Layers3, description: "Gypsum false ceiling, GRC & GRG decorative works, cladding, partition, painting, insulation" },
  { title: "General Contracting", icon: Building2, description: "Blue Champ General Contracting handles full project delivery" },
  { title: "Technical Services", icon: Wrench, description: "Blue Champ Technical Services for specialized installations" },
  { title: "Infrastructure", icon: Network, description: "Infrastructure engineering and project management" },
];

export const roles = [
  "Gypsum Carpenter", "Joinery Carpenter", "Gypsum Painter", "Shuttering Carpenter", "Steel Fixer", "Mason", "Welder", "Fabricator", "Sand Blaster", "Painter", "Spray Painter", "Rigger", "Foreman", "Supervisor", "Scaffolder", "Tile Mason", "Fiber Worker", "Safety Officer", "Safety Assistant", "Helper",
];

export const fitOutWorks = [
  "Gypsum false ceiling works", "Gypsum Decorative Works", "GRC & GRG Decorative Works", "GRC & GRG Cladding Works", "Cladding & Partition Gypsum Works", "Interior & Fit Out Works", "Painting & Wallpaper Installation Works", "Insulation Contracting Works",
];

export const counters = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Expert Workers" },
  { value: 10, suffix: "+", label: "Prestigious Clients" },
];

export const processSteps = [
  { step: "01", title: "Requirement Analysis", icon: ClipboardCheck, description: "Understanding your project scope and manpower needs" },
  { step: "02", title: "Talent Sourcing", icon: Users, description: "Recruiting skilled and qualified workers from local & international pool" },
  { step: "03", title: "Deployment & Onboarding", icon: HardHat, description: "Managing all employee affairs: medical insurance, sponsorship, government" },
  { step: "04", title: "Ongoing Support", icon: Target, description: "Long, medium & short-term project management with competitive fees" },
];

export const clients = ["ALEC", "KHANSAHEB", "Al-Futtaim Carillion", "PIVOT Engineering", "Shapoorji Pallonji", "EMAAR", "Arabtec", "Schneider Electric", "Ghantoot Group", "Samsung C&T"];

export const visionMission = [
  { title: "Vision", icon: Eye, tone: "navy", text: "To establish our presence in the UAE market as a one stop destination for all manpower services by providing our clients with skilled & qualified workers within a competitive rate" },
  { title: "Mission", icon: Target, tone: "gradient", text: "To provide our partners with highest quality manpower services by utilizing proven business strategies and methodologies and partnering with our clients to enable them to achieve their long-term objectives and successful completion of projects" },
];
