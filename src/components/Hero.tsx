import React from 'react';
import { 
  Coffee, 
  Sparkles, 
  MapPin, 
  Phone, 
  UtensilsCrossed, 
  Laptop, 
  Wind, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0a2a1f] text-white">
      {/* Background Image with Rich Emerald Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cocok-facade-night.png"
          alt="Cocok Coffee & Chill Tegal"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
        />
        {/* Modern Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08251b] via-[#0f3e2e]/80 to-[#0a2a1f]/50" />
        
        {/* Ambient Warm Golden Glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-amber-500/15 blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg animate-float">
          <Coffee className="w-4 h-4 text-amber-400" />
          <span>Aesthetic Daily Coffee &amp; Chill Space • Jl. Cik Ditiro, Dukuhturi</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] max-w-4xl drop-shadow-md">
          Tempat Nongkrong, Nugas, &amp; Chill{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-300">
            Paling Cocok di Tegal
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-3xl mb-10 leading-relaxed font-light drop-shadow">
          Rasakan nikmatnya kopi artisan dan kuliner lezat di <strong>Cocok Coffee &amp; Chill</strong>. 
          Pilih zona ternyaman Anda: <em>Indoor AC Lounge</em> dengan lampu lengkung estetik, 
          <em> Outdoor Canopy</em> bernuansa 'Positive Vibes', atau <em>Rooftop</em> ala Santorini.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base shadow-xl shadow-amber-950/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>Lihat Daftar Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cocok%20Coffee%20%26%20Chill,%20saya%20ingin%20reservasi%20tempat/WFC`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-base border border-emerald-400/40 backdrop-blur-md shadow-lg shadow-emerald-950/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5" />
            <span>Reservasi Meja / WFC via WA</span>
          </a>

          <a
            href="#lokasi"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Rute Lokasi</span>
          </a>
        </div>

        {/* Quick Highlights / 4 Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4 border-t border-white/15">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Laptop className="w-6 h-6 text-emerald-400 mb-1.5" />
            <span className="font-bold text-xs sm:text-sm text-white">Indoor AC Lounge</span>
            <span className="text-[11px] text-emerald-200">Adem, Tenang & WFC Ready</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Wind className="w-6 h-6 text-amber-400 mb-1.5" />
            <span className="font-bold text-xs sm:text-sm text-white">Outdoor Canopy</span>
            <span className="text-[11px] text-emerald-200">Mural "Positive Vibes"</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Sparkles className="w-6 h-6 text-cyan-300 mb-1.5" />
            <span className="font-bold text-xs sm:text-sm text-white">Rooftop Santorini</span>
            <span className="text-[11px] text-emerald-200">Dinding Lengkung Estetik</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Coffee className="w-6 h-6 text-amber-300 mb-1.5" />
            <span className="font-bold text-xs sm:text-sm text-white">Specialty & Foods</span>
            <span className="text-[11px] text-emerald-200">We Serve With Love</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-emerald-200 hover:text-amber-300 transition-colors flex flex-col items-center gap-1 z-10"
        aria-label="Scroll to about"
      >
        <span className="text-[11px] tracking-widest uppercase font-medium">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
