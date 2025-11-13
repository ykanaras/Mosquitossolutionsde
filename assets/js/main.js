document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".ms-menu-toggle");
  toggles.forEach(btn => {
    const header = btn.closest(".ms-header");
    const nav = header?.querySelector(".ms-nav");
    if (!nav) return;

    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
});
