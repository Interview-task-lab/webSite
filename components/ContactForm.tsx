"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, Loader2, ChevronDown, Check } from "lucide-react";

const contactSchema = z.object({
  adSoyad: z
    .string()
    .min(3, "Adınız Soyadınız en az 3 karakter olmalıdır")
    .max(100, "Ad Soyad çok uzun"),
  hizmet: z.string().min(1, "Lütfen bir hizmet seçin"),
  mesaj: z
    .string()
    .min(5, "Mesaj veya adres en az 5 karakter olmalıdır"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      adSoyad: "",
      hizmet: "Asma Kat Yapımı",
      mesaj: "",
    },
  });

  const selectedHizmet = watch("hizmet");

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    setSuccess(false);

    try {
      const response = await fetch("/api/teklif", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adSoyad: data.adSoyad,
          hizmet: data.hizmet,
          detay: data.mesaj,
          telefon: "Belirtilmedi",
          ilce: "Ankara",
          kaynak: "İletişim Sayfası Formu",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Form gönderilirken bir hata oluştu.");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      reset({ adSoyad: "", hizmet: "Asma Kat Yapımı", mesaj: "" });

      if (result.whatsappUrl) {
        window.open(result.whatsappUrl, "_blank");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Bir şeyler ters gitti.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceCategories = [
    {
      category: "Çelik Yapı & Taşıyıcı Sistemler",
      items: [
        { label: "Asma Kat Yapımı", value: "Asma Kat Yapımı" },
        { label: "Ağır Çelik Asma Kat", value: "Ağır Çelik Asma Kat" },
        { label: "Prefabrik Ev Yapımı", value: "Prefabrik Ev Yapımı" },
        { label: "Konteynır Ev Alt Karkas Yapımı", value: "Konteynır Ev Alt Karkas Yapımı" },
        { label: "Alçıpan ve Mobilya Karkas Yapımı", value: "Alçıpan ve Mobilya Karkas Yapımı" },
      ],
    },
    {
      category: "Kapı & Otomasyon Sistemleri",
      items: [
        { label: "Kapı Yapımı (Bina/Garaj/Yangın)", value: "Kapı Yapımı" },
        { label: "Sürgülü Kapı Yapımı", value: "Sürgülü Kapı Yapımı" },
        { label: "Site Giriş Kapıları ve Konsolları", value: "Site Giriş Kapıları ve Konsolları" },
      ],
    },
    {
      category: "Korkuluk & Güvenlik Sistemleri",
      items: [
        { label: "Bahçe Korkuluk Yapımı", value: "Bahçe Korkuluk Yapımı" },
        { label: "Pencere Korkuluk İmalatı", value: "Pencere Korkuluk İmalatı" },
        { label: "İnşaat Çevre Kapama", value: "İnşaat Çevre Kapama" },
      ],
    },
    {
      category: "Özel Metal İmalat & Yapı Elemanları",
      items: [
        { label: "Merdiven Yapımı (Yangın/Döner/Çelik)", value: "Merdiven Yapımı" },
        { label: "Dekoratif Metal İşçilik Yapımı", value: "Dekoratif Metal İşçilik Yapımı" },
        { label: "Aydınlatma Direği Yapımı", value: "Aydınlatma Direği Yapımı" },
        { label: "Ölçülü Profil Kesim Yapımı", value: "Ölçülü Profil Kesim Yapımı" },
      ],
    },
    {
      category: "Diğer Özel İmalatlar",
      items: [
        { label: "Özel Ölçü / Diğer İmalatlar", value: "Özel Ölçü / Diğer İmalatlar" },
      ],
    },
  ];

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg relative">
      <h3 className="text-base font-bold text-white mb-6">İletişim & Teklif Formu</h3>

      {success && (
        <div className="mb-6 p-4 bg-emerald-950/60 border border-emerald-800 rounded-2xl text-emerald-400 text-xs font-semibold">
          Talebiniz başarıyla kaydedildi! WhatsApp yönlendirmesi açılıyor...
        </div>
      )}

      {errorMsg && (
        <div className="mb-6 p-4 bg-rose-950/60 border border-rose-800 rounded-2xl text-rose-400 text-xs font-semibold">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Ad Soyad */}
        <div>
          <label htmlFor="adSoyad" className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
            Adınız Soyadınız
          </label>
          <input
            id="adSoyad"
            type="text"
            placeholder="Adınızı ve soyadınızı yazın"
            {...register("adSoyad")}
            className={`w-full bg-slate-950 border ${
              errors.adSoyad ? "border-rose-500" : "border-slate-800"
            } focus:border-teal-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors`}
          />
          {errors.adSoyad && (
            <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.adSoyad.message}</p>
          )}
        </div>

        {/* Custom Dark Dropdown for Service Selection */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
            Hizmet Seçin
          </label>
          
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full bg-slate-950 border ${
              errors.hizmet ? "border-rose-500" : "border-slate-800"
            } hover:border-slate-700 focus:border-teal-500 rounded-xl px-4 py-3.5 text-sm text-white flex items-center justify-between transition-colors font-medium text-left`}
          >
            <span className="truncate">
              {selectedHizmet || "Bir Hizmet Seçiniz"}
            </span>
            <ChevronDown className={`w-4 h-4 text-slate-400 ml-2 flex-shrink-0 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180 text-amber-400" : ""
            }`} />
          </button>

          {/* Custom Dark Floating Dropdown Panel */}
          {isDropdownOpen && (
            <div className="absolute z-50 w-full mt-2 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl max-h-72 overflow-y-auto p-2 space-y-3 scrollbar-thin scrollbar-thumb-slate-800">
              {serviceCategories.map((catGroup) => (
                <div key={catGroup.category} className="space-y-1">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider px-3 py-1.5 bg-slate-900/80 rounded-lg">
                    {catGroup.category}
                  </div>
                  {catGroup.items.map((item) => (
                    <button
                      type="button"
                      key={item.value}
                      onClick={() => {
                        setValue("hizmet", item.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        selectedHizmet === item.value
                          ? "bg-amber-500/15 text-amber-400 font-bold"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {selectedHizmet === item.value && (
                        <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}

          {errors.hizmet && (
            <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.hizmet.message}</p>
          )}
        </div>

        {/* Mesaj veya Adres */}
        <div>
          <label htmlFor="mesaj" className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
            Mesajınız veya Keşif Adresiniz
          </label>
          <textarea
            id="mesaj"
            rows={7}
            placeholder="Talebinizi, ölçülerinizi veya keşif adresi bilgilerinizi yazabilirsiniz (Örn: Çankaya'da iş yerimiz için 50m² galeri asma kat teklifi almak istiyoruz...)"
            {...register("mesaj")}
            className={`w-full bg-slate-950 border ${
              errors.mesaj ? "border-rose-500" : "border-slate-800"
            } focus:border-teal-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-y min-h-[160px]`}
          ></textarea>
          {errors.mesaj && (
            <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.mesaj.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-md active:scale-98 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>İşleniyor...</span>
            </>
          ) : (
            <>
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP İLE TEKLİF AL</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
