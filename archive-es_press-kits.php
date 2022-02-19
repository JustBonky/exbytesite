<?php
get_header();
?>

<?php

$params = array(
    'post_type'   => 'es_press-kits',
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
                <p><?= get_the_title(); ?></p>
            </li>
        <?php
        endwhile;
        wp_reset_postdata();
        ?>
    </ul>
<?php
else :
    __('No press yet!', 'exbyte-theme');
endif;
?>

<?php
get_footer();
?>