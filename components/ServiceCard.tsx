import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
}

export default function ServiceCard({ name, slug, description }: ServiceCardProps) {
  // Map to root slug caught by catch-all app/[slug]/page.tsx
  const href = `/${slug}`;

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-teal-950/5">
      <div className="p-6 sm:p-8">
        {/* Visual Cue */}
        <div className="w-12 h-12 rounded-2xl bg-teal-600/10 flex items-center justify-center text-teal-500 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>

        <Link href={href}>
          <h3 className="text-xl font-bold text-white mb-3 hover:text-amber-500 transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
        <Link
          href={href}
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-300 group-hover:text-amber-500 transition-colors"
        >
          <span>İncele ve Teklif Al</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
