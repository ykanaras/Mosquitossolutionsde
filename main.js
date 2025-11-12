
document.addEventListener('DOMContentLoaded', function(){
  const yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());

  const burger = document.querySelector('.hamburger');
  const nav = document.getElementById('primary-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }

  // Allow only one FAQ open at a time (optional UX nicety)
  const faqs = document.querySelectorAll('details.faq');
  faqs.forEach(f => {
    f.addEventListener('toggle', () => {
      if (f.open) {
        faqs.forEach(other => { if (other !== f) other.open = false; });
      }
    });
  });
});
