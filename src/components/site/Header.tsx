import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { whatsappLink } from "@/lib/contato";
import logo from "@/assets/logo-mb.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Monograma MB da Dra. Maria Beatriz"
            width={816}
            height={816}
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight text-brand-deep md:text-lg">
              Dra. Maria Beatriz
            </span>
            <span className="block truncate text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Médica Clínica Geral
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Button asChild size="sm" className="hidden rounded-full px-5 sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Agendar consulta
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menu"
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="mt-8 flex flex-col gap-1">
                <p className="eyebrow mb-4">Navegação</p>
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-secondary hover:text-brand-deep"
                  >
                    {l.label}
                  </a>
                ))}
                <Button asChild className="mt-6 rounded-full">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    Agendar consulta
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
