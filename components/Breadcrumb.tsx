"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate BreadcrumbList JSON-LD
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://basbugametal.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-1.5 text-xs text-slate-400 py-3 overflow-x-auto"
      >
        <Link
          href="/"
          className="flex items-center space-x-1 hover:text-amber-400 transition-colors flex-shrink-0"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Ana Sayfa</span>
        </Link>

        {items.map((item, index) => (
          <span key={index} className="flex items-center space-x-1.5 flex-shrink-0">
            <ChevronRight className="w-3 h-3 text-slate-600" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-amber-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-300 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
