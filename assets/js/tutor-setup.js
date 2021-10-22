/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/react/lib/common.js":
/*!************************************!*\
  !*** ./assets/react/lib/common.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tutor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutor */ "./assets/react/lib/tutor.js");
/* harmony import */ var _media_chooser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-chooser */ "./assets/react/lib/media-chooser.js");
/* harmony import */ var _media_chooser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_chooser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./assets/react/lib/utilities.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utilities__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./assets/react/lib/media-chooser.js":
/*!*******************************************!*\
  !*** ./assets/react/lib/media-chooser.js ***!
  \*******************************************/
/***/ (() => {

window.jQuery(document).ready(function ($) {
  var __ = window.wp.i18n.__;
  /**
   * Lesson upload thumbnail
   */

  $(document).on('click', '.tutor-thumbnail-uploader .tutor-thumbnail-upload-button', function (event) {
    event.preventDefault();
    var wrapper = $(this).closest('.tutor-thumbnail-uploader');
    var frame;

    if (frame) {
      frame.open();
      return;
    }

    frame = wp.media({
      title: wrapper.data('media-heading'),
      button: {
        text: wrapper.data('button-text')
      },
      multiple: false
    });
    frame.on('select', function () {
      var attachment = frame.state().get('selection').first().toJSON();
      wrapper.find('img').attr('src', attachment.url);
      wrapper.find('input[type="hidden"].tutor-tumbnail-id-input').val(attachment.id);
      wrapper.find('.delete-btn').show();
    });
    frame.open();
  });
  /**
   * Lesson Feature Image Delete
   * @since v.1.5.6
   */

  $(document).on('click', '.tutor-thumbnail-uploader .delete-btn', function (e) {
    e.preventDefault();
    var $that = $(this);
    var wrapper = $that.closest('.tutor-thumbnail-uploader');
    wrapper.find('input[type="hidden"].tutor-tumbnail-id-input').val('');
    wrapper.find('img').attr('src', '');
    $that.hide();
  });
});

/***/ }),

/***/ "./assets/react/lib/tutor.js":
/*!***********************************!*\
  !*** ./assets/react/lib/tutor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v2_library_src_js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../v2-library/_src/js/main */ "./v2-library/_src/js/main.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



window.tutor_get_nonce_data = function (send_key_value) {
  var nonce_data = window._tutorobject || {};
  var nonce_key = nonce_data.nonce_key || '';
  var nonce_value = nonce_data[nonce_key] || '';

  if (send_key_value) {
    return {
      key: nonce_key,
      value: nonce_value
    };
  }

  return _defineProperty({}, nonce_key, nonce_value);
};

window.tutor_popup = function ($, icon, padding) {
  var $this = this;
  var element;

  this.popup_wrapper = function (wrapper_tag) {
    var img_tag = icon === '' ? '' : '<img class="tutor-pop-icon" src="' + window._tutorobject.tutor_url + 'assets/images/' + icon + '.svg"/>';
    return '<' + wrapper_tag + ' class="tutor-component-popup-container">\
            <div class="tutor-component-popup-' + padding + '">\
                <div class="tutor-component-content-container">' + img_tag + '</div>\
                <div class="tutor-component-button-container"></div>\
            </div>\
        </' + wrapper_tag + '>';
  };

  this.popup = function (data) {
    var title = data.title ? '<h3>' + data.title + '</h3>' : '';
    var description = data.description ? '<p>' + data.description + '</p>' : '';
    var buttons = Object.keys(data.buttons || {}).map(function (key) {
      var button = data.buttons[key];
      var button_id = button.id ? 'tutor-popup-' + button.id : '';
      return $('<button id="' + button_id + '" class="' + button["class"] + '">' + button.title + '</button>').click(button.callback);
    });
    element = $($this.popup_wrapper(data.wrapper_tag || 'div'));
    var content_wrapper = element.find('.tutor-component-content-container');
    content_wrapper.append(title);
    data.after_title ? content_wrapper.append(data.after_title) : 0;
    content_wrapper.append(description);
    data.after_description ? content_wrapper.append(data.after_description) : 0; // Assign close event on click black overlay

    element.click(function () {
      $(this).remove();
    }).children().click(function (e) {
      e.stopPropagation();
    }); // Append action button

    for (var i = 0; i < buttons.length; i++) {
      element.find('.tutor-component-button-container').append(buttons[i]);
    }

    $('body').append(element);
    return element;
  };

  return {
    popup: this.popup
  };
};

window.tutorDotLoader = function (loaderType) {
  return "    \n    <div class=\"tutor-dot-loader ".concat(loaderType ? loaderType : '', "\">\n        <span class=\"dot dot-1\"></span>\n        <span class=\"dot dot-2\"></span>\n        <span class=\"dot dot-3\"></span>\n        <span class=\"dot dot-4\"></span>\n    </div>");
};

window.tutor_date_picker = function () {
  if (jQuery.datepicker) {
    var format = _tutorobject.wp_date_format;

    if (!format) {
      format = "yy-mm-dd";
    }

    $(".tutor_date_picker").datepicker({
      "dateFormat": format
    });
  }
};

