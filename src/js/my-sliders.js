if (document.querySelector('.js-slider')) {
  const slider = tns({
    container: '.js-slider',
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls: true,
    nav: false,
    responsive: {
      400: {
        items: 2
      }
    }
  });
}