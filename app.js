const infiniteScroll = () => {
  let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  let scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  let clientHeight = Math.max(document.documentElement.clientHeight);
  if (clientHeight + scrollTop >= scrollHeight - 750) {
  }
};
window.addEventListener("scroll", infiniteScroll, true);
//   window.removeEventListener('scroll', infiniteScroll, true);
