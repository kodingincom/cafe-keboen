import React from 'react';
import { 
  Sparkles, 
  Coffee, 
  Laptop, 
  Camera, 
  Heart,
  CheckCircle2,
  Wind
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#fbf9f5] text-stone-950 relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0f3e2e] text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Coffee className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tentang Cocok Coffee &amp; Chill</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2a1f] leading-tight mb-4">
            Ruang Temu Modern untuk Segala Suasana Hati
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Menghadirkan perpaduan estetika arsitektur lengkung modern, kenyamanan nugas bebas gerah, 
            dan keramahan sajian berdedikasi <em>"We Serve With Love"</em> di Dukuhturi, Tegal.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Primary Image: Indoor AC Lounge */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-200 transform hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src="/images/cocok-indoor-lounge.png"
                    alt="Indoor AC Lounge Cocok Coffee Tegal"
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-bold text-stone-800 flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Indoor AC Lounge &amp; Arch Lighting</span>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-[#0f3e2e] text-white shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-lg border border-amber-400/30">
                      ☕
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">We Serve With Love</h4>
                      <p className="text-xs text-emerald-200">Quality Coffee &amp; Foods</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    Setiap seduhan dan hidangan diracik dengan bahan segar pilihan untuk menemani momen nongkrong Anda.
                  </p>
                </div>
              </div>

              {/* Secondary Image: Outdoor Terrace Canopy */}
              <div className="space-y-4 pt-6">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-200 transform hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src="/images/cocok-outdoor-terrace.png"
                    alt="Outdoor Canopy Terrace Cocok Coffee"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-bold text-stone-800 flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-amber-600" />
                    <span>Outdoor Canopy "Positive Vibes"</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-md flex items-center gap-3">
                  <Camera className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-stone-900">Spot Foto Instagrammable</p>
                    <p className="text-[11px] text-stone-600">Rooftop Santorini &amp; Mural Tropis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 font-bold px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap border-2 border-white">
              <Sparkles className="w-4 h-4" />
              <span>Pilihan Hangout &amp; WFC Favorit di Tegal</span>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-emerald-700 font-bold text-xs tracking-wider uppercase">
                Konsep &amp; Filosofi
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0a2a1f] mt-1 mb-4">
                Tempat yang Didesain Khusus Agar Anda Merasa Selalu 'Cocok'
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                <strong>Cocok Coffee &amp; Chill</strong> hadir di Jl. Cik Ditiro, Dukuhturi, Tegal sebagai jawaban atas kebutuhan ruang kumpul yang fleksibel. Mulai dari mahasiswa yang butuh konsentrasi nugas, freelancer yang butuh WiFi cepat berjam-jam, hingga sahabat dan keluarga yang ingin nongkrong santai melepas penat.
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Kami menyediakan tata ruang multi-zona yang berkarakter: area indoor dingin berpendingin udara dengan dinding lengkung berpendar hangat, area outdoor berkanopi kain peneduh dengan mural tropis penyejuk mata, hingga rooftop terbuka bergaya Mediterania.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-stone-950">Kenyamanan WFC (Work From Cafe) Maksimal</h4>
                  <p className="text-xs text-stone-600">Dilengkapi stop kontak di hampir setiap meja, meja ergonomis, dan WiFi super cepat.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-stone-950">Desain Arsitektur Modern &amp; Instagrammable</h4>
                  <p className="text-xs text-stone-600">Aksen lengkung khas Eropa Mediterania, pencahayaan LED artistik, dan tanaman hijau segar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-stone-950">Pilihan Menu Lengkap &amp; Harga Bersahabat</h4>
                  <p className="text-xs text-stone-600">Mulai dari Kopi Susu Gula Aren, aneka Rice Bowl lezat, tumpeng mini, hingga combo snack platter.</p>
                </div>
              </div>
            </div>

            {/* Quick Profile Specs */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-200">
              <div className="text-center p-3 rounded-2xl bg-stone-100/90 border border-stone-200">
                <p className="font-display text-lg sm:text-xl font-bold text-emerald-900">Dukuhturi</p>
                <p className="text-[11px] text-stone-500">Jl. Cik Ditiro, Tegal</p>
              </div>
              <div className="text-center p-3 rounded-2xl bg-stone-100/90 border border-stone-200">
                <p className="font-display text-lg sm:text-xl font-bold text-emerald-900">10.00 - 23.00</p>
                <p className="text-[11px] text-stone-500">Buka Setiap Hari</p>
              </div>
              <div className="text-center p-3 rounded-2xl bg-stone-100/90 border border-stone-200">
                <p className="font-display text-lg sm:text-xl font-bold text-emerald-900">3 Zona</p>
                <p className="text-[11px] text-stone-500">Indoor, Outdoor, Rooftop</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
