<?php
get_header();
?>


<?php

$params = array(
    'post_type'   => 'es_games',
    'post_status' => 'publish'
);

$news = new WP_Query($params);

?>

<main>
    <h1>games</h1>
</main>

<?php
get_footer();
?>