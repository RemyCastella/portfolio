const scroll = () => {
  const winScroll = window.scrollY;

  const height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  ) - document.documentElement.clientHeight;

  if (height === 0) return;

  const scrolled = (winScroll / height) * 100;

  document.querySelector(".progress-bar").style.width = `${scrolled}%`;
}

export default scroll
