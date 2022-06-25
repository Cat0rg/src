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
               autoplay: true,
               autoplaySpeed: 5000
            }
         }
      ]
   });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
      $(this)
         .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
         .closest('div.container').find('div.catalog__second').removeClass('catalog__second-active').eq($(this).index()).addClass('catalog__second-active');
   });

   $('.catalog__link').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.catalog__content').eq(i).toggleClass('catalog__content-active');
         $('.catalog__list').eq(i).toggleClass('catalog__list-active');
      })
   });

   $('.catalog__list-link').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.catalog__content').eq(i).toggleClass('catalog__content-active');
         $('.catalog__list').eq(i).toggleClass('catalog__list-active');
      })
   });

   //Модельные окна //.fadeOut() -готовая анимация скрыть
   $('[data-module=first]').on('click', function () {
      $('.overlay, #first').fadeIn();
   });
   $('.model__close').on('click', function () {
      $('.overlay, #first, #tree, #second').fadeOut();
   });

   $('.button__mini').each(function (i) {
      $(this).on('click', function () {
         $('#second .model__deskr').text($('.catalog__subtitle').eq(i).text());
         $('.overlay, #second').fadeIn();
      })
   });

});