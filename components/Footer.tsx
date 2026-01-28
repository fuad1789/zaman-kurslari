import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 lg:py-16 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
               <div className="bg-white p-2 rounded-lg inline-block">
                  <img src="/İMG/logo.png" alt="Zaman Education" className="h-8 w-auto object-contain" />
               </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              18 illik təcrübə ilə gələcəyinizi bizimlə planlayın. Keyfiyyətli təhsil və zəmanətli nəticələr.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-sky-500 hover:text-white transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Keçidlər</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-600"/> Tədris</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-600"/> Xaricdə Təhsil</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-600"/> Haqqımızda</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-600"/> Əlaqə</Link></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Proqramlar</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Magistratura Hazırlığı</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Abituriyent Hazırlığı</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Xaricdə Təhsil</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">IELTS & TOEFL</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sınaq İmtahanları</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Əlaqə</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                 <div className="mt-1 p-1 bg-slate-900 rounded text-primary-500">
                    <MapPin size={16} />
                 </div>
                 <span className="text-sm">Nizami metrosu çıxışı, Bakı, Azərbaycan</span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="p-1 bg-slate-900 rounded text-primary-500">
                    <Phone size={16} />
                 </div>
                 <span className="text-sm">+994 50 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="p-1 bg-slate-900 rounded text-primary-500">
                    <Mail size={16} />
                 </div>
                 <span className="text-sm">info@zaman.edu.az</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2026 Zaman Education. Bütün hüquqlar qorunur.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-400">Məxfilik siyasəti</Link>
            <Link href="#" className="hover:text-slate-400">İstifadə şərtləri</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
