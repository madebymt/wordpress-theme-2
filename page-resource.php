_<?php
/* Template name: woocommerce page */

// get feature image from the page
$thumbnail_url = wp_get_attachment_url(get_post_thumbnail_id($post -> ID));


get_header();
?>
<?php if(has_post_thumbnail()) { //check for the feature imaage?>
    <div>
      <div class="div-block-21 resource" style="background:URL('<?php echo $thumbnail_url;?>') no-repeat; background-size:cover; background-attachment: fixed;">
        <h1 class="heading-12"><?php the_title();?></h1>
      </div>
    </div>

  <?php } else {?>
    <div>
      <div class="div-block-21 resource">
        <h1 class="heading-12"><?php the_title();?></h1>
      </div>
    </div>


<!-- // resource content section // -->
    <div class="resource-content">
      <?php while ( have_posts() ) : the_post();?>
        <?php the_content();?>
      <?php endwhile;?>

    </div>


<?php };?>

  <div class="div-block-37 resource">

    <?php $loop = new WP_Query( array('post_type' => 'resource_section', 'orderby' => 'post_id', 'order' => 'ASC') )?>
    <?php while ($loop -> have_posts()) : $loop -> the_post(); ?>
    <?php
    $resource_image = get_field('resource_image');
    $resource_url = get_field('resource_url');
    $resource_title = get_field('resource_title');
    $resource_description = get_field('resource_description');
    ?>

    <div class="div-block-36">
      <h1 class="heading-17"><?php the_title();?></h1>
      <a href="<?php echo $resource_url;?>" class="w-inline-block">
        <img src="<?php echo $resource_image;?>" class="image-11">

      </a>
      <p class="paragraph-14"><?php echo $resource_description;?></p>
    </div>

    <?php endwhile  ;
    wp_reset_query();?>
  </div>

<?php get_footer(); ?>
