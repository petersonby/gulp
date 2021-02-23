const menu = document.querySelector('.menu');
const burger = document.querySelector('.menu__mobile');
const menuClose = document.querySelector('.menu__close');
let menuOpen = false;

function closeMenu() {
  if (menuOpen) {
    menu.classList.remove('opened');
    menuOpen = !menuOpen;
  }
}

if (burger) {
  burger.addEventListener('click', () => {
    if (!menuOpen) {
      menu.classList.add('opened');
      menuOpen = !menuOpen;
    } else {
      closeMenu();
    }
  });

  menuClose.addEventListener('click', closeMenu);
}