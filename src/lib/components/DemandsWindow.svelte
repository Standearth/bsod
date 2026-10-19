<script lang="ts">
	import WindowTitleBar from './WindowTitleBar.svelte';

	let {
		onSignIndividual,
		onSignOrganization
	}: {
		onSignIndividual: () => void;
		onSignOrganization: () => void;
	} = $props();

	let signAsOrg = $state(false);

	const demands: Array<{ title: string; detail: string[] }> = [
		{
			title: 'Communities decide. Protect them from harm, shoulder the cost, and respect that no means no.',
			detail: [
				'Involve communities from the very beginning, ensuring that when communities do consent they get real, lasting benefits – as decided by the community – and are protected from impacts like noise, air, light and water pollution. Pay the full costs of grid and infrastructure upgrades so that they are not passed on to residential ratepayers. And you must accept that when communities say “no,” it means “no”.'
			]
		},
		{
			title: 'No more fossil fuels, ever.',
			detail: [
				'Cancel fossil fuel-based projects and recommit to 24/7 (round-the-clock) renewable energy with battery storage to power your data centers, excluding harmful false solutions like biomass or gas with carbon capture. And, end the dangerous practice of developing AI tools which expand oil and gas extraction, delay the energy transition, and advance fossil fuel development or deforestation.'
			]
		},
		{
			title: 'Water and resources are for people and the planet, not for AI.',
			detail: [
				'Be honest and transparent about the potential water consumption and contamination of your data centers – including the hidden costs of electricity to power them.',
				'End the drastic overuse of water, ensure that people and communities are prioritized for resources, and don’t allow harmful chemical coolants such as PFAS to enter our communities.'
			]
		},
		{
			title: 'Tell the whole truth about your data centers – don’t hide behind contractors or NDAs.',
			detail: [
				'Be honest about the environmental impacts and uses of your products and services with real transparency about real and potential impacts at a facility level, including for suppliers. Committing to end non-disclosure agreements (NDAs) is just a start – now, ensure your contractors do the same, and use your position and power to support regulation of the AI industry in the public interest, supporting democracy rather than undermining it.'
			]
		}
	];

	function sign() {
		if (signAsOrg) onSignOrganization();
		else onSignIndividual();
	}
</script>

<div class="demands-window" id="demands">
	<WindowTitleBar title="Our Demands" icon="📋" />

	<div class="demands-body">
		<p class="demands-intro">
			Satya Nadella, CEO of Microsoft, our demands of Microsoft <strong>and</strong> its contractors are clear:
		</p>

		<ol class="demands-list">
			{#each demands as demand, i}
				<li>
					<details class="demand">
						<summary>
							<span class="demand-num">{i + 1}</span>
							<span class="demand-title">{demand.title}</span>
							<span class="demand-chevron" aria-hidden="true">▾</span>
						</summary>
						<div class="demand-detail">
							{#each demand.detail as para}
								<p>{para}</p>
							{/each}
						</div>
					</details>
				</li>
			{/each}
		</ol>

		<div class="cta">
			<p class="cta-text">Tell Microsoft: You’re a bad neighbor, and you’re not moving in.</p>

			<label class="org-check">
				<input type="checkbox" bind:checked={signAsOrg} />
				<span>Sign as an Organization</span>
			</label>

			<button class="cta-btn" onclick={sign}>
				Add my name<span class="cta-arrow" aria-hidden="true">→</span>
			</button>

			<p class="cta-footnote">
				<a href="/letter">Read our original open letter and its signers →</a>
			</p>
		</div>
	</div>
</div>

<style>
	.demands-window {
		display: flex;
		flex-direction: column;
		border: 1px solid #999;
		box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.35);
		background: #fff;
	}

	.demands-body {
		padding: 1.25rem 1.25rem 1.5rem;
		font-family: 'Segoe UI', 'Aptos', sans-serif;
		color: #333;
	}

	.demands-intro {
		font-size: 1rem;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.demands-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.demand {
		border: 1px solid #d4d4d4;
		background: #f7f7f7;
	}

	.demand[open] {
		background: #fff;
		border-color: var(--word-ribbon-bg, #2b579a);
	}

	.demand summary {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.75rem 0.85rem;
		cursor: pointer;
		list-style: none;
		font-weight: 600;
		font-size: 0.95rem;
		line-height: 1.4;
		color: #1a1a1a;
	}

	.demand summary::-webkit-details-marker {
		display: none;
	}

	.demand summary:hover {
		background: #eef3fa;
	}

	.demand summary:focus-visible {
		outline: 2px solid var(--cta-primary, #0078d7);
		outline-offset: -2px;
	}

	.demand-num {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.6rem;
		height: 1.6rem;
		background: var(--word-ribbon-bg, #2b579a);
		color: #fff;
		font-size: 0.85rem;
	}

	.demand-title {
		flex: 1;
		padding-top: 0.1rem;
	}

	.demand-chevron {
		flex-shrink: 0;
		padding-top: 0.1rem;
		color: #666;
		transition: transform 0.15s ease;
	}

	.demand[open] .demand-chevron {
		transform: rotate(180deg);
	}

	.demand-detail {
		padding: 0 0.85rem 0.85rem 3.2rem;
		font-size: 0.9rem;
		line-height: 1.6;
		color: #444;
	}

	.demand-detail p + p {
		margin-top: 0.5rem;
	}

	/* CTA */
	.cta {
		margin-top: 1.5rem;
		padding-top: 1.25rem;
		border-top: 1px solid #ddd;
	}

	.cta-text {
		font-size: 1.15rem;
		font-weight: 700;
		line-height: 1.35;
		color: #1a1a1a;
		margin-bottom: 0.9rem;
	}

	.org-check {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		margin-bottom: 0.75rem;
		cursor: pointer;
		user-select: none;
	}

	.org-check input {
		width: 1rem;
		height: 1rem;
		accent-color: var(--cta-primary, #0078d7);
		cursor: pointer;
	}

	.cta-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.9rem 1rem;
		background: var(--cta-primary, #0078d7);
		border: none;
		border-radius: 4px;
		color: #fff;
		font-size: 1.1rem;
		font-weight: 700;
		transition: background-color 0.15s ease, transform 0.1s ease;
	}

	.cta-btn:hover {
		background: var(--cta-primary-hover, #005a9e);
		transform: translateY(-1px);
	}

	.cta-btn:active {
		transform: translateY(0);
	}

	.cta-arrow {
		transition: transform 0.15s ease;
	}

	.cta-btn:hover .cta-arrow {
		transform: translateX(3px);
	}

	.cta-footnote {
		margin-top: 0.85rem;
		font-size: 0.8rem;
		text-align: center;
	}

	.cta-footnote a {
		color: var(--word-ribbon-bg, #2b579a);
		text-decoration: underline;
	}
</style>
