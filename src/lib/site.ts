/**
 * Configuração central do site.
 * Troque o número do WhatsApp e os dados de contato aqui — eles se propagam
 * para o header, o botão flutuante, o CTA final e o footer.
 */

export const site = {
  name: "SMARTER",
  brand: "SMARTER by i5 stay",
  tagline: "Inteligência para viver. Conforto para ficar.",
  description:
    "SMARTER by i5 stay — apartamentos inteligentes em Águas Claras. Plantas inteligentes, serviços hoteleiros à sua disposição e alta rentabilidade. QS 5, Rua 310, Lote 12.",
  url: "https://smart.i5incorp.com.br",

  // ⚠️ Substituir pelo número real (formato internacional, só dígitos)
  whatsapp: "5561999999999",
  whatsappMessage:
    "Olá! Vim pelo site do SMARTER by i5 stay e quero saber mais sobre o empreendimento em Águas Claras.",

  phone: "3333-33333",
  email: "atendimento@i5imob.com.br",
  addressProject: "QS 5, Rua 310, Lote 12 — Águas Claras/DF",
  addressSales:
    "Rua Macaúba, 15 — Águas Claras/DF (ref.: próx. Batalhão PM e Caesb)",

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const waHref = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "O projeto", href: "#projeto" },
  { label: "Planta", href: "#planta" },
  { label: "Lazer", href: "#lazer" },
  { label: "Serviços", href: "#servicos" },
  { label: "Investir", href: "#investir" },
  { label: "Grupo i5", href: "#grupo" },
  { label: "Localização", href: "#localizacao" },
] as const;
