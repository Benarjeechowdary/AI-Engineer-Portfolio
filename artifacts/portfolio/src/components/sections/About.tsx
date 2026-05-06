import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, GraduationCap } from "lucide-react";

export function About() {
  const stats = [
    { icon: <Code2 size={24} />, label: "4+ Projects", desc: "Production ready" },
    { icon: <Database size={24} />, label: "1 Internship", desc: "Real-world experience" },
    { icon: <BrainCircuit size={24} />, label: "3+ ML Models", desc: "Trained & deployed" },
    { icon: <GraduationCap size={24} />, label: "AI Enthusiast", desc: "Always learning" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I build AI systems with a product mindset: define the problem clearly, pick the right
            model and architecture, and deliver dependable user-facing outcomes. My work spans
            retrieval-augmented generation, predictive modeling, and backend services that make ML
            solutions production-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="font-bold text-xl mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
