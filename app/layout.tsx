import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MottoBanner from "@/components/MottoBanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⚠️ SITE_URL: Alan adı alındığında burayı güncelleyin
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://basbugametal.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Başbuğa Metal - Demir Doğrama & Çelik Yapı Ankara",
    template: "%s | Başbuğa Metal",
  },
  description:
    "Ankara genelinde asma kat, ağır çelik, sürgülü bahçe kapısı, ferforje korkuluk, demir merdiven ve çelik konstrüksiyon imalatı. 5 yıl garanti.",
  keywords: [
    "demir doğrama ankara",
    "çelik yapı ankara",
    "asma kat yapımı",
    "sürgülü kapı",
    "ferforje korkuluk",
    "çelik konstrüksiyon",
    "demir merdiven",
    "bahçe kapısı",
    "başbuğa metal",
    "ankara demirci",
  ],
  authors: [{ name: "Başbuğa Metal" }],
  creator: "Başbuğa Metal",
  publisher: "Başbuğa Metal",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Başbuğa Metal",
    title: "Başbuğa Metal - Demir Doğrama & Çelik Yapı Ankara",
    description:
      "Ankara genelinde asma kat, ağır çelik, sürgülü bahçe kapısı, ferforje korkuluk, demir merdiven ve çelik konstrüksiyon imalatı.",
    images: [
      {
        url: "/images/logos/logo_dark.jpeg",
        width: 800,
        height: 600,
        alt: "Başbuğa Metal Logo - Ankara Demir Doğrama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Başbuğa Metal - Demir Doğrama & Çelik Yapı Ankara",
    description:
      "Ankara genelinde asma kat, ağır çelik, sürgülü bahçe kapısı, ferforje korkuluk, demir merdiven ve çelik konstrüksiyon imalatı.",
    images: ["/images/logos/logo_dark.jpeg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // Google Search Console verification meta tag
  // ⚠️ Gerçek verification code'u Google Search Console'dan alınıp buraya girilmeli
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

// LocalBusiness JSON-LD — tüm sayfalarda gösterilecek
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Başbuğa Metal",
  description:
    "Ankara genelinde asma kat, ağır çelik, sürgülü bahçe kapısı, ferforje korkuluk, demir merdiven ve çelik konstrüksiyon imalatı.",
  url: SITE_URL,
  telephone: "+905079888206",
  email: "basbugametal@gmail.com",
  image: `${SITE_URL}/images/logos/logo_dark.jpeg`,
  logo: `${SITE_URL}/images/logos/logo_dark.jpeg`,
  priceRange: "₺₺",
  currenciesAccepted: "TRY",
  paymentAccepted: "Nakit, Kredi Kartı, Havale/EFT",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Önder Mahallesi Çamlıtepe Caddesi 64/1",
    addressLocality: "Altındağ",
    addressRegion: "Ankara",
    postalCode: "06000",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9534,
    longitude: 32.8597,
  },
  areaServed: {
    "@type": "City",
    name: "Ankara",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-white"
      >
        <Navbar />
        <MottoBanner />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
