const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const roles = ['Web Developer', 'Web Designer', 'WordPress Specialist', 'WooCommerce Developer'];
const roleElement = document.getElementById('typed-role');
let roleIndex = 0, charIndex = 0, deleting = false;
function typeRole() {
  const current = roles[roleIndex];
  roleElement.textContent = current.slice(0, charIndex);
  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeRole, 95);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeRole, 1350);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(typeRole, 42);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}
typeRole();

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section-heading, .about-lead, .about-facts, .service-card, .skill-group, .project-card, .timeline-item, .contact-panel').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
