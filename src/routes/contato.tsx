import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { MessageCircle, ArrowRight, Instagram, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato - HDR Club" },
      { name: "description", content: "Entre em contato para agendar sua sessão de terapia vibracional. WhatsApp, formulário ou Instagram." },
      { property: "og:title", content: "Contato - HDR Club" },
      { property: "og:description", content: "Agende sua sessão de terapia vibracional." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá Kamila! Meu nome é ${formData.nome}.\n\n${formData.mensagem}\n\nMeu email: ${formData.email}`
    );
    window.open(`https://api.whatsapp.com/send?phone=351936840009&text=${msg}`, "_blank");
  };

  return (
    <>
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Contato"
            title="Vamos conversar?"
            subtitle="Estou aqui para te ouvir e te ajudar a dar o próximo passo"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Escolha a forma que preferir
              </h3>
              <div className="space-y-6">
                <a
                  href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Gostaria de saber mais sobre as terapias."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[oklch(0.55_0.17_145)]/10 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-[oklch(0.55_0.17_145)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">Resposta rápida e atendimento direto</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/kaamirodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-rose/20 flex items-center justify-center">
                    <Instagram className="w-7 h-7 text-rose-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Instagram</h4>
                    <p className="text-sm text-muted-foreground">@kaamirodrigues - conteúdos e dicas</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">💡 Dica</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Se você não sabe qual terapia é ideal para o seu momento, não se preocupe. Me envie uma mensagem contando o que está sentindo e eu te indico o melhor caminho.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Envie uma mensagem</h3>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">Seu nome</label>
                    <input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData(d => ({ ...d, nome: e.target.value }))}
                      className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Como posso te chamar?"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Seu email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(d => ({ ...d, email: e.target.value }))}
                      className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">Sua mensagem</label>
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => setFormData(d => ({ ...d, mensagem: e.target.value }))}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Conte-me o que você está sentindo ou o que precisa..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Enviar pelo WhatsApp <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
