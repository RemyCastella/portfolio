const scroll = () => {
  console.log("scrolling")
  const winScroll = window.scrollY;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = `${scrolled}%`;
}

export default scroll
