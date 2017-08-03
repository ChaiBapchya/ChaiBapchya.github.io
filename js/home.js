$(document).ready(function(){function e(){1==s?(o.removeClass("is-closed"),o.addClass("is-open"),s=!1):(o.removeClass("is-open"),o.addClass("is-closed"),s=!0)}document.getElementById("intro").style.height=window.innerHeight-20+"px",$(".loader-overlay").hide();var n=new WOW({boxClass:"wow",animateClass:"animated",offset:20,mobile:!0,live:!0});n.init();var i=$("#js-mobile-menu").unbind();$("#js-navigation-menu").removeClass("show"),i.on("click",function(e){e.preventDefault();var n=$("#js-navigation-menu");n.slideToggle(function(){n.is(":hidden")&&n.removeAttr("style")})});var o=$("#hamburger"),s=!0;o.click(function(){e()});var t=function(){var e=0,n=$(".evenHeights");n.each(function(){var n=$(this);n.height()>e&&(e=n.height())}),n.height(e)};t()});

//$(document).ready(function () {
//
//  document.getElementById("intro").style.height = (window.innerHeight-20)+'px';
//
//  $('.loader-overlay').hide();
//
//  var wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 20, mobile: true, live: true});
//  wow.init();
//
//  var menuToggle = $('#js-mobile-menu').unbind();
//  $('#js-navigation-menu').removeClass("show");
//  menuToggle.on('click', function (e) {
//    e.preventDefault();
//    var $navigationMenu = $('#js-navigation-menu');
//    $navigationMenu.slideToggle(function () {
//      if ($navigationMenu.is(':hidden')) {
//        $navigationMenu.removeAttr('style');
//      }
//    });
//  });
//
//  var trigger = $('#hamburger'),
//    isClosed = true;
//
//  function burgerTime() {
//    if (isClosed == true) {
//      trigger.removeClass('is-closed');
//      trigger.addClass('is-open');
//      isClosed = false;
//    } else {
//      trigger.removeClass('is-open');
//      trigger.addClass('is-closed');
//      isClosed = true;
//    }
//  }
//
//
//  trigger.click(function () {
//    burgerTime();
//  });
//
//
//
//
//  var setEvenHeights = function () {
//    var maxHeight = 0;
//    var $evenHeightElements = $('.evenHeights');
//    $evenHeightElements.each(function (index) {
//      var $el = $(this);
//      if ($el.height() > maxHeight) {
//        maxHeight = $el.height();
//      }
//    });
//    $evenHeightElements.height(maxHeight);
//  };
//  setEvenHeights();
//});