$(document).ready(function() {
	console.log("runs!")
  // $('[data-toggle="tooltip"]').tooltip();

  $(document).ready(function() {
    $('.header-desktop__owl-carousel').on('changed.owl.carousel', function() {
      console.log('loaded')
    })
    
    $('.header-desktop__owl-carousel').owlCarousel({
      rtl: true,
      autoplay:false,
      margin:10,
      nav:true,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:4
        }
      }
    })

    $('.main-slider').owlCarousel({
      rtl: true,
      loop:true,
      autoplay:true,
      // animateOut: 'false',
      // animateIn: 'false',
      margin:10,
      nav:true,
      dots: true,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        }
      }
    })

    $('.special-slider').owlCarousel({
      rtl: true,
      loop:true,
      autoplay:true,
      animateOut: 'fadeOut',
      animateIn: 'pulse',
      mouseDrag: false,
      margin:10,
      nav:false,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        }
      }
    })

    $('.moment-slider__slides').owlCarousel({
      rtl: true,
      loop:true,
      autoplay:true,
      // animateOut: 'zoomIn',
      // animateIn: 'zoomIn',
      mouseDrag: false,
      margin:10,
      nav:false,
      dots: false,
      autoplayTimeout: 7000,
      lazyLoad: true,
      onInitialized: startProgressBar,
      onTranslate: resetProgressBar,
      onTranslated: startProgressBar,
      responsive:{
        0:{
          items:1
        }
      }
    })

    function startProgressBar() {
      // apply keyframe animation
      $(".moment-slider__loader-wrapper").css({
        width: "100%",
        transition: "width 7000ms ease-in-out"
      });
    }

    function resetProgressBar() {
      $(".moment-slider__loader-wrapper").css({
        width: 0,
        transition: "width 0s ease-in-out"
      });
    }

    $('.product-slider').owlCarousel({
      rtl: true,
      loop:true,
      autoplay:false,
      // animateOut: 'zoomIn',
      // animateIn: 'zoomIn',
      mouseDrag: true,
      margin:10,
      nav:true,
      dots: false,
      lazyLoad: true,
      // center: true,
      responsive:{
        0:{
          items:2
        },
        500:{
          items:2
        },
        700:{
          items:3.34
        }
      }
    })

    $('.brand-slider').owlCarousel({
      rtl: true,
      loop:true,
      autoplay:false,
      // animateOut: 'zoomIn',
      // animateIn: 'zoomIn',
      mouseDrag: true,
      margin:0,
      nav:true,
      dots: false,
      lazyLoad: true,
      // center: true,
      responsive:{
        0:{
          items:1
        },
        480:{
          items:2
        },
        700:{
          items:3
        },
        992:{
          items:6
        }
      }
    })

    $('.footer__namad').owlCarousel({
      rtl: true,
      autoplay:true,
      margin:10,
      loop:true,
      nav:false,
      mouseDrag: true,
      dots: false,
      lazyLoad: false,
      responsive:{
        0:{
          items:1
        }
      }
    })

  })

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


  $(".js-header-desktop__filters").click(function() {
    $(".header-desktop__filters").toggleClass('header-desktop__filters--hide')
    $('.header-desktop__filters-wrapper').toggleClass('header-desktop__filters-wrapper--show')
    $('.header-desktop__filters-options').toggleClass('header-desktop__filters-options--open')
  });
  $(".js-header-desktop__filters-check").click(function() {
    $(".header-desktop__filters").toggleClass('header-desktop__filters--hide')
    $('.header-desktop__filters-wrapper').toggleClass('header-desktop__filters-wrapper--show')
    $('.header-desktop__filters-options').toggleClass('header-desktop__filters-options--open')
  });


  $(".js-header-desktop__tabs-list").mouseover(function() {
    $('.header-desktop__tabs-item--active').not(this).removeClass('header-desktop__tabs-item--active')
    $(this).addClass('header-desktop__tabs-item--active')

    var tabs = $(".header-desktop__tabs-list")
    var sliders = $(".header-desktop__navbar-slider")
    var current = $(this).children('a').data('index')

    sliders.each(function () {
      if (current == $(this).data('index')) {
        $(this).addClass('header-desktop__navbar-slider--active')
      } else {
        $(this).removeClass('header-desktop__navbar-slider--active')
      }
    })
  });

  $(".js-header-desktop__tab-menu-list").mouseover(function() {
    $('.header-desktop__tab-menu-item--active').not(this).removeClass('header-desktop__tab-menu-item--active')
    $(this).addClass('header-desktop__tab-menu-item--active')
      console.log('ssss')

    var tabMenu = $(".header-desktop__tab-menu-list")
    var content = $(".header-desktop__tab-menu-content")
    var current = $(this).children('a').data('index')

    content.each(function () {
      if (current == $(this).data('index')) {
        $(this).addClass('header-desktop__tab-menu-content--active')
      } else {
        $(this).removeClass('header-desktop__tab-menu-content--active')
      }
    })
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

  $('.js-header-desktop__filters-category').select2({
    dropdownParent:  $('.header-desktop__filters-options'),
    dropdownCssClass: 'header-desktop__filters-category',
    containerCssClass: 'header-desktop__filters-category',
  });
  $('.js-header-desktop__filters-product').select2();

  (function setSpecialSliderTimer() {
    // var sliders = $('.special-slider__item');

    // console.log("sliders: ", sliders)
    // sliders.map(function(index, item) {
    //   var secondsa = $('.special-slider__counter-second--value span')[index].innerHTML;
    //   var minutesa = $('.special-slider__counter-minute--value')[index].innerHTML;
    //   var hoursa = $('.special-slider__counter-hour--value')[index].innerHTML;
    //   var daysa = $('.special-slider__counter-day--value')[index].innerHTML;

    //   console.log("secondsa: ", secondsa)
    //   console.log("minutesa: ", minutesa)
    //   console.log("hoursa: ", hoursa)
    //   console.log("daysa: ", daysa)


    //   var seconds = (secondsa*1000) + (minutesa*60000) + (hoursa*3600000) + (daysa*86400000);
    //   // var upgradeTime = 172801;
    //   // var seconds = upgradeTime;
    //   console.log("time:", seconds)
    //   function timer() {
    //     var days        = Math.floor(seconds/24/60/60);
    //     var hoursLeft   = Math.floor((seconds) - (days*86400));
    //     var hours       = Math.floor(hoursLeft/3600);
    //     var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    //     var minutes     = Math.floor(minutesLeft/60);
    //     var remainingSeconds = seconds % 60;
    //     function pad(n) {
    //       return (n < 10 ? "0" + n : n);
    //     }

    //     secondsa = pad(remainingSeconds);
    //     minutesa = pad(minutes);
    //     hoursa = pad(hours);
    //     daysa = pad(days);
    //     console.log("days:", daysa);
    //     // document.getElementById('countdown').innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
    //     if (seconds == 0) {
    //       clearInterval(countdownTimer);
    //     } else {
    //       seconds--;
    //     }
    //   }
    //   var countdownTimer = setInterval(timer, 1000);

    // });








    // var seconds = $('.special-slider__counter-second--value span');
    // var minutes = $('.special-slider__counter-minute--value');
    // var hours = $('.special-slider__counter-hour--value');
    // var days = $('.special-slider__counter-day--value');
    // var sliders = $('.special-slider__item');
    // var secondInterval = null;
    // var minuteInterval = null;
    // var hourInterval = null;
    // var dayInterval = null;

    // seconds.map(function(index, item) {
    //   var second = item.innerHTML;
    //   secondInterval = setInterval(function() {
    //     second--;
    //     if (second == 0) {
    //       second = '5';
    //     }
    //     item.innerHTML = second;
    //     console.log("second: ", second);
    //     if (minutes[index].innerHTML == 0) {
    //       second = '0';
    //       clearInterval(secondInterval)
    //     }
    //     if (
    //       seconds[index].innerHTML == 0 && 
    //       minutes[index].innerHTML == 0 && 
    //       houres[index].innerHTML == 0 && 
    //       days[index].innerHTML == 0) {
    //       alert('all zero');
    //     }
    //   }, 1000);
    // })

    // minutes.map(function(index, item) {
    //   var minute = item.innerHTML;
    //   minuteInterval = setInterval(function() {
    //     minute--;
    //     if (minute == 0) {
    //       minute = '3';
    //     }
    //     item.innerHTML = minute;
    //     console.log("minute: ", minute);
    //     // if (hours[index].innerHTML == 0) {
    //     //   minute = '0';
    //     //   clearInterval(minuteInterval)
    //     // }
    //   }, 5000);
    // })

    // hours.map(function(index, item) {
    //   var hour = item.innerHTML;
    //   hourInterval = setInterval(function() {
    //     hour--;
    //     if (hour == 0) {
    //       hour = '2';
    //     }
    //     item.innerHTML = hour;
    //     console.log("hour: ", hour);
    //     // if (days[index].innerHTML == 0) {
    //     //   hour = '0';
    //     //   clearInterval(hourInterval)
    //     // }
    //   }, 15000);
    // })

    // days.map(function(index, item) {
    //   var day = item.innerHTML;
    //   dayInterval = setInterval(function() {
    //     day--;
    //     item.innerHTML = day;
    //     console.log("day: ", day);
    //     // if (day == 0) {
    //     //   var specialSlider = $('.js-special-slider');
    //     //   // specialSlider.trigger('remove.owl.carousel', [index]).trigger('refresh.owl.carousel');
    //     //   // seconds[index].innerHTML = 0;
    //     //   // minutes[index].innerHTML = 0;
    //     //   // hours[index].innerHTML = 0;
    //     //   // days[index].innerHTML = 0;
    //     //   clearInterval(dayInterval);
    //     //   clearInterval(hourInterval);
    //     //   clearInterval(minuteInterval);
    //     //   clearInterval(secondInterval);
    //     //   // sliders[index].remove();
    //     //   alert('removed');
    //     // }
    //     console.log("QQ", sliders)
    //   }, 30000);
    // })
  })();
});


