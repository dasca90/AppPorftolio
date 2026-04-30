import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, CheckCircle2, ZoomIn } from "lucide-react";
import { Project } from "./Projects";
import { Button } from "./ui/button";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [expandedImage, setExpandedImage] = useState<NonNullable<Project["gallery"]>[number] | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-start justify-center p-4 md:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-[1500px] bg-zinc-900 rounded-2xl border border-white/10 my-4 md:my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Inchide detaliile proiectului"
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

            <div className="w-full h-64 md:h-[520px] mb-12 rounded-xl bg-black flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <div className="text-zinc-700 text-6xl font-bold opacity-20">Prezentare proiect</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="space-y-10">
              {project.gallery && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Capturi din aplicatie</h3>
                  <div className="space-y-8">
                    {project.gallery.map((item) => (
                      <button
                        type="button"
                        key={item.src}
                        onClick={() => setExpandedImage(item)}
                        className="group block w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left transition-colors hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/30"
                        aria-label={`Mareste captura ${item.title}`}
                      >
                        <div className="relative bg-black overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="block h-auto w-full"
                            loading="lazy"
                          />
                          <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                            <ZoomIn className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Problema</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Solutia</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Rolul meu</h3>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {project.role}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Functionalitati cheie</h3>
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
                <h3 className="text-2xl font-bold text-white mb-4">Tehnologii folosite</h3>
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
                Inchide proiectul
              </Button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {expandedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="relative flex max-h-[94vh] w-full max-w-[1800px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setExpandedImage(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
                  aria-label="Inchide imaginea marita"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="min-h-0 flex-1 bg-black p-3">
                  <img
                    src={expandedImage.src}
                    alt={expandedImage.alt}
                    className="mx-auto max-h-[76vh] w-full object-contain"
                  />
                </div>

                <div className="border-t border-white/10 p-5 md:p-6">
                  <h3 className="text-2xl font-bold text-white">{expandedImage.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-zinc-300">
                    {expandedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
