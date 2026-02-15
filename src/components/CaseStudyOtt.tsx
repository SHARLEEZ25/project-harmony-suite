import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ottImage from "@/assets/ott-1.jpg";

const CaseStudyOtt = () => (
  <section className="w-full px-6 py-24 md:py-32 bg-secondary/5 border-b border-border/40">
    <div className="max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 order-1 md:order-1">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Case Study</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
            AI Poster Generation for OTT
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Integrated an AI-powered module into an OTT platform to automate promotional poster creation. Built a 3-week prototype using Hugging Face and FFmpeg for intelligent scene detection and frame analysis.
          </p>
          <Link to="/projects/ott">
            <Button variant="outline" size="lg" className="text-lg">
              View Details <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 order-2 md:order-2">
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img src={ottImage} alt="OTT Platform Interface" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudyOtt;


