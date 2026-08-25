import { createFileRoute } from "@tanstack/react-router";
import {
  HeartHandshake,
  Ear,
  UserRoundCheck,
  ShieldCheck,
  Leaf,
  Stethoscope,
  ClipboardList,
  CalendarCheck,
  ArrowUpRight,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { whatsappLink, TELEFONE, ENDERECO, HORARIO } from "@/lib/contato";
import retrato from "@/assets/dra-maria-beatriz.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dra. Maria Beatriz | Médica Clínica Geral" },
      {
        name: "description",
        content:
          "Dra. Maria Beatriz, médica clínica geral. Consultas com avaliação individualizada, escuta atenta e acompanhamento da sua saúde. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Dra. Maria Beatriz | Médica Clínica Geral" },
      {
        property: "og:description",
        content:
          "Cuidado médico completo, humano e personalizado. Agende sua consulta com a Dra. Maria Beatriz, médica clínica geral.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dra. Maria Beatriz",
          medicalSpecialty: "General Practice",
          description:
            "Médica clínica geral com atendimento humanizado e avaliação individualizada.",
        }),
      },
    ],
  }),
});

const diferenciais = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Cada consulta acontece em um ambiente de respeito, acolhimento e tranquilidade.",
  },
  {
    icon: Ear,
    title: "Escuta atenta",
    text: "Tempo dedicado para entender sua história, seus sintomas e suas preocupações.",
  },
  {
    icon: UserRoundCheck,
    title: "Cuidado individualizado",
    text: "Orientações pensadas para a sua rotina, seu histórico e o seu momento de vida.",
  },
  {
    icon: ShieldCheck,
    title: "Profissionalismo",
    text: "Conduta médica clara, ética e transparente em todas as etapas do cuidado.",
  },
  {
    icon: Leaf,
    title: "Saúde e bem-estar",
    text: "Foco na prevenção e em hábitos que sustentam a sua saúde a longo prazo.",
  },
];

const atendimento = [
  {
    icon: Stethoscope,
    title: "Avaliação geral da saúde",
    text: "Uma visão ampla do seu estado de saúde, considerando histórico, sintomas e exames.",
  },
  {
    icon: ClipboardList,
    title: "Consulta individualizada",
    text: "Conversa cuidadosa e exame clínico para compreender o que você está sentindo.",
  },
  {
    icon: Leaf,
    title: "Orientação e prevenção",
    text: "Recomendações práticas para prevenir problemas e cuidar da saúde no dia a dia.",
  },
  {
    icon: CalendarCheck,
    title: "Acompanhamento contínuo",
    text: "Seguimento ao longo do tempo, ajustando o cuidado conforme a sua evolução.",
  },
  {
    icon: ArrowUpRight,
    title: "Encaminhamento quando necessário",
    text: "Identificação de necessidades específicas e direcionamento a especialistas.",
  },
];

function Index() {
  const wa = whatsappLink();

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="surface-mist">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Dra. Maria Beatriz — Médica Clínica Geral</p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-brand-deep sm:text-5xl lg:text-[3.4rem]">
              Cuidado médico completo, humano e personalizado.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dra. Maria Beatriz — Médica Clínica Geral, dedicada a cuidar da sua saúde
              com atenção, acolhimento e profissionalismo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full px-7">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  Agendar consulta pelo WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full">
                <a href="#sobre">Conhecer a médica</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-soft/40 blur-2xl" />
            <img
              src={retrato}
              alt="Dra. Maria Beatriz, médica clínica geral, de jaleco branco"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Sobre</p>
            <h2 className="mt-4 text-3xl text-brand-deep sm:text-4xl">
              Uma médica para cuidar de você por inteiro
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A Dra. Maria Beatriz é médica clínica geral e acredita que o bom cuidado
              começa por ouvir. Cada consulta é conduzida com calma, para que você tenha
              espaço para contar o que sente e ser compreendido sem pressa.
            </p>
            <p>
              O atendimento é sempre individualizado: a avaliação considera o seu
              histórico, seus hábitos e o seu momento de vida, resultando em orientações
              claras e possíveis de seguir no dia a dia.
            </p>
            <p>
              O foco está tanto no tratamento quanto na prevenção e no acompanhamento
              contínuo da saúde — com profissionalismo, transparência e uma relação de
              confiança construída consulta após consulta.
            </p>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section id="atendimento" className="surface-mist border-y border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Atendimento</p>
            <h2 className="mt-4 text-3xl text-brand-deep sm:text-4xl">
              Como funciona a consulta em clínica geral
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A clínica geral é a porta de entrada do cuidado com a saúde: um olhar amplo
              que acompanha, orienta e direciona quando necessário.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {atendimento.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-brand">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg text-brand-deep">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Diferenciais</p>
          <h2 className="mt-4 text-3xl text-brand-deep sm:text-4xl">
            O que guia o cuidado da Dra. Maria Beatriz
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-soft hover:shadow-card"
            >
              <span className="gradient-brand flex h-11 w-11 items-center justify-center rounded-2xl text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg text-brand-deep">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="gradient-brand mx-auto max-w-6xl rounded-[2.5rem] px-7 py-16 text-center shadow-soft md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
            Cuide da sua saúde com quem entende de cuidado.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            Agende sua consulta com a Dra. Maria Beatriz e receba um atendimento atento,
            do início ao fim.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-9 rounded-full px-8">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              Agendar consulta
            </a>
          </Button>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="surface-mist border-t border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Contato</p>
            <h2 className="mt-4 text-3xl text-brand-deep sm:text-4xl">
              Fale com a Dra. Maria Beatriz
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-3xl border border-border bg-card p-7 transition-colors hover:border-brand-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-lg text-brand-deep">WhatsApp</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  Agendamento de consultas pelo WhatsApp
                </span>
              </span>
            </a>

            {TELEFONE && (
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-lg text-brand-deep">Telefone</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {TELEFONE}
                  </span>
                </span>
              </div>
            )}

            {ENDERECO && (
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-lg text-brand-deep">Endereço</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {ENDERECO}
                  </span>
                </span>
              </div>
            )}

            {HORARIO && (
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand">
                  <Clock className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-lg text-brand-deep">
                    Horário de atendimento
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {HORARIO}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
          <div>
            <p className="font-display text-xl text-brand-deep">Dra. Maria Beatriz</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Médica Clínica Geral
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <p className="eyebrow mb-1">Links rápidos</p>
            <a href="#sobre" className="transition-colors hover:text-brand">
              Sobre
            </a>
            <a href="#atendimento" className="transition-colors hover:text-brand">
              Atendimento
            </a>
            <a href="#diferenciais" className="transition-colors hover:text-brand">
              Diferenciais
            </a>
            <a href="#contato" className="transition-colors hover:text-brand">
              Contato
            </a>
          </nav>

          <div>
            <p className="eyebrow mb-3">Agendamento</p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand transition-colors hover:text-brand-deep"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-border py-6">
          <p className="px-5 text-center text-xs text-muted-foreground md:px-8">
            © {new Date().getFullYear()} Dra. Maria Beatriz — Médica Clínica Geral. Todos
            os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
