<?php
get_header();
?>

<h1>Archive News Page</h1>

<?php

$params = array(
    'post_type'   => 'es_news',
    'post_status' => 'publish'
);

$news = new WP_Query($params);

if ($news->have_posts()) :

?>
    <ul>
        <?php
        while ($news->have_posts()) :
            $news->the_post();
        ?>
            <li>
                <h4><?= get_the_title(); ?></h4>
                <p><?= the_excerpt(); ?></p>
                <p><?= get_the_content(); ?></p>
                <p>
                    <?php the_post_thumbnail(); ?>
                </p>
            </li>
        <?php
        endwhile;
        wp_reset_postdata();
        ?>
    </ul>
<?php
else :
    echo 'No news yet!';
endif;
?>

<?php
get_footer();
?>