import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Technical Designer / Technician",
    company: "Various Technical Projects",
    period: "2018 - Present",
    description: "Lead technical design work across diverse projects involving AutoCAD drafting, electrical and mechanical layouts, bathroom design, elevations, and construction documentation. Deliver precision technical drawings and coordinate with contractors and engineers.",
    highlights: [
      "Produced detailed electrical and mechanical layout drawings for commercial and residential projects",
      "Designed custom bathroom layouts with full plumbing and fixture specifications",
      "Created comprehensive elevation drawings and construction documentation",
      "Collaborated with engineers and contractors to ensure design accuracy and buildability"
    ]
  },
  {
    role: "Digital Product Builder",
    company: "Independent Projects",
    period: "2021 - Present",
    description: "Design and develop digital tools and applications that solve real-world problems. Combine technical design thinking with modern development practices to build functional, user-focused products.",
    highlights: [
      "Built automated platforms for solar pre-design and technical calculations",
      "Developed trading automation systems with real-time data visualization",
      "Created productivity tools for freelancers including invoice and timesheet management",
      "Integrated AI-assisted workflows to accelerate feature definition and development cycles"
    ]
  },
  {
    role: "Freelance Technical Designer",
    company: "Client Projects",
    period: "2019 - Present",
    description: "Provide CAD-based design services, custom product design for CNC/laser manufacturing, and technical consulting for clients requiring precision drawings and production-ready files.",
    highlights: [
      "Delivered custom product designs optimized for CNC machining and laser cutting",
      "Prepared production-ready technical files with material specifications",
      "Managed projects from concept sketches to final fabrication coordination",
      "Reduced client production costs through efficient material nesting and toolpath optimization"
    ]
  }
];

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-32 px-6 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.05),transparent_50%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-sm text-zinc-400">Professional Journey</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Experience
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A track record of delivering technical precision and innovative digital solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="relative pl-8 pb-12 border-l-2 border-white/10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black" />

              <div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-zinc-400 mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 md:text-right">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                      <span className="text-zinc-400 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
