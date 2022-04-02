const introBgTl = gsap.timeline({
    defaults: {
        duration: 1.5,
        ease: Back.easeInOut,
    }
});

introBgTl
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
    .fromTo('.intro-top-left-arrow', {
        scale: 0.7,
        opacity: 0,
    }, {
        scale: 0.9,
        opacity: 1,
        x: '+=50%',
        y: '-=50%'
    }, 0)
    .fromTo('.intro-preview-img', {
        opacity: 0,
        bottom: 5,
    }, {
        opacity: 1,
        bottom: 0
    }, 0.5)
    .to('.intro-top-left-arrow path', {
        strokeDasharray: '300, 300'
    }, 0)
    .fromTo('.intro-bottom-left-controllers svg:nth-child(1)', {
        opacity: 0,
        y: '+=50',
        x: '+=30'
    }, {
        opacity: 1,
        y: '+=80',
        x: '-=30',
        ease: Expo.Power2,
        duration: 0.7,
    }, 0.5)
    .fromTo('.intro-bottom-left-controllers svg:nth-child(2)', {
        opacity: 0,
        y: '+=50',
        x: '-=40'
    }, {
        opacity: 1,
        y: '+=80',
        x: '+=40',
        ease: Expo.Power2,
        duration: 0.7,
    }, 0.5)
    .fromTo('.intro-bottom-right-cross', {
        opacity: 0,
    }, {
        bottom: -70,
        right: -0,
        opacity: 1,
        rotation: 70,
        ease: Expo.easeInOut
    }, 0.8)


const tlTitle = gsap.timeline({
    defaults: {
        duration: 0.4,
    }
})

gsap.fromTo('h1 .stroke-item', {x: -30}, {x: 0, duration: 1.3, stagger: 0.1,})

tlTitle
    .to('h1 .stroke-item div', {
        right: 'auto',
        left: '0',
        width: '100%',
        ease: Sine.easeOut,
        x: 0,
        stagger: 0.1,
        delay: 0.2
    })
    .to('h1 .stroke-item span', 0.01, {opacity: 1})
    .to('h1 .stroke-item div', {
        right: '0',
        left: 'auto',
        width: '0%',
        ease: Sine.easeOut,
        stagger: 0.1,
    })


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
})