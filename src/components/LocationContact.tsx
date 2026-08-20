import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  Send
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

export const LocationContact: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const open = currentHour >= CAFE_INFO.hours.openHour && currentHour < CAFE_INFO.hours.closeHour;
    setIsOpenNow(open);
  }, []);

  return (
    <section id="lokasi" className="py-20 bg-white text-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0f3e2e] text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Lokasi &amp; Kontak</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2a1f] mb-4">
            Kunjungi Cocok Coffee &amp; Chill
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Temukan kenyamanan ngopi dan nugas di kawasan strategis Dukuhturi. Mudah diakses dari Kota Tegal, Slawi, maupun Tol Adiwerna.
          </p>
        </div>

        {/* Info Grid + Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Operating Hours */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Status Card */}
            <div className="p-6 rounded-3xl bg-[#0a2a1f] text-white shadow-xl border border-emerald-900 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Status Operasional
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  isOpenNow 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40' 
                    : 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                  {isOpenNow ? 'Sedang Buka' : 'Buka Jam 10.00 WIB'}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-emerald-900 text-sm">
                <div className="flex items-center justify-between text-emerald-100">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Setiap Hari (Senin - Minggu):</span>
                  </span>
                  <span className="font-bold text-white">{CAFE_INFO.hours.weekday}</span>
                </div>
                <div className="flex items-center justify-between text-emerald-200 text-xs">
                  <span>💻 Fasilitas:</span>
                  <span className="text-amber-300 font-semibold">Indoor AC, Outdoor Canopy &amp; Rooftop</span>
                </div>
              </div>
            </div>

            {/* Address & Direct Routing */}
            <div className="p-6 rounded-3xl bg-[#faf8f4] border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#0f3e2e] text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-stone-950 mb-1">Alamat Lengkap</h4>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {CAFE_INFO.location.address}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    (Jl. Cik Ditiro, Kepandean, Dukuhturi, Tegal)
                  </p>
                </div>
              </div>

              {/* Action: Open in Google Maps */}
              <a
                href={CAFE_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#0f3e2e] hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Buka Petunjuk Arah di Google Maps</span>
              </a>
            </div>

            {/* WhatsApp Direct Chat */}
            <div className="p-6 rounded-3xl bg-emerald-950 text-white border border-emerald-800 shadow-sm flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-bold text-sm">Direct Contact WhatsApp</h4>
                </div>
                <p className="text-xs text-emerald-200">
                  Punya pertanyaan seputar reservasi tempat, booking meeting, atau pemesanan menu?
                </p>
              </div>

              <a
                href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cocok%20Coffee%20%26%20Chill,%20saya%20ingin%20tanya%20informasi%20tempat%20dan%20menu`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Chat Admin ({CAFE_INFO.contact.whatsappDisplay})</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame & Route Tips */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Map Frame */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-stone-200 bg-stone-100 flex-1 min-h-[350px] relative">
              <iframe
                title="Peta Lokasi Cocok Coffee & Chill Tegal"
                src={CAFE_INFO.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Directions Guide */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#faf8f4] border border-stone-200 text-xs">
                <span className="font-bold text-emerald-950 block mb-0.5">Dari Alun-Alun Kota Tegal:</span>
                <span className="text-stone-600">± 10-12 menit ke arah selatan menuju Jl. Cik Ditiro.</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#faf8f4] border border-stone-200 text-xs">
                <span className="font-bold text-emerald-950 block mb-0.5">Dari Exit Tol Adiwerna:</span>
                <span className="text-stone-600">± 10 menit via Jl. Raya Singkil / Dukuhturi.</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#faf8f4] border border-stone-200 text-xs">
                <span className="font-bold text-emerald-950 block mb-0.5">Dari Slawi Kota:</span>
                <span className="text-stone-600">± 15 menit perjalanan lancar ke arah utara.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
