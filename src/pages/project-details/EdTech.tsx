import { ArrowLeft, Clock, Briefcase, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img1 from "@/assets/edtech-1.png";
import img2 from "@/assets/edtech-2.png";
import img3 from "@/assets/edtech-3.png";
import img4 from "@/assets/edtech-4.png";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "framer-motion";

const EdTech = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-background">
            <div className="max-w-screen-2xl mx-auto px-6">
                <FadeIn direction="right" delay={0.1}>
                    <Link to="/projects" className="inline-block">
                        <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                        </Button>
                    </Link>
                </FadeIn>

                <div className="mb-12">
                    <FadeIn>
                        <h1 className="text-3xl md:text-6xl font-bold font-heading mb-4 md:mb-6 text-foreground">EdTech Internship Platform</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                            EdTech recruitment platform with AI matching engine (Natural.js), application tracking system, and interview scheduler. React + Node.js + PostgreSQL. 8-week solo build.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" delayChildren={0.2}>
                        <FadeIn delay={0.1}>
                            <div className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-border/50">
                                <Building2 className="w-5 h-5 text-primary" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Industry</p>
                                    <p className="text-foreground font-medium">Education Technology</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-border/50">
                                <Clock className="w-5 h-5 text-primary" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Timeline</p>
                                    <p className="text-foreground font-medium">8 weeks</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-border/50">
                                <Briefcase className="w-5 h-5 text-primary" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Role</p>
                                    <p className="text-foreground font-medium">Full-Stack Developer</p>
                                </div>
                            </div>
                        </FadeIn>
                    </StaggerContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <FadeIn delay={0.4}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">The Challenge</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    The client needed a scalable, hybrid platform that effectively combined an internship marketplace (similar to Internshala) with structured online learning modules (like Coursera). The goal was to bridge the gap between skill acquisition and professional opportunity.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">What We Built</h3>
                                <div className="space-y-4">
                                    {[
                                        "Secure authentication system with role-based access control",
                                        "AI recommendation engine with vector embeddings for semantic skill matching",
                                        "Application management and tracking workflows",
                                        "Recruiter pipeline with shortlist, review, and status updates",
                                        "Scalable backend APIs and optimized database architecture"
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <p className="text-muted-foreground">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">Outcome</h3>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    "Delivered a production-ready MVP in just 8 weeks as a solo developer. The platform architecture is specifically designed to handle high concurrency, capable of scaling to 10,000+ simultaneous users."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="left">
                        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl h-full">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src={img1}
                                alt="EdTech Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>

                <FadeIn>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">Platform Gallery</h3>
                </FadeIn>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" delayChildren={0.2}>
                    <FadeIn delay={0.1}>
                        <motion.div whileHover={{ y: -8 }} className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl">
                            <img src={img2} alt="Student Profile" className="w-full h-auto" />
                        </motion.div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <motion.div whileHover={{ y: -8 }} className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl">
                            <img src={img3} alt="Internship Listings" className="w-full h-auto" />
                        </motion.div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <motion.div whileHover={{ y: -8 }} className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl">
                            <img src={img4} alt="Admin Panel" className="w-full h-auto" />
                        </motion.div>
                    </FadeIn>
                </StaggerContainer>
            </div>
        </div>
    );
};

export default EdTech;
