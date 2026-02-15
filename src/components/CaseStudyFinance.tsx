import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import financeImage from "@/assets/finance-1.png";

const CaseStudyFinance = () => (
  <section className="w-full px-6 py-24 md:py-32 bg-background">
    <div className="max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border">
            <img src={financeImage} alt="Financial Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Case Study</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
            Finance & Compliance Tool
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Centralized internal workflow platform for automated compliance tracking and task management. Currently in the MVP validation stage with core functionality deployed for operations testing.
          </p>
          <Link to="/projects/finance">
            <Button variant="outline" size="lg" className="text-lg">
              View Details <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudyFinance;
