<?php
$button_text = get_field('button_text');
$button_content = get_field('button_content');

?>

<div class="div-block-12">
<h1 class="heading-3 popular-post">RECENT POST</h1>
<div class="div-block-11 div-center"></div>
<div>
  <div class="w-row">

    <?php
    $args = array( 'numberposts' => 3, 'order'=> 'ASC', 'orderby' => 'title' );
    $postslist = get_posts( $args );
    foreach ($postslist as $post) :  setup_postdata($post); ?>


    <div class="column-2 w-col w-col-4">

      <div class="div-block-7">

      <a href="<?php the_permalink();?>">
      <?php the_post_thumbnail('medium',array(
        'data-w-id' => 'c970815c-c99b-0b5b-602f-1df1d50b885dl',
        'style' => '',
        'class' =>'image-3'

      ));?>
        <h1 class="heading-4"><?php the_title();?></h1> </a>
        <p class="paragraph-3"><?php the_excerpt(); ?> </p>

      </div>
    </div>
      <?php endforeach;
      wp_reset_query();?>
  </div>
</div>
</div>
