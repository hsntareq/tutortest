<?php
/**
 * Course List Template.
 *
 * @package Course List
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use TUTOR\Course_List;
use TUTOR_REPORT\Analytics;
use TUTOR_REPORT\CourseAnalytics;

$courses = new Course_List();

/**
 * Short able params
 */
$course_id     = isset( $_GET['course-id'] ) ? sanitize_text_field( $_GET['course-id'] ) : '';
$order_filter  = isset( $_GET['order'] ) ? sanitize_text_field( $_GET['order'] ) : 'DESC';
$date          = isset( $_GET['date'] ) ? sanitize_text_field( $_GET['date'] ) : '';
$search_filter = isset( $_GET['search'] ) ? sanitize_text_field( $_GET['search'] ) : '';

/**
 * Determine active tab
 */
$active_tab = isset( $_GET['data'] ) && $_GET['data'] !== '' ? esc_html__( $_GET['data'] ) : 'all';

/**
 * Pagination data
 */
$paged_filter = ( isset( $_GET['paged'] ) && is_numeric( $_GET['paged'] ) && $_GET['paged'] >= 1 ) ? $_GET['paged'] : 1;
$limit        = tutor_utils()->get_option( 'pagination_per_page' );
$offset       = ( $limit * $paged_filter ) - $limit;

/**
 * Navbar data to make nav menu
 */
$navbar_data = array(
	'page_title' => $courses->page_title,
	'tabs'       => $courses->tabs_key_value( $course_id, $date, $search_filter ),
	'active'     => $active_tab,
);

/**
 * Bulk action & filters
 */
// $filters = array(
// 'bulk_action'   => $enrollments->bulk_action,
// 'bulk_actions'  => $enrollments->prpare_bulk_actions(),
// 'search_filter' => true,
// );
$filters = array(
	'bulk_action'  => $courses->bulk_action,
	'bulk_actions' => $courses->prepare_bulk_actions(),
	'ajax_action'  => 'tutor_course_list_bulk_action',
	'filters'      => true,
);


$args = array(
	'post_type' => tutor()->course_post_type,
	'orderby'   => 'ID',
	'order'     => $order_filter,
	'paged'     => $paged_filter,
	'offset'    => $offset,
);

if ( 'all' === $active_tab || 'mine' === $active_tab ) {
	$args['post_status'] = array( 'publish', 'pending', 'draft' );
} else {
	$status              = $active_tab === 'published' ? 'publish' : $active_tab;
	$args['post_status'] = array( $status );
}

if ( 'mine' === $active_tab ) {
	$args['author'] = get_current_user_id();
}
$date_filter = sanitize_text_field( tutor_utils()->array_get( 'date', $_GET, '' ) );

$year  = date( 'Y', strtotime( $date_filter ) );
$month = date( 'm', strtotime( $date_filter ) );
$day   = date( 'd', strtotime( $date_filter ) );
// Add date query.
if ( '' !== $date_filter ) {
	$args['date_query'] = array(
		array(
			'year'  => $year,
			'month' => $month,
			'day'   => $day,
		),
	);
}

if ( '' !== $course_id ) {
	$args['p'] = $course_id;
}
// Add author param.
if ( 'mine' === $active_tab ) {
	$args['author'] = get_current_user_id();
}
// Search filter.

if ( '' !== $search_filter ) {
	$args['s'] = $search_filter;
}
$the_query = new WP_Query( $args );

