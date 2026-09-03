/**
 * Config-driven list of geo-targeted homepage banners.
 *
 * Each entry is matched against the visitor's IP-geolocated city (via
 * ipapi.co, see CityBanner.svelte). To add another city, just push a new
 * entry here — no component changes needed.
 */

export interface CityBannerConfig {
	/** Unique key, used for dismissal storage + analytics labels. */
	id: string;
	/** City names to match against, lowercase, no state suffix (e.g. "kenosha"). */
	cities: string[];
	/** Optional region/state codes to require alongside the city match (e.g. "WI"). */
	regionCodes?: string[];
	/** Banner copy. */
	message: string;
	ctaLabel: string;
	ctaUrl: string;
}

export const cityBanners: CityBannerConfig[] = [
	{
		id: 'kenosha-wi',
		cities: ['kenosha'],
		regionCodes: ['WI'],
		message:
			'For anyone who lives in or around Kenosha, WI fight back against the Microsoft data center by sending a letter to your elected officials and Microsoft here!',
		ctaLabel: 'Take Action',
		ctaUrl: 'https://act.stand.earth/page/96103/action/1?ea.tracking.id=actpage&utm_source=mslies&utm_medium=referral'
	}
];
