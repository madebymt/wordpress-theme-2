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


// support woocommerce
add_action('after_setup_theme','woocommerce_support');
function woocommerce_support(){
	add_theme_support('woocommerce');
}




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
add_action('wp_head', 'hide_sidebar');
function hide_sidebar(){
if(is_cart() || is_checkout()){
?><style type="text/css">
#secondary {
display: none;
}
</style><?php
}
}
