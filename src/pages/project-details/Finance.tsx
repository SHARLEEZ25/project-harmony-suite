import { ArrowLeft, Clock, Layout, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img1 from "@/assets/finance-1.png";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion } from "framer-motion";

const Finance = () => {
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
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground">Finance & Compliance Tool</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                            A centralized internal workflow platform designed to automate compliance tracking and financial approval processes.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" delayChildren={0.2}>
                        <FadeIn delay={0.1}>
                            <div className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-border/50">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Industry</p>
                                    <p className="text-foreground font-medium text-sm md:text-base">Finance & Compliance</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-border/50">
                                <Clock className="w-5 h-5 text-primary" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Timeline</p>
                                    <p className="text-foreground font-medium text-sm md:text-base">6 weeks (UI/UX & MVP)</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-border/50">
                                <Layout className="w-5 h-5 text-primary" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Role</p>
                                    <p className="text-foreground font-medium text-sm md:text-base">UI/UX & Frontend Development</p>
                                </div>
                            </div>
                        </FadeIn>
                    </StaggerContainer>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <FadeIn delay={0.4}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">The Problem</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Finance teams were struggling with manual compliance tracking using archaic spreadsheets and fragmented email chains. This led to missed deadlines, documentation loss, and a lack of audit-ready transparency.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">What We Built</h3>
                                <div className="space-y-4">
                                    {[
                                        "Centralized dashboard with task tracking and calendar views",
                                        "Role-based designs for granular team permissions and workflows",
                                        "Document attachment UI with proof-of-completion patterns",
                                        "Visual escalation system with priority indicators for overdue items",
                                        "Complete UI/UX flow mapping for end-to-end financial operations"
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-3 text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">Current Status</h3>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    "Currently in the MVP and validation stage, with core functionality deployed for testing with real operations teams. The design system is already validated for scaling across the organization."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="left">
                        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl h-full flex items-center justify-center bg-card/20">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src={img1}
                                alt="Finance Workflow Dashboard"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Finance;
