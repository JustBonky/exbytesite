<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package exbyte-theme
 */

?>

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

<?php wp_footer(); ?>

</body>

</html>