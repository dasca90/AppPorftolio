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
  imageAlt?: string;
  gallery?: {
    title: string;
    description: string;
    src: string;
    alt: string;
  }[];
}

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const projects: Project[] = [
  {
    id: "trading-bot-dashboard",
    title: "Aplicatie Crypto Trading",
    summary: "Dashboard pentru automatizare si analiza crypto, cu scanner de piata, reguli de decizie, jurnal de tranzactii si integrare API.",
    problem: "Analiza manuala a pietei crypto poate deveni repetitiva si greu de documentat coerent. Un workflow util are nevoie de scanare structurata, reguli clare, pozitii deschise vizibile, rezultate urmaribile si notificari.",
    solution: "Am construit un concept de dashboard care reuneste scanarea pietei, logica de incredere, pozitii deschise, jurnal de tranzactii, rapoarte si integrare Binance API intr-un workflow practic de analiza si monitorizare.",
    role: "Dezvoltator automatizare - am definit logica de scanare, structura UI, fluxul de raportare si modul de integrare API.",
    features: [
      "Scanare piata crypto pentru simboluri si conditii selectate",
      "Reguli de decizie si logica de incredere usor de verificat",
      "Monitorizare pozitii deschise si status tranzactii",
      "Jurnal de tranzactii si rapoarte pentru analiza rezultatelor",
      "Integrare Binance API pentru date de piata si cont",
      "Notificari automate pentru rezultate importante"
    ],
    technologies: ["Python", "React", "TypeScript", "Binance API", "Procesare date", "Notificari"],
    impact: "Transforma o rutina manuala de analiza intr-un proces mai structurat, cu reguli clare, note mai bune si actiuni mai usor de urmarit.",
    category: "AI & Automatizare",
    image: publicAsset("projects/trading-bot/dashboard.jpg"),
    imageAlt: "Dashboard Trading Bot",
    gallery: [
      {
        title: "Bot Tuning",
        description: "Configurare avansata pentru strategii, TP/SL, trailing logic si grupe de risc.",
        src: publicAsset("projects/trading-bot/bot-tuning.jpg"),
        alt: "Bot Tuning pentru Trading Bot Dashboard"
      },
      {
        title: "Dashboard",
        description: "Monitorizare live pentru profit, capital, pozitii deschise si status boti.",
        src: publicAsset("projects/trading-bot/dashboard.jpg"),
        alt: "Dashboard cu profit, capital si pozitii deschise"
      },
      {
        title: "Journal",
        description: "Rapoarte automate cu performanta, tranzactii, win rate si recomandari.",
        src: publicAsset("projects/trading-bot/journal.jpg"),
        alt: "Journal cu rapoarte automate si tranzactii"
      },
      {
        title: "Logs & Diagnostics",
        description: "Debugging si audit pentru decizii automate, notificari si erori.",
        src: publicAsset("projects/trading-bot/logs-diagnostics.jpg"),
        alt: "Logs si diagnostics pentru decizii automate"
      },
      {
        title: "Market Analyzer",
        description: "Analiza multi-timeframe pentru trend, incredere si recomandare strategie.",
        src: publicAsset("projects/trading-bot/market-analyzer.jpg"),
        alt: "Market Analyzer cu analiza multi-timeframe"
      },
      {
        title: "Settings & Risk Control",
        description: "Control risc, notificari Telegram, emergency stop si limite de tranzactionare.",
        src: publicAsset("projects/trading-bot/settings-risk-control.jpg"),
        alt: "Settings si control risc pentru Trading Bot"
      },
      {
        title: "Trade View",
        description: "Scanner de piata, grafic, watchlist, pozitii si buy/sell manual.",
        src: publicAsset("projects/trading-bot/trade-view.jpg"),
        alt: "Trade View cu scanner de piata si pozitii"
      }
    ]
  },
  {
    id: "solar-quotation-platform",
    title: "Platforma Pre-proiectare si Ofertare pentru Fotovoltaice",
    summary: "Platforma de pre-proiectare solara 2D pentru layout panouri, date tehnice, echipamente si flux de ofertare.",
    problem: "Fluxul initial pentru ofertare solara include verificari repetate de acoperis, layout panouri, echipamente, estimari si date tehnice. Fara un workflow clar, pregatirea unei oferte poate dura mult si poate fi greu de ajustat.",
    solution: "Am proiectat o platforma de pre-design bazata pe experienta reala in proiectare PV: editor acoperis 2D, layout panouri fotovoltaice, selectie echipamente, date tehnice si pasi clari pentru ofertare.",
    role: "Tehnician Proiectare CAD si dezvoltator automatizare - am definit fluxul PV, logica de layout, modelul de date pentru echipamente si pasii de ofertare.",
    features: [
      "Editor acoperis 2D pentru pre-proiectare solara",
      "Layout panouri fotovoltaice pe baza constrangerilor de proiectare",
      "Selectie echipamente pentru panouri, invertoare si accesorii",
      "Date tehnice structurate pentru verificare si reutilizare",
      "Flux de ofertare pentru propuneri initiale catre clienti",
      "Estimari productie si ROI pentru analiza preliminara"
    ],
    technologies: ["React", "TypeScript", "Python", "AutoCAD", "Proiectare PV", "Flux PDF"],
    impact: "Ajuta la transformarea experientei de proiectare PV intr-un proces de ofertare mai clar, mai rapid si mai usor de revizuit.",
    category: "Workflow tehnic",
    image: publicAsset("projects/solar-platform/editor-acoperis.jpg"),
    imageAlt: "Editor acoperis pentru platforma fotovoltaica",
    gallery: [
      {
        title: "Design Electric",
        description: "Configurare invertor, baterie, stringuri, cabluri si verificare compatibilitate.",
        src: publicAsset("projects/solar-platform/design-electric.jpg"),
        alt: "Design Electric pentru configurare invertor si compatibilitate"
      },
      {
        title: "Editor Acoperis",
        description: "Layout 2D pentru acoperis, orientare, margini si amplasare panouri FV.",
        src: publicAsset("projects/solar-platform/editor-acoperis.jpg"),
        alt: "Editor Acoperis cu layout 2D si amplasare panouri FV"
      },
      {
        title: "Fise Tehnice PDF",
        description: "Import PDF, extragere date tehnice si imagini pentru catalog echipamente.",
        src: publicAsset("projects/solar-platform/fise-tehnice-pdf.jpg"),
        alt: "Fise Tehnice PDF cu extragere date si imagini"
      },
      {
        title: "Raport Productie & ROI",
        description: "Grafice pentru productie, consum, autoconsum, economii si recuperare investitie.",
        src: publicAsset("projects/solar-platform/raport-productie-roi.jpg"),
        alt: "Raport Productie si ROI cu grafice si economii"
      },
      {
        title: "Editor Oferta",
        description: "Raport personalizabil cu logo, date client, KPI-uri si sectiuni configurabile.",
        src: publicAsset("projects/solar-platform/editor-oferta.jpg"),
        alt: "Editor Oferta cu raport personalizabil si sectiuni configurabile"
      }
    ]
  },
  {
    id: "facturatorul-v1",
    title: "Facturatorul V1",
    summary: "Aplicatie desktop pentru generare si evidenta facturi, cu import date din fisiere Word si Excel, calcul automat al orelor facturabile si creare factura PDF.",
    problem: "Pregatirea facturilor poate consuma timp atunci cand datele de lucru sunt imprastiate in fisiere Word sau Excel, iar orele facturabile trebuie verificate manual inainte de emitere.",
    solution: "Facturatorul V1 este un tool personal pentru generare si evidenta facturi. Aplicatia importa date din fisiere Word sau Excel, extrage informatii relevante pe baza de keywords, calculeaza orele facturabile si totalurile, apoi genereaza factura intr-un format profesional. Include management clienti, editor vizual pentru layout factura, istoric facturi si export CSV.",
    role: "Dezvoltator aplicatie desktop - am definit fluxul local-first, importul de date, regulile de calcul, managementul clientilor si generarea facturii PDF.",
    features: [
      "Import date din Word si Excel",
      "Extragere task-uri, proiecte si ore pe baza de keywords",
      "Calcul automat ore facturabile si totaluri",
      "Management clienti si reguli de facturare",
      "Editor vizual pentru layout factura",
      "Istoric facturi si export CSV",
      "Aplicatie desktop local-first"
    ],
    technologies: ["Tauri", "React", "TypeScript", "Local-first storage", "Word/Excel import", "PDF generation"],
    impact: "Reduce timpul de pregatire a facturilor si pastreaza un istoric clar pentru clienti, status plata, documente PDF si exporturi CSV.",
    category: "Automatizare productivitate",
    image: publicAsset("projects/facturator-v1/generare-factura.jpg"),
    imageAlt: "Facturatorul V1 cu editor vizual pentru factura",
    gallery: [
      {
        title: "Clienti",
        description: "Administrare clienti, contacte si reguli de facturare.",
        src: publicAsset("projects/facturator-v1/clienti.jpg"),
        alt: "Facturatorul V1 - administrare clienti si reguli de facturare"
      },
      {
        title: "Generare factura",
        description: "Editor factura cu logo, layout, servicii, totaluri si ghidaje de print.",
        src: publicAsset("projects/facturator-v1/generare-factura.jpg"),
        alt: "Facturatorul V1 - editor factura cu layout si totaluri"
      },
      {
        title: "Intrari Word sau Excel",
        description: "Extragere date din Word/Excel, calcul ore facturabile si pregatire factura.",
        src: publicAsset("projects/facturator-v1/intrari-word-excel.jpg"),
        alt: "Facturatorul V1 - import date din Word si Excel"
      },
      {
        title: "Istoric facturi",
        description: "Evidenta facturi, status plata, PDF-uri si export CSV.",
        src: publicAsset("projects/facturator-v1/istoric-facturi.jpg"),
        alt: "Facturatorul V1 - istoric facturi si export CSV"
      }
    ]
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
              <span className="text-sm text-zinc-400">Proiecte selectate</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Proiecte AI Automation
            </h2>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Trei proiecte practice care arata automatizare, integrare API, procesare de date si gandire de workflow tehnic.
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
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-zinc-600 text-4xl font-bold opacity-20">{index + 1}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
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
                    <span className="text-sm font-medium">Vezi detalii</span>
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
