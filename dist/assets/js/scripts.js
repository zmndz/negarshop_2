$(document).ready(function(){function s(e,s,r){r.stopPropagation(),s.toggleClass("header-responsive__side-navbar-submenu-icon--open"),e.next("ul").children("li").slideToggle("fast")}console.log("runs!"),$("#js-header-responsive__search-icon").click(function(){$(".header-responsive__search-form").addClass("header-responsive__search-form--open")}),$("#js-header-responsive__search-close").click(function(){$(".header-responsive__search-form").removeClass("header-responsive__search-form--open")}),$("#js-header-responsive__burger-menu").click(function(){$(".header-responsive__side").addClass("header-responsive__side--open"),$(".header-responsive__side-wrapper").addClass("header-responsive__side-wrapper--open")}),$("#js-header-responsive__side-wrapper").click(function(){$(".header-responsive__side").removeClass("header-responsive__side--open"),$(".header-responsive__side-wrapper").removeClass("header-responsive__side-wrapper--open")}),$("#js-header-responsive__side-wrapper a, #js-header-responsive__side-wrapper ion-icon").click(function(e){e.stopPropagation()}),$(".js-header-responsive__side-navbar-submenu").click(function(e){s($(this),$(this).children(),e)}),$(".js-header-responsive__side-navbar-submenu ion-icon").click(function(e){s($(this).parent(),$(this),e)}),$(window).scroll(function(){$(this).width()<1200&&(15<$(this).scrollTop()?$(".header-responsive").addClass("header-responsive--fixed-navbar"):$(".header-responsive").removeClass("header-responsive--fixed-navbar"))})});