jQuery(document).ready(function ($) {
  'use strict';

  var _wp$i18n = wp.i18n,
      __ = _wp$i18n.__,
      _x = _wp$i18n._x,
      _n = _wp$i18n._n,
      _nx = _wp$i18n._nx;
  /**
   * Global date_picker selector 
   * 
   * @since 1.9.7
   */

  function load_date_picker() {
    if (jQuery.datepicker) {
      var format = _tutorobject.wp_date_format;

      if (!format) {
        format = "yy-mm-dd";
      }

      $(".tutor_date_picker").datepicker({
        "dateFormat": format
      });
    }
    /** Disable typing on datePicker field */


    $(document).on('keydown', '.hasDatepicker, .tutor_date_picker', function (e) {
      if (e.keyCode !== 8) {
        e.preventDefault();
      }
    });
  }

  ;
  load_date_picker();
  /**
   * Video source tabs
   */

  if (jQuery().select2) {
    $('.videosource_select2').select2({
      width: "100%",
      templateSelection: iformat,
      templateResult: iformat,
      allowHtml: true
    });
  } //videosource_select2


  function iformat(icon) {
    var originalOption = icon.element;
    return $('<span><i class="tutor-icon-' + $(originalOption).data('icon') + '"></i> ' + icon.text + '</span>');
  }
  /**
   * Course Builder
   *
   * @since v.1.3.4
   */


  $(document).on('click', '.tutor-course-thumbnail-upload-btn', function (event) {
    event.preventDefault();
    var $that = $(this);
    var frame;

    if (frame) {
      frame.open();
      return;
    }

    frame = wp.media({
      title: __('Select or Upload Media Of Your Chosen Persuasion', 'tutor'),
      button: {
        text: __('Use this media', 'tutor')
      },
      multiple: false
    });
    frame.on('select', function () {
      var attachment = frame.state().get('selection').first().toJSON();
      $that.closest('.tutor-thumbnail-wrap').find('.thumbnail-img').attr('src', attachment.url);
      $that.closest('.tutor-thumbnail-wrap').find('input').val(attachment.id);
      $('.tutor-course-thumbnail-delete-btn').show();
    });
    frame.open();
  }); //Delete Thumbnail

  $(document).on('click', '.tutor-course-thumbnail-delete-btn', function (event) {
    event.preventDefault();
    var $that = $(this);
    var placeholder_src = $that.closest('.tutor-thumbnail-wrap').find('.thumbnail-img').attr('data-placeholder-src');
    $that.closest('.tutor-thumbnail-wrap').find('.thumbnail-img').attr('src', placeholder_src);
    $that.closest('.tutor-thumbnail-wrap').find('input').val('');
    $('.tutor-course-thumbnail-delete-btn').hide();
  });
  $(document).on('change keyup', '.course-edit-topic-title-input', function (e) {
    e.preventDefault();
    $(this).closest('.tutor-topics-top').find('.topic-inner-title').html($(this).val());
  });
  $(document).on('click', '.tutor-topics-edit-button', function (e) {
    e.preventDefault();
    var $button = $(this);
    var topics_id = $button.closest('.tutor-topics-wrap').find('[name="topic_id"]').val();
    ;
    var topic_title = $button.closest('.tutor-topics-wrap').find('[name="topic_title"]').val();
    var topic_summery = $button.closest('.tutor-topics-wrap').find('[name="topic_summery"]').val();
    var data = {
      topic_title: topic_title,
      topic_summery: topic_summery,
      topic_id: topics_id,
      action: 'tutor_update_topic'
    };
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: data,
      beforeSend: function beforeSend() {
        $button.addClass('tutor-updating-message');
      },
      success: function success(data) {
        if (data.success) {
          $button.closest('.tutor-topics-wrap').find('span.topic-inner-title').text(topic_title);
          $button.closest('.tutor-modal').removeClass('tutor-is-active');
        }
      },
      complete: function complete() {
        $button.removeClass('tutor-updating-message');
      }
    });
  });
  /**
   * Delete Lesson from course builder
   */

  $(document).on('click', '.tutor-delete-lesson-btn', function (e) {
    e.preventDefault();

    if (!confirm(__('Are you sure?', 'tutor'))) {
      return;
    }

    var $that = $(this);
    var lesson_id = $that.attr('data-lesson-id');
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: {
        lesson_id: lesson_id,
        action: 'tutor_delete_lesson_by_id'
      },
      beforeSend: function beforeSend() {
        $that.addClass('tutor-updating-message');
      },
      success: function success(data) {
        if (data.success) {
          $that.closest('.course-content-item').remove();
        }
      },
      complete: function complete() {
        $that.removeClass('tutor-updating-message');
      }
    });
  });
  /**
   * Quiz Modal
   */

  $(document).on('click', '.modal-close-btn', function (e) {
    e.preventDefault();
    $('.tutor-modal-wrap').removeClass('show');
  });
  $(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
      $('.tutor-modal-wrap').removeClass('show');
    }
  });
  /**
   * Quiz Builder Modal Tabs
   */

  $(document).on('click', '.tutor-quiz-modal-tab-item', function (e) {
    e.preventDefault();
    var $that = $(this);
    var $quizTitle = $('[name="quiz_title"]');
    var quiz_title = $quizTitle.val();

    if (!quiz_title) {
      $quizTitle.closest('.tutor-quiz-builder-form-row').find('.quiz_form_msg').html('<p class="quiz-form-warning">Please save the quiz' + ' first</p>');
      return;
    } else {
      $quizTitle.closest('.tutor-quiz-builder-form-row').find('.quiz_form_msg').html('');
    }

    var tabSelector = $that.attr('href');
    $('.quiz-builder-tab-container').hide();
    $(tabSelector).show();
    $('a.tutor-quiz-modal-tab-item').removeClass('active');
    $that.addClass('active');
  });
  $(document).on('click', '.quiz-modal-tab-navigation-btn.quiz-modal-btn-cancel', function (e) {
    e.preventDefault();
    $('.tutor-modal-wrap').removeClass('show');
  });
  /**
   * Get question answers option edit form
   *
   * @since v.1.0.0
   */

  $(document).on('click', '.tutor-quiz-answer-edit a', function (e) {
    e.preventDefault();
    var $that = $(this);
    var answer_id = $that.closest('.tutor-quiz-answer-wrap').attr('data-answer-id');
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: {
        answer_id: answer_id,
        action: 'tutor_quiz_edit_question_answer'
      },
      beforeSend: function beforeSend() {
        $that.addClass('tutor-updating-message');
      },
      success: function success(data) {
        $('#tutor_quiz_question_answer_form').html(data.data.output);
      },
      complete: function complete() {
        $that.removeClass('tutor-updating-message');
      }
    });
  });
  /**
   * Saving question answers options
   * Student should select the right answer at quiz attempts
   *
   * @since v.1.0.0
   */

  $(document).on('click', '#quiz-answer-save-btn', function (e) {
    e.preventDefault();
    var $that = $(this);
    var $formInput = $('#tutor-quiz-question-wrapper :input').serializeObject();
    $formInput.action = 'tutor_save_quiz_answer_options';
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: $formInput,
      beforeSend: function beforeSend() {
        $('#quiz_validation_msg_wrap').html("");
        $that.addClass('tutor-updating-message');
      },
      success: function success(data) {
        $('#tutor_quiz_question_answers').trigger('refresh');
      },
      complete: function complete() {
        $that.removeClass('tutor-updating-message');
      }
    });
  });
  /**
   * Updating Answer
   *
   * @since v.1.0.0
   */

  $(document).on('click', '#quiz-answer-edit-btn', function (e) {
    e.preventDefault();
    var $that = $(this);
    var $formInput = $('#tutor-quiz-question-wrapper :input').serializeObject();
    $formInput.action = 'tutor_update_quiz_answer_options';
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: $formInput,
      beforeSend: function beforeSend() {
        $that.addClass('tutor-updating-message');
      },
      success: function success(data) {
        $('#tutor_quiz_question_answers').trigger('refresh');
      },
      complete: function complete() {
        $that.removeClass('tutor-updating-message');
      }
    });
  });
  $(document).on('change', '.tutor-quiz-answers-mark-correct-wrap input', function (e) {
    e.preventDefault();
    var $that = $(this);
    var answer_id = $that.val();
    var inputValue = 1;

    if (!$that.prop('checked')) {
      inputValue = 0;
    }

    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: {
        answer_id: answer_id,
        inputValue: inputValue,
        action: 'tutor_mark_answer_as_correct'
      }
    });
  });
  /**
   * Delete answer for a question in quiz builder
   *
   * @since v.1.0.0
   */

  $(document).on('click', '.tutor-quiz-answer-trash-wrap a.answer-trash-btn', function (e) {
    e.preventDefault();
    var $that = $(this);
    var answer_id = $that.attr('data-answer-id');
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: {
        answer_id: answer_id,
        action: 'tutor_quiz_builder_delete_answer'
      },
      beforeSend: function beforeSend() {
        $that.closest('.tutor-quiz-answer-wrap').remove();
      }
    });
  });
  /**
   * Delete Quiz
   * @since v.1.0.0
   */

  $(document).on('click', '.tutor-delete-quiz-btn', function (e) {
    e.preventDefault();

    if (!confirm(__('Are you sure?', 'tutor'))) {
      return;
    }

    var $that = $(this);
    var quiz_id = $that.attr('data-quiz-id');
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: {
        quiz_id: quiz_id,
        action: 'tutor_delete_quiz_by_id'
      },
      beforeSend: function beforeSend() {
        $that.closest('.course-content-item').remove();
      }
    });
  });
  $(document).on('click', '.tutor-media-upload-btn', function (e) {
    e.preventDefault();
    var $that = $(this);
    var frame;

    if (frame) {
      frame.open();
      return;
    }

    frame = wp.media({
      title: __('Select or Upload Media Of Your Chosen Persuasion', 'tutor'),
      button: {
        text: __('Use this media', 'tutor')
      },
      multiple: false
    });
    frame.on('select', function () {
      var attachment = frame.state().get('selection').first().toJSON();
      $that.html('<img src="' + attachment.url + '" alt="" />');
      $that.closest('.tutor-media-upload-wrap').find('input').val(attachment.id);
    });
    frame.open();
  });
  $(document).on('click', '.tutor-media-upload-trash', function (e) {
    e.preventDefault();
    var $that = $(this);
    $that.closest('.tutor-media-upload-wrap').find('.tutor-media-upload-btn').html('<i class="tutor-icon-image1"></i>');
    $that.closest('.tutor-media-upload-wrap').find('input').val('');
  });
  /**
   * Delay Function
   */

  var tutor_delay = function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  }();
  /**
   * Add instructor modal
   */


  $(document).on('click', '.tutor-add-instructor-btn', function (e) {
    e.preventDefault();
    var $that = $(this);
    var course_id = $('#post_ID').val();
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: {
        course_id: course_id,
        action: 'tutor_load_instructors_modal'
      },
      beforeSend: function beforeSend() {
        $that.addClass('tutor-updating-message');
      },
      success: function success(data) {
        if (data.success) {
          $('.tutor-instructors-modal-wrap .modal-container').html(data.data.output);
          $('.tutor-instructors-modal-wrap').addClass('show');
        }
      },
      complete: function complete() {
        $that.removeClass('tutor-updating-message');
      }
    });
  });
  $(document).on('change keyup', '.tutor-instructors-modal-wrap .tutor-modal-search-input', function (e) {
    e.preventDefault();
    var $that = $(this);
    var $modal = $('.tutor-modal-wrap');
    tutor_delay(function () {
      var search_terms = $that.val();
      var course_id = $('#post_ID').val();
      $.ajax({
        url: window._tutorobject.ajaxurl,
        type: 'POST',
        data: {
          course_id: course_id,
          search_terms: search_terms,
          action: 'tutor_load_instructors_modal'
        },
        beforeSend: function beforeSend() {
          $modal.addClass('loading');
        },
        success: function success(data) {
          if (data.success) {
            $('.tutor-instructors-modal-wrap .modal-container').html(data.data.output);
            $('.tutor-instructors-modal-wrap').addClass('show');
          }
        },
        complete: function complete() {
          $modal.removeClass('loading');
        }
      });
    }, 1000);
  });
  $(document).on('click', '.add_instructor_to_course_btn', function (e) {
    e.preventDefault();
    var $that = $(this);
    var $modal = $('.tutor-modal-wrap');
    var course_id = $('#post_ID').val();
    var data = $modal.find('input').serializeObject();
    data.course_id = course_id;
    data.action = 'tutor_add_instructors_to_course';
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: data,
      beforeSend: function beforeSend() {
        $that.addClass('tutor-updating-message');
      },
      success: function success(data) {
        if (data.success) {
          $('.tutor-course-available-instructors').html(data.data.output);
          $('.tutor-modal-wrap').removeClass('show');
        }
      },
      complete: function complete() {
        $that.removeClass('tutor-updating-message');
      }
    });
  });
  $(document).on('click', '.tutor-instructor-delete-btn', function (e) {
    e.preventDefault();
    var $that = $(this);
    var course_id = $('#post_ID').val();
    var instructor_id = $that.closest('.added-instructor-item').attr('data-instructor-id');
    $.ajax({
      url: window._tutorobject.ajaxurl,
      type: 'POST',
      data: {
        course_id: course_id,
        instructor_id: instructor_id,
        action: 'detach_instructor_from_course'
      },
      success: function success(data) {
        if (data.success) {
          $that.closest('.added-instructor-item').remove();
        }
      }
    });
  });
  $(document).on('click', '.settings-tabs-navs li', function (e) {
    e.preventDefault();
    var $that = $(this);
    var data_target = $that.find('a').attr('data-target');
    var url = $that.find('a').attr('href');
    $that.addClass('active').siblings('li.active').removeClass('active');
    $('.settings-tab-wrap').removeClass('active').hide();
    $(data_target).addClass('active').show();
    window.history.pushState({}, '', url);
  });
  /**
   * Re init required
   * Modal Loaded...
   */

  $(document).on('lesson_modal_loaded quiz_modal_loaded assignment_modal_loaded', function (e, obj) {
    if (jQuery().select2) {
      $('.select2_multiselect').select2({
        dropdownCssClass: 'increasezindex'
      });
    }

    load_date_picker();
  });
  /**
   * Tutor number validation
   *
   * @since v.1.6.3
   */

  $(document).on('keyup change', '.tutor-number-validation', function (e) {
    var input = $(this);
    var val = parseInt(input.val());
    var min = parseInt(input.attr('data-min'));
    var max = parseInt(input.attr('data-max'));

    if (val < min) {
      input.val(min);
    } else if (val > max) {
      input.val(max);
    }
  });
  /*
  * @since v.1.6.4
  * Quiz Attempts Instructor Feedback 
  */

  $(document).on('click', '.tutor-instructor-feedback', function (e) {
    e.preventDefault();
    var $that = $(this);
    $.ajax({
      url: window.ajaxurl || _tutorobject.ajaxurl,
      type: 'POST',
      data: {
        attempts_id: $that.data('attemptid'),
        feedback: $('.tutor-instructor-feedback-content').val(),
        action: 'tutor_instructor_feedback'
      },
      beforeSend: function beforeSend() {
        $that.addClass('tutor-updating-message');
      },
      success: function success(data) {
        if (data.success) {
          $that.closest('.course-content-item').remove();
          tutor_toast(__('Success', 'tutor'), $that.data('toast_success_message'), 'success');
        }
      },
      complete: function complete() {
        $that.removeClass('tutor-updating-message');
      }
    });
  }); //dropdown toggle

  $(document).click(function () {
    $(".tutor-dropdown").removeClass('show');
  });
  $(".tutor-dropdown").click(function (e) {
    e.stopPropagation();

    if ($('.tutor-dropdown').hasClass('show')) {
      $('.tutor-dropdown').removeClass('show');
    }

    $(this).addClass('show');
  });
  /**
   * @since v.1.8.6
   * SUbmit form through ajax
   */

  $('.tutor-form-submit-through-ajax').submit(function (e) {
    e.preventDefault();
    var $that = $(this);
    var url = $(this).attr('action') || window.location.href;
    var type = $(this).attr('method') || 'GET';
    var data = $(this).serializeObject();
    $that.find('button').addClass('tutor-updating-message');
    $.ajax({
      url: url,
      type: type,
      data: data,
      success: function success() {
        tutor_toast(__('Success', 'tutor'), $that.data('toast_success_message'), 'success');
      },
      complete: function complete() {
        $that.find('button').removeClass('tutor-updating-message');
      }
    });
  });
  /*
  * @since v.1.7.9
  * Send wp nonce to every ajax request
  */

  $.ajaxSetup({
    data: tutor_get_nonce_data()
  });
});

