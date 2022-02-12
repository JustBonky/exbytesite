gsap.to('.intro-top-left-arrow', 1.5, {
    ease: 'expo',
    transform: 'translate(-50%, -100%) scale(1)',
})

gsap.to('.intro-top-left-arrow path', 1.3, {
    strokeDasharray: '300, 300',
    ease: 'rough',
})

gsap.to('.intro-bottom-left-controllers svg:nth-child(1)', 0.7, {
    top: 'calc(50% + 0px)',
    left: 'calc(50% + 0px)',
    opacity: 1,
    ease: 'rough',
})

gsap.to('.intro-bottom-left-controllers svg:nth-child(2)', 0.7, {
    top: 'calc(50% - 8px)',
    left: 'calc(50% - 27px)',
    opacity: 1,
    ease: 'rough',
})




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


document.addEventListener("DOMContentLoaded", function () {
    initParallax();

    document.addEventListener('mousemove', mouseParallax);
    // document.addEventListener('scroll', scrollParallax)
});

var cursorX = 0; var cursorY = 0;
var offsetX = 0; var offsetY = 0;
var depthXY = 0;
var scenes;
var layers;

// Initialize variables
function initParallax() {
    scenes = document.querySelectorAll('.intro-s_block--right');
    layers = document.querySelectorAll('.intro-s_block--right div');
    console.log(layers)
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
    cursorX = event.clientX;
    cursorY = event.clientY;
    for (i = 0; i < layers.length; i++) {
        depthXY = 0.3;
        offsetX = ((cursorX * depthXY) / 8);
        offsetY = ((cursorY * depthXY) / 8);
        layers[i].style.transform = 'translate3d(' + offsetX + 'px,' + offsetY + 'px,0px)';
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