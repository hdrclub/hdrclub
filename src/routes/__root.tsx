import "../styles.css";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HDR Club - Método HDR por Kamila Rodrigues" },
      { name: "description", content: "Através do Método HDR, reconstruímos a identidade interna de empresárias que já prosperam para que a expansão deixe de ser sustentada por esforço." },
      { name: "author", content: "Kamila Rodrigues" },
      { property: "og:title", content: "HDR Club - Método HDR por Kamila Rodrigues" },
      { property: "og:description", content: "Através do Método HDR, reconstruímos a identidade interna de empresárias que já prosperam para que a expansão deixe de ser sustentada por esforço." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "keywords", content: "método HDR, terapia vibracional, reprogramação energética, empresárias, identidade interna, expansão feminina" },
      { name: "twitter:title", content: "HDR Club - Método HDR por Kamila Rodrigues" },
      { name: "twitter:description", content: "Através do Método HDR, reconstruímos a identidade interna de empresárias que já prosperam para que a expansão deixe de ser sustentada por esforço." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
