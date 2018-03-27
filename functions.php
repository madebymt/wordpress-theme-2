<?php
/**
 * theme test2 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package theme_test2
 */
require_once get_template_directory() . '/wp-bootstrap-navwalker.php';
//theme support
function wpb_theme_setup(){
	register_nav_menus(array(
		'primary' => __('Primary Menu'),
		'footer' => __('Footer Menu')

	));
}
add_action('after_setup_theme','wpb_theme_setup');

if ( ! function_exists( 'theme_test2_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function theme_test2_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on theme test2, use a find and replace
		 * to change 'theme-test2' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'theme-test2', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'theme-test2' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'theme_test2_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		define('WOOCOMMERCE_USE_CSS', false);

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'theme_test2_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function theme_test2_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'theme_test2_content_width', 640 );
}
add_action( 'after_setup_theme', 'theme_test2_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function theme_test2_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'theme-test2' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'theme-test2' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h5 class="widget-title">',
		'after_title'   => '</h5>',
	) );
}
add_action( 'widgets_init', 'theme_test2_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function theme_test2_scripts() {
	wp_enqueue_style( 'theme-test2-style', get_stylesheet_uri() );

	wp_enqueue_script( 'theme-test2-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'theme-test2-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

  wp_enqueue_script('theme-webflow-script',get_stylesheet_directory_uri() . '/assets/js/wtheme.js', array('jquery'),null,true);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'theme_test2_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
if(defined('woocommerce')){
	require get_template_diretory(). '/woocommerce/woocommerce.php';
}

// support woocommerce
add_action('after_setup_theme','woocommerce_support');
function woocommerce_support(){
	add_theme_support('woocommerce');
}



// set post LengthException
function set_excerpt_legnth(){
  return 40;
}
add_filter('excerpt_length','set_excerpt_legnth');

function new_excerpt_more($more) {
	global $post;
	return '... <a class="moretag" href="'. get_permalink($post->ID) .'"> Read More </a>';
}
add_filter('excerpt_more','new_excerpt_more');


add_action( 'wp_enqueue_scripts', 'enqueue_font_awesome' );
function enqueue_font_awesome() {

	wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' );

}

/**
 * Place a cart icon with number of items and total cost in the menu bar.
 *
 * Source: http://wordpress.org/plugins/woocommerce-menu-bar-cart/
 */

add_filter('wp_nav_menu_items','sk_wcmenucart', 10, 2);
function sk_wcmenucart($menu, $args) {

	// Check if WooCommerce is active and add a new item to a menu assigned to Primary Navigation Menu location
	if ( !in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) || 'primary' !== $args->theme_location )
		return $menu;

	ob_start();
		global $woocommerce;
		$viewing_cart = __('View your shopping cart', 'your-theme-slug');
		$start_shopping = __('Start shopping', 'your-theme-slug');
		$cart_url = wc_get_cart_url ();
		$shop_page_url = get_permalink( wc_get_page_id( 'shop' ) );
		$cart_contents_count = $woocommerce->cart->cart_contents_count;
		$cart_contents = sprintf(_n('%d item', '%d items', $cart_contents_count, 'your-theme-slug'), $cart_contents_count);
		$cart_total = $woocommerce->cart->get_cart_total();
		// Uncomment the line below to hide nav menu cart item when there are no items in the cart
		// if ( $cart_contents_count > 0 ) {
			if ($cart_contents_count == 0) {
				$menu_item = '<li class="right"><a class="wcmenucart-contents" href="'. $shop_page_url .'" title="'. $start_shopping .'">';
			} else {
				$menu_item = '<li class="right"><a class="wcmenucart-contents" href="'. $cart_url .'" title="'. $viewing_cart .'">';
			}

			$menu_item .= '<i class="fa fa-shopping-cart"></i> ';

			$menu_item .= $cart_contents.' - '. $cart_total;
			$menu_item .= '</a></li>';
		// Uncomment the line below to hide nav menu cart item when there are no items in the cart
		// }
		echo $menu_item;
	$social = ob_get_clean();
	return $menu . $social;

}


// <!-- hide the sidebar on cart and checkout page -->
// check woocommerce is active or not

function check_some_other_plugin() {
		if ( is_plugin_active('woocommerce.php') ) {

			add_action('wp_head', 'hide_sidebar');
			function hide_sidebar(){
			if(is_cart() || is_checkout()){
			?> <style type="text/css">
			#secondary {
			display: none;
			}
			</style><?php
			}
			} 
		}
	  }
	  add_action( 'admin_init', 'check_some_other_plugin' );


