"use client";

import { MapPin, Award, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Rahat Məkan",
    description: "Şəhərin mərkəzində, Nizami metrosunun düz çıxışında.",
    icon: MapPin,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "18 İllik Təcrübə",
    description: "Fasiləsiz təhsil təcrübəsi və sınaqdan çıxmış metodika.",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Yüksək Nəticə",
    description: "Hər il yüzlərlə uğurlu məzun və yüksək qəbul göstəricisi.",
    icon: TrendingUp,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export default function LocationAdvantage() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className={`p-4 rounded-2xl ${feature.bg} ${feature.color} mb-6`}>
                <feature.icon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
