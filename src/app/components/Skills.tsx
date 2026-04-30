import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code, Layers, Sparkles, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Sparkles,
    title: "AI & Automation",
    skills: ["AI-assisted development", "Workflow automation", "Prompt engineering", "Data processing", "API integration", "Process optimization"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Code,
    title: "Software Development",
    skills: ["Python", "React", "TypeScript", "JavaScript", "Desktop apps", "UI logic"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Layers,
    title: "Technical Design",
    skills: ["AutoCAD", "Electrical layouts", "MEP coordination", "PV design", "Technical documentation", "Bathroom elevations"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: ["GitHub", "VS Code", "Debugging", "Documentation", "Testing", "Project planning"],
    color: "from-amber-500/20 to-yellow-500/20"
  }
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.06),transparent_40%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-sm text-zinc-400">Core Skills</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Practical Capabilities
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A focused mix of automation, software development and CAD-based technical design experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{ background: `linear-gradient(to bottom right, ${category.color})` }}
                />

                <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
