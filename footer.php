<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package theme_test2
 */

?>

	</div><!-- #content -->

	<div class="div-block-13">
  <div class="w-row">
    <div class="column-4 w-col w-col-4">

      <div class="div-block-14">


		 </div>
		 <?php if( has_custom_logo() ) {
			 echo the_custom_logo();
		 } else { ?>
			<h1><a href="<?php echo esc_url (home_url('/')); ?>"> <?php bloginfo('name'); ?> </a></h1>
		<?php } ?>
		<p class="paragraph-8">&copy; <?php echo Date('Y') ?> - <?php bloginfo('name');?></p>
    </div>
    <div class="w-col w-col-4">
      <h1 class="heading-9">PRODUCT</h1>
				<p class="paragraph-9">
					<a href="#">T-SHIRT</a>
					<br>
					<a href="#">DRESS</a>
					<br>
					<a href="#">BAG</a>
					<br>
					<a href="#">OTHER</a>
				</P>
    </div>
    <div class="w-col w-col-4">
      <h1 class="heading-9">PRIVACY</h1>
      <a>
				<p class="paragraph-9">
					<a href="#">ABOUT</a>
					<br>
					<a href="#">CONTACT</a>
					<br>
					<a href="#">SUPPORT</a>
					<br>
					<a href="#">HOUR</a>
				</P>
    </div>
  </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="<?php echo esc_url(get_template_directory_uri());?>/assets/js/wtheme.js" type="text/javascript"></script>

<?php wp_footer(); ?>

</body>
</html>
