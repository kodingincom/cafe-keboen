import React from 'react';
import { 
  Sparkles, 
  Leaf, 
  Moon, 
  Camera, 
  Users, 
  Heart,
  CheckCircle2
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#faf6f0] text-wood-950 relative overflow-hidden">
      {/* Background Subtle Leaf Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nature-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-200/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nature-800 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tentang Café Keboen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-nature-950 leading-tight mb-4">
            Harmoni Alam Perkebunan & Budaya Nongkrong Tegal
          </h2>
          <p className="text-wood-700 text-base sm:text-lg leading-relaxed">
            Menghadirkan kesegaran kebun jambu madu Deli Hijau ke dalam ruang temu yang santai, 
            natural, dan penuh kehangatan di Bogares Lor, Pangkah.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Primary Image: Daytime Orchard */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-wood-200 transform hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src="/images/suasana-kebun-siang.png"
                    alt="Suasana Rindang Cafe Keboen Siang Hari"
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-medium text-wood-800 flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-nature-600" />
                    <span>Area Kebun Rindang & Udara Terbuka</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-nature-900 text-white shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold font-serif text-lg border border-amber-400/30">
                      🌿
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Kebun Jambu Madu</h4>
                      <p className="text-xs text-nature-200">Deli Hijau Bogares</p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Sensasi nongkrong unik yang tidak Anda temukan di kafe urban modern biasa.
                  </p>
                </div>
              </div>

              {/* Secondary Image: Senja & Malam */}
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-wood-200 transform hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src="/images/suasana-senja.png"
                    alt="Suasana Senja Golden Hour Cafe Keboen"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-medium text-wood-800 flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5 text-amber-500" />
                    <span>Senja Romantis & Saung Segitiga</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-wood-200 shadow-md flex items-center gap-3">
                  <Camera className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-wood-900">Instagrammable Spot</p>
                    <p className="text-[11px] text-wood-600">Cocok untuk foto estetik & konten</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-amber-500 text-wood-950 font-bold px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap border-2 border-white">
              <Sparkles className="w-4 h-4" />
              <span>Daftar Kafe Pilihan Kuliner Tegal</span>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-nature-700 font-semibold text-sm tracking-wide uppercase">
                Konsep & Filosofi
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-nature-950 mt-1 mb-4">
                Bukan Sekadar Kafe, Tapi Pelarian Sejuk dari Hiruk Pikuk Kota
              </h3>
              <p className="text-wood-800 text-sm sm:text-base leading-relaxed mb-4">
                <strong>Café Keboen</strong> lahir dari kecintaan terhadap alam perkebunan yang asri di kawasan Bogares Lor, Kecamatan Pangkah. Konsep utamanya membawa suasana kebun jambu madu Deli Hijau langsung ke tengah-tengah pengalaman nongkrong Anda.
              </p>
              <p className="text-wood-700 text-sm sm:text-base leading-relaxed">
                Di sini, Anda bisa duduk santai di antara rimbunnya pepohonan, menikmati hembusan semilir angin sepoi, bercengkrama di saung bambu beratap rumbia, hingga menikmati gemerlap lampu malam yang hangat ditemani teh poci khas Tegal.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-wood-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-nature-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-nature-950">Suasana Alam 100% Terbuka & Sejuk</h4>
                  <p className="text-xs text-wood-600">Area outdoor luas beralas kerikil dan dikelilingi vegetasi hijau, bebas pengap dan sangat menyegarkan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-wood-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-nature-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-nature-950">Saung Segitiga Bambu & Nuansa Kayu Rustic</h4>
                  <p className="text-xs text-wood-600">Tempat duduk kayu dan gazebo segitiga bambu yang memberi sentuhan pedesaan estetik dan santai.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-wood-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-nature-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-nature-950">Pencahayaan Malam Cozy & Estetik</h4>
                  <p className="text-xs text-wood-600">Rangkaian lampu gantung (*warm fairy lights*) yang membuat suasana malam kian syahdu dan romantis.</p>
                </div>
              </div>
            </div>

            {/* Quick Profile Specs */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-wood-200">
              <div className="text-center p-3 rounded-xl bg-wood-100/80 border border-wood-200">
                <p className="font-serif text-lg sm:text-xl font-bold text-nature-900">Bogares</p>
                <p className="text-[11px] text-wood-600">Pangkah, Tegal</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-wood-100/80 border border-wood-200">
                <p className="font-serif text-lg sm:text-xl font-bold text-nature-900">16.00 - 00.00</p>
                <p className="text-[11px] text-wood-600">Buka Setiap Hari</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-wood-100/80 border border-wood-200">
                <p className="font-serif text-lg sm:text-xl font-bold text-nature-900">Outdoor</p>
                <p className="text-[11px] text-wood-600">& Saung Bambu</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
