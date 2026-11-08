// Collection filters, search, and dynamic grid renderer
document.addEventListener("componentsLoaded", () => {
  initShopController();
});

function initShopController() {
  const gridContainer = document.getElementById("shop-product-grid");
  const emptyState = document.getElementById("shop-empty-state");
  const searchInput = document.getElementById("shop-search-input");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const resetBtn = document.getElementById("reset-filter-btn");

  if (!gridContainer || typeof ProductRepository === 'undefined') return;

  let currentCategory = "all";
  let currentSearchQuery = "";

  function renderProducts() {
    let products = ProductRepository.getAll();

    // Filter by Collection / Category
    if (currentCategory !== "all") {
      products = products.filter(p => p.collection === currentCategory);
    }

    // Filter by Search Query
    if (currentSearchQuery.trim() !== "") {
      const q = currentSearchQuery.toLowerCase().trim();
      products = products.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
      );
    }

    // Handle Empty State
    if (products.length === 0) {
      gridContainer.classList.add("hidden");
      emptyState.classList.remove("hidden");
      return;
    }

    gridContainer.classList.remove("hidden");
    emptyState.classList.add("hidden");

    // Render Product Cards Grid
    gridContainer.innerHTML = products.map(p => `
      <div class="cute-card overflow-hidden flex flex-col justify-between">
        <div>
          <div class="relative h-60 bg-runey-cream overflow-hidden">
            <img src="${p.images[0]}" alt="${p.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            <span class="absolute top-3 right-3 ${p.isAvailable ? 'bg-runey-pink' : 'bg-runey-yellow'} text-runey-brown text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              ${p.availabilityText}
            </span>
          </div>
          <div class="p-5 space-y-2">
            <p class="text-xs font-semibold text-runey-brown/60 uppercase tracking-wider">${p.collection}</p>
            <h3 class="font-handwritten text-xl font-bold text-runey-brown">${p.name}</h3>
            <p class="text-xs text-runey-brown/80 line-clamp-2">${p.shortDescription}</p>
          </div>
        </div>
        
        <div class="p-5 pt-0 flex items-center justify-between mt-auto">
          <span class="text-base font-bold text-runey-brown">${ProductRepository.formatPrice(p.price)}</span>
          <a href="product.html?slug=${p.slug}" class="cute-btn-secondary text-xs py-2 px-4">
            View Details
          </a>
        </div>
      </div>
    `).join('');
  }

  // Initial Render
  renderProducts();

  // Filter Buttons Event Listener
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-runey-pink");
        b.classList.add("bg-white", "border-runey-pink/30");
      });
      btn.classList.add("bg-runey-pink");
      btn.classList.remove("bg-white", "border-runey-pink/30");

      currentCategory = btn.getAttribute("data-filter");
      renderProducts();
    });
  });

  // Search Input Event Listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderProducts();
    });
  }

  // Reset Button Event Listener
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearchQuery = "";
      currentCategory = "all";
      filterBtns.forEach((b, idx) => {
        if (idx === 0) {
          b.classList.add("bg-runey-pink");
          b.classList.remove("bg-white");
        } else {
          b.classList.remove("bg-runey-pink");
          b.classList.add("bg-white");
        }
      });
      renderProducts();
    });
  }
}
