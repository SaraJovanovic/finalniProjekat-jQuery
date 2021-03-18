$(document).ready(function () {
    
    // HERO
    if ($('.hero-slider').length > 0) {
        $('.hero-slider').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            autoplayHoverPause: true
        });
    }
    // TESTIMONIALS
     if ($('.testimonials-slider').length > 0) {
        $('.testimonials-slider').owlCarousel({
            items: 2,
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                900: {
                    margin: 30
                }
            }
        });
    }
    // PLATFORM
     if ($('.platform-slider').length > 0) {
        $('.platform-slider').owlCarousel({
            items: 6,
            margin: 40,
            autoplay: true,
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                350: {
                    items: 2
                },
                550: {          
                    items: 3
                },
                700: {
                    items: 4
                },
                950: {
                    margin: 30
                }
            }
        });
    }
});

