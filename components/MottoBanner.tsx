import { Sparkles } from "lucide-react";

export default function MottoBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-amber-500/20 py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3 text-center">
        <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 animate-pulse" />
        <p className="text-sm sm:text-base md:text-lg font-black tracking-wider text-slate-100">
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent italic">
            “Siz hayal edin, BAŞBUĞA Metal yapsın.”
          </span>
        </p>
        <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 animate-pulse hidden sm:inline-block" />
      </div>
    </div>
  );
}
