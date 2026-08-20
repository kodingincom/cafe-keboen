import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // 1. Signature Coffee
  {
    id: 'm-kopsus-cocok',
    name: 'Kopi Susu Cocok (Gula Aren Creamy)',
    category: 'kopi',
    price: 18000,
    description: 'Signature coffee blend espresso dipadu susu segar creamy dan manis legitnya gula aren murni. Paling pas untuk menemani hari Anda.',
    image: '/images/cocok-snacks-bowls.png',
    tag: 'Best Seller',
    isAvailable: true
  },
  {
    id: 'm-caramel-macchiato',
    name: 'Cocok Caramel Macchiato',
    category: 'kopi',
    price: 22000,
    description: 'Perpaduan espresso arabika, susu vanilla lembut dengan lelehan saus karamel panggang gurih di atas foam lembut.',
    tag: 'Favorit',
    isAvailable: true
  },
  {
    id: 'm-americano',
    name: 'Iced Americano Classic Blend',
    category: 'kopi',
    price: 15000,
    description: 'Ekstraksi ganda biji kopi pilihan dengan karakter rasa cokelat nutty dan tingkat keasaman segar yang seimbang.',
    isAvailable: true
  },
  {
    id: 'm-hazelnut-latte',
    name: 'Iced Hazelnut Caffe Latte',
    category: 'kopi',
    price: 20000,
    description: 'Espresso kaya rasa dipadu susu segar dingin dan aroma kacang hazelnut yang harum memanjakan lidah.',
    isAvailable: true
  },
  {
    id: 'm-v60-manual',
    name: 'Manual Brew V60 Single Origin',
    category: 'kopi',
    price: 20000,
    description: 'Kopi filter seduh manual dengan pilihan beans nusantara: Aceh Gayo, Flores Bajawa, atau Toraja dengan aroma floral & clean aftertaste.',
    isAvailable: true
  },

  // 2. Non-Coffee & Refreshing Drinks
  {
    id: 'm-matcha-latte',
    name: 'Creamy Uji Matcha Latte',
    category: 'minuman-segar',
    price: 20000,
    description: 'Bubuk teh hijau matcha premium dari Jepang dipadu susu segar dingin yang lembut dan tidak enek.',
    tag: 'Favorit',
    isAvailable: true
  },
  {
    id: 'm-lychee-tea',
    name: 'Iced Lychee Tea with Real Fruit',
    category: 'minuman-segar',
    price: 16000,
    description: 'Seduhan teh melati wangi dingin dengan sirup leci segar dan topping buah leci utuh manis juicy.',
    tag: 'Segar Banget',
    isAvailable: true
  },
  {
    id: 'm-chocolate-fudge',
    name: 'Signature Choco Fudge Chill',
    category: 'minuman-segar',
    price: 20000,
    description: 'Cokelat dark pekat kaya rasa dipadu susu creamy dingin dan sirup cokelat drizzle lezat.',
    isAvailable: true
  },
  {
    id: 'm-berry-sparkler',
    name: 'Strawberry Citrus Sparkler',
    category: 'minuman-segar',
    price: 18000,
    description: 'Mocktail soda dingin dengan sirup stroberi segar, bulir buah asli, daun mint, dan perasan lemon.',
    isAvailable: true
  },

  // 3. Makanan Berat (Main Courses & Bowls)
  {
    id: 'm-tumpeng-mini',
    name: 'Nasi Tumpeng Mini Ayam Sambal Bawang',
    category: 'makanan-berat',
    price: 26000,
    description: 'Nasi gurih dibentuk kerucut disajikan dengan ayam goreng renyah bumbu ungkep, sambal bawang pedas nendang, telur dadar iris, tempe tahu, dan urap sayur segar.',
    image: '/images/cocok-food-feast.png',
    tag: 'Signature Dish',
    isAvailable: true
  },
  {
    id: 'm-rice-bowl-chicken',
    name: 'Rice Bowl Ayam Gurih Telur Orak-Arik',
    category: 'makanan-berat',
    price: 24000,
    description: 'Nasi pulen hangat dengan potongan daging ayam bumbu gurih meresap, telur scrambled egg lembut, selada, dan irisan tomat segar.',
    image: '/images/cocok-snacks-bowls.png',
    tag: 'Best Seller',
    isAvailable: true
  },
  {
    id: 'm-chicken-karage-rice',
    name: 'Nasi Ayam Crispy Karage Saus Spesial',
    category: 'makanan-berat',
    price: 25000,
    description: 'Ayam fillet renyah tepung khas Jepang disajikan bersama nasi bumbu gurih, saus cocolan spesial, dan lalapan segar.',
    image: '/images/cocok-food-feast.png',
    tag: 'Chef Choice',
    isAvailable: true
  },
  {
    id: 'm-nasgor-cocok',
    name: 'Nasi Goreng Spesial Cocok & Chill',
    category: 'makanan-berat',
    price: 22000,
    description: 'Nasi goreng bumbu racikan khas dengan suwiran ayam, bakso, telur mata sapi, kerupuk renyah, dan acar segar.',
    isAvailable: true
  },
  {
    id: 'm-spaghetti-bolognese',
    name: 'Spaghetti Beef Bolognese',
    category: 'makanan-berat',
    price: 24000,
    description: 'Pasta al dente disiram saus daging sapi cincang tomat gurih dengan taburan keju parmesan dan oregano.',
    isAvailable: true
  },

  // 4. Snacks, Platters & Desserts
  {
    id: 'm-combo-platter',
    name: 'Cocok Combo Platter (Share 2-3 Org)',
    category: 'camilan',
    price: 28000,
    description: 'Kombinasi snack komplit: Kentang goreng krispi crinkle, sosis bratwurst bakar, chicken nugget, dan samosa renyah dengan saus mayo & cabai.',
    image: '/images/cocok-snacks-bowls.png',
    tag: 'Wajib Kumpul',
    isAvailable: true
  },
  {
    id: 'm-pisang-aroma',
    name: 'Crispy Pisang Aroma Cokelat Lumer (Isi 4)',
    category: 'camilan',
    price: 15000,
    description: 'Lumpia pisang goreng ekstra renyah berbalut gula karamel dan lelehan cokelat premium di bagian dalam.',
    image: '/images/cocok-snacks-bowls.png',
    tag: 'Best Seller',
    isAvailable: true
  },
  {
    id: 'm-pisang-bakar-strawberry',
    name: 'Pisang Bakar Cokelat Strawberry',
    category: 'camilan',
    price: 18000,
    description: 'Pisang raja bakar manis lembut dengan limpahan sirup dark chocolate ganache dan potongan buah stroberi segar.',
    image: '/images/cocok-food-feast.png',
    tag: 'Favorit',
    isAvailable: true
  },
  {
    id: 'm-pancake-keju',
    name: 'Roti / Pancake Keju Meleleh Cokelat',
    category: 'camilan',
    price: 18000,
    description: 'Pancake / roti lembut hangat dengan tumpukan parutan keju cheddar melimpah dan drizzle saus cokelat manis lumer.',
    image: '/images/cocok-food-feast.png',
    isAvailable: true
  },
  {
    id: 'm-french-fries',
    name: 'Kentang Goreng Krispi (French Fries)',
    category: 'camilan',
    price: 15000,
    description: 'Kentang goreng gurih renyah dengan taburan garam rempah laut dan saus cocolan.',
    isAvailable: true
  },
  {
    id: 'm-cireng-rujak',
    name: 'Cireng Krispi Bumbu Rujak Pedas',
    category: 'camilan',
    price: 14000,
    description: 'Cireng tepung kanji gurih renyah di luar kenyal di dalam, disajikan dengan sambal rujak gula aren pedas asam segar.',
    isAvailable: true
  }
];
