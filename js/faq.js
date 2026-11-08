/**
 * Runey Handmade - FAQ Accordion Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  initFaqAccordion();
});

function initFaqAccordion() {
  const triggers = document.querySelectorAll(".faq-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector(".faq-icon");
      const isExpanded = !content.classList.contains("hidden");

      // Close all active accordions for single-open experience
      document.querySelectorAll(".faq-content").forEach(c => c.classList.add("hidden"));
      document.querySelectorAll(".faq-icon").forEach(i => {
        i.textContent = "+";
        i.classList.remove("rotate-45");
      });

      // Toggle clicked item
      if (!isExpanded) {
        content.classList.remove("hidden");
        if (icon) {
          icon.textContent = "×";
          icon.classList.add("rotate-45");
        }
      }
    });
  });
}
