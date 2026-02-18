import { ArrowLeft, Clock, Layout, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img1 from "@/assets/Screenshot 2026-02-18 202014.png";
import img2 from "@/assets/Screenshot 2026-02-18 202043.png";
import img3 from "@/assets/Screenshot 2026-02-18 202101.png";
import img4 from "@/assets/Screenshot 2026-02-18 202338.png";
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
                        <h1 className="text-3xl md:text-6xl font-bold font-heading mb-4 md:mb-6 text-foreground">CA Workflow & Compliance Tool</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                            A custom-built "Workflow Tracker" for Chartered Accountant firms to automate GST filing, tax audits, and team performance monitoring.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" delayChildren={0.2}>
                        <FadeIn delay={0.1}>
                            <div className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-border/50">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Industry</p>
                                    <p className="text-foreground font-medium text-sm md:text-base">Finance & CA Compliance</p>
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
                                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">The Challenge</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    CA firms handle multiple clients with overlapping statutory deadlines. Most rely on spreadsheets or fragmented tools, leading to missed compliance dates, unclear workload distribution, and poor visibility for partners.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">What We Designed & Developed</h3>
                                <div className="space-y-4">
                                    {[
                                        "Designed the complete UI/UX system for a GST and tax audit workflow tracker",
                                        "Built the frontend dashboard for tracking compliance cycles",
                                        "Created structured compliance templates for standardized audit task views",
                                        "Designed real-time workload visibility panels for managers",
                                        "Built client-level document and task tracking interfaces",
                                        "Designed escalation flows for urgent filings and deadline alerts"
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-3 text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">Impact</h3>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    "Delivered a clean, structured interface that helps CA managers visualize deadlines, team load, and compliance priorities in one centralized dashboard."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="left">
                        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl h-full flex items-center justify-center bg-card/20 group">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src={img1}
                                alt="Workflow Tracker Dashboard"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>

                <FadeIn>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 font-heading">Design Flow & Gallery</h3>
                </FadeIn>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" delayChildren={0.2}>
                    <FadeIn delay={0.1}>
                        <motion.div whileHover={{ y: -8 }} className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl group">
                            <img src={img2} alt="Compliance Templates" className="w-full h-auto" />
                            <div className="p-4 bg-card border-t border-border">
                                <p className="text-sm font-semibold">Compliance Templates</p>
                                <p className="text-xs text-muted-foreground text-nowrap">Standardized audit and filing workflows</p>
                            </div>
                        </motion.div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <motion.div whileHover={{ y: -8 }} className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl group">
                            <img src={img3} alt="Team Workload" className="w-full h-auto" />
                            <div className="p-4 bg-card border-t border-border">
                                <p className="text-sm font-semibold">Team Directory</p>
                                <p className="text-xs text-muted-foreground text-nowrap">Real-time resource and capacity monitoring</p>
                            </div>
                        </motion.div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <motion.div whileHover={{ y: -8 }} className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl group">
                            <img src={img4} alt="Client Management" className="w-full h-auto" />
                            <div className="p-4 bg-card border-t border-border">
                                <p className="text-sm font-semibold">Workflow Details</p>
                                <p className="text-xs text-muted-foreground text-nowrap">Granular task and document tracking</p>
                            </div>
                        </motion.div>
                    </FadeIn>
                </StaggerContainer>
            </div>
        </div>
    );
};

export default Finance;
