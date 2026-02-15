import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const CtaSection = () => (
  <section className="w-full px-6 py-24 md:py-32 bg-[#000000] text-white overflow-hidden">
    <div className="max-w-screen-2xl mx-auto w-full text-center">
      <FadeIn direction="up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8">
          How We Can Help
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} direction="up">
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          If you have a real problem that needs a real system, we can help. We partner with founders and businesses who value execution over promises.
        </p>
      </FadeIn>
      <FadeIn delay={0.2} direction="up">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild size="lg" className="bg-[#E5C992] hover:bg-[#D4B881] text-black text-lg px-8 py-6 h-auto shadow-lg transition-all rounded-md">
            <a href="https://wa.me/917845565637" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Contact Me <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </FadeIn>
    </div>
  </section>
);

export default CtaSection;
