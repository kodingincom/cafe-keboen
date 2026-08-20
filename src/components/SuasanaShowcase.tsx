import React, { useState } from 'react';
import { Laptop, Wind, Sparkles, Moon, Camera, Check } from 'lucide-react';

interface SuasanaShowcaseProps {
  onOpenImageModal: (imageSrc: string, title: string, caption: string) => void;
}

export const SuasanaShowcase: React.FC<SuasanaShowcaseProps> = ({ onOpenImageModal }) => {
  const [activeTab, setActiveTab] = useState<'indoor' | 'terrace' | 'rooftop' | 'facade'>('indoor');

  const zones = {
    indoor: {
      id: 'indoor',
      title: 'Indoor AC Lounge & WFC Sanctuary',
      subtitle: 'Tenang, Dingin, Berlampu Lengkung Hangat',
      image: '/images/cocok-indoor-lounge.png',
      icon: Laptop,
      color: 'from-emerald-500 to-teal-600',
      description: 'Area indoor ber-AC dengan pencahayaan warm arch wall LED yang elegan. Dilengkapi deretan meja kayu lapang, kursi anyaman rotan ergonomis, stop kontak di tiap meja, dan WiFi kencang. Sangat cocok untuk WFC, skripsian, atau meeting bisnis.',
      tags: ['AC Dingin & Nyaman', 'Colokan Listrik Tiap Meja', 'WiFi Super Cepat', 'Suasana Tenang & Rapi']
    },
    terrace: {
      id: 'terrace',
      title: 'Outdoor Terrace "Positive Vibes"',
      subtitle: 'Teduh Berkanopi Kain & Semilir Angin',
      image: '/images/cocok-outdoor-terrace.png',
      icon: Wind,
      color: 'from-amber-500 to-orange-600',
      description: 'Area semi-outdoor yang teduh di bawah bentangan kanopi kain putih bergelombang. Dikelilingi mural tropis "Positive Vibes", lantai semen industrial berpadu kerikil, serta ceiling fans penyejuk udara.',
      tags: ['Kanopi Peneduh', 'Mural Tropis Estetik', 'Bebas Rokok / Smoking Area', 'Colokan di Bawah Meja']
    },
    rooftop: {
      id: 'rooftop',
      title: 'Santorini-Style White Arch Rooftop',
      subtitle: 'Nuansa Mediterania Modern & Minimalis',
      image: '/images/cocok-white-arch-rooftop.png',
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-600',
      description: 'Spot outdoor berkonsep Santorini dengan dinding lengkung putih berlubang ceruk, tanaman kaktus & palem hias, lantai batu split hitam, dan pergola besi minimalis yang sangat estetik untuk foto OOTD.',
      tags: ['Dinding Lengkung Putih', 'Spot Foto OOTD', 'Outdoor Terbuka', 'Estetika Mediterania']
    },
    facade: {
      id: 'facade',
      title: 'Emerald Arch Facade & Night Ambience',
      subtitle: 'Kemegahan Gerbang Lengkung Zamrud',
      image: '/images/cocok-facade-night.png',
      icon: Moon,
      color: 'from-emerald-600 to-emerald-800',
      description: 'Tampak depan kafe yang megah dengan gerbang lengkung hijau zamrud dan kisi-kisi kayu modern. Saat malam hari tiba, pendaran lampu dari jendela kaca besar menciptakan suasana hangat nan mengundang.',
      tags: ['Gerbang Lengkung Emerald', 'Pencahayaan Malam Hangat', 'Teras Kerikil & Taman', 'Instagrammable Night']
    }
  };

  const current = zones[activeTab];

  return (
    <section id="zona" className="py-20 bg-[#0a2a1f] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-900/80 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tata Ruang &amp; Suasana</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Eksplorasi 4 Zona Tempat Duduk Favorit
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base">
            Sesuaikan area duduk dengan suasana hati Anda: fokus bekerja di ruang AC dingin, santai di bawah kanopi berangin, atau berfoto di rooftop Mediterania.
          </p>
        </div>

        {/* Zone Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {(Object.keys(zones) as Array<keyof typeof zones>).map((key) => {
            const item = zones[key];
            const Icon = item.icon;
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-glow scale-105'
                    : 'bg-white/10 text-emerald-100 hover:bg-white/20 hover:text-white border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-300'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Zone Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0f3e2e]/80 rounded-3xl p-4 sm:p-8 border border-emerald-800/80 shadow-2xl backdrop-blur-md">
          
          {/* Image Container */}
          <div className="lg:col-span-7 relative group">
            <div 
              onClick={() => onOpenImageModal(current.image, current.title, current.description)}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 cursor-pointer relative aspect-[4/3] sm:aspect-[16/10]"
            >
              <img
                key={current.image}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              {/* Hover Badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5 border border-white/20 opacity-90 group-hover:opacity-100">
                <Camera className="w-3.5 h-3.5 text-amber-300" />
                <span>Klik untuk Perbesar</span>
              </div>
            </div>
          </div>

          {/* Text & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-3">
                <current.icon className="w-3.5 h-3.5" />
                <span>{current.subtitle}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                {current.title}
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {current.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-black/40 text-emerald-200 text-xs border border-emerald-700/50 font-medium"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>

            {/* Direct Action Link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#galeri"
                className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 text-sm font-bold hover:underline"
              >
                <span>Lihat Foto Selengkapnya di Galeri</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
