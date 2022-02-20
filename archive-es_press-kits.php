<?php
get_header();

$news = new WP_Query([
    'post_type'   => 'es_press-kits',
    'post_status' => 'publish'
]);

?>

<main class="body-content container" id="body-content" role="main">

    <section class='press-kits-section'>
        <h1 class='section-title'>Press kits</h1>
        <div class='press-kits-table'>
            <?php if ($news->have_posts()) : ?>
                <?php while ($news->have_posts()) : $news->the_post(); ?>

                    <div class="press-kit-item">

                        <div class="press-kit-title">
                            <?= get_the_title(); ?>
                        </div>

                        <?php if (has_post_thumbnail()) : ?>
                            <div class="press-kit-image">
                                <?php the_post_thumbnail(); ?>
                            </div>
                        <?php endif; ?>


                        <div class="press-kit-download-btn">
                            <div class="prm-btn-white">
                                <?= get_the_content(); ?>
                            </div>
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