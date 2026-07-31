import { getServiceBySlug, getDistrictBySlug, getServicesByCategory } from "@/lib/data";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import QuickContact from "@/components/QuickContact";
import Breadcrumb from "@/components/Breadcrumb";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Check, Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // 1. Try finding a Service
  const service = getServiceBySlug(slug);
  if (service) {
    return {
      title: `${service.name} | Başbuğa Metal Ankara`,
      description: service.description,
      openGraph: {
        title: `${service.name} | Başbuğa Metal Ankara`,
        description: service.description,
        url: `/${slug}`,
        images: [{ url: "/images/logos/logo_dark.jpeg", width: 800, height: 600, alt: service.name }],
      },
      alternates: { canonical: `/${slug}` },
    };
  }

  // 2. Try finding a District Page
  const district = getDistrictBySlug(slug);
  if (district) {
    return {
      title: `${district.name} Demir Doğrama | Başbuğa Metal`,
      description: `${district.name} bölgesinde profesyonel demir doğrama ve ferforje hizmetleri.`,
      openGraph: {
        title: `${district.name} Demir Doğrama | Başbuğa Metal`,
        description: `${district.name} bölgesinde profesyonel demir doğrama ve ferforje hizmetleri.`,
        url: `/${slug}`,
        images: [{ url: "/images/logos/logo_dark.jpeg", width: 800, height: 600, alt: `${district.name} Demir Doğrama` }],
      },
      alternates: { canonical: `/${slug}` },
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
  const service = getServiceBySlug(slug);

  if (service) {
    const features: string[] = JSON.parse(service.featuresJson || "[]");
    
    // Related services from the same category
    const relatedServices = getServicesByCategory(service.categorySlug)
      .filter((s) => s.slug !== service.slug)
      .slice(0, 3);
    
    // Build context-specific WhatsApp link
    const waUrl = buildWhatsAppUrl({
      kaynak: `Hizmet Detay: ${service.name}`,
      hizmet: service.name,
      detay: service.waMessage,
    });

    // Service JSON-LD for individual service page
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://basbugametal.com";
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.description,
      url: `${siteUrl}/${service.slug}`,
      image: service.imageUrl ? `${siteUrl}${service.imageUrl}` : undefined,
      provider: {
        "@type": "LocalBusiness",
        name: "Başbuğa Metal",
        url: siteUrl,
        image: `${siteUrl}/images/logos/logo_dark.jpeg`,
        logo: `${siteUrl}/images/logos/logo_dark.jpeg`,
        telephone: "+905079888206",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Önder Mahallesi Çamlıtepe Caddesi 64/1",
          addressLocality: "Altındağ",
          addressRegion: "Ankara",
          postalCode: "06165",
          addressCountry: "TR",
        },
      },
      areaServed: { "@type": "City", name: "Ankara" },
    };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Area */}
            <div className="lg:col-span-2 space-y-8">
              <Breadcrumb items={[
                { label: "Hizmetlerimiz", href: "/hizmetler" },
                { label: service.name },
              ]} />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {service.name}
              </h1>

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-[16/9] w-full bg-slate-900">
                <Image
                  src={service.imageUrl || "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"}
                  alt={`${service.name} profesyonel uygulama hizmeti`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  priority
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
                    rel="noopener noreferrer nofollow"
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
                        rel="noopener noreferrer nofollow"
                        className="flex items-center justify-between bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 px-6 py-4 rounded-xl font-semibold text-slate-200 transition-all"
                      >
                        <span>{cta.label}</span>
                        <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="pt-8 border-t border-slate-900 space-y-4">
                  <h3 className="text-xl font-extrabold text-white">İlgili Hizmetlerimiz</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedServices.map((rs) => (
                      <Link
                        key={rs.slug}
                        href={`/${rs.slug}`}
                        className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 p-4 rounded-xl transition-all group"
                      >
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                          {rs.name}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {rs.description}
                        </p>
                        <div className="flex items-center text-xs text-amber-400 font-bold mt-3">
                          <span>Detay</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
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
  const district = getDistrictBySlug(slug);

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
              <Breadcrumb items={[
                { label: district.name },
              ]} />
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
