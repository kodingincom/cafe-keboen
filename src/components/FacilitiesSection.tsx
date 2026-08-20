import React from 'react';
import { 
  Wifi, 
  Car, 
  Zap, 
  Sparkles, 
  HeartHandshake, 
  Camera, 
  Compass, 
  Laptop, 
  Wind,
  Home
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: Laptop,
      title: 'Indoor AC & WFC Sanctuary',
      desc: 'Ruangan dingin ber-AC dengan meja ergonomis dan suasana kondusif untuk bekerja, belajar, maupun rapat.'
    },
    {
      icon: Zap,
      title: 'Stop Kontak di Setiap Meja',
      desc: 'Tersedia colokan listrik di area indoor maupun di bawah bangku outdoor terrace untuk mengisi daya gadget Anda.'
    },
    {
      icon: Wifi,
      title: 'Free Wi-Fi Berkecepatan Tinggi',
      desc: 'Koneksi internet stabil dan kencang untuk meeting online, upload tugas, streaming, hingga browsing.'
    },
    {
      icon: Wind,
      title: 'Outdoor Canopy "Positive Vibes"',
      desc: 'Area semi-terbuka yang sejuk berkanopi kain peneduh dan kipas angin gantung untuk hangout bebas gerah.'
    },
    {
      icon: Camera,
      title: 'Rooftop Santorini & Spot OOTD',
      desc: 'Dinding lengkung putih Mediterania dan sudut arsitektur modern minimalis yang fotogenik.'
    },
    {
      icon: Car,
      title: 'Area Parkir Luas & Aman',
      desc: 'Lahan parkir memadai untuk sepeda motor maupun mobil pengunjung dengan pengawasan rapi.'
    },
    {
      icon: Compass,
      title: 'Mushola & Toilet Bersih',
      desc: 'Fasilitas ibadah mushola terawat dan toilet higienis agar Anda tetap nyaman berlama-lama.'
    },
    {
      icon: HeartHandshake,
      title: 'Reservasi Acara & Komunitas',
      desc: 'Menerima booking untuk arisan, perayaan ulang tahun, reuni, meeting komunitas, dan workshop.'
    }
  ];

  return (
    <section id="fasilitas" className="py-20 bg-white text-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0f3e2e] text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fasilitas &amp; Kenyamanan</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2a1f] mb-4">
            Fasilitas Lengkap untuk Kenyamanan Anda
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Kami memastikan setiap kunjungan Anda menyenangkan, produktif, dan penuh kenyamanan.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#faf8f4] border border-stone-200/90 hover:border-emerald-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0f3e2e] text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-800 transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-stone-950 mb-2 group-hover:text-emerald-700 transition-colors">
                  {fac.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Event Booking Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0f3e2e] to-[#0a2a1f] text-white border border-emerald-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Ingin Mengadakan Acara, Rapat, atau Booking Tempat?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
              Kami siap melayani reservasi meja grup, meeting kantor, perayaan ulang tahun, 
              hingga gathering komunitas dengan paket menu hemat.
            </p>
          </div>

          <a
            href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cocok%20Coffee%20%26%20Chill,%20saya%20ingin%20tanya%20paket%20reservasi%20acara`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-md whitespace-nowrap hover:scale-105 transition-transform"
          >
            Konsultasi Acara via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
