"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const galleryItems = [
  {
    src: "/images/works/works - 1.jpeg",
    title: "Ankara Çelik Asma Kat ve Taşıyıcı Karkas Montajı",
    badge: "Çelik Yapı & Asma Kat",
    alt: "Başbuğa Metal Ankara çelik asma kat yapımı ve statik karkas imalatı",
  },
  {
    src: "/images/works/works - 2.jpeg",
    title: "Otomatik Yana Kayar Sürgülü Bahçe Kapısı Otomasyonu",
    badge: "Sürgülü Kapı & Otomasyon",
    alt: "Ankara motorlu otomatik sürgülü bahçe kapısı imalatı ve montajı",
  },
  {
    src: "/images/works/works - 3.jpeg",
    title: "Ferforje Bina Giriş Kapısı ve El İşçiliği Lazer Kesim",
    badge: "Ferforje & Bina Kapısı",
    alt: "Ankara apartman bina giriş kapısı ferforje demir doğrama",
  },
  {
    src: "/images/works/works - 4.jpeg",
    title: "Balkon ve Pencere Güvenlik Korkuluk Sistemleri",
    badge: "Korkuluk Sistemleri",
    alt: "Ankara pencere demir korkuluk ve balkon koruma korkuluğu imalatı",
  },
  {
    src: "/images/works/works - 5.jpeg",
    title: "Prefabrik Ev ve Konteynır Şasi Alt Karkas İmalatı",
    badge: "Karkas & Şasi İmalatı",
    alt: "Ankara prefabrik konut alt çelik şasi ve zemin karkas yapımı",
  },
  {
    src: "/images/works/works - 6.jpeg",
    title: "Özel Tasarım Çelik Yangın Merdiveni ve Döner Merdiven",
    badge: "Çelik Merdiven İmalatı",
    alt: "Ankara çelik yangın merdiveni ve omurgalı döner demir merdiven",
  },
  {
    src: "/images/works/works - 7.jpeg",
    title: "Şantiye ve Saha Çevre Kapama Trapez Sac Karkası",
    badge: "Çevre Kapama & Güvenlik",
    alt: "Ankara şantiye çevre kapama ve trapez sac kaplama karkas işçiliği",
  },
  {
    src: "/images/works/works - 8.jpeg",
    title: "Ağır Sanayi Tipi Çelik Konstrüksiyon Depo İskeleti",
    badge: "Ağır Çelik Konstrüksiyon",
    alt: "Ankara fabrika ağır çelik konstrüksiyon kolon ve çatı imalatı",
  },
  {
    src: "/images/works/works - 9.jpeg",
    title: "Lazer Kesim Dekoratif Bahçe Duvar Korkuluğu",
    badge: "Ferforje & Korkuluk",
    alt: "Ankara lazer kesim sac ferforje bahçe duvar üstü korkuluğu",
  },
  {
    src: "/images/works/works - 10.jpeg",
    title: "Villa Giriş Ferforje Bahçe Kapısı ve Özel Kanat Sistemi",
    badge: "Bahçe Kapısı",
    alt: "Ankara villa çift kanat ferforje bahçe kapısı demir doğrama",
  },
  {
    src: "/images/works/works - 11.jpeg",
    title: "İş Yeri ve Mağaza İçi Ağır Profil Çelik Galeri Katı",
    badge: "Asma Kat Sistemleri",
    alt: "Ankara mağaza içi NPI profil çelik galeri asma kat imalatı",
  },
  {
    src: "/images/works/works - 12.jpeg",
    title: "Endüstriyel Tesis Sürgülü Fabrika Kapısı",
    badge: "Otomasyon & Kapı",
    alt: "Ankara fabrika ve lojistik depo raylı sürgülü kapı montajı",
  },
  {
    src: "/images/works/works - 13.jpeg",
    title: "Site Giriş Prestij Konsolu ve Mimari Çelik Tag Yapımı",
    badge: "Site Giriş Konsolu",
    alt: "Ankara konut projesi site giriş çelik tagı ve güvenlik konsolu",
  },
  {
    src: "/images/works/works - 14.jpeg",
    title: "Müstakil Konut Çatı Katı Teras Korkuluğu",
    badge: "Teras & Balkon Korkuluğu",
    alt: "Ankara teras camlı demir korkuluk ve küpeşte imalatı",
  },
  {
    src: "/images/works/works - 15.jpeg",
    title: "Paslanmaz Antipas Kaplamalı Çelik Makas Çatı Sistemleri",
    badge: "Çelik Çatı İmalatı",
    alt: "Ankara fabrika çelik çatı makası imalatı ve montajı",
  },
  {
    src: "/images/works/works - 16.jpeg",
    title: "Dükkan Önü Lazer Kesim Sundurma ve Kanopi İmalatı",
    badge: "Metal Sundurma & Kanopi",
    alt: "Ankara dükkan ve mağaza üzeri çelik sundurma metal kanopi",
  },
  {
    src: "/images/works/works - 17.jpeg",
    title: "Bahçe Duvar Üstü Mızraklı Ferforje Güvenlik Çiti",
    badge: "Güvenlik Korkuluğu",
    alt: "Ankara duvar üstü mızraklı güvenlik demiri ferforje korkuluk",
  },
  {
    src: "/images/works/works - 18.jpeg",
    title: "Lojistik Depo Tonajlı Yük Taşıma Kapasiteli Asma Kat",
    badge: "Ağır Çelik Asma Kat",
    alt: "Ankara lojistik depo yüksek tonaj kapasiteli çelik asma kat",
  },
  {
    src: "/images/works/works - 19.jpeg",
    title: "Özel Tasarım Dekoratif Metal Konsept Masalar ve Aksesuarlar",
    badge: "Özel Metal İmalat",
    alt: "Ankara dekoratif metal mobilya karkas ve ferforje masa ayakları",
  },
  {
    src: "/images/works/works - 20.jpeg",
    title: "Park ve Site İçi Sıcak Daldırma Galvaniz Aydınlatma Direği",
    badge: "Aydınlatma Direği",
    alt: "Ankara park ve site bahçe çelik aydınlatma direği imalatı",
  },
  {
    src: "/images/works/works - 21.jpeg",
    title: "Ölçülü Sulu Şerit Testere Profil ve NPI Kesim Hizmeti",
    badge: "Ebatlama & Profil Kesim",
    alt: "Ankara hassas sulu şerit testere NPI IPE demir profil kesimi",
  },
  {
    src: "/images/works/works - 22.jpeg",
    title: "Tiny House ve Mobil Ev Şasi Karkas Üretimi",
    badge: "Tiny House Karkas",
    alt: "Ankara Tiny House mobil ev çelik şasi ve karkas imalatı",
  },
  {
    src: "/images/works/works - 23.jpeg",
    title: "Apartman Yangın Merdiveni ve Dış Mekan Çelik Sağanlığı",
    badge: "Yangın Merdiveni",
    alt: "Ankara yönetmeliğe uygun çift kollu çelik yangın merdiveni",
  },
  {
    src: "/images/works/works - 24.jpeg",
    title: "Şantiye Güvenlik Kapısı ve Geçici Giriş Tagı",
    badge: "Şantiye Çevre Kapama",
    alt: "Ankara şantiye alanı giriş kapısı ve karkas kapama işçiliği",
  },
  {
    src: "/images/works/works - 25.jpeg",
    title: "Fabrika Depo İçi Ağır Çelik Kolon ve Kiriş Birleşimleri",
    badge: "Ağır Çelik Konstrüksiyon",
    alt: "Ankara fabrika çelik konstrüksiyon karkas ve kiriş montajı",
  },
  {
    src: "/images/works/works - 26.jpeg",
    title: "Özel Ahşap Basamaklı Omurgalı Çelik Merdiven",
    badge: "Özel Çelik Merdiven",
    alt: "Ankara villa içi ahşap basamaklı omurgalı çelik merdiven",
  },
  {
    src: "/images/works/works - 27.jpeg",
    title: "Ferforje Bahçe Kapısı Motifi ve El İşçiliği Detayları",
    badge: "Ferforje Sanatı",
    alt: "Ankara el işçiliği dövme demir ferforje kapı motif imalatı",
  },
  {
    src: "/images/works/works - 28.jpeg",
    title: "Sanayi Tipi Lazer Kesim Sac Bölme Duvar ve Karkas",
    badge: "Özel İmalat & Sac Kesim",
    alt: "Ankara lazer kesim sac bölme duvar ve taşıyıcı metal karkas",
  },
];

