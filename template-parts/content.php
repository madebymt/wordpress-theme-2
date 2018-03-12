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
			 <a href="#" class="link-5 link"><?php the_author();?></a>
			 <a href="#" class="link-2 link font-awesome"></a>
			 <a href="#" class="link-2 link"> <?php the_category(',');?></a>
			 <a href="#" class="link-3 link font-awesome"></a>
			 <a href="#" class="link-3 link "><?php the_tags();?></a>
			 <a href="#" class="link-4 link font-awesome"></a>
			 <a href="#" class="link-4 link"><?php the_date();?></a>
		 </div>


		<div class="entry-meta">
			<!-- <?php theme_test2_posted_on(); ?> -->
		</div><!-- .entry-meta -->
		<?php
		endif; ?>
	</header><!-- .entry-header -->

 <?php if(has_post_thumbnail()) {  //check have feature image ?>
	 <div class="image-9">
 <?php the_post_thumbnail();?>
	 </div>
 <?php }?>

	<p class="paragraph-11"><?php the_excerpt();?></p>
	<div class="div-block-25">
		<a href="#" class="link-6 link"></a>
		<a href="<?php comments_link();?>" class="link-6 link"><?php comments_number(0,1,'%');?></a>
	</div>

</article><!-- #post-<?php the_ID(); ?> -->
