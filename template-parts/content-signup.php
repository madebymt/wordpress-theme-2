<?php
$sign_up_title = get_field('sign_up_title');
$sign_up_intro = get_field('sign_up_intro');
$sign_up_form = get_field('sign_up_form');
$button_text_top = get_field('button_text_top');
$signup_box_title = get_field('signup_box_title');
$signup_box_description = get_field('signup_box_description');

?>

<div class="div-block-17">
  <div class="container div-block-16 home-signup">
    <div class="row" style="background:none;">

      <div class="col-sm-8">
        <p class="lead">
          <strong class="signup"><?php echo $sign_up_title;?></strong> <?php echo $sign_up_intro;?>
        </p>
      </div>
      <!-- end col -->

      <div class="col-sm-4">
        <button class="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#myModal">
         <?php echo $button_text_top;?>
        </button>
      </div>
      <!-- end col -->
    </div>
    <!-- row -->
  </div>
</div>


<!-- Modal wrapper -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">
          <i class="fa fa-envelope"></i> <?php echo $signup_box_title;?></h4>
      </div>
      <!-- modal-header -->
      <div class="modal-body">
        <p><?php echo $signup_box_description;?></p>
          <?php echo $sign_up_form;?>
        <hr>
        <p>
          <small>By providing your email you consent to receiving occasional promotional emails &amp; newsletters. <br>No Spam. Just good stuff. We respect your privacy &amp; you may unsubscribe at any time.</small>
        </p>
      </div>
      <!-- modal-body -->
    </div>
    <!-- modal-content -->
  </div>
  <!-- modal-dialog -->
</div>
<!-- modal -->
