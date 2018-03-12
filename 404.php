<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package theme_test2
 */

get_header(); ?>

<div>
	<div class="div-block-21 resource" style="background:URL('<?php echo $thumbnail_url;?>') no-repeat; background-size:cover; background-attachment: fixed;">
		<h1 class="heading-12">OOPS! Page Not Fund!</h1>
	</div>
</div>

<div class="div-block-54">
	<div id="primary" class="content-area w-row">
		<main id="main" class="site-main column-7 w-col w-col-8">
				<div class="error-404 not-found">
					<div class="page-content">
						<h2 class="lead">Don't worry! Check this out</h2>
							<p class="lead">Perhaps your were looking for this....?</p>
							<div class="div-block-37 resource">

									<?php $loop = new WP_Query( array('post_type' => 'resource_section', 'orderby' => 'post_id', 'order' => 'ASC') )?>
									<?php while ($loop -> have_posts()) : $loop -> the_post(); ?>
									<?php
									$resource_image = get_field('resource_image');
									$resource_url = get_field('resource_url');
									$resource_title = get_field('resource_title');
									$resource_description = get_field('resource_description');
									?>

									<div class="div-block-36">
										<h1 class="heading-17"><?php the_title();?></h1>
										<a href="<?php echo $resource_url;?>" class="w-inline-block">
											<img src="<?php echo $resource_image;?>" class="image-11">

										</a>
										<p class="paragraph-14"><?php echo $resource_description;?></p>
									</div>

									<?php endwhile  ;
									wp_reset_query();?>
								</div>

								<!-- show categories -->
								<h3 class="lead">Categories</h3>
								<div class="widget widget_cateforeies">
									<ul>
									<p>....or maybe a Popular category?</p>
									 <?php wp_list_categories(array(
											'orderby' => 'count',
											'order'   => 'DESC',
											'show_count' => 1,
											'title_li' => '',
											'number'   => 10
										))?>
									</ul>
								</div>

								<!-- <h3 class="lead">Archieves</h3> -->
								<?php the_widget('WP_Widget_Archives','title=Our Archives','before_title=<h4 class="lead">&after_title</h4>'); ?>
                <div class="">
									<p class="lead"> Or Just head back to the <a href="<?php echo esc_url(home_url('/'))?>">Home Page</a></p>

                </div>
						</div>
					</div>
				</main>
						<div class="column-8 w-col w-col-4">
						  <div class="div-block-26">
								<div class="div-block-31">
									 <?php get_sidebar(); ?>
								</div>
							</div>
						</div>
		</div>
	</div><!-- #primary -->


<?php
get_footer();
