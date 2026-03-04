import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Scalable Architecture", desc: "Systems designed to grow from hundreds to millions of users without costly rewrites." },
  { title: "Enterprise-Grade Security", desc: "SOC 2 compliant processes with encryption at rest and in transit, regular penetration testing." },
  { title: "Peak Performance", desc: "Sub-second response times through optimized queries, caching strategies, and CDN distribution." },
  { title: "Clean Code Standards", desc: "SOLID principles, comprehensive testing, and thorough documentation for long-term maintainability." },
  { title: "Agile Delivery", desc: "Two-week sprint cycles with transparent progress tracking and continuous client feedback." },
  { title: "Long-Term Partnership", desc: "Dedicated account managers and ongoing support plans that extend well beyond launch day." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Why Us</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Why Choose <span className="text-gradient">NovaLabs?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We don't just write code — we engineer solutions. Every decision is guided by performance, security, and the long-term success of your product.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            {reasons.map((r, i) => (
              <div key={r.title} className="flex gap-4">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
