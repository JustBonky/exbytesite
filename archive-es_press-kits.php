<?php
get_header();
?>

<?php

$news = new WP_Query([
    'post_type'   => 'es_press-kits',
    'post_status' => 'publish'
]);

if ($news->have_posts()) :

?>
    <style>
        ul {
            display: flex;
        }

        ul li {
            display: inline-block;
        }

        ul img {
            display: block;
            max-width: 100%;
            object-fit: contain;
            max-width: 400px;
        }
    </style>

    <ul>
        <?php while ($news->have_posts()) : $news->the_post(); ?>

            <li style='border: 2px solid green;'>
                <p>
                    <?= get_the_title(); ?>
                </p>
                <p>
                    <?php the_post_thumbnail(); ?>
                </p>
                <div>
                    <a href="<?= get_post_meta(get_the_ID(), 'pack', TRUE); ?>" download="true">Download</a>
                </div>
            </li>

        <?php endwhile; ?>
    </ul>
<?php
else :
?>
    <h1>No press yet</h1>
<?php
endif;
?>

<?php
get_footer();
?>