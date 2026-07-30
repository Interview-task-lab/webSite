"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

// Form Validation Schema
const quoteSchema = z.object({
  adSoyad: z
    .string()
    .min(3, "Ad Soyad en az 3 karakter olmalıdır")
    .max(100, "Ad Soyad çok uzun"),
  telefon: z
    .string()
    .min(10, "Telefon numarası en az 10 haneli olmalıdır")
    .regex(/^[0-9+() -]+$/, "Geçersiz telefon numarası formatı"),
  hizmet: z.string().min(1, "Lütfen bir hizmet seçin"),
  ilce: z.string().min(2, "İlçe en az 2 karakter olmalıdır"),
  detay: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  defaultService?: string;
}

export default function QuoteForm({ defaultService = "" }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      adSoyad: "",
      telefon: "",
      hizmet: defaultService || "",
      ilce: "",
      detay: "",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
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
          ...data,
          kaynak: "Hızlı Teklif Formu",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Form gönderilirken bir hata oluştu.");
      }

      setSuccess(true);
      reset();

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
        { label: "Alçıpan ve Bordex Karkas Yapımı", value: "Alçıpan ve Bordex Karkas Yapımı" },
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
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
      {/* Decorative gradient flare */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <h3 className="text-2xl font-bold text-white mb-2">Hızlı Teklif Formu</h3>
      <p className="text-slate-400 text-sm mb-8">
        Formu doldurun, talebiniz veritabanımıza kaydedilsin ve doğrudan WhatsApp destek hattımıza aktarılsın.
      </p>

      {success && (
        <div className="mb-6 p-4 bg-emerald-950/50 border border-emerald-800 rounded-2xl text-emerald-400 text-sm">
          Talebiniz başarıyla alındı! WhatsApp'a yönlendiriliyorsunuz... Yönlendirme başlamazsa{" "}
          <span className="underline cursor-pointer font-bold">buraya tıklayın</span>.
        </div>
      )}

      {errorMsg && (
        <div className="mb-6 p-4 bg-rose-950/50 border border-rose-800 rounded-2xl text-rose-400 text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Ad Soyad */}
        <div>
          <label htmlFor="adSoyad" className="block text-sm font-semibold text-slate-300 mb-1.5">
            Ad Soyad
          </label>
          <input
            id="adSoyad"
            type="text"
            placeholder="Adınızı ve soyadınızı yazın"
            {...register("adSoyad")}
            className={`w-full bg-slate-950 border ${
              errors.adSoyad ? "border-rose-500" : "border-slate-800"
            } focus:border-teal-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-colors`}
          />
          {errors.adSoyad && (
            <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.adSoyad.message}</p>
          )}
        </div>

        {/* Telefon & İlçe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="telefon" className="block text-sm font-semibold text-slate-300 mb-1.5">
              Telefon
            </label>
            <input
              id="telefon"
              type="text"
              placeholder="05xxxxxxxxx"
              {...register("telefon")}
              className={`w-full bg-slate-950 border ${
                errors.telefon ? "border-rose-500" : "border-slate-800"
              } focus:border-slate-800`}
            />
            {errors.telefon && (
              <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.telefon.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="ilce" className="block text-sm font-semibold text-slate-300 mb-1.5">
              İlçe
            </label>
            <input
              id="ilce"
              type="text"
              placeholder="Hangi ilçedesiniz? (Örn: Altındağ)"
              {...register("ilce")}
              className={`w-full bg-slate-950 border ${
                errors.ilce ? "border-rose-500" : "border-slate-800"
              } focus:border-teal-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-colors`}
            />
            {errors.ilce && (
              <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.ilce.message}</p>
            )}
          </div>
        </div>

        {/* Hizmet Seçimi - Tüm 15 Hizmet */}
        <div>
          <label htmlFor="hizmet" className="block text-sm font-semibold text-slate-300 mb-1.5">
            Hizmet Seçin
          </label>
          <select
            id="hizmet"
            {...register("hizmet")}
            className={`w-full bg-slate-950 border ${
              errors.hizmet ? "border-rose-500" : "border-slate-800"
            } focus:border-teal-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors appearance-none cursor-pointer`}
            defaultValue={defaultService || ""}
          >
            <option value="" disabled>
              Lütfen hizmet seçiniz
            </option>
            {serviceCategories.map((catGroup) => (
              <optgroup key={catGroup.category} label={`── ${catGroup.category} ──`} className="bg-slate-900 text-amber-400 font-bold">
                {catGroup.items.map((s) => (
                  <option key={s.value} value={s.value} className="bg-slate-950 text-white font-normal">
                    {s.label}
                  </option>
                ))}
              </optgroup>
            ))}
            <optgroup label="── Diğer ──" className="bg-slate-900 text-amber-400 font-bold">
              <option value="Özel Ölçü / Diğer İmalat" className="bg-slate-950 text-white font-normal">
                Özel Ölçü / Diğer İmalatlar
              </option>
            </optgroup>
          </select>
          {errors.hizmet && (
            <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.hizmet.message}</p>
          )}
        </div>

        {/* Ölçü / Detay */}
        <div>
          <label htmlFor="detay" className="block text-sm font-semibold text-slate-300 mb-1.5">
            Ölçü / Detay
          </label>
          <textarea
            id="detay"
            rows={4}
            placeholder="İstediğiniz ölçüleri veya projenizin detaylarını buraya yazın"
            {...register("detay")}
            className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg shadow-teal-950/20 active:scale-98 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>İşleniyor...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>WhatsApp'tan Teklif İste</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
