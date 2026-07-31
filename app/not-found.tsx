import Link from "next/link";
import { Home, ArrowRight, Phone, Wrench, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0 (552) 504 26 57";
  const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+905525042657";
  const waUrl = buildWhatsAppUrl();

  const popularServices = [
    { name: "Asma Kat Yapımı", href: "/asma-kat" },
    { name: "Sürgülü Kapı Yapımı", href: "/surgulu-kapi-yapimi" },
    { name: "Bahçe Korkuluk Yapımı", href: "/bahce-korkuluk-yapimi" },
    { name: "Çelik Merdiven Yapımı", href: "/merdiven-yapimi" },
  ];

  return (
    <div className="bg-slate-950 min-h-[60vh] flex items-center justify-center text-slate-100 px-4">
      <div className="max-w-xl w-full text-center space-y-8 py-20">
        {/* 404 Badge */}
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full">
          <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
            Sayfa Bulunamadı
          </span>
        </div>

        {/* Big 404 */}
        <h1 className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
          404
        </h1>

        <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto">
          Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir.
          Aşağıdaki bağlantılardan devam edebilirsiniz.
        </p>

        {/* Quick Navigation */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 px-8 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-amber-950/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>

        {/* Popular Services */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-left space-y-4">
          <div className="flex items-center space-x-2 text-sm font-bold text-white">
            <Wrench className="w-4 h-4 text-amber-500" />
            <span>Popüler Hizmetlerimiz</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {popularServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center justify-between text-sm text-slate-300 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-all"
              >
                <span>{service.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${phoneTel}`}
            className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-500" />
            <span>{phoneDisplay}</span>
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center space-x-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp İletişim</span>
          </a>
        </div>
      </div>
    </div>
  );
}
