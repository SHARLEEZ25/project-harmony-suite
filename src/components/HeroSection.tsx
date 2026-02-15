import { Settings2, Lightbulb, Brain } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer } from "@/components/ui/stagger-container";

const badges = [
  { icon: Settings2, label: "FULL-STACK DEVELOPMENT" },
  { icon: Lightbulb, label: "PRODUCT EXECUTION" },
  { icon: Brain, label: "AI INTEGRATION & CUSTOM TOOLING" },
];

const HeroSection = () => (
  <section className="w-full px-6 py-24 md:py-32 min-h-[50vh] flex flex-col justify-center bg-background border-b border-border/40">
    <div className="max-w-screen-2xl mx-auto w-full">
      <FadeIn>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-foreground leading-tight mb-8 max-w-5xl">
          Software Systems &amp; Product Development
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed mb-12">
          We build custom software products and internal systems designed to address specific operational challenges. Our approach focuses on technical clarity and practical implementation to deliver tools that improve organizational workflows.
        </p>
      </FadeIn>
      <StaggerContainer className="flex flex-wrap gap-4" delayChildren={0.4}>
        {badges.map(({ icon: Icon, label }) => (
          <FadeIn key={label} direction="none" className="inline-flex">
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-base font-medium text-foreground tracking-wide hover:bg-input transition-colors cursor-default"
            >
              <Icon className="w-5 h-5 text-muted-foreground" />
              {label}
            </span>
          </FadeIn>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default HeroSection;
