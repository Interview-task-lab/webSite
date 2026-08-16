export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  categoryName: string;
  categorySlug: string;
  description: string;
  imageUrl: string;
  featuresJson: string;
  waMessage: string;
  order: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface DistrictItem {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  content: string;
}

export const SERVICES: ServiceItem[] = [
  // 1. ÇELİK YAPI & TAŞIYICI SİSTEMLER
  {
    id: "srv-1",
    name: "Asma Kat Yapımı",
    slug: "asma-kat",
    categoryName: "Çelik Yapı & Taşıyıcı Sistemler",
    categorySlug: "celik-yapi",
    description: "İş yerleri, depolar, dükkanlar ve yüksek tavanlı yapılar için yüksek taşıma kapasiteli demir/çelik konstrüksiyonlu galeri ve asma kat imalatı.",
    imageUrl: "/images/works/works - 12.jpeg",
    featuresJson: JSON.stringify([
      "NPI, NPU ve IPE ağır çelik profil kullanımı",
      "Ahşap, sac veya betonarme zemin alternatifleri",
      "Statik yük hesaplamalarına uygun imalat",
      "Ruhsata ve mimari projelere tam uyum"
    ]),
    waMessage: "Asma Kat Yapımı projesi için keşif ve fiyat teklifi almak istiyorum.",
    order: 1
  },
  {
    id: "srv-2",
    name: "Ağır Çelik Asma Kat",
    slug: "agir-celik-asma-kat",
    categoryName: "Çelik Yapı & Taşıyıcı Sistemler",
    categorySlug: "celik-yapi",
    description: "Fabrika, sanayi tesisi ve lojistik depolar için tonajlı stoklamaya ve iş makinesi yüklerine dayanıklı ağır çelik asma kat sistemleri.",
    imageUrl: "/images/works/works - 27.jpeg",
    featuresJson: JSON.stringify([
      "Ağır sanayi tipi H ve I profil kolonlar",
      "Depreme ve yüksek dinamik yüklere dayanıklı",
      "Cıvatalı ve kaynaklı yüksek dayanımlı birleşim",
      "Mühendislik hesaplamalı güvenli imalat"
    ]),
    waMessage: "Ağır Çelik Asma Kat projemiz için teklif almak istiyorum.",
    order: 2
  },
  {
    id: "srv-3",
    name: "Prefabrik Ev Yapımı",
    slug: "prefabrik-ev-yapimi",
    categoryName: "Çelik Yapı & Taşıyıcı Sistemler",
    categorySlug: "celik-yapi",
    description: "Hafif çelik karkaslı, ısı ve ses yalıtımlı, modern prefabrik hobi bahçesi imalatı.",
    imageUrl: "/images/works/works - 23.jpeg",
    featuresJson: JSON.stringify([
      "Galvaniz çelik karkas iskelet",
      "A1 sınıfı yanmaz yalıtım panelleri",
      "Hızlı kurulum ve uzun kullanım ömrü",
      "Anahtar teslim mimari ve statik çözümler"
    ]),
    waMessage: "Prefabrik ev yapımı ve modelleri hakkında bilgi almak istiyorum.",
    order: 3
  },
  {
    id: "srv-4",
    name: "Konteynır Ev Alt Karkas Yapımı",
    slug: "konteynir-ev-alt-karkas",
    categoryName: "Çelik Yapı & Taşıyıcı Sistemler",
    categorySlug: "celik-yapi",
    description: "Konteynır, Tiny House ve modüler yapılar için yüksek mukavemetli alt şasi, tekerlekli şasi ve zemin karkası imalatı.",
    imageUrl: "/images/works/works - 16.jpeg",
    featuresJson: JSON.stringify([
      "Ağır profil demir ve NPI çelik şasi",
      "Paslanmaz antipas ve epoksi kaplama",
      "Tüm ölçülere özel hassas kaynak işçiliği",
      "Burkulma ve sehim yapmayan güçlü altyapı"
    ]),
    waMessage: "Konteynır ev alt karkas yapımı için fiyat almak istiyorum.",
    order: 4
  },
  {
    id: "srv-5",
    name: "Alçıpan ve Mobilya Karkas Yapımı",
    slug: "alcipan-mobilya-karkas",
    categoryName: "Çelik Yapı & Taşıyıcı Sistemler",
    categorySlug: "celik-yapi",
    description: "İç ve dış mekan bölme duvarlar, asma tavanlar ve cephe giydirmeleri için taşıyıcı galvaniz metal karkas yapımı.",
    imageUrl: "/images/works/works - 1.jpeg",
    featuresJson: JSON.stringify([
      "Çelik profiller ile hassas terazi montajı",
      "Mobilya kaplamaya uygun karkas",
      "Isı ve ses yalıtımı taşyünü boşlukları",
      "Sarsıntılara karşı esnek ve sağlam konstrüksiyon"
    ]),
    waMessage: "Alçıpan ve Mobilya karkas imalatı için fiyat teklifi almak istiyorum.",
    order: 5
  },

  // 2. KAPI & OTOMASYON SİSTEMLERİ
  {
    id: "srv-6",
    name: "Kapı Yapımı",
    slug: "kapi-yapimi",
    categoryName: "Kapı & Otomasyon Sistemleri",
    categorySlug: "kapi-sistemleri",
    description: "Apartman bina giriş kapıları, dükkan kapıları, depo ve garaj için dayanıklı ferforje ve çelik profil demir kapılar.",
    imageUrl: "/images/works/works - 10.jpeg",
    featuresJson: JSON.stringify([
      "Kale veya Desi kilit mekanizmaları",
      "Camlı veya sac kaplama ferforje tasarımlar",
      "Paslanmaz antipas astar ve fırın boya",
      "Hidrolik kapatıcı ve bas-aç elektrikli kilit uyumu"
    ]),
    waMessage: "Demir kapı yapımı için ölçü alımı ve teklif talep ediyorum.",
    order: 6
  },
  {
    id: "srv-7",
    name: "Sürgülü Kapı Yapımı",
    slug: "surgulu-kapi-yapimi",
    categoryName: "Kapı & Otomasyon Sistemleri",
    categorySlug: "kapi-sistemleri",
    description: "Bahçe, villa, fabrika ve site girişleri için otomatik motorlu veya manuel yana kayar raylı sürgülü kapı sistemleri.",
    imageUrl: "/images/works/works - 22.jpeg",
    featuresJson: JSON.stringify([
      "BFT, Nice İtalyan motor otomasyonu",
      "Emniyet fotoseli ve flaşör ikaz lambası",
      "Zemine gömülü ağır ray ve rulman çarklar",
      "Uzaktan kumanda ve şifreli geçiş entegrasyonu"
    ]),
    waMessage: "Sürgülü bahçe kapısı imalatı ve motorlu otomasyon için bilgi istiyorum.",
    order: 7
  },
  {
    id: "srv-8",
    name: "Site Giriş Kapıları ve Konsolları",
    slug: "site-giris-kapilari",
    categoryName: "Kapı & Otomasyon Sistemleri",
    categorySlug: "kapi-sistemleri",
    description: "Modern siteler, konut projeleri ve fabrika alanları için prestijli mimari giriş tagları, çelik konsollar ve yüksek güvenlikli kapılar.",
    imageUrl: "/images/works/works - 10.jpeg",
    featuresJson: JSON.stringify([
      "Özel lazer kesim mimari motifler",
      "LED aydınlatma ve tabela uyumlu çelik konsol",
      "HGS ve plaka tanıma sistem uyumu",
      "Göz alıcı elektrostatik toz boya kaplama"
    ]),
    waMessage: "Site giriş kapısı ve konsolu yapımı için fiyat teklifi almak istiyorum.",
    order: 8
  },

  // 3. KORKULUK & GÜVENLİK SİSTEMLERİ
  {
    id: "srv-9",
    name: "Bahçe Korkuluk Yapımı",
    slug: "bahce-korkuluk-yapimi",
    categoryName: "Korkuluk & Güvenlik Sistemleri",
    categorySlug: "korkuluk-guvenlik",
    description: "Duvar üstü, bahçe çevresi ve site sınırları için ferforje motifli veya minimalist demir korkuluk imalatı.",
    imageUrl: "/images/works/works - 17.jpeg",
    featuresJson: JSON.stringify([
      "Duvar üstü epoksi ankrajlı sağlam montaj",
      "Mızraklı güvenlik uç alternatifleri",
      "Çift kat antipas ve dış mekan epoksi boya",
      "Özel ölçü imalat ve zengin motif seçenekleri"
    ]),
    waMessage: "Bahçe korkuluğu yapımı için metretül fiyat teklifi almak istiyorum.",
    order: 9
  },
  {
    id: "srv-10",
    name: "Pencere Korkuluk İmalatı",
    slug: "pencere-korkuluk-imalati",
    categoryName: "Korkuluk & Güvenlik Sistemleri",
    categorySlug: "korkuluk-guvenlik",
    description: "Zemin ve ilk kat dairelerde çocuk güvenliği ve hırsızlığa karşı yüksek koruma sağlayan dekoratif pencere demirleri.",
    imageUrl: "/images/works/works - 17.jpeg",
    featuresJson: JSON.stringify([
      "Kare ve dolu demir çubuk işçiliği",
      "Açılır akordeon veya sabit korkuluk seçenekleri",
      "Estetik ferforje göbek ve cumba alternatifleri",
      "Kasa ve duvara sağlam çelik dubelli montaj"
    ]),
    waMessage: "Pencere korkuluk imalatı için keşif talep ediyorum.",
    order: 10
  },
  {
    id: "srv-11",
    name: "İnşaat Çevre Kapama",
    slug: "insaat-cevre-kapama",
    categoryName: "Korkuluk & Güvenlik Sistemleri",
    categorySlug: "korkuluk-guvenlik",
    description: "Şantiye alanları, arsa sınırları ve tehlikeli bölgeler için trapez sac, çit panel ve çelik karkaslı geçici/kalıcı çevre kapama.",
    imageUrl: "/images/works/works - 14.jpeg",
    featuresJson: JSON.stringify([
      "Renkli trapez sac veya OSB arkası çelik karkas",
      "Rüzgara ve devrilmeye dayanıklı dikme profilleri",
      "Hızlı sökülüp takılabilir modüler karkas",
      "İş güvenliği kanunlarına tam uygunluk"
    ]),
    waMessage: "İnşaat çevre kapama projesi için metrekare fiyat teklifi almak istiyorum.",
    order: 11
  },

  // 4. ÖZEL METAL İMALAT & YAPI ELEMANLARI
  {
    id: "srv-12",
    name: "Merdiven Yapımı",
    slug: "merdiven-yapimi",
    categoryName: "Özel Metal İmalat & Yapı Elemanları",
    categorySlug: "ozel-metal-imalat",
    description: "Yangın merdiveni, villa içi döner çelik merdiven, omurgalı merdiven ve dış mekan demir merdiven imalatı.",
    imageUrl: "/images/works/works - 7.jpeg",
    featuresJson: JSON.stringify([
      "Yangın yönetmeliğine uygun tasarım ve imalat",
      "Ahşap, mermer veya çentikli sac basamak kaplama",
      "Statik yük hesaplamalı çelik omurga",
      "Çelik korkuluk kombinasyonları"
    ]),
    waMessage: "Çelik merdiven yapımı için keşif ve fiyat almak istiyorum.",
    order: 12
  },
  {
    id: "srv-13",
    name: "Dekoratif Metal İşçilik Yapımı",
    slug: "dekoratif-metal-iscilik",
    categoryName: "Özel Metal İmalat & Yapı Elemanları",
    categorySlug: "ozel-metal-imalat",
    description: "Özel tasarım ferforje ürünler, mimari metal aksesuarlar, mağaza dekorasyonu, masalar ve metal konsept işler.",
    imageUrl: "/images/works/works - 4.jpeg",
    featuresJson: JSON.stringify([
      "Mimar projelere özel el işçiliği ve hassas üretim",
      "Pirinç, paslanmaz ve siyah demir kombinasyonları",
      "Özel eskitme, pirinç kaplama ve fırın boya",
      "Kişiye ve mekâna özel projelendirilen sınırsız metal çözümleri"
    ]),
    waMessage: "Dekoratif metal işçilik ve özel tasarım imalat hakkında görüşmek istiyorum.",
    order: 13
  },
  {
    id: "srv-14",
    name: "Aydınlatma Direği Yapımı",
    slug: "aydinlatma-diregi-yapimi",
    categoryName: "Özel Metal İmalat & Yapı Elemanları",
    categorySlug: "ozel-metal-imalat",
    description: "Park, bahçe, site içi ve cadde alanları için dekoratif ferforje ve endüstriyel çelik aydınlatma direkleri imalatı.",
    imageUrl: "/images/works/works - 25.jpeg",
    featuresJson: JSON.stringify([
      "Sıcak daldırma galvaniz kaplama ile paslanmazlık",
      "Kablo kanallı ve sigorta kapaklı güvenli gövde",
      "Tekli, çiftli ve çoklu armatür konsolları",
      "Rüzgar yüküne dayanıklı flanşlı taban montajı"
    ]),
    waMessage: "Aydınlatma direği yapımı için fiyat listesi ve teklif istiyorum.",
    order: 14
  },
  {
    id: "srv-15",
    name: "Ölçülü Profil Kesim Yapımı",
    slug: "olculu-profil-kesim",
    categoryName: "Özel Metal İmalat & Yapı Elemanları",
    categorySlug: "ozel-metal-imalat",
    description: "Fabrikalar ve inşaat projeleri için profil, NPI, IPE, boru ve sac levhaların milimetrik ölçüde kesim, ebatlama ve fason işçiliği.",
    imageUrl: "/images/works/works - 24.jpeg",
    featuresJson: JSON.stringify([
      "Sulu şerit testere ve plazma/lazer kesim",
      "Açılı (dereceli) profil kesim imkanı",
      "Yüksek adetli siparişlerde hızlı teslimat",
      "Çapaksız ve milimetrik kesim hassasiyeti"
    ]),
    waMessage: "Ölçülü profil ve sac kesim fason işimiz için teklif almak istiyorum.",
    order: 15
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Ücretsiz keşif yapıyor musunuz?",
    answer: "Evet, tüm Ankara genelinde ücretsiz keşif hizmeti sunuyoruz. Adresinize gelerek ölçü alıyor, malzeme alternatifleri sunuyor ve net fiyat teklifimizi iletiyoruz.",
    order: 1
  },
  {
    id: "faq-2",
    question: "Üretim ve montaj süresi ne kadar sürer?",
    answer: "Projenin büyüklüğüne ve imalat çeşidine göre değişmekle birlikte, standart kapı, korkuluk ve kesim işleri 3-7 iş günü; asma kat ve çelik konstrüksiyon projeleri 7-14 iş günü içinde tamamlanıp montajı yapılır.",
    order: 2
  },
  {
    id: "faq-3",
    question: "Paslanmaya ve korozyona karşı garanti var mı?",
    answer: "Tüm demir doğrama ve çelik imalatlarımızda montaj öncesi çift kat antipas astar boya veya galvaniz kaplama uygulanır. Ardından dış mekana dayanıklı fırın/epoksi boyalar atılır.",
    order: 3
  },
  {
    id: "faq-4",
    question: "Özel mimari projelere göre imalat yapıyor musunuz?",
    answer: "Evet, mimari teknik çizimlerinize veya kendi hazırladığımız 3D/2D tasarımlara göre milimetrik hassasiyette kişiye ve projeye özel üretim gerçekleştiriyoruz.",
    order: 4
  },
  {
    id: "faq-5",
    question: "Otomatik sürgülü ve bahçe kapılarında hangi motorları kullanıyorsunuz?",
    answer: "BFT, Nice ve Italian kalitesinde 5 yıl garantili, emniyet fotoselli ve uzaktan kumandalı profesyonel kapı otomasyon sistemleri kuruyoruz.",
    order: 5
  }
];

