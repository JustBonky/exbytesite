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
    <section class="intro-section" first-sec="true">
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
        </div>

        <div class="game-intro_block">
            <style>
                .game-intro_block:nth-child(2) .cfs-hyperlink {
                    display: flex;
                    align-items: center;
                    padding: 10px 25px;
                }

                .game-intro_block:nth-child(2) .cfs-hyperlink svg {
                    margin-left: 10px;
                    margin-bottom: 3px;
                }
            </style>
            <?= CFS()->get('main-link-general'); ?>
            <script>
                const node = document.querySelector('.game-intro_block:nth-child(2) .cfs-hyperlink');
                node.classList.add('prm-btn-white');
                node.innerHTML += `
                        <svg viewBox="0 0 24 24" height="24" viewbox="0 0 24 24" width="24" fill="#000">
                            <rect fill="none" height="24" width="24"></rect>
                            <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"></path>
                        </svg>`;
            </script>
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