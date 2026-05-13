// contact.js — Contact page specific scripts

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  })
  .then(() => {
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  })
  .catch(() => {
    btn.textContent = 'Send Inquiry';
    btn.disabled = false;
    alert('Something went wrong. Please call us directly or try again.');
  });
}

function toggleFAQ(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}
