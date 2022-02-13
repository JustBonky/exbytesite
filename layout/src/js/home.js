

const introBgTl = gsap.timeline({
    defaults: {
        duration: 1.5,
        ease: Back.easeInOut
    },
    onComplete: test,
})


introBgTl.to('.intro-top-left-arrow', {
    scale: 1,
    left: '+=15',
    top: '-=15'
}, 0)

introBgTl.to('.intro-top-left-arrow path', {
    strokeDasharray: '300, 300'
}, 0)


introBgTl.to('.intro-bottom-left-controllers svg:nth-child(1)', {
    top: 10,
    left: 25,
    opacity: 1,
    ease: Expo.easeInOut
}, 0)

introBgTl.to('.intro-bottom-left-controllers svg:nth-child(2)', 0.7, {
    top: 0,
    left: 0,
    opacity: 1,
    ease: Expo.easeInOut
}, 0)




const tlTitle = gsap.timeline({
    defaults: {
        duration: 0.4,
    }
})

gsap.fromTo('h1 .stroke-item', { x: -30 }, { x: 0, duration: 1.3, stagger: 0.1, })

tlTitle.to('h1 .stroke-item div', {
    right: 'auto',
    left: '0',
    width: '100%',
    ease: Sine.easeOut,
    x: 0,
    stagger: 0.1,
    delay: 0.2
})

tlTitle.to('h1 .stroke-item span', 0.01, { opacity: 1 })

tlTitle.to('h1 .stroke-item div', {
    right: '0',
    left: 'auto',
    width: '0%',
    ease: Sine.easeOut,
    stagger: 0.1,
})

// gsap.from('h1', {
//     scale: 1.1,
//     duration: 1,
// }, {
//     scale: 1,
//     ease: Back.easeOut,
//     delay: 0.2,
// })


// document.addEventListener("DOMContentLoaded", function () {

//     console.log('dom loaded')

//     initParallax();
//     document.addEventListener('mousemove', mouseParallax);
//     // document.addEventListener('scroll', scrollParallax)
// });

function test() {
    initParallax();
    document.addEventListener('mousemove', mouseParallax);
}

var cursorX = window.innerWidth / 2; var cursorY = window.innerHeight / 2;
var offsetX = window.innerWidth / 2; var offsetY = window.innerHeight / 2;
var depthXY = 0;
var scenes;
var layers;

// Initialize variables
function initParallax() {
    scenes = document.querySelectorAll('.intro-s_block--right');
    layers = document.querySelectorAll('.intro-s_block--right div');
}

// Called on scroll
function scrollParallax(event) {
    // if (document.getElementById('sm').checked) {
    sP(layers, 0.9);
    // }
}

// Called on Mouse move
function mouseParallax(event) {
    mP(event);
}

//Mouse move Parallax 
function mP(event) {
    cursorX = event.clientX; // 960
    cursorY = event.clientY;
    for (i = 0; i < layers.length; i++) {
        depthXY = 0.3;
        offsetX = ((cursorX * depthXY) / 12);
        offsetY = ((cursorY * depthXY) / 12);
        layers[i].style.transform = 'translate3d(' + offsetX + 'px,' + offsetY + 'px,0px)';
        // layers[i].style.left = offsetX + 'px'
        // layers[i].style.top = offsetY + 'px'
    }
}

//Scrolling Parallax
function sP($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var from_top = window.pageYOffset;
    var bg_css = '0' + (multiplier * from_top) + 'px';
    for (var index = 0; index < $object.length; index++) {
        $object[index].style.marginTop = bg_css;
    }
};

//IE Fallback
if (typeof window.getComputedStyle(document.body).backgroundBlendMode == 'undefined') {
    document.documentElement.className += " no-background-blend-mode";
}