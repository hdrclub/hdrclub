import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/protocolos/ascenda")({
  head: () => ({
    meta: [
      { title: "Ascenda - 7 dias de protocolo vibracional | HDR Club" },
      { name: "description", content: "Protocolo de 7 áudios em sequência terapêutica estratégica para identificar e dissolver os padrões invisíveis que mantêm você em oscilação." },
      { property: "og:title", content: "Ascenda - Protocolo Vibracional | HDR Club" },
      { property: "og:description", content: "7 dias para reconhecer o que está operando em você." },
    ],
  }),
  component: AscendaPage,
});

function AscendaPage() {
  return (
    <>
      {/* Hero - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-4">Protocolo de Entrada</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ascenda
          </h1>
          <p className="text-golden text-lg italic mt-3">7 dias para identificar e começar a dissolver o que ainda opera em você.</p>
          <p className="mt-6 text-navy-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Ascenda é um protocolo de 7 áudios em sequência terapêutica estratégica - criado para mulheres que já perceberam que o problema é interno, mas ainda não sabem nomear o que está operando.
          </p>
          <div className="mt-8">
            <a href="https://pay.kiwify.com.br/KolVyVy" target="_blank" rel="noopener noreferrer">
              <Button variant="golden" size="xl" className="max-w-full whitespace-normal text-center">
                Quero começar pelo Ascenda <ArrowRight className="w-5 h-5 shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Fases - golden */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-3">A jornada</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">Cada dia atua numa camada específica do padrão antigo</h2>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Fase 1 - Quebra do Padrão Antigo <span className="text-muted-foreground font-normal text-base">(dias 1-3)</span></h3>
              <div className="space-y-3">
                {[
                  "Dia 1 - Sair do modo sobrevivência: você ensina o corpo que não precisa mais viver em alerta constante.",
                  "Dia 2 - Silenciar a mente que não desliga: encerrar o looping mental do controle e antecipação.",
                  "Dia 3 - Romper o ciclo da procrastinação: dissolver o padrão de fuga e autossabotagem.",
                ].map((item, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-golden">{item}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Fase 2 - Liberação de Identidade Antiga <span className="text-muted-foreground font-normal text-base">(dias 4-5)</span></h3>
              <div className="space-y-3">
                {[
                  "Dia 4 - Parar de provar o seu valor: cortar a raiz da performance como validação.",
                  "Dia 5 - Curar o autoabandono: reconectar com presença, consistência e auto-sustentação.",
                ].map((item, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-golden">{item}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Fase 3 - Sustentação da Expansão <span className="text-muted-foreground font-normal text-base">(dias 6-7)</span></h3>
              <div className="space-y-3">
                {[
                  "Dia 6 - Sustentar a prosperidade sem colapsar: trabalhar o corpo para não rejeitar o crescimento.",
                  "Dia 7 - Integrar a nova identidade: estabilizar o novo padrão de quem você está se tornando.",
                ].map((item, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-golden">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-3">Benefícios</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">O que o Ascenda desbloqueia</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Identifica o padrão invisível que sustenta a oscilação",
              "Dissolve o looping mental do controle e da antecipação",
              "Inicia a liberação dos códigos de sobrevivência",
              "Prepara o campo para transformação mais profunda",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-navy-foreground/5 rounded-xl p-5 border border-navy-foreground/10">
                <Star className="w-4 h-4 fill-golden text-golden mt-1 shrink-0" />
                <span className="text-navy-foreground/90 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem - golden */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-3">Para quem é</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">Esse protocolo é para você que:</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Já percebeu que o problema não é externo - mas não sabe o que exatamente está operando",
              "Sente que oscila entre expansão e exaustão sem entender por quê",
              "Quer um primeiro passo estruturado - não conteúdo motivacional",
              "Está pronta para nomear o padrão antes de tentar mudá-lo",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-golden-light/60 rounded-xl p-5 border border-golden/20">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Pronta para o primeiro passo?
          </h2>
          <p className="mt-4 text-navy-foreground/70 text-lg leading-relaxed">
            O Ascenda é o início da sua reorganização. 7 dias. 7 camadas. Uma nova forma de operar.
          </p>
          <div className="mt-8">
            <a href="https://pay.kiwify.com.br/KolVyVy" target="_blank" rel="noopener noreferrer">
              <Button variant="golden" size="xl" className="max-w-full whitespace-normal text-center">
                Quero começar pelo Ascenda <ArrowRight className="w-5 h-5 shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
