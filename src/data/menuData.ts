import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Teh & Khas Tegal
  {
    id: 'm-teh-poci',
    name: 'Teh Poci Asli Tegal (1 Poci + Gula Batu)',
    category: 'teh-khas',
    price: 15000,
    description: 'Teh melati wangi, panas, sepet, legi, dan kental (WASGITEL) disajikan dengan poci gerabah tanah liat dan gula batu asli.',
    image: '/images/teh-poci-tegal.png',
    tag: 'Wajib Coba',
    isAvailable: true
  },
  {
    id: 'm-teh-poci-komplit',
    name: 'Paket Moci Komplit (Teh Poci + 1 Porsi Mendoan)',
    category: 'teh-khas',
    price: 28000,
    description: 'Kombinasi klasik nongkrong Tegal: 1 set poci teh wangi gula batu + seporsi tempe mendoan hangat sambal kecap rawit.',
    image: '/images/hidangan-meja-lengkap.png',
    tag: 'Best Seller',
    isAvailable: true
  },
  {
    id: 'm-wedang-jahe-rempah',
    name: 'Wedang Jahe Susu Rempah Kebun',
    category: 'teh-khas',
    price: 14000,
    description: 'Minuman jahe geprek hangat dengan rempah cengkeh, kayu manis, dan susu kental manis penikmat udara malam kebun.',
    isAvailable: true
  },
  {
    id: 'm-wedang-uwuh',
    name: 'Wedang Uwuh Bogares',
    category: 'teh-khas',
    price: 13000,
    description: 'Racikan herbal tradisional kaya khasiat dengan secang, jahe, daun pala, kapulaga, dan gula batu.',
    isAvailable: true
  },

  // Kopi Pilihan
  {
    id: 'm-kopi-jos',
    name: 'Kopi Jos Arang Membara',
    category: 'kopi',
    price: 12000,
    description: 'Kopi hitam tubruk khas yang dicelupkan arang kayu membara alami, menghasilkan aroma smoky dan sensasi unik.',
    tag: 'Favorit',
    isAvailable: true
  },
  {
    id: 'm-kopi-klotok',
    name: 'Kopi Klotok Tradisional',
    category: 'kopi',
    price: 10000,
    description: 'Kopi tubruk yang dimasak bersama air dan gula di atas api hingga berbuih pekat khas racikan pedesaan.',
    isAvailable: true
  },
  {
    id: 'm-kopi-susu-gula-aren',
    name: 'Kopi Susu Keboen (Gula Aren)',
    category: 'kopi',
    price: 18000,
    description: 'Espresso robusta & arabika blend dipadu susu creamy dan manis legitnya gula aren organik.',
    tag: 'Best Seller',
    isAvailable: true
  },
  {
    id: 'm-kopi-v60',
    name: 'Manual Brew V60 Single Origin',
    category: 'kopi',
    price: 18000,
    description: 'Seduhan kopi filter manual dengan biji kopi pilihan nusantara berkarakter floral & fruity.',
    isAvailable: true
  },

  // Makanan Berat
  {
    id: 'm-nasgor-spesial',
    name: 'Nasi Goreng Spesial Cafe Keboen',
    category: 'makanan-berat',
    price: 22000,
    description: 'Nasi goreng racikan bumbu khas dengan suwiran ayam, telur, kerupuk renyah, irisan tomat dan mentimun segar.',
    image: '/images/nasi-goreng-spesial.png',
    tag: 'Chef Choice',
    isAvailable: true
  },
  {
    id: 'm-nasi-ayam-bakar',
    name: 'Nasi Ayam Bakar Madu + Lalapan & Sambal',
    category: 'makanan-berat',
    price: 26000,
    description: 'Ayam potong pilihan dibakar bumbu kecap manis gurih meresap, disajikan dengan nasi hangat, lalapan segar & sambal terasi teruji.',
    image: '/images/hidangan-meja-lengkap.png',
    tag: 'Best Seller',
    isAvailable: true
  },
  {
    id: 'm-nasi-bakar-tongkol',
    name: 'Nasi Bakar Tongkol Kemangi Pedas',
    category: 'makanan-berat',
    price: 20000,
    description: 'Nasi gurih dibungkus daun pisang dan dibakar hangat, berisikan suwiran tongkol pedas wangi kemangi.',
    isAvailable: true
  },
  {
    id: 'm-mie-godhog-jawa',
    name: 'Mie Godhog / Goreng Jawa Keboen',
    category: 'makanan-berat',
    price: 18000,
    description: 'Mie kuning tradisional kuah nyemek gurih dengan telur orak-arik, kubis, sawi hijau, dan taburan bawang goreng.',
    isAvailable: true
  },

  // Camilan Khas & Snack
  {
    id: 'm-tempe-mendoan',
    name: 'Tempe Mendoan Hangat Sambal Kecap Rawit',
    category: 'camilan',
    price: 14000,
    description: 'Tempe berbalut adonan tepung daun bawang gurih lembut, digoreng dadakan dan disajikan dengan sambal kecap pedas manis.',
    image: '/images/hidangan-meja-lengkap.png',
    tag: 'Wajib Pesan',
    isAvailable: true
  },
  {
    id: 'm-pisang-keju-coklat',
    name: 'Pisang Goreng Keju Cokelat Krispi',
    category: 'camilan',
    price: 16000,
    description: 'Pisang kepok manis renyah dengan limpahan parutan keju cheddar, taburan meses cokelat, dan krimer kental manis.',
    image: '/images/hidangan-meja-lengkap.png',
    tag: 'Favorit',
    isAvailable: true
  },
  {
    id: 'm-tahu-pletok',
    name: 'Tahu Pletok / Tahu Aci Khas Tegal',
    category: 'camilan',
    price: 13000,
    description: 'Tahu kuning gurih dengan adonan tepung kanji aci kenyal renyah, sangat nikmat dicocol cabe rawit hijau.',
    tag: 'Khas Tegal',
    isAvailable: true
  },
  {
    id: 'm-french-fries',
    name: 'Kentang Goreng Krispi (French Fries)',
    category: 'camilan',
    price: 15000,
    description: 'Kentang potong crinkle cut digoreng keemasan dengan saus sambal dan mayones.',
    isAvailable: true
  },
  {
    id: 'm-cireng-rujak',
    name: 'Cireng Krispi Bumbu Rujak Pedas',
    category: 'camilan',
    price: 13000,
    description: 'Aci digoreng renyah di luar kenyal di dalam, disajikan dengan saus cocolan gula aren pedas asam segar.',
    isAvailable: true
  },

  // Minuman Segar
  {
    id: 'm-squash-jambu-madu',
    name: 'Signature Jambu Madu Deli Sparkler',
    category: 'minuman-segar',
    price: 18000,
    description: 'Minuman mocktail segar terinspirasi dari kebun jambu madu Bogares dengan sentuhan soda dingin dan irisan lemon mint.',
    tag: 'Signature Keboen',
    isAvailable: true
  },
  {
    id: 'm-es-lemon-tea',
    name: 'Fresh Iced Lemon Tea Keboen',
    category: 'minuman-segar',
    price: 12000,
    description: 'Teh melati dingin dengan perasan lemon asli yang menyegarkan dahaga sore hari.',
    isAvailable: true
  },
  {
    id: 'm-matcha-latte',
    name: 'Iced Matcha Green Tea Latte',
    category: 'minuman-segar',
    price: 18000,
    description: 'Teh hijau Jepang dengan susu segar dingin dan kelembutan rasa manis yang pas.',
    isAvailable: true
  },
  {
    id: 'm-es-jeruk-peras',
    name: 'Es Jeruk Peras Murni',
    category: 'minuman-segar',
    price: 10000,
    description: 'Perasan jeruk segar asli dengan es batu kristal dan pemanis alami.',
    isAvailable: true
  }
];
