import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import kamilaImg from "@/assets/kamila-sobre.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre - Kamila Rodrigues · HDR Club" },
      { name: "description", content: "Kamila Rodrigues, Terapeuta Vibracional Sistêmica e criadora do Método HDR. Quase 200 mulheres já passaram pelo processo." },
      { property: "og:title", content: "Sobre - Kamila Rodrigues · HDR Club" },
      { property: "og:description", content: "Terapeuta Vibracional Sistêmica e criadora do Método HDR." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      {/* Sobre Kamila - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src={kamilaImg}
                alt="Kamila Rodrigues - Terapeuta Vibracional Sistêmica"
                loading="lazy"
                width={800}
                height={800}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-golden text-xs font-semibold tracking-widest uppercase mb-3">
                Sobre Mim
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Kamila Rodrigues
              </h1>
              <p className="text-golden text-sm font-semibold tracking-wide mt-2">
                Terapeuta Vibracional Sistêmica · Criadora do Método HDR
              </p>
              <div className="mt-6 space-y-4 text-navy-foreground/80 leading-relaxed">
                <p>
                  Passei anos entendendo por que mulheres que já têm tudo - o negócio, o faturamento, a equipe - ainda vivem com a sensação de que não é suficiente.
                </p>
                <p>
                  A resposta não estava na estratégia… <strong className="text-navy-foreground">Estava na estrutura.</strong>
                </p>
                <p>
                  Desenvolvi o Método HDR a partir da integração de Radiestesia, Mesa Radiônica, Cura Multidimensional, Reprogramação Mental e Neurociência Aplicada para trabalhar não apenas o que você pensa ou sente, mas os cinco campos que sustentam quem você é: ancestral, emocional, mental, físico e energético.
                </p>
                <p>
                  <strong className="text-golden">Quase 200 mulheres</strong> já passaram pelo Método HDR. O que muda não é apenas como elas se sentem. É como elas lideram, decidem e sustentam o nível que vivem.
                </p>
                <p className="font-heading text-xl italic text-golden mt-6">
                  "O meu trabalho não é te motivar. É reorganizar a base de como você vive hoje."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No que eu acredito - golden beige */}
      <section className="py-20 md:py-28 bg-golden-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-3">Valores</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">No que eu acredito</h2>
          </div>
          <div className="space-y-6 text-foreground text-lg leading-relaxed">
            <p>Acredito que o seu crescimento já está disponível. O que ainda não está disponível é a estrutura interna que sustenta esse crescimento com um corpo que ainda reage a um passado que já acabou.</p>
            <p>Acredito que esforço não é virtude. É o sinal de que existe uma estrutura antiga tentando operar uma realidade nova.</p>
            <p>Acredito que não existe mudança de identidade só mudando a mente e pensando positivo.</p>
            <p>Acredito que transformação sem integração é anestesia. A mudança real acontece quando o novo padrão deixa de ser uma conquista isolada e vira uma nova forma de viver dentro da própria rotina.</p>
            <p>Acredito que você não precisa provar mais nada. Você precisa ocupar, com presença e coerência, o lugar que já é seu no mundo.</p>
            <p className="font-semibold text-primary">Acredito que o invisível cria o visível. Sempre.</p>
          </div>
        </div>
      </section>

      {/* CTA - navy */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            O próximo nível não exige mais esforço. Exige outro nível de estrutura interna.
          </h2>
          <div className="mt-6 space-y-4 text-navy-foreground/80 text-lg leading-relaxed">
            <p>Se você chegou até aqui, já sabe que o problema não é estratégia.</p>
            <p>O primeiro passo é entender onde você está - e o que ainda está operando na sua estrutura.</p>
            <p>Isso começa com uma decisão.</p>
          </div>
          <div className="mt-8">
            <a
              href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Quero dar o primeiro passo."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="golden" size="xl" className="max-w-full whitespace-normal text-center">
                Quero dar o primeiro passo <ArrowRight className="w-5 h-5 shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
