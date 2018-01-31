<?php
$product_feature_img = get_field('product_feature_img');
$product_title = get_field('product_title');
$product_price = get_field('product_price');
?>

<!-- Top seller section -->
<div class="div-block-10">
    <h1 class="heading-7">TOP SELLER</h1>
    <!-- <p class="paragraph-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
      rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p> -->
    <div class="w-row">

      <?php $loop = new WP_Query(array('post_type' =>'product_feature','orderby' =>'post_id','order' => 'ASC')); ?>
      <?php while ($loop->have_posts() ) : $loop->the_post(); ?>

      <div class="column-5 w-col w-col-4">
        <div>
          <img src="<?php the_field('product_feature_img');?>" alt="">
          <h1 class="heading-8"><?php the_title(); ?></h1>
          <p class="paragraph-7"><?php the_field('product_price')?></p>
        </div>
    </div>
  <?php endwhile;
  wp_reset_query();?>
  </div>
</div>
