const projectLinks = () => {

  const logosContainer = document.querySelector('.logos-slide');
  const projectImage = document.querySelectorAll('.project-image');
  const projectLinks = document.querySelectorAll('.project-links');

  projectImage.forEach((image, index) => {
    image.addEventListener('click', () => {
      projectLinks[index].classList.toggle('active');
    })
  });


  document.querySelectorAll('.logo').forEach(logo => {
    const clone = logo.cloneNode(true);
    logosContainer.appendChild(clone);
  })

}

export default projectLinks;
