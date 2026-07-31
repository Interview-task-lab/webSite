import Sidebar from "@/components/Sidebar";
import QuickContact from "@/components/QuickContact";
import { Check, Star, ShieldCheck, HeartHandshake, Eye } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankara Demir Doğrama Ustası | Başbuğa Metal",
  description:
    "Ankara genelinde profesyonel demir doğrama ve ferforje çözümleri. Özel tasarım, kaliteli malzeme ve 5 yıl garanti.",
  openGraph: {
    title: "Ankara Demir Doğrama Ustası | Başbuğa Metal",
    description: "Ankara genelinde profesyonel demir doğrama ve ferforje çözümleri.",
    url: "/demir-dograma",
    images: [{ url: "/images/logos/logo_dark.jpeg", width: 800, height: 600, alt: "Başbuğa Metal Demir Doğrama" }],
  },
  alternates: { canonical: "/demir-dograma" },
};

export default function DemirDogramaPage() {
  const values = [
    {
      title: "Kalite",
      description: "Tüm demir işlerimizde birinci sınıf metal malzeme, dayanıklı menteşeler ve yüksek kaliteli Kale Kilit sistemleri tercih ediyoruz.",
      icon: <Star className="w-5 h-5 text-teal-500" />
    },
    {
      title: "Keşif",
      description: "Ankara genelinde talebiniz üzerine adresinize gelerek tamamen ücretsiz ölçü alıp, en uygun tasarım modelini belirliyoruz.",
      icon: <Eye className="w-5 h-5 text-teal-500" />
    },
    {
      title: "Özel Tasarım",
      description: "Kataloğumuzdaki yüzlerce ferforje motif ve modern lazer kesim sac modeli arasından yaşam alanınıza en uygun olanı üretiyoruz.",
      icon: <Eye className="w-5 h-5 text-teal-500" />
    },
    {
      title: "Montaj",
      description: "Sağlam, sarsılmaz montaj standartlarımızla epoksi dübeller yardımıyla mukavemeti en üst düzeyde tutacak sabitleme yapıyoruz.",
      icon: <ShieldCheck className="w-5 h-5 text-teal-500" />
    },
    {
      title: "Garanti",
      description: "Ürettiğimiz tüm demir doğrama, sürgülü kapı motorları ve kaynaklı imalatlarımıza işçilik ve montaj garantisi sunuyoruz.",
      icon: <HeartHandshake className="w-5 h-5 text-teal-500" />
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Area */}
          <div className="lg:col-span-2 space-y-12">
            <Breadcrumb items={[{ label: "Demir Doğrama" }]} />
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Ankara Demir Doğrama ve Ferforje Çözümleri
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Başbuğa Metal bünyesinde ferforje bahçe kapısı, yangın merdiveni, korkuluk imalatı ve çelik asma kat montajı gibi geniş bir hizmet yelpazesi sunuyoruz.
              </p>
            </div>

            {/* SÖZÜMÜZ Section */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <h2 className="text-2xl font-black text-white mb-8 tracking-wider border-b border-slate-800 pb-4">
                SÖZÜMÜZ
              </h2>

              <div className="space-y-6">
                {values.map((v, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{v.title}</h3>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
