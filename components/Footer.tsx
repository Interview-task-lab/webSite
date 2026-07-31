import Link from "next/link";
import { Phone, MapPin, Mail, ChevronRight, MessageCircle, FileText } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0 (507) 988 82 06";
  const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+905079888206";

  const googleMapsUrl = "https://maps.google.com/?q=Önder+Mahallesi+Çamlıtepe+Caddesi+64/1+Altındağ+Ankara";

  const footerWhatsAppUrl = buildWhatsAppUrl();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Quote CTA Column */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wider">
              Hızlı Teklif & Keşif
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Projenizin ölçü ve detaylarını iletin, Ankara genelinde ücretsiz keşif ve hızlı fiyat teklifimizi sunalım.
            </p>

            <ul className="space-y-2.5 text-sm pt-1">
              <li>
                <a
                  href={footerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp'tan Teklif Al &rarr;</span>
                </a>
              </li>
              <li>
                <Link
                  href="/iletisim#teklif-formu"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center transition-colors group"
                >
                  <FileText className="w-4 h-4 mr-2 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span>Ücretsiz Keşif Formu &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmet Kategorilerimiz */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wider">
              Hizmet Kategorilerimiz
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hizmetler#celik-yapi" className="hover:text-amber-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 mr-1" />
                  Çelik Yapı & Asma Kat
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#kapi-sistemleri" className="hover:text-amber-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 mr-1" />
                  Kapı & Otomasyon
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#korkuluk-guvenlik" className="hover:text-amber-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 mr-1" />
                  Korkuluk & Güvenlik
                </Link>
              </li>
              <li>
                <Link href="/hizmetler#ozel-metal-imalat" className="hover:text-amber-400 transition-colors flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 mr-1" />
                  Özel Metal İmalatı
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/hizmetler" className="text-teal-400 font-semibold hover:underline">
                  Tüm 15 Hizmet Listesi &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wider">
              Kurumsal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="hover:text-white transition-colors">
                  Referanslarımız
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim & Ücretsiz Keşif
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Maps */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wider">
              İletişim & Konum
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-amber-400 hover:text-amber-300 transition-colors group"
                  title="Haritalarda Aç"
                >
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold underline underline-offset-4 leading-relaxed">
                    Önder Mah. Çamlıtepe Cad. No: 64/1
                    <br />
                    Altındağ / ANKARA
                  </span>
                </a>
              </li>
              <li className="flex items-center space-x-3 pt-1">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href={`tel:${phoneTel}`} className="hover:text-white transition-colors font-medium">
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:basbugametal@gmail.com" className="hover:text-white transition-colors font-medium">
                  basbugametal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p suppressHydrationWarning>© {currentYear} Başbuğa Metal. Tüm hakları saklıdır.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Ankara Geneli Ücretsiz Keşif & 7/24 Destek</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
