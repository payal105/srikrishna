  $(document).ready(function () {
    $(".clint-slider").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 6
        }
      }
    });
  });


  $(document).ready(function () {
    $(".testimonials_box").owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      dots:false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 2, // Always show 2 items
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });
  });