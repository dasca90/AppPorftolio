import { Mail, Linkedin } from "lucide-react";

const FOOTER_INFO = {
  name: "Alexandru Dascalescu",
  email: "alexdasca@gmail.com",
  linkedin: "https://linkedin.com/in/alexandru-dascalescu-5aaa49191",
  tagline: "Dezvoltator AI Automation & Tehnician Proiectare CAD, orientat spre aplicatii practice pentru workflow-uri tehnice."
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">{FOOTER_INFO.name}</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              {FOOTER_INFO.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={`mailto:${FOOTER_INFO.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a
                href={FOOTER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Linkuri rapide</h4>
            <ul className="space-y-2">
              {[
                { label: "Despre", id: "about" },
                { label: "Competente", id: "skills" },
                { label: "Proiecte", id: "projects" },
                { label: "Experienta", id: "experience" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Formular contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("cv")}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Solicita CV
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${FOOTER_INFO.email}`}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} {FOOTER_INFO.name}. Toate drepturile rezervate.
          </p>
          <p className="text-zinc-500 text-sm">
            Construit cu precizie si atentie la detalii
          </p>
        </div>
      </div>
    </footer>
  );
}
