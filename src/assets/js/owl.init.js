//Owl Carousel
$('#customer-testi').owlCarousel({
  loop:true,
  nav: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

$('.owl-roadmap').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText : ["<i class='mdi mdi-chevron-left'></i>","<i class='mdi mdi-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#testi-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    navText : ["<i class='mdi mdi-chevron-left'></i>","<i class='mdi mdi-chevron-right'></i>"],
    responsive:{
        576:{
            items:2
        },

    }
});

$('#two-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        576:{
            items:2
        },

    }
});

$('#owl-fade').owlCarousel({
  loop:true,
  nav: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  animateOut: 'fadeOut',
  items: 1,
})