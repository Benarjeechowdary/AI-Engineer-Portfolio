import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Experience</h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative md:w-1/2 md:pr-12 ml-auto md:ml-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-48px] md:right-[-24px] md:left-auto top-1 h-12 w-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
              <Briefcase size={20} className="text-primary" />
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border relative">
              {/* Arrow */}
              <div className="absolute top-6 left-[-8px] md:right-[-8px] md:left-auto w-4 h-4 bg-card border-l border-b border-border rotate-45 md:-rotate-[135deg]" />
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-3">2024</span>
                <h3 className="text-xl font-bold">Machine Learning Intern</h3>
                <p className="text-primary font-medium">Feynn Labs</p>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Worked on real-world ML projects including market segmentation, predictive modeling, and data analysis. Collaborated with a team on end-to-end ML pipelines.
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Key Achievements:</h4>
                <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                  <li>Built 3 ML models for different client use cases.</li>
                  <li>Published internal reports on data insights.</li>
                  <li>Gained hands-on experience with Python, Scikit-learn, and data visualization tools.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
