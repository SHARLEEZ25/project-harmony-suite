const services = [
  {
    title: "Full-Stack Web Applications",
    description:
      "Role-based platforms, operational dashboards, secure portals, and internal tools built with modern architecture. We handle authentication, data management, and complex user workflows end-to-end.",
  },
  {
    title: "Product MVPs & Platforms",
    description:
      "From initial concept to production-ready systems. We translate ideas into thoughtful system designs, then build scalable platforms that support growth and iteration as your product evolves.",
  },
  {
    title: "Operational & Workflow Systems",
    description:
      "Replacing spreadsheets, manual tracking, and fragmented communication tools with integrated software. We build systems that streamline operations and eliminate process bottlenecks.",
  },
];

const ServicesSection = () => (
  <section className="px-6 py-16 max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-10">
      What We Build
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((s) => (
        <div
          key={s.title}
          className="bg-card rounded-xl p-6 border border-border"
        >
          <h3 className="text-xl font-bold font-heading text-foreground mb-3">
            {s.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {s.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
