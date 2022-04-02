<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id='main-bg-canvas-wrapper'>
    <canvas id="main-bg-canvas"></canvas>
</div>

<header class="body_header">
    <div class="container body_header-container">
        <div class="body_header_logo">
            <?php the_custom_logo(); ?>
        </div>

        <?php if (CFS()->get('menu_links_colors') !== NULL) : ?>
            <style>
                .menu-main-menu-container ul li a {
                    color: <?= CFS()->get('menu_links_colors'); ?> !important;
                }
            </style>
        <?php endif; ?>

        <?php wp_nav_menu(); ?>

        <div class="body_header_account">
            <a class="prm-btn login-btn" href="/contact-us">
                <span>Contact us</span>
            </a>
        </div>
    </div>
</header>