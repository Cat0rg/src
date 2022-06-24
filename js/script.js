$(document).ready(function () {
   $('.courusel__slick').slick({
      nextArrow: '<button type="button" class="slick-next"><img src="images/icon/right.png"></button>',
      prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/left.png"></button>',
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               arrows: false,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         }
      ]
   });
});