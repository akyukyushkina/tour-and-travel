$(document).ready(function () {


  $('.slider__wrapper').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="6" height="11" viewBox="0 0 6 11" xmlns="http://www.w3.org/2000/svg"><path d = "M5 10L1 5.5L5 1" stroke - width = "2" stroke - linecap = "round" stroke - linejoin = "round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="6" height="11" viewBox="0 0 6 11" xmlns="http://www.w3.org/2000/svg"><path d = "M1 1L5 5.5L1 10" stroke - width = "2" stroke - linecap = "round" stroke - linejoin = "round"/></svg></button>',
    infinity: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      }
    }]
  });

  $(function () {

    $(".slider__stars").rateYo({
      rating: 5
    });

  });

  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
    top = $(id).offset().top -150;
    $("body,html").animate({scrollTop: top}, 1500);
  })

  $(".menu__btn, .menu a").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

});