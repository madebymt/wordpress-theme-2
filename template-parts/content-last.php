<?php
$botton_text = get_field('botton_text');
$botton_content = get_field('botton_content');
$botton_signup_form= get_field('botton_signup_form');
$botton_text_top = get_field('botton_text_top');
$botton_image = get_field("botton_image")


?>

<?php if(!empty($botton_image)){?>
<div class="div-block-15" style="background:URL('<?php echo $botton_image;?>') no-repeat; background-size:cover; background-attachment:fixed;">
 <h1 class="heading-10"><?php echo $botton_text;?></h1>
 <button class="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#myModal">
  <?php echo $botton_content;?>
 </button>
</div>
<?php }else {?>
  <div class="div-block-15" >
   <h1 class="heading-10"><?php echo $botton_text;?></h1>
   <button class="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#myModal">
    <?php echo $botton_content;?>
   </button>
  </div>


  <?php };?>
