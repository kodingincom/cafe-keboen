import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Dimas Prasetyo",
      role: "Freelance Designer • WFC Regular",
      rating: 5,
      comment: "Tempat WFC paling pewe di Tegal! Ruang indoor AC-nya adem, lampunya estetik banget, stop kontak ada di tiap meja dan WiFi-nya kenceng. Kopi Susu Cocok-nya enak pas manisnya!",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Annisa Rahmadani",
      role: "Mahasiswi UPS Tegal",
      rating: 5,
      comment: "Suka banget sama rooftop Santorini dan outdoor canopy-nya! Spot fotonya estetik parah buat konten Instagram. Rice bowl ayam sama pisang aromanya juara, harganya bener-bener ramah di kantong.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
    },
    {
      name: "Ferry Ardiansyah",
      role: "Pegawai Swasta • Hangout Bareng Teman",
      rating: 5,
      comment: "Tempat nongkrong yang super chill di Jl. Cik Ditiro. Pelayanannya ramah sesuai mottonya 'We Serve With Love'. Parkir luas dan tempatnya bersih. Sangat direkomendasikan!",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-[#fbf9f5] text-stone-950 relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0f3e2e] text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-red-400" />
            <span>Ulasan &amp; Pengalaman Pengunjung</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2a1f] mb-4">
            Kata Mereka Tentang Cocok Coffee
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Cerita kebersamaan, produktivitas, dan momen santai di Cocok Coffee &amp; Chill Tegal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-stone-200 absolute top-6 right-6 group-hover:text-amber-400/40 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/60"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-stone-950">{item.name}</h4>
                  <p className="text-[11px] text-stone-500">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
