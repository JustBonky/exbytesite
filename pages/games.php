<?php

/*
    Template Name: Games page
    Template Post Type: page
*/

?>

<?php
get_header();
?>

<main class="body-content container" id="body-content" role="main">

    <section class='press-kits-section' first-sec="true">
        <h1 class='section-title'><?= $pagename; ?></h1>
        <div class='press-kits-table'>
            <?php
            $games = new WP_Query([
                'post_type'   => 'es_games',
                'post_status' => 'publish'
            ]);
            ?>
            <?php if ($games->have_posts()) : ?>
                <?php while ($games->have_posts()) : $games->the_post(); ?>

                    <div class="press-kit-item">

                        <div class="press-kit-title">
                            <?= CFS()->get('game-name'); ?>
                        </div>

                        <div class="press-kit-image">
                            <?= wp_get_attachment_image(CFS()->get('preview-image'), 'full'); ?>
                        </div>

                        <div class="press-kit-download-btn">
                            <a class="prm-btn-white" href="<?= CFS()->get('archive-file'); ?>" target="_blank">
                                Download
                            </a>
                        </div>
                    </div>

                <?php endwhile; ?>
            <?php else : ?>
                <h2>No press yet</h2>
            <?php endif; ?>
        </div>
    </section>

</main>

<?php
get_footer();
?>