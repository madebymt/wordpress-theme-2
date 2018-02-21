<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package theme_test2
 */

get_header(); ?>

<div class="div-block-55">
  <div class="w-row">
    <main class="column-7 w-col w-col-8">


		<?php
		while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', 'single' );

			the_post_navigation();

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->

		<!-- sidebar -->
		<div class="column-8 w-col w-col-4">
		<?php get_sidebar();?>
		</div>
	</div><!-- #primary -->
</div>

<?php get_footer();?>
