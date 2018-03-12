<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme_test2
 */

get_header(); ?>

<div class="div-block-55">
	<div class="w-row">
		<!-- <div class="column-7 w-col w-col-8"> -->
			<div class="div-block-22">

			<?php woocommerce_content(); ?>

		</div>

</div>
</div>

<?php
// get_sidebar();
get_footer(); ?>
