const RUNEY_PRODUCTS = [
  {
    id: "prod-001",
    slug: "strawberry-donut",
    name: "Strawberry Donut Keychain",
    category: "Keychain",
    collection: "Sweet Bakery Series",
    price: 12000,
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
    price: 12000,
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
    price: 12000, // Placeholder
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
    price: 12000, // Placeholder
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
    price: 12000, // Placeholder
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
    price: 12000, // Placeholder
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

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('featured-products-container');
  if (!container) return;

  const featuredProducts = RUNEY_PRODUCTS.slice(0, 3);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  container.innerHTML = featuredProducts.map(product => {
    const isReady = product.isAvailable;
    const priceDisplay = isReady ? formatRupiah(product.price) : 'Coming Soon';
    const linkUrl = `shop.html#${product.slug}`;

    return `
      <a href="${linkUrl}" class="cute-card overflow-hidden group border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col h-full bg-white">
        <!-- Bagian Gambar -->
        <div class="relative overflow-hidden h-60 flex-shrink-0">
          <img 
            src="${product.images[0]}" 
            alt="${product.name}" 
            class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            onerror="this.onerror=null;this.src='https://placehold.co/700x600/FFE9E2/5A4038?text=${encodeURIComponent(product.name)}';"
          >
          ${product.badge ? `
            <span class="absolute top-3 left-3 bg-runey-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              ${product.badge}
            </span>
          ` : ''}
        </div>
        
        <!-- Bagian Konten & Tombol -->
        <div class="p-5 flex flex-col flex-grow justify-between">
          <div>
            <p class="text-xs font-bold text-runey-pink uppercase tracking-wider">${product.collection}</p>
            <h3 class="font-handwritten text-xl font-bold mt-1 text-gray-800">${product.name}</h3>
            <p class="text-sm text-runey-brown/70 mt-2 line-clamp-2">${product.shortDescription}</p>
          </div>
          
          <!-- Harga dan Tombol Detail di Bagian Bawah -->
          <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span class="text-base font-bold text-runey-brown">${priceDisplay}</span>
            <span class="text-sm font-bold text-runey-pinkdark group-hover:underline flex items-center gap-1">
              Detail <span>→</span>
            </span>
          </div>
        </div>
      </a>
    `;
  }).join('');
});

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