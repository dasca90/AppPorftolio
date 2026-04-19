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
    id: "solar-platform",
    title: "Solar Pre-Design Platform",
    summary: "Intelligent solar installation planning tool that automates technical assessments and generates accurate project proposals",
    problem: "Solar installation companies spend hours manually calculating panel layouts, electrical requirements, and generating client proposals. This slows down sales cycles and increases the risk of technical errors in initial designs.",
    solution: "Built an automated pre-design platform that analyzes site data, calculates optimal panel placement, generates electrical schematics, and produces professional client-ready proposals in minutes instead of hours.",
    role: "Technical Designer & Developer - Designed the calculation logic, built the interface, integrated mapping APIs, and created PDF generation system",
    features: [
      "Automated panel layout optimization based on roof dimensions",
      "Real-time electrical load calculations and circuit design",
      "Interactive site assessment with satellite imagery integration",
      "Automated proposal generation with technical diagrams",
      "Cost estimation and ROI projections",
      "Export to CAD for detailed engineering"
    ],
    technologies: ["React", "Python", "AutoCAD API", "Google Maps API", "PDF Generation", "Canvas API"],
    impact: "Reduced pre-design time by 75%, improved proposal accuracy, and enabled sales teams to handle 3x more client consultations per week",
    category: "Technical Design Tool"
  },
  {
    id: "trading-bot",
    title: "Trading Bot Dashboard",
    summary: "Real-time trading automation dashboard with live market data visualization and strategy monitoring",
    problem: "Manual trading requires constant monitoring and split-second decisions. Traders need automated execution with transparent oversight and performance tracking.",
    solution: "Developed a trading bot system with a comprehensive dashboard that executes strategies, visualizes market data in real-time, and provides detailed performance analytics with risk management controls.",
    role: "Developer & Designer - Built the trading logic, designed the dashboard UI, integrated market data APIs, and implemented visualization components",
    features: [
      "Automated strategy execution with configurable parameters",
      "Real-time market data streaming and charting",
      "Portfolio performance tracking and analytics",
      "Risk management controls and stop-loss automation",
      "Trade history logging and performance reports",
      "Multi-exchange support and API integration"
    ],
    technologies: ["React", "Python", "Trading APIs", "WebSocket", "Recharts", "TypeScript"],
    impact: "Enabled 24/7 automated trading execution, improved decision consistency, and provided comprehensive performance insights",
    category: "Automation & Data"
  },
  {
    id: "invoice-app",
    title: "Invoice & Timesheet App",
    summary: "Streamlined billing and time tracking application for freelancers and small teams",
    problem: "Freelancers and contractors waste valuable time managing invoices, tracking billable hours, and chasing payments using disconnected tools and spreadsheets.",
    solution: "Created an integrated app that combines time tracking, project management, invoice generation, and payment tracking in one clean, professional interface.",
    role: "Full-Stack Developer - Designed the data model, built the frontend interface, implemented PDF invoice generation, and created the time tracking system",
    features: [
      "Integrated time tracking with project association",
      "Professional invoice generation with custom branding",
      "Automatic calculation of billable hours and expenses",
      "Payment status tracking and reminders",
      "Client management and project organization",
      "Export to PDF and accounting software integration"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PDF Generation", "LocalStorage", "Date-fns"],
    impact: "Reduced invoice preparation time by 60%, improved payment tracking visibility, and professionalized client billing process",
    category: "Productivity Tool"
  },
  {
    id: "hardware-monitor",
    title: "Hardware Monitoring Desktop App",
    summary: "Real-time system performance monitoring tool with alerts and historical tracking",
    problem: "Power users and developers need detailed visibility into system performance, temperature monitoring, and resource usage without juggling multiple tools.",
    solution: "Built a unified desktop application that monitors CPU, GPU, memory, disk, and network metrics in real-time with customizable alerts and historical data visualization.",
    role: "Desktop Application Developer - Designed the monitoring architecture, built the UI, integrated system APIs, and implemented data logging",
    features: [
      "Real-time CPU, GPU, RAM, and disk monitoring",
      "Temperature tracking with threshold alerts",
      "Network bandwidth monitoring",
      "Historical performance graphs and trends",
      "Customizable alert thresholds",
      "Minimal resource footprint and system tray integration"
    ],
    technologies: ["Python", "React", "System APIs", "Recharts", "Electron", "SQLite"],
    impact: "Provided comprehensive system insights, prevented thermal issues through alerts, and enabled performance optimization",
    category: "System Tool"
  },
  {
    id: "pet-marketplace",
    title: "Pet Sitter Marketplace",
    summary: "Platform connecting pet owners with verified sitters through profile matching and booking management",
    problem: "Pet owners struggle to find trustworthy, available sitters, while pet care professionals lack a professional platform to showcase their services and manage bookings.",
    solution: "Developed a two-sided marketplace with sitter profiles, availability calendars, booking management, and review systems to create trust and streamline the pet care process.",
    role: "Product Designer & Developer - Designed user flows, built the booking system, created sitter profiles, and implemented the review functionality",
    features: [
      "Sitter profile pages with photos, services, and rates",
      "Availability calendar and booking request system",
      "Secure messaging between owners and sitters",
      "Review and rating system for trust building",
      "Service area mapping and search filters",
      "Booking management dashboard for both parties"
    ],
    technologies: ["React", "TypeScript", "Mapping API", "Calendar UI", "Form Validation"],
    impact: "Connected pet owners with quality care providers, professionalized pet sitting services, and streamlined the booking process",
    category: "Marketplace Platform"
  },
  {
    id: "cnc-products",
    title: "CNC / Laser Product Brand Projects",
    summary: "Custom product design and manufacturing projects using CNC and laser cutting technology",
    problem: "Small batch custom manufacturing requires precise technical drawings, material optimization, and production-ready files that bridge design intent with fabrication capabilities.",
    solution: "Executed multiple product design projects from concept to production, creating detailed CAD files, optimizing for CNC/laser processes, and coordinating with fabrication to ensure quality output.",
    role: "Technical Designer & Product Developer - Created CAD designs, prepared production files, optimized toolpaths, and coordinated manufacturing",
    features: [
      "Precision CAD modeling for CNC machining",
      "Laser cutting file preparation and nesting",
      "Material selection and cost optimization",
      "Production-ready technical drawings",
      "Toolpath optimization for efficient manufacturing",
      "Quality control and iteration management"
    ],
    technologies: ["AutoCAD", "CAM Software", "Vector Graphics", "G-Code", "Material Libraries"],
    impact: "Delivered custom products with precision manufacturing, reduced material waste, and ensured high-quality fabrication results",
    category: "Product Design & Manufacturing"
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
              <span className="text-sm text-zinc-400">Featured Work</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Selected Projects
            </h2>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A showcase of technical design and development work spanning automation, product design, and digital tools
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
                  {/* Project image placeholder */}
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
        </motion.div>
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
