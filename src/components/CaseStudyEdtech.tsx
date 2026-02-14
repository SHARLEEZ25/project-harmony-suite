import edtech1 from "@/assets/edtech-1.png";
import edtech2 from "@/assets/edtech-2.png";
import edtech3 from "@/assets/edtech-3.png";
import edtech4 from "@/assets/edtech-4.png";

const CaseStudyEdtech = () => (
  <section className="px-6 py-16 max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
      EdTech Platform for Internships &amp; Courses
    </h2>

    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
      <p><strong className="text-foreground">Industry:</strong> Education Technology</p>
      <p><strong className="text-foreground">Timeline:</strong> 8 weeks</p>
      <p><strong className="text-foreground">Role:</strong> Full-Stack Developer</p>
    </div>

    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">The Challenge</h3>
        <p className="text-muted-foreground leading-relaxed">
          Client needed a hybrid platform combining internship marketplace (like Internshala) with online learning (like Coursera).
        </p>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">What We Built</h3>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Secure authentication system with role-based access control</li>
          <li>AI recommendation engine with vector embeddings for semantic skill matching</li>
          <li>Application management and tracking workflows</li>
          <li>Recruiter pipeline with shortlist, review, and status updates</li>
          <li>Scalable backend APIs and optimized database architecture</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Outcome</h3>
        <p className="text-muted-foreground leading-relaxed">
          Delivered production-ready MVP in 8 weeks as solo developer. Platform architecture designed to scale to 10,000+ concurrent users.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Design Flow</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[edtech1, edtech2, edtech3, edtech4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`EdTech design ${i + 1}`}
              className="rounded-lg border border-border w-full h-auto object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudyEdtech;
