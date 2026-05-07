import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Open to AI/ML roles, freelance collaborations, and impactful product ideas.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:benarjeenalluri07@gmail.com"
              className="group flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-card border border-border hover:bg-secondary transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-muted-foreground">
                  Email
                </p>
                <p className="text-foreground font-semibold break-all">
                  benarjeenalluri07@gmail.com
                </p>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/benarjee-chowdary-nalluri-64ba54243/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-card border border-border hover:bg-secondary transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Linkedin size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-muted-foreground">
                  LinkedIn
                </p>
                <p className="text-foreground font-semibold break-all">
                  linkedin.com/in/benarjee-chowdary-nalluri
                </p>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://github.com/Benarjeechowdary"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-card border border-border hover:bg-secondary transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Github size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-muted-foreground">
                  GitHub
                </p>
                <p className="text-foreground font-semibold break-all">
                  github.com/Benarjeechowdary
                </p>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
