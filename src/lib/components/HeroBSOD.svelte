<script lang="ts">
	import { onMount } from 'svelte';

	let progress = $state(0);
	const duration = 5000; // 6 seconds
	const interval = 50; // update every 50ms
	const steps = duration / interval;
	const increment = 100 / steps;

	onMount(() => {
		const timer = setInterval(() => {
			progress += increment;
			if (progress >= 100) {
				progress = 100;
				clearInterval(timer);
				// Scroll to the open letter section
				setTimeout(() => {
					const letterSection = document.getElementById('open-letter');
					if (letterSection) {
						letterSection.scrollIntoView({ behavior: 'smooth' });
					}
				}, 400);
			}
		}, interval);

		return () => clearInterval(timer);
	});
</script>

<section class="bsod">
	<div class="bsod-content">
		<div class="sad-face">:(</div>
		<h1 class="bsod-heading">
			Microsoft, your climate plan ran into a problem and needs to restart.
		</h1>
		<p class="bsod-subtext">
			We're just collecting some error info, and then you can review our open letter.
		</p>
		<div class="bsod-progress">
			<span class="progress-pct">{Math.round(progress)}% complete</span>
		</div>
		<div class="bsod-details">
			<p class="bsod-small">
				If you'd like to know more, search online for this error:
				<span class="bsod-code">CLIMATE_COMMITMENT_FAILURE</span>
			</p>
		</div>
	</div>
</section>

<style>
	.bsod {
		background: var(--bsod-blue, #0078d7);
		color: var(--bsod-text, #ffffff);
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
	}

	.bsod-content {
		max-width: 860px;
		width: 100%;
	}

	.sad-face {
		font-size: 7rem;
		font-weight: 200;
		line-height: 1;
		margin-bottom: 1.5rem;
	}

	.bsod-heading {
		font-size: 1.75rem;
		font-weight: 400;
		line-height: 1.35;
		margin-bottom: 1.25rem;
	}

	.bsod-subtext {
		font-size: 0.95rem;
		font-weight: 300;
		opacity: 0.85;
		margin-bottom: 2rem;
	}

	.bsod-progress {
		margin-bottom: 2.5rem;
	}

	.progress-pct {
		font-size: 0.95rem;
		font-weight: 300;
		opacity: 0.85;
	}

	.bsod-details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.bsod-small {
		font-size: 0.75rem;
		font-weight: 300;
		opacity: 0.7;
	}

	.bsod-code {
		font-weight: 500;
		opacity: 1;
	}

	@media (min-width: 768px) {
		.sad-face {
			font-size: 9rem;
		}

		.bsod-heading {
			font-size: 2.75rem;
		}
	}

	@media (min-width: 1024px) {
		.bsod-heading {
			font-size: 3.5rem;
		}
	}
</style>
