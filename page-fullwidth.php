<?php
/* Template Name: Full-width template
*/

$thumbnail_url= wp_get_attachment_url(get_post_thumbnail_id($post->ID));
$sign_up_title = get_field('sign_up_title');
$sign_up_intro = get_field('sign_up_intro');
$sign_up_form = get_field('sign_up_form');
$button_text_top = get_field('button_text_top');


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

<div>
<div class="div-block-39">
 <div class="div-block-38">
   <?php while(have_posts()) : the_post()?>
   <p class="paragraph-15"> <?php the_content();?> </p>
   <?php endwhile;?>
 </div>
</div>
</div>

<!-- <?php wp_reset_postdata(); ?>
<?php wp_reset_query();?> -->

<?php
get_template_part('template-parts/content','signup');?>

<?php get_footer();?>
