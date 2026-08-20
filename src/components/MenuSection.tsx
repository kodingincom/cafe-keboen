import React, { useState, useMemo } from 'react';
import { 
  UtensilsCrossed, 
  Search, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Sparkles, 
  Coffee
} from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem, CartItem } from '../types';

interface MenuSectionProps {
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onOpenCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'Semua Menu', icon: '🍽️' },
    { id: 'kopi', name: 'Kopi Signature', icon: '☕' },
    { id: 'makanan-berat', name: 'Rice Bowls & Makanan', icon: '🍛' },
    { id: 'camilan', name: 'Snacks & Platter', icon: '🍟' },
    { id: 'minuman-segar', name: 'Non-Coffee & Segar', icon: '🍹' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getItemQuantity = (itemId: string) => {
    const found = cart.find((c) => c.menuItem.id === itemId);
    return found ? found.quantity : 0;
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalCartAmount = cart.reduce((acc, curr) => acc + (curr.menuItem.price * curr.quantity), 0);

  return (
    <section id="menu" className="py-20 bg-[#f7f5ef] text-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0f3e2e] text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-400" />
            <span>Daftar Menu &amp; Kuliner</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2a1f] mb-4">
            Menu Spesial Cocok Coffee &amp; Chill
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Diracik dengan cinta (<em>"We Serve With Love"</em>): mulai dari Kopi Susu Gula Aren creamy, 
            aneka Rice Bowl gurih, Tumpeng Mini, Pisang Aroma cokelat lumer, hingga Combo Platter komplit.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari menu (Kopi Susu, Rice Bowl, Pisang Aroma)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm text-sm"
            />
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-600 bg-stone-100 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0f3e2e] text-amber-300 shadow-md shadow-emerald-950/20 scale-105 border border-emerald-600/40'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto">
            <UtensilsCrossed className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h4 className="font-bold text-stone-900 text-lg mb-1">Menu Tidak Ditemukan</h4>
            <p className="text-stone-500 text-sm mb-4">Coba cari dengan kata kunci lain atau pilih kategori lain.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-[#0f3e2e] text-amber-300 text-xs font-bold hover:bg-emerald-800"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const qty = getItemQuantity(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Item Image (if available) or Graphic Header */}
                    {item.image ? (
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {item.tag && (
                          <span className="absolute top-2.5 right-2.5 px-3 py-1 rounded-xl text-[11px] font-extrabold bg-amber-500 text-stone-950 shadow-md">
                            ★ {item.tag}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="p-4 pb-0 flex justify-between items-start">
                        {item.tag ? (
                          <span className="inline-block px-3 py-1 rounded-xl text-[11px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                            ★ {item.tag}
                          </span>
                        ) : (
                          <span className="text-xs text-stone-400 font-mono uppercase tracking-wider">
                            {item.category.replace('-', ' ')}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Text Details */}
                    <div className="p-4 sm:p-5">
                      <div className="flex justify-between items-start gap-2 mb-1.5">
                        <h4 className="font-display font-bold text-base sm:text-lg text-stone-950 group-hover:text-emerald-700 transition-colors leading-snug">
                          {item.name}
                        </h4>
                      </div>
                      
                      <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-3">
                        {item.description}
                      </p>

                      <div className="text-emerald-800 font-extrabold text-base sm:text-lg">
                        Rp {item.price.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Actions / Add to Cart */}
                  <div className="p-4 pt-0 border-t border-stone-100 flex items-center justify-between">
                    {qty === 0 ? (
                      <button
                        onClick={() => onAddToCart(item)}
                        className="w-full py-2.5 px-3 rounded-2xl bg-[#0f3e2e] hover:bg-emerald-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Plus className="w-3.5 h-3.5 text-amber-300" />
                        <span>Pilih Menu</span>
                      </button>
                    ) : (
                      <div className="w-full flex items-center justify-between bg-stone-100 rounded-2xl p-1 border border-stone-300">
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="w-8 h-8 rounded-xl bg-white text-stone-900 font-bold hover:bg-red-50 hover:text-red-600 transition-colors flex items-center justify-center text-xs shadow-sm"
                          aria-label="Kurangi"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-sm text-stone-950 px-2">
                          {qty} Porsi
                        </span>
                        <button
                          onClick={() => onAddToCart(item)}
                          className="w-8 h-8 rounded-xl bg-[#0f3e2e] text-amber-300 font-bold hover:bg-emerald-800 transition-colors flex items-center justify-center text-xs shadow-sm"
                          aria-label="Tambah"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Floating Bottom Cart Bar */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-2xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#0a2a1f] text-white rounded-3xl p-4 shadow-2xl border-2 border-amber-400 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0a2a1f]">
                  {totalCartCount}
                </span>
              </div>
              <div>
                <p className="text-xs text-amber-300 font-semibold">{totalCartCount} Menu Dipilih</p>
                <p className="text-lg font-extrabold text-white">
                  Rp {totalCartAmount.toLocaleString('id-ID')}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCart}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Lihat Pesanan &amp; Kirim WA</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
