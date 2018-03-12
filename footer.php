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

	<div class="div-block-13">
	<div class="navbar-wrapper" style="background:none;">
		<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="background:transparent;">
			<div class="container" style="background:transparent">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>

					<a class="navbar-brand" href="#">
					 <!-- <div class="container w-container"> -->
								<?php if( has_custom_logo() ) {
									echo the_custom_logo();
								} else { ?>
								 <h1><a href="<?php echo esc_url (home_url('/')); ?>"> <?php bloginfo('name'); ?> </a></h1>
							 <?php } ?>
					 <!-- </div> -->
					</a>
				</div><!-- navbar-header -->

				<!-- If the menu (WP admin area) is not set, then the "menu_class" is applied to "container". In other words, it overwrites the "container_class". Ref: http://wordpress.org/support/topic/wp_nav_menu-menu_class-usage-bug?replies=4 -->

				<?php
					wp_nav_menu( array(

						'theme_location'	=> 'footer',
						'container'			=> 'nav',
						'container_class'	=> 'navbar-collapse collapse dropdown-toggle',
						'menu_class'		=> 'nav navbar-nav navbar-right',
						'fallback_cb'		=> 'WP_Bootstrap_Navwalker::fallback',
						'walker'			=> new WP_Bootstrap_Navwalker()

					) );
				?>

			</div><!-- container -->

		</div><!-- navbar -->

	</div><!-- navbar-wrapper -->

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="<?php bloginfo('stylesheet_directory');?>/assets/js/aos.js"></script>
<script src="<?php echo esc_url(get_template_directory_uri());?>/assets/js/wtheme.js" type="text/javascript"></script>

<?php wp_footer(); ?>

</body>
</html>

<script>
	 AOS.init();
 </script>