// author box end of post

function wpb_author_info_box( $content ) {
	
   global $post;
	
   // Detect if it is a single post with a post author
   if ( is_single() && isset( $post->post_author ) ) {
	
   // Get author's display name 
   $display_name = get_the_author_meta( 'display_name', $post->post_author );
	
   // If display name is not available then use nickname as display name
   if ( empty( $display_name ) )
   $display_name = get_the_author_meta( 'nickname', $post->post_author );
	
   // Get author's biographical information or description
   $user_description = get_the_author_meta( 'user_description', $post->post_author );
	
   // Get author's website URL 
   $user_website = get_the_author_meta('url', $post->post_author);
	
   // Get link to the author archive page
   $user_posts = get_author_posts_url( get_the_author_meta( 'ID' , $post->post_author));
	 
   if ( ! empty( $display_name ) )
	
   $author_details = '<p class="author_name">About ' . $display_name . '</p>';
	
   if ( ! empty( $user_description ) )
   // Author avatar and bio
	
   $author_details .= '<p class="author_details">' . get_avatar( get_the_author_meta('user_email') , 90 ) . nl2br( $user_description ). '</p>';
	
   $author_details .= '<p class="author_links"><a href="'. $user_posts .'">View all posts by ' . $display_name . '</a>';  
	
   // Check if author has a website in their profile
   if ( ! empty( $user_website ) ) {
   // Display author website link
   $author_details .= ' | <a href="' . $user_website .'" target="_blank" rel="nofollow">Website</a></p>';
   } else { 
   // if there is no author website then just close the paragraph
   $author_details .= '</p>';
   }
   // Pass all this info to post content  
   $content = $content . '<footer class="author_bio_section" >' . $author_details . '</footer>';
   }
   return $content;
   }
   // Add our function to the post content filter 
   add_action( 'the_content', 'wpb_author_info_box' );
   // Allow HTML in author bio section 
   remove_filter('pre_user_description', 'wp_filter_kses');
   

