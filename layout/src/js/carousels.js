$(document).ready(function () {
    $(".games-carousel").owlCarousel({
        loop: true,
        margin: 40,
        items: 2,
        animateOut: "slideOutDown",
        animateIn: "flipInX",
        smartSpeed: 1000,
        dots: true,
        dotsEach: true,
		// autoplay: true,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true,
    });
});

// $('.news-s_slider').slick({
//     dots: true,
//     arrows: false,
//     speed: 1000,
//     slidesToShow: 3
// })