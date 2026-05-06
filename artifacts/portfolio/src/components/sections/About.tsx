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
    <section id="about" className="py-24 bg-secondary/30 relative">
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
            I am passionate about artificial intelligence, machine learning, and backend development. 
            I build intelligent systems ranging from RAG pipelines to predictive ML models. 
            I love working at the intersection of academic research and real-world engineering impact, 
            crafting solutions that are both theoretically sound and highly practical.
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
              className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors group"
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
