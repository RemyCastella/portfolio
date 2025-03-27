const projectLinks = () => {

  const projectImage = document.querySelectorAll('.project-image');
  const projectLinks = document.querySelectorAll('.project-links');

  projectImage.forEach((image, index) => {
    image.addEventListener('click', () => {
      projectLinks[index].classList.toggle('active');
    })
  });

}

export default projectLinks;
