const RUNEY_CONFIG = {
  brandName: "Runey Handmade",
  tagline: "Temukan cerita di balik karakter.",
  whatsapp: {
    // Standard international format without '+' or leading zeros
    number: "6281234567890", 
    defaultMessage: "Halo Admin Runey Handmade! Saya ingin bertanya mengenai produk handmade...",
    orderMessage: (productName) => `Halo Admin Runey! Saya tertarik untuk memesan "${productName}". Apakah produk ini masih tersedia?`
  },
  socials: {
    instagram: "https://instagram.com/runeyhandmade",
    tiktok: "https://tiktok.com/@runeyhandmade"
  },
  currency: {
    symbol: "Rp",
    locale: "id-ID"
  }
};

// Freeze configuration object to prevent unintended mutations
Object.freeze(RUNEY_CONFIG);
