<?php

get_header();

function endsWith(string $string, string $end): bool
{
    return (($offset = strlen($string) - strlen($end)) >= 0) && strpos($string, $end, $offset) !== false;
}

?>


<div class="bg-img">
    <!-- Проверка на наличие фона -->
    <?php if (CFS()->get('game-background')) : ?>
        <?php if (endsWith(CFS()->get('game-background'), '.mp4')) : ?>
            <video autoplay="true" muted="true" loop="true" id="bgvid">
                <source src="<?= CFS()->get('game-background'); ?>" type="video/mp4">
            </video>
        <?php else : ?>
            <img src="<?= CFS()->get('game-background'); ?>" alt="game-background">
        <?php endif; ?>
    <?php endif; ?>
</div>


<main class="body-content container" id="body-content" role="main">
    <section class="game-intro-section" first-sec="true">
        <div class="game-intro_block">
            <h1 class="game-title">
                <?= CFS()->get('game-name'); ?>
            </h1>
            <h2 class="game-description">
                <?= CFS()->get('game-description'); ?>
            </h2>
            <div class="intro-game-links-wrapper">
                <span>AVALIABLE ON</span>
                <div class="intro-game-links">
                    <?php
                    $game_links = CFS()->get('links');
                    ?>
                    <?php if (isset($game_links)) : ?>
                        <?php foreach ($game_links as $row) : ?>
                            <div class="intro-game-link">
                                <a href="<?= $row['url-link']; ?>">
                                    <?= wp_get_attachment_image($row['icon-link'], 'full'); ?>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="cfs-hyperlink-wrapper">
                <?= CFS()->get('main-link-general'); ?>
            </div>
            <script>
                const node = document.querySelector('.cfs-hyperlink-wrapper .cfs-hyperlink');
                node.classList.add('prm-btn-white');
                node.innerHTML += `
                                        <svg viewBox="0 0 24 24" height="24" viewbox="0 0 24 24" width="24" fill="#000">
                                            <rect fill="none" height="24" width="24"></rect>
                                            <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"></path>
                                        </svg>`;
            </script>
        </div>
    </section>

    <section class="game-gallery">
        <div class="game-gallery_title">Screenshots</div>
        <div class="game-gallery_body">
            <div class="owl-carousel game-gallery_body_carousel">
                <?php foreach (CFS()->get('screenshots') as $screen) : ?>
                    <div class="game-slider-el">
                        <div class="game-image">
                            <?= wp_get_attachment_image($screen['image-screenshot'], 'full'); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="game-about">
        <div class="game-about_title">About game</div>
        <div class="game-about_body">
            <?php foreach (CFS()->get('sections') as $sec) : ?>
                <div class="game-about_body_item">
                    <div class="game-about_body_item_title"><?= $sec['name-section']; ?></div>
                    <div class="game-about_body_wrap">
                        <div class="game-about_body_item_img">
                            <?= wp_get_attachment_image($sec['preview-image-section'], 'full'); ?>
                        </div>
                        <div class="game-about_body_item_text">
                            <?= $sec['text-section']; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="game-news">
        <div class="game-news_title">Last news</div>
        <div class="game-news_body news_slider owl-carousel">
            <?php
            $news = new WP_Query([
                'post_type' => 'es_news',
                'post_status' => 'publish',
                'category_name' => 'abyss-protection'
            ]);
            if ($news->have_posts()) : ?>
                <?php while ($news->have_posts()) : $news->the_post(); ?>
                    <div class="news_slider_item">
                        <a href="<?= get_post_permalink(); ?>">
                            <p><?= CFS()->get('post_name'); ?></p>
                            <p>None</p>
                            <div class="bg">
                                <?= wp_get_attachment_image(CFS()->get('post_preview_image'), 'full'); ?>
                            </div>
                        </a>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>