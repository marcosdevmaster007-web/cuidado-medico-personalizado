import { useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
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

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    // Wait for the drawer close animation + scroll-lock release before scrolling.
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  };

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

            <SheetContent
              side="right"
              className="flex w-[86vw] max-w-[340px] flex-col gap-0 bg-background p-0"
            >
              <SheetHeader className="border-b border-border px-6 py-5 text-left">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt=""
                    aria-hidden="true"
                    width={816}
                    height={816}
                    className="h-9 w-9 shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <SheetTitle className="truncate font-display text-base font-medium text-brand-deep">
                      Dra. Maria Beatriz
                    </SheetTitle>
                    <SheetDescription className="truncate text-[0.68rem] uppercase tracking-[0.18em]">
                      Médica Clínica Geral
                    </SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => goTo(e, l.href)}
                    className="rounded-xl px-3 py-3.5 text-base text-foreground transition-colors hover:bg-secondary hover:text-brand-deep"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="border-t border-border p-4">
                <Button asChild className="w-full rounded-full">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4" />
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
