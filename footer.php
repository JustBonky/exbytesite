<footer class="body-footer" id="body-footer">
    <div class="container body-footer-container">
        <div class="logo">
            <?php the_custom_logo(); ?>
        </div>
        <nav class="menu">
            <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </ul>
        </nav>
        <div class="rights">© 2022 Exbyte Studios, All Rights Reserved</div>
    </div>
</footer>

<?php
if (!isset($_COOKIE['hide-cookie'])) {
    echo '
          <div class="cookie-block">
            <div class="cookie-block_text">
                This website uses coockies to ensure you get the best experience on our website
            </div>
            <button class="ok prm-btn-white">Allow</button>
        </div>';
}
?>

<?php wp_footer(); ?>

</body>

</html>