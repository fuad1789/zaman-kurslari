"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-4 pb-12 lg:pt-8 lg:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-secondary-600 text-sm font-semibold mb-6 border border-primary-100">
              <MapPin size={14} />
              <span>Nizami metrosu çıxışı</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Gələcəyinizi{" "}
              <span className="relative inline-block text-primary-600">
                Zamanında
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-secondary-400 opacity-50"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              Planlayın.
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Magistratura, Xaricdə Təhsil və Abituriyent hazırlığı üzrə 18 illik
              peşəkar təcrübə ilə hədəflərinizə daha yaxınsınız.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#programs"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-200"
              >
                Tədris Proqramları
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#trial"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-all"
              >
                Sınaq Dərsi
              </Link>
            </div>
          </motion.div>

          {/* Visual Grid */}
          <div className="relative h-[450px] lg:h-[550px] w-full mt-10 lg:mt-0 p-4">
             {/* Decorative Background Elements */}
             <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:24px_24px] opacity-50 rounded-full" />
             </div>

            <div className="grid grid-cols-2 gap-4 h-full relative z-10">
              {/* Image 1: Older Students (Main) */}
              <div className="col-span-1 h-full relative group">
                 <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-primary-100">
                     <Image 
                       src="/İMG/student image.jfif" 
                       alt="Tələbələr" 
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                 </div>
                 
                 {/* Badge 1 - Positioned relative to the container, overlapping the image */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/50 flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Qəbul Nəticəsi</p>
                        <p className="text-lg font-bold text-slate-900">98%</p>
                    </div>
                 </div>
              </div>
              
              <div className="col-span-1 flex flex-col gap-4 h-full pt-8">
                {/* Image 2: Study Materials */}
                <div className="flex-1 rounded-2xl overflow-hidden relative group shadow-lg">
                   <Image 
                     src="/İMG/study materials.jfif" 
                     alt="Tədris materialları" 
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
                
                {/* Image 3: Modern Class */}
                <div className="flex-1 relative group">
                   <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
                       <Image 
                         src="/İMG/modern class.jpg" 
                         alt="Müasir sinif otaqları" 
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors" />
                   </div>
                   
                    {/* Badge 2 - Positioned OUTSIDE the overflow-hidden area */}
                    <div className="absolute -top-6 -right-2 p-3 bg-white shadow-xl rounded-xl border border-slate-100 flex items-center gap-2 rotate-3 z-10 whitespace-nowrap">
                        <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">ZK</div>
                             <div className="w-8 h-8 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-primary-600"><Users size={14} /></div>
                        </div>
                        <span className="text-xs font-bold text-slate-700 pr-1">Peşəkar<br/>Komanda</span>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Absolute accent shapes */}
            <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 bg-secondary-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -z-10 top-0 -left-12 w-48 h-48 bg-primary-200 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}



