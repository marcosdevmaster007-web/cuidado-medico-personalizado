/**
 * Contact configuration.
 * Fill in the WhatsApp number (international format, digits only, e.g. "5511999999999")
 * as soon as it is provided. While empty, WhatsApp links point to wa.me without a number.
 */
export const WHATSAPP_NUMERO = "";

export const WHATSAPP_MENSAGEM =
  "Olá, Dra. Maria Beatriz! Gostaria de agendar uma consulta.";

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;

/** Optional info — only rendered when filled in. */
export const TELEFONE = "";
export const ENDERECO = "";
export const HORARIO = "";
