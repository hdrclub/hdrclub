import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Histórias de Transformação - HDR Club" },
      { name: "description", content: "O que muda com o Método HDR não é como você se sente. É como você opera. Veja histórias reais de transformação." },
      { property: "og:title", content: "Histórias de Transformação - HDR Club" },
      { property: "og:description", content: "Histórias reais de mulheres que passaram pelo Método HDR." },
    ],
  }),
  component: DepoimentosPage,
});

const testimonials = [
  { name: "Maria C.", niche: "Consultoria", text: "Antes eu tomava cada decisão com o corpo em alerta. Depois do HDR28 sinto firmeza - decido e sustento sem precisar me forçar.", before: "Decisões carregadas de tensão", after: "Clareza e firmeza para liderar" },
  { name: "Ana P.", niche: "E-commerce", text: "Eu crescia e colapsava. Crescia e colapsava. Depois da Ascensão Feminina, o crescimento ficou. Sem pedir colapso em troca.", before: "Ciclo de expansão e esgotamento", after: "Crescimento sustentável e leve" },
  { name: "Juliana S.", niche: "Mentoria", text: "Participar do processo me mostrou que eu estava sustentando tudo com esforço. Agora sustento com identidade.", before: "Sucesso sustentado por tensão", after: "Sucesso sustentado por quem ela é" },
  { name: "Fernanda L.", niche: "Advocacia", text: "Eu tinha medo de delegar porque achava que ninguém faria como eu. Depois do HDR28, delego com confiança e meu escritório cresceu 40%.", before: "Controle excessivo e sobrecarga", after: "Delegação com confiança e crescimento" },
  { name: "Patrícia M.", niche: "Saúde e Bem-estar", text: "Depois do Ascenda eu finalmente entendi o que estava operando por baixo de toda a minha ansiedade. Foi o primeiro passo para tudo mudar.", before: "Ansiedade sem causa aparente", after: "Consciência do padrão e início da reorganização" },
  { name: "Camila R.", niche: "Marketing Digital", text: "Eu faturava bem mas vivia esgotada. O Método HDR me mostrou que eu estava sustentando o negócio com tensão, não com identidade. Tudo mudou.", before: "Faturamento alto com esgotamento", after: "Prosperidade com leveza" },
];

function DepoimentosPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-3">Histórias de Transformação</span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">Histórias de Transformação</h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              O que muda com o Método HDR não é como você se sente. É como você opera. Abaixo, algumas mulheres que passaram pelo processo - e o que mudou no negócio, na liderança e na forma de viver o que construíram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-golden text-golden" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-sm font-semibold text-foreground">- {t.name} · {t.niche}</p>
                <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">Antes:</strong> {t.before}</p>
                  <p><strong className="text-foreground">Depois:</strong> {t.after}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-lg mb-6">Pronta para escrever a sua história de transformação?</p>
            <a
              href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Quero entender qual é o meu próximo passo."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="xl">
                Quero entender qual é o meu próximo passo <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
