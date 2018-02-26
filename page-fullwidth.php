<?php
/* Template Name: Full-width template
*/

$thumbnail_url= wp_get_attachment_url(get_post_thumbnail_id($post->ID));

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

<div class="div-block-16">
  <h1 class="heading-11">JOIN ME WITH ALL THE GOODIES</h1>
  <div>
    <div class="w-form">
      <form id="email-form" name="email-form" data-name="Email Form" class="form-2">
      <label for="name-2" class="field-label">Name:</label>
      <input type="text" class="text-field w-input" maxlength="256" name="name-2" data-name="Name 2" id="name-2" required="">
      <label for="email-2" class="field-label-2">Email:</label>
      <input type="text" class="text-field-2 w-input" maxlength="256" name="email-2" data-name="Email 2" id="email-2" required="">
      <input type="submit" value="SIGN UP" data-wait="Please wait..." class="submit-button w-button">
      </form>
      <div class="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div class="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  </div>
</div>
</div>

<?php get_footer();?>
