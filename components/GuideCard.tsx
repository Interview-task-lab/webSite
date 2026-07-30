import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

interface GuideCardProps {
  title: string;
  description: string;
  targetServiceSlug: string;
}

export default function GuideCard({ title, description, targetServiceSlug }: GuideCardProps) {
  const href = `/${targetServiceSlug}`;

  return (
    <div className="group bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-teal-600/10 flex items-center justify-center text-teal-500">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
            Bilgilendirme Rehberi
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center space-x-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
      >
        <span>Rehberi Oku →</span>
      </Link>
    </div>
  );
}
