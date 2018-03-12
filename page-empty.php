<?php
/**
* Template Name: Empty template
*
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package theme_test2
 */
 get_header();

?>
<?php if(has_post_thumbnail()) {?>
<div class="div-block-21 contact" style="background:url('<?php echo $thumbnail_url?>') no-repeat; background-size:cover;" >
 <h1 class="heading-12"><?php page_title();?></h1>
</div>
<?php } else { //fallback image ?>
  <div class="div-block-21 contact">
   <h1 class="heading-12"><?php the_title();?></h1>
  </div>

<?php } ?>


<!-- Empty page  No Side bar-->

<?php get_footer();?>