// blog post image to link

   function wpb_autolink_featured_images( $html, $post_id, $post_image_id ) {
	
   If (! is_singular()) { 
		
   $html = '<a href="' . get_permalink( $post_id ) . '" title="' . esc_attr( get_the_title( $post_id )). '">' . $html . '</a>';
   return $html;
   } else { 
   return $html;
   }
   }
   add_filter( 'post_thumbnail_html', 'wpb_autolink_featured_images', 10, 3 );





   
   //import CPI theme demo data
   function cptui_register_my_cpts() {
	
		/**
		 * Post Type: product_feature.
		 */
	
		$labels = array(
			"name" => __( "product_feature", "theme-test2" ),
			"singular_name" => __( "product_feature", "theme-test2" ),
		);
	
		$args = array(
			"label" => __( "product_feature", "theme-test2" ),
			"labels" => $labels,
			"description" => "",
			"public" => true,
			"publicly_queryable" => true,
			"show_ui" => true,
			"show_in_rest" => false,
			"rest_base" => "",
			"has_archive" => false,
			"show_in_menu" => true,
			"exclude_from_search" => false,
			"capability_type" => "post",
			"map_meta_cap" => true,
			"hierarchical" => false,
			"rewrite" => array( "slug" => "product_feature", "with_front" => true ),
			"query_var" => true,
			"supports" => array( "title" ),
		);
	
		register_post_type( "product_feature", $args );
	
		/**
		 * Post Type: resources_section.
		 */
	
		$labels = array(
			"name" => __( "resources_section", "theme-test2" ),
			"singular_name" => __( "resource_section", "theme-test2" ),
		);
	
		$args = array(
			"label" => __( "resources_section", "theme-test2" ),
			"labels" => $labels,
			"description" => "",
			"public" => true,
			"publicly_queryable" => true,
			"show_ui" => true,
			"show_in_rest" => false,
			"rest_base" => "",
			"has_archive" => false,
			"show_in_menu" => true,
			"exclude_from_search" => false,
			"capability_type" => "post",
			"map_meta_cap" => true,
			"hierarchical" => false,
			"rewrite" => array( "slug" => "resource_section", "with_front" => true ),
			"query_var" => true,
			"supports" => array( "title", "editor", "thumbnail" ),
		);
	
		register_post_type( "resource_section", $args );
	}
	
	add_action( 'init', 'cptui_register_my_cpts' );
	

			// advance custom field code
			if(function_exists("register_field_group"))
			{
				register_field_group(array (
					'id' => 'acf_botton-signup',
					'title' => 'botton-signup',
					'fields' => array (
						array (
							'key' => 'field_5a62bc725e650',
							'label' => 'Botton sign up section',
							'name' => '',
							'type' => 'tab',
						),
						array (
							'key' => 'field_5a62ba0ff3ffa',
							'label' => 'botton_text',
							'name' => 'botton_text',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a62ba23f3ffb',
							'label' => 'botton_content',
							'name' => 'botton_content',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a97409a1e20b',
							'label' => 'button_signup_form',
							'name' => 'button_signup_form',
							'type' => 'wysiwyg',
							'default_value' => '',
							'toolbar' => 'full',
							'media_upload' => 'yes',
						),
						array (
							'key' => 'field_5aa5e4f1d0b38',
							'label' => 'botton_image',
							'name' => 'botton_image',
							'type' => 'image',
							'save_format' => 'object',
							'preview_size' => 'large',
							'library' => 'all',
						),
					),
					'location' => array (
						array (
							array (
								'param' => 'page',
								'operator' => '==',
								'value' => '11',
								'order_no' => 0,
								'group_no' => 0,
							),
						),
					),
					'options' => array (
						'position' => 'normal',
						'layout' => 'default',
						'hide_on_screen' => array (
							0 => 'the_content',
						),
					),
					'menu_order' => 0,
				));
				register_field_group(array (
					'id' => 'acf_home',
					'title' => 'Home',
					'fields' => array (
						array (
							'key' => 'field_5ab12fe7c29e0',
							'label' => 'Site icon',
							'name' => '',
							'type' => 'tab',
						),
						array (
							'key' => 'field_5ab130c98b636',
							'label' => 'touch_icon',
							'name' => 'touch_icon',
							'type' => 'image',
							'instructions' => '254x254px touch icon',
							'save_format' => 'object',
							'preview_size' => 'thumbnail',
							'library' => 'all',
						),
						array (
							'key' => 'field_5ab1307380e0b',
							'label' => 'favicon_icon',
							'name' => 'favicon_icon',
							'type' => 'image',
							'instructions' => '32x32 px site icon',
							'save_format' => 'object',
							'preview_size' => 'thumbnail',
							'library' => 'all',
						),
						array (
							'key' => 'field_5a57b69258b00',
							'label' => 'Slider',
							'name' => '',
							'type' => 'tab',
						),
						array (
							'key' => 'field_5a973997646c6',
							'label' => 'slider1_head',
							'name' => 'slider1_head',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a9736b42e50b',
							'label' => 'slider1_content',
							'name' => 'slider1_content',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a5527b609bb9',
							'label' => 'slider2',
							'name' => 'slider2',
							'type' => 'image',
							'save_format' => 'url',
							'preview_size' => 'full',
							'library' => 'all',
						),
						array (
							'key' => 'field_5a97399c646c7',
							'label' => 'slider2_head',
							'name' => 'slider2_head',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a97395b646c4',
							'label' => 'slider2_content',
							'name' => 'slider2_content',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a5527d309bbb',
							'label' => 'slider3',
							'name' => 'slider3',
							'type' => 'image',
							'save_format' => 'url',
							'preview_size' => 'full',
							'library' => 'all',
						),
						array (
							'key' => 'field_5a9739a5646c8',
							'label' => 'slider3_head',
							'name' => 'slider3_head',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a973962646c5',
							'label' => 'slider3_content',
							'name' => 'slider3_content',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a57b6d55be82',
							'label' => 'author tab',
							'name' => '',
							'type' => 'tab',
						),
						array (
							'key' => 'field_5a57b476873aa',
							'label' => 'author_img',
							'name' => 'author_img',
							'type' => 'image',
							'required' => 1,
							'save_format' => 'url',
							'preview_size' => 'medium',
							'library' => 'all',
						),
						array (
							'key' => 'field_5a57b5b9873ac',
							'label' => 'author_title',
							'name' => 'author_title',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a57b497873ab',
							'label' => 'about_author',
							'name' => 'about_author',
							'type' => 'textarea',
							'default_value' => '',
							'placeholder' => '',
							'maxlength' => '',
							'rows' => '',
							'formatting' => 'br',
						),
					),
					'location' => array (
						array (
							array (
								'param' => 'page',
								'operator' => '==',
								'value' => '11',
								'order_no' => 0,
								'group_no' => 0,
							),
						),
					),
					'options' => array (
						'position' => 'normal',
						'layout' => 'default',
						'hide_on_screen' => array (
							0 => 'the_content',
						),
					),
					'menu_order' => 0,
				));
				register_field_group(array (
					'id' => 'acf_product_feature',
					'title' => 'product_feature',
					'fields' => array (
						array (
							'key' => 'field_5a57a692d80ae',
							'label' => 'product_feature_img',
							'name' => 'product_feature_img',
							'type' => 'image',
							'required' => 1,
							'save_format' => 'url',
							'preview_size' => 'medium',
							'library' => 'all',
						),
						array (
							'key' => 'field_5a57ab18d80af',
							'label' => 'product_title',
							'name' => 'product_title',
							'type' => 'text',
							'required' => 1,
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a57ab2ed80b0',
							'label' => 'product_price',
							'name' => 'product_price',
							'type' => 'number',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'min' => '',
							'max' => '',
							'step' => '',
						),
						array (
							'key' => 'field_5a97161c50bc0',
							'label' => 'product_url',
							'name' => 'product_url',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
					),
					'location' => array (
						array (
							array (
								'param' => 'post_type',
								'operator' => '==',
								'value' => 'product_feature',
								'order_no' => 0,
								'group_no' => 0,
							),
						),
					),
					'options' => array (
						'position' => 'normal',
						'layout' => 'default',
						'hide_on_screen' => array (
						),
					),
					'menu_order' => 0,
				));
				register_field_group(array (
					'id' => 'acf_resource-2',
					'title' => 'Resource',
					'fields' => array (
						array (
							'key' => 'field_5a65148409761',
							'label' => 'Resource',
							'name' => '',
							'type' => 'tab',
						),
						array (
							'key' => 'field_5a65148d09762',
							'label' => 'resource_image',
							'name' => 'resource_image',
							'type' => 'image',
							'instructions' => 'resource-image',
							'save_format' => 'url',
							'preview_size' => 'medium',
							'library' => 'all',
						),
						array (
							'key' => 'field_5a65230f88994',
							'label' => 'resource_url',
							'name' => 'resource_url',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a65150d09763',
							'label' => 'resource_title',
							'name' => 'resource_title',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a65151e09764',
							'label' => 'resource_description',
							'name' => 'resource_description',
							'type' => 'textarea',
							'default_value' => '',
							'placeholder' => '',
							'maxlength' => '',
							'rows' => '',
							'formatting' => 'br',
						),
						array (
							'key' => 'field_5a65232888995',
							'label' => '',
							'name' => '',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
					),
					'location' => array (
						array (
							array (
								'param' => 'post_type',
								'operator' => '==',
								'value' => 'resource_section',
								'order_no' => 0,
								'group_no' => 0,
							),
						),
					),
					'options' => array (
						'position' => 'normal',
						'layout' => 'default',
						'hide_on_screen' => array (
							0 => 'the_content',
						),
					),
					'menu_order' => 0,
				));
				register_field_group(array (
					'id' => 'acf_sign-up-section',
					'title' => 'Sign up section',
					'fields' => array (
						array (
							'key' => 'field_5a57a0be2f3ad',
							'label' => 'sign up section',
							'name' => '',
							'type' => 'tab',
						),
						array (
							'key' => 'field_5a57015df11e8',
							'label' => 'sign up title',
							'name' => 'sign_up_title',
							'type' => 'text',
							'instructions' => 'sign up the title.',
							'required' => 1,
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'none',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a57018ff11e9',
							'label' => 'sign_up_intro',
							'name' => 'sign_up_intro',
							'type' => 'text',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'none',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5a973d8459496',
							'label' => 'sign_up_form',
							'name' => 'sign_up_form',
							'type' => 'wysiwyg',
							'instructions' => 'Put your email provider form HTML element here, Thanks!',
							'default_value' => '',
							'toolbar' => 'full',
							'media_upload' => 'yes',
						),
						array (
							'key' => 'field_5a976652b2a7d',
							'label' => 'button_text_top',
							'name' => 'button_text_top',
							'type' => 'text',
							'instructions' => 'This is button will show on the homepage.',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5aa2c4905379c',
							'label' => 'signup_box_title',
							'name' => 'signup_box_title',
							'type' => 'text',
							'instructions' => 'For the sign-up POPUP box title.',
							'default_value' => '',
							'placeholder' => '',
							'prepend' => '',
							'append' => '',
							'formatting' => 'html',
							'maxlength' => '',
						),
						array (
							'key' => 'field_5aa2c5385379d',
							'label' => 'signup_box_description',
							'name' => 'signup_box_description',
							'type' => 'textarea',
							'default_value' => '',
							'placeholder' => '',
							'maxlength' => '',
							'rows' => '',
							'formatting' => 'br',
						),
					),
					'location' => array (
						array (
							array (
								'param' => 'page',
								'operator' => '==',
								'value' => '11',
								'order_no' => 0,
								'group_no' => 0,
							),
						),
						array (
							array (
								'param' => 'page_template',
								'operator' => '==',
								'value' => 'page-fullwidth.php',
								'order_no' => 0,
								'group_no' => 1,
							),
						),
					),
					'options' => array (
						'position' => 'normal',
						'layout' => 'default',
						'hide_on_screen' => array (
							0 => 'the_content',
						),
					),
					'menu_order' => 0,
				));
			}
			include_once('advanced-custom-fields/acf.php');			

			


			// recommend require plugin for the theme
			require_once get_template_directory() . '/class-tgm-plugin-activation.php';
			
			add_action( 'tgmpa_register', 'plugin_register_required_plugins' );

			function plugin_register_required_plugins() {
				$plugins = array(
                        array(
						'name'      => 'advanced-custom-fields',
						'slug'      => 'advanced-custom-fields',
						'required'  => true,
					),
					array(
						'name'      => 'custom-post-type-ui',
						'slug'      => 'custom-post-type-ui',
						'required'  => true,
					),
					array(
						'name'      => 'woocommerce',
						'slug'      => 'woocommerce',
						'required'  => true,
					),
					array(
						'name'      => 'contact-form-7',
						'slug'      => 'contact-form-7',
						'required'  => true,
					),
	
				);

					$config = array(
						'id'           => 'test-theme',                 // Unique ID for hashing notices for multiple instances of TGMPA.
						'default_path' => get_stylesheet_directory() . '/lib/plugins/',  // Default absolute path to bundled plugins.
						'menu'         => 'test-theme-install-required-plugins', // Menu slug.
						'has_notices'  => true,                    // Show admin notices or not.
						'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
						'dismiss_msg'  => 'Please install this plugin to complete the theme',                      // If 'dismissable' is false, this message will be output at top of nag.
						'is_automatic' => false,                   // Automatically activate plugins after installation or not.
						'message'      => '',      // Message to output right before the plugins table.
					);
					tgmpa( $plugins, $config );
				
			
			}

