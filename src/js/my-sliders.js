if ($('*').is('.slider__main')) {
  const slider = tns({
    container: '.slider__main',
    items: 1,
    autoplay: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls: false,
    nav: true,
    navPosition: "bottom"
  });
}