"use strict";

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

new Swiper(".swiper-container", {
  slidesPerView: 7,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      loop: true,
    },
    767: {
      slidesPerView: 7,
      loop: true,
    },
  },
});

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .navigation_menu, .body").toggleClass("active");
    $("html").toggleClass("lock");
  });
  $('.header_list').click(function (event) {
    $('.header_burger,.navigation_menu').removeClass('active');
    $('html').removeClass('lock');
    $('body').removeClass('active');
  });
  $(function () {
    $(".link_anchor").on("click", function (e) {
      $("html,body")
        .stop()
        .animate({ scrollTop: $("#section_get").offset().top }, 1000);
      e.preventDefault();
    });
    $(".header_link_one").on("click", function (e) {
      $("html,body")
        .stop()
        .animate({ scrollTop: $("#dilayt").offset().top }, 1000);
      e.preventDefault();
    });
    $(".header_link_two").on("click", function (e) {
      $("html,body")
        .stop()
        .animate({ scrollTop: $("#discount").offset().top }, 1000);
      e.preventDefault();
    });
    $(".header_link_three").on("click", function (e) {
      $("html,body")
        .stop()
        .animate({ scrollTop: $("#how_get").offset().top }, 1000);
      e.preventDefault();
    });
    $(".header_link_four").on("click", function (e) {
      $("html,body")
        .stop()
        .animate({ scrollTop: $("#find").offset().top }, 1000);
      e.preventDefault();
    });
  });
});

$(".phone_mask").mask("+38(999)999-99-99");