jQuery.fn.serializeObject = function () {
  var values = {};
  var array = this.serializeArray();
  jQuery.each(array, function () {
    if (values[this.name]) {
      if (!values[this.name].push) {
        values[this.name] = [values[this.name]];
      }

      values[this.name].push(this.value || '');
    } else {
      values[this.name] = this.value || '';
    }
  });
  return values;
};

window.tutor_toast = function (title, description, type) {
  var tutor_ob = window._tutorobject || {};
  var asset = (tutor_ob.tutor_url || '') + 'assets/images/';

  if (!jQuery('.tutor-toast-parent').length) {
    jQuery('body').append('<div class="tutor-toast-parent"></div>');
  }

  var icons = {
    success: asset + 'icon-check.svg',
    error: asset + 'icon-cross.svg'
  };
  var content = jQuery('\
        <div>\
            <div>\
                <img src="' + icons[type] + '"/>\
            </div>\
            <div>\
                <div>\
                    <b>' + title + '</b>\
                    <span>' + description + '</span>\
                </div>\
            </div>\
            <div>\
                <i class="tutor-toast-close tutor-icon-line-cross"></i>\
            </div>\
        </div>');
  content.find('.tutor-toast-close').click(function () {
    content.remove();
  });
  jQuery('.tutor-toast-parent').append(content);
  setTimeout(function () {
    if (content) {
      content.fadeOut('fast', function () {
        jQuery(this).remove();
      });
    }
  }, 5000);
};

