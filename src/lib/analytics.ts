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
