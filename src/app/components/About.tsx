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
            <span className="text-sm text-zinc-400">About Me</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Technical Precision Meets<br />Digital Innovation
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                As a <span className="text-white font-medium">Technical Designer and Technician</span>, I bring years of hands-on
                experience in CAD-based technical drafting, electrical and mechanical layouts, and precision design work.
                My expertise in AutoCAD and technical documentation forms the foundation of my meticulous approach to problem-solving.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                What sets me apart is my ability to bridge the traditional technical design world with modern digital product thinking.
                I actively work with <span className="text-white font-medium">Python, Java, and React</span> to prototype ideas, automate workflows,
                and build functional applications that solve real problems.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                I leverage <span className="text-white font-medium">AI-assisted workflows</span> to structure complex ideas, define product features,
                and accelerate development cycles. This combination of technical drafting precision and modern development practices
                allows me to approach projects with both detailed accuracy and innovative thinking.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Whether it's designing detailed technical layouts, building digital tools, or architecting product features,
                I bring a <span className="text-white font-medium">practical, detail-oriented, and modern approach</span> to every challenge.
                I thrive at the intersection of technical design and digital product development.
              </p>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              { value: "5+", label: "Years in Technical Design" },
              { value: "6", label: "Featured Projects" },
              { value: "3+", label: "Programming Languages" },
              { value: "100%", label: "Detail-Oriented" }
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
