/**
 * Runey Handmade - Rule-Based Chatbot Module ("Runey Assistant")
 */

document.addEventListener("componentsLoaded", () => {
  initChatbot();
});

function initChatbot() {
  const toggleBtn = document.getElementById("chatbot-toggle-btn");
  const closeBtn = document.getElementById("chatbot-close-btn");
  const windowEl = document.getElementById("chatbot-window");
  const form = document.getElementById("chatbot-form");
  const input = document.getElementById("chatbot-input");
  const messagesContainer = document.getElementById("chatbot-messages");
  const quickOptions = document.querySelectorAll(".chat-quick-option");

  if (!toggleBtn || !windowEl) return;

  // Toggle Visibility
  toggleBtn.addEventListener("click", () => windowEl.classList.toggle("hidden"));
  if (closeBtn) closeBtn.addEventListener("click", () => windowEl.classList.add("hidden"));

  // Append Message Helper
  function appendMessage(text, isUser = false) {
    const msgDiv = document.createElement("div");
    msgDiv.className = isUser 
      ? "bg-runey-pink text-runey-brown p-3 rounded-2xl rounded-tr-none shadow-sm ml-auto max-w-[80%] text-xs font-semibold"
      : "bg-white text-runey-brown p-3 rounded-2xl rounded-tl-none border border-runey-pink/20 shadow-sm max-w-[85%] text-xs leading-relaxed";
    
    msgDiv.innerHTML = text;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Knowledge Base Query Handler
  function getBotResponse(userMsg) {
    const q = userMsg.toLowerCase();

    if (q.includes("koleksi") || q.includes("produk") || q.includes("seri") || q.includes("donat")) {
      return `Kami saat ini menghadirkan seri **Sweet Bakery Series** dengan karakter utama **Strawberry Donut** (Rp35.000) dan **Matcha Donut** (Rp35.000). Kamu bisa melihatnya di <a href="shop.html" class="text-runey-pink font-bold underline">Halaman Shop</a>! 🍓🍩`;
    }

    if (q.includes("order") || q.includes("pesan") || q.includes("beli") || q.includes("cara")) {
      return `Pemesanan dilakukan langsung via WhatsApp admin! Pilih karakter favoritmu di <a href="shop.html" class="text-runey-pink font-bold underline">Shop</a> lalu klik **"Order via WhatsApp"**. 💬`;
    }

    if (q.includes("admin") || q.includes("hubungi") || q.includes("kontak") || q.includes("wa")) {
      const waMsg = encodeURIComponent(RUNEY_CONFIG.whatsapp.defaultMessage);
      return `Kamu bisa langsung mengobrol dengan Admin melalui WhatsApp di tombol berikut: <br><br> <a href="https://wa.me/${RUNEY_CONFIG.whatsapp.number}?text=${waMsg}" target="_blank" class="cute-btn-secondary text-[10px] px-3 py-1 inline-block">Chat WhatsApp Admin &rarr;</a>`;
    }

    if (q.includes("handmade") || q.includes("bahan") || q.includes("material")) {
      return `Setiap produk dikerjakan secara handmade menggunakan kombinasi *Acrylic Premium*, aksen *Clay/Resin*, dan *Keyring* berkualitas tinggi. ✨`;
    }

    // Default fallback guidance
    const defaultWa = encodeURIComponent(RUNEY_CONFIG.whatsapp.defaultMessage);
    return `Maaf, saya belum memahami pertanyaan tersebut. Silakan hubungi admin kami via WhatsApp untuk bantuan langsung: <br><br> <a href="https://wa.me/${RUNEY_CONFIG.whatsapp.number}?text=${defaultWa}" target="_blank" class="cute-btn-primary text-[10px] px-3 py-1 inline-block">Hubungi Admin WhatsApp</a>`;
  }

  // Handle Form Submission
  if (form && input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      appendMessage(text, true);
      input.value = "";

      setTimeout(() => {
        const botReply = getBotResponse(text);
        appendMessage(botReply, false);
      }, 400);
    });
  }

  // Handle Quick Filter Option Buttons
  quickOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      const optionText = opt.textContent;
      appendMessage(optionText, true);
      setTimeout(() => {
        const botReply = getBotResponse(optionText);
        appendMessage(botReply, false);
      }, 300);
    });
  });
}
