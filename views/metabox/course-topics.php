<div id="tutor-course-content-builder-root">
    <?php $course_id = get_the_ID(); ?>
    <div id="tutor-course-content-wrap">
        <?php
        include  tutor()->path.'views/metabox/course-contents.php';
        ?>
    </div>

    <div class="new-topic-btn-wrap">
        <a data-tutor-modal-target="tutor-modal-add-topic" href="javascript:;" class="create_new_topic_btn tutor-btn bordered-btn"> 
            <i class="tutor-icon-text-document-add-button-with-plus-sign"></i> <?php _e('Add new topic', 'tutor'); ?>
        </a>
    </div>

    <?php 
        tutor_load_template_from_custom_path(tutor()->path.'/views/modal/topic-form.php', array(
            'modal_title'   => __('Add Topic', 'tutor'),
            'wrapper_id'    => 'tutor-modal-add-topic',
            'topic_id'      => null,
            'course_id'     => $course_id,
            'wrapper_class' => '',
            'button_text'   => __('Add Topic', 'tutor'),
            'button_id'     => 'tutor-add-topic-btn'
        ), false); 
    ?>

    <div class="tutor-modal modal-sticky-header-footer tutor-quiz-builder-modal-wrap" data-target="quiz-builder-tab-quiz-info">
        <span class="tutor-modal-overlay"></span>
        <div class="tutor-modal-root">
            <div class="tutor-modal-inner">
                <div class="tutor-modal-header">
                    <h3 class="tutor-modal-title">
                        <?php _e('Quiz', 'tutor'); ?>
                    </h3>
                    <button data-tutor-modal-close class="tutor-modal-close">
                        <span class="las la-times"></span>
                    </button>
                </div>
                
                <div class="tutor-modal-steps">
                    <ul>
                        <li class="tutor-is-completed" data-tab="quiz-builder-tab-quiz-info">
                            <span><?php _e('Quiz Info', 'tutor'); ?></span>
                            <button class="tutor-modal-step-btn">1</button>
                        </li>
                        <li data-tab="quiz-builder-tab-questions">
                            <span><?php _e('Question', 'tutor'); ?></span>
                            <button class="tutor-modal-step-btn">2</button>
                        </li>
                        <li data-tab="quiz-builder-tab-settings">
                            <span><?php _e('Settings', 'tutor'); ?></span>
                            <button class="tutor-modal-step-btn">4</button>
                        </li>
                    </ul>
                </div>

                <div class="tutor-modal-body-alt modal-container">
                </div>

                <div class="tutor-modal-footer">
                    <div class="tutor-bs-row">
                        <div class="tutor-bs-col">
                            <div class="tutor-btn-group">
                                <button type="button" data-action="back" class="tutor-btn tutor-is-default">
                                    <?php _e('Back', 'tutor'); ?>
                                </button>
                                <button type="button" data-action="next" class="tutor-btn tutor-is-primary">
                                    <?php _e('Save & Next', 'tutor'); ?>
                                </button>
                            </div>
                        </div>
                        <div class="tutor-bs-col-auto">
                            <button data-tutor-modal-close class="tutor-btn tutor-is-default">
                                <?php _e('Cancel', 'tutor'); ?>
                            </button>
                        </div>
                        <div class="tutor-bs-col">
                            <buttn class="tutor-btn tutor-is-xs quiz-modal-question-save-btn">
                                <?php _e('Add To Questions', 'tutor'); ?>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="tutor-modal modal-sticky-header-footer tutor-lesson-modal-wrap">
        <span class="tutor-modal-overlay"></span>
        <div class="tutor-modal-root">
            <div class="tutor-modal-inner">
                <div class="tutor-modal-header">
                    <h3 class="tutor-modal-title">
                        <?php _e('Lesson', 'tutor'); ?>
                    </h3>
                    <button data-tutor-modal-close class="tutor-modal-close">
                        <span class="las la-times"></span>
                    </button>
                </div>
                <div class="tutor-modal-body-alt modal-container"></div>
                <div class="tutor-modal-footer">
                    <div class="tutor-bs-row">
                        <div class="tutor-bs-col">
                            <button type="button" class="tutor-btn update_lesson_modal_btn">
                                <?php _e('Update Lesson', 'tutor'); ?>
                            </button>
                        </div>
                        <div class="tutor-bs-col-auto">
                            <button data-tutor-modal-close class="tutor-btn tutor-is-default">
                                <?php _e('Cancel', 'tutor'); ?>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="tutor-modal modal-sticky-header-footer tutor-assignment-modal-wrap">
        <span class="tutor-modal-overlay"></span>
        <div class="tutor-modal-root">
            <div class="tutor-modal-inner">
                <div class="tutor-modal-header">
                    <h3 class="tutor-modal-title">
                        <?php _e('Assignment', 'tutor'); ?>
                    </h3>
                    <button data-tutor-modal-close class="tutor-modal-close">
                        <span class="las la-times"></span>
                    </button>
                </div>
                <div class="tutor-modal-body-alt modal-container">

                </div>
                <div class="tutor-modal-footer">
                    <div class="tutor-bs-row">
                        <div class="tutor-bs-col">
                            <button type="button" class="tutor-btn update_assignment_modal_btn">
                                <?php _e('Update Assignment', 'tutor'); ?>
                            </button>
                        </div>
                        <div class="tutor-bs-col-auto">
                            <button data-tutor-modal-close class="tutor-btn tutor-is-default">
                                <?php _e('Cancel', 'tutor'); ?>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php do_action('course-topic/after/modal_wrappers'); ?>
</div>