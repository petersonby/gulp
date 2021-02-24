import { tns } from 'tiny-slider/src/tiny-slider';

if (document.querySelector('.js-main-slider')) {
  tns({
    container: '.js-main-slider',
    items: 1,
    autoplay: false,
    nav: true,
    navPosition: 'bottom',
    controls: false,
    responsive: {
      576: {
        nav: false,
        controls: true
      }
    }
  });
}