<?php
get_header();
?>

    <main class="body-content container" id="body-content" role="main">

        <section class='blog-intro-section'>
            <h1 class='blog-intro-section-title'>
                <span class="intro-suptitle">GAMES BLOG</span>
                <span class="intro-title">Updates category!</span>
            </h1>
            <div class="blog-intro-section-background">
                <?= wp_get_attachment_image(155, 'full'); ?>
            </div>
        </section>

        <section class="blog-filter-section">
            <div class="blog-search">
                <?php get_search_form(); ?>
            </div>
        </section>

        <section class="blog-posts">
            <?php if (isset($_GET['s'])) : ?>
                <div id="search-final-result">RESULT</div>
            <?php else : ?>
                <?php
                $news_update = new WP_Query([
                    'post_type' => 'es_news',
                    'post_status' => 'publish',
                    'category_name' => 'update'
                ]);
                ?>
                <?php if ($news_update->have_posts()) : ?>
                    <?php while ($news_update->have_posts()) : ?>
                        <?php $news_update->the_post(); ?>
                        <div class="blog-item">
                            <a href="<?= get_post_permalink(); ?>">
                                <div class="blog-item-preview-image">
                                    <?= wp_get_attachment_image(CFS()->get('post_preview_image'), 'full'); ?>
                                </div>
                                <div class="blog-item-date">
                                    <?= get_the_date(__('M d, Y')); ?>
                                </div>
                                <div class="blog-item-title">
                                    <?= CFS()->get('post_name'); ?>
                                </div>
                            </a>
                            <div class="blog-item-rubrics">
                                <?php foreach (wp_get_post_categories(get_the_ID()) as $rubric_id) : ?>
                                    <span class="blog-item-category">
                                            <a href="<?= get_category_link($rubric_id); ?>">
                                                <?= get_cat_name($rubric_id); ?>
                                            </a>
                                        </span>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    <?php endwhile; ?>
                <?php else : ?>
                    <div>No posts to such category yet...</div>
                <?php endif; ?>
            <?php endif; ?>
        </section>
    </main>


<?php
get_footer();
?>