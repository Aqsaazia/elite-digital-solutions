import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinCore Banking Platform",
    desc: "Enterprise banking dashboard with real-time analytics and compliance reporting.",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "LogiTrack Fleet Management",
    desc: "GPS-enabled fleet tracking system with route optimization for 2,000+ vehicles.",
    tech: ["Laravel", "Vue.js", "Redis"],
    color: "from-accent/20 to-primary/10",
  },
  {
    title: "MedSync Health Portal",
    desc: "HIPAA-compliant patient portal serving 50K+ users with telemedicine capabilities.",
    tech: ["React", "Python", "AWS"],
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "ShopEngine E-commerce",
    desc: "High-traffic marketplace handling 10K+ daily transactions with AI recommendations.",
    tech: ["Next.js", "Stripe", "MySQL"],
    color: "from-accent/15 to-accent/5",
  },
  {
    title: "EduPlatform LMS",
    desc: "Learning management system with live classes, assessments, and progress tracking.",
    tech: ["React", "Laravel", "MongoDB"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "CloudOps Infrastructure",
    desc: "DevOps automation platform reducing deployment time by 80% for enterprise clients.",
    tech: ["Go", "Kubernetes", "Terraform"],
    color: "from-accent/20 to-primary/10",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glow-card rounded-xl overflow-hidden bg-card border border-border"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                  {p.title.split(" ")[0]}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{p.title}</h3>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
