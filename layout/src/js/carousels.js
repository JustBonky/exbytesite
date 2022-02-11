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