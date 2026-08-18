export interface MenuItem {
  id: string;
  name: string;
  category: 'teh-khas' | 'kopi' | 'makanan-berat' | 'camilan' | 'minuman-segar';
  price: number;
  description: string;
  image?: string;
  tag?: string; // 'Best Seller' | 'Khas Tegal' | 'Favorit' | 'Chef Choice'
  isAvailable: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'suasana' | 'kuliner' | 'event' | 'saung';
  image: string;
  caption: string;
  badge?: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}
