// slick slider

$(".articles__wrapper").slick({
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  mobileFirst: true,
  dots: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },    
    {
      breakpoint: 568,
      settings: {        
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});

$(".feedback__slider").slick({
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  mobileFirst: true,
  dots: true,
  autoplay: true,
  variableWidth: true,
  prevArrow: $('.slider__left-btn'),
  nextArrow: $('.slider__right-btn'),
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },    
    {
      breakpoint: 568,
      settings: {        
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
  