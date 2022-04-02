<?php
get_header();
?>

<main class="body-content container" id="body-content" role="main">
    <section class='blog-intro-section'>
        <h1 class='blog-intro-section-title'>
            <span class="intro-suptitle">GAMES BLOG</span>
            <span class="intro-title">
                <?= CFS()->get('post_name'); ?>
            </span>
        </h1>
        <div class="blog-intro-section-background">
            <?= wp_get_attachment_image(CFS()->get('post_preview_image'), 'full'); ?>
        </div>
    </section>

    <section class="blog-post-categories-sec">
        <?php foreach (wp_get_post_categories(get_the_ID()) as $rubric_id) : ?>
            <span class="blog-item-category">
                <a href="<?= get_category_link($rubric_id); ?>">
                    <?= get_cat_name($rubric_id); ?>
                </a>
            </span>
        <?php endforeach; ?>
    </section>
</main>

<?php
get_footer();
?>
