<?php
/**
 * Display Video HTML5
 *
 * @since v.1.0.0
 * @author themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

if ( ! defined( 'ABSPATH' ) )
	exit;

$disable_default_player_vimeo = tutor_utils()->get_option('disable_default_player_vimeo');
$video_info = tutor_utils()->get_video_info();

$video_url = tutor_utils()->avalue_dot('source_vimeo', $video_info);
$video_id = '';
if ( preg_match('%^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)(?:[?]?.*)$%im', $video_url, $match ) ) {
    if ( isset( $match[3] ) ) {
        $video_id = $match[3];
    }
}

do_action('tutor_lesson/single/before/video/vimeo');
?>
    <div class="tutor-single-lesson-segment tutor-lesson-video-wrap">

		<?php
		if ($disable_default_player_vimeo){
			?>
            <div class="tutor-video-embeded-wrap">
                <iframe src="https://player.vimeo.com/video/<?php echo $video_id; ?>" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
			<?php
		}else{
			?>
            <div class="plyr__video-embed" id="tutorPlayer">
                <iframe src="https://player.vimeo.com/video/<?php echo $video_id; ?>?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media" allowfullscreen allowtransparency allow="autoplay"></iframe>
            </div>
		<?php } ?>
    </div>
<?php
do_action('tutor_lesson/single/after/video/vimeo'); ?>