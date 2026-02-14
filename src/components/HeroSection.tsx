import { Settings2, Lightbulb, Workflow } from "lucide-react";

const badges = [
  { icon: Settings2, label: "FULL-STACK DEVELOPMENT" },
  { icon: Lightbulb, label: "PRODUCT EXECUTION" },
  { icon: Workflow, label: "WORKFLOW AUTOMATION" },
];

const HeroSection = () => (
  <section className="px-6 py-20 md:py-32 max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
      Hodotech Software Systems &amp; Product Development
    </h1>
    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
      We build custom software products and internal systems that solve real operational problems. Our approach combines full-stack technical expertise with product thinking to deliver systems that organizations actually use and depend on.
    </p>
    <div className="flex flex-wrap gap-3">
      {badges.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground tracking-wide"
        >
          <Icon className="w-4 h-4 text-muted-foreground" />
          {label}
        </span>
      ))}
    </div>
  </section>
);

export default HeroSection;
