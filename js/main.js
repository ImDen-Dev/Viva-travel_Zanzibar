jQuery(document).ready(function ($) {
  // parallax
  $('.parallax-window').parallax({});

  // header fix
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('header').addClass('header-fix');
    } else {
      $('header').removeClass('header-fix');
    }
  });

  // centerTour
  function windowsize() {
    $(window).scroll(function () {
      var $containerwidth = $(window).width();
      if ($containerwidth <= 991) {
        //575
        $('.block-tours-route').each(function () {
          var blockPos = $(this).offset().top;
          var topWindow = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (
            blockPos < topWindow + windowHeight / 2 &&
            blockPos > topWindow + windowHeight / 4
          ) {
            $(this).addClass('route');
          } else {
            $(this).removeClass('route');
          }
        });
      } else {
        $('.block-tours-img').hover(
          function () {
            $(this).find('.block-tours-route').css('right', '0');
          },
          function () {
            $(this).find('.block-tours-route').css('right', '-100%');
          }
        );
      }
    });
  }

  windowsize();

  // validate-form
  $('.ajax-form').each(function () {
    $(this).validate({
      messages: {
        name: 'Пожалуйста, введите ваше имя',
        email: 'Пожалуйста, введите корректный адрес электронной почты',
        phone: 'Введите свой номер телефона для связи с вами',
      },
    });
  });

  // awards_and_partners slider
  // partner slider
  $('.partners-carousel').owlCarousel({
    nav: true,
    dots: false,
    margin: 30,
    autoplay: true,
    lazyLoad: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    navText: [$('.am-prev'), $('.am-next')],
    responsive: {
      0: {
        margin: 10,
        items: 2,
      },
      576: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // award slider
  $('.awards-carousel').owlCarousel({
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    lazyLoad: true,
    navText: [$('.aw-prev'), $('.aw-next')],
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(window).resize(function () {
    windowsize();
  });
});
