import CaseStudyEdtech from "@/components/CaseStudyEdtech";
import CaseStudyOtt from "@/components/CaseStudyOtt";
import CaseStudyFinance from "@/components/CaseStudyFinance";

const Projects = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-background">
            <div className="max-w-screen-2xl mx-auto px-6 mb-12 md:mb-16">
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Projects</h1>
                <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl">
                    Selected works highlighting full-stack engineering, AI integration, and core architectural patterns.
                </p>
            </div>
            <CaseStudyEdtech />
            <CaseStudyOtt />
            <CaseStudyFinance />
        </div>
    );
};

export default Projects;
