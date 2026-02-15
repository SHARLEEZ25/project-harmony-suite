import { Code2, Layout, Rocket, Workflow } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const services = [
  {
    icon: Layout,
    title: "Full-Stack Web Applications",
    description: "Role-based platforms, operational dashboards, and secure portals. We handle authentication, data management, and complex user workflows end-to-end.",
  },
  {
    icon: Rocket,
    title: "Product MVPs & Platforms",
    description: "From initial concept to production-ready systems. We focus on building functional prototypes and modular architectures that support ongoing iteration.",
  },
  {
    icon: Workflow,
    title: "Operational & Workflow Systems",
    description: "Replacing spreadsheets and manual tracking with integrated software. We build systems that streamline operations and eliminate bottlenecks.",
  },
  {
    icon: Code2,
    title: "Key Technologies",
    description: "React, Node.js, Python, TypeScript, AWS, and more.",
  },
];

const ServicesSection = () => (
  <section className="w-full px-6 py-24 md:py-32 bg-secondary/20">
    <div className="max-w-screen-2xl mx-auto w-full">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-12 md:mb-16">
          What We Build
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.1} fullWidth>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors h-full shadow-sm hover:shadow-xl"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
