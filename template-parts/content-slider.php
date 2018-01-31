<?php
$slider1_head = get_post_meta(11,'slider1_head',true);
$slider1_content = get_post_meta(11,'slider1_content',true);
$slider1 = get_field('slider1');
$slider2 = get_field('slider2');
$slider3 = get_field('slider3');
$size = 'full';
?>

<div data-animation="slide" data-duration="500" data-infinite="1" class="slider w-slider">
  <div class="w-slider-mask">
    <?php $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), array(1500, 7000), false, ''); ?>
    <div class="slide w-slide";>
      <div class="div-block slider-wrapper" style="background-image:URL(<?php echo $slider1?>); background-position: 50% 50%, 0px 0px;
        background-size: cover, auto;">
        <div class="div-block-2">
          <h1 class="heading"><?php echo $slider1_head;?></h1>
          <p class="paragraph"><?php echo $slider1_content;?></p>
        </div>
      </div>
    </div>
    <div class="slide-2 w-slide" style="background-image:URL(<?php echo $slider2?>); background-position: 50% 50%, 0px 0px;
      background-size: cover, auto;">
      <div class="div-block slider-wrapper">
        <div class="div-block-2">
          <h1 class="heading">Deslicious</h1>
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
            cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
      </div>
    </div>
    <div class="slide-3 w-slide" style="background-image:URL(<?php echo $slider3?>); background-position: 50% 50%, 0px 0px;
      background-size: cover, auto;">
      <div class="div-block slider-wrapper">
        <div class="div-block-2">
          <h1 class="heading">Desert time</h1>
          <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
            cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="left-arrow w-slider-arrow-left">
    <div class="icon w-icon-slider-left"></div>
  </div>
  <div class="right-arrow w-slider-arrow-right">
    <div class="icon-2 w-icon-slider-right"></div>
  </div>
  <div class="slide-nav w-slider-nav w-round"></div>
</div>
