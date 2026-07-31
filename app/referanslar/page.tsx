import Link from "next/link";
import Image from "next/image";
import QuickContact from "@/components/QuickContact";
import { Building2, CheckCircle2, Star, Sparkles, Award } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız | Başbuğa Metal Ankara",
  description:
    "Gamador İnşaat, Coffee Lab, TBR Lastik ve mimarlık / inşaat sektörünün öncü markalarına sunduğumuz çelik konstrüksiyon ve demir doğrama referanslarımız.",
  openGraph: {
    title: "Referanslarımız | Başbuğa Metal Ankara",
    description: "Ankara'nın öncü markalarına sunduğumuz çelik konstrüksiyon ve demir doğrama referanslarımız.",
    url: "/referanslar",
    images: [{ url: "/images/logos/logo_dark.jpeg", width: 800, height: 600, alt: "Başbuğa Metal Referanslar" }],
  },
  alternates: { canonical: "/referanslar" },
};

export default function ReferanslarPage() {
  // Öne Çıkan 2 Büyük Referans
  const featuredClients = [
    {
      name: "Gamador İnşaat",
      sector: "İnşaat & Yapı",
      logo: "/images/references/gamador.png",
      tag: "Öne Çıkan Kurumsal Referans",
      description: "Büyük ölçekli konut ve ticari yapı projelerinde ağır çelik konstrüksiyon, şantiye güvenlik kapamaları ve özel metal imalat çözümleri.",
    },
    {
      name: "Coffee Lab",
      sector: "Gıda & Mağazacılık",
      logo: "/images/references/coffee-lab.png",
      tag: "Öne Çıkan Kurumsal Referans",
      description: "Zincir mağaza konsept tasarımları, galeri asma kat imalatları, özel iç mekan ferforje ve dekoratif mimari metal işçilikleri.",
    },
  ];

  // Diğer Seçkin Referanslarımız (8 Marka)
  const standardClients = [
    { name: "TBR Lastik", sector: "Otomotiv & Sanayi" },
    { name: "Düzgünoğulları Elektrik", sector: "Elektrik & Taahhüt" },
    { name: "ARS Mobilya", sector: "Mobilya & İmalat" },
    { name: "Nimet Mobilya", sector: "Mobilya & Dekorasyon" },
    { name: "Kamusal Market", sector: "Perakende & Mağazacılık" },
    { name: "Nura İç Mimarlık", sector: "İç Mimarlık & Tasarım" },
    { name: "Navruz Mimarlık", sector: "Mimarlık & Projelendirme" },
    { name: "Design Studio", sector: "Tasarım & Mimari Uygulama" },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        <Breadcrumb items={[{ label: "Referanslarımız" }]} />
        
        {/* Contained Hero Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Güven & Kalite Referanslarımız
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Birlikte Değer Ürettiğimiz <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 bg-clip-text text-transparent">Kurumsal Referanslarımız</span>
          </h1>

          <p className="text-slate-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            30 yılı aşkın mesleki birikimimizle; inşaat firmalarından kurumsal mağaza zincirlerine, otomotiv tesislerinden mimarlık ofislerine kadar sektörün önde gelen markalarına çözüm ortağı oluyoruz.
          </p>
        </div>

        {/* 4 Trust Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">500+</div>
            <div className="text-xs text-slate-400 font-medium">Tamamlanan Proje</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-teal-400 mb-1">%100</div>
            <div className="text-xs text-slate-400 font-medium">Zamanında Teslimat</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">30+</div>
            <div className="text-xs text-slate-400 font-medium">Yıllık Tecrübe</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-500 mb-1">5 Yıl</div>
            <div className="text-xs text-slate-400 font-medium">İşçilik & Malzeme Garantisi</div>
          </div>
        </div>

        {/* 🏢 UNIFIED REFERENCES GRID SECTION */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Building2 className="w-6 h-6 text-amber-500" />
              <span>Birlikte Çalıştığımız Markalar & Referanslarımız</span>
            </h2>
            <div className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-xl font-bold self-start sm:self-auto flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>500+ Projeden Seçilenler</span>
            </div>
          </div>

          {/* ROW 1: 2 FEATURED HIGHLIGHTED CARDS (Gamador & Coffee Lab Side-by-Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredClients.map((client, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-7 shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Tag & Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full whitespace-nowrap flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-amber-400 mr-1" />
                      <span>{client.tag}</span>
                    </span>
                    <span className="text-xs text-slate-400 font-semibold whitespace-nowrap">
                      {client.sector}
                    </span>
                  </div>

                  {/* Logo & Name Header */}
                  <div className="flex items-center space-x-5 pt-1">
                    <div className="relative w-28 h-20 bg-white rounded-2xl p-2.5 shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden border border-slate-200 group-hover:scale-105 transition-transform">
                      <Image
                        src={client.logo}
                        alt={`${client.name} Referansımız`}
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-xs text-teal-400 font-semibold mt-1 flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400 flex-shrink-0" />
                        <span>Onaylı Kurumsal Çözüm Ortağı</span>
                      </p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {client.description}
                  </p>
                </div>

                {/* Award Badge Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center space-x-1.5 text-amber-400 font-medium">
                    <Award className="w-4 h-4" />
                    <span>Başbuğa Metal İşçiliği</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2 & 3: 8 STANDARD CLIENT CARDS (4-Column Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {standardClients.map((client, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 p-5 rounded-2xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block mb-1">
                    {client.sector}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {client.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center space-x-1.5 text-[11px] text-teal-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>İmalat & Montaj</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Quick Contact CTA Banner */}
      <QuickContact />
    </div>
  );
}
