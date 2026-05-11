<script lang="ts">
	let {
		individualCount = 45259,
		orgCount = 52
	}: {
		individualCount?: number;
		orgCount?: number;
	} = $props();

	// Format number with commas
	function formatNumber(n: number): string {
		return n.toLocaleString();
	}

	// Calculate fill percentage for visual bar (cap at 100%)
	const individualTarget = 50000;
	const orgTarget = 75;
	let individualPct = $derived(Math.min((individualCount / individualTarget) * 100, 100));
	let orgPct = $derived(Math.min((orgCount / orgTarget) * 100, 100));
</script>

<div class="counter">
	<h3 class="counter-heading">Signatures So Far</h3>

	<!-- Individuals -->
	<div class="counter-item">
		<div class="counter-label">
			<span class="counter-number">{formatNumber(individualCount)}</span>
			<span class="counter-desc">individuals</span>
		</div>
		<div class="counter-bar">
			<div class="counter-bar-fill counter-bar-fill--individual" style="width: {individualPct}%"></div>
		</div>
		<div class="counter-target">Goal: {formatNumber(individualTarget)}</div>
	</div>

	<!-- Organizations -->
	<div class="counter-item">
		<div class="counter-label">
			<span class="counter-number">{formatNumber(orgCount)}</span>
			<span class="counter-desc">organizations</span>
		</div>
		<div class="counter-bar">
			<div class="counter-bar-fill counter-bar-fill--org" style="width: {orgPct}%"></div>
		</div>
		<div class="counter-target">Goal: {formatNumber(orgTarget)}</div>
	</div>
</div>

<style>
	.counter {
		background: #f5f5f5;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 1rem;
	}

	.counter-heading {
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #444;
		margin-bottom: 0.75rem;
	}

	.counter-item {
		margin-bottom: 0.75rem;
	}

	.counter-item:last-child {
		margin-bottom: 0;
	}

	.counter-label {
		display: flex;
		align-items: baseline;
		gap: 0.35rem;
		margin-bottom: 0.3rem;
	}

	.counter-number {
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a1a;
		line-height: 1;
	}

	.counter-desc {
		font-size: 0.8rem;
		color: #666;
	}

	.counter-bar {
		width: 100%;
		height: 8px;
		background: #ddd;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 0.2rem;
	}

	.counter-bar-fill {
		height: 100%;
		border-radius: 4px;
		transition: width 0.6s ease;
	}

	.counter-bar-fill--individual {
		background: var(--cta-primary, #0078d7);
	}

	.counter-bar-fill--org {
		background: var(--cta-secondary, #107c10);
	}

	.counter-target {
		font-size: 0.7rem;
		color: #999;
		text-align: right;
	}
</style>
