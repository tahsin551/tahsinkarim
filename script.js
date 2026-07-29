// 3D tilt for project cards
document.querySelectorAll('[data-tilt]').forEach(card => {
  const damp = 18;
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -damp;
    const ry = ((x / r.width) - 0.5) * damp;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    card.style.setProperty('--mx', `${(x / r.width) * 100}%`);
    card.style.setProperty('--my', `${(y / r.height) * 100}%`);
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// footer back to top
const backToTop = document.querySelector('footer span:last-child');
backToTop.style.cursor = 'pointer';
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
