import { getDistrictByCategorySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import QuickContact from "@/components/QuickContact";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const district = getDistrictByCategorySlug(slug);

  if (!district) return { title: "Kategori Bulunamadı" };

  return {
    title: `${district.name} Demir Doğramacı | Başbuğa Metal`,
    description: `${district.name} bölgesinde demir doğrama imalatı ve montaj hizmetleri.`,
    openGraph: {
      title: `${district.name} Demir Doğramacı | Başbuğa Metal`,
      description: `${district.name} bölgesinde profesyonel demir doğrama imalatı ve montaj hizmetleri.`,
      url: `/category/${slug}`,
      images: [{ url: "/images/logos/logo_dark.jpeg", width: 800, height: 600, alt: `${district.name} Demir Doğrama` }],
    },
    alternates: { canonical: `/category/${slug}` },
  };
}

export default async function DistrictCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const district = getDistrictByCategorySlug(slug);

  if (!district) {
    notFound();
  }

  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0 (552) 504 26 57";
  const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+905525042657";

  const waUrl = buildWhatsAppUrl({
    kaynak: `İlçe Kategorisi: ${district.name}`,
    hizmet: "Bölgesel Demir Doğrama",
    ilce: district.name,
    detay: `${district.name} ilçesinden yazıyorum, demir doğrama / ferforje işleri için fiyat teklifi almak istiyorum.`,
  });

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-600/10 border border-orange-500/20 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold text-orange-400 tracking-wider uppercase">
                Bölgesel Kategori • {district.name}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {district.name} Demir Doğrama ve Ferforje Hizmetleri
            </h1>

            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-base space-y-6">
              <p>{district.content}</p>
              <p>
                Ankara'nın her bölgesinde olduğu gibi, <strong>{district.name}</strong> ilçesinde de profesyonel demirci ustası ve montaj kadromuzla yanınızdayız. Bina kapıları, bahçe kapıları, dekoratif korkuluk sistemleri, asma kat ve çelik konstrüksiyon çatı işlerinizi yüksek kalite güvencesiyle tamamlıyoruz.
              </p>
            </div>

            {/* Service CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-900">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba56] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                <span>WhatsApp'tan Teklif Al</span>
              </a>
              <a
                href={`tel:${phoneTel}`}
                className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-orange-500" />
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
