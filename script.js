// Modal handlers
const modal = document.getElementById('modalBackdrop');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

openBtn.addEventListener('click', () => modal.classList.add('active'));
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.className = 'success';
  msg.textContent = 'Thank you! We will contact you soon.';
  e.target.reset();
});

// Modal form
document.getElementById('modalForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('modalMsg');
  msg.className = 'success';
  msg.textContent = 'Request received! We\'ll reach out shortly.';
  setTimeout(() => modal.classList.remove('active'), 2000);
});

// Package selection helper
function openContactWith(pkg) {
  document.getElementById('package').value = pkg;
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});