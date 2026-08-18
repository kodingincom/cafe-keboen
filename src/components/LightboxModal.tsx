import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  currentItem: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentItem,
  items,
  onClose,
  onSelect
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentItem) handleNext();
      if (e.key === 'ArrowLeft' && currentItem) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentItem, items]);

  if (!currentItem) return null;

  const currentIndex = items.findIndex((i) => i.id === currentItem.id);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]); // loop back
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]); // loop to end
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200">
      {/* Dark Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full bg-nature-950 rounded-3xl overflow-hidden shadow-2xl border border-white/15 flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-black/40 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            {currentItem.badge && (
              <span className="bg-amber-500 text-wood-950 text-xs font-extrabold px-2.5 py-0.5 rounded-md">
                {currentItem.badge}
              </span>
            )}
            <span className="text-xs text-stone-400 font-mono">
              Foto {currentIndex + 1} dari {items.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Image with Navigation Arrows */}
        <div className="relative flex-1 bg-black/60 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
          
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[65vh] max-w-full object-contain p-2 select-none"
          />

          {/* Prev Button */}
          {items.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110 shadow-lg"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {items.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110 shadow-lg"
              aria-label="Berikutnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Details Bar */}
        <div className="p-4 sm:p-6 bg-nature-950 text-white border-t border-white/10">
          <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-1.5">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-nature-200 leading-relaxed max-w-3xl">
            {currentItem.caption}
          </p>
        </div>

      </div>
    </div>
  );
};
