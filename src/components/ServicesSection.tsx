import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Building2, ShoppingCart, Palette, Wrench } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Tailor-made solutions built from the ground up to solve your unique business challenges." },
  { icon: Globe, title: "Web Application Development", desc: "Modern, responsive web applications using cutting-edge frameworks and technologies." },
  { icon: Building2, title: "Enterprise Solutions", desc: "Robust enterprise-grade systems that integrate seamlessly with your existing infrastructure." },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "High-converting e-commerce platforms with secure payments and inventory management." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces designed for engagement and conversion." },
  { icon: Wrench, title: "Maintenance & Support", desc: "24/7 monitoring, updates, and dedicated support to keep your systems running." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glow-card rounded-xl p-8 bg-card border border-border hover:border-primary/30 transition-all duration-400 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
