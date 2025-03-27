import scroll from './utils/scroll.js';
import projectLinks from './utils/projectLinks.js';

const logosContainer = document.querySelector('.logos-slide');
document.querySelectorAll('.logo').forEach(logo => {
  const clone = logo.cloneNode(true);
  logosContainer.appendChild(clone);
})

projectLinks();
document.addEventListener('scroll', scroll, { passive: true });
