<?php

add_action('init', function () {
    register_post_type(
        'es_news',
        [
            'labels' => [
                'name' => 'Блог',
                'add_new' => 'Добавить новость'
            ],
            'public' => true,
            'menu_position' => 4,
            'menu_icon' => 'dashicons-format-gallery',
            'supports' => ['title'],
            'rewrite' => ['slug' => 'blog'],
            'has_archive' => true,
            'taxonomies' => array('category')
        ]
    );
    register_post_type(
        'es_games',
        [
            'labels' => [
                'name' => 'Игры',
                'add_new' => 'Добавить новую',
                'add_new_item' => 'Добавить новую игру'
            ],
            'public' => true,
            'menu_position' => 5,
            'menu_icon' => 'dashicons-buddicons-activity',
            'supports' => ['title'],
            'rewrite' => ['slug' => 'games'],
            'has_archive' => true,
            'taxonomies' => array('category')
        ]
    );
    register_post_type(
        'es_socials',
        [
            'labels' => [
                'name' => 'Соц. сети',
                'add_new' => 'Добавить новую',
                'add_new_item' => 'Добавить новую соц. сеть',
            ],
            'public' => true,
            'menu_position' => 6,
            'menu_icon' => 'dashicons-twitter',
            'supports' => ['title']
        ]
    );
});


/**
 * Редирект на родительский пост вложения
 * или редирект на главную страницу
 */
// add_action('template_redirect', function () {
//     if (is_attachment()) {
//         global $post;
//         if ($post && $post->post_parent) {
//             wp_redirect(esc_url(get_permalink($post->post_parent)), 301);
//             exit;
//         } else {
//             wp_redirect(esc_url(home_url('/')), 301);
//             exit;
//         }
//     }
// });

if (!defined('_S_VERSION')) {
    // Replace the version number of the theme on each release.
    define('_S_VERSION', '1.0.0');
}

function exbyte_theme_setup()
{
    load_theme_textdomain('exbyte-theme', get_template_directory() . '/languages');

    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(
        array(
            'main-menu' => esc_html__('Primary', 'exbyte-theme'),
        )
    );
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );
    add_theme_support(
        'custom-background',
        apply_filters(
            'exbyte_theme_custom_background_args',
            array(
                'default-color' => 'ffffff',
                'default-image' => '',
            )
        )
    );
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support(
        'custom-logo',
        array(
            'height' => 250,
            'width' => 250,
            'flex-width' => true,
            'flex-height' => true,
        )
    );
}

add_action('after_setup_theme', 'exbyte_theme_setup');

function exbyte_theme_content_width()
{
    $GLOBALS['content_width'] = apply_filters('exbyte_theme_content_width', 640);
}

add_action('after_setup_theme', 'exbyte_theme_content_width', 0);

/**
 * Enqueue scripts and styles.
 */
function exbyte_theme_scripts()
{
    $root = get_template_directory_uri();

    wp_enqueue_style('exbyte-theme-style', get_stylesheet_uri(), [], _S_VERSION);

    if (!is_admin()) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', $root . '/assets/js/libs/jquery.js', false, '3.6.0');
        wp_enqueue_script('jquery');
    }
    wp_enqueue_script('es-owl-carousel', $root . '/assets/js/libs/owl.carousel.min.js', ['jquery'], _S_VERSION, true);
    wp_enqueue_script('cookies-js', 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js', [], _S_VERSION, true);
    wp_enqueue_script('es-gsap', $root . '/assets/js/libs/gsap.min.js', [], _S_VERSION, true);
    wp_enqueue_script('es-gsap-scroll', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js', [], _S_VERSION, true);
    wp_enqueue_script('global-js', $root . '/assets/js/global.js', ['cookies-js', 'jquery', 'es-gsap', 'es-gsap-scroll'], _S_VERSION, true);

    // wp_enqueue_script(
    //     'canvas-bg',
    //     get_template_directory_uri() . '/assets/js/main-canvas-bg.js',
    //     [],
    //     _S_VERSION,
    //     true
    // );

    if (is_front_page()) {
        wp_enqueue_script(
            'es-carousels',
            get_template_directory_uri() . '/assets/js/carousels.js',
            ['jquery', 'es-owl-carousel'],
            _S_VERSION,
            true
        );

        wp_enqueue_script(
            'es-home-js',
            get_template_directory_uri() . '/assets/js/home.js',
            ['cookies-js', 'jquery', 'es-gsap', 'es-gsap-scroll'],
            _S_VERSION,
            true
        );
    }


    wp_enqueue_style(
        'exbyte-theme-index-css',
        get_template_directory_uri() . '/assets/css/index.css',
        [],
        _S_VERSION
    );

    wp_enqueue_style(
        'es-owl-css',
        get_template_directory_uri() . '/assets/css/owl.carousel.min.css',
        [],
        _S_VERSION
    );
}

add_action('wp_enqueue_scripts', 'exbyte_theme_scripts');

require get_template_directory() . '/functions/ajax-search.php';

add_filter('pre_get_posts', 'include_search_filter');
function include_search_filter($query)
{
    if (!is_admin() && $query->is_main_query() && $query->is_search) {
        $query->set('post_type', 'es_news');
    }
    return $query;
}


/**
 * Implement the Custom Header feature.
 */
// require get_template_directory() . '/inc/custom-header.php';

// /**
//  * Custom template tags for this theme.
//  */
// require get_template_directory() . '/inc/template-tags.php';

// /**
//  * Functions which enhance the theme by hooking into WordPress.
//  */
// require get_template_directory() . '/inc/template-functions.php';

// /**
//  * Customizer additions.
//  */
// require get_template_directory() . '/inc/customizer.php';

// /**
//  * Load Jetpack compatibility file.
//  */
// if (defined('JETPACK__VERSION')) {
//     require get_template_directory() . '/inc/jetpack.php';
// }