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

tl.to('.body_header', {height: 80});
tl.to('.logo', {scale: 0.95});


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


jQuery(document).ready(function ($) {
    const search_input = $('.search-form__input');
    const search_results = $('.ajax-search');
    const final_s = $('#search-final-result');

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.s) {
        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST',
            data: {
                'action': 'ajax_search',
                'term': params.s,
                'full': true,
            },
            success: function (results) {
                $('.blog-posts').fadeIn(200).html(results);
            }
        });
    }

    search_input.keyup(function () {
        let search_value = search_input.val();
        if (search_value) { // кол-во символов
            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: 'POST',
                data: {
                    'action': 'ajax_search', // functions.php 
                    'term': search_value
                },
                success: function (results) {
                    search_results.fadeIn(200).html(results);
                }
            });
        } else {
            search_results.fadeOut(200);
        }
    });

    // Закрытие поиска при клике вне его 
    $(document).mouseup(function (e) {
        if (($('search-form-wrapper').has(e.target).length === 0)) {
            search_results.fadeOut(200);
        }
    });
});

$('.jobs-item').each(function () {
    $(this).click(function () {
        if ($(this).find('.jobs-item_text').is(':visible')) {
            $(this).find('.jobs-item_text').fadeOut(200)
        } else {
            $('.jobs-item .jobs-item_text').each(function () {
                $(this).fadeOut(200)
            })
            $(this).find('.jobs-item_text').fadeIn(200)
        }
    })
})