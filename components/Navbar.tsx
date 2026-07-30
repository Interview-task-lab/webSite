"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, Wrench, Shield, Layers, DoorOpen, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "celik-yapi",
      name: "Çelik Yapı & Taşıyıcı Sistemler",
      href: "/hizmetler#celik-yapi",
      icon: Layers,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      items: [
        { label: "Asma Kat Yapımı", href: "/hizmetler#celik-yapi" },
        { label: "Ağır Çelik Asma Kat", href: "/hizmetler#celik-yapi" },
        { label: "Prefabrik Ev Yapımı", href: "/hizmetler#celik-yapi" },
        { label: "Konteynır Ev Alt Karkas Yapımı", href: "/hizmetler#celik-yapi" },
        { label: "Alçıpan ve Bordex Karkas", href: "/hizmetler#celik-yapi" },
      ],
    },
    {
      id: "kapi-sistemleri",
      name: "Kapı & Otomasyon Sistemleri",
      href: "/hizmetler#kapi-sistemleri",
      icon: DoorOpen,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      items: [
        { label: "Kapı Yapımı (Bina/Garaj/Yangın)", href: "/hizmetler#kapi-sistemleri" },
        { label: "Sürgülü Kapı Yapımı", href: "/hizmetler#kapi-sistemleri" },
        { label: "Site Giriş Kapıları & Konsollar", href: "/hizmetler#kapi-sistemleri" },
      ],
    },
    {
      id: "korkuluk-guvenlik",
      name: "Korkuluk & Güvenlik Sistemleri",
      href: "/hizmetler#korkuluk-guvenlik",
      icon: Shield,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      items: [
        { label: "Bahçe Korkuluk Yapımı", href: "/hizmetler#korkuluk-guvenlik" },
        { label: "Pencere Korkuluk İmalatı", href: "/hizmetler#korkuluk-guvenlik" },
        { label: "İnşaat Çevre Kapama", href: "/hizmetler#korkuluk-guvenlik" },
      ],
    },
    {
      id: "ozel-metal-imalat",
      name: "Özel Metal İmalat & Yapı",
      href: "/hizmetler#ozel-metal-imalat",
      icon: Wrench,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      items: [
        { label: "Merdiven Yapımı (Yangın/Döner)", href: "/hizmetler#ozel-metal-imalat" },
        { label: "Dekoratif Metal İşçilik", href: "/hizmetler#ozel-metal-imalat" },
        { label: "Aydınlatma Direği Yapımı", href: "/hizmetler#ozel-metal-imalat" },
        { label: "Ölçülü Profil Kesim Yapımı", href: "/hizmetler#ozel-metal-imalat" },
      ],
    },
  ];

  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0 (507) 988 82 06";
  const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+905079888206";

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/images/logos/logo_dark.jpeg"
                alt="BAŞBUĞA METAL Logo"
                className="h-11 w-11 object-cover rounded-xl border border-slate-800 shadow-md group-hover:border-amber-500/50 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200 bg-clip-text text-transparent leading-none">
                  BAŞBUĞA
                </span>
                <span className="text-[10px] font-bold text-teal-400 tracking-[0.25em] uppercase mt-1 leading-none">
                  METAL
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-slate-300 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              Ana Sayfa
            </Link>

            {/* Hizmetlerimiz Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="/hizmetler"
                className="flex items-center space-x-1 text-slate-300 hover:text-amber-500 font-medium text-sm transition-colors duration-200 py-2"
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-amber-500" : ""}`} />
              </Link>

              {isDropdownOpen && (
                <div className="absolute top-full -left-48 w-[880px] bg-slate-900/98 border border-slate-800 rounded-2xl shadow-2xl p-6 grid grid-cols-4 gap-6 animate-fadeIn backdrop-blur-lg">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.id} className="space-y-3">
                        <Link
                          href={cat.href}
                          className="flex items-center space-x-2 font-bold text-sm text-white hover:text-amber-400 group pb-2 border-b border-slate-800"
                        >
                          <div className={`p-1.5 rounded-lg ${cat.bgColor} ${cat.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="leading-snug">{cat.name}</span>
                        </Link>

                        <ul className="space-y-1.5 text-xs">
                          {cat.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="text-slate-400 hover:text-amber-300 flex items-center py-1 transition-colors group"
                              >
                                <span className="text-amber-500/60 group-hover:text-amber-400 mr-2 text-[10px] transition-colors">•</span>
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}

                  <div className="col-span-4 border-t border-slate-800 pt-3 flex items-center justify-between text-xs">
                    <span className="text-slate-400">
                      Tüm imalatlarımız Ankara genelinde 5 Yıl İşçilik & Malzeme Garantilidir.
                    </span>
                    <Link
                      href="/hizmetler"
                      className="font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
                    >
                      <span>Tüm 15 Hizmet Kataloğu &rarr;</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/referanslar"
              className="text-slate-300 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              Referanslarımız
            </Link>

            <Link
              href="/hakkimizda"
              className="text-slate-300 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              Hakkımızda
            </Link>

            <Link
              href="/iletisim"
              className="text-slate-300 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              İletişim
            </Link>

            <a
              href={`tel:${phoneTel}`}
              className="flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-teal-950/20"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
              aria-label="Menüyü Aç"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="px-3 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Ana Sayfa
            </Link>

            {/* Hizmetlerimiz Nested Mobile Accordion */}
            <div className="border-y border-slate-800/80 py-2">
              <div className="px-3 py-1 flex items-center justify-between font-bold text-amber-500 text-sm uppercase tracking-wider">
                <span>Hizmetlerimiz</span>
              </div>

              <div className="mt-2 space-y-2 px-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isExpanded = activeMobileCategory === cat.id;

                  return (
                    <div key={cat.id} className="bg-slate-950/60 rounded-xl border border-slate-800/60 overflow-hidden">
                      <button
                        onClick={() => setActiveMobileCategory(isExpanded ? null : cat.id)}
                        className="w-full flex items-center justify-between p-3 text-left font-semibold text-xs text-slate-200 hover:text-amber-400"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className={`w-4 h-4 ${cat.color}`} />
                          <span>{cat.name}</span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180 text-amber-400" : "text-slate-500"}`} />
                      </button>

                      {isExpanded && (
                        <div className="px-3 pb-3 pt-1 bg-slate-900/90 border-t border-slate-800/50 space-y-1.5">
                          {cat.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-slate-400 hover:text-amber-300 text-xs py-1 pl-2 border-l border-slate-800"
                            >
                              • {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <Link
                  href="/hizmetler"
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-teal-400 font-bold text-xs py-2 bg-slate-950 rounded-xl border border-slate-800 mt-2"
                >
                  Tüm Hizmetler Kataloğunu Aç &rarr;
                </Link>
              </div>
            </div>

            <Link
              href="/referanslar"
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Referanslarımız
            </Link>

            <Link
              href="/hakkimizda"
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Hakkımızda
            </Link>

            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium"
            >
              İletişim
            </Link>

            <div className="pt-4 border-t border-slate-800 mt-2 px-3">
              <a
                href={`tel:${phoneTel}`}
                className="flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-500 text-white w-full py-3 rounded-md font-bold text-base transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