/***/ }),

/***/ "./assets/react/lib/utilities.js":
/*!***************************************!*\
  !*** ./assets/react/lib/utilities.js ***!
  \***************************************/
/***/ (() => {

window.jQuery(document).ready(function ($) {
  var __ = wp.i18n.__; // Copy text

  $(document).on('click', '.tutor-copy-text', function (e) {
    // Prevent default action
    e.stopImmediatePropagation();
    e.preventDefault(); // Get the text

    var text = $(this).data('text'); // Create input to place texts in

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    tutor_toast(__('Copied!', 'tutor'), text, 'success');
  }); // Ajax action 

  $(document).on('click', '.tutor-list-ajax-action', function () {
    var url = $(this).data('url');
    var type = $(this).data('type') || 'GET';
    var prompt = $(this).data('prompt');
    var del = $(this).data('delete_id');
    console.log(prompt);

    if (prompt && !window.confirm(prompt)) {
      return;
    }

    $.ajax({
      url: url,
      type: type,
      success: function success(data) {
        if (data.success) {
          if (del) {
            $('#' + del).fadeOut(function () {
              $(this).remove();
            });
          }

          return;
        }

        var _ref = data.data || {},
            _ref$message = _ref.message,
            message = _ref$message === void 0 ? __('Something Went Wrong!', 'tutor') : _ref$message;

        tutor_toast('Error!', message, 'error');
      },
      error: function error() {
        tutor_toast('Error!', __('Something Went Wrong!', 'tutor'), 'error');
      },
      complete: function complete() {}
    });
  });
});

/***/ }),

/***/ "./v2-library/_src/js/main.js":
/*!************************************!*\
  !*** ./v2-library/_src/js/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tutorModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorModal */ "./v2-library/_src/js/tutorModal.js");
