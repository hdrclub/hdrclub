import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=351936840009&text=Olá! Gostaria de saber mais sobre as terapias."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[oklch(0.55_0.17_145)] text-[oklch(0.98_0.01_145)] rounded-full px-5 py-3 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-semibold text-sm">WhatsApp</span>
    </a>
  );
}
