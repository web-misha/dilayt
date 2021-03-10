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
  $(".header_list").click(function (event) {
    $(".header_burger,.navigation_menu").removeClass("active");
    $("html").removeClass("lock");
    $("body").removeClass("active");
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

$(".phone_mask").mask("+38(099)999-99-99");

let form = document.getElementsByTagName("form")[0];
let error = document.querySelector(".error");
let tel = document.getElementById("tel");
let button = document.getElementById("btn");
let check = document.querySelector("input[type=checkbox]");
let tel_p = document.getElementById("form_tel_p");
let check_p = document.getElementById("form_check_p");
let span = document.getElementById("cehckbox_fake");

function validate() {
  if (!tel.value | !check.checked) {
    tel.style.border = "2px solid red";
    tel_p.classList.add("tel_p_active");
    check_p.classList.add("form_check_p_active");
    span.classList.add("cehckbox_fake_active");
    return false;
  } else {
    tel.style.border = "2px solid transparent";
    tel_p.classList.remove("tel_p_active");
    check_p.classList.remove("form_check_p_active");
    span.classList.remove("cehckbox_fake_active");
  }
  
}

/*
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section_scroll').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.navigation_menu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.navigation_menu a').forEach((el) => {
					if (el.classList.contains('activeeeee')) {
						el.classList.remove('activeeeee');
					}
				});

				document.querySelectorAll('.navigation_menu li')[i].querySelector('a').classList.add('activeeeee');
			}
		});
	}
});*/