export const DISTRICTS: DistrictItem[] = [
  {
    id: "dist-1",
    name: "Altındağ",
    slug: "altindag-demir-dograma",
    categorySlug: "altindag-demir-dogramaci",
    content: "Altındağ ve Önder Mahallesi merkezli atölyemizle tüm Altındağ bölgesinde ferforje kapı, pencere korkuluğu, asma kat ve çelik konstrüksiyon çözümleri sunuyoruz."
  },
  {
    id: "dist-2",
    name: "Çankaya",
    slug: "cankaya-demir-dograma",
    categorySlug: "cankaya-demir-dogramaci",
    content: "Çankaya ilçesinde villa bahçe kapıları, otomatik sürgülü kapı, balkon korkulukları ve çelik merdiven uygulamaları yapmaktayız."
  },
  {
    id: "dist-3",
    name: "Keçiören",
    slug: "kecioren-demir-dograma",
    categorySlug: "kecioren-demir-dogramaci",
    content: "Keçiören genelinde dükkan kapıları, bina giriş kapıları, pencere demirleri ve yangın merdiveni imalatında hızlı teslimat."
  },
  {
    id: "dist-4",
    name: "Yenimahalle",
    slug: "yenimahalle-demir-dograma",
    categorySlug: "yenimahalle-demir-dogramaci",
    content: "Yenimahalle ve OSTİM sanayi bölgesinde ağır çelik asma kat, fabrika kapıları ve ölçülü profil kesim fason işçiliği sunuyoruz."
  },
  {
    id: "dist-5",
    name: "Mamak",
    slug: "mamak-demir-dograma",
    categorySlug: "mamak-demir-dogramaci",
    content: "Mamak ilçesinde güvenli korkuluk sistemleri, bahçe kapıları ve çelik çatı uygulamalarıyla hizmetinizdeyiz."
  },
  {
    id: "dist-6",
    name: "Etimesgut",
    slug: "etimesgut-demir-dograma",
    categorySlug: "etimesgut-demir-dogramaci",
    content: "Etimesgut ve Eryaman bölgesinde site giriş kapıları, sürgülü bahçe kapıları ve prefabrik alt karkas üretimi yapmaktayız."
  },
  {
    id: "dist-7",
    name: "Sincan",
    slug: "sincan-demir-dograma",
    categorySlug: "sincan-demir-dogramaci",
    content: "Sincan Organize Sanayi ve konut alanlarında dayanıklı demir doğrama, asma kat ve ferforje korkuluk imalatı."
  },
  {
    id: "dist-8",
    name: "Gölbaşı",
    slug: "golbasi-demir-dograma",
    categorySlug: "golbasi-demir-dogramaci",
    content: "Gölbaşı villa ve müstakil konut projeleri için bahçe duvar korkuluğu, peyzaj demir işçiliği ve otomatik kapılar."
  },
  {
    id: "dist-9",
    name: "Pursaklar",
    slug: "pursaklar-demir-dograma",
    categorySlug: "pursaklar-demir-dogramaci",
    content: "Pursaklar bölgesinde estetik ve güvenliği bir arada sunan pencere korkulukları, bina giriş kapıları ve çelik merdivenler."
  },
  {
    id: "dist-10",
    name: "Kahramankazan",
    slug: "kahramankazan-demir-dograma",
    categorySlug: "kahramankazan-demir-dogramaci",
    content: "Kahramankazan sanayi bölgesinde fabrika çevre kapama, ağır çelik yapılar ve konteynır alt karkas çözümleri."
  }
];

// Data Accessor Utility Functions
export function getAllServices() {
  return SERVICES.sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(categorySlug: string) {
  return SERVICES.filter((s) => s.categorySlug === categorySlug).sort((a, b) => a.order - b.order);
}

export function getAllDistricts() {
  return DISTRICTS;
}

export function getAllFAQs() {
  return FAQS.sort((a, b) => a.order - b.order);
}
