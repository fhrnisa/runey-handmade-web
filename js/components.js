async function loadComponent(elementId, filepath) {
  const container = document.getElementById(elementId);
  if (!container) return;

  try {
    const response = await fetch(filepath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const htmlContent = await response.text();
    container.innerHTML = htmlContent;
  } catch (error) {
    console.error(`Error loading component from ${filepath}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  // Load reusable navbar, footer, and chatbot widgets concurrently
  await Promise.all([
    loadComponent("navbar-container", "components/navbar.html"),
    loadComponent("footer-container", "components/footer.html"),
    loadComponent("chatbot-container", "components/chatbot.html")
  ]);

  // Dispatch custom event once all components are rendered
  document.dispatchEvent(new CustomEvent("componentsLoaded"));
});