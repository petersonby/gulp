const menu = document.querySelector('.js-menu');
const burger = document.querySelector('.js-menu-mobile');

if (burger) {
  burger.addEventListener('click', () => {
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-active');
    } else {
      menu.classList.add('is-active');
      this.setAttribute('aria-expanded', 'true');
    }
  });
}