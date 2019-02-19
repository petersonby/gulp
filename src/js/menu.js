const burger = $('.menu-mobile__toggle');
const menu = $('.menu-mobile__list');
const links = $('.menu-mobile__link');
let open = false;

burger.click(function() {
  if (!open) {
    burger.addClass('menu-mobile__toggle_open');
    menu
      .css("display", "flex")
      .hide()
      .fadeIn();
  } else {
    burger.removeClass('menu-mobile__toggle_open');
    menu.fadeOut();
  }
  open = !open;
});

links.each(function() {
  $(this).click(function() {
    if (open) {
      burger.removeClass('menu-mobile__toggle_open');
      menu.fadeOut();
      open = !open;
    }
  });
});