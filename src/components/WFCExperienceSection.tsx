import React from 'react';
import { Laptop, Wifi, Zap, Sparkles, MessageCircle, Heart, Coffee, ShieldCheck } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface WFCExperienceSectionProps {
  onOpenImageModal: (imageSrc: string, title: string, caption: string) => void;
}

export const WFCExperienceSection: React.FC<WFCExperienceSectionProps> = ({ onOpenImageModal }) => {
  return (
    <section className="py-20 bg-[#08251b] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Indoor Lounge Details */}
          <div className="lg:col-span-7 relative group">
            <div 
              onClick={() => onOpenImageModal(
                '/images/cocok-indoor-lounge.png',
                'Indoor AC Lounge & WFC Workspace Cocok Coffee',
                'Interior ber-AC yang nyaman dengan pencahayaan warm arch wall LED, kursi rotan modern, dan colokan listrik di setiap meja.'
              )}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 cursor-pointer relative"
            >
              <img
                src="/images/cocok-indoor-lounge.png"
                alt="Indoor AC Workspace Cocok Coffee Tegal"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
                <div className="bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20">
                  <p className="text-xs text-amber-300 font-bold flex items-center gap-1.5">
                    <Laptop className="w-4 h-4" />
                    Dedicated WFC &amp; Meeting Space
                  </p>
                  <p className="text-[11px] text-stone-300">Quiet • High-Speed WiFi • Full AC Comfort</p>
                </div>

                <span className="bg-emerald-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-emerald-400">
                  WFC Approved ⭐
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: WFC Narrative & Advantages */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                <Laptop className="w-3.5 h-3.5" />
                <span>Work &amp; Chill Friendly</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Nugas &amp; Bekerja Makin Produktif Bebas Gerah
              </h2>

              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Butuh tempat tenang untuk meeting online, mengerjakan skripsi, atau menyelesaikan deadline proyek? 
                <strong> Cocok Coffee &amp; Chill</strong> menyediakan ruang ber-AC yang nyaman dengan pencahayaan hangat, 
                stop kontak di tiap meja, dan koneksi internet stabil.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Stop Kontak di Setiap Meja</h4>
                  <p className="text-xs text-emerald-200">Tidak perlu khawatir kehabisan daya baterai laptop &amp; smartphone Anda.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">High-Speed WiFi Access</h4>
                  <p className="text-xs text-emerald-200">Internet kencang dan stabil untuk upload, download, maupun video conference.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center flex-shrink-0 border border-teal-400/30">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Kopi &amp; Cemilan Mood Booster</h4>
                  <p className="text-xs text-emerald-200">Nikmati Kopi Susu Aren, Rice Bowls, atau Pisang Aroma saat rehat sejenak.</p>
                </div>
              </div>
            </div>

            {/* WA CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cocok%20Coffee%20%26%20Chill,%20saya%20mau%20tanya%20ketersediaan%20tempat%20untuk%20WFC/meeting`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-stone-950 font-bold text-sm shadow-lg shadow-emerald-950/40 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-stone-950" />
                <span>Tanya Ketersediaan Meja WFC via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
