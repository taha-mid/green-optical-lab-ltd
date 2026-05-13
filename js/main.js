// ── MOBILE NAV TOGGLE
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ── ACTIVE NAV LINK (based on current page)
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();

// ── SCROLL FADE-UP
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── CONTACT FORM SUBMIT
function submitForm(e) {
  if (e) e.preventDefault();
  const btn = document.getElementById('submitBtn');
  if (btn) {
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Inquiry Sent!';
      btn.style.background = 'linear-gradient(135deg, #2a7a4b, #3daa6a)';
      btn.style.color = 'white';
    }, 1000);
  }
}
