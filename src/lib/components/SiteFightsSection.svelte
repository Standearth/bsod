<script lang="ts">
	import { siteFights } from '$lib/data/campaign';
	import { trackStoryClick } from '$lib/analytics';
</script>

<section class="fights" id="stories">
	<div class="fights-content">
		<div class="fights-text">
			<h2>Stories from Microsoft’s Dirty Data Center pushback</h2>
			<p>
				Microsoft is rushing to expand its dirty data center network. These communities are fighting
				back and holding one of the biggest companies in the world to account.
			</p>
		</div>

		<ul class="fights-grid">
			{#each siteFights as fight}
				<li>
					<a
						class="tile"
						href={fight.href}
						target="_blank"
						rel="noopener noreferrer"
						style="--tile-bg: {fight.color}; --tile-ink: {fight.ink}"
						onclick={() => trackStoryClick('site_fight', fight.place)}
					>
						<span class="tile-face">
							<svg class="tile-pin" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill="currentColor"
									d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
								/>
							</svg>
							<span class="tile-place">{fight.place}</span>
						</span>
						<span class="tile-hover">
							<span class="tile-blurb">{fight.blurb}</span>
							<span class="tile-more">Read the story →</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.fights {
		background: var(--bsod-blue, #0078d7);
		color: #fff;
		padding: 5rem 2rem;
	}

	.fights-content {
		max-width: 1280px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.fights-text h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 300;
		line-height: 1.15;
		margin-bottom: 1.5rem;
	}

	.fights-text p {
		font-size: 1.2rem;
		line-height: 1.6;
		max-width: 34rem;
		opacity: 0.95;
	}

	/* 2×2 grid echoing the Microsoft logo */
	.fights-grid {
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.6rem;
		width: 100%;
		max-width: 520px;
		justify-self: center;
	}

	.tile {
		position: relative;
		display: block;
		aspect-ratio: 1;
		background: var(--tile-bg);
		color: var(--tile-ink);
		overflow: hidden;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
		transition: transform 0.15s ease, box-shadow 0.15s ease;
	}

	.tile:hover,
	.tile:focus-visible {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	.tile:focus-visible {
		outline: 3px solid #fff;
		outline-offset: 3px;
	}

	.tile-face,
	.tile-hover {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		padding: 1.25rem;
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	.tile-face {
		justify-content: space-between;
	}

	.tile-pin {
		width: 2.25rem;
		height: 2.25rem;
	}

	.tile-place {
		font-size: clamp(1.1rem, 2.2vw, 1.6rem);
		font-weight: 600;
		line-height: 1.2;
	}

	.tile-hover {
		justify-content: center;
		gap: 0.75rem;
		background: rgba(0, 0, 0, 0.82);
		color: #fff;
		opacity: 0;
		transform: translateY(8px);
	}

	.tile-blurb {
		font-size: clamp(0.85rem, 1.4vw, 1rem);
		line-height: 1.45;
	}

	.tile-more {
		font-size: 0.85rem;
		font-weight: 700;
		text-decoration: underline;
	}

	.tile:hover .tile-hover,
	.tile:focus-visible .tile-hover {
		opacity: 1;
		transform: translateY(0);
	}

	.tile:hover .tile-face,
	.tile:focus-visible .tile-face {
		opacity: 0;
	}

	/* Touch devices have no hover — show the story text under the place name instead */
	@media (hover: none) {
		.tile {
			aspect-ratio: auto;
			min-height: 11rem;
		}

		.tile-face,
		.tile-hover {
			position: static;
			opacity: 1;
			transform: none;
			background: none;
			color: inherit;
			padding: 1rem;
		}

		.tile-face {
			gap: 0.5rem;
			padding-bottom: 0;
		}

		.tile-pin {
			width: 1.5rem;
			height: 1.5rem;
		}

		.tile-hover {
			justify-content: flex-start;
			gap: 0.5rem;
		}

		.tile:hover .tile-face {
			opacity: 1;
		}
	}

	@media (max-width: 900px) {
		.fights {
			padding: 3.5rem 1.25rem;
		}

		.fights-content {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
	}
</style>
