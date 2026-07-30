import { db } from "@/lib/db";
import { redirect } from "next/navigation";

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
    redirect(`/hizmetler#${categoryMap[slug]}`);
  }

  const allServices = await db.service.findMany();
  const subService = allServices.find((s: any) => s.slug === slug);

  if (subService && (subService as any).categorySlug) {
    redirect(`/hizmetler#${(subService as any).categorySlug}`);
  }

  // Default fallback redirect to /hizmetler
  redirect("/hizmetler");
}
