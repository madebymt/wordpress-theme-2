<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme_test2
 */

get_header(); ?>
<div class="div-block-21">
  <div class="archive">
    <h1 class="heading-12"><?php single_cat_title(); ?></h1>
    <?php
    the_archive_description( '<div class="taxonomy-description">', '</div>' );
    ?>
  </div>

</div>

	<div class="div-block-54">
	  <div id="primary" class="content-area w-row">
		  <main id="main" class="site-main column-7 w-col w-col-8">

		<?php
		if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
					the_archive_title( '<h1 class="page-title">', '</h1>' );
					the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_format() );

			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>
		</main><!-- #main -->
		<div class="column-8 w-col w-col-4">
        <div class="div-block-26">
          <div class="div-block-31">
		        <?php get_sidebar(); ?>
	        </div>
	      </div>
	  </div>
</div><!-- #primary -->
</div>

<?php
// get_sidebar();
get_footer();
