"use client";

import Link from "next/link";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/994704378683?text=Salam,%20kurslar%20haqqında%20məlumat%20almaq%20istəyirəm."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 group"
    >
      <PiWhatsappLogoDuotone size={28} className="text-white" />
      <span className="font-semibold hidden md:block">Bizə yazın</span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping -z-10"></span>
    </Link>
  );
}
