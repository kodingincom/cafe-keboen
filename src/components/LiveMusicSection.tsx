import React from 'react';
import { Music, Calendar, Clock, Mic2, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface LiveMusicSectionProps {
  onOpenImageModal: (imageSrc: string, title: string, caption: string) => void;
}

export const LiveMusicSection: React.FC<LiveMusicSectionProps> = ({ onOpenImageModal }) => {
  return (
    <section id="live-music" className="py-20 bg-nature-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Stage Details */}
          <div className="lg:col-span-7 relative group">
            <div 
              onClick={() => onOpenImageModal(
                '/images/live-music-akustik.png',
                'Live Acoustic Music di Panggung Bambu Cafe Keboen',
                'Penampilan musisi akustik lokal di panggung saung bambu beratap rumbia setiap akhir pekan.'
              )}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 cursor-pointer relative"
            >
              <img
                src="/images/live-music-akustik.png"
                alt="Live Music Akustik Cafe Keboen Tegal"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
                <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <p className="text-xs text-amber-300 font-bold flex items-center gap-1.5">
                    <Music className="w-3.5 h-3.5" />
                    Panggung Saung Bambu Rumbia
                  </p>
                  <p className="text-[11px] text-stone-300">Live Acoustic • Pop, Indie & Classic Hits</p>
                </div>

                <span className="bg-purple-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-purple-400">
                  Weekend Special
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Music Narrative & Schedule */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-400/30">
                <Mic2 className="w-3.5 h-3.5" />
                <span>Hiburan Akhir Pekan</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Alunan Akustik Syahdu di Bawah Bintang
              </h2>

              <p className="text-nature-200 text-sm sm:text-base leading-relaxed">
                Habiskan malam akhir pekan Anda di Cafe Keboen ditemani alunan musik akustik yang hangat. 
                Duduk santai di saung segitiga atau meja kayu terbuka, nikmati teh poci panas, 
                dan bernyanyi bersama teman dan keluarga.
              </p>
            </div>

            {/* Schedule Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Jadwal Reguler</h4>
                  <p className="text-xs text-nature-200">Setiap Sabtu Malam & Minggu Malam</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0 border border-purple-400/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Waktu Tampil</h4>
                  <p className="text-xs text-nature-200">Pukul 19.30 - 23.00 WIB</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Bebas Request Lagu & Jamming</h4>
                  <p className="text-xs text-nature-200">Pengunjung dapat meminta lagu favorit atau ikut bernyanyi di panggung</p>
                </div>
              </div>
            </div>

            {/* WA CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cafe%20Keboen,%20saya%20mau%20tanya%20jadwal%20live%20music%20dan%20booking%20tempat%20dekat%20panggung`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-950/40 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya Info Live Music & Booking Saung</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
