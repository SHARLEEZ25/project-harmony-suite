import CtaSection from "@/components/CtaSection";
import { FadeIn } from "@/components/ui/fade-in";
import { Linkedin, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="pt-24 min-h-screen bg-background">
            <div className="max-w-screen-2xl mx-auto px-6 py-12 md:py-24">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8">Get in Touch</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed">
                        Whether you have a specific project in mind or just want to discuss technical possibilities, we're ready to listen and provide practical insights.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <FadeIn delay={0.1}>
                        <div className="bg-card border border-border p-8 rounded-2xl h-full flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Professional Inquiry</h3>
                            <p className="text-muted-foreground mb-8 flex-grow">
                                For project proposals, system architecture discussions, or strategic partnerships.
                            </p>
                            <a
                                href="https://wa.me/917845565637"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
                            >
                                Send WhatsApp <Linkedin className="w-4 h-4 hidden" /> {/* Hidden icon to keep alignment if needed */}
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-card border border-border p-8 rounded-2xl h-full flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Email Us</h3>
                            <p className="text-muted-foreground mb-8 flex-grow">
                                Direct communication for general questions or detailed documentation sharing.
                            </p>
                            <a
                                href="mailto:contacthodotech@gmail.com"
                                className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                            >
                                contacthodotech@gmail.com
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="bg-card border border-border p-8 rounded-2xl h-full flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">LinkedIn Follow</h3>
                            <p className="text-muted-foreground mb-8 flex-grow">
                                Stay updated with our latest build logs and technical insights.
                            </p>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://www.linkedin.com/company/HodoTech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform"
                                >
                                    Follow HodoTech Page
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/sharleez-tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary/80 font-medium flex items-center gap-2 hover:translate-x-1 transition-transform text-sm"
                                >
                                    Connect with Founder
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <CtaSection />
        </div>
    );
};

export default Contact;
