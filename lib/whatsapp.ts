type QuotePayload = {
  adSoyad?: string;
  telefon?: string;
  hizmet?: string;
  ilce?: string;
  detay?: string;
  kaynak: string;
};

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "905079888206";

export function buildWhatsAppUrl(p: QuotePayload): string {
  const lines: string[] = [];

  const name = p.adSoyad && p.adSoyad.trim() ? p.adSoyad.trim() : "";
  const service = p.hizmet && p.hizmet.trim() ? p.hizmet.trim() : "";

  // 1) Primary natural intro sentence
  if (name && service) {
    lines.push(`Merhaba, Ben ${name}. ${service} hizmetiniz için teklif almak istiyorum.`);
  } else if (name) {
    lines.push(`Merhaba, Ben ${name}. Web siteniz üzerinden teklif almak için ulaşıyorum.`);
  } else if (service) {
    lines.push(`Merhaba, ${service} hizmetiniz için teklif almak istiyorum.`);
  } else {
    lines.push("Merhaba, web siteniz üzerinden teklif almak için ulaşıyorum.");
  }

  // 2) User's direct message / address details starting directly on a new paragraph
  if (p.detay && p.detay.trim()) {
    lines.push(p.detay.trim());
  }

  // 3) Optional District/Location if present & specific
  if (p.ilce && p.ilce.trim() && p.ilce !== "Ankara") {
    lines.push(`Konum: ${p.ilce.trim()}`);
  }

  // 4) Optional Phone if specified
  if (p.telefon && p.telefon.trim() && p.telefon !== "Belirtilmedi") {
    lines.push(`Telefon: ${p.telefon.trim()}`);
  }

  const msg = lines.join("\n\n");
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}
