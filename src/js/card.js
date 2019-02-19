$('.card__btn_add').click(function() {
  $(this).addClass('card__btn_add_done');
  $(this).html('<a href="">Перейти в корзину</a>');
  $(this).attr("disabled", "disabled");
});