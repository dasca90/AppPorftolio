import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, MessageSquare, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const CONTACT_INFO = {
  email: "alexdasca@gmail.com",
  linkedin: "https://linkedin.com/in/alexandru-dascalescu-5aaa49191",
  address: "Brasov, Romania",
  phoneNote: "Available on request"
};

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio contact");
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        "",
        formData.message
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-6 bg-zinc-950" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-sm text-zinc-400">Contact</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Let&apos;s Discuss the Workflow
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Open to AI automation roles, practical workflow projects and technical design collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Email</div>
                    <div className="text-white font-medium">{CONTACT_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">LinkedIn</div>
                    <div className="text-white font-medium">/in/alexandru-dascalescu</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Location</div>
                    <div className="text-white font-medium">{CONTACT_INFO.address}</div>
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}?subject=Phone%20request`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer w-full text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Phone</div>
                    <div className="text-white font-medium">{CONTACT_INFO.phoneNote}</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I usually reply within 24-48 hours on working days.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="AI automation role or project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about the role, workflow or project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-zinc-200 transition-all duration-300"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
