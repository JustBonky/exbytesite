const aft = document.querySelector('.body-header');

const tl = gsap.timeline({
    paused: true,
    defaults: {
        duration: 0.3,
    },
    onStart: () => aft.classList.add('scrolled'),
    onReverseComplete: () => aft.classList.remove('scrolled'),
})

tl.to('.body-header', { height: 80 })
tl.to('.logo', { scale: 0.95 })


gsap.to('.body-header .menu li', 0.5, {
    left: 0,
    opacity: 1,
    stagger: 0.1,
})

window.addEventListener('scroll', (e) => {

    if (window.pageYOffset > 0) {

        tl.play()

    } else {
        tl.reverse()
    }
})