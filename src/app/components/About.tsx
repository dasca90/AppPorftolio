import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 px-6 bg-zinc-950" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-sm text-zinc-400">About</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Technical Design Experience<br />Applied to Practical Automation
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                I am a <span className="text-white font-medium">CAD Technical Designer</span> with hands-on experience in
                electrical layouts, MEP coordination, solar PV design, bathroom elevations and technical documentation.
                That background taught me to value accuracy, clear specifications and workflows that people can actually use.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Alongside technical design, I have built practical software projects with{" "}
                <span className="text-white font-medium">Python, React, TypeScript, JavaScript and API integrations</span>.
                My focus is on tools that reduce manual work, organize data and make technical decisions easier to review.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                For the last three years, I have used{" "}
                <span className="text-white font-medium">AI-assisted development and workflow automation</span> to plan
                features, process information, test ideas and speed up implementation without overstating what the tools can do.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                My strongest portfolio work sits at the intersection of automation and technical operations: trading dashboards,
                solar pre-design and quotation workflows, and productivity tools such as disk analysis utilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              { value: "5+", label: "Years in technical design" },
              { value: "3", label: "Years AI automation practice" },
              { value: "3", label: "Core portfolio projects" },
              { value: "100%", label: "Practical delivery focus" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
