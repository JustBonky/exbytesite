<?php



add_action('init', function () {

	register_post_type(
		'es_news',
		[
			'labels' => [
				'name' => 'Новости',
				'add_new' => 'Добавить новость'
			],
			'public' => true, // !!!
			'menu_position' => 4,
			'menu_icon' => 'dashicons-format-gallery',
			'supports' => [
				'title',
				'editor',
				'thumbnail',
				'excerpt'
			],
			'rewrite' => [
				'slug' => 'news',
			],
			'has_archive' => true
		]
	);

	register_post_type(
		'es_games', // length no more 20 !!!
		[
			'labels' => [
				'name' => 'Игры',
				'add_new' => 'Добавить новую',
				'add_new_item' => 'Добавить новую игру',
			],
			'public' => true,
			'menu_position' => 5,
			'menu_icon' => 'dashicons-buddicons-activity',
			'supports' => [
				'title',
				// 'excerpt',
				// 'custom-fields'
			],
			'rewrite' => [
				'slug' => 'games',
			],
			'has_archive' => true,
			'taxonomies'  => array('category'),
		]
	);


	register_post_type(
		'es_find-us-blocks', // length no more 20 !!!
		[
			'labels' => [
				'name' => 'Соц. сети',
				'add_new' => 'Добавить новую',
				'add_new_item' => 'Добавить новую соц. сеть',
			],
			'public' => true,
			'menu_position' => 6,
			'menu_icon' => 'dashicons-twitter',
			'supports' => [
				'title',
				'thumbnail',
				'custom-fields'
			]
		]
	);
});


add_action(
	'template_redirect',
	function () {
		if (
			is_singular('es_press-kits') ||
			is_singular('attachment')
		) {
			global $wp_query;
			$wp_query->posts = [];
			$wp_query->post = null;
			$wp_query->set_404();
			status_header(404);
			nocache_headers();
		}
	}
);

/**
 * exbyte-theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package exbyte-theme
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function exbyte_theme_setup()
{
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on exbyte-theme, use a find and replace
		* to change 'exbyte-theme' to the name of your theme in all the template files.
		*/
	load_theme_textdomain('exbyte-theme', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support('title-tag');

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support('post-thumbnails');


	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'main-menu' => esc_html__('Primary', 'exbyte-theme'),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
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

	// Set up the WordPress core custom background feature.
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

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action('after_setup_theme', 'exbyte_theme_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function exbyte_theme_content_width()
{
	$GLOBALS['content_width'] = apply_filters('exbyte_theme_content_width', 640);
}
add_action('after_setup_theme', 'exbyte_theme_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function exbyte_theme_widgets_init()
{
	register_sidebar(
		array(
			'name'          => esc_html__('Sidebar', 'exbyte-theme'),
			'id'            => 'sidebar-1',
			'description'   => esc_html__('Add widgets here.', 'exbyte-theme'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action('widgets_init', 'exbyte_theme_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function exbyte_theme_scripts()
{

	wp_enqueue_style('exbyte-theme-style', get_stylesheet_uri(), [], _S_VERSION);


	if (!is_admin()) {
		// Remove default WordPress jQuery
		wp_deregister_script('jquery');
		// Register new jQuery script via Google Library    
		wp_register_script('jquery',  get_template_directory_uri() . '/assets/js/libs/jquery.js', false, '3.6.0');
		// Enqueue the script   
		wp_enqueue_script('jquery');
	}

	wp_enqueue_script(
		'es-owl-carousel',
		get_template_directory_uri() . '/assets/js/libs/owl.carousel.min.js',
		['jquery'],
		_S_VERSION,
		true
	);

	wp_enqueue_script(
		'canvas-bg',
		get_template_directory_uri() . '/assets/js/canvas-bg.min.js',
		[],
		_S_VERSION,
		true
	);

	if (is_front_page()) {

		wp_enqueue_script(
			'es-carousels',
			get_template_directory_uri() . '/assets/js/carousels.js',
			['jquery', 'es-owl-carousel'],
			_S_VERSION,
			false
		);
	}


	wp_enqueue_style('exbyte-theme-index-css', get_template_directory_uri() . '/assets/css/index.css', [], _S_VERSION);

	wp_enqueue_style('es-owl-css', get_template_directory_uri() . '/assets/css/owl.carousel.min.css', [], _S_VERSION);
}
add_action('wp_enqueue_scripts', 'exbyte_theme_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}
