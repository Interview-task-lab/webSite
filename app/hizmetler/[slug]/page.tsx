import { getAllServices } from "@/lib/data";
import { permanentRedirect } from "next/navigation";

export default async function ServiceRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Direct category map
  const categoryMap: Record<string, string> = {
    "celik-yapi": "celik-yapi",
    "kapi-sistemleri": "kapi-sistemleri",
    "korkuluk-guvenlik": "korkuluk-guvenlik",
    "ozel-metal-imalat": "ozel-metal-imalat",
  };

  if (categoryMap[slug]) {
    permanentRedirect(`/hizmetler#${categoryMap[slug]}`);
  }

  const allServices = getAllServices();
  const subService = allServices.find((s: any) => s.slug === slug);

  if (subService && (subService as any).categorySlug) {
    permanentRedirect(`/hizmetler#${(subService as any).categorySlug}`);
  }

  // Default fallback redirect to /hizmetler
  permanentRedirect("/hizmetler");
}