/* harmony import */ var _tutorModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tutorModal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tutorThumbnailPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorThumbnailPreview */ "./v2-library/_src/js/tutorThumbnailPreview.js");
/* harmony import */ var _tutorThumbnailPreview__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tutorThumbnailPreview__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tutorPopupMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorPopupMenu */ "./v2-library/_src/js/tutorPopupMenu.js");
/* harmony import */ var _tutorPopupMenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tutorPopupMenu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tutorOffcanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorOffcanvas */ "./v2-library/_src/js/tutorOffcanvas.js");
/* harmony import */ var _tutorOffcanvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tutorOffcanvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tutorNotificationTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorNotificationTab */ "./v2-library/_src/js/tutorNotificationTab.js");
/* harmony import */ var _tutorNotificationTab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tutorNotificationTab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tutorDefaultTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorDefaultTab */ "./v2-library/_src/js/tutorDefaultTab.js");
/* harmony import */ var _tutorDefaultTab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tutorDefaultTab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tutorPasswordStrengthChecker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorPasswordStrengthChecker */ "./v2-library/_src/js/tutorPasswordStrengthChecker.js");
/* harmony import */ var _tutorPasswordStrengthChecker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tutorPasswordStrengthChecker__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./v2-library/_src/js/tutorDefaultTab.js":
/*!***********************************************!*\
  !*** ./v2-library/_src/js/tutorDefaultTab.js ***!
  \***********************************************/
/***/ (() => {

/**
 * Tutor Default Tab
 */
(function tutorDefaultTab() {
  document.addEventListener('click', function (e) {
    var attr = 'data-tutor-tab-target';
    var activeItems = document.querySelectorAll('.tab-header-item.is-active, .tab-body-item.is-active');

    if (e.target.hasAttribute(attr)) {
      e.preventDefault();
      var id = e.target.hasAttribute(attr) ? e.target.getAttribute(attr) : e.target.closest("[".concat(attr, "]")).getAttribute(attr);
      var tabBodyItem = document.getElementById(id);

      if (e.target.hasAttribute(attr) && tabBodyItem) {
        activeItems.forEach(function (m) {
          m.classList.remove('is-active');
        });
        e.target.classList.add('is-active');
        tabBodyItem.classList.add('is-active');
      }
    }
  });
})();

/***/ }),

/***/ "./v2-library/_src/js/tutorModal.js":
/*!******************************************!*\
  !*** ./v2-library/_src/js/tutorModal.js ***!
  \******************************************/
/***/ (() => {

(function () {
  'use strict'; // modal

  tutorModal();
})();

function tutorModal() {
  document.addEventListener('click', function (e) {
    var attr = 'data-tutor-modal-target';
    var closeAttr = 'data-tutor-modal-close';
    var overlay = 'tutor-modal-overlay';

    if (e.target.hasAttribute(attr) || e.target.closest("[".concat(attr, "]"))) {
      e.preventDefault();
      var id = e.target.hasAttribute(attr) ? e.target.getAttribute(attr) : e.target.closest("[".concat(attr, "]")).getAttribute(attr);
      var modal = document.getElementById(id);
      console.log(modal);

      if (modal) {
        document.querySelectorAll('.tutor-modal.tutor-is-active').forEach(function (item) {
          return item.classList.remove('tutor-is-active');
        });
        modal.classList.add('tutor-is-active');
      }
    }

    if (e.target.hasAttribute(closeAttr) || e.target.classList.contains(overlay) || e.target.closest("[".concat(closeAttr, "]"))) {
      e.preventDefault();

      var _modal = document.querySelectorAll('.tutor-modal.tutor-is-active');

      _modal.forEach(function (m) {
        m.classList.remove('tutor-is-active');
      });
    }
  }); // open
  // const modalButton = document.querySelectorAll("[data-tutor-modal-target]");
  // modalButton.forEach(b => {
  //     const id = b.getAttribute("data-tutor-modal-target");
  //     const modal = document.getElementById(id);
  //     if (modal) {
  //         b.addEventListener("click", e => {
  //             e.preventDefault();
  //             modal.classList.add("tutor-is-active");
  //         })
  //     }
  // })
  // close
  // const close = document.querySelectorAll("[data-tutor-modal-close], .tutor-modal-overlay");
  // close.forEach(c => {
  //     c.addEventListener("click", e => {
  //         e.preventDefault();
  //         const modal = document.querySelectorAll(".tutor-modal.tutor-is-active");
  //         modal.forEach(m => {
  //             m.classList.remove("tutor-is-active");
  //         })
  //     })
  // })
}

/***/ }),

/***/ "./v2-library/_src/js/tutorNotificationTab.js":
/*!****************************************************!*\
  !*** ./v2-library/_src/js/tutorNotificationTab.js ***!
  \****************************************************/
/***/ (() => {

/**
 * Tutor Notification Tab
 */
(function tutorNotificationTab() {
  document.addEventListener('click', function (e) {
    var attr = 'data-tutor-notification-tab-target';
    var activeItems = document.querySelectorAll('.tab-header-item.is-active, .tab-body-item.is-active');

    if (e.target.hasAttribute(attr)) {
      e.preventDefault();
      var id = e.target.hasAttribute(attr) ? e.target.getAttribute(attr) : e.target.closest("[".concat(attr, "]")).getAttribute(attr);
      var tabBodyItem = document.getElementById(id);

      if (e.target.hasAttribute(attr) && tabBodyItem) {
        activeItems.forEach(function (m) {
          m.classList.remove('is-active');
        });
        e.target.classList.add('is-active');
        tabBodyItem.classList.add('is-active');
      }
    }
  });
})();

/***/ }),

/***/ "./v2-library/_src/js/tutorOffcanvas.js":
/*!**********************************************!*\
  !*** ./v2-library/_src/js/tutorOffcanvas.js ***!
  \**********************************************/
/***/ (() => {

/**
 * Tutor Off Canvas
 */
(function tutorOffCanvas() {
  document.addEventListener('click', function (e) {
    var attr = 'data-tutor-offcanvas-target';
    var closeAttr = 'data-tutor-offcanvas-close';
    var backdrop = 'tutor-offcanvas-backdrop'; // Opening Offcanvas

    if (e.target.hasAttribute(attr)) {
      e.preventDefault();
      var id = e.target.hasAttribute(attr) ? e.target.getAttribute(attr) : e.target.closest("[".concat(attr, "]")).getAttribute(attr);
      var offcanvas = document.getElementById(id);

      if (offcanvas) {
        offcanvas.classList.add('is-active');
      }
    } // Closing Offcanvas


    if (e.target.hasAttribute(closeAttr) || e.target.classList.contains(backdrop) || e.target.closest("[".concat(closeAttr, "]"))) {
      e.preventDefault();
      var activeOffcanvas = document.querySelectorAll('.tutor-offcanvas.is-active');
      activeOffcanvas.forEach(function (m) {
        m.classList.remove('is-active');
      });
    }
  }); // Closing Offcanvas on esc key

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var activeOffcanvas = document.querySelectorAll('.tutor-offcanvas.is-active');
      activeOffcanvas.forEach(function (m) {
        m.classList.remove('is-active');
      });
    }
  });
})();

