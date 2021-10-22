<?php
/**
 * Checkbox items template for full width type field.
 *
 * @package Tutor LMS
 * @since 2.0
 */

$default      = isset( $field['default'] ) ? $field['default'] : 'off';
$option_value = $this->get( $field['key'], $default );
$field_id     = 'field_' . $field['key'];
?>
<div class="tutor-option-field-row" id="<?php echo esc_attr( $field_id ); ?>">
	<?php require tutor()->path . 'views/options/template/field_heading.php'; ?>

	<div class="tutor-option-field-input">
		<label class="tutor-form-toggle">
			<?php echo (isset($field['label_title']) && null !== $field['label_title']) ? "<span class='label-before'>{$field['label_title']}</span>" : null; ?>
			<input type="hidden" name="tutor_option[<?php echo esc_attr( $field['key'] ); ?>]" value="<?php echo esc_attr( $option_value ); ?>">
			<input type="checkbox" value="on" <?php checked( $option_value, 'on' ); ?> class="tutor-form-toggle-input">
			<span class="tutor-form-toggle-control"></span>
		</label>
	</div>
</div>
