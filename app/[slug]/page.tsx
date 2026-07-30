import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import QuickContact from "@/components/QuickContact";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Check, Phone, MessageSquare, MapPin } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // 1. Try finding a Service
  const service = await db.service.findUnique({
    where: { slug },
  });
  if (service) {
    return {
      title: `${service.name} - Demir Doğrama`,
      description: service.description,
    };
  }

  // 2. Try finding a District Page
  const district = await db.districtPage.findUnique({
    where: { slug },
  });
  if (district) {
    return {
      title: `${district.name} Demir Doğrama - Başbuğa Metal`,
      description: `${district.name} bölgesinde demir doğrama ve ferforje hizmetleri.`,
    };
  }

  return { title: "Sayfa Bulunamadı" };
}

export default async function CatchAllSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0 (552) 504 26 57";
  const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+905525042657";

  // Check 1: Is it a Service?
  const service = await db.service.findUnique({
    where: { slug },
  });

  if (service) {
    const features: string[] = JSON.parse(service.featuresJson || "[]");
    
    // Build context-specific WhatsApp link
    const waUrl = buildWhatsAppUrl({
      kaynak: `Hizmet Detay: ${service.name}`,
      hizmet: service.name,
      detay: service.waMessage,
    });

    // Special multiple WhatsApp CTA buttons for Ferforje Korkuluk
    const isKorkuluk = slug === "ferfoje-korkuluk";
    const korkulukCtas = [
      {
        label: "Balkon icin WhatsApp'tan teklif iste →",
        msg: "Balkon demir korkuluk modelleri ve metretül fiyatı hakkında bilgi almak istiyorum."
      },
      {
        label: "Pencere icin WhatsApp'tan teklif iste →",
        msg: "Pencere korkuluğu güvenlik sistemleri hakkında bilgi ve fiyat almak istiyorum."
      },
      {
        label: "Merdiven icin WhatsApp'tan teklif iste →",
        msg: "Merdiven ferforje korkuluk uygulaması hakkında teklif almak istiyorum."
      }
    ].map(cta => ({
      label: cta.label,
      url: buildWhatsAppUrl({
        kaynak: "Korkuluk Alana Ozel CTA",
        hizmet: "Korkuluk",
        detay: cta.msg
      })
    }));

    return (
      <div className="bg-slate-950 min-h-screen text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Area */}
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {service.name}
              </h1>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-[16/9] w-full bg-slate-900">
                <img
                  src={service.imageUrl || "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"}
                  alt={`${service.name} profesyonel uygulama hizmeti`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-base">
                <p>{service.description}</p>
              </div>

              {/* Checklist */}
              <div className="bg-slate-900/40 border border-slate-900 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4">Uygulama Özelliklerimiz</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-sm text-slate-300">
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>✓ {feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-900">
                {!isKorkuluk && (
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba56] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
                  >
                    <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                    <span>WhatsApp'tan Teklif Al</span>
                  </a>
                )}
                <a
                  href={`tel:${phoneTel}`}
                  className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
                >
                  <Phone className="w-5 h-5 text-teal-500" />
                  <span>Hemen Ara: {phoneDisplay}</span>
                </a>
              </div>

              {/* Special korkuluk CTA buttons */}
              {isKorkuluk && (
                <div className="mt-8 pt-8 border-t border-slate-900 space-y-4">
                  <h3 className="text-xl font-extrabold text-white">Alana Özel WhatsApp Teklif Hatlarımız</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {korkulukCtas.map((cta, idx) => (
                      <a
                        key={idx}
                        href={cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 px-6 py-4 rounded-xl font-semibold text-slate-200 transition-all"
                      >
                        <span>{cta.label}</span>
                        <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
        <QuickContact />
      </div>
    );
  }

  // Check 2: Is it a District Page?
  const district = await db.districtPage.findUnique({
    where: { slug },
  });

  if (district) {
    const waUrl = buildWhatsAppUrl({
      kaynak: `Bölgesel Sayfa: ${district.name}`,
      hizmet: "Demir Doğrama",
      ilce: district.name,
      detay: `${district.name} bölgesinde demir doğrama ve ferforje işleri için keşif talep ediyorum.`,
    });

    return (
      <div className="bg-slate-950 min-h-screen text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Area */}
            <div className="lg:col-span-2 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-teal-600/10 border border-teal-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">
                  Bölgesel Hizmetler • {district.name}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {district.name} Demir Doğrama ve Ferforje Çözümleri
              </h1>

              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-lg">
                <p>{district.content}</p>
                <p className="mt-4 text-base text-slate-400">
                  Başbuğa Metal olarak, {district.name} ilçesi ve çevre mahallelerinde ücretsiz keşif desteğimizle hizmet vermekteyiz. Bina kapısı, otopark kapısı, yangın kapısı, pencere demiri, çelik çatı ve asma kat projelerinizi en kaliteli malzemelerle ve usta işçilikle uyguluyoruz.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-900">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba56] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>WhatsApp'tan Teklif Al</span>
                </a>
                <a
                  href={`tel:${phoneTel}`}
                  className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
                >
                  <Phone className="w-5 h-5 text-teal-500" />
                  <span>Hemen Ara: {phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
        <QuickContact />
      </div>
    );
  }

  // Not found
  notFound();
}
