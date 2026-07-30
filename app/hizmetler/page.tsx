import { db } from "@/lib/db";
import Link from "next/link";
import { Layers, DoorOpen, Shield, Wrench, CheckCircle, ArrowRight, PhoneCall } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Hizmetlerimiz | Başbuğa Metal Demircilik ve Çelik Yapı",
  description: "Asma kat, ağır çelik, otomatik sürgülü kapı, bahçe/pencere korkuluğu, prefabrik karkas ve özel metal imalat hizmetlerimizi inceleyin.",
};

export default async function HizmetlerPage() {
  const allServices = await db.service.findMany({
    orderBy: { order: "asc" },
  });

  const categories = [
    {
      id: "celik-yapi",
      title: "Çelik Yapı & Taşıyıcı Sistemler",
      icon: Layers,
      color: "from-amber-500 to-yellow-500",
      description: "Asma kat, ağır sanayi tipi çelik yapılar, prefabrik iskelet ve karkas imalatı çözümlerimiz.",
      services: allServices.filter((s: any) => s.categorySlug === "celik-yapi"),
    },
    {
      id: "kapi-sistemleri",
      title: "Kapı & Otomasyon Sistemleri",
      icon: DoorOpen,
      color: "from-blue-500 to-cyan-500",
      description: "Sürgülü bahçe kapıları, demir kapılar, bina girişleri ve prestijli site giriş konsolları.",
      services: allServices.filter((s: any) => s.categorySlug === "kapi-sistemleri"),
    },
    {
      id: "korkuluk-guvenlik",
      title: "Korkuluk & Güvenlik Sistemleri",
      icon: Shield,
      color: "from-emerald-500 to-teal-500",
      description: "Bahçe korkulukları, pencere demirleri ve şantiye çevre kapama sistemleri.",
      services: allServices.filter((s: any) => s.categorySlug === "korkuluk-guvenlik"),
    },
    {
      id: "ozel-metal-imalat",
      title: "Özel Metal İmalat & Yapı Elemanları",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      description: "Çelik merdiven, özel ferforje el işçiliği, aydınlatma direkleri ve ölçülü profil kesimi.",
      services: allServices.filter((s: any) => s.categorySlug === "ozel-metal-imalat"),
    },
  ];

  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0 (552) 504 26 57";
  const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+905525042657";

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20">
      {/* Main Categories & Services Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-28">
              {/* Category Header */}
              <div className="flex items-center space-x-4 border-b border-slate-800 pb-6 mb-10">
                <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${cat.color} text-slate-950 shadow-lg`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                    {cat.title}
                  </h2>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.services.map((service) => {
                  let features: string[] = [];
                  try {
                    features = JSON.parse(service.featuresJson || "[]");
                  } catch {
                    features = [];
                  }

                  return (
                    <div
                      key={service.id}
                      className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                          {service.name}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Features List */}
                        {features.length > 0 && (
                          <ul className="space-y-2 mb-6">
                            {features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-xs text-slate-300">
                                <CheckCircle className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mr-2 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-end">
                        <a
                          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}?text=${encodeURIComponent(
                            service.waMessage || `${service.name} hakkında teklif almak istiyorum.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                        >
                          WhatsApp Teklif Al
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Bottom CTA & Quote Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Ücretsiz Keşif & Projelendirme
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-2 mb-4">
                Özel Ölçü Demir ve Çelik Projeniz mi Var?
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                İster yerinde keşif talebinde bulunun, ister projenizin detaylarını form üzerinden veya telefonla bize iletin. Ekibimiz en uygun malzeme ve fiyat seçeneğini hemen hazırlasın.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href={`tel:${phoneTel}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Hemen Ara: {phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
