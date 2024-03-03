

$(function () {
  "use strict";


  // slider

  $('.slider1').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    autoplay: true,
  });


  $(document).ready(function () {
    $('.btn-grp').slick({
      dots: false,
      arrows: false,
      infinite: false,
      variableWidth: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 4,
      autoplay: false,
      dragging: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
    });
    $('.mini').slick({
      dots: false,
      arrows: false,
      infinite: false,
      variableWidth: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 4,
      autoplay: true,
      dragging: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
    });
    $('.trends').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
  });

  $(document).ready(function () {
    $('.topProductNavbar').slick({
      dots: false,
      arrows: false,
      infinite: false,
      variableWidth: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 4,
      autoplay: false,
      dragging: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
    });
    $('.reels').slick({
      dots: false,
      arrows: false,
      infinite: false,
      variableWidth: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      dragging: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
 
  $(document).ready(function () {
    $('.g67').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });


  });
  $(document).ready(function () {
    $('.product-thumbs').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            // dots:true
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });


  });




  // $(document).ready(function () {
  //   $('.yellow').slick({
  //     dots: true,
  //     arrows: true,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
  //     nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
  //     responsive: [
  //       {
  //         breakpoint: 1025,
  //         settings: {
  //           slidesToShow: 4,
  //           slidesToScroll: 1,
  //           infinite: true,
  //         }
  //       },
  //       {
  //         breakpoint: 769,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           arrows: false,
  //         }
  //       },
  //       {
  //         breakpoint: 400,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           arrows: false,
  //         }
  //       }
  //     ]
  //   });


  // });







});









$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.slider-nav',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
  })

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
  })
});

$('.modal').on('shown.bs.modal', function (e) {
  $('.slider-for').slick('setPosition');
  $('.slider-nav').slick('setPosition');
  $('.wrap-modal-slider').addClass('open');
})





