import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Send, 
  Clock, 
  User, 
  MapPin, 
  Coffee
} from 'lucide-react';
import { CartItem, MenuItem } from '../types';
import { CAFE_INFO } from '../data/cafeInfo';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [seatingPreference, setSeatingPreference] = useState('Indoor AC Lounge (Work/WFC Area)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, curr) => acc + (curr.menuItem.price * curr.quantity), 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    let message = `☕ *RESERVASI & SIMULASI PESANAN - COCOK COFFEE & CHILL TEGAL*\n\n`;
    message += `👤 *Nama Pemesan:* ${customerName || '-'}\n`;
    message += `📅 *Rencana Waktu Kedatangan:* ${bookingDate || 'Hari ini'}\n`;
    message += `📍 *Pilihan Zona Tempat:* ${seatingPreference}\n`;
    if (notes.trim()) {
      message += `📝 *Catatan Khusus:* ${notes}\n`;
    }
    message += `\n📋 *DAFTAR PESANAN MENU:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.menuItem.name} x${item.quantity} = Rp ${(item.menuItem.price * item.quantity).toLocaleString('id-ID')}\n`;
    });

    message += `\n💰 *ESTIMASI TOTAL:* Rp ${totalAmount.toLocaleString('id-ID')}\n\n`;
    message += `📍 Lokasi: Cocok Coffee & Chill (Jl. Cik Ditiro, Dukuhturi, Tegal)\n`;
    message += `Mohon info ketersediaan tempat & konfirmasinya ya kak. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col justify-between border-l border-stone-300 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 bg-[#0f3e2e] text-white flex items-center justify-between border-b border-emerald-900">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Simulasi Pesanan</h3>
                <p className="text-xs text-emerald-200">{totalItems} item dipilih</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Tutup Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {/* Cart Items List */}
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center mx-auto mb-3 text-stone-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-stone-900 mb-1">Pesanan Anda Masih Kosong</h4>
                <p className="text-xs text-stone-500 mb-4">
                  Pilih menu favorit Anda seperti Kopi Susu Cocok, Rice Bowl, atau Pisang Aroma untuk membuat simulasi pesanan.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-[#0f3e2e] text-amber-300 text-xs font-bold hover:bg-emerald-800"
                >
                  Pilih Menu Sekarang
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Rincian Menu</span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Kosongkan</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.menuItem.id}
                      className="p-3 bg-white rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-sm text-stone-950 truncate">
                          {item.menuItem.name}
                        </h5>
                        <p className="text-xs text-stone-500">
                          Rp {item.menuItem.price.toLocaleString('id-ID')} / porsi
                        </p>
                        <p className="text-xs font-bold text-emerald-800 mt-0.5">
                          Subtotal: Rp {(item.menuItem.price * item.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>

                      {/* Counter */}
                      <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200">
                        <button
                          onClick={() => onRemoveFromCart(item.menuItem.id)}
                          className="w-6 h-6 rounded-lg bg-white text-stone-900 font-bold hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-xs shadow-sm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1 text-stone-950">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onAddToCart(item.menuItem)}
                          className="w-6 h-6 rounded-lg bg-[#0f3e2e] text-amber-300 font-bold hover:bg-emerald-800 flex items-center justify-center text-xs shadow-sm"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reservation Form */}
                <form onSubmit={handleSendWhatsAppOrder} id="order-form" className="space-y-4 pt-4 border-t border-stone-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                    Data Reservasi &amp; Tempat
                  </span>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Nama Pemesan (Opsional)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Contoh: Sarah / Dimas"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-stone-300 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                      />
                      <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Rencana Tanggal &amp; Jam Datang
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        placeholder="Contoh: Sore ini jam 16.00 WIB"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-stone-300 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                      />
                      <Clock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Pilihan Zona Duduk
                    </label>
                    <select
                      value={seatingPreference}
                      onChange={(e) => setSeatingPreference(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-xs font-medium text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      <option value="Indoor AC Lounge (Work/WFC Area)">Indoor AC Lounge (Work / WFC Area)</option>
                      <option value="Outdoor Terrace Canopy (Positive Vibes)">Outdoor Terrace Canopy (Positive Vibes)</option>
                      <option value="Santorini-Style White Arch Rooftop">Santorini-Style White Arch Rooftop</option>
                      <option value="Area Bar / Facade Depan">Area Bar / Facade Depan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Catatan Tambahan
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={2}
                      placeholder="Contoh: Butuh meja dekat stop kontak untuk 4 orang laptopan..."
                      className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </form>
              </>
            )}

          </div>

          {/* Footer with Total & WA Submit */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-stone-300 shadow-lg space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-600 font-medium">Total Estimasi ({totalItems} item):</span>
                <span className="font-display text-xl font-extrabold text-[#0a2a1f]">
                  Rp {totalAmount.toLocaleString('id-ID')}
                </span>
              </div>

              <button
                type="submit"
                form="order-form"
                onClick={handleSendWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesanan ke WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-stone-500">
                ⚡ Pesanan akan langsung diteruskan ke WhatsApp Cocok Coffee &amp; Chill ({CAFE_INFO.contact.whatsappDisplay}).
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
