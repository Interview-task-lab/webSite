"use client";

import { MessageCircle, FileText, PhoneCall, Sparkles } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function QuickContactCard({ className = "" }: { className?: string }) {
  const whatsappUrl = buildWhatsAppUrl();

  const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+905079888206";

  return (
    <div className={`relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between h-full ${className}`}>
      {/* Subtle Glow Accents */}
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
            Ankara Geneli Ücretsiz Keşif & Danışmanlık
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
          Projeniz İçin Hızlı Fiyat Almak İster Misiniz?
        </h2>

        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Tüm Ankara'ya ücretsiz keşif ekibi gönderiyoruz (Pzt - Cmt: 08:30 - 19:30). Arayın veya WhatsApp'tan görsel iletin, projenize özel hızlı teklif fırsatından yararlanın.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-950/30 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp ile Fiyat Al</span>
          </a>

          {/* Direct Call Button */}
          <a
            href={`tel:${phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800/90 hover:bg-slate-700 text-amber-400 border border-slate-700/80 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Bizi Ara</span>
          </a>

          {/* Form Button */}
          <a
            href="/iletisim-2"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4 text-teal-400" />
            <span>Teklif Formu</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function QuickContact() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <QuickContactCard />
      </div>
    </section>
  );
}
