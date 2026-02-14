import finance1 from "@/assets/finance-1.png";

const CaseStudyFinance = () => (
  <section className="px-6 py-16 max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
      Internal Workflow Tool — Finance &amp; Compliance
    </h2>

    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">The Problem</h3>
        <p className="text-muted-foreground leading-relaxed">
          Finance teams needed to replace manual compliance tracking (spreadsheets, email chains) causing missed deadlines and documentation loss.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">What We're Building</h3>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Centralized dashboard with task tracking, calendar views, and reminder interfaces</li>
          <li>Role-based designs for different team permission levels and workflows</li>
          <li>Document attachment UI and proof-of-completion interaction patterns</li>
          <li>Escalation indicators with visual priority system for overdue items</li>
        </ul>
      </div>

      <img
        src={finance1}
        alt="Finance workflow dashboard"
        className="rounded-lg border border-border w-full h-auto"
        loading="lazy"
      />

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Current Status</h3>
        <p className="text-muted-foreground leading-relaxed">
          MVP and validation stage with core functionality deployed for testing with real operations teams.
        </p>
      </div>
    </div>
  </section>
);

export default CaseStudyFinance;
