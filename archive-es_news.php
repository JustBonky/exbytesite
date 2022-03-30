<?php
get_header();
function get_attachment_url_by_slug($slug)
{
    $args = array(
        'post_type' => 'attachment',
        'name' => sanitize_title($slug),
        'posts_per_page' => 1,
        'post_status' => 'inherit',
    );
    $_header = get_posts($args);
    $header = $_header ? array_pop($_header) : null;
    return $header ? wp_get_attachment_url($header->ID) : '';
}
?>

<main class="body-content container" id="body-content" role="main">

    <section class='blog-intro-section'>
        <h1 class='blog-intro-section-title'>
            <span class="intro-suptitle">GAMES BLOG</span>
            <span class="intro-title">All about our updates!</span>
        </h1>
        <div class="blog-intro-section-background">
            <img src="http://exbyte-studios.loc/wp-content/uploads/Rectangle-9570.jpg" alt="blog-bg">
        </div>
    </section>

    <section class="blog-filter-section">
        <div>
            <div class="blog-search">
                <?php get_search_form(); ?>
            </div>
            <div class="blog-filter">
                filter
            </div>
        </div>
    </section>

    <section class="blog-posts">
        <?php if (isset($_GET['s'])) : ?>
            <div id="search-final-result"></div>
        <?php else : ?>
            <div>1, 2, 3</div>
        <?php endif; ?>
    </section>
</main>

<?php
get_footer();
?>