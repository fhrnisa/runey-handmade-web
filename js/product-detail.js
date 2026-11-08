document.addEventListener("componentsLoaded", () => {
  initProductDetail();
});

function initProductDetail() {
  if (typeof ProductRepository === 'undefined') return;

  // Parse 'slug' query parameter from current URL
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  // Fetch product data
  const product = slug ? ProductRepository.getBySlug(slug) : null;

  if (!product) {
    // Redirect or show default state if slug is invalid
    window.location.href = "shop.html";
    return;
  }

  // Populate Title & Meta Description
  document.getElementById("product-page-title").textContent = `${product.name} | Runey Handmade`;
  document.getElementById("product-meta-desc").content = `${product.shortDescription} Koleksi ${product.collection}.`;

  // Breadcrumb
  document.getElementById("breadcrumb-collection").textContent = product.collection;
  document.getElementById("breadcrumb-current").textContent = product.name;

  // Images & Gallery Setup
  const mainImage = document.getElementById("pd-main-image");
  mainImage.src = product.images[0];
  mainImage.alt = product.name;

  const thumbnailContainer = document.getElementById("pd-thumbnails");
  thumbnailContainer.innerHTML = product.images.map((img, idx) => `
    <button type="button" onclick="document.getElementById('pd-main-image').src='${img}'" class="w-16 h-16 rounded-xl overflow-hidden border-2 border-runey-pink/30 focus:border-runey-pink flex-shrink-0">
      <img src="${img}" alt="${product.name} thumbnail ${idx + 1}" class="w-full h-full object-cover">
    </button>
  `).join('');

  // Text Data
  document.getElementById("pd-collection").textContent = product.collection;
  document.getElementById("pd-name").textContent = product.name;
  document.getElementById("pd-price").textContent = ProductRepository.formatPrice(product.price);
  document.getElementById("pd-story").textContent = `"${product.storyTeaser}"`;

  // Badge Status
  const badge = document.getElementById("pd-availability-badge");
  badge.textContent = product.availabilityText;
  if (!product.isAvailable) {
    badge.classList.remove("bg-runey-pink");
    badge.classList.add("bg-runey-yellow");
  }

  // Specifications
  document.getElementById("pd-material").textContent = product.material;
  document.getElementById("pd-size").textContent = product.size;
  document.getElementById("pd-handmade").textContent = product.handmadeDetails;
  document.getElementById("pd-packaging").textContent = product.packagingInfo;

  // WhatsApp CTA Config Binding
  const waCta = document.getElementById("pd-wa-cta");
  if (waCta && RUNEY_CONFIG.whatsapp.number) {
    const message = RUNEY_CONFIG.whatsapp.orderMessage(product.name);
    waCta.href = `https://wa.me/${RUNEY_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
  }

  // Render Related Products (same collection, excluding current)
  const relatedGrid = document.getElementById("related-products-grid");
  if (relatedGrid) {
    const related = ProductRepository.getAll()
      .filter(p => p.collection === product.collection && p.id !== product.id);

    if (related.length === 0) {
      relatedGrid.innerHTML = `<p class="text-sm text-runey-brown/60 col-span-full">Belum ada produk lain pada seri ini.</p>`;
    } else {
      relatedGrid.innerHTML = related.map(p => `
        <div class="cute-card p-4 flex gap-4 items-center">
          <img src="${p.images[0]}" alt="${p.name}" class="w-20 h-20 object-cover rounded-xl bg-runey-cream flex-shrink-0">
          <div class="space-y-1 flex-1">
            <h4 class="font-handwritten font-bold text-base text-runey-brown">${p.name}</h4>
            <p class="text-xs font-bold text-runey-brown/70">${ProductRepository.formatPrice(p.price)}</p>
            <a href="product.html?slug=${p.slug}" class="inline-block text-xs text-runey-pink font-bold hover:underline">
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      `).join('');
    }
  }
}