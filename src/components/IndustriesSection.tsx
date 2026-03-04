import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Truck, Heart, GraduationCap, ShoppingBag, Landmark, Plane, Factory } from "lucide-react";

const industries = [
  { icon: Building, name: "Corporate" },
  { icon: Truck, name: "Logistics" },
  { icon: Heart, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Landmark, name: "Finance" },
  { icon: Plane, name: "Travel" },
  { icon: Factory, name: "Manufacturing" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-y border-border" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Industries</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-center gap-3 p-8 rounded-xl border border-border hover:border-primary/30 bg-card/50 hover:bg-card transition-all cursor-default"
            >
              <ind.icon size={28} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
