<?php

add_action('wp_ajax_ajax_search', function ($args) {

    $query = new WP_Query([
        'post_type' => 'es_news',
        'post_status' => 'publish',
        'order' => 'DESC',
        's' => $_POST['term'],
        'posts_per_page' => 10
    ]);

    ?>

    <?php if ($_POST['full'] === 'true') : ?>
        <?php if ($query->have_posts()) : ?>
            <?php while ($query->have_posts()) : $query->the_post(); ?>
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
            <div class="ajax-search_not_found">Ничего не найдено</div>
        <?php endif; ?>
    <?php else : ?>
        <?php if ($query->have_posts()) : ?>
            <?php while ($query->have_posts()) : $query->the_post(); ?>
                <li class="ajax-search__item">
                    <a href="<?php the_permalink(); ?>" class="ajax-search__link"><?php the_title(); ?></a>
                </li>
            <?php endwhile; ?>
        <?php else : ?>
            <div class="ajax-search_not_found">Ничего не найдено</div>
        <?php endif; ?>
    <?php endif; ?>
    <?php
    exit;
});
