const aft = document.querySelector('.body-header');

        const tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.3,
                // ease: 'expo'
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

        window.addEventListener('scroll', (e) => {

            if (window.pageYOffset > 0) {

                tl.play()

            } else {
                tl.reverse()
            }
        })