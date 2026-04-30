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
            <span className="text-sm text-zinc-400">Despre</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Experienta tehnica<br />aplicata in automatizare practica
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                Sunt <span className="text-white font-medium">Tehnician Proiectare CAD</span> cu experienta practica in
                layout-uri electrice, instalatii MEP, instalatii sanitare, ventilatie, sisteme fotovoltaice, elevatii bai
                si documentatie tehnica. Aceasta experienta m-a format sa lucrez cu acuratete, specificatii clare si
                workflow-uri utile in proiecte tehnice reale.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Pe langa proiectarea tehnica, dezvolt aplicatii de portofoliu folosind{" "}
                <span className="text-white font-medium">Python, React, TypeScript, JavaScript si integrare API</span>.
                Ma concentrez pe automatizare, procesare de date, logica UI si instrumente care reduc munca manuala.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                Am <span className="text-white font-medium">3 ani de experienta practica in AI & Automatizare</span> prin
                proiecte personale si de portofoliu. Folosesc workflow-uri asistate de AI pentru planificare, documentare,
                testarea ideilor si accelerarea implementarii.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                Directia mea este clara: aplicatii utile, documentatie usor de urmarit, integrare API si solutii tehnice
                care transforma procese complexe in pasi mai simpli, verificabili si mai usor de folosit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              { value: "5+", label: "Ani in proiectare tehnica" },
              { value: "3", label: "Ani practica AI Automation" },
              { value: "3", label: "Proiecte principale" },
              { value: "100%", label: "Orientare practica" }
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
