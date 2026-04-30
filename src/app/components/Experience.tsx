import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "CAD & Installations Technical Designer",
    company: "Contractor, Alex Dasca Design Studio",
    period: "Jan 2025 - Present",
    description: "Contract technical design work focused on clear CAD documentation, installation layouts and practical coordination details for residential and technical projects.",
    highlights: [
      "Prepared CAD drawings, technical layouts and installation documentation",
      "Worked with electrical, MEP and bathroom elevation requirements",
      "Translated project needs into clear drawings that can be reviewed and executed",
      "Used structured workflows to reduce repeated drafting and documentation effort"
    ]
  },
  {
    role: "Solar Photovoltaic Design Technician",
    company: "Sunworks Ltd",
    period: "Dec 2021 - Dec 2024",
    description: "Solar PV design experience covering early layout planning, equipment coordination and technical documentation for photovoltaic projects.",
    highlights: [
      "Supported roof and panel layout planning for PV installations",
      "Worked with equipment data, system constraints and technical project notes",
      "Created design documentation for review, quotation and project coordination",
      "Built the practical background behind the solar pre-design and quotation platform project"
    ]
  },
  {
    role: "MEP Installations Technician",
    company: "Dandara",
    period: "Mar 2019 - Dec 2021",
    description: "Hands-on MEP installations experience that strengthened my understanding of technical drawings, site constraints and the need for accurate documentation.",
    highlights: [
      "Worked with mechanical, electrical and plumbing installation requirements",
      "Read and checked technical drawings against practical site conditions",
      "Coordinated details needed for clean installation and follow-up work",
      "Built a practical mindset for solving technical workflow problems"
    ]
  },
  {
    role: "AI & Automation Project Experience",
    company: "Personal portfolio projects",
    period: "2023 - Present",
    description: "Portfolio project work using AI-assisted development, Python, React/TypeScript, API integrations and data processing to build useful automation tools.",
    highlights: [
      "Built trading dashboard workflows with market scanning, decision rules and reports",
      "Designed a solar pre-design and quotation workflow based on PV experience",
      "Built productivity automation concepts such as Scan&Clean Disk Analyzer",
      "Used documentation, testing and debugging habits to keep projects practical and maintainable"
    ]
  }
];

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-32 px-6 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.05),transparent_40%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-sm text-zinc-400">Experience</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Technical Background & Automation Practice
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A career path combining CAD and installation experience with portfolio projects in automation, data processing and practical software tools.
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
