const RUNEY_PRODUCTS = [
  {
    id: "prod-001",
    slug: "strawberry-donut",
    name: "Strawberry Donut Keychain",
    category: "Keychain",
    collection: "Sweet Bakery Series",
    price: 35000,
    isAvailable: true,
    availabilityText: "Ready Stock",
    featured: true,
    badge: "Best Seller",
    shortDescription: "Gantungan kunci akrilik & resin berkarakter donat stroberi manis dengan detail taburan messes imut.",
    storyTeaser: "Berry si Donat Stroberi yang selalu ceria dan suka menyebarkan kebahagiaan manis di sekitar...",
    material: "Acrylic Premium, Clay/Resin Accent, Gold Keyring",
    size: "Sekitar 4.5 cm x 4.5 cm",
    handmadeDetails: "Setiap detail dibuat secara handmade dengan finishing gloss tahan percikan air.",
    packagingInfo: "Dikemas dengan backing card eksklusif Sweet Bakery Series & pouch pelindung.",
    images: [
      "https://i.ibb.co.com/Fk21cfbC/Strawberry-Donut-Keychain.jpg"
    ]
  },
  {
    id: "prod-002",
    slug: "matcha-donut",
    name: "Matcha Donut Keychain",
    category: "Keychain",
    collection: "Sweet Bakery Series",
    price: 35000,
    isAvailable: true,
    availabilityText: "Ready Stock",
    featured: true,
    badge: "New Arrival",
    shortDescription: "Karakter donat matcha yang menenangkan dengan topping krim lembut dan sentuhan hijau pastel.",
    storyTeaser: "Machi si Donat Matcha yang tenang dan suka menghabiskan waktu bersantai di sore hari...",
    material: "Acrylic Premium, Clay/Resin Accent, Silver Keyring",
    size: "Sekitar 4.5 cm x 4.5 cm",
    handmadeDetails: "Detail krim matcha diracik khusus secara cermat buatan tangan.",
    packagingInfo: "Dikemas dengan backing card eksklusif Sweet Bakery Series & pouch pelindung.",
    images: [
      "https://i.ibb.co.com/v6dbhHxM/Matcha-Donut-Keychain.jpg"
    ]
  },
  {
    id: "prod-003",
    slug: "cherry-linzer-cookie",
    name: "Cherry Linzer Cookie Keychain",
    category: "Keychain",
    collection: "Sweet Bakery Series",
    price: 0, // Placeholder
    isAvailable: false,
    availabilityText: "Coming Soon",
    featured: false,
    badge: "Coming Soon",
    shortDescription: "Gantungan kunci bentuk biskuit Linzer klasik dengan selai hati di tengahnya.",
    storyTeaser: "Linzer si Biskuit Hati yang hangat dan penuh kejutan di setiap cerita...",
    material: "TBA (To Be Announced)",
    size: "TBA",
    handmadeDetails: "Masih dalam tahap pengembangan proses kreatif.",
    packagingInfo: "Eksklusif Sweet Bakery Series Packaging.",
    images: [
      "https://i.ibb.co.com/sp1trWRz/Cherry-Linzer-Cookie-Keychain.jpg"
    ]
  },
  {
    id: "prod-004",
    slug: "strawberry-linzer-cookie",
    name: "Strawberry Linzer Cookie Keychain",
    category: "Keychain",
    collection: "Sweet Bakery Series",
    price: 0, // Placeholder
    isAvailable: false,
    availabilityText: "Coming Soon",
    featured: false,
    badge: "Coming Soon",
    shortDescription: "Gantungan kunci bentuk biskuit Linzer klasik dengan selai hati di tengahnya.",
    storyTeaser: "Linzer si Biskuit Hati yang hangat dan penuh kejutan di setiap cerita...",
    material: "TBA (To Be Announced)",
    size: "TBA",
    handmadeDetails: "Masih dalam tahap pengembangan proses kreatif.",
    packagingInfo: "Eksklusif Sweet Bakery Series Packaging.",
    images: [
      "https://i.ibb.co.com/zTfZ1x4H/Strawberry-Linzer-Cookie-Keychain.jpg"
    ]
  },
  {
    id: "prod-005",
    slug: "crab",
    name: "Orange Crab Keychain",
    category: "Keychain",
    collection: "Ocean Friends Series",
    price: 0, // Placeholder
    isAvailable: false,
    availabilityText: "Coming Soon",
    featured: false,
    badge: "Coming Soon",
    shortDescription: "Gantungan kunci bentuk biskuit Linzer klasik dengan selai hati di tengahnya.",
    storyTeaser: "Linzer si Biskuit Hati yang hangat dan penuh kejutan di setiap cerita...",
    material: "TBA (To Be Announced)",
    size: "TBA",
    handmadeDetails: "Masih dalam tahap pengembangan proses kreatif.",
    packagingInfo: "Eksklusif Sweet Bakery Series Packaging.",
    images: [
      "https://i.ibb.co.com/wZPpJ2mL/Crab-Keychain.jpg"
    ]
  },
    {
    id: "prod-006",
    slug: "sea-horse",
    name: "Sea Horse Keychain",
    category: "Keychain",
    collection: "Ocean Friends Series",
    price: 0, // Placeholder
    isAvailable: false,
    availabilityText: "Coming Soon",
    featured: false,
    badge: "Coming Soon",
    shortDescription: "Gantungan kunci bentuk biskuit Linzer klasik dengan selai hati di tengahnya.",
    storyTeaser: "Linzer si Biskuit Hati yang hangat dan penuh kejutan di setiap cerita...",
    material: "TBA (To Be Announced)",
    size: "TBA",
    handmadeDetails: "Masih dalam tahap pengembangan proses kreatif.",
    packagingInfo: "Eksklusif Sweet Bakery Series Packaging.",
    images: [
      "https://i.ibb.co.com/0p97kX0Q/Sea-horse-Keychain.jpg"
    ]
  },
];

/**
 * Product Data Helper Functions
 */
const ProductRepository = {
  getAll: () => RUNEY_PRODUCTS,
  getFeatured: () => RUNEY_PRODUCTS.filter(p => p.featured),
  getBySlug: (slug) => RUNEY_PRODUCTS.find(p => p.slug === slug),
  getByCategory: (category) => {
    if (!category || category === 'all') return RUNEY_PRODUCTS;
    return RUNEY_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  },
  search: (query) => {
    if (!query) return RUNEY_PRODUCTS;
    const q = query.toLowerCase().trim();
    return RUNEY_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.collection.toLowerCase().includes(q) || 
      p.shortDescription.toLowerCase().includes(q)
    );
  },
  formatPrice: (price) => {
    if (!price || price === 0) return "Segera Hadir";
    return new Intl.NumberFormat(RUNEY_CONFIG.currency.locale, {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(price);
  }
};

Object.freeze(RUNEY_PRODUCTS);