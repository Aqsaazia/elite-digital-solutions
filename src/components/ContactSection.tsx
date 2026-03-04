import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding border-t border-border" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Let's Build{" "}
              <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to transform your business with cutting-edge software? Reach out and let's discuss your project.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "hello@novalabs.dev" },
                { icon: Phone, label: "+1 (555) 123-4567" },
                { icon: MapPin, label: "San Francisco, CA" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <select className="w-full px-4 py-3 rounded-lg bg-card border border-border text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors">
              <option value="">Select Service</option>
              <option>Custom Software Development</option>
              <option>Web Application Development</option>
              <option>Enterprise Solutions</option>
              <option>E-commerce Development</option>
              <option>UI/UX Design</option>
              <option>Maintenance & Support</option>
            </select>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-primary"
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
