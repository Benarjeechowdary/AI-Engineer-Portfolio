import { motion } from "framer-motion";
import { Briefcase, Building2, CalendarDays } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on industry exposure building ML workflows from data analysis to model delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-3xl border border-border bg-card/80 p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary/40 to-accent/70 rounded-t-3xl" />
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <Briefcase size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Professional Experience</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Machine Learning Intern</h3>
                <p className="text-primary font-medium mt-1">Feynn Labs</p>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
                  <CalendarDays size={14} />
                  <span>2024</span>
                </div>
                <p className="flex items-center gap-2">
                  <Building2 size={14} />
                  Real-world ML project delivery
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 p-5 md:p-6">
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Worked on real-world ML initiatives including market segmentation, predictive modeling,
                and data analysis while collaborating on end-to-end pipeline execution.
              </p>

              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-semibold">Key Outcomes:</h4>
                <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                  <li>Built and validated multiple ML models for distinct business use cases.</li>
                  <li>Delivered internal insight reports that supported strategic decisions.</li>
                  <li>Improved proficiency in Python, Scikit-learn, and data visualization workflows.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Python", "Scikit-learn", "EDA", "Modeling", "Reporting"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
