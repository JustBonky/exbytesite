<style>
    #menu-main-menu a {
        color: #000;
    }
</style>


<?php

get_header();

?>


<div class="bg-img">
    <?= wp_get_attachment_image(CFS()->get('game-background'), 'full'); ?>
</div>


<main class="body-content container" id="body-content" role="main">
    <section class="intro-section" style="margin-top: 0;">
        <h1><?= CFS()->get('game-name'); ?></h1>
        <div>
            <?= CFS()->get('main-link-general'); ?>
        </div>
    </section>

    <section>
        Hello world
    </section>
    <section>
        Hello world
    </section>
    <section>
        Hello world
    </section>
    <section>
        Hello world
    </section>
</main>

<?php

get_footer();

?>