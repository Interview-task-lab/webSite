import { Award, ShieldCheck, History, Hammer, CheckCircle2, Layers, DoorOpen, Shield, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Başbuğa Metal Ankara",
  description:
    "30 yılı aşkın mesleki birikim ve 15 yıllık Başbuğa Metal uzmanlığıyla çelik konstrüksiyon, asma kat, kapı ve korkuluk imalatı hikayemiz.",
  openGraph: {
    title: "Hakkımızda | Başbuğa Metal Ankara",
    description: "30 yılı aşkın mesleki birikim ve profesyonel çelik konstrüksiyon imalat hikayemiz.",
    url: "/hakkimizda",
    images: [{ url: "/images/logos/logo_dark.jpeg", width: 800, height: 600, alt: "Başbuğa Metal Hakkımızda" }],
  },
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  const categories = [
    {
      title: "Çelik Yapı & Taşıyıcı Sistemler",
      icon: Layers,
      items: [
        "Asma Kat Yapımı",
        "Ağır Çelik Asma Kat",
        "Prefabrik Ev Yapımı",
        "Konteynır Ev Alt Karkas Yapımı",
        "Alçıpan ve Bordex Karkas Yapımı",
      ],
    },
    {
      title: "Kapı & Otomasyon Sistemleri",
      icon: DoorOpen,
      items: [
        "Kapı Yapımı (Bina, Garaj, Yangın)",
        "Sürgülü Kapı Yapımı (Otomatik)",
        "Site Giriş Kapıları ve Konsolları",
      ],
    },
    {
      title: "Korkuluk & Güvenlik Sistemleri",
      icon: Shield,
      items: [
        "Bahçe Korkuluk Yapımı",
        "Pencere Korkuluk İmalatı",
        "İnşaat Çevre Kapama",
      ],
    },
    {
      title: "Özel Metal İmalat",
      icon: Wrench,
      items: [
        "Merdiven Yapımı (Yangın, Döner, Çelik)",
        "Dekoratif Metal İşçilik Yapımı",
        "Aydınlatma Direği Yapımı",
        "Ölçülü Profil Kesim Yapımı",
      ],
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
        {/* Header / Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Köklü Bir Tecrübeden Yenilikçi Üretime...
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Başbuğa Metal'in <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 bg-clip-text text-transparent">Hikayesi</span>
          </h1>
        </div>

        {/* Story Paragraphs */}
        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-base md:text-lg space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 border-l-4 border-l-amber-500 shadow-xl">
            <p className="font-medium text-white leading-relaxed">
              Hikayemiz, kurucumuz <strong>Nevzat Başbuğa</strong>'nın sanayi ve imalat sektörünün öncü kuruluşlarında, başta <strong>YDS</strong> olmak üzere <strong>30 yılı aşkın</strong> süredir edindiği başarılı, özverili ve zengin mesleki birikime dayanmaktadır. Sahada ter dökerek kazanılan bu çeyrek asrı aşan derin tecrübeyi, mesleki birikimi ve uzun yıllardır kurulan hayalleri doğrudan müşterilerimizle buluşturmak amacıyla <strong>2010 yılında</strong> kendi işletmemizin temellerini attık.
            </p>
          </div>

          <p>
            Faaliyetlerimize başladığımız ilk dönemlerde, sanayinin ve üretimin hassas ihtiyaçlarına yönelik pres bıçakları ve silah kılıf maşası imalatı gerçekleştirerek üretimdeki kalitemizi kısa sürede kanıtladık. Her zaman gelişime açık olan ve müşteri taleplerini merkeze alan firmamız, <strong>2012 yılı</strong> itibarıyla hizmet ağını yapısal projelere kaydırarak demir doğrama sektörüne yöneldi.
          </p>

          <p className="text-amber-400 font-semibold text-lg border-l-2 border-amber-500/50 pl-4 py-1 bg-amber-500/5 rounded-r-xl">
            Bugün, geride bıraktığımız yaklaşık 15 yıl boyunca demir doğrama ve asma kat sistemleri projelerinde uzmanlaşmış bir firma olarak yolumuza güvenle devam ediyoruz.
          </p>

          <p>
            <strong>YDS</strong> çatısı altında edinilen o köklü iş disiplinini ve sahada bizzat tecrübe edilerek kazanılan ustalığı, her yeni projemizde değişmez bir hizmet standardı olarak sunuyoruz. Amacımız; yılların getirdiği sarsılmaz güven, kalite ve estetik anlayışıyla yaşam ve çalışma alanlarınıza değer katmaya devam etmektir.
          </p>
        </div>

        {/* Key Milestones Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center space-x-2 text-amber-400 font-black text-2xl mb-2">
              <History className="w-6 h-6 text-amber-500" />
              <span>30+ Yıl</span>
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Sektörel Tecrübe & Birikim</h3>
            <p className="text-xs text-slate-400">Sahada bizzat kazanılan çeyrek asrı aşan derin tecrübe.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center space-x-2 text-teal-400 font-black text-2xl mb-2">
              <Hammer className="w-6 h-6 text-teal-500" />
              <span>2010</span>
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Şirketimizin Kuruluşu</h3>
            <p className="text-xs text-slate-400">Sanayi bıçakları ve maşa imalatı ile ilk adımlar.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center space-x-2 text-emerald-400 font-black text-2xl mb-2">
              <Award className="w-6 h-6 text-emerald-500" />
              <span>15 Yıl</span>
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Demir Doğrama & Asma Kat</h3>
            <p className="text-xs text-slate-400">2012'den bugüne yapısal projeler ve usta işçilik.</p>
          </div>
        </div>

        {/* Categorized 15 Service Specialties */}
        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-6">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-7 h-7 text-amber-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Uzmanlaştığımız 15 İmalat ve Hizmet Alanı
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Köklü ustalık disiplini ile hayata geçirdiğimiz 4 ana imalat grubumuz:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 hover:border-amber-500/30 transition-all">
                  <div className="flex items-center space-x-2 font-bold text-sm text-amber-400 mb-3 border-b border-slate-800 pb-2">
                    <Icon className="w-4 h-4 text-amber-500" />
                    <span>{cat.title}</span>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
