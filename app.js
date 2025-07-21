// scripts/app.js

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Animate product cards on scroll
const productCards = document.querySelectorAll('.product-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

productCards.forEach(card => {
  observer.observe(card);
});

// Floating WhatsApp button popup
const floatingBtn = document.querySelector('.floating-whatsapp');
floatingBtn.addEventListener('click', () => {
  window.open('https://wa.me/27600000000', '_blank');
});