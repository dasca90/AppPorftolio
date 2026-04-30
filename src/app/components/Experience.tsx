import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Tehnician Proiectare CAD & Instalatii - Contractor",
    company: "Alex Dasca Design Studio",
    period: "Ian 2025 - Prezent",
    description: "Proiectare tehnica pe baza de contract, cu accent pe documentatie CAD clara, layout-uri pentru instalatii si detalii practice pentru proiecte rezidentiale si tehnice.",
    highlights: [
      "Pregatire desene CAD, layout-uri tehnice si documentatie pentru instalatii",
      "Lucru cu cerinte electrice, MEP, sanitare, ventilatie si elevatii bai",
      "Transformarea cerintelor de proiect in desene clare si usor de verificat",
      "Folosirea unor workflow-uri structurate pentru reducerea muncii repetitive"
    ]
  },
  {
    role: "Tehnician Proiectare Fotovoltaic",
    company: "Sunworks Ltd",
    period: "Dec 2021 - Dec 2024",
    description: "Experienta in proiectare PV, layout-uri initiale, coordonare echipamente si documentatie tehnica pentru sisteme fotovoltaice.",
    highlights: [
      "Suport pentru planificarea acoperisurilor si layout-urilor de panouri fotovoltaice",
      "Lucru cu date de echipamente, constrangeri de sistem si note tehnice",
      "Pregatire documentatie pentru verificare, ofertare si coordonare proiect",
      "Baza practica pentru platforma de pre-proiectare solara si ofertare"
    ]
  },
  {
    role: "Tehnician Instalatii MEP",
    company: "Dandara",
    period: "Mar 2019 - Dec 2021",
    description: "Experienta practica in instalatii MEP, cu intelegere directa a desenelor tehnice, constrangerilor de santier si nevoii de documentatie precisa.",
    highlights: [
      "Lucru cu cerinte mecanice, electrice, sanitare si de ventilatie",
      "Citire si verificare desene tehnice in raport cu situatii reale de santier",
      "Coordonare detalii necesare pentru executie si verificari ulterioare",
      "Formarea unei abordari practice pentru rezolvarea problemelor tehnice"
    ]
  },
  {
    role: "Experienta proiecte AI & Automatizare",
    company: "Proiecte personale / portofoliu",
    period: "2023 - Prezent",
    description: "Experienta prin proiecte personale si de portofoliu, folosind AI-assisted development, Python, React/TypeScript, integrare API si procesare de date pentru aplicatii practice de automatizare.",
    highlights: [
      "Dezvoltare workflow-uri pentru trading dashboard cu scanner de piata, reguli de decizie si rapoarte",
      "Proiectare workflow de pre-design solar si ofertare pe baza experientei PV",
      "Dezvoltare concepte de productivitate precum Scan&Clean Disk Analyzer",
      "Folosirea documentatiei, testarii si debugging-ului pentru proiecte mai clare si mentenabile"
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
            <span className="text-sm text-zinc-400">Experienta</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Parcurs tehnic si practica in automatizare
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Experienta in proiectare CAD, instalatii MEP si sisteme fotovoltaice, completata de proiecte personale in automatizare, procesare date si aplicatii software.
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
