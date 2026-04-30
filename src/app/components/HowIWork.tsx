import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Target, Lightbulb, Cog, Sparkles, CheckCircle2, Repeat } from "lucide-react";

const workPrinciples = [
  {
    icon: Target,
    title: "Practical problem framing",
    description: "I start by clarifying the real workflow problem, the available data, the constraints and what a useful result should look like for the person using it.",
    color: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Lightbulb,
    title: "Structured planning",
    description: "I break complex work into small, testable steps so the project can move forward without losing sight of dependencies, priorities or edge cases.",
    color: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Cog,
    title: "CAD-level accuracy",
    description: "Technical design experience shaped my habit of checking details, naming things clearly and keeping documentation understandable for review and handoff.",
    color: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: Sparkles,
    title: "AI-assisted workflows",
    description: "I use AI tools to explore options, structure requirements, compare implementation paths and speed up development while keeping the final logic reviewable.",
    color: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: Repeat,
    title: "Automation where it helps",
    description: "Repeated manual steps are opportunities to simplify a process, connect data sources and give users clearer outputs with less administrative effort.",
    color: "from-amber-500/10 to-yellow-500/10"
  },
  {
    icon: CheckCircle2,
    title: "Clear delivery",
    description: "I aim for work that is useful, documented and easy to improve, with enough testing and verification to avoid obvious workflow or data mistakes.",
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
            <span className="text-sm text-zinc-400">How I Work</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            From Technical Problem to Useful Tool
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A practical workflow shaped by technical design discipline, software experimentation and clear automation goals.
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 p-10 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Typical Project Flow</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Understand", desc: "Clarify the workflow, users, data sources, constraints and practical success criteria." },
              { step: "02", title: "Plan", desc: "Map the process, define the smallest useful version and identify risks early." },
              { step: "03", title: "Build", desc: "Implement the workflow with clear UI, structured logic and frequent checks." },
              { step: "04", title: "Verify", desc: "Test the result, document important decisions and note the next improvements." }
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
