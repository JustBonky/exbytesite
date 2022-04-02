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
                <?= wp_get_attachment_image(155, 'full'); ?>
            </div>
        </section>

        <section class="blog-filter-section">
            <div class="blog-search">
                <?php get_search_form(); ?>
            </div>
            <div class="blog-filter">
                <style>
                    .blog-filter {
                        display: flex;
                        align-items: center;
                        flex-direction: row-reverse;
                    }

                    #blog-filter-handler {
                        display: none;
                    }

                    .blog-filter-body {
                        position: relative;
                        right: 0;
                        opacity: 0;
                        transition: 250ms ease;
                    }

                    #blog-filter-handler:checked ~ .blog-filter-body {
                        right: 30px;
                        opacity: 1;
                    }

                    #select-category-filter {
                        font-size: 20px;
                        background: transparent;
                        color: #fff;
                    }

                    #select-category-filter option {
                        position: absolute;
                        background: #000;
                        border: none;
                        margin: 5px 0;
                    }
                </style>
                <input type="checkbox" id="blog-filter-handler">
                <label for="blog-filter-handler">Filter</label>
                <div class="blog-filter-body">
                    <select name="category" id="select-category-filter" onchange="location = this.value;">
                        <option value="*" selected disabled hidden>Select category</option>
                        <?php
                        $categories = get_categories([
                            'type' => 'es_news',
                            'orderby' => 'name',
                            'order' => 'ASC',
                        ]);

                        foreach ($categories as $cat) : ?>
                            <option value="<?= get_category_link($cat->cat_ID); ?>">
                                <?= $cat->name ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                </div>
            </div>
        </section>

        <section class="blog-posts">
            <?php if (!empty($_GET['s'])) : ?>

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
                <?php endif; ?>
            <?php endif; ?>
        </section>
    </main>

<?php
get_footer();
?>