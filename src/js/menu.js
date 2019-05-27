const menu = document.querySelector('.menu');
const burger = document.querySelector('.menu__mobile');
const menuClose = document.querySelector('.menu__close');
const links = document.querySelectorAll('.menu__link');
let menuOpen = false;

if(burger) {

  burger.onclick = () => {
    if (!menuOpen) {
      menu.classList.add('menu_open');
      setTimeout(() => menu.classList.add('menu_trans'), 100);
      menuOpen = !menuOpen;
    } else {
      remove();
    }
  }

  links.forEach(link => link.addEventListener('click', remove));

  menuClose.addEventListener('click', remove);


  function remove() {
    if (menuOpen) {
      menu.classList.remove('menu_trans');
      setTimeout(() => menu.classList.remove('menu_open'), 300);
      menuOpen = !menuOpen;
    }
  }

}