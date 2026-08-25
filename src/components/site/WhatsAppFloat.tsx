import { whatsappLink } from "@/lib/contato";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="gradient-brand fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-soft transition-all duration-300 hover:scale-110 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-brand-soft/60 [animation-duration:2.6s]" />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="relative h-7 w-7 md:h-8 md:w-8"
      >
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.47.13-.62.15-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.34 5.08 4.56.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
        <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.74.45 3.44 1.32 4.94L2 22l5.34-1.4c1.44.79 3.07 1.2 4.7 1.2h.01c5.44 0 9.87-4.43 9.87-9.87S17.49 2 12.04 2zm0 17.96h-.01c-1.45 0-2.87-.39-4.11-1.13l-.29-.17-3.06.8.82-2.99-.19-.31a8.14 8.14 0 01-1.25-4.34c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 012.4 5.8c0 4.52-3.68 8.2-8.2 8.2z" />
      </svg>
    </a>
  );
}
