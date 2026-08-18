import React from 'react';
import { 
  Wifi, 
  Car, 
  Zap, 
  Sparkles, 
  Music, 
  HeartHandshake, 
  Camera, 
  Compass,
  CheckCircle,
  Home
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';


export const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: Home,
      title: 'Saung Segitiga Bambu',
      desc: 'Gazebo bergaya A-frame dari bambu alami yang nyaman untuk lesehan maupun kumpul bersama teman dan keluarga.'
    },
    {
      icon: Wifi,
      title: 'Free Wi-Fi Berkecepatan Tinggi',
      desc: 'Koneksi internet lancar untuk kebutuhan kerja santai (*WFC*), browsing, streaming, hingga upload konten medsos.'
    },
    {
      icon: Music,
      title: 'Panggung Live Acoustic',
      desc: 'Panggung beratap rumbia dengan sound system jernih yang menghibur pengunjung setiap akhir pekan malam.'
    },
    {
      icon: Car,
      title: 'Area Parkir Luas & Aman',
      desc: 'Lahan parkir memadai untuk sepeda motor maupun mobil rombongan dengan petugas yang ramah.'
    },
    {
      icon: Zap,
      title: 'Stop Kontak di Setiap Saung',
      desc: 'Tersedia colokan listrik di saung untuk mengisi daya baterai smartphone maupun laptop Anda dengan tenang.'
    },
    {
      icon: Compass,
      title: 'Mushola & Toilet Bersih',
      desc: 'Fasilitas ibadah mushola terawat dan tempat wudhu yang nyaman agar Anda tetap tenang beribadah tepat waktu.'
    },
    {
      icon: Camera,
      title: 'Spot Foto Instagrammable',
      desc: 'Banyak sudut estetik mulai dari tanaman kebun jambu, lampu gantung malam hari, hingga arsitektur bambu rustic.'
    },
    {
      icon: HeartHandshake,
      title: 'Reservasi Acara & Komunitas',
      desc: 'Menerima booking untuk acara kumpul keluarga, gathering komunitas motor/mobil, arisan, hingga pesta ulang tahun.'
    }
  ];

  return (
    <section id="fasilitas" className="py-20 bg-white text-wood-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nature-800 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenyamanan Pengunjung</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-nature-950 mb-4">
            Fasilitas Lengkap untuk Kenyamanan Anda
          </h2>
          <p className="text-wood-700 text-sm sm:text-base">
            Kami mengutamakan suasana yang santai, bersih, dan ramah agar momen kumpul Anda semakin berkesan.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#faf7f2] border border-wood-200/80 hover:border-nature-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-nature-900 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-nature-800 transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-base text-wood-950 mb-2 group-hover:text-nature-700 transition-colors">
                  {fac.title}
                </h4>
                <p className="text-xs text-wood-600 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Event Booking Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-nature-900 to-nature-950 text-white border border-nature-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Ingin Mengadakan Acara atau Kumpul Komunitas?
            </h3>
            <p className="text-xs sm:text-sm text-nature-200 max-w-2xl">
              Kami siap melayani reservasi rombongan, arisan keluarga, reuni, perayaan ulang tahun, 
              hingga *meet-up* komunitas dengan paket menu hemat.
            </p>
          </div>

          <a
            href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cafe%20Keboen,%20saya%20ingin%20tanya%20paket%20reservasi%20acara%20rombongan`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-wood-950 font-bold text-xs sm:text-sm shadow-md whitespace-nowrap hover:scale-105 transition-transform"
          >
            Konsultasi Acara via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
