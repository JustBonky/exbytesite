// document.addEventListener('DOMContentLoaded', function () {
//     window.media1200 = 1200;
//     window.media1024 = 1024;
//     window.media768 = 768;
// })
//
//
const aft = document.querySelector('.body_header');

const tl = gsap.timeline({
    paused: true,
    defaults: {
        duration: 0.3,
    },
    onStart: () => aft.classList.add('scrolled'),
    onReverseComplete: () => aft.classList.remove('scrolled'),
});

tl.to('.body_header', { height: 80 });
tl.to('.logo', { scale: 0.95 });


// gsap.to('.body-header .menu li', 0.5, {
//     left: 0,
//     opacity: 1,
//     stagger: 0.1,
// });

window.addEventListener('scroll', (e) => {

    if (window.pageYOffset > 0) {
        tl.play()
    } else {
        tl.reverse()
    }
})


if (!Cookies.get('hide-cookie')) {
    const cookieBlock = document.querySelector('.cookie-block');
    const cookieAccessBtn = cookieBlock.querySelector('button');
    cookieAccessBtn.addEventListener('click', () => {
        cookieBlock.classList.add('cookie-hiding');
        setTimeout(() => {
            cookieBlock.remove();
        }, 240);
        Cookies.set('hide-cookie', 'true', {
            expires: 20
        });
    });
}