?>
<div class="tutor-admin-page-wrapper">
	<?php
	/**
	 * Load Templates with data.
	 */
	$navbar_template  = esc_url( tutor()->path . 'views/elements/navbar.php' );
	$filters_template = esc_url( tutor()->path . 'views/elements/filters.php' );
	tutor_load_template_from_custom_path( $navbar_template, $navbar_data );
	tutor_load_template_from_custom_path( $filters_template, $filters );
	?>

	<div class="tutor-admin-page-content-wrapper">
		<div class="tutor-ui-table-wrapper">
			<table class="tutor-ui-table tutor-ui-table-responsive table-dashboard-course-list td-align-middle">
				<thead class="tutor-text-sm tutor-text-400">
					<tr>
						<th>
							<div class="d-flex">
								<input type="checkbox" id="tutor-bulk-checkbox-all" class="tutor-form-check-input" />
							</div>
						</th>
						<th>
							  <div class="text-regular-small color-text-subsued">
								<?php esc_html_e( 'Date', 'tutor' ); ?>
							</div>
						</th>
						<th>
							<div class="text-regular-small color-text-subsued">
							<?php esc_html_e( 'Title', 'tutor-pro' ); ?>
							</div>
						</th>
						<th>
							<div class="inline-flex-center color-text-subsued">
								<span class="text-regular-small">
								<?php esc_html_e( 'Author', 'tutor-pro' ); ?>
								</span>
								<span class="tutor-v2-icon-test icon-ordering-a-to-z-filled"></span>
							</div>
						</th>	
						<th>
							<div class="text-regular-small color-text-subsued">
								<?php esc_html_e( 'Course Categories', 'tutor-pro' ); ?>
							</div>
						</th>
						<th>
							<div class="text-regular-small color-text-subsued">
								<?php esc_html_e( 'Students', 'tutor-pro' ); ?>
							</div>
						</th>
						<th>
							<div class="text-regular-small color-text-subsued">
								<?php esc_html_e( 'Price', 'tutor-pro' ); ?>
							</div>
						</th>
						<th class="tutor-shrink"></th>											
					</tr>
				</thead>
				<tbody class="tutor-text-500">
					<?php if ( $the_query->have_posts() ) : ?>
						<?php
						foreach ( $the_query->posts as $key => $post ) :
							$the_query->the_post();
							$count_lesson     = tutor_utils()->get_lesson_count_by_course( $post->ID );
							$count_quiz       = Analytics::get_all_quiz_by_course( $post->ID );
							$count_assignment = tutor_utils()->get_assignments_by_course( $post->ID )->count;
							$count_topic      = count( tutor_utils()->get_topics( $post->ID ) );
							$student_details  = CourseAnalytics::course_enrollments_with_student_details( $post->ID );
							$total_student    = $student_details['total_enrollments'];
							$author_details   = get_userdata( $post->post_author );
							?>
							<tr>
								<td data-th="Checkbox">
									<div class="td-checkbox d-flex ">
										<input type="checkbox" class="tutor-form-check-input tutor-bulk-checkbox" name="tutor-bulk-checkbox-all" value="<?php echo esc_attr( $post->ID ); ?>" />
									</div>
								</td>
								<td data-th="Date">
									<div class="td-datetime text-regular-caption color-text-primary">
										<?php echo esc_html( tutor_get_formated_date( get_option( 'date_format' ), $post->post_date ) ); ?>
									</div>
								</td>

								<td data-th="Course Name" class="column-fullwidth">
									<div class="td-course color-text-primary text-medium-body">
										<a href="#">
											<?php echo esc_html( $post->post_title ); ?>
										</a>
										<div class="course-meta">
										<span class="color-text-hints text-medium-small">
											<?php esc_html_e( 'Topic:', 'tutor' ); ?> 
											<strong class="color-text-primary">
												<?php echo esc_html( $count_topic ); ?>
											</strong>
										</span>
										<span class="color-text-hints text-medium-small">
											<?php esc_html_e( 'Lesson:', 'tutor' ); ?> 
											<strong class="color-text-primary">
												<?php echo esc_html( $count_lesson ); ?>
											</strong>
										</span>
										<span class="color-text-hints text-medium-small">
											<?php esc_html_e( 'Quiz:', 'tutor' ); ?> 
											<strong class="color-text-primary">
												<?php echo esc_html( $count_quiz ); ?>
											</strong>
										</span>
										<span class="color-text-hints text-medium-small">
											<?php esc_html_e( 'Assignment:', 'tutor' ); ?> 
											<strong class="color-text-primary">
												<?php echo esc_html( $count_assignment ); ?>
											</strong>
										</span>
										</div>
									</div>
								</td>
								<td data-th="Author">
									<div class="td-avatar">
										<?php
											echo wp_kses_post( tutor_utils()->get_tutor_avatar( $post->post_author ) );
										?>
										<p class="text-medium-body color-text-primary">
											<?php echo esc_html( $author_details->display_name ); ?>
										</p>
										<a
										href="#"
										class="btn-text btn-detail-link color-design-dark"
										>
										<span class="tutor-v2-icon-test icon-detail-link-filled"></span>
										</a>
									</div>
								</td>
								<td data-th="Course Categories">
									<?php
										$terms       = wp_get_post_terms( $post->ID, 'course-category' );
										$total_terms = count( $terms ) - 1;
									foreach ( $terms as $key => $term ) {
										$separator = $key < $total_terms ? ', ' : '';
										echo esc_html( $term->name . $separator );
									}
									?>
								</td>
								<td data-th="Student">
									  <div class="text-regular-caption color-text-primary">
										<?php echo esc_html( $total_student ); ?>
									</div>
								</td>
								<td data-th="Price">
									<div class="text-regular-caption color-text-primary">
										<?php
											$price = tutor_utils()->get_course_price( $post->ID );
										if ( null === $price ) {
											esc_html_e( 'Free', 'tutor' );
										} else {
											echo wp_kses_post( wc_price( $price ) );
										}
										?>
									</div>
								</td>
								<td data-th="Actions">
									<div class="inline-flex-center td-action-btns">
										<div class="tutor-form-select-with-icon select-default- select-primary select-success- select-danger- select-warning-">
										<select title="Please select a color">
											<option value="Red">Red</option>
											<option value="Blue">Blue</option>
											<option value="Blue">Yellow</option>
										</select>
										<i class="icon1 ttr-eye-fill-filled"></i>
										<i class="icon2 ttr-angle-down-filled"></i>
										</div>
										<a href="#" class="btn-outline tutor-btn">
										Edit
										</a>
									
										<div class="tutor-popup-opener">
										<button
											type="button"
											class="popup-btn"
											data-tutor-popup-target="table-dashboard-course-list-1"
										>
											<span class="toggle-icon"></span>
										</button>
										<ul id="table-dashboard-course-list-1" class="popup-menu">
											<li>
											<a href="#">
												<span class="icon tutor-v2-icon-test icon-msg-archive-filled color-design-white"></span>
												<span class="text-regular-body color-text-white">
												Download
												</span>
											</a>
											</li>
											<li>
											<a href="#">
												<span class="icon tutor-v2-icon-test icon-delete-fill-filled color-design-white"></span>
												<span class="text-regular-body color-text-white">
												Delete
												</span>
											</a>
											</li>
										</ul>
										</div>
									</div>
								</td>
							</tr>
						<?php endforeach; ?>
					<?php else : ?>
						<tr>
							<?php esc_html_e( 'No course found', 'tutor' ); ?>
						</tr>
					<?php endif; ?>
				</tbody>
			</table>
		</div>
	</div>
	<div class="tutor-admin-page-pagination-wrapper">
		<?php
		/**
		 * Prepare pagination data & load template
		 */
		$pagination_data     = array(
			'total_items' => $the_query->found_posts,
			'per_page'    => $limit,
			'paged'       => $paged_filter,
		);
		$pagination_template = esc_url( tutor()->path . 'views/elements/pagination.php', $pagination_data );
		tutor_load_template_from_custom_path( $pagination_template, $pagination_data );
		?>
	</div>
</div>