export default function WorkGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Gallery Carousel Card */}
        <div
          className="relative rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl overflow-hidden p-3 sm:p-5 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Image Container */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-slate-950">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt || item.title}
                  title={item.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Bottom Overlay Gradient & Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 sm:p-8 flex flex-col sm:flex-row justify-between sm:items-end gap-3 z-20">
                  <div className="space-y-1.5">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[11px] font-bold tracking-wide uppercase">
                      {item.badge}
                    </span>
                    <h3 className="text-base sm:text-xl font-extrabold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="text-slate-400 text-xs font-semibold bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-xl self-start sm:self-auto flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentIndex + 1} / {galleryItems.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-slate-950/70 hover:bg-slate-900 text-slate-200 hover:text-amber-400 border border-slate-700/80 p-3 rounded-2xl transition-all opacity-80 group-hover:opacity-100 hover:scale-105 shadow-lg"
            aria-label="Önceki Görsel"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-slate-950/70 hover:bg-slate-900 text-slate-200 hover:text-amber-400 border border-slate-700/80 p-3 rounded-2xl transition-all opacity-80 group-hover:opacity-100 hover:scale-105 shadow-lg"
            aria-label="Sonraki Görsel"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicator Dots (scrollable if many) */}
        <div className="flex justify-center items-center space-x-1.5 mt-4 overflow-x-auto py-1 max-w-full">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                index === currentIndex
                  ? "w-6 bg-amber-400"
                  : "w-2 bg-slate-800 hover:bg-slate-700"
              }`}
              aria-label={`Görsel ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
