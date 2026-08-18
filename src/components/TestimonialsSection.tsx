import React from 'react';
import { Star, MessageSquare, Quote, Heart, Users } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rizky Firmansyah",
      role: "Warga Slawi • Penikmat Kopi",
      rating: 5,
      comment: "Tempatnya bener-bener adem dan beda dari cafe pada umumnya di Tegal. Duduk di saung segitiganya malam-malam sambil moci teh poci gula batu dan makan mendoan anget itu nikmat banget. Lampu-lampunya cakep buat foto!",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Dian Anggraini",
      role: "Mahasiswi & Content Creator",
      rating: 5,
      comment: "Suka banget sama ambiencenya, apalagi pas weekend ada live acoustic music! Suasananya syahdu di kebun jambu. Nasi goreng spesialnya enak porsi nendang, harganya juga sangat ramah di kantong mahasiswa.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Bambang Kurniawan",
      role: "Keluarga • Kunjungan Akhir Pekan",
      rating: 5,
      comment: "Cocok banget buat bawa keluarga dan anak-anak karena areanya outdoor luas dan beralas kerikil bersih. Parkiran luas dan pelayanannya ramah. Tempat kumpul favorit keluarga kami di daerah Pangkah.",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-[#faf8f5] text-wood-950 relative overflow-hidden border-t border-wood-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nature-800 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-red-400" />
            <span>Kata Mereka yang Sudah Berkunjung</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-nature-950 mb-4">
            Cerita & Pengalaman Pengunjung
          </h2>
          <p className="text-wood-700 text-sm sm:text-base">
            Kebersamaan yang terjalin hangat di bawah rimbunnya kebun dan gemerlap lampu malam Cafe Keboen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-wood-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-wood-200 absolute top-6 right-6 group-hover:text-amber-400/40 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-wood-800 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-wood-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/60"
                />
                <div>
                  <h4 className="font-bold text-sm text-wood-950">{item.name}</h4>
                  <p className="text-[11px] text-wood-600">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
