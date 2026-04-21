import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/protocolos/hdr28")({
  head: () => ({
    meta: [
      { title: "HDR28 - Protocolo Individual Premium | HDR Club" },
      { name: "description", content: "8 semanas de reorganização individual da sua estrutura interna. O processo mais profundo do Método HDR." },
      { property: "og:title", content: "HDR28 - Protocolo Individual Premium | HDR Club" },
      { property: "og:description", content: "8 semanas. Trabalho individual. Reorganização profunda da sua estrutura interna." },
    ],
  }),
  component: HDR28Page,
});

function HDR28Page() {
  return (
    <>
      {/* Hero - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-4">Protocolo Premium Individual</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            HDR28
          </h1>
          <p className="text-golden text-lg italic mt-3">8 semanas de reorganização individual da sua estrutura interna. O processo mais profundo do Método HDR.</p>
          <p className="mt-6 text-navy-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            O HDR28 é a aplicação completa e personalizada do Método HDR na sua estrutura - emocional, mental, física e energética. Não é terapia convencional. Não é mentoria de negócios. É o processo que reorganiza a base de onde você opera - para que o crescimento que você já tem passe a ser sustentado por identidade, não por tensão.
          </p>
          <div className="mt-8">
            <a href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Quero conversar sobre o HDR28." target="_blank" rel="noopener noreferrer">
              <Button variant="golden" size="xl" className="max-w-full whitespace-normal text-center">
                Quero conversar sobre o HDR28 <ArrowRight className="w-5 h-5 shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* As 3 fases - golden */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-3">O Processo</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">As 3 fases do Método HDR em profundidade individual</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Fase 1 - Limpeza da Base</h3>
              <p className="text-muted-foreground leading-relaxed">Remoção de padrões, interferências e cargas que mantêm você presa ao passado.</p>
              <p className="text-primary font-semibold text-sm mt-3">Resultado: mais leveza, clareza e energia disponível.</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Fase 2 - Reprogramação da Identidade</h3>
              <p className="text-muted-foreground leading-relaxed">Instalação de uma nova forma de pensar, sentir e se posicionar.</p>
              <p className="text-primary font-semibold text-sm mt-3">Resultado: decisões mais firmes, menos autossabotagem, mais coerência.</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Fase 3 - Sustentação da Expansão</h3>
              <p className="text-muted-foreground leading-relaxed">Integração da nova identidade no cotidiano.</p>
              <p className="text-primary font-semibold text-sm mt-3">Resultado: crescimento com estabilidade - sem viver em tensão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você recebe - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-3">Incluso</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">O que você recebe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "8 sessões individuais",
              "Reprogramações profundas aplicadas na sua estrutura",
              "Diagnóstico estrutural dos seus padrões",
              "Áudios de integração e sustentação",
              "Acompanhamento durante todo o processo",
              "Direcionamento estratégico conforme seu momento",
              "Mapa HDR no Notion",
              "Journal de evolução",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-navy-foreground/5 rounded-xl p-4 border border-navy-foreground/10">
                <Star className="w-4 h-4 fill-golden text-golden mt-1 shrink-0" />
                <span className="text-navy-foreground/90 leading-relaxed text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios - golden */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-3">Benefícios</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">O que muda</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Para de viver no automático da rotina",
              "Reduz a sobrecarga mental e emocional",
              "Toma decisões com clareza e segurança",
              "Sustenta crescimento sem precisar se forçar",
              "Se posiciona com mais autoridade e presença",
              "Deixa de repetir padrões que limitam a expansão",
              "Constrói uma base interna estável para crescer além do nível atual",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-golden-light/60 rounded-xl p-5 border border-golden/20">
                <Star className="w-4 h-4 fill-golden text-golden mt-1 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-3">Para quem é</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">Esse protocolo é para você que:</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Já construiu resultados - mas sente que está sempre no limite",
              "Já fez terapia, cursos e mentorias - mas ainda repete os mesmos padrões",
              "Percebe que as decisões ainda vêm carregadas de tensão",
              "Sente que o crescimento do negócio depende do quanto consegue aguentar",
              "Quer crescer com leveza - sem precisar se forçar o tempo todo",
              "Está pronta para reorganizar a estrutura - não apenas ajustar comportamentos",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-navy-foreground/5 rounded-xl p-5 border border-navy-foreground/10">
                <Check className="w-5 h-5 text-golden mt-0.5 shrink-0" />
                <span className="text-navy-foreground/90 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-navy-foreground/60 text-sm mt-8 italic">
            Não é para iniciantes. É para mulheres que já estão em movimento - e sabem que a estrutura interna ainda não acompanha o nível que vivem.
          </p>
        </div>
      </section>

      {/* CTA - golden */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Pronta para reorganizar a base de onde você opera?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            O HDR28 é um processo individual. Vamos conversar e entender se faz sentido para o seu momento.
          </p>
          <div className="mt-8">
            <a href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Quero conversar sobre o HDR28." target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="xl" className="max-w-full whitespace-normal text-center">
                Quero conversar sobre o HDR28 <ArrowRight className="w-5 h-5 shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
