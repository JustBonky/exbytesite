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


gsap.to('h1 p span', 1, {
    yPercent: -100,
    ease: Sine.easeOut,
    delay: 0.3,
    // stagger: 0.05
})
