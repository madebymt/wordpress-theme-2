 <?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme_test2
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		if ( 'post' === get_post_type() ) : ?>

	  <div class="div-block-24">
			 <a href="#" class="link"></a>
			 <a href="#" class="link-5"><?php the_author();?></a>
			 <a href="#" class="link-2 font-awesome"></a>
			 <a href="#" class="link-2"> <?php the_category(',');?></a>
			 <a href="#" class="link-3 font-awesome"></a>
			 <a href="#" class="link-3"><?php the_tags();?></a>
			 <a href="#" class="link-4 font-awesome"></a>
			 <a href="#" class="link-4"><?php the_date();?></a>
		 </div>


		<div class="entry-meta">
			<!-- <?php theme_test2_posted_on(); ?> -->
		</div><!-- .entry-meta -->
		<?php
		endif; ?>
	</header><!-- .entry-header -->

 <?php if(has_post_thumbnail()) {  //check have feature image?>
	 <div class="image-9">
		  <?php the_post_thumbnail();?>
	 </div>
 <?php }?>
	<p class="paragraph-11"><?php the_excerpt();?></p>
	<div class="div-block-25">
		<a href="#" class="link-6"></a>
		<a href="<?php comments_link();?>" class="link-6"><?php comments_number(0,1,'%');?></a>
		
	</div>

	<!-- <?php theme_test2_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
			the_content( sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'theme-test2' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			) );

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'theme-test2' ),
				'after'  => '</div>',
			) );
		?>
	</div><!- .entry-content -->

	<footer class="entry-footer">
		<?php theme_test2_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
