import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Button } from "./ui/button";
import { Mail, FileText } from "lucide-react";

const CONTACT_EMAIL = "alexdasca@gmail.com";

export function CV() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const handleCvRequest = () => {
    const subject = encodeURIComponent("CV request - Alexandru Dascalescu");
    const body = encodeURIComponent("Hi Alexandru,\n\nI would like to request your latest CV.\n\nThank you.");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="cv" className="py-32 px-6 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.06),transparent_40%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="p-12 md:p-16 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mx-auto mb-8"
              >
                <FileText className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                CV Available on Request
              </h2>

              <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Request the latest CV for a concise overview of my CAD, MEP, solar PV and AI automation project experience.
              </p>

              <Button
                size="lg"
                onClick={handleCvRequest}
                className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Request CV by Email
              </Button>

              <p className="text-sm text-zinc-500 mt-6">
                Latest positioning updated April 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
