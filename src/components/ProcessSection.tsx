import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "framer-motion";

const steps = [
  "Discovery & Planning",
  "Design & Prototyping",
  "Development & Testing",
  "Deployment & Support",
];

const ProcessSection = () => (
  <section className="w-full px-6 py-24 md:py-32 bg-background">
    <div className="max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
        <div className="lg:w-1/2">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-8">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We follow a transparent, iterative process to ensure your project is delivered on time and meets your core objectives. From initial concept to validation, we keep you informed every step of the way.
            </p>
          </FadeIn>
        </div>
        <StaggerContainer className="lg:w-1/2 grid gap-6" delayChildren={0.2}>
          {steps.map((step, index) => (
            <FadeIn key={step} direction="left" delay={index * 0.1} className="w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-card p-6 rounded-xl border border-border"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </span>
                <span className="text-xl font-medium">{step}</span>
                <CheckCircle2 className="w-6 h-6 text-green-500 ml-auto" />
              </motion.div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
);

export default ProcessSection;
