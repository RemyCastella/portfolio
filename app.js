const logosContainer = document.querySelector('.logos-slide');
document.querySelectorAll('.logo').forEach(logo => {
  const clone = logo.cloneNode(true);
  logosContainer.appendChild(clone);
})
