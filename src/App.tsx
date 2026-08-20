import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SuasanaShowcase } from './components/SuasanaShowcase';
import { MenuSection } from './components/MenuSection';
import { WFCExperienceSection } from './components/WFCExperienceSection';
import { GallerySection } from './components/GallerySection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { LightboxModal } from './components/LightboxModal';
import { CartItem, MenuItem, GalleryItem } from './types';
import { INITIAL_GALLERY } from './data/galleryData';

export function App() {
  // State Management
  const [cart, setCart] = useState<CartItem[]>([]);
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Cart Handlers
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.menuItem.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.menuItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.menuItem.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((c) =>
          c.menuItem.id === itemId ? { ...c, quantity: c.quantity - 1 } : c
        );
      }
      return prev.filter((c) => c.menuItem.id !== itemId);
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Gallery Handlers
  const handleAddGalleryItem = (newItem: GalleryItem) => {
    setGalleryList((prev) => [newItem, ...prev]);
  };

  const handleOpenImageDirect = (imageSrc: string, title: string, caption: string) => {
    setLightboxItem({
      id: `temp-${Date.now()}`,
      title,
      category: 'suasana',
      image: imageSrc,
      caption,
      badge: 'Pratinjau'
    });
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-stone-900">
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
        />

        {/* 2. About Section: Story of Cocok Coffee & Multi-Zone Concept */}
        <About />

        {/* 3. Zone Showcase: Interactive 4 Seating Zones */}
        <SuasanaShowcase
          onOpenImageModal={handleOpenImageDirect}
        />

        {/* 4. Menu & Ordering Simulation Section */}
        <MenuSection
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onOpenCart={() => setIsOrderDrawerOpen(true)}
        />

        {/* 5. WFC & Indoor AC Experience Spotlight */}
        <WFCExperienceSection
          onOpenImageModal={handleOpenImageDirect}
        />

        {/* 6. Comprehensive Gallery & New Image Addition Tool */}
        <GallerySection
          galleryItems={galleryList}
          onAddGalleryItem={handleAddGalleryItem}
          onOpenLightbox={(item) => setLightboxItem(item)}
        />

        {/* 7. Facilities & Group Gathering */}
        <FacilitiesSection />

        {/* 8. Visitor Testimonials */}
        <TestimonialsSection />

        {/* 9. Interactive Map, Operating Hours & Directions */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Order / Reservation Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        currentItem={lightboxItem}
        items={galleryList}
        onClose={() => setLightboxItem(null)}
        onSelect={(item) => setLightboxItem(item)}
      />
    </div>
  );
}

export default App;
