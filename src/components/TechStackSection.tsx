import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  "Laravel", "React", "Node.js", "MySQL", "WordPress", "Vue.js",
  "TypeScript", "Python", "PostgreSQL", "AWS", "Docker", "Redis",
  "Next.js", "MongoDB", "GraphQL", "Kubernetes", "Tailwind CSS", "Go",
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Technologies</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="px-6 py-3 rounded-lg border border-border bg-card/50 hover:border-primary/40 hover:bg-card font-mono text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
