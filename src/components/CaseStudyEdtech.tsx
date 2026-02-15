import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import edtechImage from "@/assets/edtech-1.png";

const CaseStudyEdtech = () => (
  <section className="w-full px-6 py-24 md:py-32 bg-background border-b border-border/40">
    <div className="max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border">
            <img src={edtechImage} alt="EdTech Platform Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Case Study</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
            EdTech Platform for Internships
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            EdTech recruitment platform with AI matching engine (Natural.js), application tracking system, and interview scheduler. React + Node.js + PostgreSQL. 8-week solo build.
          </p>
          <Link to="/projects/edtech">
            <Button variant="outline" size="lg" className="text-lg">
              View Details <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudyEdtech;
