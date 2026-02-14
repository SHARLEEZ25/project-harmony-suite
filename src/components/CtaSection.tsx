const helpItems = [
  { title: "Custom Internal Tools", desc: "Systems tailored to your specific operational workflows" },
  { title: "Full-Stack Product Builds", desc: "End-to-end platform development from concept to production" },
  { title: "Early-Stage MVP Execution", desc: "Rapid validation and iteration for new product concepts" },
  { title: "Workflow Automation", desc: "Eliminating manual processes for ops-heavy teams" },
];

const CtaSection = () => (
  <section className="px-6 py-16 max-w-4xl mx-auto">
    <hr className="border-border mb-12" />
    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-8">
      How We Can Help
    </h2>
    <div className="grid sm:grid-cols-2 gap-6 mb-12">
      {helpItems.map((item) => (
        <div key={item.title} className="bg-card rounded-xl p-5 border border-border">
          <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>

    <p className="text-muted-foreground leading-relaxed mb-6">
      If you have a real problem that needs a real system, we can help. We partner with founders and engineering leaders who value execution over promises.
    </p>

    <a
      href="https://wa.me/7845565637"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
    >
      Get in Touch
    </a>
  </section>
);

export default CtaSection;
