import { Cpu, Rocket, Shield, Workflow } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const services = [
  {
    icon: Workflow,
    title: "Intelligent Operational Systems",
    description: "We design systems that combine software + automation + AI to run core business workflows. We build systems that think, route, notify, enforce, and scale.",
  },
  {
    icon: Rocket,
    title: "AI-Integrated Product Launch",
    description: "Partnering with founders to operationalize AI-ready products. Architecture built for AI integration and backends designed for scale from day one.",
  },
  {
    icon: Shield,
    title: "Execution Infrastructure",
    description: "Replacing fragile spreadsheets with execution infrastructure. Approval chains, monitoring dashboards, and AI-assisted decision layers to eliminate bottlenecks.",
  },
  {
    icon: Cpu,
    title: "Systems Architecture & AI",
    description: "Intersection of software architecture and AI orchestration. We choose tools based on business leverage, building long-term evolution into every layer.",
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
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors h-full shadow-sm hover:shadow-xl group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
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
