import React from 'react';
import { MapPin, Phone, Clock, Heart, Trees } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';


export const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-950 text-white pt-16 pb-12 border-t border-nature-800 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-amber-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-nature-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-wood-100 p-1 flex items-center justify-center border border-wood-300 shadow-md">
                <img 
                  src="/images/logo.png" 
                  alt="Logo Cafe Keboen Tegal" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-wide">
                  Café Keboen
                </span>
                <p className="text-xs text-amber-300 font-medium">
                  Bogares Lor • Pangkah • Kab. Tegal
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-nature-200 leading-relaxed max-w-md">
              Tempat nongkrong asri bernuansa perkebunan jambu madu di Bogares Lor, Pangkah, Tegal. 
              Menghadirkan kenyamanan saung segitiga bambu, tradisi Teh Poci gerabah gula batu, 
              serta gemerlap lampu malam yang syahdu dan hangat.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-wood-950 text-stone-200 transition-all flex items-center justify-center border border-white/10"
                aria-label="Instagram Cafe Keboen"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-white text-stone-200 transition-all flex items-center justify-center border border-white/10"
                aria-label="WhatsApp Cafe Keboen"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-amber-300">Navigasi Halaman</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-nature-200">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">Tentang Kami & Filosofi</a></li>
              <li><a href="#suasana" className="hover:text-amber-300 transition-colors">Pesona Suasana & Alam</a></li>
              <li><a href="#menu" className="hover:text-amber-300 transition-colors">Daftar Menu & Kuliner</a></li>
              <li><a href="#live-music" className="hover:text-amber-300 transition-colors">Live Music Akustik</a></li>
              <li><a href="#galeri" className="hover:text-amber-300 transition-colors">Galeri Foto</a></li>
              <li><a href="#fasilitas" className="hover:text-amber-300 transition-colors">Fasilitas & Layanan</a></li>
              <li><a href="#lokasi" className="hover:text-amber-300 transition-colors">Lokasi & Jam Buka</a></li>
            </ul>
          </div>

          {/* Col 3: Hours & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-amber-300">Jam Operasional & Alamat</h4>
            
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-nature-200">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Setiap Hari:</span>
                  <span>16.00 - 00.00 WIB</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Jl. Permata Indah, Perumahan Permata Indah, Kepatihan, Bogares Lor, Kec. Pangkah, Kab. Tegal.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cafe%20Keboen,%20saya%20mau%20tanya%20reservasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat Reservasi WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nature-400">
          <p>© {new Date().getFullYear()} Café Keboen Bogares Lor, Tegal. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 text-nature-300">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>untuk Wisata Kuliner Alam Tegal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
