import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RAG-based PDF Chat App",
    challenge: "Users needed fast answers from long PDF documents without manually searching pages.",
    solution: "Built a retrieval-augmented QA pipeline that chunks documents, stores embeddings, and grounds responses in retrieved context.",
    impact: "Improved information accessibility and reduced time required to locate relevant document insights.",
    tags: ["Python", "LangChain", "RAG", "FAISS", "Streamlit"],
    github: "https://github.com/Benarjeechowdary",
    demo: ""
  },
  {
    title: "AI Interview Preparation System",
    challenge: "Candidates lacked personalized interview practice and objective feedback loops.",
    solution: "Created an LLM-driven workflow that generates role-specific prompts, evaluates responses, and returns structured improvement feedback.",
    impact: "Enabled repeatable, high-quality preparation sessions tailored to candidate goals.",
    tags: ["Python", "LangChain", "LLMs", "FastAPI"],
    github: "https://github.com/Benarjeechowdary",
    demo: ""
  },
  {
    title: "Crop Prediction ML Model",
    challenge: "Choosing crops without data support can reduce yield and increase risk for growers.",
    solution: "Trained and deployed a supervised ML model using soil and weather features, exposed through a backend API.",
    impact: "Delivered actionable, data-informed crop recommendations to support better planning decisions.",
    tags: ["Python", "Scikit-learn", "Pandas", "AWS"],
    github: "https://github.com/Benarjeechowdary",
    demo: ""
  },
  {
    title: "AI Agent with Memory (LangGraph)",
    challenge: "Single-session assistants lose context and provide inconsistent user experiences over time.",
    solution: "Implemented a stateful LangGraph agent with memory and workflow orchestration for continuity across sessions.",
    impact: "Increased response consistency and created a more natural, context-aware conversational experience.",
    tags: ["Python", "LangGraph", "LangChain", "OpenAI"],
    github: "https://github.com/Benarjeechowdary",
    demo: ""
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/20 relative scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Selected Work</h2>
            <p className="text-muted-foreground max-w-2xl">
              Recent projects showcasing my capability to architect and deploy machine learning models and AI applications.
            </p>
          </div>
          <a
            href="https://github.com/Benarjeechowdary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Explore all repositories
            <ExternalLink size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-card border border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 to-accent/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="space-y-3 mb-6 text-sm">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-semibold">Challenge: </span>
                    {project.challenge}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-semibold">Solution: </span>
                    {project.solution}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-semibold">Impact: </span>
                    {project.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-border">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <ExternalLink size={16} />
                    Demo coming soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
