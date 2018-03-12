<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme_test2
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments div-block-33" class="comments-area">
	  <div class="div-block-35">


	<?php if ( have_comments() ) : ?>

		<h4 class="comments-title">
			<?php
			$comment_count = get_comments_number();
			if ( 1 === $comment_count ) {
				printf(
					/* translators: 1: title. */
					esc_html_e( 'One comment on &ldquo;%1$s&rdquo;', 'theme-test2' ),
					'<span>' . get_the_title() . '</span>'
				);
			} else {
				printf( // WPCS: XSS OK.
					/* translators: 1: comment count number, 2: title. */
					esc_html( _nx( '%1$s comments on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', $comment_count, 'comments title', 'theme-test2' ) ),
					number_format_i18n( $comment_count ),
					'<span>' . get_the_title() . '</span>'
				);
			}
			?>
		</h4><!-- .comments-title -->

		<?php the_comments_navigation(); ?>

		<ol class="comment-list">
			<?php
				wp_list_comments( array(
					'style'      => 'ol',
					'short_ping' => true,
				) );
			?>
			<a href="<?php $author = get_comment_author_url_link( $linktext, $before, $after ); ?>">comment</a>
		</ol><!-- .comment-list -->

		<?php the_comments_navigation();

		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() ) : ?>
			<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'theme-test2' ); ?></p>
		<?php
		endif;

	endif; // Check for have_comments().

	comment_form(); ?>
</div>

</div>
<!-- #comments -->
