<script lang="ts">
	import { onMount } from 'svelte';
	import { updates } from '$lib/data/campaign';
	import { trackStoryClick } from '$lib/analytics';

	// Microsoft logo colours, cycled across cards
	const accents = ['#F25022', '#7FBA00', '#00A4EF', '#FFB900'];

	let track: HTMLUListElement = undefined!;
	let atStart = $state(true);
	let atEnd = $state(false);

	function updateEdges() {
		atStart = track.scrollLeft <= 4;
		atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
	}

	function scrollByCard(dir: 1 | -1) {
		const card = track.querySelector('li');
		const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth;
		track.scrollBy({ left: dir * step, behavior: 'smooth' });
	}

	onMount(() => {
		updateEdges();
		window.addEventListener('resize', updateEdges);
		return () => window.removeEventListener('resize', updateEdges);
	});
</script>

<section class="updates" id="updates">
	<div class="updates-content">
		<div class="updates-header">
			<div>
				<h2>Latest Updates</h2>
				<p>
					The latest news and milestones from our campaign to hold Microsoft accountable for its AI
					data center build out.
				</p>
			</div>
			<div class="carousel-nav">
				<button onclick={() => scrollByCard(-1)} disabled={atStart} aria-label="Previous updates">←</button>
				<button onclick={() => scrollByCard(1)} disabled={atEnd} aria-label="Next updates">→</button>
			</div>
		</div>

		<ul class="carousel" bind:this={track} onscroll={updateEdges} aria-label="Latest updates">
			{#each updates as update, i}
				<li>
					<a
						class="card"
						href={update.href}
						target="_blank"
						rel="noopener noreferrer"
						style="--accent: {accents[i % accents.length]}"
						onclick={() => trackStoryClick('latest_update', update.title)}
					>
						{#if update.image}
							<img class="card-image" src={update.image} alt="" loading="lazy" />
						{:else}
							<span class="card-band" aria-hidden="true"></span>
						{/if}
						<span class="card-body">
							<span class="card-meta">
								<span class="card-type">{update.type}</span>
								{#if update.date}<span class="card-date">{update.date}</span>{/if}
							</span>
							<span class="card-title">{update.title}</span>
							<span class="card-more">Read more →</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.updates {
		background: #f3f3f3;
		color: #1a1a1a;
		padding: 5rem 2rem;
	}

	.updates-content {
		max-width: 1280px;
		margin: 0 auto;
	}

	.updates-header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.updates-header h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 300;
		line-height: 1.15;
		margin-bottom: 0.75rem;
	}

	.updates-header p {
		font-size: 1.15rem;
		line-height: 1.6;
		max-width: 40rem;
		color: #444;
	}

	.carousel-nav {
		display: flex;
		gap: 0.5rem;
		flex-shrink: 0;
	}

	.carousel-nav button {
		width: 2.75rem;
		height: 2.75rem;
		border: 2px solid var(--bsod-blue, #0078d7);
		background: #fff;
		color: var(--bsod-blue, #0078d7);
		font-size: 1.2rem;
		transition: background-color 0.15s ease, color 0.15s ease;
	}

	.carousel-nav button:hover:not(:disabled) {
		background: var(--bsod-blue, #0078d7);
		color: #fff;
	}

	.carousel-nav button:disabled {
		opacity: 0.35;
		cursor: default;
	}

	.carousel {
		list-style: none;
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: calc((100% - 3 * 1.25rem) / 3.15);
		gap: 1.25rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		padding: 0.25rem 0.25rem 1.25rem;
		scrollbar-width: thin;
	}

	.carousel li {
		scroll-snap-align: start;
		display: flex;
	}

	.card {
		display: flex;
		flex-direction: column;
		width: 100%;
		background: #fff;
		border: 1px solid #ddd;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
		transition: transform 0.15s ease, box-shadow 0.15s ease;
	}

	.card:hover,
	.card:focus-visible {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
	}

	.card:focus-visible {
		outline: 3px solid var(--bsod-blue, #0078d7);
		outline-offset: 2px;
	}

	.card-band {
		display: block;
		height: 8px;
		background: var(--accent);
	}

	.card-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		border-bottom: 4px solid var(--accent);
	}

	.card-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		padding: 1.5rem;
	}

	.card-meta {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #666;
	}

	.card-title {
		flex: 1;
		font-size: 1.1rem;
		font-weight: 600;
		line-height: 1.4;
	}

	.card-more {
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--bsod-blue, #0078d7);
	}

	@media (max-width: 900px) {
		.updates {
			padding: 3.5rem 1.25rem;
		}

		.carousel {
			grid-auto-columns: calc((100% - 1.25rem) / 1.6);
		}
	}

	@media (max-width: 600px) {
		.updates-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.carousel {
			grid-auto-columns: 85%;
		}
	}
</style>
