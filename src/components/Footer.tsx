import { Linkedin, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/ui/fade-in";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background border-t border-border/40 pt-16 pb-8 px-6">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <FadeIn className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold font-heading text-foreground tracking-tight">HodoTech</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://www.linkedin.com/company/HodoTech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full border border-border bg-card hover:bg-input hover:text-primary transition-all text-muted-foreground flex items-center gap-2 px-4 w-full sm:w-auto justify-center"
                                aria-label="Follow HodoTech on LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="text-sm font-medium">Follow HodoTech</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sharleez-tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full border border-border bg-card hover:bg-input hover:text-primary transition-all text-muted-foreground flex items-center gap-2 px-4 w-full sm:w-auto justify-center"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="text-sm font-medium">Founder</span>
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm">Have a Project?</h4>
                        <p className="text-muted-foreground mb-6">Ready to turn your idea into a functional system?</p>
                        <Link to="/contact">
                            <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
                                Let's Talk <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </button>
                        </Link>
                    </FadeIn>
                </div>

                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} HodoTech. All rights reserved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
                        <a href="mailto:contacthodotech@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                            <Mail className="w-4 h-4" /> contacthodotech@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
