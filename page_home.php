<?php
/**
 * The template for displaying all pages
 * Template name: Home page
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme_test2
 */

get_header(); ?>
s
<?php get_template_part('template-parts/content','slider');?>
<?php get_template_part('template-parts/content','signup');?>
<?php get_template_part('template-parts/content','about');?>
<?php get_template_part('template-parts/content','topsell');?>
<?php get_template_part('template-parts/content','blog');?>
<?php get_template_part('template-parts/content','last');?>

<?php get_footer();?>
