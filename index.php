<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme_test2
 */

 $image =
get_header();
?>
<?php
if (is_home() && get_option('page_for_posts') && wp_get_attachment_image_src(get_post_thumbnail_id(get_option('page_for_posts')),'full') ) { //check for the feature image
	$img = wp_get_attachment_image_src(get_post_thumbnail_id(get_option('page_for_posts')),'full');
	$blog_page_image = $img[0]; ?>
		<div class="div-block-21" style="background:URL('<?echo $blog_page_image;?>') no-repeat; background-size:cover; background-attachment: fixed;">
			<h1 class="heading-12">Blog Post </h1>
		</div>
<?php } else {?>
	<div class="div-block-21" style="background:URL('<?php/ bloginfo('template_directory');?>assets/images/food-salad-restaurant-person.jpg')'; background-size:cover; background-attachment:fixed;">
		<h1 class="heading-12">Blog Post</h1>
	</div>

	<?php } ?>

<div class="div-block-55">
	<div class="w-row">
		<div class="column-7 w-col w-col-8">
			<div class="div-block-22">

				<?php if ( have_posts() ) :
              if ( is_home() && ! is_front_page() ) : ?>
						<header>
							<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
						</header>


					<?php endif;
					/* Start the Loop */
					while ( have_posts() ) : the_post(); ?>
						<!-- /*
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */ -->

					<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

					<?php endwhile;
					the_posts_navigation();

				  else :
					get_template_part( 'template-parts/content', 'none' );

				endif; ?>

			</div>
		</div>
		<div class="column-8 w-col w-col-4">
        <div class="div-block-26">
          <div class="div-block-31">
		<?php get_sidebar(); ?>
	    </div>
	  </div>
	</div>

	</div>
</div>


<?php
get_sidebar();
get_footer();
?>
