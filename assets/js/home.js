const introBgTl = gsap.timeline({
    defaults: {
        duration: 1.5,
        ease: Back.easeInOut
    }
});

introBgTl
    .to('.intro-top-left-arrow', {
        scale: 0.85,
        left: '+=15',
        top: '-=15',
        opacity: 1,
    }, 0)
    .fromTo('.body_header_logo', {
        opacity: 0,
        y: -10
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, 0)
    .fromTo('#menu-main-menu li', {
        opacity: 0,
        y: -10
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.5,
    }, 0.5)
    .fromTo('.body_header_account', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.8,
    }, 1)
    .fromTo('.intro-preview-img', {
        opacity: 0,
        bottom: 10,
    }, {
        opacity: 1,
        bottom: 0        
    }, 0.5)

introBgTl.to('.intro-top-left-arrow path', {
    strokeDasharray: '300, 300'
}, 0);


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

introBgTl.to('.intro-bottom-right-cross', 0.7, {
    bottom: -100,
    right: 0,
    bottom: 30,
    opacity: 1,
    rotation: 50,
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

tlTitle.to('h1 .stroke-item span', 0.01, { opacity: 1 });

tlTitle.to('h1 .stroke-item div', {
    right: '0',
    left: 'auto',
    width: '0%',
    ease: Sine.easeOut,
    stagger: 0.1,
});


gsap.registerPlugin();

let sections = gsap.utils.toArray("section:not(.intro-section)");

sections.forEach((section) => {
    let title = section.querySelector(".section-title");
    let text = section.querySelector(".anim-sec-body");
    gsap
        .timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom bottom",
                // markers: true
            }
        })
        .from(title, {
            opacity: 0,
            x: 30
        })
        .from(text, {
            opacity: 0,
            x: -15
        })
});