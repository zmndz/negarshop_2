$(document).ready(function() {
	console.log("runs!")

  $("#js-header-responsive__search-icon").click(function() {
    $('.header-responsive__search-form').addClass('header-responsive__search-form--open')
  });
  $("#js-header-responsive__search-close").click(function() {
    $('.header-responsive__search-form').removeClass('header-responsive__search-form--open')
  });

  $("#js-header-responsive__burger-menu").click(function() {
    $('.header-responsive__side').addClass('header-responsive__side--open')
    $('.header-responsive__side-wrapper').addClass('header-responsive__side-wrapper--open')
  });
  $("#js-header-responsive__side-wrapper").click(function() {
    $('.header-responsive__side').removeClass('header-responsive__side--open')
    $('.header-responsive__side-wrapper').removeClass('header-responsive__side-wrapper--open')
  });

  $("#js-header-responsive__side-wrapper a, #js-header-responsive__side-wrapper ion-icon").click(function(e) {
  	e.stopPropagation()
  });

  function openSideMenu(menuItems, arrow, e) {
  	e.stopPropagation()
    arrow.toggleClass('header-responsive__side-navbar-submenu-icon--open')
    menuItems.next('ul').children('li').slideToggle('fast')
  }
  $(".js-header-responsive__side-navbar-submenu").click(function(e) {
  	openSideMenu($(this), $(this).children(), e)
  });

  $(".js-header-responsive__side-navbar-submenu ion-icon").click(function(e) {
  	openSideMenu($(this).parent(), $(this), e)
  });



  $(window).scroll(function() {
      if ($(this).width() < 1200) {
          if ($(this).scrollTop() > 15) {
              $('.header-responsive').addClass('header-responsive--fixed-navbar')
          } else {
              $('.header-responsive').removeClass('header-responsive--fixed-navbar')
          }
      }
  });
});
