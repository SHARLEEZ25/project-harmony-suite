import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";

const Home = () => {
    return (
        <div className="pt-16">
            <HeroSection />
            <ServicesSection />
            <ProcessSection />
            <CtaSection />
        </div>
    );
};

export default Home;
