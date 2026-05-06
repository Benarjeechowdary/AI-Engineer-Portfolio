import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RAG-based PDF Chat App",
    description: "Chat with any PDF using Retrieval-Augmented Generation. Extracts text, builds embeddings, and retrieves context to answer queries accurately.",
    tags: ["Python", "LangChain", "RAG", "FAISS", "Streamlit"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "AI Interview Preparation System",
    description: "An intelligent system that generates dynamic interview questions, evaluates user answers in real-time, and provides constructive feedback using LLMs.",
    tags: ["Python", "LangChain", "LLMs", "FastAPI"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Crop Prediction ML Model",
    description: "Machine learning model to predict optimal crops based on soil composition and weather data. Deployed as an API on AWS.",
    tags: ["Python", "Scikit-learn", "Pandas", "AWS"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "AI Agent with Memory (LangGraph)",
    description: "A stateful AI agent with long-term memory utilizing LangGraph. Maintains conversation context across multiple sessions.",
    tags: ["Python", "LangGraph", "LangChain", "OpenAI"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl">
            Recent projects showcasing my capability to architect and deploy machine learning models and AI applications.
          </p>
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
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
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
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
