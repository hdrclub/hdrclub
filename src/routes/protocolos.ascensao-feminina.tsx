import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import dep1 from "@/assets/depoimento-ascensao-1.jpg";
import dep2 from "@/assets/depoimento-ascensao-2.jpg";

import dep4 from "@/assets/depoimento-ascensao-4.jpg";

export const Route = createFileRoute("/protocolos/ascensao-feminina")({
  head: () => ({
    meta: [
      { title: "Ascensão Feminina - Imersão de 14 dias | HDR Club" },
      { name: "description", content: "Imersão de 14 dias guiada por práticas diárias de 20 minutos que atuam nos 5 campos da sua estrutura interna." },
      { property: "og:title", content: "Ascensão Feminina - HDR Club" },
      { property: "og:description", content: "14 dias de imersão. Limpeza, desprogramação e ativação da sua nova identidade." },
    ],
  }),
  component: AscensaoFemininaPage,
});

function AscensaoFemininaPage() {
  return (
    <>
      {/* Hero - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-4">Protocolo em Turma</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ascensão Feminina
          </h1>
          <p className="text-golden text-lg italic mt-3">14 dias e uma reorganização completa do seu sistema interno.</p>
          <p className="mt-6 text-navy-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            A Ascensão Feminina é uma imersão de 14 dias guiada por práticas diárias de 20 minutos. Não é um curso sobre desenvolvimento pessoal. É um processo de desprogramação, liberação e reorganização - que atua simultaneamente nos cinco campos que sustentam quem você é: energético, ancestral, emocional, mental e físico.
          </p>
          <p className="mt-3 text-navy-foreground/60 text-base">A maioria trabalha apenas mente. Aqui, você reorganiza o sistema inteiro.</p>
          <div className="mt-8">
            <a href="https://pay.kiwify.com.br/LPKJmjU" target="_blank" rel="noopener noreferrer">
              <Button variant="golden" size="xl" className="max-w-full whitespace-normal text-center">
                Quero entrar na Ascensão Feminina <ArrowRight className="w-5 h-5 shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* A jornada - golden */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-3">A Jornada</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">As 3 fases da Ascensão</h2>
          </div>

          <div className="space-y-10">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Fase 1 - Limpeza e Liberação <span className="text-muted-foreground font-normal text-base">(dias 1-4)</span></h3>
              <p className="text-muted-foreground leading-relaxed">Bloqueios energéticos acumulados · padrões ancestrais de escassez · emoções reprimidas · sobrecarga mental e excesso de controle.</p>
              <p className="text-primary font-semibold text-sm mt-3">Foco: desobstruir.</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Fase 2 - Desprogramação Profunda <span className="text-muted-foreground font-normal text-base">(dias 5-9)</span></h3>
              <p className="text-muted-foreground leading-relaxed">Crenças inconscientes sobre dinheiro e merecimento · lealdades invisíveis à dor familiar · autoimagem limitada · padrões de esforço, culpa e sacrifício.</p>
              <p className="text-primary font-semibold text-sm mt-3">Foco: romper padrões estruturais.</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Fase 3 - Ativação e Expansão <span className="text-muted-foreground font-normal text-base">(dias 10-14)</span></h3>
              <p className="text-muted-foreground leading-relaxed">Frequência da prosperidade · segurança interna para crescer · nova identidade vibracional · magnetismo e receptividade · expansão sem colapso.</p>
              <p className="text-primary font-semibold text-sm mt-3">Foco: instalar o novo padrão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que recebe - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-3">Incluso</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">O que você recebe todos os dias</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Uma prática guiada de 20 minutos",
              "Comandos de reprogramação mental",
              "Ativações energéticas e vibracionais",
              "Direcionamentos para integração no dia",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-navy-foreground/5 rounded-xl p-5 border border-navy-foreground/10">
                <Star className="w-4 h-4 fill-golden text-golden mt-1 shrink-0" />
                <span className="text-navy-foreground/90 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-lg font-bold text-golden mb-3">Bônus:</h3>
            <p className="text-navy-foreground/80 leading-relaxed">Mapa HDR - guia para ancorar e sustentar a nova identidade. Reprogramações Mentais - áudios diários para consolidar o campo após o protocolo.</p>
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
              "Já percebeu que esforço não é mais o caminho - mas ainda não consegue sustentar expansão com leveza",
              "Sente que sempre volta para o mesmo padrão mesmo depois de evoluir",
              "Quer mais do que motivação - quer reorganização real",
              "Está pronta para entrar num processo estruturado de transformação",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-golden-light/60 rounded-xl p-5 border border-golden/20">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-3">Depoimentos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">O que dizem as participantes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[dep1, dep2, dep4].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-navy-foreground/10">
                <img src={img} alt={`Depoimento Ascensão Feminina ${i + 1}`} className="w-full h-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - golden */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Pronta para a sua reorganização completa?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            14 dias. 5 campos. Uma nova identidade vibracional.
          </p>
          <div className="mt-8">
            <a href="https://pay.kiwify.com.br/LPKJmjU" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="xl" className="max-w-full whitespace-normal text-center">
                Quero entrar na Ascensão Feminina <ArrowRight className="w-5 h-5 shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
