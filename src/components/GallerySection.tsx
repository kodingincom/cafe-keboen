import React, { useState } from 'react';
import { 
  Camera, 
  PlusCircle, 
  Image as ImageIcon, 
  Sparkles, 
  ZoomIn, 
  Trash2, 
  UploadCloud,
  Check,
  X
} from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
  onAddGalleryItem: (item: GalleryItem) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  galleryItems,
  onAddGalleryItem,
  onOpenLightbox
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // Form State for Adding New Photos
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'suasana' | 'kuliner' | 'event' | 'saung'>('suasana');
  const [newCaption, setNewCaption] = useState('');
  const [newBadge, setNewBadge] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: 'Semua Foto' },
    { id: 'suasana', label: '🌿 Suasana & Alam' },
    { id: 'kuliner', label: '🫖 Kuliner & Moci' },
    { id: 'event', label: '🎸 Live Music & Event' },
    { id: 'saung', label: '🏮 Saung Segitiga' },
  ];

  const filteredGallery = galleryItems.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitNewPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    const finalImage = imagePreview || imageUrl;
    if (!finalImage || !newTitle.trim()) return;

    const newItem: GalleryItem = {
      id: `gal-custom-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      image: finalImage,
      caption: newCaption.trim() || 'Foto Cafe Keboen Bogares Lor Tegal.',
      badge: newBadge.trim() || 'Foto Baru'
    };

    onAddGalleryItem(newItem);
    
    // Reset form
    setNewTitle('');
    setNewCaption('');
    setNewBadge('');
    setImageUrl('');
    setImagePreview(null);
    setIsAddModalOpen(false);
  };

  return (
    <section id="galeri" className="py-20 bg-[#faf6f0] text-wood-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nature-800 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Camera className="w-3.5 h-3.5" />
              <span>Galeri Foto & Dokumentasi</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-nature-950 mb-3">
              Momen Hangat di Cafe Keboen
            </h2>
            <p className="text-wood-700 text-sm sm:text-base">
              Setiap sudut menyimpan cerita: rimbunnya kebun jambu, saung segitiga bambu rustic, 
              kelezatan hidangan tradisional, hingga alunan musik di bawah bintang.
            </p>
          </div>

          {/* Add Image CTA for user convenience */}
          <div>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-wood-950 font-bold text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Tambah / Pratinjau Foto Baru</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-wood-200">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedFilter === f.id
                  ? 'bg-nature-900 text-amber-300 shadow-md scale-105'
                  : 'bg-white text-wood-700 hover:bg-wood-100 border border-wood-200'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-wood-500 font-medium hidden sm:inline">
            Menampilkan {filteredGallery.length} foto
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-wood-200 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-wood-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/40 transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {item.badge && (
                  <span className="absolute top-3 left-3 bg-nature-900/90 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm border border-nature-700">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-4">
                <h4 className="font-serif font-bold text-base text-wood-950 group-hover:text-nature-700 transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-wood-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add New Photo Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div 
            onClick={() => setIsAddModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-wood-200 z-10 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-wood-200 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-wood-950">Tambah Foto Galeri</h3>
                  <p className="text-xs text-wood-500">Unggah foto dari perangkat atau tautan gambar</p>
                </div>
              </div>

              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 rounded-xl text-wood-400 hover:text-wood-700 hover:bg-wood-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitNewPhoto} className="space-y-4">
              
              {/* File Upload / Image Preview */}
              <div>
                <label className="block text-xs font-bold text-wood-800 mb-1.5">
                  Foto / Gambar
                </label>
                
                {imagePreview ? (
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-wood-100 border-2 border-dashed border-nature-500 mb-2">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => { setImagePreview(null); setImageUrl(''); }}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-600 text-white shadow-md hover:bg-red-700 text-xs"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-wood-300 hover:border-nature-600 rounded-2xl cursor-pointer bg-wood-50/50 hover:bg-wood-50 transition-colors">
                    <UploadCloud className="w-8 h-8 text-nature-600 mb-2" />
                    <span className="text-xs font-bold text-wood-900">Pilih file gambar dari HP / Laptop</span>
                    <span className="text-[11px] text-wood-500 mt-0.5">PNG, JPG, JPEG, WEBP</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                )}

                {/* Alternative URL Input */}
                <div className="mt-2">
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                      setImagePreview(e.target.value);
                    }}
                    placeholder="Atau tempelkan link URL gambar di sini..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-wood-300 text-wood-900 focus:outline-none focus:ring-2 focus:ring-nature-600"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-wood-800 mb-1">
                  Judul Foto <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Contoh: Saung Baru Gazebo Malam"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-wood-300 text-xs text-wood-900 focus:outline-none focus:ring-2 focus:ring-nature-600"
                />
              </div>

              {/* Category & Badge */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-wood-800 mb-1">
                    Kategori
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-wood-300 text-xs text-wood-900 focus:outline-none focus:ring-2 focus:ring-nature-600"
                  >
                    <option value="suasana">🌿 Suasana & Alam</option>
                    <option value="kuliner">🫖 Kuliner & Moci</option>
                    <option value="event">🎸 Live Music & Event</option>
                    <option value="saung">🏮 Saung Segitiga</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-wood-800 mb-1">
                    Label Badge (Opsional)
                  </label>
                  <input
                    type="text"
                    value={newBadge}
                    onChange={(e) => setNewBadge(e.target.value)}
                    placeholder="Contoh: Spot Baru / Favorit"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-wood-300 text-xs text-wood-900 focus:outline-none focus:ring-2 focus:ring-nature-600"
                  />
                </div>
              </div>

              {/* Caption */}
              <div>
                <label className="block text-xs font-bold text-wood-800 mb-1">
                  Deskripsi / Keterangan Singkat
                </label>
                <textarea
                  rows={2}
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  placeholder="Ceritakan momen atau keunikan dari foto ini..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-wood-300 text-xs text-wood-900 focus:outline-none focus:ring-2 focus:ring-nature-600"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-wood-200">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-wood-600 hover:bg-wood-100"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  disabled={!imagePreview && !imageUrl}
                  className="px-5 py-2.5 rounded-xl bg-nature-800 hover:bg-nature-700 disabled:opacity-50 text-amber-300 font-bold text-xs shadow-md flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Tambahkan ke Galeri</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
};
