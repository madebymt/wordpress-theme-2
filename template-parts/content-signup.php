<?php
$sign_up_title = get_field('sign_up_title');
$sign_up_intro = get_field('sign_up_into');
$sign_up_form = get_field('sign_up_form');
?>

<div class="div-block-17">
  <div class="div-block-16 home-signup">
    <h1 class="heading-11"><?php echo $sign_up_title;?></h1>
    <?php get_field('sign_up_form');?>
    <!-- <div>
      <div class="w-form">
    </div> -->
  </div>
</div>
