// console.log("ok");

$(".employe-slider").slick({
  dots: ture,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  //   prevArrow: '<i class="fas fa-angle-left prev"></i>',
  //   nextArrow: '<i class="fas fa-angle-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
