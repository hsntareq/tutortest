(()=>{var o={249:()=>{!function(){"use strict";document.addEventListener("click",t=>{var e="data-tutor-modal-target",o="data-tutor-modal-close";if(t.target.hasAttribute(e)||t.target.closest(`[${e}]`)){t.preventDefault();e=(t.target.hasAttribute(e)?t.target:t.target.closest(`[${e}]`)).getAttribute(e);const a=document.getElementById(e);a&&a.classList.add("tutor-is-active")}if(t.target.hasAttribute(o)||t.target.classList.contains("tutor-modal-overlay")||t.target.closest(`[${o}]`)){t.preventDefault();const n=document.querySelectorAll(".tutor-modal.tutor-is-active");n.forEach(t=>{t.classList.remove("tutor-is-active")})}})}()}},a={};function n(t){var e=a[t];if(void 0!==e)return e.exports;e=a[t]={exports:{}};return o[t](e,e.exports,n),e.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);(()=>{"use strict";n(249);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a,n,i=[],r=!0,u=!1;try{for(o=o.call(t);!(r=(a=o.next()).done)&&(i.push(a.value),!e||i.length!==e);r=!0);}catch(t){u=!0,n=t}finally{try{r||null==o.return||o.return()}finally{if(u)throw n}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}function y(t){var e=window._tutorobject||{},o=e.nonce_key||"",e=e[o]||"";return t?{key:o,value:e}:(t=e,(e=o)in(o={})?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o)}function z(t,e,o){var a=((window._tutorobject||{}).tutor_url||"")+"assets/images/";jQuery(".tutor-toast-parent").length||jQuery("body").append('<div class="tutor-toast-parent"></div>');var n=jQuery('        <div>            <div>                <img src="'+{success:a+"icon-check.svg",error:a+"icon-cross.svg"}[o]+'"/>            </div>            <div>                <div>                    <b>'+t+"</b>                    <span>"+e+'</span>                </div>            </div>            <div>                <i class="tutor-toast-close tutor-icon-line-cross"></i>            </div>        </div>');n.find(".tutor-toast-close").click(function(){n.remove()}),jQuery(".tutor-toast-parent").append(n),setTimeout(function(){n&&n.fadeOut("fast",function(){jQuery(this).remove()})},5e3)}function j(){function t(t){t.classList.contains("disabled")||t.classList.add("disabled")}function e(t){t.classList.contains("disabled")&&t.classList.remove("disabled")}var o=document.querySelector(".tutor_select_value_holder").value,a=document.getElementById("tutor_quiz_question_answers"),n=document.getElementById("tutor_quiz_question_answer_form"),i=document.querySelector(".add_question_answers_option");("open_ended"===o||"short_answer"===o||("true_false"===o||"fill_in_the_blank"===o)&&(n.hasChildNodes()||a.hasChildNodes())?t:e)(i)}window.tutor_popup=function(r,o,a){var u,s=this;return this.popup_wrapper=function(t){var e=""===o?"":'<img class="tutor-pop-icon" src="'+window._tutorobject.tutor_url+"assets/images/"+o+'.svg"/>';return"<"+t+' class="tutor-component-popup-container">            <div class="tutor-component-popup-'+a+'">                <div class="tutor-component-content-container">'+e+'</div>                <div class="tutor-component-button-container"></div>            </div>        </'+t+">"},this.popup=function(o){var t=o.title?"<h3>"+o.title+"</h3>":"",e=o.description?"<p>"+o.description+"</p>":"",a=Object.keys(o.buttons||{}).map(function(t){var e=o.buttons[t],t=e.id?"tutor-popup-"+e.id:"";return r('<button id="'+t+'" class="tutor-button tutor-button-'+e.class+'">'+e.title+"</button>").click(e.callback)}),n=(u=r(s.popup_wrapper(o.wrapper_tag||"div"))).find(".tutor-component-content-container");n.append(t),o.after_title&&n.append(o.after_title),n.append(e),o.after_description&&n.append(o.after_description),u.click(function(){r(this).remove()}).children().click(function(t){t.stopPropagation()});for(var i=0;i<a.length;i++)u.find(".tutor-component-button-container").append(a[i]);return r("body").append(u),u},{popup:this.popup}},window.tutorDotLoader=function(t){return'    \n    <div class="tutor-dot-loader '.concat(t||"",'">\n        <span class="dot dot-1"></span>\n        <span class="dot dot-2"></span>\n        <span class="dot dot-3"></span>\n        <span class="dot dot-4"></span>\n    </div>')},window.tutor_date_picker=function(){var t;jQuery.datepicker&&(t=_tutorobject.wp_date_format||"yy-mm-dd",$(".tutor_date_picker").datepicker({dateFormat:t}))},jQuery(document).ready(function(l){var t=wp.i18n,n=t.__;t._x,t._n,t._nx;function o(){var t;jQuery.datepicker&&(t=_tutorobject.wp_date_format||"yy-mm-dd",l(".tutor_date_picker").datepicker({dateFormat:t}))}function u(){l(".tutor-field-slider").each(function(){var t=l(this),o=t.closest(".tutor-field-type-slider").find('input[type="hidden"]'),a=t.closest(".tutor-field-type-slider").find(".tutor-field-type-slider-value"),e=parseFloat(t.closest(".tutor-field-type-slider").attr("data-min")),n=parseFloat(t.closest(".tutor-field-type-slider").attr("data-max"));t.slider({range:"max",min:e,max:n,value:o.val(),slide:function(t,e){a.text(e.value),o.val(e.value)}})})}function e(t){var e=t.element;return l('<span><i class="tutor-icon-'+l(e).data("icon")+'"></i> '+t.text+"</span>")}function i(){jQuery().sortable&&(l(".course-contents").sortable({handle:".course-move-handle",start:function(t,e){e.placeholder.css("visibility","visible")},stop:function(t,e){a()}}),l(".tutor-lessons:not(.drop-lessons)").sortable({connectWith:".tutor-lessons",items:"div.course-content-item",start:function(t,e){e.placeholder.css("visibility","visible")},stop:function(t,e){a()}}))}function a(){var i={};l(".tutor-topics-wrap").each(function(t,e){var o=l(this),a=parseInt(o.attr("id").match(/\d+/)[0],10),n={};o.find(".course-content-item").each(function(t,e){var o=l(this),o=parseInt(o.attr("id").match(/\d+/)[0],10);n[t]=o}),i[t]={topic_id:a,lesson_ids:n}}),l("#tutor_topics_lessons_sorting").val(JSON.stringify(i))}function r(){return{init:function(){l(document).on("click",".tutor-select .tutor-select-option",function(t){t.preventDefault();var e=l(this);"true"!==e.attr("data-is-pro")?(t=e.html().trim(),e.closest(".tutor-select").find(".select-header .lead-option").html(t),e.closest(".tutor-select").find(".select-header input.tutor_select_value_holder").val(e.attr("data-value")).trigger("change"),e.closest(".tutor-select-options").hide(),j()):alert("Tutor Pro version required")}),l(document).on("click",".tutor-select .select-header",function(t){t.preventDefault(),l(this).closest(".tutor-select").find(".tutor-select-options").slideToggle()}),this.setValue(),this.hideOnOutSideClick()},setValue:function(){l(".tutor-select").each(function(){var t=l(this).find(".tutor-select-option");t.length&&t.each(function(){var t,e=l(this);"selected"===e.attr("data-selected")&&(t=e.html().trim(),e.closest(".tutor-select").find(".select-header .lead-option").html(t),e.closest(".tutor-select").find(".select-header input.tutor_select_value_holder").val(e.attr("data-value")))})})},hideOnOutSideClick:function(){l(document).mouseup(function(t){var e=l(".tutor-select-options");l(t.target).closest(".select-header").length||e.is(t.target)||0!==e.has(t.target).length||e.hide()})},reInit:function(){this.setValue()}}}o(),u(),jQuery().select2&&l(".videosource_select2").select2({width:"100%",templateSelection:e,templateResult:e,allowHtml:!0}),l(document).on("change",".tutor_lesson_video_source",function(t){var e=l(this),o=l(this).val();o?l(".video-metabox-source-input-wrap").show():l(".video-metabox-source-input-wrap").hide(),e.closest(".tutor-option-field").find(".video-metabox-source-item").hide(),e.closest(".tutor-option-field").find(".video_source_wrap_"+o).show()}),l(document).on("click",".tutor-course-thumbnail-upload-btn",function(t){t.preventDefault();var e,o=l(this);e||(e=wp.media({title:n("Select or Upload Media Of Your Chosen Persuasion","tutor"),button:{text:n("Use this media","tutor")},multiple:!1})).on("select",function(){var t=e.state().get("selection").first().toJSON();o.closest(".tutor-thumbnail-wrap").find(".thumbnail-img").attr("src",t.url),o.closest(".tutor-thumbnail-wrap").find("input").val(t.id),l(".tutor-course-thumbnail-delete-btn").show()}),e.open()}),l(document).on("click",".tutor-course-thumbnail-delete-btn",function(t){t.preventDefault();var e=l(this),t=e.closest(".tutor-thumbnail-wrap").find(".thumbnail-img").attr("data-placeholder-src");e.closest(".tutor-thumbnail-wrap").find(".thumbnail-img").attr("src",t),e.closest(".tutor-thumbnail-wrap").find("input").val(""),l(".tutor-course-thumbnail-delete-btn").hide()}),l(document).on("click",".create_new_topic_btn",function(t){t.preventDefault(),l(".tutor-metabox-add-topics").slideToggle()}),l(document).on("click","#tutor-add-topic-btn",function(t){t.preventDefault();var e=l(this),t=e.closest(".tutor-metabox-add-topics").find("input, textarea").serializeObject();t.action="tutor_add_course_topic",l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:t,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){t.success&&(l("#tutor-course-content-wrap").html(t.data.course_contents),e.closest(".tutor-metabox-add-topics").find('input[type!="hidden"], textarea').each(function(){l(this).val("")}),e.closest(".tutor-metabox-add-topics").slideUp(),i())},complete:function(){e.removeClass("tutor-updating-message")}})}),l(".tutor-zoom-meeting-modal-wrap").on("submit",".tutor-meeting-modal-form",function(t){t.preventDefault();var e=l(this),o=e.serializeObject(),t=Intl.DateTimeFormat().resolvedOptions().timeZone;o.timezone=t;var a=e.find('button[type="submit"]');l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:o,beforeSend:function(){a.addClass("tutor-updating-message")},success:function(t){t.success?z(n("Success","tutor"),a.data("toast_success_message"),"success"):z(n("Update Error","tutor"),n("Meeting Update Failed","tutor"),"error"),t.course_contents?(l(t.selector).html(t.course_contents),"#tutor-course-content-wrap"==t.selector&&i(),l(".tutor-zoom-meeting-modal-wrap").removeClass("show")):location.reload()},complete:function(){a.removeClass("tutor-updating-message")}})}),l(document).on("change keyup",".course-edit-topic-title-input",function(t){t.preventDefault(),l(this).closest(".tutor-topics-top").find(".topic-inner-title").html(l(this).val())}),l(document).on("click",".topic-edit-icon",function(t){t.preventDefault(),l(this).closest(".tutor-topics-top").find(".tutor-topics-edit-form").slideToggle()}),l(document).on("click",".tutor-topics-edit-button",function(t){t.preventDefault();var e=l(this),o=e.closest(".tutor-topics-wrap"),t=parseInt(o.attr("id").match(/\d+/)[0],10),a=e.closest(".tutor-topics-wrap").find('[name="topic_title"]').val(),o=e.closest(".tutor-topics-wrap").find('[name="topic_summery"]').val();l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{topic_title:a,topic_summery:o,topic_id:t,action:"tutor_update_topic"},beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){t.success&&(e.closest(".tutor-topics-wrap").find("span.topic-inner-title").text(a),e.closest(".tutor-topics-wrap").find(".tutor-topics-edit-form").slideUp())},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click",".open-tutor-lesson-modal",function(t){t.preventDefault();var e=l(this),o=e.attr("data-lesson-id"),a=e.attr("data-topic-id"),n=l("#post_ID").val();l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{lesson_id:o,topic_id:a,course_id:n,action:"tutor_load_edit_lesson_modal"},beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){l(".tutor-lesson-modal-wrap .modal-container").html(t.data.output),l(".tutor-lesson-modal-wrap").attr({"data-lesson-id":o,"data-topic-id":a}).addClass("show");t=(t=tinyMCEPreInit.mceInit.tutor_editor_config)||tinyMCEPreInit.mceInit.course_description;tinymce.init(t),tinymce.execCommand("mceRemoveEditor",!1,"tutor_lesson_modal_editor"),tinyMCE.execCommand("mceAddEditor",!1,"tutor_lesson_modal_editor"),l(document).trigger("lesson_modal_loaded",{lesson_id:o,topic_id:a,course_id:n})},complete:function(){quicktags({id:"tutor_lesson_modal_editor"}),e.removeClass("tutor-updating-message")}})}),l(document).on("click",".lesson_thumbnail_upload_btn",function(t){t.preventDefault();var e,o=l(this);e||(e=wp.media({title:n("Select or Upload Media Of Your Chosen Persuasion","tutor"),button:{text:n("Use this media","tutor")},multiple:!1})).on("select",function(){var t=e.state().get("selection").first().toJSON();o.closest(".tutor-thumbnail-wrap").find(".thumbnail-img").html('<img src="'+t.url+'" alt="" /><a href="javascript:;" class="tutor-lesson-thumbnail-delete-btn"><i class="tutor-icon-line-cross"></i></a>'),o.closest(".tutor-thumbnail-wrap").find("input").val(t.id),l(".tutor-lesson-thumbnail-delete-btn").show()}),e.open()}),l(document).on("click",".tutor-lesson-thumbnail-delete-btn",function(t){t.preventDefault();t=l(this);t.closest(".tutor-thumbnail-wrap").find("._lesson_thumbnail_id").val(""),t.closest(".tutor-thumbnail-wrap").find(".thumbnail-img").html(""),t.hide()}),l(document).on("click",".tutor-delete-lesson-btn",function(t){var e;t.preventDefault(),confirm(n("Are you sure?","tutor"))&&(t=(e=l(this)).attr("data-lesson-id"),l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{lesson_id:t,action:"tutor_delete_lesson_by_id"},beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){t.success&&e.closest(".course-content-item").remove()},complete:function(){e.removeClass("tutor-updating-message")}}))}),l(document).on("click",".topic-delete-btn a",function(t){l(this).attr("data-topic-id");confirm(n("Are you sure to delete?","tutor"))||t.preventDefault()}),l(document).on("click",".tutor-expand-all-topic",function(t){t.preventDefault(),l(".tutor-topics-body").slideDown(),l(".expand-collapse-wrap i").removeClass("tutor-icon-light-down").addClass("tutor-icon-light-up")}),l(document).on("click",".tutor-collapse-all-topic",function(t){t.preventDefault(),l(".tutor-topics-body").slideUp(),l(".expand-collapse-wrap i").removeClass("tutor-icon-light-up").addClass("tutor-icon-light-down")}),l(document).on("click",".topic-inner-title, .expand-collapse-wrap",function(t){t.preventDefault();t=l(this);t.closest(".tutor-topics-wrap").find(".tutor-topics-body").slideToggle(),t.closest(".tutor-topics-wrap").find(".expand-collapse-wrap i").toggleClass("tutor-icon-light-down tutor-icon-light-up")}),l(document).on("click",".quiz-modal-btn-first-step",function(t){t.preventDefault();var e,o,a,n=l(this),i=l('[name="quiz_title"]'),r=i.val(),t=l('[name="quiz_description"]').val();r?(i.closest(".tutor-quiz-builder-group").find(".quiz_form_msg").html(""),e=l("#post_ID").val(),o=n.closest(".tutor-modal-wrap").attr("quiz-for-post-id"),l("#tutor_quiz_builder_quiz_id").length?(a=l("#tutor_quiz_builder_quiz_id").val(),l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{quiz_title:r,quiz_description:t,quiz_id:a,topic_id:o,action:"tutor_quiz_builder_quiz_update"},beforeSend:function(){n.addClass("tutor-updating-message")},success:function(t){l("#tutor-quiz-"+a).html(t.data.output_quiz_row),l('#tutor-quiz-modal-tab-items-wrap a[href="#quiz-builder-tab-questions"]').trigger("click"),u()},complete:function(){n.removeClass("tutor-updating-message")}})):l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{quiz_title:r,quiz_description:t,course_id:e,topic_id:o,action:"tutor_create_quiz_and_load_modal"},beforeSend:function(){n.addClass("tutor-updating-message")},success:function(t){l(".tutor-quiz-builder-modal-wrap .modal-container").html(t.data.output),l("#tutor-topics-"+o+" .tutor-lessons").append(t.data.output_quiz_row),l('#tutor-quiz-modal-tab-items-wrap a[href="#quiz-builder-tab-questions"]').trigger("click"),u(),l(document).trigger("quiz_modal_loaded",{topic_id:o,course_id:e})},complete:function(){n.removeClass("tutor-updating-message")}})):i.closest(".tutor-quiz-builder-group").find(".quiz_form_msg").html("Please enter quiz title")}),l(document).on("click",".open-tutor-quiz-modal",function(t){t.preventDefault();var e=l(this),o=e.attr("data-quiz-id"),a=e.attr("data-topic-id");null==a&&(a=e.closest(".tutor-modal-wrap").attr("quiz-for-post-id"));var n=l("#post_ID").val();l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{quiz_id:o,topic_id:a,course_id:n,action:"tutor_load_edit_quiz_modal"},beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){l(".tutor-quiz-builder-modal-wrap .modal-container").html(t.data.output),l(".tutor-quiz-builder-modal-wrap").attr("data-quiz-id",o).attr("quiz-for-post-id",a).addClass("show"),e.attr("data-back-to-tab")&&(t=e.attr("data-back-to-tab"),l('#tutor-quiz-modal-tab-items-wrap a[href="'+t+'"]').trigger("click")),l(document).trigger("quiz_modal_loaded",{quiz_id:o,topic_id:a,course_id:n}),u(),jQuery().sortable&&l(".quiz-builder-questions-wrap").sortable({handle:".question-sorting",start:function(t,e){e.placeholder.css("visibility","visible")},stop:function(t,e){var a;a={},l(".quiz-builder-question-wrap").each(function(t,e){var o=l(this),o=parseInt(o.attr("data-question-id"),10);a[t]=o}),l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{sorted_question_ids:a,action:"tutor_quiz_question_sorting"}})}})},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click",".quiz-modal-settings-save-btn",function(t){t.preventDefault();var e=l(this),o=l(".tutor-quiz-builder-modal-wrap").attr("data-quiz-id"),a=l("#current_topic_id_for_quiz").val(),t=l("#quiz-builder-tab-settings :input, #quiz-builder-tab-advanced-options :input").serializeObject();t.topic_id=a,t.quiz_id=o,t.action="tutor_quiz_modal_update_settings",l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:t,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){t.success&&l("#tutor-course-content-wrap").html(t.data.course_contents),t.success?z(n("Success","tutor"),e.data("toast_success_message"),"success"):z(n("Update Error","tutor"),n("Quiz Update Failed","tutor"),"error")},complete:function(){e.removeClass("tutor-updating-message"),"modal_close"===e.attr("data-action")&&l(".tutor-modal-wrap").removeClass("show")}})}),l(document).on("click",".quiz-modal-question-save-btn",function(t){t.preventDefault();var e=l(this),o=l(".quiz_question_form :input").serializeObject();o.action="tutor_quiz_modal_update_question";t=e.closest(".tutor-modal-wrap").attr("quiz-for-post-id");o.topic_id=t,l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:o,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){t.success?e.closest(".tutor-quiz-builder-modal-contents").find(".open-tutor-quiz-modal").trigger("click"):void 0!==t.data&&l("#quiz_validation_msg_wrap").html(t.data.validation_msg)},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click",".modal-close-btn",function(t){t.preventDefault(),l(".tutor-modal-wrap").removeClass("show")}),l(document).on("keyup",function(t){27===t.keyCode&&l(".tutor-modal-wrap").removeClass("show")}),l(document).on("click",".tutor-add-quiz-btn",function(t){t.preventDefault();var e=l(this),o=l(this).closest(".tutor_add_quiz_wrap").attr("data-add-quiz-under"),t=l(this).data("topic-id");l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{quiz_for_post_id:o,current_topic_id:t,action:"tutor_load_quiz_builder_modal"},beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){l(".tutor-quiz-builder-modal-wrap .modal-container").html(t.data.output),l(".tutor-quiz-builder-modal-wrap").attr("quiz-for-post-id",o).addClass("show")},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click",".tutor-quiz-modal-tab-item",function(t){t.preventDefault();var e=l(this),o=l('[name="quiz_title"]');o.val()?(o.closest(".tutor-quiz-builder-form-row").find(".quiz_form_msg").html(""),t=e.attr("href"),l(".quiz-builder-tab-container").hide(),l(t).show(),l("a.tutor-quiz-modal-tab-item").removeClass("active"),e.addClass("active")):o.closest(".tutor-quiz-builder-form-row").find(".quiz_form_msg").html('<p class="quiz-form-warning">Please save the quiz first</p>')}),l(document).on("click",".quiz-modal-btn-next, .quiz-modal-btn-back",function(t){t.preventDefault();t=l(this).attr("href");l('#tutor-quiz-modal-tab-items-wrap a[href="'+t+'"]').trigger("click")}),l(document).on("click",".quiz-modal-tab-navigation-btn.quiz-modal-btn-cancel",function(t){t.preventDefault(),l(".tutor-modal-wrap").removeClass("show")}),l(document).on("click",".tutor-quiz-open-question-form",function(t){t.preventDefault();var e=l(this),o=l("#tutor_quiz_builder_quiz_id").val(),a=l("#post_ID").val(),t=e.attr("data-question-id"),a={quiz_id:o,course_id:a,action:"tutor_quiz_builder_get_question_form"};t&&(a.question_id=t),l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:a,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){l(".tutor-quiz-builder-modal-contents").html(t.data.output),r().reInit(),jQuery().sortable&&l("#tutor_quiz_question_answers").sortable({handle:".tutor-quiz-answer-sort-icon",start:function(t,e){e.placeholder.css("visibility","visible")},stop:function(t,e){var a;a={},l(".tutor-quiz-answer-wrap").each(function(t,e){var o=l(this),o=parseInt(o.attr("data-answer-id"),10);a[t]=o}),l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{sorted_answer_ids:a,action:"tutor_quiz_answer_sorting"}})}}),j()},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click",".tutor-quiz-question-trash",function(t){t.preventDefault();var e=l(this),t=e.attr("data-question-id");l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{question_id:t,action:"tutor_quiz_builder_question_delete"},beforeSend:function(){e.closest(".quiz-builder-question-wrap").remove()}})}),l(document).on("click",".add_question_answers_option:not(.disabled)",function(t){t.preventDefault();var e=l(this),o=e.attr("data-question-id"),t=l(".quiz_question_form :input").serializeObject();t.question_id=o,t.action="tutor_quiz_add_question_answers",l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:t,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){l("#tutor_quiz_question_answer_form").html(t.data.output),j()},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click",".tutor-quiz-answer-edit a",function(t){t.preventDefault();var e=l(this),t=e.closest(".tutor-quiz-answer-wrap").attr("data-answer-id");l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{answer_id:t,action:"tutor_quiz_edit_question_answer"},beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){l("#tutor_quiz_question_answer_form").html(t.data.output)},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click","#quiz-answer-save-btn",function(t){t.preventDefault();var e=l(this),t=l(".quiz_question_form :input").serializeObject();t.action="tutor_save_quiz_answer_options",l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:t,beforeSend:function(){l("#quiz_validation_msg_wrap").html(""),e.addClass("tutor-updating-message")},success:function(t){l("#tutor_quiz_question_answers").trigger("refresh")},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click","#quiz-answer-edit-btn",function(t){t.preventDefault();var e=l(this),t=l(".quiz_question_form :input").serializeObject();t.action="tutor_update_quiz_answer_options",l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:t,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){l("#tutor_quiz_question_answers").trigger("refresh")},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("change",".tutor-quiz-answers-mark-correct-wrap input",function(t){t.preventDefault();var e=l(this),o=e.val(),t=1;e.prop("checked")||(t=0),l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{answer_id:o,inputValue:t,action:"tutor_mark_answer_as_correct"}})}),l(document).on("refresh","#tutor_quiz_question_answers",function(t){t.preventDefault();var e=l(this),o=e.attr("data-question-id"),t=l(".tutor_select_value_holder").val();l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{question_id:o,question_type:t,action:"tutor_quiz_builder_get_answers_by_question"},beforeSend:function(){e.addClass("tutor-updating-message"),l("#tutor_quiz_question_answer_form").html("")},success:function(t){t.success&&e.html(t.data.output)},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click",".tutor-quiz-answer-trash-wrap a.answer-trash-btn",function(t){t.preventDefault();var e=l(this),t=e.attr("data-answer-id");l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{answer_id:t,action:"tutor_quiz_builder_delete_answer"},beforeSend:function(){e.closest(".tutor-quiz-answer-wrap").remove()}})}),l(document).on("click",".tutor-delete-quiz-btn",function(t){var e;t.preventDefault(),confirm(n("Are you sure?","tutor"))&&(t=(e=l(this)).attr("data-quiz-id"),l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{quiz_id:t,action:"tutor_delete_quiz_by_id"},beforeSend:function(){e.closest(".course-content-item").remove()}}))}),r().init(),l(document).on("change","input.tutor_select_value_holder",function(t){l(this);l(".add_question_answers_option").trigger("click"),l("#tutor_quiz_question_answers").trigger("refresh")}),l(document).on("click",".tutor-media-upload-btn",function(t){t.preventDefault();var e,o=l(this);e||(e=wp.media({title:n("Select or Upload Media Of Your Chosen Persuasion","tutor"),button:{text:n("Use this media","tutor")},multiple:!1})).on("select",function(){var t=e.state().get("selection").first().toJSON();o.html('<img src="'+t.url+'" alt="" />'),o.closest(".tutor-media-upload-wrap").find("input").val(t.id)}),e.open()}),l(document).on("click",".tutor-media-upload-trash",function(t){t.preventDefault();t=l(this);t.closest(".tutor-media-upload-wrap").find(".tutor-media-upload-btn").html('<i class="tutor-icon-image1"></i>'),t.closest(".tutor-media-upload-wrap").find("input").val("")});var s,c=(s=0,function(t,e){clearTimeout(s),s=setTimeout(t,e)});l(document).on("click",".tutor-add-instructor-btn",function(t){t.preventDefault();var e=l(this),t=l("#post_ID").val();l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{course_id:t,action:"tutor_load_instructors_modal"},beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){t.success&&(l(".tutor-instructors-modal-wrap .modal-container").html(t.data.output),l(".tutor-instructors-modal-wrap").addClass("show"))},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("change keyup",".tutor-instructors-modal-wrap .tutor-modal-search-input",function(t){t.preventDefault();var o=l(this),a=l(".tutor-modal-wrap");c(function(){var t=o.val(),e=l("#post_ID").val();l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{course_id:e,search_terms:t,action:"tutor_load_instructors_modal"},beforeSend:function(){a.addClass("loading")},success:function(t){t.success&&(l(".tutor-instructors-modal-wrap .modal-container").html(t.data.output),l(".tutor-instructors-modal-wrap").addClass("show"))},complete:function(){a.removeClass("loading")}})},1e3)}),l(document).on("click",".add_instructor_to_course_btn",function(t){t.preventDefault();var e=l(this),o=l(".tutor-modal-wrap"),t=l("#post_ID").val(),o=o.find("input").serializeObject();o.course_id=t,o.action="tutor_add_instructors_to_course",l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:o,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){t.success&&(l(".tutor-course-available-instructors").html(t.data.output),l(".tutor-modal-wrap").removeClass("show"))},complete:function(){e.removeClass("tutor-updating-message")}})}),l(document).on("click",".tutor-instructor-delete-btn",function(t){t.preventDefault();var e=l(this),o=l("#post_ID").val(),t=e.closest(".added-instructor-item").attr("data-instructor-id");l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{course_id:o,instructor_id:t,action:"detach_instructor_from_course"},success:function(t){t.success&&e.closest(".added-instructor-item").remove()}})}),l(document).on("click",".settings-tabs-navs li",function(t){t.preventDefault();var e=l(this),o=e.find("a").attr("data-target"),t=e.find("a").attr("href");e.addClass("active").siblings("li.active").removeClass("active"),l(".settings-tab-wrap").removeClass("active").hide(),l(o).addClass("active").show(),window.history.pushState({},"",t)}),l(document).on("lesson_modal_loaded quiz_modal_loaded assignment_modal_loaded",function(t,e){jQuery().select2&&l(".select2_multiselect").select2({dropdownCssClass:"increasezindex"}),o()}),l(document).on("lesson_modal_loaded",function(t,e){l(".tutor-lesson-modal-wrap .modal-title h1").html(n("Lesson","tutor"))}),l(document).on("assignment_modal_loaded",function(t,e){l(".tutor-lesson-modal-wrap .modal-title h1").html(n("Assignment","tutor"))}),l(document).on("keyup change",".tutor-number-validation",function(t){var e=l(this),o=parseInt(e.val()),a=parseInt(e.attr("data-min")),n=parseInt(e.attr("data-max"));o<a?e.val(a):n<o&&e.val(n)}),l(document).on("click",".tutor-instructor-feedback",function(t){t.preventDefault();var e=l(this);l.ajax({url:window.ajaxurl||_tutorobject.ajaxurl,type:"POST",data:{attempts_id:e.data("attemptid"),feedback:l(".tutor-instructor-feedback-content").val(),action:"tutor_instructor_feedback"},beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){t.success&&(e.closest(".course-content-item").remove(),z(n("Success","tutor"),e.data("toast_success_message"),"success"))},complete:function(){e.removeClass("tutor-updating-message")}})});var d=l(".tutor-announcement-add-new"),p=l(".tutor-announcement-edit"),m=l(".tutor-announcement-delete"),f=l(".tutor-announcement-details"),t=l(".tutor-announcement-close-btn"),_=l(".tutor-accouncement-create-modal"),v=l(".tutor-accouncement-update-modal"),h=l(".tutor-accouncement-details-modal");function b(t,e){var o=new URL(window.location.href),a=o.searchParams;return a.set(t,e),o.search=a.toString(),a.set("paged",1),o.search=a.toString(),o.toString()}l(d).click(function(){_.addClass("show"),l("#tutor-annoucement-backend-create-modal").addClass("show")}),l(f).click(function(){var t=l(this).attr("announcement-date"),e=l(this).attr("announcement-id"),o=l(this).attr("course-id"),a=l(this).attr("course-name"),n=l(this).attr("announcement-title"),i=l(this).attr("announcement-summary");l(".tutor-announcement-detail-content").html("<h3>".concat(n,"</h3><p>").concat(i,"</p>")),l(".tutor-announcement-detail-course-info p").html("".concat(a)),l(".tutor-announcement-detail-date-info p").html("".concat(t)),l("#tutor-announcement-edit-from-detail").attr("announcement-id",e),l("#tutor-announcement-edit-from-detail").attr("course-id",o),l("#tutor-announcement-edit-from-detail").attr("announcement-title",n),l("#tutor-announcement-edit-from-detail").attr("announcement-summary",i),l("#tutor-announcement-delete-from-detail").attr("announcement-id",e),h.addClass("show")}),l(p).click(function(){h&&h.removeClass("show");var t=l(this).attr("announcement-id"),e=l(this).attr("course-id"),o=l(this).attr("announcement-title"),a=l(this).attr("announcement-summary");l("#tutor-announcement-course-id").val(e),l("#announcement_id").val(t),l("#tutor-announcement-title").val(o),l("#tutor-announcement-summary").val(a),v.addClass("show")}),l(t).click(function(){_.removeClass("show"),v.removeClass("show"),h.removeClass("show"),l("#tutor-annoucement-backend-create-modal").removeClass("show")}),l(".tutor-announcements-form").on("submit",function(t){t.preventDefault();var e=l(this).find('button[type="submit"]'),t=l(".tutor-announcements-form").serialize()+"&action=tutor_announcement_create&action_type=create";l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:t,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){if(l(".tutor-alert").remove(),"success"==t.status&&location.reload(),"validation_error"==t.status){l(".tutor-announcements-create-alert").append('<div class="tutor-alert alert-warning"></div>');for(var e=0,o=Object.entries(t.message);e<o.length;e++){var a=q(o[e],2),a=(a[0],a[1]);l(".tutor-announcements-create-alert .tutor-alert").append("<li>".concat(a,"</li>"))}}"fail"==t.status&&l(".tutor-announcements-create-alert").html("<li>".concat(t.message,"</li>"))},error:function(t){console.log(t)}})}),l(".tutor-announcements-update-form").on("submit",function(t){t.preventDefault();var e=l(this).find('button[type="submit"]'),t=l(".tutor-announcements-update-form").serialize()+"&action=tutor_announcement_create&action_type=update";l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:t,beforeSend:function(){e.addClass("tutor-updating-message")},success:function(t){if(l(".tutor-alert").remove(),"success"==t.status&&location.reload(),"validation_error"==t.status){l(".tutor-announcements-update-alert").append('<div class="tutor-alert alert-warning"></div>');for(var e=0,o=Object.entries(t.message);e<o.length;e++){var a=q(o[e],2),a=(a[0],a[1]);l(".tutor-announcements-update-alert > .tutor-alert").append("<li>".concat(a,"</li>"))}}"fail"==t.status&&l(".tutor-announcements-create-alert").html("<li>".concat(t.message,"</li>"))},error:function(){}})}),l(m).click(function(){var t=l(this).attr("announcement-id"),e=l("#tutor-announcement-tr-"+t);confirm("Do you want to delete?")&&l.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:{action:"tutor_announcement_delete",announcement_id:t},beforeSend:function(){},success:function(t){e.remove(),h.length&&h.removeClass("show"),"fail"==t.status&&console.log(t.message)},error:function(){}})}),l(".tutor-announcement-course-sorting").on("change",function(t){window.location=b("course-id",l(this).val())}),l(".tutor-announcement-order-sorting").on("change",function(t){window.location=b("order",l(this).val())}),l(".tutor-announcement-date-sorting").on("change",function(t){window.location=b("date",l(this).val())}),l(".tutor-announcement-search-sorting").on("click",function(t){window.location=b("search",l(".tutor-announcement-search-field").val())}),l(document).click(function(){l(".tutor-dropdown").removeClass("show")}),l(".tutor-dropdown").click(function(t){t.stopPropagation(),l(".tutor-dropdown").hasClass("show")&&l(".tutor-dropdown").removeClass("show"),l(this).addClass("show")});var w,m=".video_source_wrap_external_url input, .video_source_wrap_vimeo input, .video_source_wrap_youtube input, .video_source_wrap_html5, .video_source_upload_wrap_html5";l("body").on("paste",m,function(t){t.stopImmediatePropagation();var r=l(this).closest(".lesson-modal-form-wrap").find(".tutor-option-field-video-duration"),e=r.find("label"),o=l(this).hasClass("video_source_wrap_html5")||l(this).hasClass("video_source_upload_wrap_html5"),a=l(this).data("autofill_url");l(this).data("autofill_url",null);function n(t){t?0==e.find("img").length&&e.append(' <img src="'+window._tutorobject.loading_icon_url+'" style="display:inline-block"/>'):e.find("img").remove()}function i(t){for(var e=Math.floor(t/3600),o=Math.floor((t-3600*e)/60),t=Math.round(t-3600*e-60*o),a=[e=e<10?"0"+e:e,o=o<10?"0"+o:o,t=t<10?"0"+t:t],n=r.find("input"),i=0;i<3;i++)n.eq(i).val(a[i])}var u,s,c,t=o?l(this).find("span").data("video_url"):a||t.originalEvent.clipboardData.getData("text");o||l(this).parent().hasClass("video_source_wrap_external_url")?((u=document.createElement("video")).addEventListener("loadedmetadata",function(){i(u.duration),n(!1)}),n(!0),u.src=t):l(this).parent().hasClass("video_source_wrap_vimeo")?(s=(c=t.match(/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/))?c[5]:null)&&(n(!0),l.getJSON("http://vimeo.com/api/v2/video/"+s+"/json",function(t){Array.isArray(t)&&t[0]&&void 0!==t[0].duration&&i(t[0].duration),n(!1)})):l(this).parent().hasClass("video_source_wrap_youtube")&&(s=!(!(c=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/))||11!=c[7].length)&&c[7],c=l(this).data("youtube_api_key"),s&&c&&(c="https://www.googleapis.com/youtube/v3/videos?id="+s+"&key="+c+"&part=contentDetails",n(!0),l.getJSON(c,function(t){"object"==g(t)&&t.items&&t.items[0]&&t.items[0].contentDetails&&t.items[0].contentDetails.duration&&i(function(t){t=(t=t.match(/PT(\d+H)?(\d+M)?(\d+S)?/)).slice(1).map(function(t){if(null!=t)return t.replace(/\D/,"")});return 3600*(parseInt(t[0])||0)+60*(parseInt(t[1])||0)+(parseInt(t[2])||0)}(t.items[0].contentDetails.duration)),n(!1)})))}).on("input",m,function(){w&&clearTimeout(w);var e=l(this);w=setTimeout(function(){var t=(t=e.val())?t.trim():"";console.log("Trigger",t),t&&e.data("autofill_url",t).trigger("paste")},700)}),l(".tutor-form-submit-through-ajax").submit(function(t){t.preventDefault();var e=l(this),o=l(this).attr("action")||window.location.href,a=l(this).attr("method")||"GET",t=l(this).serializeObject();e.find("button").addClass("tutor-updating-message"),l.ajax({url:o,type:a,data:t,success:function(){z(n("Success","tutor"),e.data("toast_success_message"),"success")},complete:function(){e.find("button").removeClass("tutor-updating-message")}})}),l.ajaxSetup({data:y()})}),jQuery.fn.serializeObject=function(){var t={},e=this.serializeArray();return jQuery.each(e,function(){t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t}})()})();