import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudyEdtech from "@/components/CaseStudyEdtech";
import CaseStudyOtt from "@/components/CaseStudyOtt";
import CaseStudyFinance from "@/components/CaseStudyFinance";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";

const Index = () => (
  <main className="min-h-screen bg-background">
    <HeroSection />
    <ServicesSection />
    <CaseStudyEdtech />
    <CaseStudyOtt />
    <CaseStudyFinance />
    <ProcessSection />
    <CtaSection />
  </main>
);

export default Index;
