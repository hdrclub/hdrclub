import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import logoImg from "@/assets/hdrclub-logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <img src={logoImg} alt="HDR Club" className="h-16 w-auto mb-4" />
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              Método HDR por Kamila Rodrigues - Terapeuta Vibracional Sistêmica. Reorganizando a estrutura interna de empresárias para que a expansão deixe de custar caro.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Início</Link>
              <Link to="/sobre" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Sobre</Link>
              <Link to="/protocolos/ascenda" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Ascenda</Link>
              <Link to="/protocolos/ascensao-feminina" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Ascensão Feminina</Link>
              <Link to="/protocolos/hdr28" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">HDR28</Link>
              <Link to="/contato" className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">Contato</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=351936840009"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/kaamirodrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                @kaamirodrigues
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-foreground/10">
          <p className="text-center text-navy-foreground/60 font-heading italic leading-relaxed max-w-2xl mx-auto text-lg">
            "Você não cresce além da sua permissão. Não sustenta além da sua autoestima. E não se torna além da sua autoimagem."
          </p>
          <p className="text-center text-sm text-navy-foreground/40 mt-3">
            - Kamila Rodrigues · Universo HDR
          </p>
        </div>
      </div>
    </footer>
  );
}
