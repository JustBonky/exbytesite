<?php
get_header();
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
            <div class="blog-search">
                <?php get_search_form(); ?>
            </div>
            <div class="blog-filter">
                filter
            </div>
        </section>

        <section class="blog-posts">
            <?php if (isset($_GET['s'])) : ?>
                <div id="search-final-result">RESULT</div>
            <?php else : ?>
                <?php
                $news = new WP_Query([
                    'post_type' => 'es_news',
                    'post_status' => 'publish'
                ]);
                ?>
                <?php if ($news->have_posts()) : ?>
                    <?php while ($news->have_posts()) : $news->the_post(); ?>
                        <div class="blog-item">
                            <div class="blog-item-preview-image">
                                <?= wp_get_attachment_image(CFS()->get('post_preview_image'), 'full'); ?>
                            </div>
                            <div class="blog-item-date">
                                <?= get_the_date(__('M d, Y')); ?>
                            </div>
                            <div class="blog-item-title">
                                <?= CFS()->get('post_name'); ?>
                            </div>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            <?php endif; ?>
        </section>
    </main>

<?php
get_footer();
?>