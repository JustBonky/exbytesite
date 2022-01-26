const header = document.getElementById('site-header')

window.addEventListener('scroll', (e) => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop


    if (scrollTop > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})