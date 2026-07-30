import { db } from "@/lib/db";
import Sidebar from "@/components/Sidebar";
import QuickContact from "@/components/QuickContact";
import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Başbuğa Metal Ankara",
  description:
    "Bina kapısı, otomatik bahçe kapısı, ferforje korkuluk, çelik çatı ve asma kat hizmet listemiz.",
  openGraph: {
    title: "Hizmetlerimiz | Başbuğa Metal Ankara",
    description: "Bina kapısı, otomatik bahçe kapısı, ferforje korkuluk, çelik çatı ve asma kat hizmetleri.",
    url: "/hizmetlerimiz",
    images: [{ url: "/images/logos/logo_dark.jpeg", width: 800, height: 600, alt: "Başbuğa Metal Hizmetlerimiz" }],
  },
  alternates: { canonical: "/hizmetlerimiz" },
};

export default async function ServicesPage() {
  const services = await db.service.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Area */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-8">
              HİZMETLERİMİZ
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  name={service.name}
                  slug={service.slug}
                  description={service.description}
                  imageUrl={service.imageUrl}
                />
              ))}
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
