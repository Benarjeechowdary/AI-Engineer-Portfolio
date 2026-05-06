import { motion } from "framer-motion";
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn,
  SiFastapi, SiFlask, SiGit, SiJupyter,
  SiOpenai
} from "react-icons/si";

const skillCategories = [
  {
    title: "AI/ML Core",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    ]
  },
  {
    title: "AI Frameworks",
    skills: [
      { name: "LangChain", icon: <span className="font-mono font-bold">LC</span> },
      { name: "LLMs / OpenAI", icon: <SiOpenai /> },
      { name: "RAG", icon: <span className="font-mono font-bold">RAG</span> },
      { name: "LangGraph", icon: <span className="font-mono font-bold">LG</span> },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
    ]
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: <span className="font-mono font-bold text-xs">AWS</span> },
      { name: "Git", icon: <SiGit /> },
      { name: "Jupyter", icon: <SiJupyter /> },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build scalable machine learning models and intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card/60 border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 border-b border-border pb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-border"
                  >
                    <div className="text-xl text-primary">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
