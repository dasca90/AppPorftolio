import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import { Project } from "./Projects";
import { Button } from "./ui/button";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-zinc-900 rounded-2xl border border-white/10 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close project details"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 text-sm text-zinc-400 border border-white/10">
                {project.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="w-full h-64 md:h-96 mb-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="text-zinc-700 text-6xl font-bold opacity-20">Project snapshot</div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Problem</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Solution</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">My Role</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.role}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Impact</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Button
                onClick={onClose}
                className="bg-white text-black hover:bg-zinc-200"
              >
                Close Project
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
