<?php

/**
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

global $wpdb;

$order_filter  = isset($_GET['order']) ? sanitize_text_field($_GET['order']) : 'desc';
$assignment_id = sanitize_text_field($_GET['assignment']);
$assignments_submitted = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->comments} WHERE comment_type = 'tutor_assignment' AND comment_post_ID = %d ORDER BY comment_ID $order_filter", $assignment_id));

$max_mark = tutor_utils()->get_assignment_option($assignment_id, 'total_mark');
$pass_mark = tutor_utils()->get_assignment_option($assignment_id, 'pass_mark');
$format = get_option('date_format').' '.get_option('time_format');
$deadline = tutor_utils()->get_assignment_deadline_date($assignment_id, $format, __('No Limit', 'tutor'));
?>

<div class="tutor-dashboard-content-inner tutor-dashboard-assignment-submits">
    <div class="submitted-assignment-title">
        <a class="prev-btn" href="<?php echo tutor_utils()->get_tutor_dashboard_page_permalink('assignments'); ?>"><span>&leftarrow;</span><?php _e('Back', 'tutor'); ?></a>
    </div>

    <?php if (tutor_utils()->count($assignments_submitted)): ?>
        <div class="tutor-assignment-review-header tutor-assignment-submitted-page">
            <p>
                <?php _e('Course', 'tutor'); ?> :
                <a href="<?php echo get_the_permalink($assignments_submitted[0]->comment_parent); ?>" target="_blank">
                    <?php echo get_the_title($assignments_submitted[0]->comment_parent); ?>
                </a>
            </p>
            <h3>
                <a href="<?php echo get_the_permalink($assignment_id); ?>" target="_blank">
                    <?php echo get_the_title($assignment_id); ?>
                </a>
            </h3>
            <div class="assignment-info">
                <p>
                    <?php _e('Submission Deadline', 'tutor'); ?>:
                    <span><?php echo $deadline; ?></span>
                </p>
                <p>
                    <?php _e('Total Points', 'tutor'); ?>:
                    <span><?php echo $max_mark; ?></span>
                </p>
                <p>
                    <?php _e('Pass Points', 'tutor'); ?>:
                    <span><?php echo $pass_mark; ?></span>
                </p>
            </div>
        </div>

        <div class="tutor-dashboard-announcement-sorting-wrap submitted-assignments-sorting-wrap">
            <div class="tutor-form-group">
                <label><?php _e('Sort By:', 'tutor'); ?></label>
                <select class="tutor-announcement-order-sorting tutor-form-select">
                    <option value="desc" <?php selected($order_filter, 'desc'); ?>><?php _e('Latest', 'tutor'); ?></option>
                    <option value="asc" <?php selected($order_filter, 'asc'); ?>><?php _e('Oldest', 'tutor'); ?></option>
                </select>
            </div>
        </div>

        <table class="tutor-ui-table tutor-ui-table-responsive table-assignment">
            <thead>
                <tr>
                    <th>
                        <span class="text-regular-small color-text-subsued">
                            <?php esc_attr_e('Date', 'tutor'); ?>
                        </span>
                    </th>
                    <th>
                        <div class="inline-flex-center color-text-subsued">
                            <span class="text-regular-small">
                                <?php esc_attr_e('Student', 'tutor'); ?>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="inline-flex-center color-text-subsued">
                            <span class="text-regular-small">
                                <?php esc_attr_e('Total Points', 'tutor'); ?>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="inline-flex-center color-text-subsued">
                            <span class="text-regular-small">
                                <?php esc_attr_e('Result', 'tutor'); ?>
                            </span>
                        </div>
                    </th>
                    <th class="tutor-shrink"></th>
                </tr>
            </thead>
            <tbody>
                <?php
                    foreach ($assignments_submitted as $assignment) {
                        $review_url                = tutor_utils()->get_tutor_dashboard_page_permalink('assignments/review');
                        $comment_author            = get_user_by('login', $assignment->comment_author); // login=username
                        $is_reviewed_by_instructor = get_comment_meta($assignment->comment_ID, 'evaluate_time', true);
                        $given_mark                = get_comment_meta($assignment->comment_ID, 'assignment_mark', true);
                        $not_evaluated             = $given_mark === '';
                        $status                    = sprintf(__('%s Pending %s', 'tutor'), '<span class="review-required">', '</span>');
                        $button_text               = __('Evaluate', 'tutor');
                        
                        if (!empty($given_mark) || !$not_evaluated) {
                            $status = (int) $given_mark >= (int) $pass_mark ? sprintf(__('%s Pass %s', 'tutor'), '<span class="result-pass">', '</span>') : sprintf(__('%s Fail %s', 'tutor'), '<span class="result-fail">', '</span>');
                            $button_text = __('Details', 'tutor');
                        }
                    ?>
                    <tr>
                        <td data-th="<?php _e('Date', 'tutor'); ?>">
                            <span class="color-text-primary text-medium-caption">
                                <?php echo date('j M, Y,<\b\r>h:i a', strtotime($assignment->comment_date)); ?>
                            </span>
                        </td>
                        <td data-th="<?php _e('Student', 'tutor'); ?>">
                            <div class="student-column">
                                <div class="student-avatar">
                                    <?php echo tutils()->get_tutor_avatar($comment_author->ID); ?>
                                </div>
                                <div class="student-details">
                                    <h4><?php echo $comment_author->display_name; ?></h4>
                                    <p><?php echo $comment_author->user_email; ?></p>
                                </div>
                            </div>
                        </td>
                        <td data-th="<?php _e('Total Points', 'tutor'); ?>">
                            <span class="color-text-primary text-medium-caption">
                                <?php echo !empty($given_mark) ? $given_mark . '/' . $max_mark : ''; ?>
                            </span>
                        </td>
                        <td data-th="<?php _e('Result', 'tutor'); ?>">
                            <?php echo $status; ?>
                        </td>
                        <td data-th="<?php _e('Details URL', 'tutor'); ?>">
                            <div class="inline-flex-center td-action-btns">
                                <a href="<?php echo esc_url($review_url . '?view_assignment=' . $assignment->comment_ID) . '&assignment=' . $assignment_id; ?>" class="tutor-btn btn-outline">
                                    <?php echo $button_text; ?>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <?php
                    }
                ?>
            </tbody>
        </table>
    <?php else: ?>
        <p><?php _e('No assignment has been submitted yet', 'tutor'); ?></p>
    <?php endif; ?>
</div>