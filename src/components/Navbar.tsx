import React, { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  ShoppingBag
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeInfo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Suasana', href: '#suasana' },
    { name: 'Menu', href: '#menu' },
    { name: 'Live Music', href: '#live-music' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1b3b22]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3 text-white border-b border-nature-700/50' 
          : 'bg-[#1b3b22]/90 backdrop-blur-sm py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Clean Brand Name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-wood-100 p-1 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden border border-wood-300">
            <img 
              src="/images/logo.png" 
              alt="Logo Cafe Keboen" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-amber-300 transition-colors">
            Café Keboen
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-nature-100 hover:text-amber-300 hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions: Cart, Reservation */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart / Order Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-wood-950 font-bold transition-transform hover:scale-105 shadow-md flex items-center justify-center"
            aria-label="Keranjang Pesanan"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-nature-900 animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Direct WA Booking Button */}
          <a
            href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cafe%20Keboen,%20saya%20ingin%20reservasi%20saung/meja%20untuk%20nongkrong`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:shadow-glow-green"
          >
            <Phone className="w-4 h-4" />
            <span>Reservasi Saung</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-nature-950/95 border-b border-nature-800 px-4 pt-3 pb-6 space-y-2 mt-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-nature-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-nature-100 hover:bg-nature-800 hover:text-amber-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${CAFE_INFO.contact.whatsapp}?text=Halo%20Cafe%20Keboen,%20saya%20mau%20tanya%20menu%20dan%20reservasi`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Chat Reservasi WhatsApp ({CAFE_INFO.contact.whatsappDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
