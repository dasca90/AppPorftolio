import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Target, Lightbulb, Cog, Sparkles, CheckCircle2, Repeat } from "lucide-react";

const workPrinciples = [
  {
    icon: Target,
    title: "Practical Problem Solving",
    description: "I focus on understanding the real problem before jumping to solutions. Every project starts with clarifying requirements, constraints, and success criteria.",
    color: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Lightbulb,
    title: "Structured Thinking",
    description: "Complex challenges are broken down into manageable components. I map dependencies, prioritize tasks, and create clear execution plans.",
    color: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Cog,
    title: "Technical Clarity",
    description: "Years of CAD work taught me the value of precision. I bring that same attention to detail to code, documentation, and product specs.",
    color: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Ideation",
    description: "I leverage AI tools to accelerate feature definition, explore edge cases, generate implementation options, and improve workflow efficiency.",
    color: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: Repeat,
    title: "Workflow Improvement",
    description: "I actively identify bottlenecks and automate repetitive tasks. If I do something twice, I start thinking about how to streamline it.",
    color: "from-amber-500/10 to-yellow-500/10"
  },
  {
    icon: CheckCircle2,
    title: "Attention to Detail",
    description: "From technical drawings to code logic, I care about getting the details right. Quality execution builds trust and prevents costly rework.",
    color: "from-indigo-500/10 to-violet-500/10"
  }
];

export function HowIWork() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="how-i-work" className="py-32 px-6 bg-zinc-950" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-sm text-zinc-400">Approach & Methodology</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            How I Work
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A proven approach that combines technical rigor, strategic thinking, and modern productivity tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {principle.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 p-10 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Typical Project Flow</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Understand", desc: "Clarify requirements, constraints, and success criteria" },
              { step: "02", title: "Plan", desc: "Break down the work, map dependencies, create execution plan" },
              { step: "03", title: "Execute", desc: "Build with precision, iterate based on feedback, test thoroughly" },
              { step: "04", title: "Deliver", desc: "Ship quality work, document key decisions, gather learnings" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-sm text-zinc-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
