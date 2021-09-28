const swiper = new Swiper('.swiper.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
});
const swiper2 = new Swiper('.swiper.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// header

document.querySelector(".mobile-menu-button").addEventListener("click", function (e) {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
});

window.onscroll = function (e) {
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  console.log(scrollTop)
  if (scrollTop > 73) {
    document.querySelector(".nav__middle-left").style.boxShadow = "0px 0px 4px -2px"
    document.querySelector(".nav__top").style.transition = "all .3s ease-out";
    document.querySelector(".nav__top").style.top = "-32px";
    document.querySelector(".nav__middle-left").style.transition = "all .3s ease-out";
    document.querySelector(".nav__middle-left").style.top = 0;
    document.querySelector(".nav__log-in").style.transition = "all .3s ease-out";
    document.querySelector(".nav__log-in").style.top = 0;
    document.querySelector(".nav__bottom").style.transition = "all .3s ease-out";
    document.querySelector(".nav__bottom").style.top = 105-34.4 +"px";
  } else {
    document.querySelector(".nav__middle-left").style.boxShadow = "unset";
    document.querySelector(".nav__top").style.transition = "all .3s ease-out";
    document.querySelector(".nav__top").style.top = "0px";
    document.querySelector(".nav__middle-left").style.transition = "all .3s ease-out";
    document.querySelector(".nav__middle-left").style.top = "32px";
    document.querySelector(".nav__log-in").style.transition = "all .3s ease-out";
    document.querySelector(".nav__log-in").style.top = "32px";
    document.querySelector(".nav__bottom").style.transition = "all .3s ease-out";
    document.querySelector(".nav__bottom").style.top = "105px";
  }
}
