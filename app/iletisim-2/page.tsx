import ContactForm from "@/components/ContactForm";
import { SidebarCallWidget, SidebarDistrictsWidget } from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim & Ücretsiz Keşif | Başbuğa Metal Ankara",
  description:
    "Başbuğa Metal Ankara Altındağ adres bilgileri, telefon ve ücretsiz keşif başvuru formu.",
  openGraph: {
    title: "İletişim & Ücretsiz Keşif | Başbuğa Metal Ankara",
    description: "Ankara Altındağ'da ücretsiz keşif ve fiyat teklifi için bize ulaşın.",
    url: "/iletisim",
    images: [{ url: "/images/logos/logo_dark.jpeg", width: 800, height: 600, alt: "Başbuğa Metal İletişim" }],
  },
  alternates: { canonical: "/iletisim" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Başbuğa Metal İletişim",
  description: "Başbuğa Metal iletişim bilgileri ve ücretsiz keşif başvuru formu.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Başbuğa Metal",
    telephone: "+905079888206",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Önder Mahallesi Çamlıtepe Caddesi 64/1",
      addressLocality: "Altındağ",
      addressRegion: "Ankara",
      postalCode: "06000",
      addressCountry: "TR",
    },
  },
};

export default async function ContactPage() {
  const googleMapsUrl = "https://maps.google.com/?q=Önder+Mahallesi+Çamlıtepe+Caddesi+64/1+Altındağ+Ankara";

  // Address Component Box
  const AddressCard = (
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl flex items-center space-x-4 shadow-lg hover:border-amber-500/30 transition-all">
      <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-500 flex-shrink-0">
        <MapPin className="w-5 h-5" />
      </div>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-sm text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 leading-relaxed transition-colors flex-1"
        title="Haritalarda Aç"
      >
        Önder Mahallesi Çamlıtepe Caddesi No: 64/1, Altındağ / ANKARA
      </a>
    </div>
  );

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8">
        <Breadcrumb items={[{ label: "İletişim & Ücretsiz Keşif" }]} />

        {/* ---------------- MOBILE LAYOUT (flex-col) ---------------- */}
        <div className="flex flex-col space-y-6 lg:hidden">
          {/* 1) Hızlı Çağrı / Keşif Hattı */}
          <div className="order-1">
            <SidebarCallWidget />
          </div>

          {/* 2) İletişim & Teklif Formu */}
          <div className="order-2">
            <ContactForm />
          </div>

          {/* 3) Adresimiz */}
          <div className="order-3">
            {AddressCard}
          </div>

          {/* 4) Bölgesel Hizmet Alanlarımız */}
          <div className="order-4">
            <SidebarDistrictsWidget />
          </div>
        </div>

        {/* ---------------- DESKTOP LAYOUT ---------------- */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 items-start">
          {/* Left Column (col-span-2) */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Right Column Sticky Sidebar (col-span-1) */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-28">
            <SidebarCallWidget />
            {AddressCard}
            <SidebarDistrictsWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
