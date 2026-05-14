import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Terminal } from "lucide-react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Building intelligent systems using AI.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Mesh grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm"
          >
            <Terminal size={14} className="text-primary" />
            <span className="text-xs font-mono">System initialized</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter mb-6"
          >
            Hi, I'm{" "}
            <span className="text-foreground glow-text">
              Benarjee Chowdary
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-8 md:h-12 mb-6"
          >
            <p className="text-lg md:text-2xl text-foreground/90 font-mono">
              &gt; {text}
              <span className="animate-pulse">_</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-2xl text-foreground/75 leading-relaxed mb-10"
          >
            AI Engineer focused on LLM systems, RAG pipelines, and production ML applications.
            I turn complex model workflows into reliable products that improve user outcomes and
            decision quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              data-testid="link-hero-projects"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-secondary text-secondary-foreground font-medium border border-border hover:bg-secondary/80 transition-colors"
              data-testid="link-hero-contact"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/Benarjeechowdary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md border border-border font-medium hover:bg-secondary/60 transition-colors"
            >
              <Github size={16} />
              View GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-2 rounded-3xl bg-white/5 blur-2xl" />
          <img src={`${import.meta.env.BASE_URL}images/ai-hero.svg`} 
          
            alt="AI systems visualization"
            className="relative w-full rounded-3xl border border-border shadow-2xl shadow-black/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
