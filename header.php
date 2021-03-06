<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package theme_test2
 */

 $favicon_icon = get_field("favicon_icon");
 $touch_icon = get_field("touch_icon");


?>
<!Doctype html>

<html <?php language_attributes(); ?>
<head>
	<meta charset="<?php bloginfo( 'charset' );?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php bloginfo('description');?>">
	<title>
		<?php bloginfo('name');?>
		<?php is_front_page()? bloginfo('description') : wp_title(); ?>
  </title>

	<link rel="pingback" href="<?php bloginfo('pingback_url')?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<!-- reference stylesheet and js -->
  <link href="<?php  bloginfo('stylesheet_directory');?>/assets/css/normalize.css" rel="stylesheet" type="text/css">
  <link href="<?php bloginfo('stylesheet_directory');?>/assets/css/components.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory');?>/assets/css/aos.css" />
  <link href="<?php bloginfo('stylesheet_directory');?>/style.css" rel="stylesheet" type="text/css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">
	WebFont.load({
		google: {
			families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Great Vibes:400",
				"Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic"
			]
		}
	});
  </script>
<!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
<script type="text/javascript">
	! function(o, c) {
		var n = c.documentElement,
			t = " w-mod-";
		n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
	}(window, document);
</script>


<!-- icon for the site -->

<link href="<?php echo $favicon_icon; ?>" rel="shortcut icon" type="image/x-icon">
<link href="<?php echo $touch_icon; ?>" rel="apple-touch-icon">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>



	 <div id="page" class="site">
		 <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'new-theme' ); ?></a>
		 <div class="navbar-wrapper" style="background:none;">

			 <div class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="background:none;">

				 <div class="container">
					 <div class="navbar-header" >
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

							 'theme_location'	=> 'primary',
							 'container'			=> 'nav',
							 'container_class'	=> 'navbar-collapse collapse dropdown-toggle',
							 'menu_class'		=> 'nav navbar-nav navbar-right',
							 'fallback_cb'		=> 'WP_Bootstrap_Navwalker::fallback',
               'walker'			=> new WP_Bootstrap_Navwalker()

						 ));
					 ?>


</a>
				 </div><!-- container -->

			 </div><!-- navbar -->

		 </div><!-- navbar-wrapper -->


</div>
