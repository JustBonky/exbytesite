// const header = document.getElementById('site-header');

// document.querySelector('.scroll-content').addEventListener('scroll', function (event) {

//     console.log(event)

//     // if (window.scrollY > 0) {
//     //     gsap.to(header, 0.2, {
//     //         height: 80,
//     //         color: '#000'
//     //     })
//     //     gsap.to('.header-bg', 0.15, {
//     //         opacity: 1,
//     //         y: '0%',
//     //         ease: Sine.easeOut
//     //     })
//     // } else {
//     //     gsap.to(header, 0.3, {
//     //         height: 100,
//     //         color: '#fff'
//     //     })
//     //     gsap.to('.header-bg', {
//     //         duration: 0.3,
//     //         opacity: 0,
//     //         y: '-100%'
//     //     })
//     // }
// });

var Scrollbar = window.Scrollbar;

Scrollbar.init(document.body, {
    delegateTo: document.querySelector('scroll-content')
});

document.querySelector('.scroll-content').addEventListener('wheel', function (event) {

    console.log(event.clientY)

    // if (event.clientY > 0) {
    //     gsap.to(header, 0.2, {
    //         height: 80,
    //         color: '#000'
    //     })
    //     gsap.to('.header-bg', 0.15, {
    //         opacity: 1,
    //         y: '0%',
    //         ease: Sine.easeOut
    //     })
    // } else {
    //     gsap.to(header, 0.3, {
    //         height: 100,
    //         color: '#fff'
    //     })
    //     gsap.to('.header-bg', {
    //         duration: 0.3,
    //         opacity: 0,
    //         y: '-100%'
    //     })
    // }
})