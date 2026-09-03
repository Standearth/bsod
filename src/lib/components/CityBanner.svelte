<script lang="ts">
	import { onMount } from 'svelte';
	import { cityBanners, type CityBannerConfig } from '$lib/data/cityBanners';
	import { trackCityBannerShown, trackCityBannerClick, trackCityBannerDismiss } from '$lib/analytics';

	let banner = $state<CityBannerConfig | null>(null);
	let visible = $state(false);

	const DISMISS_KEY_PREFIX = 'cityBannerDismissed:';
	const GEO_CACHE_KEY = 'geoLocationCache';
	const FETCH_TIMEOUT_MS = 4000;

	function isDismissed(id: string): boolean {
		try {
			return sessionStorage.getItem(DISMISS_KEY_PREFIX + id) === 'true';
		} catch {
			return false;
		}
	}

	function dismiss() {
		if (!banner) return;
		try {
			sessionStorage.setItem(DISMISS_KEY_PREFIX + banner.id, 'true');
		} catch {
			/* storage unavailable, non-critical */
		}
		trackCityBannerDismiss(banner.id);
		visible = false;
	}

	function handleCtaClick() {
		if (banner) trackCityBannerClick(banner.id);
	}

	/**
	 * Local/QA preview override: `?banner=<id>` (or `?banner=show` for the
	 * first configured banner) forces that banner to render, bypassing both
	 * the IP lookup and the dismissed-this-session check. Never tracked as a
	 * real "shown" event so it doesn't pollute analytics.
	 */
	function getPreviewBanner(): CityBannerConfig | null {
		const param = new URLSearchParams(window.location.search).get('banner');
		if (!param) return null;
		if (param === 'show') return cityBanners[0] ?? null;
		return cityBanners.find((b) => b.id === param) ?? null;
	}

	function matchBanner(city: string | undefined, regionCode: string | undefined): CityBannerConfig | null {
		if (!city) return null;
		const normalizedCity = city.trim().toLowerCase();
		const normalizedRegion = regionCode?.trim().toUpperCase();

		return (
			cityBanners.find((candidate) => {
				const cityMatches = candidate.cities.some((c) => c.toLowerCase() === normalizedCity);
				if (!cityMatches) return false;
				if (!candidate.regionCodes || candidate.regionCodes.length === 0) return true;
				return normalizedRegion !== undefined && candidate.regionCodes.includes(normalizedRegion);
			}) ?? null
		);
	}

	async function getGeoLocation(): Promise<{ city?: string; region_code?: string } | null> {
		try {
			const cached = sessionStorage.getItem(GEO_CACHE_KEY);
			if (cached) return JSON.parse(cached);
		} catch {
			/* fall through to fetch */
		}

		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

		try {
			const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
			if (!res.ok) return null;
			const data = await res.json();
			if (data?.error) return null;

			try {
				sessionStorage.setItem(GEO_CACHE_KEY, JSON.stringify(data));
			} catch {
				/* non-critical */
			}

			return data;
		} catch {
			// Network failure, timeout, blocked by an ad/privacy blocker, etc.
			// Fail silently — the banner simply doesn't show.
			return null;
		} finally {
			clearTimeout(timeout);
		}
	}

	onMount(async () => {
		const preview = getPreviewBanner();
		if (preview) {
			banner = preview;
			visible = true;
			return;
		}

		const geo = await getGeoLocation();
		if (!geo) return;

		const matched = matchBanner(geo.city, geo.region_code);
		if (!matched || isDismissed(matched.id)) return;

		banner = matched;
		visible = true;
		trackCityBannerShown(matched.id);
	});
</script>

{#if visible && banner}
	<div class="city-banner" role="region" aria-label="Local call to action">
		<div class="city-banner-content">
			<p class="city-banner-message">{banner.message}</p>
			<div class="city-banner-actions">
				<a
					class="city-banner-cta"
					href={banner.ctaUrl}
					target="_blank"
					rel="noopener noreferrer"
					onclick={handleCtaClick}
				>
					{banner.ctaLabel}
				</a>
				<button class="city-banner-close" onclick={dismiss} aria-label="Dismiss banner">✕</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.city-banner {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 900;
		background: #ffffff;
		color: var(--word-text, #333333);
		border-top: 3px solid var(--bsod-blue, #0078d7);
		box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.2);
	}

	.city-banner-content {
		max-width: 1280px;
		margin: 0 auto;
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.city-banner-message {
		flex: 1 1 420px;
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.35;
		margin: 0;
	}

	.city-banner-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	.city-banner-cta {
		background: var(--cta-secondary, #107c10);
		color: #ffffff;
		font-weight: 700;
		font-size: 0.9rem;
		padding: 0.65rem 1.25rem;
		border-radius: 2px;
		white-space: nowrap;
		transition: background 0.15s ease;
	}

	.city-banner-cta:hover {
		background: var(--cta-secondary-hover, #0b5e0b);
	}

	.city-banner-close {
		background: none;
		border: none;
		color: var(--word-text, #333333);
		font-size: 1.1rem;
		line-height: 1;
		padding: 0.4rem 0.5rem;
		opacity: 0.6;
	}

	.city-banner-close:hover {
		opacity: 1;
	}

	@media (max-width: 600px) {
		.city-banner-content {
			padding: 0.85rem 1rem;
			gap: 0.75rem;
		}

		.city-banner-message {
			font-size: 1.15rem;
			flex-basis: 100%;
			text-align: center;
		}

		.city-banner-actions {
			width: 100%;
			justify-content: center;
		}
	}
</style>
