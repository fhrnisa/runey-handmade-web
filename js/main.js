document.addEventListener("componentsLoaded", () => {
  initNavbarInteraction();
  setActiveNavLink();
  bindConfigToFooter();
});

/**
 * Mobile Navigation Menu Handler
 */
function initNavbarInteraction() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden", !isHidden);
      menuIconOpen.classList.toggle("hidden", isHidden);
      menuIconClose.classList.toggle("hidden", !isHidden);
    });
  }
}

/**
 * Active Page Link Marker
 */
function setActiveNavLink() {
  const path = window.location.pathname;
  let currentPage = "index";

  if (path.includes("shop.html")) currentPage = "shop";
  else if (path.includes("product.html")) currentPage = "shop";
  else if (path.includes("about.html")) currentPage = "about";
  else if (path.includes("gallery.html")) currentPage = "gallery";
  else if (path.includes("faq.html")) currentPage = "faq";
  else if (path.includes("contact.html")) currentPage = "contact";

  // Desktop links
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("data-nav") === currentPage) {
      link.classList.add("bg-runey-pink/30", "text-runey-brown", "font-bold");
    }
  });

  // Mobile links
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    if (link.getAttribute("data-nav") === currentPage) {
      link.classList.add("bg-runey-pink/30", "text-runey-brown", "font-bold");
    }
  });
}

/**
 * Bind RUNEY_CONFIG values to Footer links
 */
function bindConfigToFooter() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const igEl = document.getElementById("footer-ig");
  if (igEl && RUNEY_CONFIG.socials.instagram) igEl.href = RUNEY_CONFIG.socials.instagram;

  const tiktokEl = document.getElementById("footer-tiktok");
  if (tiktokEl && RUNEY_CONFIG.socials.tiktok) tiktokEl.href = RUNEY_CONFIG.socials.tiktok;

  const waBtn = document.getElementById("footer-wa-btn");
  if (waBtn && RUNEY_CONFIG.whatsapp.number) {
    const encodedMsg = encodeURIComponent(RUNEY_CONFIG.whatsapp.defaultMessage);
    waBtn.href = `https://wa.me/${RUNEY_CONFIG.whatsapp.number}?text=${encodedMsg}`;
  }
}
