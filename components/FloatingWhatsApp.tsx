"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const url = buildWhatsAppUrl({
    kaynak: "Floating CTA",
    hizmet: "Genel Bilgi",
    detay: "Fiyatlar ve ücretsiz keşif hakkında bilgi almak istiyorum."
  });

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="WhatsApp Destek Hattı"
    >
      {/* Ripple Animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:animate-none"></span>
      <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
    </a>
  );
}