/***/ }),

/***/ "./v2-library/_src/js/tutorPasswordStrengthChecker.js":
/*!************************************************************!*\
  !*** ./v2-library/_src/js/tutorPasswordStrengthChecker.js ***!
  \************************************************************/
/***/ (() => {

/**
 * Tutor Password Strength Checker
 */
(function tutorPasswordStrengthChecker() {
  var passwordCheckerInput = document.querySelector('.tutor-password-field input.password-checker');
  var indicator = document.querySelector('.tutor-passowrd-strength-hint .indicator');
  var weak = document.querySelector('.tutor-passowrd-strength-hint .weak');
  var medium = document.querySelector('.tutor-passowrd-strength-hint .medium');
  var strong = document.querySelector('.tutor-passowrd-strength-hint .strong');
  var text = document.querySelector('.tutor-passowrd-strength-hint .text');
  var showBtn = document.querySelector('.tutor-password-field .show-hide-btn');
  var regExpWeak = /[a-z]/;
  var regExpMedium = /\d+/;
  var regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

  if (passwordCheckerInput) {
    passwordCheckerInput.addEventListener('input', function (e) {
      var input = e.target;

      if (input.value != '') {
        indicator.style.display = 'flex';
        if (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) no = 1;
        if (input.value.length >= 6 && (input.value.match(regExpWeak) && input.value.match(regExpMedium) || input.value.match(regExpMedium) && input.value.match(regExpStrong) || input.value.match(regExpWeak) && input.value.match(regExpStrong))) no = 2;
        if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) no = 3;

        if (no == 1) {
          weak.classList.add('active');
          text.style.display = 'block';
          text.textContent = 'week';
          text.classList.add('weak');
        }

        if (no == 2) {
          medium.classList.add('active');
          text.textContent = 'medium';
          text.classList.add('medium');
        } else {
          medium.classList.remove('active');
          text.classList.remove('medium');
        }

        if (no == 3) {
          weak.classList.add('active');
          medium.classList.add('active');
          strong.classList.add('active');
          text.textContent = 'strong';
          text.classList.add('strong');
        } else {
          strong.classList.remove('active');
          text.classList.remove('strong');
        }

        showBtn.style.display = 'block';

        showBtn.onclick = function () {
          if (input.type == 'password') {
            input.type = 'text';
            showBtn.style.color = '#23ad5c';
            showBtn.classList.add('hide-btn');
          } else {
            input.type = 'password';
            showBtn.style.color = '#000';
            showBtn.classList.remove('hide-btn');
          }
        };
      } else {
        indicator.style.display = 'none';
        text.style.display = 'none';
        showBtn.style.display = 'none';
      }
    });
  }
})();

/***/ }),

/***/ "./v2-library/_src/js/tutorPopupMenu.js":
/*!**********************************************!*\
  !*** ./v2-library/_src/js/tutorPopupMenu.js ***!
  \**********************************************/
/***/ (() => {

(function tutorPopupMenu() {
  /**
   * Popup Menu Toggle .tutor-popup-opener
   */

  /*
  const popupToggleBtns = document.querySelectorAll('.tutor-popup-opener .popup-btn');
  const popupMenus = document.querySelectorAll('.tutor-popup-opener .popup-menu');
  	 if (popupToggleBtns && popupMenus) {
  	popupToggleBtns.forEach((btn) => {
  		btn.addEventListener('click', (e) => {
  			const popupClosest = e.target.closest('.tutor-popup-opener').querySelector('.popup-menu');
  			popupClosest.classList.toggle('visible');
  				popupMenus.forEach((popupMenu) => {
  				if (popupMenu !== popupClosest) {
  					popupMenu.classList.remove('visible');
  				}
  			});
  		});
  	});
  		document.addEventListener('click', (e) => {
  		if (!e.target.matches('.tutor-popup-opener .popup-btn')) {
  			popupMenus.forEach((popupMenu) => {
  				if (popupMenu.classList.contains('visible')) {
  					popupMenu.classList.remove('visible');
  				}
  			});
  		}
  	});
  } */
  document.addEventListener('click', function (e) {
    var attr = 'data-tutor-popup-target';

    if (e.target.hasAttribute(attr)) {
      e.preventDefault();
      var id = e.target.hasAttribute(attr) ? e.target.getAttribute(attr) : e.target.closest("[".concat(attr, "]")).getAttribute(attr);
      var popupMenu = document.getElementById(id);

      if (popupMenu.classList.contains('visible')) {
        popupMenu.classList.remove('visible');
      } else {
        document.querySelectorAll('.tutor-popup-opener .popup-menu').forEach(function (popupMenu) {
          popupMenu.classList.remove('visible');
        });
        popupMenu.classList.add('visible');
      }
    } else {
      document.querySelectorAll('.tutor-popup-opener .popup-menu').forEach(function (popupMenu) {
        popupMenu.classList.remove('visible');
      });
    }
  });
})();

/***/ }),

/***/ "./v2-library/_src/js/tutorThumbnailPreview.js":
/*!*****************************************************!*\
  !*** ./v2-library/_src/js/tutorThumbnailPreview.js ***!
  \*****************************************************/
