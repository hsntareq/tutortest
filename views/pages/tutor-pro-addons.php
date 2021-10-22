<?php
/**
 * Addons list when Pro is disabled
 */
?>
<main class="tutor-backend-settings-addons-list tutor-dashboard-page" style="margin-left: -20px;">
    <div class="tutor-addons-list-body tutor-p-30">
        <div class="tutor-addons-list-items tutor-mb-40">
            <div class="tutor-addons-card">
                <div class="card-body addons-jumbotron tutor-px-30 tutor-py-40">
                    <div class="addon-pro-banner tutor-mr-30">
                        <svg width="428" height="240" viewBox="0 0 428 240" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="428" height="240" rx="13" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_11416:210765" transform="translate(-0.261794 -0.260428) scale(0.000792081 0.00140529)"/>
                            </pattern>
                            </defs>
                            </svg>
                    </div>
                    <div class="addon-jumbotron-content">
                        <h3 class="title tutor-mt-0"><?php esc_html_e( 'Get All of Our Addons for a Single Price', 'tutor' ); ?></h3>
                        <p class="d-flex"><span class="ttr-mark-filled"></span>
                        <?php esc_html_e( 'Affordable $49/month, free 7-day trial, no credit card required', 'tutor' ); ?>
                        </p>
                        <p class="d-flex"><span class="ttr-mark-filled"></span>
                        <?php esc_html_e( 'Effortless Easy two-minute installation for 24/7 compliance', 'tutor' ); ?>
                        </p>
                        <p class="d-flex"><span class="icon ttr-mark-filled"></span>
                        <?php esc_html_e( 'Compliant Accessibility statement and certificate of performance', 'tutor' ); ?>
                        </p>
                        <button class="tutor-btn tutor-mt-15">
                            <span class="tutor-btn-icon ttr-crown-filled"></span>
                            <span><a class="color-text-white" href="<?php echo esc_url( 'https://www.themeum.com/product/tutor-lms/?utm_source=tutor&utm_medium=addons_lists&utm_campaign=tutor_addons_lists' ); ?>"><?php esc_html_e( 'Buy Pro', 'tutor' ); ?></a></span>
                        </button>
                    </div>
                </div>
            </div>
		</div>
        <h3 class="title text-medium-h5 color-text-primary"><?php esc_html_e( 'Addons List', 'tutor' ); ?></h3>
        <div class="tutor-addons-list-select-filter d-flex justify-content-end align-items-center">
			<div class="tutor-input-group tutor-form-control-has-icon tutor-form-control-has-icon-right-">
				<span class="ttr-search-filled tutor-input-group-icon"></span>
				<input
                    id="free-addons-search"
					type="search"
					class="tutor-form-control"
					placeholder="<?php esc_attr_e( 'Search…', 'tutor' ); ?>"
					value=''
				/>
			</div>
		</div>
        <div id="tutor-free-addons" class="tutor-addons-list-items tutor-mt-30" />
    </div>
</main>