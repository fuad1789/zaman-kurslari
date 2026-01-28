"use client";

import { motion } from "framer-motion";
import { PiStudentDuotone, PiGlobeHemisphereWestDuotone, PiCertificateDuotone, PiBooksDuotone, PiArrowUpRightBold } from "react-icons/pi";
import Link from "next/link";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "Magistratura Hazırlığı",
    description: "Məntiq, İnformatika, Xarici dil üzrə tam zəmanətli hazırlıq.",
    icon: PiStudentDuotone,
    className: "from-indigo-50/50 to-white",
    iconColor: "text-indigo-600",
    bgIconColor: "text-indigo-600/5",
    href: "#magistr",
    tags: ["Məntiq", "İnformatika", "Xarici dil"],
    tagClass: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100",
  },
  {
    title: "Xaricdə Təhsil",
    description: "Avropa və Türkiyə universitetlərinə qəbul və təqaüd imkanları.",
    icon: PiGlobeHemisphereWestDuotone,
    className: "from-cyan-50/50 to-white",
    iconColor: "text-cyan-600",
    bgIconColor: "text-cyan-600/5",
    href: "#abroad",
    tags: ["Türkiyə", "Avropa", "Təqaüd"],
    tagClass: "bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:bg-cyan-100",
  },
  {
    title: "IELTS & TOEFL",
    description: "Beynəlxalq dil sertifikatları ilə dünyanı kəşf edin.",
    icon: PiCertificateDuotone,
    className: "from-amber-50/50 to-white",
    iconColor: "text-amber-600",
    bgIconColor: "text-amber-600/5",
    href: "#language",
    tags: ["Sertifikat", "Danışıq", "Qrammatika"],
    tagClass: "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100",
  },
  {
    title: "Abituriyent",
    description: "9-11-ci siniflər üçün buraxılış və blok imtahanları.",
    icon: PiBooksDuotone,
    className: "bg-slate-900",
    iconColor: "text-white",
    bgIconColor: "text-white/5",
    href: "#school",
    tags: ["Buraxılış", "Blok", "Sınaqlar"],
    tagClass: "bg-white/10 text-white border-white/10 group-hover:bg-white/20",
    dark: true,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
           <div>
              <div className="flex items-center gap-2 mb-3">
                 <span className="w-8 h-[2px] bg-primary-600 rounded-full"></span>
                 <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Tədris Sahələri</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Sizin Üçün <span className="text-primary-600">Seçimlərimiz</span>
              </h2>
              <p className="text-slate-500 max-w-lg">
                 Gələcəyinizə gedən yolda hədəflərinizə uyğun proqramı seçin.
              </p>
           </div>
           <Link href="#all-programs" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full font-medium hover:bg-slate-100 transition-colors group">
              Bütün Proqramlar <PiArrowUpRightBold size={18} className="text-slate-400 group-hover:text-primary-600 transition-colors" />
           </Link>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative p-8 rounded-3xl border border-slate-100 transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col justify-between min-h-[220px]",
                card.dark ? "bg-slate-900 border-slate-800" : "bg-gradient-to-br",
                card.className
              )}
            >
              {/* Background Icon (Decorative) */}
              <card.icon className={cn(
                "absolute -bottom-6 -right-6 w-40 h-40 rotate-[-10deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110 opacity-20",
                card.dark ? "text-white" : card.iconColor 
              )} />
              
              {/* Top Row */}
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-5">
                    <div className={cn(
                        "p-3 rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-sm",
                         card.dark ? "bg-white/10" : "bg-white shadow-slate-200/50"
                    )}>
                       <card.icon className={cn("w-7 h-7", card.iconColor)} />
                    </div>
                    
                    <div className={cn(
                        "p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0",
                        card.dark ? "bg-white/10 text-white" : "bg-white text-slate-900 shadow-sm"
                    )}>
                        <PiArrowUpRightBold size={20} />
                    </div>
                 </div>

                 <h3 className={cn("text-2xl font-bold mb-3", card.dark ? "text-white" : "text-slate-900")}>
                    {card.title}
                 </h3>
                 
                 <p className={cn("text-sm leading-relaxed mb-6 max-w-[90%]", card.dark ? "text-slate-300" : "text-slate-600")}>
                    {card.description}
                 </p>
              </div>

              {/* Bottom (Tags) */}
              <div className="relative z-10 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {card.tags?.map(tag => (
                      <span key={tag} className={cn(
                        "text-[11px] font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-default",
                        card.tagClass
                      )}>
                         {tag}
                      </span>
                    ))}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