/***/ (() => {

(function thumbnailUploadPreview() {
  /**
   * Image Preview : Logo and Signature Upload
   * Selector -> .tutor-option-field-input.image-previewer
   */
  var imgPreviewers = document.querySelectorAll('.tutor-thumbnail-uploader');
  var imgPreviews = document.querySelectorAll('.tutor-thumbnail-uploader img');
  var imgPrevInputs = document.querySelectorAll('.tutor-thumbnail-uploader input[type=file]');
  var imgPrevDelBtns = document.querySelectorAll('.tutor-thumbnail-uploader .delete-btn');

  if (imgPrevInputs && imgPrevDelBtns) {
    // Checking Img Src when document loads
    document.addEventListener('DOMContentLoaded', function () {
      imgPreviewers.forEach(function (previewer) {
        imgPreviews.forEach(function (img) {
          if (img.getAttribute('src')) {
            img.closest('.image-previewer').classList.add('is-selected');
          } else {
            previewer.classList.remove('is-selected');
          }

          console.log(img);
        });
      });
    }); // Updating Image Preview

    imgPrevInputs.forEach(function (input) {
      input.addEventListener('change', function (e) {
        var file = this.files[0];
        var parentEl = input.closest('.image-previewer');
        var targetImg = parentEl.querySelector('img');
        var prevLoader = parentEl.querySelector('.preview-loading');

        if (file) {
          prevLoader.classList.add('is-loading');
          getImageAsDataURL(file, targetImg);
          parentEl.classList.add('is-selected');
          setTimeout(function () {
            prevLoader.classList.remove('is-loading');
          }, 200);
        }
      });
    }); // Deleting Image Preview

    imgPrevDelBtns.forEach(function (delBtn) {
      delBtn.addEventListener('click', function (e) {
        var parentEl = this.closest('.image-previewer');
        var targetImg = parentEl.querySelector('img');
        targetImg.setAttribute('src', '');
        parentEl.classList.remove('is-selected');
      });
    });
  } // Get Image file as Data URL


  var getImageAsDataURL = function getImageAsDataURL(file, imgSrc) {
    var reader = new FileReader();

    reader.onload = function () {
      imgSrc.setAttribute('src', this.result);
    };

    reader.readAsDataURL(file);
  };
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************!*\
  !*** ./assets/react/admin-dashboard/tutor-setup.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/common */ "./assets/react/lib/common.js");


jQuery.fn.serializeObject = function () {
  var values = {};
  var array = this.serializeArray();
  jQuery.each(array, function () {
    if (values[this.name]) {
      if (!values[this.name].push) {
        values[this.name] = [values[this.name]];
      }

      values[this.name].push(this.value || '');
    } else {
      values[this.name] = this.value || '';
    }
  });
  return values;
};

jQuery(document).ready(function ($) {
  "use strict";

  var url = window.location.href;

  if (url.indexOf('#') > 0) {
    $(".tutor-wizard-container > div").removeClass("active");
    $(".tutor-wizard-container > div.tutor-setup-wizard-settings").addClass("active");
    var split_data = url.split("#");

    if (split_data[1]) {
      var _length = $(".tutor-setup-title li." + split_data[1]).index();

      $(".tutor-setup-title li").removeClass("current");
      $(".tutor-setup-content li").removeClass("active");

      for (var index = 0; index <= _length; index++) {
        $(".tutor-setup-title li").eq(index).addClass('active');

        if (_length == index) {
          $(".tutor-setup-title li").eq(index).addClass("current");
          $(".tutor-setup-content li").eq(index).addClass("active");
        }
      }
    }

    var enable = $("input[name='enable_course_marketplace'").val();
    showHide(enable ? enable : 0);
  }

  $(".tutor-setup-title li").on("click", function (e) {
    e.preventDefault();

    var _length = $(this).closest("li").index();

    $(".tutor-setup-title li").removeClass("active current");
    $(".tutor-setup-title li").eq(_length).addClass("active current");
    $(".tutor-setup-content li").removeClass("active");
    $(".tutor-setup-content li").eq(_length).addClass("active");
    window.location.hash = $("ul.tutor-setup-title li").eq(_length).data("url");

    for (var _index2 = 0; _index2 <= _length; _index2++) {
      $(".tutor-setup-title li").eq(_index2).addClass('active');
    }
  });
  /* ---------------------
  * Wizard Skip
  * ---------------------- */

  $(".tutor-boarding-next, .tutor-boarding-skip").on("click", function (e) {
    e.preventDefault();
    $(".tutor-setup-wizard-boarding").removeClass("active");
    $(".tutor-setup-wizard-type").addClass("active");
  });
  $(".tutor-type-next, .tutor-type-skip").on("click", function (e) {
    e.preventDefault();
    $(".tutor-setup-wizard-type").removeClass("active");
    $(".tutor-setup-wizard-settings").addClass("active");
    $('.tutor-setup-title li').eq(0).addClass('active');
    window.location.hash = "general";
    showHide($("input[name='enable_course_marketplace_setup']:checked").val());
  });
  /* ---------------------
  * Marketplace Type
  * ---------------------- */

  $("input[type=radio][name=enable_course_marketplace_setup]").change(function () {
    if (this.value == "0") {
      $("input[name=enable_course_marketplace]").val("");
      $("input[name=enable_tutor_earning]").val("");
    } else if (this.value == "1") {
      $("input[name=enable_course_marketplace]").val("1");
      $("input[name=enable_tutor_earning]").val("1");
    }
  });
  /* ---------------------
  * Wizard Action
  * ---------------------- */

  $(".tutor-setup-previous").on("click", function (e) {
    e.preventDefault();

    var _index = $(this).closest("li").index();

    $("ul.tutor-setup-title li").eq(_index).removeClass("active");

    if (_index > 0 && _index == $('.tutor-setup-title li.instructor').index() + 1 && $('.tutor-setup-title li.instructor').hasClass('hide-this')) {
      _index = _index - 1;
    }

    if (_index > 0) {
      $("ul.tutor-setup-title li").eq(_index - 1).addClass("active");
      $("ul.tutor-setup-content li").removeClass("active").eq(_index - 1).addClass("active");
      $("ul.tutor-setup-title li").removeClass("current").eq(_index - 1).addClass("current");
      window.location.hash = $("ul.tutor-setup-title li").eq(_index - 1).data('url');
    } else {
      $('.tutor-setup-wizard-settings').removeClass('active');
      $('.tutor-setup-wizard-type').addClass('active');
      window.location.hash = '';
    }

    setpSet();
  });
  $('.tutor-setup-type-previous').on("click", function (e) {
    $('.tutor-setup-wizard-type').removeClass('active');
    $('.tutor-setup-wizard-boarding').addClass('active');
  });
  $(".tutor-setup-skip, .tutor-setup-next").on("click", function (e) {
    e.preventDefault();

    var _index = $(this).closest("li").index() + 1;

    if (_index == $('.tutor-setup-title li.instructor').index() && $('.tutor-setup-title li.instructor').hasClass('hide-this')) {
      _index = _index + 1;
    }

    $("ul.tutor-setup-title li").eq(_index).addClass("active");
    $("ul.tutor-setup-content li").removeClass("active").eq(_index).addClass("active");
    $("ul.tutor-setup-title li").removeClass("current").eq(_index).addClass("current");
    window.location.hash = $("ul.tutor-setup-title li").eq(_index).data("url");
    setpSet();
  });
  /* ---------------------
  * Wizard Skip
  * ---------------------- */

  $(".tutor-boarding-next, .tutor-boarding-skip").on("click", function (e) {
    e.preventDefault();
    $(".tutor-setup-wizard-boarding").removeClass("active");
    $(".tutor-setup-wizard-type").addClass("active");
  });
  /* ---------------------
  * Wizard Slick Slider
  * ---------------------- */

  $(".tutor-boarding").slick({
    speed: 1000,
    centerMode: true,
    centerPadding: "19.5%",
    slidesToShow: 1,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1
      }
    }]
  });
  /* ---------------------
  * Form Submit and Redirect after Finished
  * ---------------------- */

  $(".tutor-redirect").on("click", function (e) {
    var that = $(this);
    e.preventDefault();
    var formData = $("#tutor-setup-form").serializeObject();
    $.ajax({
      url: _tutorobject.ajaxurl,
      type: "POST",
      data: formData,
      success: function success(data) {
        if (data.success) {
          window.location = that.data("url");
        }
      }
    });
  });
  /* ---------------------
  * Reset Section
  * ---------------------- */

  $(".tutor-reset-section").on("click", function (e) {
    $(this).closest("li").find("input").val(function () {
      switch (this.type) {
        case "text":
          return this.defaultValue;
          break;

        case "checkbox":
        case "radio":
          this.checked = this.defaultChecked;
          break;

        case "range":
          var rangeval = $(this).closest(".limit-slider");

          if (rangeval.find(".range-input").hasClass("double-range-slider")) {
            rangeval.find(".range-value-1").html(this.defaultValue + "%");
            $(".range-value-data-1").val(this.defaultValue);
            rangeval.find(".range-value-2").html(100 - this.defaultValue + "%");
            $(".range-value-data-2").val(100 - this.defaultValue);
          } else {
            rangeval.find(".range-value").html(this.defaultValue);
            return this.defaultValue;
          }

          break;

        case "hidden":
          return this.value;
          break;
      }
    });
  });
  /* ---------------------
  * Wizard Tooltip
  * ---------------------- */

  $(".tooltip-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });
  /* ---------------------
  * on/of emphasizing after input check click
  * ---------------------- */

  $(".input-switchbox").each(function () {
    inputCheckEmphasizing($(this));
  });

  function inputCheckEmphasizing(th) {
    var checkboxRoot = th.parent().parent();

    if (th.prop("checked")) {
      checkboxRoot.find(".label-on").addClass("active");
      checkboxRoot.find(".label-off").removeClass("active");
    } else {
      checkboxRoot.find(".label-on").removeClass("active");
      checkboxRoot.find(".label-off").addClass("active");
    }
  }

  $(".input-switchbox").click(function () {
    inputCheckEmphasizing($(this));
  });
  /* ---------------------
  * Select Option
  * ---------------------- */

  $(".selected").on("click", function () {
    $(".options-container").toggleClass("active");
  });
  $(".option").each(function () {
    $(this).on("click", function () {
      $(".selected").html($(this).find("label").html());
      $(".options-container").removeClass("active");
    });
  });
  /* ---------------------
  * Time Limit sliders
  * ---------------------- */

  $(".range-input").on("change mousemove", function (e) {
    var rangeInput = $(this).val();
    var rangeValue = $(this).parent().parent().find(".range-value");
    rangeValue.text(rangeInput);
  });
  $(".double-range-slider").on("change mousemove", function () {
    var selector = $(this).closest(".settings");
    selector.find(".range-value-1").text($(this).val() + "%");
    selector.find('input[name="earning_instructor_commission"]').val($(this).val());
    selector.find(".range-value-2").text(100 - $(this).val() + "%");
    selector.find('input[name="earning_admin_commission"]').val(100 - $(this).val());
  });
  $("#attempts-allowed-1").on("click", function (e) {
    if ($("#attempts-allowed-numer").prop("disabled", true)) {
      $(this).parent().parent().parent().addClass("active");
      $("#attempts-allowed-numer").prop("disabled", false);
    }
  });
  $("#attempts-allowed-2").on("click", function (e) {
    if ($("#attempts-allowed-2").is(":checked")) {
      $(this).parent().parent().parent().removeClass("active");
      $("#attempts-allowed-numer").prop("disabled", true);
    }
  });
  $('.wizard-type-item').on('click', function (e) {
    showHide($(this).find('input').val());
  });

  function showHide(val) {
    if (val == 1) {
      $('.tutor-show-hide').addClass('active');
      $('.tutor-setup-title li.instructor').removeClass('hide-this');
      $('.tutor-setup-content li').eq($('.tutor-setup-title li.instructor')).removeClass('hide-this');
    } else {
      $('.tutor-show-hide').removeClass('active');
      $('.tutor-setup-title li.instructor').addClass('hide-this');
      $('.tutor-setup-content li').eq($('.tutor-setup-title li.instructor')).addClass('hide-this');
    }
  }

  setpSet();

  function setpSet() {
    if ($('.tutor-setup-title li.instructor').hasClass('hide-this')) {
      $('.tutor-steps').html(5);

      var _index = $('.tutor-setup-title li.current').index();

      if (_index > 2) {
        $('.tutor-setup-content li.active .tutor-steps-current').html(_index);
      }
    } else {
      $('.tutor-steps').html(6);
      $(".tutor-setup-content li").each(function () {
        $(this).find('.tutor-steps-current').html($(this).index() + 1);
      });
    }
  }
  /* ---------------------
  * Attempt Allowed
  * ---------------------- */


  $("input[name='attempts-allowed']").on('change', function (e) {
    var _val = $(this).filter(':checked').val();

    if (_val == 'unlimited') {
      $("input[name='quiz_attempts_allowed']").val(0);
    } else {
      $("input[name='quiz_attempts_allowed']").val($("input[name='attempts-allowed-number").val());
    }
  });
  $("input[name='attempts-allowed-number']").on('change', function (e) {
    $("input[name='quiz_attempts_allowed']").val($(this).val());
  });
  $("input[name='attempts-allowed-number']").on('focus', function (e) {
    $("input[name='attempts-allowed'][value='single']").attr('checked', true);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=tutor-setup.js.map