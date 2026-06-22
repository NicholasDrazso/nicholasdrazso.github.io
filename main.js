const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

function toggleBio() {
  const short = document.querySelector('.bio-short');
  const full = document.querySelector('.bio-full');
  const expanding = full.style.display === 'none';
  short.style.display = expanding ? 'none' : '';
  full.style.display = expanding ? '' : 'none';
}
