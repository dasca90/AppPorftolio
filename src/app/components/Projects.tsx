import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  technologies: string[];
  impact: string;
  category: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: "trading-bot-dashboard",
    title: "Trading Bot Dashboard",
    summary: "Crypto market scanning dashboard with decision rules, confidence logic, journal reports and exchange API workflows.",
    problem: "Manual crypto market review can become repetitive and difficult to document consistently. A useful workflow needs structured scans, clear decision rules, traceable results and notifications without hiding the logic from the user.",
    solution: "I built a dashboard concept that brings market scanning, confidence scoring, trading journal entries, reports and Binance/API integration into one practical workflow for review and iteration.",
    role: "Automation developer - I designed the scanning logic, UI structure, reporting flow and API-based automation approach.",
    features: [
      "Crypto market scanning for selected symbols and conditions",
      "Decision rules with confidence logic that can be reviewed",
      "Trading journal entries and performance-style reports",
      "Binance/API integration planning for account and market data",
      "Notification workflow for important scan results",
      "Dashboard views for monitoring signals and outcomes"
    ],
    technologies: ["Python", "React", "TypeScript", "Binance API", "Data processing", "Notifications"],
    impact: "Turns a manual research routine into a more structured and repeatable review process with clearer notes, rules and follow-up actions.",
    category: "AI & Automation"
  },
  {
    id: "solar-quotation-platform",
    title: "Solar Pre-Design & Quotation Platform",
    summary: "PV pre-design workflow for roof layouts, panel planning, equipment data and quotation preparation.",
    problem: "Solar quotation work often starts with repeated layout checks, equipment matching and early technical assumptions. Without a simple workflow, the first proposal can take too long and become hard to adjust.",
    solution: "I designed a practical pre-design platform concept based on real PV design experience: 2D roof and panel planning, equipment data handling and a clearer quotation workflow for early-stage proposals.",
    role: "CAD technical designer and automation developer - I shaped the PV workflow, layout logic, equipment data model and quotation steps.",
    features: [
      "2D solar pre-design for roof and panel layout planning",
      "Panel placement workflow informed by PV design constraints",
      "Equipment data handling for panels, inverters and accessories",
      "Quotation workflow for early customer proposals",
      "Technical notes based on real solar design experience",
      "Structured data ready for review, update and reuse"
    ],
    technologies: ["React", "TypeScript", "Python", "AutoCAD", "PV design", "PDF workflow"],
    impact: "Helps turn early PV design knowledge into a clearer, faster quotation process with fewer repeated manual steps.",
    category: "Technical Workflow"
  },
  {
    id: "scan-clean-disk-analyzer",
    title: "Scan&Clean Disk Analyzer",
    summary: "Desktop productivity tool that scans drives and folders to reveal the largest files, folders and cleanup opportunities.",
    problem: "Storage cleanup is slow when users cannot quickly see what is actually taking space across folders, drives and old downloads.",
    solution: "I built a practical disk analysis tool concept that scans selected folders or HDDs, ranks the largest files and directories, and helps users decide what to review or remove.",
    role: "Python automation developer - I planned the scanning flow, data processing, result grouping and clean UI logic.",
    features: [
      "Folder and HDD scanning for disk usage analysis",
      "Largest files and folders detection",
      "Grouped results that make cleanup decisions easier",
      "Basic filters for file type, size and location",
      "Progress feedback for long scans",
      "Practical productivity workflow for storage review"
    ],
    technologies: ["Python", "Desktop app", "File-system scanning", "Data processing", "UI logic"],
    impact: "Makes storage cleanup easier to understand by replacing guesswork with clear file and folder usage data.",
    category: "Productivity Automation"
  }
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-32 px-6 bg-zinc-950" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
              <span className="text-sm text-zinc-400">Selected Work</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              AI Automation Portfolio Projects
            </h2>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Three practical projects that show automation, API integration, data processing and technical workflow thinking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="w-full h-48 mb-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="text-zinc-600 text-4xl font-bold opacity-20">{index + 1}</div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="mb-3 inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-400 border border-white/10">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 text-zinc-400 border border-white/10">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-zinc-400 border border-white/10">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">View Details</span>
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
