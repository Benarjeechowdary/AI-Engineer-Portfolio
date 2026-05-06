import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Let's build something intelligent together.
          </p>

          <div className="p-8 rounded-2xl bg-card border border-border shadow-lg max-w-md mx-auto flex flex-col gap-6">
            <a 
              href="mailto:youremail@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p className="text-foreground font-semibold">youremail@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] shrink-0">
                <Linkedin size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                <p className="text-foreground font-semibold">linkedin.com/in/yourprofile</p>
              </div>
            </a>

            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground shrink-0">
                <Github size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-muted-foreground">GitHub</p>
                <p className="text-foreground font-semibold">github.com/yourusername</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
