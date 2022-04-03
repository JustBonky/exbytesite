<?php get_header(); ?>

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
            <span class="blog-post-item-category">
                <?= get_cat_name($rubric_id); ?>
            </span>
        <?php endforeach; ?>
    </section>

    <?php foreach (CFS()->get('post_sections') as $row) : ?>
        <section class="blog-post-section">
            <div class="blog-post-section_title">
                <?= $row['post_section_title']; ?>
            </div>
            <div class="blog-post-section_text">
                <?= $row['post_section_text']; ?>
            </div>
            <div class="blog-post-section_image">
                <?= wp_get_attachment_image($row['post_section_image'], 'full'); ?>
            </div>
            <div class="blog-post-line"></div>
        </section>
    <?php endforeach; ?>
</main>

<?php get_footer(); ?>