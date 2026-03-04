import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Target, Users } from "lucide-react";

const features = [
  { icon: Zap, title: "High Performance", desc: "Optimized for speed and scalability" },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade protection standards" },
  { icon: Target, title: "Precision Engineering", desc: "Clean architecture, clean code" },
  { icon: Users, title: "Dedicated Teams", desc: "Senior engineers, zero overhead" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Engineering Excellence,{" "}
              <span className="text-gradient">Delivered.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a full-service software house specializing in custom software development, web applications, enterprise systems, and scalable cloud solutions for forward-thinking businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of senior engineers, architects, and designers collaborate closely with clients to transform complex requirements into elegant, maintainable systems that stand the test of time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className="glow-card rounded-xl p-6 bg-card border border-border"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <f.icon size={24} className="text-primary mb-3" />
                <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
