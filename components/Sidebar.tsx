import { getAllDistricts } from "@/lib/data";
import { MapPin, Phone, Wrench } from "lucide-react";

export function SidebarCallWidget() {
  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0 (507) 988 82 06";
  const phoneTel = process.env.NEXT_PUBLIC_PHONE_TEL || "+905079888206";

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
      <div className="flex items-center space-x-2">
        <Wrench className="w-4 h-4 text-amber-500 flex-shrink-0" />
        <h3 className="text-base font-bold text-white">
          Ölçünüze Özel Fiyat Alın
        </h3>
      </div>

      <p className="text-slate-400 text-xs leading-relaxed">
        Tüm Ankara'ya ücretsiz keşif ekibi gönderiyoruz (Pzt - Cmt: 08:30 - 19:30). Arayın veya WhatsApp'tan görsel iletin.
      </p>

      <a
        href={`tel:${phoneTel}`}
        className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
      >
        <Phone className="w-4 h-4" />
        <span>{phoneDisplay}</span>
      </a>
    </div>
  );
}

export async function SidebarDistrictsWidget() {
  const districts = getAllDistricts();

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg">
      <h3 className="text-base font-bold text-white mb-4 flex items-center space-x-2">
        <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
        <span>Bölgesel Hizmet Alanlarımız</span>
      </h3>
      <div className="grid grid-cols-2 gap-2.5 text-xs">
        {districts.map((district) => (
          <div
            key={district.slug}
            className="text-slate-300 bg-slate-900/90 border border-slate-800/80 px-3 py-2.5 rounded-xl text-center text-xs font-medium cursor-default shadow-sm truncate"
            title={`${district.name} Hizmet Bölgemiz`}
          >
            {district.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Sidebar() {
  return (
    <aside className="w-full">
      <SidebarDistrictsWidget />
    </aside>
  );
}
