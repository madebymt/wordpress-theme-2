<?php
$author_img = get_field('author_img');
$author_title = get_field('about_tilte');
$about_author = get_field('about_author');
?>


<div>
  <div class="row w-row">
    <div class="column w-col w-col-6">
      <div class="div-block-3">
        <img src="<?php the_field('author_img'); ?>" sizes="(max-width: 479px) 85vw, (max-width: 767px) 91vw, (max-width: 991px) 48vw, 25vw" class="image">
      </div>
    </div>
    <div class="column-6 w-col w-col-6">
      <div class="div-block-5">
        <h1 class="heading-3"><?php the_field('author_title');?></h1>
        <div class="div-block-11"></div>
        <p class="paragraph-2"><?php the_field('about_author');?></p>
      </div>
    </div>
  </div>
</div>
