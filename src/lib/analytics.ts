/**
 * Google Analytics 4 – custom event helpers.
 *
 * gtag is loaded globally via app.html; these thin wrappers keep
 * event names and parameters consistent across the codebase.
 */

type GtagFn = (...args: unknown[]) => void;

function gtag(...args: unknown[]) {
	if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
		((window as any).gtag as GtagFn)(...args);
	}
}

/** Fired when the individual sign-on modal opens */
export function trackIndividualSignOn() {
	gtag('event', 'popup_open', {
		event_category: 'sign_on',
		event_label: 'individual',
		sign_on_type: 'individual'
	});
}

/** Fired when the organization sign-on modal opens */
export function trackOrgSignOn() {
	gtag('event', 'popup_open', {
		event_category: 'sign_on',
		event_label: 'organization',
		sign_on_type: 'organization'
	});
}

/** Fired when a user clicks any social-share button */
export function trackSocialShare(platform: string) {
	gtag('event', 'social_share_click', {
		event_category: 'engagement',
		event_label: platform,
		platform
	});
}

/** Fired once when the user scrolls to the bottom of the open letter */
export function trackLetterScrolledToBottom() {
	gtag('event', 'letter_scroll_complete', {
		event_category: 'engagement',
		event_label: 'letter_bottom'
	});
}

/** Fired when a geo-targeted city banner is shown to a visitor */
export function trackCityBannerShown(bannerId: string) {
	gtag('event', 'city_banner_shown', {
		event_category: 'geo_targeting',
		event_label: bannerId,
		banner_id: bannerId
	});
}

/** Fired when a visitor clicks the take-action CTA on a city banner */
export function trackCityBannerClick(bannerId: string) {
	gtag('event', 'city_banner_click', {
		event_category: 'geo_targeting',
		event_label: bannerId,
		banner_id: bannerId
	});
}

/** Fired when a visitor dismisses a city banner without clicking through */
export function trackCityBannerDismiss(bannerId: string) {
	gtag('event', 'city_banner_dismiss', {
		event_category: 'geo_targeting',
		event_label: bannerId,
		banner_id: bannerId
	});
}
