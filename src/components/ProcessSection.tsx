const steps = [
  { title: "Understand", desc: "We start by understanding the real problem and existing workflows, not jumping to solutions." },
  { title: "Design", desc: "We design system architecture and data flows that support both current needs and future scale." },
  { title: "Build", desc: "We build incrementally with regular feedback loops, ensuring we're solving the right problems." },
  { title: "Ship", desc: "We ship usable software that people depend on, not demos that impress in meetings but fail in practice." },
];

const ProcessSection = () => (
  <section className="px-6 py-16 max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-10">
      How We Work
    </h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {steps.map((s, i) => (
        <div key={s.title} className="space-y-2">
          <div className="text-3xl font-heading font-bold text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</div>
          <h3 className="text-lg font-heading font-semibold text-foreground">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProcessSection;
