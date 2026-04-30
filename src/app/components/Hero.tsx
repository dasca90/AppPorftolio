import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, FileText, Mail } from "lucide-react";

const PERSONAL_INFO = {
  name: "Alexandru Dascalescu",
  title: "AI Automation Developer & CAD Technical Designer",
  tagline: "Practical automation for technical workflows."
};

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.06),transparent_40%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-sm text-zinc-300 font-medium">Available for AI automation roles and technical workflow projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-400 tracking-tight"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl text-zinc-200 mb-4 font-light"
          >
            {PERSONAL_INFO.title}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-500 mb-12 italic"
          >
            {PERSONAL_INFO.tagline}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I build practical automation tools using Python, React/TypeScript, API integrations and AI-assisted workflows.
            My CAD, MEP and solar PV background helps me turn technical processes into clear, useful software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 group px-8"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 transition-all duration-300 px-8"
              onClick={() => scrollToSection("cv")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Request CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 transition-all duration-300 px-8"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
