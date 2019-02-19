const tabs = $('.when-tabs__info');
const tabsLinks = $('.when-tabs__btn');
const cardTabs = $('.card-tabs__info');
const cardTabsLinks = $('.card-tabs__btn');

if($('*').is('.when-tabs__info')) tabs[0].style.display="block";
if($('*').is('.card-tabs__info')) cardTabs[0].style.display="block";

function tabChange() {
  const _this = $(this);
  tabs.each(function() {
    if ($(this).data('tab') === _this.data('tab')) {
      $(this).fadeIn("slow");
    } else {
      $(this).hide();
    }
  });

  tabsLinks.each(function() {
    if ($(this).data('tab') === _this.data('tab')) {
      $(this).addClass("when-tabs__btn_active");
    } else {
      $(this).removeClass("when-tabs__btn_active");
    }
  });
}

function cardTabChange() {
  const _this = $(this);
  cardTabs.each(function() {
    if ($(this).data('tab') === _this.data('tab')) {
      $(this).fadeIn("slow");
    } else {
      $(this).hide();
    }
  });

  cardTabsLinks.each(function() {
    if ($(this).data('tab') === _this.data('tab')) {
      $(this).addClass("card-tabs__btn_active");
    } else {
      $(this).removeClass("card-tabs__btn_active");
    }
  });
}

tabsLinks.each(function() {
  $(this).click(tabChange);
});

cardTabsLinks.each(function() {
  $(this).click(cardTabChange);
});