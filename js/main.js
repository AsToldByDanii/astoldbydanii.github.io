// As Told By Danii — Main JS

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Navbar scroll shadow
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .testimonial-card, .merch-card, .service-full-card, .about-stock, .about-full-img').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Add fade-in CSS dynamically
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

// Contact form — prevent default + show confirmation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#0C2E5F';
    btn.style.color = '#6FB7DD';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}
