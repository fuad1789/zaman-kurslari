"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  "2006-cı ildən fəaliyyət",
  "90% Qəbul Nəticəsi",
  "Peşəkar Mentorlar",
  "Təqaüdlü Təhsil",
  "Müasir Metodika",
  "Qəbul Zəmanəti",
];

export default function TrustStrip() {
  return (
    <div className="bg-primary-900 border-y border-primary-800 overflow-hidden py-3">
      <div className="flex select-none">
        {/* Repeating content for seamless loop */}
        <motion.div
          className="flex flex-nowrap items-center gap-12 text-white/90 text-sm font-medium uppercase tracking-wider whitespace-nowrap px-6"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
               <Star size={12} className="text-secondary-400 fill-secondary-400" />
               <span>{item}</span>
            </div>
          ))}
           {/* Duplicate for loop */}
          {items.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4">
               <Star size={12} className="text-secondary-400 fill-secondary-400" />
               <span>{item}</span>
            </div>
          ))}
           {/* Triplicate for loop safety */}
           {items.map((item, i) => (
            <div key={`dup2-${i}`} className="flex items-center gap-4">
               <Star size={12} className="text-secondary-400 fill-secondary-400" />
               <span>{item}</span>
            </div>
          ))}
           {items.map((item, i) => (
            <div key={`dup3-${i}`} className="flex items-center gap-4">
               <Star size={12} className="text-secondary-400 fill-secondary-400" />
               <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
