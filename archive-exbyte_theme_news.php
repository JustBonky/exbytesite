<?php
get_header();
?>

<h1>Archive News Page</h1>

<?php

$args = array(
    'post_type'   => 'exbyte_theme_news',
    'post_status' => 'publish'
);

$testimonials = new WP_Query($args);

if ($testimonials->have_posts()) :
?>
    <ul>
        <?php
        while ($testimonials->have_posts()) :
            $testimonials->the_post();
        ?>
            <li>
                <h4><?= get_the_title(); ?></h4>
                <p><?= the_excerpt(); ?></p>
                <p><?= get_the_content(); ?></p>
                <p style='max-width: 300px; object-fit: contain;'>
                    <img style='max-width: 500px;' src="<?php the_post_thumbnail(); ?>" />
                </p>
            </li>
        <?php
        endwhile;
        wp_reset_postdata();
        ?>
    </ul>
<?php
else :
    esc_html_e('No news yet!', 'exbyte-theme');
endif;
?>

<?php
get_footer();
?>