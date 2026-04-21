import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hdrclub-banner.png";
import heroImgMobile from "@/assets/hdrclub-banner-mobile.png";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero - mobile: stacked with full image; desktop: image with overlay */}
      <section className="relative bg-navy">
        {/* Mobile: stacked layout — image flush with header + short headline overlay, full text below */}
        <div className="md:hidden">
          <div className="relative">
            <img
              src={heroImgMobile}
              alt="HDR Club"
              width={1170}
              height={1440}
              className="w-full h-auto block"
            />
            {/* Gradient overlay for headline contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy/20" />
            <div className="absolute inset-0 px-4 sm:px-6 py-6 flex flex-col justify-between">
              <h1 className="font-heading text-4xl sm:text-4xl font-bold text-navy-foreground leading-tight animate-fade-in-up">
                Seu negócio já funciona. <br />
                <em className="text-golden italic">Por que crescer <br /> ainda custa <br /> tanto?</em>
              </h1>
              <p className="text-lg sm:text-xl text-navy-foreground/95 leading-relaxed animate-fade-in-up animation-delay-200 drop-shadow-md">
                Através do Método HDR, reconstruo a identidade interna de empresárias que já prosperam para que a expansão deixe de ser sustentada por esforço e passe a ser sustentada por quem você é.
              </p>
            </div>
          </div>
          <div className="px-4 sm:px-6 py-8 bg-navy">
            <div className="animate-fade-in-up animation-delay-400">
              <a
                href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Quero conhecer o Método HDR."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="golden" size="xl" className="w-full max-w-full whitespace-normal text-center text-base">
                  Quero conhecer o Método HDR <ArrowRight className="w-5 h-5 shrink-0" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop: full-width image with overlay text */}
        <div className="hidden md:block relative -mt-20 bg-golden-light">
          <img src={heroImg} alt="HDR Club" width={1920} height={1080} className="w-full h-auto block" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/40 to-transparent" />
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
              <div className="max-w-2xl">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight animate-fade-in-up">
                  Você já construiu um negócio que funciona.{" "}
                  <em className="text-golden italic">Por que ainda está pagando um preço alto pra crescer?</em>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-navy-foreground/90 leading-relaxed animate-fade-in-up animation-delay-200">
                  Através do Método HDR, reconstruo a identidade interna de empresárias que já prosperam para que a expansão deixe de ser sustentada por esforço e passe a ser sustentada por quem você é.
                </p>
                <div className="mt-8 animate-fade-in-up animation-delay-400">
                  <a
                    href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Quero conhecer o Método HDR."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="golden" size="xl" className="max-w-full whitespace-normal text-center">
                      Quero conhecer o Método HDR <ArrowRight className="w-5 h-5 shrink-0" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai viver - golden beige */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-primary font-semibold tracking-widest mb-3 text-4xl font-heading italic normal-case">O que você vai viver</span>
          </Reveal>
          <div className="space-y-5 text-foreground text-lg leading-relaxed">
            {[
              { t: "Existe um momento na jornada da empresária que não tem a ver com aprender mais." },
              { t: "Você já tem resultado, já fez o que precisava ser feito e continua crescendo." },
              { t: "Mas, mesmo assim, sente que algo não acompanha." },
              { t: "As decisões exigem mais do que deveriam, o dia a dia fica mais pesado e crescer continua custando caro." },
              { t: "Isso não está na estratégia.", bold: true },
              { t: "É a sua estrutura interna ainda funcionando em um padrão que já não corresponde ao nível que você vive hoje." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={p.bold ? "font-semibold" : undefined}>{p.t}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <Reveal>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Depois de passar pelo Método HDR, você:
              </h2>
            </Reveal>
            <div className="space-y-4">
              {[
                "Toma decisões com clareza e firmeza - sem o peso que as acompanhava antes",
                "Lidera com presença, sem precisar controlar cada detalhe para se sentir segura",
                "Delega sem ansiedade e recebe sem culpa",
                "Cresce e o crescimento permanece, sem pedir colapso em troca",
                "Reconhece a mulher que aparece no espelho como a mesma que conduz o negócio",
                "Para de sustentar o sucesso com tensão e começa a sustentá-lo com identidade",
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex items-start gap-4 bg-golden-light/60 rounded-xl p-5 border border-golden/20">
                    <Star className="w-4 h-4 fill-golden text-golden mt-1 shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protocolos - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-6">
            <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-3">Conheça os protocolos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">Conheça os Protocolos</h2>
          </Reveal>
          <Reveal delay={120} className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-navy-foreground/70 text-lg leading-relaxed">
              O Universo HDR foi construído para conduzir você por uma jornada progressiva - da consciência até a sustentação real do nível que você já vive.
            </p>
            <p className="text-navy-foreground/70 text-lg mt-2">Cada protocolo tem um lugar preciso nessa jornada.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ascenda",
                tag: "Entrada",
                line: "O primeiro passo. 7 dias para reconhecer o que está operando em você.",
                desc: "Protocolo de 7 áudios em sequência terapêutica estratégica que atua nos padrões invisíveis que mantêm você em oscilação.",
                to: "/protocolos/ascenda" as const,
                cta: "Quero Começar",
              },
              {
                title: "Ascensão Feminina",
                tag: "Imersão",
                line: "14 dias de imersão. Limpeza, desprogramação e ativação da sua nova identidade.",
                desc: "Imersão de 14 dias com práticas diárias de 20 minutos que atuam nos 5 campos da sua estrutura interna.",
                to: "/protocolos/ascensao-feminina" as const,
                cta: "Quero Imergir",
              },
              {
                title: "HDR28",
                tag: "Premium",
                line: "8 semanas. Trabalho individual. Reorganização profunda.",
                desc: "O processo premium individual do Método HDR - 8 semanas de reorganização estrutural da sua identidade emocional, mental e energética.",
                to: "/protocolos/hdr28" as const,
                cta: "Quero Mais",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-2xl p-8 flex flex-col h-full hover:bg-navy-foreground/10 transition-colors">
                  <span className="text-golden text-xs font-semibold tracking-widest uppercase mb-3">{item.tag}</span>
                  <h3 className="font-heading text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-golden/80 text-sm italic mb-4">{item.line}</p>
                  <p className="text-navy-foreground/70 leading-relaxed mb-6 flex-1">{item.desc}</p>
                  <Link to={item.to}>
                    <Button variant="golden" size="lg" className="w-full max-w-full whitespace-normal">
                      {item.cta} <ArrowRight className="w-4 h-4 shrink-0" />
                    </Button>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos - golden beige */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-6">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-3">Histórias de Transformação</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">Histórias de Transformação</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
              O que muda com o Método HDR não é como você se sente. É como você opera.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Débora", niche: "Ascensão Feminina", text: "Antes eu sentia que precisava me preparar demais pra cobrar mais caro. Depois do protocolo da Ascensão, os valores altos começaram a se tornar naturais e as clientes simplesmente chegam e aceitam pagar sem questionar.", before: "Insegurança para sustentar valores mais altos", after: "Naturalidade e confiança ao receber mais" },
              { name: "Bruna", niche: "Protocolo individual HDR28", text: "Antes eu carregava tensão, bloqueios e um peso emocional constante. Depois do protocolo HDR28, me sinto leve, renovada e feliz comigo mesma — como se tivesse voltado a viver com brilho.", before: "Sobrecarga emocional e bloqueios", after: "Leveza, confiança e reconexão com a vida" },
              { name: "Joana", niche: "Ascensão Feminina", text: "Antes eu estava esgotada, sem energia e desconectada da minha criatividade. Depois da Ascensão Feminina, recuperei minha força, voltei a criar com prazer e os resultados financeiros começaram a aparecer.", before: "Cansaço, esforço excessivo e desconexão", after: "Energia, clareza e expansão com resultados" },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-card rounded-2xl p-8 border border-border h-full">
                  <div className="flex gap-1 mb-4">
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
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/depoimentos">
              <Button variant="outline" size="lg">Ver mais histórias</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final - navy */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-heading italic text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground leading-tight">
              Você já provou que consegue crescer. A questão agora é: até onde você se autoriza a chegar?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-6 space-y-4 text-navy-foreground/80 text-lg leading-relaxed">
              <p>O crescimento que você busca não está numa nova estratégia. Está na estrutura interna que ainda não acompanha o nível que você já vive.</p>
              <p>Quando você reorganiza essa estrutura, a expansão deixa de custar o que ainda está custando.</p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 text-base">
              <a
                href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Quero entender qual é o meu próximo passo."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="golden" size="xl" className="max-w-full whitespace-normal text-center">
                  Quero entender qual é o meu próximo passo <ArrowRight className="w-5 h-5 shrink-0" />
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
