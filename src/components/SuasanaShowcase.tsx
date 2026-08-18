import React, { useState } from 'react';
import { Sun, Sunset, Moon, Music, Sparkles, Camera, MapPin } from 'lucide-react';

interface SuasanaShowcaseProps {
  onOpenImageModal: (imageSrc: string, title: string, caption: string) => void;
}

export const SuasanaShowcase: React.FC<SuasanaShowcaseProps> = ({ onOpenImageModal }) => {
  const [activeTab, setActiveTab] = useState<'siang' | 'senja' | 'malam' | 'music'>('malam');

  const ambiences = {
    siang: {
      id: 'siang',
      title: 'Sore di Kebun Asri',
      subtitle: 'Semilir Angin & Rindang Pepohonan Jambu',
      image: '/images/suasana-kebun-siang.png',
      icon: Sun,
      color: 'from-emerald-500 to-teal-600',
      description: 'Saat sore hari, suasana kebun sangat sejuk dengan sinar matahari yang menembus dedaunan pohon rindang. Cocok untuk ngobrol santai, mengerjakan tugas, atau beristirahat setelah seharian beraktivitas.',
      tags: ['Udara Terbuka', 'Pohon Rindang', 'Meja Kayu Alami', 'Tenang & Damai']
    },
    senja: {
      id: 'senja',
      title: 'Golden Hour & Senja Syahdu',
      subtitle: 'Gradasi Langit Sore Menjelang Malam',
      image: '/images/suasana-senja.png',
      icon: Sunset,
      color: 'from-amber-500 to-orange-600',
      description: 'Menjelang maghrib, langit Bogares berubah keemasan. Lampu-lampu gantung mulai dinyalakan perlahan, menciptakan suasana magis yang sangat fotogenik dan menenangkan jiwa.',
      tags: ['Spot Foto Estetik', 'Sunset Sky', 'Lampu Mulai Menyala', 'Momen Magis']
    },
    malam: {
      id: 'malam',
      title: 'Malam Romantis Berlampu Gantung',
      subtitle: 'Saung Segitiga Hangat & Gemerlap Fairy Lights',
      image: '/images/suasana-malam-lampu.png',
      icon: Moon,
      color: 'from-amber-400 to-amber-600',
      description: 'Daya tarik utama Cafe Keboen! Rangkaian lampu pijar hangat membentang di atas area kerikil, menyinari saung-saung segitiga bambu yang nyaman. Suasana kian akrab ditemani teh poci dan mendoan hangat hingga tengah malam.',
      tags: ['Warm Fairy Lights', 'Saung Segitiga Bambu', 'Nongkrong Malam', 'Super Cozy']
    },
    music: {
      id: 'music',
      title: 'Live Acoustic Weekend Vibes',
      subtitle: 'Panggung Bambu & Alunan Musik Akustik',
      image: '/images/live-music-akustik.png',
      icon: Music,
      color: 'from-purple-500 to-indigo-600',
      description: 'Setiap Sabtu dan Minggu malam, panggung bambu beratap rumbia Cafe Keboen menghadirkan musisi akustik lokal. Pengunjung bisa menikmati lagu favorit sambil moci atau menyumbangkan suara merdu.',
      tags: ['Live Band Akustik', 'Panggung Bambu', 'Sabtu & Minggu Malam', 'Open Request Lagu']
    }
  };

  const current = ambiences[activeTab];

  return (
    <section id="suasana" className="py-20 bg-nature-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-nature-700/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pengalaman Visual & Suasana</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Pesona Tiap Waktu di Cafe Keboen
          </h2>
          <p className="text-nature-200 text-sm sm:text-base">
            Pilih suasana untuk merasakan bagaimana kebun kami bertransformasi dari sejuknya sore hari hingga gemerlap syahdunya malam.
          </p>
        </div>

        {/* Ambience Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {(Object.keys(ambiences) as Array<keyof typeof ambiences>).map((key) => {
            const item = ambiences[key];
            const Icon = item.icon;
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-500 text-wood-950 shadow-glow scale-105'
                    : 'bg-white/10 text-stone-200 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-wood-950' : 'text-amber-300'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-nature-900/80 rounded-3xl p-4 sm:p-8 border border-nature-800 shadow-2xl backdrop-blur-md">
          
          {/* Image Container */}
          <div className="lg:col-span-7 relative group">
            <div 
              onClick={() => onOpenImageModal(current.image, current.title, current.description)}
              className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 cursor-pointer relative aspect-[4/3] sm:aspect-[16/10]"
            >
              <img
                key={current.image}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              {/* Hover Badge */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/20 opacity-90 group-hover:opacity-100">
                <Camera className="w-3.5 h-3.5 text-amber-300" />
                <span>Klik untuk Perbesar</span>
              </div>
            </div>
          </div>

          {/* Text & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-medium mb-3">
                <current.icon className="w-3.5 h-3.5" />
                <span>{current.subtitle}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                {current.title}
              </h3>
              <p className="text-nature-200 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {current.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-black/40 text-stone-300 text-xs border border-white/10 font-medium"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>

            {/* Direct Action Link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#galeri"
                className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 text-sm font-semibold hover:underline"
              >
                <span>Lihat Foto Lainnya di Galeri</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
