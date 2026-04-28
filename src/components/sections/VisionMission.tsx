import { motion } from "framer-motion";
import { visionMission } from "@/lib/constants";

export function VisionMission() {
  return (
    <section id="vision-mission" className="relative overflow-hidden bg-[url('/vision_bg.png')] bg-cover bg-center bg-no-repeat py-24">
      <div className="absolute inset-0 bg-brand-light/90 backdrop-blur-sm" />
      <div className="absolute inset-0 diamond-pattern opacity-25" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 lg:px-8">
        {visionMission.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 80, rotateX: 22 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", damping: 18, stiffness: 120, delay: i * 0.12 }}
            className={`relative min-h-80 overflow-hidden rounded-2xl p-8 text-primary-foreground shadow-2xl md:p-10 ${item.tone === "gradient" ? "brand-gradient" : "bg-brand-navy"}`}
          >
            <div className="absolute -right-12 -top-14 h-44 w-44 rotate-45 border-2 border-primary-foreground/15" aria-hidden="true" />
            <div className="absolute bottom-6 right-8 font-heading text-8xl font-black text-primary-foreground/10" aria-hidden="true">0{i + 1}</div>
            <div className="relative flex h-full flex-col justify-between">
              <item.icon className="mb-8 h-12 w-12 text-accent" aria-hidden="true" />
              <div>
                <h2 className="text-3xl font-black uppercase md:text-4xl">{item.title}</h2>
                <p className="mt-5 text-lg leading-8 text-primary-foreground/82">{item.text}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
