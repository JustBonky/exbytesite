$(document).ready(function () {
    $(".games-carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 2,
        smartSpeed: 500,
        dots: true,
        dotsEach: true,
        nav: true,
        responsive: {
            0: {
                margin: 40,
            },
            1200: {
                margin: 100,
            }
        },
        // autoplay: true,
        // autoplayTimeout: 4000,
        // autoplayHoverPause: true,
    });

    $(".news_slider").owlCarousel({
        loop: true,
        items: 3,
        smartSpeed: 500,
        dots: true,
        dotsEach: true,
        nav: true,
        responsive: {
            0: {
                margin: 10,
            },
            1024: {
                margin: 15,
            },
            1200: {
                margin: 20,
            }
        },
        // autoplay: true,
        // autoplayTimeout: 4000,
        // autoplayHoverPause: true,
    });
});