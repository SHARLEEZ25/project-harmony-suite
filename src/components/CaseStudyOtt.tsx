import ott1 from "@/assets/ott-1.jpg";
import ott2 from "@/assets/ott-2.jpg";
import ott3 from "@/assets/ott-3.jpg";
import ott4 from "@/assets/ott-4.jpg";

const steps = [
  { num: "01", title: "Upload Video", desc: "Creator uploads video content to platform (existing workflow)" },
  { num: "02", title: "Generate Posters", desc: 'Click "Generate Poster" button, AI analyzes video in background' },
  { num: "03", title: "Review Options", desc: "View 5-10 AI-generated poster variations from best frames (30-60 seconds)" },
  { num: "04", title: "Customize", desc: "Select preferred poster, optionally adjust text overlays and filters" },
  { num: "05", title: "Save & Use", desc: "One-click save to media library, ready for marketing without leaving platform" },
];

const CaseStudyOtt = () => (
  <section className="px-6 py-16 max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
      OTT Platform for Short Films &amp; Creator Discovery
    </h2>

    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
      <p><strong className="text-foreground">Industry:</strong> Media & Entertainment / OTT Streaming</p>
      <p><strong className="text-foreground">Timeline:</strong> 3 weeks (R&D Prototype)</p>
      <p><strong className="text-foreground">Role:</strong> Full-Stack Developer & Product Designer</p>
    </div>

    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">The Challenge</h3>
        <p className="text-muted-foreground leading-relaxed">
          An existing OTT platform for short films needed to solve a critical creator pain point: generating eye-catching promotional posters for their content. Creators using external AI tools for posters = context switching, workflow friction, wasted time.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">What We Built</h3>
        <p className="text-foreground font-semibold mb-2">AI-Powered Poster Generation Module</p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Full-stack application with React TypeScript frontend and Node.js Express backend</li>
          <li>Hugging Face AI integration for intelligent frame analysis, aesthetic scoring, and scene detection</li>
          <li>FFmpeg video processing pipeline with automated frame extraction and poster generation</li>
          <li>Complete UI/UX design for seamless in-platform workflow and real-time processing status</li>
          <li>REST API with MongoDB persistence, JWT authentication, and asynchronous job queue architecture</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Outcome</h3>
        <ul className="space-y-1 text-muted-foreground list-disc list-inside">
          <li>Eliminated external tool switching through in-platform AI integration</li>
          <li>Validated technical feasibility and established production-ready architecture</li>
          <li>Delivered functional prototype with performance benchmarks and expansion roadmap</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Creator Journey</h3>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-4">
              <span className="text-2xl font-heading font-bold text-muted-foreground">{s.num}</span>
              <div>
                <p className="font-semibold text-foreground">{s.title}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Design Flow</h3>
        <div className="grid grid-cols-2 gap-4">
          {[ott1, ott2, ott3, ott4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`OTT design ${i + 1}`}
              className="rounded-lg border border-border w-full h-auto object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudyOtt;
