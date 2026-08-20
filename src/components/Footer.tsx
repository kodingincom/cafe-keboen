import React from 'react';
import { MapPin, Phone, Clock, Heart, Coffee } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08251b] text-white pt-16 pb-12 border-t border-emerald-900 relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-amber-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center border border-emerald-400/30 shadow-md">
                <img 
                  src="/images/logo.svg" 
                  alt="Logo Cocok Coffee & Chill" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-none">
                  COCOK
                </span>
                <span className="text-xs font-serif italic text-amber-300 tracking-wider">
                  Coffee &amp; Chill • Tegal
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-md">
              Tempat nongkrong dan WFC modern minimalis di Jl. Cik Ditiro, Dukuhturi, Tegal. 
              Menyajikan kopi pilihan, aneka rice bowl &amp; snack lezat dengan suasana indoor AC berlampu lengkung hangat, 
              outdoor terrace 'Positive Vibes', dan rooftop Mediterania.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-stone-950 text-emerald-200 transition-all flex items-center justify-center border border-white/10"
                aria-label="Instagram Cocok Coffee"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-white text-emerald-200 transition-all flex items-center justify-center border border-white/10"
                aria-label="WhatsApp Cocok Coffee"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base text-amber-300">Navigasi Halaman</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">Tentang Kami</a></li>
              <li><a href="#zona" className="hover:text-amber-300 transition-colors">Pilihan Zona Tempat Duduk</a></li>
              <li><a href="#menu" className="hover:text-amber-300 transition-colors">Daftar Menu &amp; Kuliner</a></li>
              <li><a href="#galeri" className="hover:text-amber-300 transition-colors">Galeri Foto</a></li>
              <li><a href="#fasilitas" className="hover:text-amber-300 transition-colors">Fasilitas WFC &amp; Hangout</a></li>
              <li><a href="#lokasi" className="hover:text-amber-300 transition-colors">Lokasi &amp; Jam Operasional</a></li>
            </ul>
          </div>

          {/* Col 3: Hours & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-base text-amber-300">Jam Operasional &amp; Alamat</h4>
            
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-emerald-100">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Buka Setiap Hari:</span>
                  <span>{CAFE_INFO.hours.weekday}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {CAFE_INFO.location.address}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cocok%20Coffee%20%26%20Chill,%20saya%20mau%20tanya%20reservasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat WhatsApp ({CAFE_INFO.contact.whatsappDisplay})</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
          <p>© {new Date().getFullYear()} Cocok Coffee &amp; Chill Tegal. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 text-emerald-200">
            <span>We Serve With</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>in Tegal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
