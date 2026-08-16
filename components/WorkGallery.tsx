"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const galleryItems = [
  {
    src: "/images/works/works - 1.jpeg",
    title: "Alçıpan ve Mobilya Karkas İmalatı",
    badge: "Alçıpan ve Mobilya Karkas",
    alt: "Ankara alçıpan ve mobilya karkas yapımı",
  },
  {
    src: "/images/works/works - 4.jpeg",
    title: "Dekoratif Metal İşçilik ve Özel Uygulamalar",
    badge: "Dekoratif Metal İşçilik",
    alt: "Ankara dekoratif metal işçiliği ve özel imalat",
  },
  {
    src: "/images/works/works - 6.jpeg",
    title: "Alçıpan ve Mobilya Karkas Taşıyıcı Sistemler",
    badge: "Alçıpan ve Mobilya Karkas",
    alt: "Ankara alçıpan ve mobilya karkas profil montajı",
  },
  {
    src: "/images/works/works - 7.jpeg",
    title: "Özel Tasarım Çelik Merdiven İmalatı",
    badge: "Merdiven",
    alt: "Ankara özel tasarım çelik merdiven yapımı",
  },
  {
    src: "/images/works/works - 8.jpeg",
    title: "Çelik Merdiven ve Sağanlık Sistemleri",
    badge: "Merdiven",
    alt: "Ankara çelik merdiven imalatı ve montajı",
  },
  {
    src: "/images/works/works - 10.jpeg",
    title: "Villa Giriş Ferforje Bahçe Kapısı ve Özel Kanat Sistemi",
    badge: "Özel Metal İmalat",
    alt: "Ankara villa çift kanat ferforje bahçe kapısı demir doğrama",
  },
  {
    src: "/images/works/works - 12.jpeg",
    title: "Çelik Asma Kat Yapımı ve İmalatı",
    badge: "Asma Kat",
    alt: "Ankara dükkan ve iş yeri çelik asma kat yapımı",
  },
  {
    src: "/images/works/works - 14.jpeg",
    title: "Şantiye ve Saha Çevre Kapama Sistemleri",
    badge: "Çevre Kapama",
    alt: "Ankara şantiye çevre kapama ve sac karkas kaplama",
  },
  {
    src: "/images/works/works - 16.jpeg",
    title: "Alçıpan ve Mobilya Karkas Galvaniz Profil İskelet",
    badge: "Alçıpan ve Mobilya Karkas",
    alt: "Ankara alçıpan ve mobilya karkas taşıyıcı profiller",
  },
  {
    src: "/images/works/works - 17.jpeg",
    title: "Bahçe Duvar Üstü Korkuluk Sistemleri",
    badge: "Bahçe Korkuluk",
    alt: "Ankara bahçe korkuluk ve ferforje kapama imalatı",
  },
  {
    src: "/images/works/works - 22.jpeg",
    title: "Prestijli Site Giriş Kapıları ve Tag Yapımı",
    badge: "Site Giriş Kapıları",
    alt: "Ankara konut ve site giriş kapıları imalatı",
  },
  {
    src: "/images/works/works - 23.jpeg",
    title: "Ağır Çelik Yapı ve Konstrüksiyon İmalatı",
    badge: "Ağır Çelik Yapımı",
    alt: "Ankara ağır çelik yapı ve çatı konstrüksiyonu",
  },
  {
    src: "/images/works/works - 24.jpeg",
    title: "Dekoratif Metal İşçilik ve Özel Doğrama",
    badge: "Dekoratif Metal İşçilik",
    alt: "Ankara dekoratif metal işçilik çözümleri",
  },
  {
    src: "/images/works/works - 25.jpeg",
    title: "Dekoratif Metal ve Ferforje İşçiliği",
    badge: "Dekoratif Metal İşçilik",
    alt: "Ankara dekoratif metal işçilik ve ferforje tasarımı",
  },
  {
    src: "/images/works/works - 26.jpeg",
    title: "Çelik Asma Kat ve Galeri Katı İmalatı",
    badge: "Asma Kat",
    alt: "Ankara endüstriyel çelik asma kat yapımı",
  },
  {
    src: "/images/works/works - 27.jpeg",
    title: "Sanayi Tipi Çelik Asma Kat Sistemleri",
    badge: "Asma Kat",
    alt: "Ankara çelik asma kat projelendirme ve montaj",
  },
  {
    src: "/images/works/works - 28.jpeg",
    title: "Taşıyıcı Çelik Asma Kat ve Karkas Yapımı",
    badge: "Asma Kat",
    alt: "Ankara taşıyıcı çelik asma kat ve karkas imalatı",
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
                  <div>
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
