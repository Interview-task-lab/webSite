"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const galleryItems = [
  {
    src: "/images/works/works - 1.jpeg",
    title: "Çelik Asma Kat ve Taşıyıcı Karkas Montajı",
    badge: "Çelik Yapı & Asma Kat",
  },
  {
    src: "/images/works/works - 2.jpeg",
    title: "Otomatik Sürgülü Kapı ve Otomasyon Sistemi",
    badge: "Sürgülü Kapı",
  },
  {
    src: "/images/works/works - 3.jpeg",
    title: "Ferforje Bina Giriş Kapısı ve Özel İşçilik",
    badge: "Ferforje & Kapı",
  },
  {
    src: "/images/works/works - 4.jpeg",
    title: "Balkon ve Pencere Güvenlik Korkulukları",
    badge: "Korkuluk Sistemleri",
  },
  {
    src: "/images/works/works - 5.jpeg",
    title: "Prefabrik Ev ve Konteynır Alt Karkas İmalatı",
    badge: "Karkas İmalatı",
  },
  {
    src: "/images/works/works - 6.jpeg",
    title: "Özel Çelik Merdiven ve Statik Taşıyıcılar",
    badge: "Özel Metal İmalat",
  },
  {
    src: "/images/works/works - 7.jpeg",
    title: "Şantiye ve Saha Çevre Kapama İmalatı",
    badge: "Çevre Kapama",
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
                  alt={item.title}
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

        {/* Slide Indicator Dots */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-amber-400"
                  : "w-2.5 bg-slate-800 hover:bg-slate-700"
              }`}
              aria-label={`Görsel ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
