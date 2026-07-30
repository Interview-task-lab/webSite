import { SidebarDistrictsWidget } from "@/components/Sidebar";
import { QuickContactCard } from "@/components/QuickContact";
import WorkGallery from "@/components/WorkGallery";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CheckCircle2, Zap, Hammer, ShieldCheck, Award, Phone, Layers, DoorOpen, Shield, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 3600; // Cache page for 1 hour

export default async function HomePage() {
  const waPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "905079888206";
  const heroWaUrl = `https://wa.me/${waPhone}`;

  const categories = [
    {
      id: "celik-yapi",
      title: "Çelik Yapı & Taşıyıcı Sistemler",
      icon: Layers,
      count: "5 İmalat Alanı",
      desc: "Asma kat, ağır çelik, prefabrik konut & karkas imalatı",
      badge: "Taşıyıcı & Statik",
    },
    {
      id: "kapi-sistemleri",
      title: "Kapı & Otomasyon Sistemleri",
      icon: DoorOpen,
      count: "3 İmalat Alanı",
      desc: "Sürgülü bahçe kapısı, demir kapı & site giriş tagı",
      badge: "Otomasyon & Giriş",
    },
    {
      id: "korkuluk-guvenlik",
      title: "Korkuluk & Güvenlik Sistemleri",
      icon: Shield,
      count: "3 İmalat Alanı",
      desc: "Bahçe korkuluğu, pencere demiri & çevre kapama",
      badge: "Güvenlik & Çevre",
    },
    {
      id: "ozel-metal-imalat",
      title: "Özel Metal İmalat",
      icon: Wrench,
      count: "4 İmalat Alanı",
      desc: "Çelik merdiven, ferforje el işçiliği & profil kesim",
      badge: "Özel İmalat",
    },
  ];

  const featureCards = [
    {
      title: "Ücretsiz Keşif",
      description: "Tüm Ankara genelinde adresinize gelip ölçü alıyoruz.",
      icon: <Zap className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Usta İşçilik",
      description: "Yılların deneyimiyle sağlam ve estetik montaj.",
      icon: <Hammer className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Güvenlik + Estetik",
      description: "Yapılarınızı korurken değer katan tasarımlar.",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />
    },
    {
      title: "Garanti Odaklı",
      description: "Kullandığımız malzeme ve montaja tam güvence.",
      icon: <Award className="w-6 h-6 text-teal-400" />
    }
  ];

  const heroFeatures = [
    "15 Farklı İmalat Kategorisi",
    "Ölçüye Özel Üretim + Kaliteli Malzeme",
    "Ankara Geneli Ücretsiz Keşif",
    "Hızlı Teslimat & 5 Yıl İşçilik & Malzeme Garantisi"
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/80 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  Çelik Konstrüksiyon & Demir Doğrama • Ücretsiz Keşif
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Asma Kat, Kapı & Korkuluk İmalatında <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 bg-clip-text text-transparent">Profesyonel Kalite</span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Ankara genelinde ağır çelik asma kattan otomatik sürgülü kapılara, ferforje korkuluklardan ölçülü profil kesimine kadar 15 farklı imalat alanımızla yapılarınıza değer katıyoruz.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {heroFeatures.map((feat) => (
                  <div key={feat} className="flex items-center space-x-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/hizmetler"
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 px-8 py-4 rounded-xl font-extrabold text-base shadow-lg shadow-amber-950/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Tüm Hizmetlerimizi İncele
                </Link>
                <a
                  href={heroWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-8 py-4 rounded-xl font-bold text-base hover:-translate-y-0.5 transition-all duration-200"
                >
                  WhatsApp'tan Yaz
                </a>
              </div>
            </div>

            {/* Hero Right Visuals */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group aspect-[4/3] sm:aspect-[16/10] lg:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                  alt="Başbuğa Metal çelik ve demir imalatı"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Quick Contact Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-2xl hidden sm:flex items-center space-x-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Hızlı Arama & Keşif</p>
                  <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_TEL || "+905525042657"}`} className="text-sm font-bold text-white hover:text-amber-400">
                    {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0 (552) 504 26 57"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Main Categories Spotlight */}
          <div className="mt-16 pt-16 border-t border-slate-900">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                İmalat Kategorilerimiz
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Şirketimizin 4 Temel Uzmanlık Alanı
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.id}
                    href={`/hizmetler#${cat.id}`}
                    className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 hover:bg-slate-900 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {cat.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {cat.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400 pt-3 border-t border-slate-800/80">
                      <span>{cat.count}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {featureCards.map((card) => (
              <div key={card.title} className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl hover:border-slate-800 transition-all">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-base font-bold text-white mb-1.5">{card.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery Photo Slider */}
      <WorkGallery />

      {/* Quick Contact & Regional Service Areas Side-by-Side Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <QuickContactCard />
          </div>
          <div className="lg:col-span-5">
            <SidebarDistrictsWidget />
          </div>
        </div>
      </section>
    </div>
  );
}
