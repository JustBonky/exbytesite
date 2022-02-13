$(document).ready(function () {
    $(".games-carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 2,
        animateOut: "animate__fadeOutDown",
        animateIn: "animate__fadeInDown",
        smartSpeed: 500,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                margin: 40,
            },
            1200: {
                margin: 100,
            }
        },
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });

    $(".news_slider").owlCarousel({
        loop: true,
        items: 3,
        animateOut: "animate__fadeOutDown",
        animateIn: "animate__fadeInDown",
        smartSpeed: 500,
        dots: true,
        dotsEach: true,
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