import React from 'react';
import { 
  Trees, 
  Sparkles, 
  MapPin, 
  Phone, 
  UtensilsCrossed, 
  Coffee, 
  Music, 
  Flame,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface HeroProps {
  nightMode: boolean;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ nightMode, onExploreMenu }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-nature-950 text-white">
      {/* Background Image with Dynamic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/suasana-malam-lampu.png"
          alt="Suasana Malam Cafe Keboen Bogares Tegal"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
        />
        {/* Rich Gradient Layer */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${
          nightMode 
            ? 'bg-gradient-to-t from-nature-950 via-nature-950/75 to-nature-950/40' 
            : 'bg-gradient-to-t from-nature-950 via-nature-950/70 to-nature-900/40'
        }`} />
        
        {/* Animated Bokeh / Fairy Lights Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-3 h-3 rounded-full bg-amber-300 animate-twinkle shadow-[0_0_15px_#fde047]"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-amber-400 animate-twinkle-delayed shadow-[0_0_20px_#fbbf24]"></div>
          <div className="absolute top-1/5 right-1/3 w-2.5 h-2.5 rounded-full bg-amber-200 animate-twinkle shadow-[0_0_12px_#fef08a]"></div>
          <div className="absolute top-1/2 left-1/3 w-3.5 h-3.5 rounded-full bg-amber-300 animate-twinkle-delayed shadow-[0_0_18px_#fde047]"></div>
          <div className="absolute top-2/3 right-1/5 w-2 h-2 rounded-full bg-amber-100 animate-twinkle shadow-[0_0_10px_#ffffff]"></div>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nature-900/80 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg animate-float">
          <Trees className="w-4 h-4 text-emerald-400" />
          <span>Kafe Bernuansa Perkebunan • Bogares Lor, Tegal</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl drop-shadow-md">
          Ngopi Syahdu di Bawah Rimbunnya{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-300 italic">
            Kebun Jambu Bogares
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-3xl mb-10 leading-relaxed font-light drop-shadow">
          Nikmati kesejukan udara terbuka di antara pepohonan hijau, saung segitiga bambu rustic, 
          hangatnya tradisi <strong>Teh Poci Tegal</strong>, dan gemerlap lampu malam yang estetik.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-wood-950 font-bold text-base shadow-xl shadow-amber-900/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>Lihat Daftar Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cafe%20Keboen,%20saya%20ingin%20booking%20tempat/saung%20untuk%20nongkrong`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-base border border-emerald-400/40 backdrop-blur-md shadow-lg shadow-emerald-950/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5" />
            <span>Reservasi Saung via WA</span>
          </a>

          <a
            href="#lokasi"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Petunjuk Lokasi</span>
          </a>
        </div>

        {/* Quick Highlights / Feature Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4 border-t border-white/10">
          <div className="p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Trees className="w-6 h-6 text-emerald-400 mb-1.5" />
            <span className="font-semibold text-xs sm:text-sm text-white">Area Outdoor Luas</span>
            <span className="text-[11px] text-stone-300">Asri & Dikelilingi Pohon</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Flame className="w-6 h-6 text-amber-400 mb-1.5" />
            <span className="font-semibold text-xs sm:text-sm text-white">Saung Segitiga Bambu</span>
            <span className="text-[11px] text-stone-300">Konsep Rustic Alami</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Coffee className="w-6 h-6 text-amber-300 mb-1.5" />
            <span className="font-semibold text-xs sm:text-sm text-white">Moci Khas Tegal</span>
            <span className="text-[11px] text-stone-300">Poci Tanah Liat & Gula Batu</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Music className="w-6 h-6 text-purple-400 mb-1.5" />
            <span className="font-semibold text-xs sm:text-sm text-white">Live Acoustic</span>
            <span className="text-[11px] text-stone-300">Sabtu & Minggu Malam</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-stone-300 hover:text-amber-300 transition-colors flex flex-col items-center gap-1 z-10"
        aria-label="Scroll to about"
      >
        <span className="text-[11px] tracking-widest uppercase font-medium">Jelajahi</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
